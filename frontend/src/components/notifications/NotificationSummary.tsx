
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface NotificationSummaryProps {
  unreadCount: number;
  totalCount: number;
  rewardsCount: number;
  updatesCount: number;
  summaryRef: React.RefObject<HTMLDivElement>;
}

export const NotificationSummary = ({ 
  unreadCount, 
  totalCount, 
  rewardsCount, 
  updatesCount, 
  summaryRef 
}: NotificationSummaryProps) => {
  return (
    <Card ref={summaryRef} className="bg-gradient-to-r from-blue-600 to-purple-600 border-none">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-white">{unreadCount}</p>
            <p className="text-blue-100 text-sm">Unread</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">{totalCount}</p>
            <p className="text-blue-100 text-sm">Total</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">{rewardsCount}</p>
            <p className="text-blue-100 text-sm">Rewards</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">{updatesCount}</p>
            <p className="text-blue-100 text-sm">Updates</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
