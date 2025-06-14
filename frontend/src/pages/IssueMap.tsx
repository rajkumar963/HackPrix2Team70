
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Filter, Search, Locate, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { gsap } from 'gsap';
import IssueMapComponent from '@/components/IssueMap/Map';
import { toast } from "sonner";

const baseIssues = [
  { id: 1, title: 'Broken Streetlight', location: 'MG Road, Sector 15', lat: 28.5355, lng: 77.3910, status: 'pending', priority: 'medium', type: 'streetlight', reports: 5, timeAgo: '2 hours ago' },
  { id: 2, title: 'Garbage Overflow', location: 'City Mall Area', lat: 28.5356, lng: 77.3911, status: 'in-progress', priority: 'high', type: 'garbage', reports: 12, timeAgo: '5 hours ago' },
  { id: 3, title: 'Pothole', location: 'Station Road', lat: 28.5357, lng: 77.3912, status: 'resolved', priority: 'high', type: 'road', reports: 8, timeAgo: '1 day ago' },
  { id: 4, title: 'Water Leakage', location: 'Green Park', lat: 28.5358, lng: 77.3913, status: 'pending', priority: 'low', type: 'water', reports: 3, timeAgo: '3 hours ago' },
  { id: 5, title: 'Traffic Signal Issue', location: 'Central Square', lat: 28.5359, lng: 77.3914, status: 'in-progress', priority: 'high', type: 'traffic', reports: 15, timeAgo: '1 hour ago' }
];

const IssueMap = () => {
  const [issues, setIssues] = useState(baseIssues);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [centerLocation, setCenterLocation] = useState<[number, number]>();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(".anim-element", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
    
    const storedIssues = JSON.parse(localStorage.getItem('civic-reports') || '[]');
    if (storedIssues.length > 0) {
      const allIssuesMap = new Map();
      baseIssues.forEach(issue => allIssuesMap.set(issue.id, issue));
      storedIssues.forEach((issue: any) => allIssuesMap.set(issue.id, issue));
      setIssues(Array.from(allIssuesMap.values()).sort((a: any, b: any) => b.id - a.id));
    }
  }, []);

  const handleUseMyLocation = () => {
    toast.loading("Fetching your location...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenterLocation([latitude, longitude]);
          toast.success("Location found! Centering map.");
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

  const filters = [
    { id: 'all', label: 'All Issues', count: issues.length },
    { id: 'pending', label: 'Pending', count: issues.filter(i => i.status === 'pending').length },
    { id: 'in-progress', label: 'In Progress', count: issues.filter(i => i.status === 'in-progress').length },
    { id: 'resolved', label: 'Resolved', count: issues.filter(i => i.status === 'resolved').length }
  ];

  const issueTypes = [
    { id: 'streetlight', label: 'Streetlights', icon: '💡', color: 'bg-yellow-500' },
    { id: 'garbage', label: 'Garbage', icon: '🗑️', color: 'bg-red-500' },
    { id: 'road', label: 'Roads', icon: '🛣️', color: 'bg-gray-500' },
    { id: 'water', label: 'Water', icon: '💧', color: 'bg-blue-500' },
    { id: 'traffic', label: 'Traffic', icon: '🚦', color: 'bg-green-500' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-600';
      case 'in-progress': return 'bg-yellow-600';
      case 'pending': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const filteredIssues = issues.filter(issue => {
    const matchesFilter = selectedFilter === 'all' || issue.status === selectedFilter;
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-background to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between anim-element">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Issue Map</h1>
            <p className="text-muted-foreground">View and track civic issues on an interactive map</p>
          </div>
          <Button className="mt-4 md:mt-0">
            <Plus className="w-4 h-4 mr-2" />
            Report New Issue
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="anim-element">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search issues or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" onClick={handleUseMyLocation}>
                <Locate className="w-4 h-4 mr-2" />
                Use My Location
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label} ({filter.count})
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2 anim-element">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Interactive Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <IssueMapComponent issues={filteredIssues} centerOn={centerLocation} />
              </CardContent>
            </Card>
          </div>

          {/* Issue List */}
          <div className="anim-element">
            <Card>
              <CardHeader>
                <CardTitle>Nearby Issues</CardTitle>
              </CardHeader>
              <CardContent className="max-h-[500px] overflow-y-auto">
                <div className="space-y-4">
                  {filteredIssues.map((issue) => (
                    <div key={issue.id} className="bg-slate-50 rounded-lg p-4 border">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-foreground font-medium">{issue.title}</h3>
                        <Badge 
                          className={`${getStatusColor(issue.status)} text-white text-xs`}
                        >
                          {issue.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {issue.location}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <span className={`${getPriorityColor(issue.priority)} font-medium`}>
                            {issue.priority.toUpperCase()}
                          </span>
                          <span className="text-muted-foreground">{issue.reports} reports</span>
                        </div>
                        <span className="text-gray-500">{issue.timeAgo}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-sm">Map Legend</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {issueTypes.map((type) => (
                    <div key={type.id} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${type.color}`}></div>
                      <span className="text-muted-foreground text-sm">{type.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueMap;
