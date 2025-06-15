
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const workflowSteps = [
    { step: '1', title: 'Spot Issue', description: 'Identify civic problems in your area', color: 'bg-blue-500' },
    { step: '2', title: 'Report & Upload', description: 'Take photo and submit report with location', color: 'bg-green-500' },
    { step: '3', title: 'Community Support', description: 'Get upvotes and comments from neighbors', color: 'bg-indigo-500' },
    { step: '4', title: 'Track Progress', description: 'Monitor resolution status and updates', color: 'bg-orange-500' }
];

export const Workflow = () => {
    return (
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
    )
}
