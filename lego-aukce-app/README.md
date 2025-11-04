# 🧱 LEGO Aukce - Marketplace pro LEGO sběratele

Moderní webová aplikace pro nákup a prodej LEGO setů a dílů prostřednictvím aukcí.

## 📸 Screenshots

### Homepage
- Seznam aktivních aukcí
- Kategorie LEGO
- Zvýraznění aukcí končících brzy

### Detail aukce
- Fotogalerie
- Informace o produktu a prodejci
- Panel pro přihazování
- Historie příhozů

### Profil uživatele
- Avatar a základní info
- Aktivní aukce
- Hodnocení

## 🚀 Technologie

- **Frontend**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **TypeScript**: Pro type-safety
- **React**: Server i Client Components

## 📁 Struktura projektu

```
lego-aukce-app/
├── app/                      # Next.js App Router
│   ├── aukce/
│   │   ├── [id]/            # Detail aukce (dynamická route)
│   │   │   └── page.tsx
│   │   └── nova/            # Formulář nové aukce
│   │       └── page.tsx
│   ├── profil/
│   │   └── [id]/            # Profil uživatele
│   │       └── page.tsx
│   ├── layout.tsx           # Root layout (Header, Footer)
│   ├── page.tsx             # Homepage
│   └── globals.css          # Globální styly + Tailwind
│
├── components/              # React komponenty
│   ├── Header.tsx           # Navigace
│   ├── Footer.tsx           # Patička
│   ├── AuctionCard.tsx      # Karta aukce ⭐
│   └── BidPanel.tsx         # Panel přihazování ⭐
│
├── data/                    # Mock data (falešná data)
│   └── mockData.ts          # Aukce, uživatelé, kategorie
│
├── types/                   # TypeScript definice
│   └── index.ts             # Typy: User, Auction, Bid, atd.
│
├── lib/                     # Utility funkce
│
├── public/                  # Statické soubory
│
├── package.json             # NPM dependencies
├── tsconfig.json            # TypeScript konfigurace
├── tailwind.config.ts       # Tailwind + LEGO barvy
├── postcss.config.mjs       # PostCSS
└── next.config.ts           # Next.js konfigurace
```

## 🎨 LEGO Design System

### Barvy
```typescript
colors: {
  lego: {
    red: '#DA291C',      // Hlavní červená
    yellow: '#FFD700',   // Žlutá (Kup teď)
    blue: '#0055BF',     // Modrá
    green: '#00A550',    // Zelená
  }
}
```

### Použití v kódu
```tsx
<button className="bg-lego-red text-white hover:bg-red-700">
  Přihodit
</button>
```

## 🛠️ Instalace a spuštění

### Požadavky
- Node.js 18+
- npm nebo yarn

### Krok za krokem

1. **Naklonuj repozitář**
```bash
git clone <url-repositare>
cd Lego_aukce/lego-aukce-app
```

2. **Nainstaluj závislosti**
```bash
npm install
```

3. **Spusť development server**
```bash
npm run dev
```

4. **Otevři v prohlížeči**
```
http://localhost:3000
```

### Dostupné příkazy

```bash
npm run dev      # Spustí dev server (port 3000)
npm run build    # Vytvoří production build
npm run start    # Spustí production server
npm run lint     # Zkontroluje kód
```

## 📚 Jak aplikace funguje

### 1. Mock Data
Aplikace momentálně **nepoužívá databázi**. Vše běží na falešných datech (mock data) v souboru `data/mockData.ts`.

Můžeš tam upravit:
- Aukce
- Uživatele
- Kategorie

### 2. Klíčové komponenty

#### AuctionCard.tsx
Zobrazuje jednotlivou aukci v seznamu.

```tsx
<AuctionCard auction={auction} />
```

**Features:**
- Zobrazení obrázku
- Aktuální cena
- Počet příhozů
- Zbývající čas
- Badge "Končí brzy" a "Kup teď"

#### BidPanel.tsx
Panel pro přihazování na detailu aukce.

```tsx
<BidPanel auction={auction} />
```

**Features:**
- Formulář pro příhoz
- Tlačítka pro rychlé přihození (+100 Kč, +500 Kč, atd.)
- Tlačítko "Kup teď"
- Validace minimální ceny
- Simulace odeslání (zatím jen UI)

### 3. Routování (Next.js App Router)

| URL | Stránka | Soubor |
|-----|---------|--------|
| `/` | Homepage | `app/page.tsx` |
| `/aukce/1` | Detail aukce | `app/aukce/[id]/page.tsx` |
| `/aukce/nova` | Nová aukce | `app/aukce/nova/page.tsx` |
| `/profil/1` | Profil | `app/profil/[id]/page.tsx` |

### 4. TypeScript typy

Všechny typy jsou v `types/index.ts`:

```typescript
interface Auction {
  id: string;
  title: string;
  currentPrice: number;
  // ... další
}

interface User {
  id: string;
  name: string;
  // ...
}
```

## 🎯 Co aplikace umí (zatím)

✅ Zobrazení seznamu aukcí
✅ Detail aukce s fotogaleríí
✅ UI pro přihazování (zatím bez real-time)
✅ Profil uživatele
✅ Formulář pro vytvoření aukce
✅ Responzivní design
✅ LEGO design system (barvy, fonty)

## 🚧 Co bude přidáno později

⏳ Databáze (PostgreSQL + Prisma)
⏳ Backend API (Next.js API routes)
⏳ Autentizace (NextAuth.js)
⏳ Real-time přihazování (WebSockets)
⏳ Upload obrázků (Cloudinary)
⏳ Admin rozhraní
⏳ Vyhledávání a filtry
⏳ Notifikace

## 📖 Učení Next.js

### Co je Next.js?
Next.js je React framework, který zjednodušuje tvorbu webových aplikací. Poskytuje:
- **Routování** - automatické z struktury složek
- **Server Components** - komponenty renderované na serveru
- **Client Components** - interaktivní komponenty (`'use client'`)
- **API Routes** - backend endpointy
- **Image Optimization** - automatická optimalizace obrázků

### Server vs Client Components

**Server Component** (výchozí):
```tsx
// Tato komponenta se renderuje na serveru
export default function Page() {
  return <div>Hello</div>
}
```

**Client Component** (pro interaktivitu):
```tsx
'use client'; // Toto říká Next.js, že je to client component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

### Dynamické routy

Složka `[id]` vytvoří dynamickou routu:
```
app/aukce/[id]/page.tsx  →  /aukce/1, /aukce/2, atd.
```

V komponentě pak dostaneš `params`:
```tsx
export default function Page({ params }: { params: { id: string } }) {
  return <div>ID: {params.id}</div>
}
```

## 🎨 Tailwind CSS

Tailwind je utility-first CSS framework. Místo psaní CSS používáš třídy:

```tsx
<div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl">
  <h1 className="text-3xl font-bold text-lego-red">
    Nadpis
  </h1>
</div>
```

**Užitečné třídy:**
- `bg-lego-red` - pozadí červené
- `text-white` - bílý text
- `rounded-xl` - zaoblené rohy
- `shadow-md` - stín
- `p-6` - padding 1.5rem
- `hover:shadow-xl` - větší stín při hoveru

## 🐛 Troubleshooting

### Port 3000 je obsazený
```bash
# Najdi proces na portu 3000
lsof -i :3000
# Zabij ho
kill -9 <PID>
```

### Chyba při instalaci
```bash
# Smaž node_modules a zkus znovu
rm -rf node_modules package-lock.json
npm install
```

### Obrázky se nenačítají
Zkontroluj, že jsou URL v mock datech platné.

## 📞 Podpora

Pokud máš otázky:
1. Zkontroluj tento README
2. Podívej se do kódu - je plný komentářů
3. Zeptej se mě!

## 📝 Licence

Tento projekt je vytvořen pro vzdělávací účely.

---

**Vytvořeno s ❤️ a 🧱 LEGO kostičkami**
