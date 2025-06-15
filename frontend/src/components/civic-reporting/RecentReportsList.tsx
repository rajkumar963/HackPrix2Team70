
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-green-600';
      case 'In Progress': return 'bg-yellow-600';
      case 'Pending': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
};

export const RecentReportsList = () => {
    return (
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
    )
}
