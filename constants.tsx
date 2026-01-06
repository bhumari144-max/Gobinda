
import React from 'react';
import { Destination, Guide } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Everest Base Camp',
    description: 'The ultimate trek for adventure seekers, offering breathtaking views of the world\'s highest peak.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1470&auto=format&fit=crop',
    rating: 4.9,
    location: 'Solu-Khumbu',
    tags: ['Adventure', 'Trekking'],
    priceRange: '$$$'
  },
  {
    id: '2',
    name: 'Kathmandu Durbar Square',
    description: 'A UNESCO World Heritage site showcasing ancient Newari architecture and rich history.',
    image: 'https://images.unsplash.com/photo-1543363136-3fdb62e11be5?q=80&w=1470&auto=format&fit=crop',
    rating: 4.7,
    location: 'Kathmandu',
    tags: ['Culture', 'History'],
    priceRange: '$'
  },
  {
    id: '3',
    name: 'Phewa Lake',
    description: 'The heartbeat of Pokhara, reflecting the majestic Annapurna range in its serene waters.',
    image: 'https://images.unsplash.com/photo-1583226943141-863777a7b8e1?q=80&w=1471&auto=format&fit=crop',
    rating: 4.8,
    location: 'Pokhara',
    tags: ['Nature', 'Relaxation'],
    priceRange: '$$'
  },
  {
    id: '4',
    name: 'Lumbini Garden',
    description: 'The sacred birthplace of Lord Buddha, a sanctuary of peace and spirituality.',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1328&auto=format&fit=crop',
    rating: 4.6,
    location: 'Rupandehi',
    tags: ['Spirituality', 'Pilgrimage'],
    priceRange: '$'
  }
];

export const GUIDES: Guide[] = [
  {
    id: 'g1',
    name: 'Pasang Sherpa',
    expertise: ['High Altitude Trekking', 'Mountaineering'],
    languages: ['English', 'Nepali', 'Sherpa'],
    rating: 5.0,
    reviewsCount: 124,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop',
    availability: true,
    pricePerDay: 45
  },
  {
    id: 'g2',
    name: 'Sunita Rajbahak',
    expertise: ['Cultural Tours', 'Food Tours'],
    languages: ['English', 'Nepali', 'Newari', 'Japanese'],
    rating: 4.8,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1502&auto=format&fit=crop',
    availability: true,
    pricePerDay: 30
  }
];
