
export interface Issue {
  id: number;
  title: string;
  location: string;
  lat: number;
  lng: number;
  status: string;
  priority: string;
  type: string;
  reports: number;
  timeAgo: string;
  imageUrl?: string;
}
