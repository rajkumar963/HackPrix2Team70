
import { useState, useEffect } from 'react';
import { toast } from "sonner";
import { Issue } from '@/types/issue';
import { baseIssues as rawBaseIssues } from '@/data/issue-map-data';

// Data patch to add missing coordinates for "Broken Streetlight"
const baseIssues = rawBaseIssues.map(issue => {
  if (issue.id === 5 && issue.title === 'Broken Streetlight' && issue.lat === null) {
    return { ...issue, lat: 28.5678, lng: 77.3260 };
  }
  return issue;
});


export const useIssues = () => {
  const [issues, setIssues] = useState<Issue[]>(baseIssues);

  useEffect(() => {
    const storedIssues: Issue[] = JSON.parse(localStorage.getItem('civic-reports') || '[]');
    if (storedIssues.length > 0) {
      const allIssuesMap = new Map<number, Issue>();
      baseIssues.forEach(issue => allIssuesMap.set(issue.id, issue));
      storedIssues.forEach((issue) => allIssuesMap.set(issue.id, issue));
      setIssues(Array.from(allIssuesMap.values()).sort((a, b) => b.id - a.id));
    }
  }, []);

  const handleDeleteIssue = (id: number) => {
    setIssues(prev => {
      const updated = prev.filter(issue => issue.id !== id);
      const dynamicIssues = updated.filter(issue => !baseIssues.some(b => b.id === issue.id));
      localStorage.setItem('civic-reports', JSON.stringify(dynamicIssues));
      return updated;
    });
    toast.success('Issue deleted!');
  };

  return { issues, handleDeleteIssue };
};
