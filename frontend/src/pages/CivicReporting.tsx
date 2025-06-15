
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ReportIssueForm } from '@/components/civic-reporting/ReportIssueForm';
import { RecentReportsList } from '@/components/civic-reporting/RecentReportsList';
import { StatsGrid } from '@/components/civic-reporting/StatsGrid';
import { Workflow } from '@/components/civic-reporting/Workflow';

const CivicReporting = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(".anim-element", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

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
          <ReportIssueForm />
          <RecentReportsList />
        </div>

        {/* Statistics Cards */}
        <StatsGrid />

        {/* How Civic Reporting Works */}
        <Workflow />
      </div>
    </div>
  );
};

export default CivicReporting;
