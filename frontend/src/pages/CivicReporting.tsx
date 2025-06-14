import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { MapPin, Upload } from 'lucide-react';
import { gsap } from "gsap";
import { toast } from "sonner";

const CivicReporting = () => {
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [priority, setPriority] = useState('medium');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(".anim-element", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!issueType || !description || !location) {
      toast.error("Please fill all required fields: Issue Type, Description, and Location.");
      return;
    }

    const newIssue = {
      id: Date.now(),
      title: issueType.charAt(0).toUpperCase() + issueType.slice(1).replace(/([A-Z])/g, ' $1').trim(),
      location: location,
      // Add random offset to base coordinates for demonstration
      lat: 28.5359 + (Math.random() - 0.5) * 0.02,
      lng: 77.3914 + (Math.random() - 0.5) * 0.02,
      status: 'pending',
      priority: priority,
      type: issueType,
      reports: 1,
      timeAgo: 'Just now',
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

    setTimeout(() => {
      navigate('/issue-map');
    }, 1500);
  };

  const recentReports = [
    {
      id: 1,
      title: 'Broken Streetlight',
      location: 'MG Road, Sector 15',
      description: 'Streetlight has been non-functional for 3 days causing safety concerns.',
      status: 'In Progress',
      priority: 'medium',
      likes: 24,
      comments: 8,
      timeAgo: '2 hours ago',
      icon: '⚠️'
    },
    {
      id: 2,
      title: 'Garbage Overflow',
      location: 'City Mall Area',
      description: 'Garbage bins overflowing near the main entrance of City Mall.',
      status: 'Resolved',
      priority: 'high',
      likes: 18,
      comments: 5,
      timeAgo: '5 hours ago',
      icon: '🗑️'
    },
    {
      id: 3,
      title: 'Pothole',
      location: 'Station Road',
      description: 'Large pothole causing traffic disruption and vehicle damage.',
      status: 'Pending',
      priority: 'high',
      likes: 32,
      comments: 12,
      timeAgo: '1 day ago',
      icon: '🚧'
    }
  ];

  const stats = [
    { title: '1,247', subtitle: 'Total Reports', icon: '📊', color: 'bg-blue-500' },
    { title: '892', subtitle: 'Resolved', icon: '✅', color: 'bg-green-500' },
    { title: '234', subtitle: 'In Progress', icon: '⏳', color: 'bg-yellow-500' },
    { title: '5,432', subtitle: 'Active Users', icon: '👥', color: 'bg-purple-500' }
  ];

  const workflowSteps = [
    { step: '1', title: 'Spot Issue', description: 'Identify civic problems in your area', color: 'bg-blue-500' },
    { step: '2', title: 'Report & Upload', description: 'Take photo and submit report with location', color: 'bg-green-500' },
    { step: '3', title: 'Community Support', description: 'Get upvotes and comments from neighbors', color: 'bg-indigo-500' },
    { step: '4', title: 'Track Progress', description: 'Monitor resolution status and updates', color: 'bg-orange-500' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-green-600';
      case 'In Progress': return 'bg-yellow-600';
      case 'Pending': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-background to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 anim-element">
          <h1 className="text-4xl font-bold text-foreground mb-2">Civic Reporting</h1>
          <p className="text-muted-foreground">Report civic issues in your community and track their resolution.</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Report New Issue Form */}
          <Card className="anim-element">
            <CardHeader>
              <CardTitle className="text-xl">Report New Issue</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                {/* Issue Type */}
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

                {/* Description */}
                <div>
                  <Label className="mb-2 block">Description</Label>
                  <Textarea
                    placeholder="Describe the issue in detail..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                {/* Location */}
                <div>
                  <Label className="mb-2 block">Location</Label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter location or use GPS"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <Button variant="outline" size="icon">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Upload Image */}
                <div>
                  <Label className="mb-2 block">Upload Image</Label>
                  <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
                  <Label htmlFor="file-upload" className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-slate-50 hover:bg-slate-100 cursor-pointer block">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-foreground mb-2">Click to upload or drag and drop</p>
                    <p className="text-muted-foreground text-sm">PNG, JPG up to 10MB</p>
                  </Label>
                  {selectedFile && <p className="text-sm text-muted-foreground mt-2">Selected file: {selectedFile.name}</p>}
                </div>

                {/* Priority Level */}
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

                {/* Submit Button */}
                <Button type="submit" className="w-full font-semibold py-3">
                  Submit Report
                </Button>
              </CardContent>
            </form>
          </Card>

          {/* Recent Reports */}
          <Card className="anim-element">
            <CardHeader>
              <CardTitle className="text-xl">Recent Reports</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="bg-slate-50 rounded-lg p-4 border">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{report.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-foreground font-semibold">{report.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)} text-white`}>
                          {report.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{report.location}</p>
                      <p className="text-foreground text-sm mb-3">{report.description}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span>👍 {report.likes}</span>
                          <span>💬 {report.comments}</span>
                        </div>
                        <span>{report.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Reports
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 anim-element">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl text-white">{stat.icon}</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-1">{stat.title}</h3>
                <p className="text-muted-foreground">{stat.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How Civic Reporting Works */}
        <Card className="anim-element">
          <CardHeader>
            <CardTitle className="text-2xl text-center">How Civic Reporting Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CivicReporting;
