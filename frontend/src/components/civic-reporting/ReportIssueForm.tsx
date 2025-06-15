import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { MapPin, Upload } from 'lucide-react';
import { toast } from "sonner";

// Removed: Mapbox import, geocoding, and live map preview

export const ReportIssueForm = () => {
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [priority, setPriority] = useState('medium');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const navigate = useNavigate();
  
  const handleUseMyLocation = () => {
    toast.loading("Fetching your location...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            if (!response.ok) throw new Error('Failed to fetch address');
            const data = await response.json();
            if (data && data.display_name) {
              setLocation(data.display_name);
              toast.success("Location found and filled in!");
            } else {
              toast.error("Could not determine address from your location.");
            }
          } catch (error) {
            console.error("Reverse geocoding error:", error);
            toast.error("Failed to fetch address data.");
          }
        },
        (error) => {
          console.error("Error getting location: ", error);
          toast.error("Could not get your location. Please check permissions.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!issueType || !description || !location) {
      toast.error("Please fill all required fields: Issue Type, Description, and Location.");
      return;
    }
    
    toast.loading("Finding location coordinates...");
    let newLat: number | null = null;
    let newLng: number | null = null;

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`);
      if (!response.ok) throw new Error('Failed to geocode');
      const data = await response.json();

      if (data && data.length > 0) {
        newLat = parseFloat(data[0].lat);
        newLng = parseFloat(data[0].lon);
        toast.success("Location found on map!");
      } else {
        toast.warning("Could not find coordinates for the location. Report will be submitted without a map pin.");
      }
    } catch (error) {
      console.error("Geocoding error:", error);
      toast.error("Failed to fetch location data. Submitting without a map pin.");
    }

    const newIssue = {
      id: Date.now(),
      title: issueType.charAt(0).toUpperCase() + issueType.slice(1).replace(/([A-Z])/g, ' $1').trim(),
      location: location,
      lat: newLat,
      lng: newLng,
      status: 'pending',
      priority: priority,
      type: issueType,
      reports: 1,
      timeAgo: 'Just now',
      imageUrl: imageUrl,
    };

    const storedIssues = JSON.parse(localStorage.getItem('civic-reports') || '[]');
    const updatedIssues = [...storedIssues, newIssue];
    localStorage.setItem('civic-reports', JSON.stringify(updatedIssues));

    toast.success("Report submitted successfully! Redirecting to map...");

    setIssueType('');
    setDescription('');
    setLocation('');
    setPriority('medium');
    setSelectedFile(null);
    setImageUrl(null);

    setTimeout(() => {
      const centerCoordinates = (newLat && newLng) ? [newLat, newLng] : undefined;
      navigate('/issue-map', { state: { centerOn: centerCoordinates } });
    }, 1500);
  };

  return (
    <Card className="anim-element">
      <CardHeader>
        <CardTitle className="text-xl">Report New Issue</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div>
            <Label className="mb-2 block">Issue Type</Label>
            <Select value={issueType} onValueChange={setIssueType}>
              <SelectTrigger>
                <SelectValue placeholder="Select Issue type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="streetlight">Broken Streetlight</SelectItem>
                <SelectItem value="garbage">Garbage Overflow</SelectItem>
                <SelectItem value="pothole">Pothole</SelectItem>
                <SelectItem value="water">Water Issue</SelectItem>
                <SelectItem value="traffic">Traffic Problem</SelectItem>
                <SelectItem value="road">Road Damage</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2 block">Description</Label>
            <Textarea
              placeholder="Describe the issue in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <div>
            <Label className="mb-2 block">Location</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Enter address or city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Button variant="outline" size="icon" type="button" title="Use my current location" onClick={handleUseMyLocation}>
                <MapPin className="h-4 w-4" />
              </Button>
            </div>
            {/* No geocoding, no map, no Mapbox */}
          </div>
          <div>
            <Label className="mb-2 block">Upload Image</Label>
            <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
            <Label htmlFor="file-upload" className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-slate-50 hover:bg-slate-100 cursor-pointer block">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-foreground mb-2">Click to upload or drag and drop</p>
              <p className="text-muted-foreground text-sm">PNG, JPG up to 10MB</p>
            </Label>
            {selectedFile && <p className="text-sm text-muted-foreground mt-2">Selected file: {selectedFile.name}</p>}
            {imageUrl && (
              <div className="mt-4">
                <img src={imageUrl} alt="Preview" className="rounded-lg max-h-40 w-full object-cover" />
              </div>
            )}
          </div>
          <div>
            <Label className="mb-3 block">Priority Level</Label>
            <RadioGroup value={priority} onValueChange={setPriority} className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low" className="text-green-600 font-medium">Low</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium" className="text-yellow-600 font-medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high" className="text-red-600 font-medium">High</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full font-semibold py-3">
            Submit Report
          </Button>
        </CardContent>
      </form>
    </Card>
  )
}
