
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface NotificationFiltersProps {
  filters: FilterOption[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
  filtersRef: React.RefObject<HTMLDivElement>;
}

export const NotificationFilters = ({ 
  filters, 
  activeFilter, 
  onFilterChange, 
  filtersRef 
}: NotificationFiltersProps) => {
  return (
    <Card ref={filtersRef} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filterOption) => (
            <Button
              key={filterOption.id}
              variant={activeFilter === filterOption.id ? 'default' : 'outline'}
              onClick={() => onFilterChange(filterOption.id)}
              className={
                activeFilter === filterOption.id
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
              }
            >
              {filterOption.label} ({filterOption.count})
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
