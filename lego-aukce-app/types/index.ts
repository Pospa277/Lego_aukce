// 🎯 Základní typy pro celou aplikaci

// Uživatel
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  rating: number; // Hodnocení 0-5
  memberSince: string; // Datum registrace
}

// Stav produktu
export type ProductCondition = 'new' | 'used-no-box' | 'used-with-box';

// Aukce
export interface Auction {
  id: string;
  title: string;
  description: string;
  images: string[]; // URL obrázků
  startingPrice: number;
  currentPrice: number;
  buyNowPrice?: number; // Volitelná "Kup teď" cena
  endDate: string; // ISO datum konce aukce
  status: 'active' | 'ended' | 'sold'; // Stav aukce
  condition: ProductCondition; // Stav produktu (nový, použitý...)
  sellerId: string; // ID prodejce
  categoryId: string; // ID kategorie (např. "star-wars", "technic")
  totalBids: number; // Počet příhozů
  createdAt: string;
}

// Příhoz (Bid)
export interface Bid {
  id: string;
  auctionId: string;
  userId: string;
  amount: number;
  createdAt: string;
}

// Kategorie LEGO
export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string; // Emoji nebo ikona
}

// Rozšířené info o aukci s daty o uživateli
export interface AuctionWithSeller extends Auction {
  seller: User;
}

// Rozšířené info o příhozu s daty o uživateli
export interface BidWithUser extends Bid {
  user: User;
}
