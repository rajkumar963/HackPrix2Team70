
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Issue } from '@/types/issue';

interface IssueListProps {
    issues: Issue[];
    setCenterLocation: (coords: [number, number]) => void;
    getStatusColor: (status: string) => string;
    getPriorityColor: (priority: string) => string;
    onDeleteIssue: (id: number) => void;
    searchTerm: string;
}

export const IssueList: React.FC<IssueListProps> = ({
  issues,
  setCenterLocation,
  getStatusColor,
  getPriorityColor,
  onDeleteIssue,
  searchTerm
}) => {
  // Helper to check for valid coordinates
  const isValidCoords = (issue: Issue) =>
    typeof issue.lat === 'number' && typeof issue.lng === 'number' &&
    !isNaN(issue.lat) && !isNaN(issue.lng);

  const handleItemClick = (issue: Issue) => {
    if (isValidCoords(issue)) {
      setCenterLocation([issue.lat, issue.lng]);
      toast.success(`Map centered on: ${issue.location}`);
    } else {
      toast.info("Map coordinates are not available for this issue.");
    }
  };
  
  const highlightMatch = (text: string, highlight: string): React.ReactNode => {
    if (!highlight.trim()) {
      return text;
    }
    const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedHighlight, 'gi');
    const matches = [...text.matchAll(regex)];

    if (matches.length === 0) {
      return text;
    }

    const result: React.ReactNode[] = [];
    let lastIndex = 0;

    matches.forEach((match, i) => {
      const startIndex = match.index!;
      const matchedText = match[0];

      if (startIndex > lastIndex) {
        result.push(text.substring(lastIndex, startIndex));
      }

      result.push(
        <mark key={i} className="bg-yellow-200 text-gray-900 px-0.5 rounded-sm">
          {matchedText}
        </mark>
      );

      lastIndex = startIndex + matchedText.length;
    });

    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }

    return <>{result}</>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nearby Issues</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[500px] overflow-y-auto">
        <div className="space-y-4">
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="bg-slate-50 rounded-lg p-4 border cursor-pointer hover:bg-slate-100 group relative"
              onClick={e => {
                // Do nothing if a button inside the card was clicked, as they have their own handlers
                if ((e.target as HTMLElement).closest('button')) return;
                handleItemClick(issue);
              }}
            >
              {/* Delete button (top-right corner) */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 text-gray-400 hover:text-red-600 transition-colors opacity-80 group-hover:opacity-100 z-10 delete-btn"
                type="button"
                tabIndex={0}
                aria-label="Delete Issue"
                onClick={e => {
                  e.stopPropagation();
                  onDeleteIssue(issue.id);
                }}
              >
                <Trash size={18} />
              </Button>
              {issue.imageUrl && (
                <img
                  src={issue.imageUrl}
                  alt={issue.title}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
              )}
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-foreground font-medium pr-2">{highlightMatch(issue.title, searchTerm)}</h3>
                <Badge className={`${getStatusColor(issue.status)} text-white text-xs whitespace-nowrap`}>
                  {issue.status.replace('-', ' ')}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-2 flex items-center gap-1">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                {/* LOCATION: Always a button, behavior depends on coords */}
                <button
                  type="button"
                  className={`underline font-medium focus:outline-none text-left ${
                    isValidCoords(issue)
                      ? 'text-blue-700 hover:text-blue-900 cursor-pointer'
                      : 'text-gray-500 cursor-help'
                  }`}
                  style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
                  onClick={e => {
                    e.stopPropagation();
                    handleItemClick(issue);
                  }}
                  title={isValidCoords(issue) ? `Center map on ${issue.location}` : 'No map coordinates available'}
                >
                  {highlightMatch(issue.location, searchTerm)}
                </button>
              </p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className={`${getPriorityColor(issue.priority)} font-medium`}>
                    {issue.priority.toUpperCase()}
                  </span>
                  <span className="text-muted-foreground">{issue.reports} reports</span>
                </div>
                <span className="text-gray-500">{issue.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
