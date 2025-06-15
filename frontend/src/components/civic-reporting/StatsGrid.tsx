
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
    { title: '1,247', subtitle: 'Total Reports', icon: '📊', color: 'bg-blue-500' },
    { title: '892', subtitle: 'Resolved', icon: '✅', color: 'bg-green-500' },
    { title: '234', subtitle: 'In Progress', icon: '⏳', color: 'bg-yellow-500' },
    { title: '5,432', subtitle: 'Active Users', icon: '👥', color: 'bg-purple-500' }
];

export const StatsGrid = () => {
    return (
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
    )
}
