
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import LoginModal from '@/components/auth/LoginModal';

interface IssueMapHeaderProps {
  onReportIssueClick: () => void;
  showLoginModal: boolean;
}

export const IssueMapHeader: React.FC<IssueMapHeaderProps> = ({ onReportIssueClick, showLoginModal }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between anim-element">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Issue Map</h1>
        <p className="text-muted-foreground">View and track civic issues on an interactive map</p>
      </div>
      <div>
        <LoginModal role="user">
          <span hidden={!showLoginModal}></span>
        </LoginModal>
        <Button
          className="mt-4 md:mt-0"
          type="button"
          onClick={onReportIssueClick}
        >
          <Plus className="w-4 h-4 mr-2" />
          Report New Issue
        </Button>
      </div>
    </div>
  );
};
