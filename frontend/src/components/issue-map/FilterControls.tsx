
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Locate } from 'lucide-react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Issue } from '@/types/issue';

interface Filter {
    id: string;
    label: string;
    count: number;
}

interface FilterControlsProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    isSearchActive: boolean;
    setIsSearchActive: (isActive: boolean) => void;
    suggestionIssues: Issue[];
    setCenterLocation: (coords: [number, number]) => void;
    handleUseMyLocation: () => void;
    filters: Filter[];
    selectedFilter: string;
    setSelectedFilter: (filter: string) => void;
    searchContainerRef: React.RefObject<HTMLDivElement>;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
    searchTerm,
    setSearchTerm,
    isSearchActive,
    setIsSearchActive,
    suggestionIssues,
    setCenterLocation,
    handleUseMyLocation,
    filters,
    selectedFilter,
    setSelectedFilter,
    searchContainerRef
}) => {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div ref={searchContainerRef} className="flex-1 relative">
                <Command className="overflow-visible bg-transparent">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <CommandInput
                      placeholder="Search issues or locations..."
                      value={searchTerm}
                      onValueChange={setSearchTerm}
                      onFocus={() => setIsSearchActive(true)}
                      className="pl-10"
                    />
                  </div>
                  {isSearchActive && searchTerm.length > 0 && (
                    <CommandList className="absolute top-full mt-2 w-full z-10 bg-background border rounded-md shadow-lg">
                      <CommandEmpty>No results found.</CommandEmpty>
                      {suggestionIssues.length > 0 && (
                        <CommandGroup heading="Suggestions">
                          {suggestionIssues.map((issue) => (
                            <CommandItem
                              key={issue.id}
                              value={`${issue.title} ${issue.location}`}
                              onSelect={() => {
                                setSearchTerm(issue.title);
                                if (issue.lat && issue.lng) {
                                  setCenterLocation([issue.lat, issue.lng]);
                                }
                                setIsSearchActive(false);
                              }}
                            >
                              <span>{issue.title}</span>
                              <span className="text-xs text-muted-foreground ml-2">{issue.location}</span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      )}
                    </CommandList>
                  )}
                </Command>
              </div>
              <Button variant="outline" onClick={handleUseMyLocation}>
                <Locate className="w-4 h-4 mr-2" />
                Use My Location
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label} ({filter.count})
                </Button>
              ))}
            </div>
        </>
    )
}
