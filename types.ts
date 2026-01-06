
export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  location: string;
  tags: string[];
  priceRange: string;
}

export interface Guide {
  id: string;
  name: string;
  expertise: string[];
  languages: string[];
  rating: number;
  reviewsCount: number;
  image: string;
  availability: boolean;
  pricePerDay: number;
}

export interface Booking {
  id: string;
  type: 'hotel' | 'guide' | 'transport';
  title: string;
  date: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  price: number;
}

export interface ItineraryItem {
  id: string;
  day: number;
  activity: string;
  location: string;
  time: string;
}

export enum AppRoute {
  HOME = '/',
  DESTINATIONS = '/destinations',
  GUIDES = '/guides',
  BOOKINGS = '/bookings',
  PROFILE = '/profile',
  ADMIN = '/admin',
  SOS = '/sos',
  PLANNER = '/planner'
}
