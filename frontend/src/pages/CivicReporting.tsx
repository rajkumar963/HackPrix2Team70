
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { MapPin, Upload, AlertTriangle, Trash2, Construction, Users } from 'lucide-react';

const CivicReporting = () => {
  const [issueType, setIssueType] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [priority, setPriority] = useState('medium');

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
    { step: '2', title: 'Report & Upload', description: 'Take photo and submit report with location', color: 'bg-purple-500' },
    { step: '3', title: 'Community Support', description: 'Get upvotes and comments from neighbors', color: 'bg-green-500' },
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Civic Reporting</h1>
          <p className="text-purple-200">Report civic issues in your community and track their resolution.</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Report New Issue Form */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl">Report New Issue</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Issue Type */}
              <div>
                <Label className="text-gray-300 mb-2 block">Issue Type</Label>
                <Select value={issueType} onValueChange={setIssueType}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select Issue type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="streetlight">Broken Streetlight</SelectItem>
                    <SelectItem value="garbage">Garbage Overflow</SelectItem>
                    <SelectItem value="pothole">Pothole</SelectItem>
                    <SelectItem value="water">Water Issue</SelectItem>
                    <SelectItem value="traffic">Traffic Problem</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description */}
              <div>
                <Label className="text-gray-300 mb-2 block">Description</Label>
                <Textarea
                  placeholder="Describe the issue in detail..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
                />
              </div>

              {/* Location */}
              <div>
                <Label className="text-gray-300 mb-2 block">Location</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter location or use GPS"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Button variant="outline" size="icon" className="bg-blue-600 border-blue-500 text-white hover:bg-blue-700">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Upload Image */}
              <div>
                <Label className="text-gray-300 mb-2 block">Upload Image</Label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center bg-gray-700/30">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm">PNG, JPG up to 10MB</p>
                </div>
              </div>

              {/* Priority Level */}
              <div>
                <Label className="text-gray-300 mb-3 block">Priority Level</Label>
                <RadioGroup value={priority} onValueChange={setPriority} className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" className="border-green-500 text-green-500" />
                    <Label htmlFor="low" className="text-green-400">Low</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" className="border-yellow-500 text-yellow-500" />
                    <Label htmlFor="medium" className="text-yellow-400">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" className="border-red-500 text-red-500" />
                    <Label htmlFor="high" className="text-red-400">High</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3">
                Submit Report
              </Button>
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl">Recent Reports</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{report.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold">{report.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)} text-white`}>
                          {report.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{report.location}</p>
                      <p className="text-gray-300 text-sm mb-3">{report.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
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
              <Button variant="outline" className="w-full bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700">
                View All Reports
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.title}</h3>
                <p className="text-gray-400">{stat.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How Civic Reporting Works */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">How Civic Reporting Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
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
