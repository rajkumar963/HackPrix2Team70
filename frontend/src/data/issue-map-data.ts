
import { Issue } from '@/types/issue';

export const baseIssues: Issue[] = [
  { id: 1, title: 'Broken Streetlight', location: 'Near DLF Mall, Noida', lat: 28.5676, lng: 77.3259, status: 'pending', priority: 'medium', type: 'streetlight', reports: 5, timeAgo: '2 hours ago', imageUrl: 'https://images.unsplash.com/photo-1588821321528-9d41b6353276?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'Garbage Overflow', location: 'Noida Sector 18, Atta Market', lat: 28.5706, lng: 77.3261, status: 'pending', priority: 'high', type: 'garbage', reports: 12, timeAgo: '5 hours ago', imageUrl: 'https://images.unsplash.com/photo-1596704232997-03315a43929a?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Large Pothole', location: 'Film City, Noida', lat: 28.5861, lng: 77.3155, status: 'resolved', priority: 'high', type: 'road', reports: 8, timeAgo: '1 day ago', imageUrl: 'https://images.unsplash.com/photo-1515266591878-72d71b78335a?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Water Pipe Leakage', location: 'Near Botanical Garden Metro', lat: 28.5652, lng: 77.3541, status: 'pending', priority: 'low', type: 'water', reports: 3, timeAgo: '3 hours ago', imageUrl: 'https://images.unsplash.com/photo-1505672537424-9480ee265df1?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, title: 'Faulty Traffic Signal', location: 'Noida-Greater Noida Expy', lat: 28.5133, lng: 77.3917, status: 'in-progress', priority: 'high', type: 'traffic', reports: 15, timeAgo: '1 hour ago', imageUrl: 'https://images.unsplash.com/photo-1579965348332-a59f1c4d2?q=80&w=1974&auto=format&fit=crop' }
];

export const issueTypes = [
  { id: 'streetlight', label: 'Streetlights', icon: '💡', color: 'bg-yellow-500' },
  { id: 'garbage', label: 'Garbage', icon: '🗑️', color: 'bg-red-500' },
  { id: 'road', label: 'Roads', icon: '🛣️', color: 'bg-gray-500' },
  { id: 'water', label: 'Water', icon: '💧', color: 'bg-blue-500' },
  { id: 'traffic', label: 'Traffic', icon: '🚦', color: 'bg-green-500' }
];
