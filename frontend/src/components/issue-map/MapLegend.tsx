
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface IssueType {
    id: string;
    label: string;
    icon: string;
    color: string;
}

interface MapLegendProps {
    issueTypes: IssueType[];
}

export const MapLegend: React.FC<MapLegendProps> = ({ issueTypes }) => {
    return (
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
    );
}
