# 🏗️ Architektura projektu LEGO Aukce

## 📋 Přehled

Toto je **fullstack Next.js 14 aplikace** s Tailwind CSS. Momentálně běží **pouze na mock datech** (falešná data), bez databáze a backendu.

## 🎯 Fáze vývoje

### ✅ Fáze 1: Vizuál a UI (HOTOVO)
- Next.js setup
- Tailwind CSS + LEGO design system
- Základní komponenty
- Mock data
- Všechny stránky (Homepage, Detail, Profil, Formulář)

### ⏳ Fáze 2: Backend a databáze (Později)
- PostgreSQL databáze
- Prisma ORM
- API routes
- Autentizace (NextAuth.js)

### ⏳ Fáze 3: Real-time a pokročilé funkce (Později)
- WebSockets pro přihazování
- Upload obrázků
- Admin rozhraní
- Vyhledávání a filtry

---

## 📁 Struktura složek

```
lego-aukce-app/
│
├── 📱 app/                           # Next.js App Router
│   │
│   ├── layout.tsx                    # Root layout (Header + Footer wrapper)
│   ├── page.tsx                      # Homepage - seznam aukcí
│   ├── globals.css                   # Globální styly + Tailwind direktivy
│   │
│   ├── aukce/
│   │   ├── [id]/                     # Dynamická route pro detail aukce
│   │   │   └── page.tsx              # Detail jedné aukce + BidPanel
│   │   └── nova/
│   │       └── page.tsx              # Formulář pro vytvoření nové aukce
│   │
│   └── profil/
│       └── [id]/                     # Dynamická route pro profil
│           └── page.tsx              # Profil uživatele
│
├── 🎨 components/                    # React komponenty
│   ├── Header.tsx                    # Navigační lišta
│   ├── Footer.tsx                    # Patička
│   ├── AuctionCard.tsx              # Karta aukce (⭐ klíčová komponenta)
│   └── BidPanel.tsx                 # Panel přihazování (⭐ klíčová komponenta)
│
├── 📊 data/                          # Mock data (dočasné)
│   └── mockData.ts                   # Falešné aukce, uživatelé, kategorie
│
├── 🔤 types/                         # TypeScript definice
│   └── index.ts                      # User, Auction, Bid, Category, atd.
│
├── 🛠️ lib/                           # Utility funkce (zatím prázdné)
│
├── 🖼️ public/                        # Statické soubory (obrázky, ikony)
│
├── ⚙️ Konfigurační soubory
│   ├── package.json                  # Dependencies a scripty
│   ├── tsconfig.json                 # TypeScript konfigurace
│   ├── tailwind.config.ts            # Tailwind + LEGO barvy
│   ├── postcss.config.mjs            # PostCSS (pro Tailwind)
│   ├── next.config.ts                # Next.js konfigurace
│   └── .gitignore                    # Git ignore
│
└── 📚 Dokumentace
    ├── README.md                     # Hlavní dokumentace
    └── ARCHITEKTURA.md              # Tento soubor
```

---

## 🔑 Klíčové soubory

### 1. `types/index.ts` - TypeScript typy

```typescript
// Definuje strukturu dat pro celou aplikaci
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  rating: number;
  // ...
}

interface Auction {
  id: string;
  title: string;
  currentPrice: number;
  images: string[];
  // ...
}
```

### 2. `data/mockData.ts` - Falešná data

```typescript
// Obsahuje pole mockových dat
export const mockAuctions: Auction[] = [...]
export const mockUsers: User[] = [...]
export const mockCategories: Category[] = [...]

// Helper funkce pro získání dat
export function getAuctionById(id: string) { ... }
export function getUserById(id: string) { ... }
```

**Později:** Tento soubor bude nahrazen databázovými queries.

### 3. `components/AuctionCard.tsx` - ⭐ Klíčová komponenta

**Co dělá:**
- Zobrazuje jednotlivou aukci v seznamu
- Používá se na homepage a na profilové stránce

**Props:**
```typescript
interface AuctionCardProps {
  auction: Auction;
}
```

**Features:**
- Obrázek aukce s hover efektem
- Název (max 2 řádky)
- Aktuální cena zvýrazněná LEGO červenou
- Počet příhozů
- Zbývající čas (s automatickým výpočtem)
- Badge "Končí brzy!" (pokud < 24h)
- Badge "Kup teď" (pokud má buyNowPrice)
- Link na detail aukce

**Použití:**
```tsx
import AuctionCard from '@/components/AuctionCard';

<AuctionCard auction={auction} />
```

### 4. `components/BidPanel.tsx` - ⭐ Klíčová komponenta

**Co dělá:**
- Panel pro přihazování na detailu aukce
- Client component (`'use client'`)

**Props:**
```typescript
interface BidPanelProps {
  auction: Auction;
}
```

**Features:**
- Zobrazení aktuální ceny
- Formulář pro zadání příhozu
- Validace minimálního příhozu (currentPrice + 100 Kč)
- Rychlá tlačítka (+100, +500, +1000 Kč)
- Tlačítko "Kup teď" (pokud existuje buyNowPrice)
- Simulace odeslání (zatím jen UI, bez API)
- Info o konci aukce

**Použití:**
```tsx
import BidPanel from '@/components/BidPanel';

<BidPanel auction={auction} />
```

---

## 🎨 Design System

### Barvy (LEGO Theme)

Definované v `tailwind.config.ts`:

```typescript
colors: {
  lego: {
    red: '#DA291C',      // Hlavní červená (tlačítka, akcenty)
    yellow: '#FFD700',   // Žlutá (Kup teď badge)
    blue: '#0055BF',     // Modrá (zatím nepoužitá)
    green: '#00A550',    // Zelená (zatím nepoužitá)
  }
}
```

**Použití:**
```tsx
<button className="bg-lego-red hover:bg-red-700">
  Přihodit
</button>
```

### Typografie

- Font: **Inter** (Google Fonts)
- Nadpisy: Bold (font-bold)
- Texty: Regular

### Spacing & Layout

- Container max-width: `max-w-7xl` (1280px)
- Padding: `px-4 sm:px-6 lg:px-8`
- Grid gap: `gap-6`

---

## 🚏 Routování (Next.js App Router)

Next.js **App Router** automaticky vytváří routy ze struktury složek.

### Statické routy

| URL | Soubor | Stránka |
|-----|--------|---------|
| `/` | `app/page.tsx` | Homepage |
| `/aukce/nova` | `app/aukce/nova/page.tsx` | Nová aukce |

### Dynamické routy

| URL | Soubor | Parametr |
|-----|--------|----------|
| `/aukce/1` | `app/aukce/[id]/page.tsx` | `params.id = "1"` |
| `/aukce/2` | `app/aukce/[id]/page.tsx` | `params.id = "2"` |
| `/profil/1` | `app/profil/[id]/page.tsx` | `params.id = "1"` |

**Jak to funguje:**
```tsx
// app/aukce/[id]/page.tsx
export default function AuctionDetailPage({
  params
}: {
  params: { id: string }
}) {
  const auction = getAuctionById(params.id);
  return <div>{auction.title}</div>
}
```

---

## 🔄 Data Flow (momentálně)

```
Mock Data (mockData.ts)
     ↓
Helper funkce (getAuctionById, getUserById)
     ↓
Server Component (page.tsx)
     ↓
Props → Client Component (BidPanel)
     ↓
UI Display
```

**Později (s databází):**
```
PostgreSQL
     ↓
Prisma ORM
     ↓
API Routes / Server Actions
     ↓
Server Component
     ↓
Props → Client Component
     ↓
UI Display
```

---

## 🧩 Server vs Client Components

### Server Components (výchozí)
- Renderují se na serveru
- Nemají přístup k browser API
- Mohou přímo používat databázi
- **Příklad:** `app/page.tsx`, `app/aukce/[id]/page.tsx`

```tsx
// app/page.tsx - Server Component
export default function HomePage() {
  const auctions = mockAuctions; // Přímý přístup k datům
  return <div>...</div>
}
```

### Client Components
- Renderují se v browseru
- Mají přístup k hooks (useState, useEffect)
- Potřebují `'use client'` direktívu
- **Příklad:** `BidPanel.tsx`, `app/aukce/nova/page.tsx`

```tsx
'use client'; // ← Důležité!

import { useState } from 'react';

export default function BidPanel() {
  const [bidAmount, setBidAmount] = useState(0);
  return <div>...</div>
}
```

---

## 🎯 Co je připraveno na budoucí rozšíření

### 1. TypeScript typy
Všechny typy jsou definované a ready pro API.

### 2. Komponenty
Komponenty jsou strukturované tak, aby přijímaly data z props.
Lehce se přepojí z mock dat na skutečná API data.

### 3. Formuláře
Formuláře mají `onSubmit` handlery připravené pro API calls.

### 4. UI pro loading states
Připraveno v CSS (animace shimmer).

---

## 📦 Dependencies

### Production
```json
{
  "next": "^16.0.1",           // React framework
  "react": "^19.2.0",          // React library
  "react-dom": "^19.2.0",      // React DOM
  "typescript": "^5.9.3"       // TypeScript
}
```

### Development
```json
{
  "tailwindcss": "^4.1.16",    // Utility-first CSS
  "autoprefixer": "^10.4.21",  // CSS vendor prefixes
  "postcss": "^8.5.6"          // CSS processor
}
```

---

## 🔮 Další kroky (plán)

### Fáze 2: Backend
1. ✅ Nainstalovat Prisma
2. ✅ Vytvořit databázové schéma
3. ✅ Migrovat mock data do DB
4. ✅ Vytvořit API routes
5. ✅ Připojit frontend k API

### Fáze 3: Autentizace
1. ✅ NextAuth.js setup
2. ✅ Email/heslo login
3. ✅ Google OAuth
4. ✅ Session management

### Fáze 4: Real-time
1. ✅ WebSocket setup (Socket.io nebo Pusher)
2. ✅ Real-time bidding
3. ✅ Live notifications

### Fáze 5: Pokročilé features
1. ✅ Upload obrázků (Cloudinary)
2. ✅ Vyhledávání a filtry
3. ✅ Admin dashboard
4. ✅ Email notifikace
5. ✅ Payment gateway

---

## 💡 Tips pro další vývoj

### Jak přidat novou stránku?
1. Vytvoř novou složku v `app/`
2. Přidej `page.tsx`
3. Next.js automaticky vytvoří routu

### Jak přidat novou komponentu?
1. Vytvoř soubor v `components/`
2. Rozhodní, jestli bude Server nebo Client
3. Importuj a použij

### Jak přidat nový typ?
1. Otevři `types/index.ts`
2. Přidej nový `interface` nebo `type`
3. Exportuj ho

### Jak přidat mock data?
1. Otevři `data/mockData.ts`
2. Přidej nový objekt do příslušného pole
3. Helper funkce už fungují automaticky

---

**Happy coding! 🧱**
