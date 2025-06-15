import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { toast } from "sonner";
import { useAuth } from '@/context/AuthContext';

import { issueTypes } from '@/data/issue-map-data';
import { getStatusColor, getPriorityColor } from '@/utils/issue-map-utils';
import { useIssues } from '@/hooks/useIssues';

import IssueMapComponent from '@/components/IssueMap/Map';
import { FilterControls } from '@/components/issue-map/FilterControls';
import { IssueList } from '@/components/issue-map/IssueList';
import { MapLegend } from '@/components/issue-map/MapLegend';
import LoginModal from '@/components/auth/LoginModal';
import { IssueMapHeader } from '@/components/issue-map/IssueMapHeader';

const IssueMap = () => {
  const { issues, handleDeleteIssue } = useIssues();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [centerLocation, setCenterLocation] = useState<[number, number]>();
  const containerRef = useRef(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const { user } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(".anim-element", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
    
    const newIssueLocation = location.state?.centerOn as [number, number] | undefined;
    if (newIssueLocation) {
      setCenterLocation(newIssueLocation);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUseMyLocation = () => {
    toast.loading("Fetching your location...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenterLocation([latitude, longitude]);
          toast.success("Location found! Centering map.");
        },
        (error) => {
          console.error("Error getting location: ", error);
          toast.error("Could not get your location. Please check permissions.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  };

  const handleReportIssueClick = () => {
    if (!user) {
      setShowLoginModal(true);
      toast.error("You need to login as User or Admin before posting a new issue.");
      return;
    }
    navigate('/civic-reporting');
  };

  const filters = [
    { id: 'all', label: 'All Issues', count: issues.length },
    { id: 'pending', label: 'Pending', count: issues.filter(i => i.status === 'pending').length },
    { id: 'in-progress', label: 'In Progress', count: issues.filter(i => i.status === 'in-progress').length },
    { id: 'resolved', label: 'Resolved', count: issues.filter(i => i.status === 'resolved').length }
  ];

  const filteredIssues = issues.filter(issue => {
    const matchesFilter = selectedFilter === 'all' || issue.status === selectedFilter;
    const matchesSearch = issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         issue.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-background to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <IssueMapHeader 
          onReportIssueClick={handleReportIssueClick}
          showLoginModal={showLoginModal}
        />

        <Card className="anim-element">
          <CardContent className="p-6">
            <FilterControls
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                isSearchActive={isSearchActive}
                setIsSearchActive={setIsSearchActive}
                suggestionIssues={filteredIssues}
                setCenterLocation={setCenterLocation}
                handleUseMyLocation={handleUseMyLocation}
                filters={filters}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                searchContainerRef={searchContainerRef}
            />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 anim-element">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Interactive Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <IssueMapComponent issues={filteredIssues} centerOn={centerLocation} />
              </CardContent>
            </Card>
          </div>

          <div className="anim-element">
            <IssueList 
              issues={filteredIssues}
              setCenterLocation={setCenterLocation}
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
              onDeleteIssue={handleDeleteIssue}
              searchTerm={searchTerm}
            />
            
            <MapLegend issueTypes={issueTypes} />
          </div>
        </div>
      </div>

      {showLoginModal && (
        <div>
          <LoginModal role="user">
            <span />
          </LoginModal>
        </div>
      )}
    </div>
  );
};

export default IssueMap;
