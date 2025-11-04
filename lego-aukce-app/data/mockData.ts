// 🎲 Mock data - falešná data pro vizualizaci
// Později nahradíme skutečnou databází

import { User, Auction, Category, Bid } from '@/types';

// Falešní uživatelé
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Jan Novák',
    email: 'jan.novak@email.cz',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jan',
    bio: 'Sběratel LEGO Star Wars již 10 let',
    rating: 4.8,
    memberSince: '2020-01-15',
  },
  {
    id: '2',
    name: 'Petra Svobodová',
    email: 'petra.s@email.cz',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Petra',
    bio: 'Milovnice LEGO Architecture a City',
    rating: 4.9,
    memberSince: '2019-06-20',
  },
  {
    id: '3',
    name: 'Tomáš Dvořák',
    email: 'tomas.d@email.cz',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tomas',
    bio: 'Prodávám svou sbírku Technic setů',
    rating: 4.5,
    memberSince: '2021-03-10',
  },
];

// Kategorie LEGO
export const mockCategories: Category[] = [
  { id: 'star-wars', name: 'Star Wars', slug: 'star-wars', icon: '🚀' },
  { id: 'technic', name: 'Technic', slug: 'technic', icon: '⚙️' },
  { id: 'city', name: 'City', slug: 'city', icon: '🏙️' },
  { id: 'creator', name: 'Creator', slug: 'creator', icon: '🎨' },
  { id: 'architecture', name: 'Architecture', slug: 'architecture', icon: '🏛️' },
  { id: 'ninjago', name: 'Ninjago', slug: 'ninjago', icon: '🥷' },
  { id: 'friends', name: 'Friends', slug: 'friends', icon: '💕' },
  { id: 'harry-potter', name: 'Harry Potter', slug: 'harry-potter', icon: '⚡' },
];

// Falešné aukce
export const mockAuctions: Auction[] = [
  {
    id: '1',
    title: 'LEGO Star Wars Millennium Falcon 75192',
    description: 'Kompletní set v originální krabici. Nerozbalený, nový stav. Jeden z největších LEGO setů vůbec s více než 7500 díly. Obsahuje minifigurky Han Solo, Chewbacca, Princess Leia, C-3PO a další.',
    images: [
      'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=800',
      'https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=800',
    ],
    startingPrice: 15000,
    currentPrice: 18500,
    buyNowPrice: 25000,
    endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // za 2 dny
    status: 'active',
    condition: 'new',
    sellerId: '1',
    categoryId: 'star-wars',
    totalBids: 12,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    title: 'LEGO Technic Bugatti Chiron 42083',
    description: 'Použitý set, kompletní, bez originální krabice. Funkční motor W16, otevírací dveře a kapota. Jeden z nejdětailnějších Technic modelů.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      'https://images.unsplash.com/photo-1608889175250-c3b0c7d90c60?w=800',
    ],
    startingPrice: 5000,
    currentPrice: 7200,
    buyNowPrice: 9500,
    endDate: new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString(), // za 5 hodin
    status: 'active',
    condition: 'used-no-box',
    sellerId: '3',
    categoryId: 'technic',
    totalBids: 8,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    title: 'LEGO Architecture Eiffelova věž 21019',
    description: 'Nový, nerozbalený. Architektonická replika slavné pařížské věže. Skvělý dárek pro milovníky architektury.',
    images: [
      'https://images.unsplash.com/photo-1513470266542-e64babeb55d1?w=800',
    ],
    startingPrice: 1200,
    currentPrice: 1200,
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // za týden
    status: 'active',
    condition: 'new',
    sellerId: '2',
    categoryId: 'architecture',
    totalBids: 0,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    title: 'LEGO City Policejní stanice 60141',
    description: 'Kompletní set, lehce používaný, výborný stav. Obsahuje 3 minifigurky policistů, 2 zločince, helikoptéru a policejní vůz.',
    images: [
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800',
    ],
    startingPrice: 800,
    currentPrice: 1100,
    buyNowPrice: 1500,
    endDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // zítra
    status: 'active',
    condition: 'used-with-box',
    sellerId: '1',
    categoryId: 'city',
    totalBids: 5,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '5',
    title: 'LEGO Creator Piráti z Karibiku 10040',
    description: 'Vzácný vintage set z roku 2009. Kompletní včetně všech minifigurek a originální krabice. Sběratelský kousek!',
    images: [
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800',
    ],
    startingPrice: 3500,
    currentPrice: 4200,
    endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(), // za 10 dní
    status: 'active',
    condition: 'used-with-box',
    sellerId: '2',
    categoryId: 'creator',
    totalBids: 6,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '6',
    title: 'LEGO Harry Potter Bradavice 71043',
    description: 'Obrovský set hradu Bradavic s více než 6000 díly. Kompletní s minifigurkami hlavních postav. Nový v krabici.',
    images: [
      'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800',
    ],
    startingPrice: 12000,
    currentPrice: 14500,
    buyNowPrice: 18000,
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // za 3 dny
    status: 'active',
    condition: 'new',
    sellerId: '3',
    categoryId: 'harry-potter',
    totalBids: 9,
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// Falešné příhozy
export const mockBids: Bid[] = [
  {
    id: '1',
    auctionId: '1',
    userId: '2',
    amount: 18500,
    createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // před 30 minutami
  },
  {
    id: '2',
    auctionId: '1',
    userId: '3',
    amount: 17800,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    auctionId: '2',
    userId: '1',
    amount: 7200,
    createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
  },
];

// Helper funkce pro získání dat
export function getAuctionById(id: string): Auction | undefined {
  return mockAuctions.find(auction => auction.id === id);
}

export function getUserById(id: string): User | undefined {
  return mockUsers.find(user => user.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return mockCategories.find(cat => cat.id === id);
}

export function getBidsByAuctionId(auctionId: string): Bid[] {
  return mockBids.filter(bid => bid.auctionId === auctionId);
}

export function getAuctionsByUserId(userId: string): Auction[] {
  return mockAuctions.filter(auction => auction.sellerId === userId);
}
