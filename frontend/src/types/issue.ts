
export interface Issue {
  id: number;
  title: string;
  location: string;
<<<<<<< HEAD
  lat: number;
  lng: number;
=======
  lat: number | null;
  lng: number | null;
>>>>>>> 32a41b0bf7b1bd0e5ffcf0073c25cdf21f9c2402
  status: string;
  priority: string;
  type: string;
  reports: number;
  timeAgo: string;
  imageUrl?: string;
}
