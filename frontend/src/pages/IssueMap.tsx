
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Filter, Search, Navigation, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';

const IssueMap = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const issues = [
    { id: 1, title: 'Broken Streetlight', location: 'MG Road, Sector 15', lat: 28.5355, lng: 77.3910, status: 'pending', priority: 'medium', type: 'streetlight', reports: 5, timeAgo: '2 hours ago' },
    { id: 2, title: 'Garbage Overflow', location: 'City Mall Area', lat: 28.5356, lng: 77.3911, status: 'in-progress', priority: 'high', type: 'garbage', reports: 12, timeAgo: '5 hours ago' },
    { id: 3, title: 'Pothole', location: 'Station Road', lat: 28.5357, lng: 77.3912, status: 'resolved', priority: 'high', type: 'road', reports: 8, timeAgo: '1 day ago' },
    { id: 4, title: 'Water Leakage', location: 'Green Park', lat: 28.5358, lng: 77.3913, status: 'pending', priority: 'low', type: 'water', reports: 3, timeAgo: '3 hours ago' },
    { id: 5, title: 'Traffic Signal Issue', location: 'Central Square', lat: 28.5359, lng: 77.3914, status: 'in-progress', priority: 'high', type: 'traffic', reports: 15, timeAgo: '1 hour ago' }
  ];

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
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const filteredIssues = issues.filter(issue => {
    const matchesFilter = selectedFilter === 'all' || issue.status === selectedFilter;
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Issue Map</h1>
            <p className="text-purple-200">View and track civic issues on an interactive map</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Report New Issue
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search issues or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <Button variant="outline" className="bg-gray-700 border-gray-600 text-gray-300">
                <Navigation className="w-4 h-4 mr-2" />
                Use My Location
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={
                    selectedFilter === filter.id
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                  }
                >
                  {filter.label} ({filter.count})
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Interactive Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-700/50 rounded-lg h-[500px] flex items-center justify-center relative overflow-hidden">
                  {/* Simulated Map Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-white text-xl font-semibold mb-2">Interactive Map View</h3>
                    <p className="text-gray-400 mb-4">Map integration would display real locations here</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {issueTypes.map((type) => (
                        <div key={type.id} className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                          <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
                          <span className="text-white text-sm">{type.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Simulated Map Markers */}
                  <div className="absolute top-1/4 left-1/4 bg-red-500 w-4 h-4 rounded-full border-2 border-white"></div>
                  <div className="absolute top-1/3 right-1/4 bg-yellow-500 w-4 h-4 rounded-full border-2 border-white"></div>
                  <div className="absolute bottom-1/3 left-1/3 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                  <div className="absolute top-1/2 right-1/3 bg-blue-500 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Issue List */}
          <div>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Nearby Issues</CardTitle>
              </CardHeader>
              <CardContent className="max-h-[500px] overflow-y-auto">
                <div className="space-y-4">
                  {filteredIssues.map((issue) => (
                    <div key={issue.id} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-medium">{issue.title}</h3>
                        <Badge 
                          className={`${getStatusColor(issue.status)} text-white text-xs`}
                        >
                          {issue.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm mb-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {issue.location}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <span className={`${getPriorityColor(issue.priority)} font-medium`}>
                            {issue.priority.toUpperCase()}
                          </span>
                          <span className="text-gray-400">{issue.reports} reports</span>
                        </div>
                        <span className="text-gray-500">{issue.timeAgo}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mt-4">
              <CardHeader>
                <CardTitle className="text-white text-sm">Map Legend</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {issueTypes.map((type) => (
                    <div key={type.id} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${type.color}`}></div>
                      <span className="text-gray-300 text-sm">{type.label}</span>
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
