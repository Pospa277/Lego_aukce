'use client';

import { useState } from 'react';
import AuctionCard from '@/components/AuctionCard';
import { mockAuctions, mockCategories, locations } from '@/data/mockData';
import { ProductCondition, Location } from '@/types';
import Link from 'next/link';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<ProductCondition | 'all'>('all');
  const [selectedLocation, setSelectedLocation] = useState<Location | 'all'>('all');
  const [sortBy, setSortBy] = useState<'ending-soon' | 'newest' | 'price-low' | 'price-high'>('ending-soon');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [buyNowOnly, setBuyNowOnly] = useState<boolean>(false);

  // Filtrujeme pouze aktivní aukce
  let filteredAuctions = mockAuctions.filter(a => a.status === 'active');

  // Textové vyhledávání (v názvu a popisu)
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredAuctions = filteredAuctions.filter(a =>
      a.title.toLowerCase().includes(query) ||
      a.description.toLowerCase().includes(query)
    );
  }

  // Filtr podle kategorie
  if (selectedCategory !== 'all') {
    filteredAuctions = filteredAuctions.filter(a => a.categoryId === selectedCategory);
  }

  // Filtr podle stavu
  if (selectedCondition !== 'all') {
    filteredAuctions = filteredAuctions.filter(a => a.condition === selectedCondition);
  }

  // Filtr podle lokace
  if (selectedLocation !== 'all') {
    filteredAuctions = filteredAuctions.filter(a => a.location === selectedLocation);
  }

  // Filtr "Jen s Kup teď"
  if (buyNowOnly) {
    filteredAuctions = filteredAuctions.filter(a => a.buyNowPrice !== undefined);
  }

  // Řazení
  filteredAuctions = [...filteredAuctions].sort((a, b) => {
    switch (sortBy) {
      case 'ending-soon':
        return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'price-low':
        return a.currentPrice - b.currentPrice;
      case 'price-high':
        return b.currentPrice - a.currentPrice;
      default:
        return 0;
    }
  });

  // Aukce končící brzy (méně než 24h)
  const endingSoonAuctions = mockAuctions
    .filter(a => a.status === 'active')
    .filter(a => new Date(a.endDate).getTime() - Date.now() < 24 * 60 * 60 * 1000)
    .slice(0, 3);

  // Zobrazit jen prvních 7 kategorií
  const displayCategories = mockCategories.slice(0, 7);

  return (
    <div>
      {/* Hero sekce s LEGO fotkou na pozadí */}
      <section
        className="relative bg-gradient-to-r from-lego-red to-red-600 text-white py-16 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Průsvitné překrytí */}
        <div className="absolute inset-0 bg-lego-red/85"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Objevte svět LEGO aukcí
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100 drop-shadow">
            Kupujte a prodávejte LEGO sety a díly s komunitou sběratelů
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/aukce/nova"
              className="px-8 py-4 bg-white text-lego-red font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Vytvořit aukci
            </Link>
            <a
              href="#aukce"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-lego-red transition-colors text-lg shadow-lg"
            >
              Procházet aukce
            </a>
          </div>
        </div>
      </section>

      {/* Nejoblíbenější kategorie */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Nejoblíbenější kategorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {displayCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                document.getElementById('aukce')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border-2 ${
                selectedCategory === category.id ? 'border-lego-red' : 'border-gray-200'
              }`}
            >
              <span className="text-3xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium text-center text-gray-700">
                {category.name}
              </span>
            </button>
          ))}

          {/* Dlaždice "Všechny kategorie" */}
          <Link
            href="/kategorie"
            className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition-shadow border-2 border-gray-300 hover:border-lego-red"
          >
            <span className="text-3xl mb-2">📦</span>
            <span className="text-sm font-medium text-center text-gray-700">
              Všechny kategorie
            </span>
          </Link>
        </div>
      </section>

      {/* Aukce končící brzy */}
      {endingSoonAuctions.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-red-50 -mx-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <span>🔥</span>
                <span>Končí brzy</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {endingSoonAuctions.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Všechny aktivní aukce s filtry */}
      <section id="aukce" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Všechny aukce
            <span className="text-gray-500 text-lg font-normal ml-2">
              ({filteredAuctions.length})
            </span>
          </h2>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Hledat v názvech a popisech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:border-lego-red focus:outline-none text-lg"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filtry */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Filtr podle stavu */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stav produktu
              </label>
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value as ProductCondition | 'all')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-lego-red focus:outline-none"
              >
                <option value="all">Všechny stavy</option>
                <option value="new">Nový</option>
                <option value="used-with-box">Použitý s krabicí</option>
                <option value="used-no-box">Použitý bez krabice</option>
              </select>
            </div>

            {/* Filtr podle kategorie */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategorie
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-lego-red focus:outline-none"
              >
                <option value="all">Všechny kategorie</option>
                {mockCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.icon} {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtr podle lokace */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lokace
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value as Location | 'all')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-lego-red focus:outline-none"
              >
                <option value="all">Všechny lokace</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Řazení */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Řadit podle
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-lego-red focus:outline-none"
              >
                <option value="ending-soon">Končí nejdříve</option>
                <option value="newest">Nejnovější</option>
                <option value="price-low">Cena: Od nejnižší</option>
                <option value="price-high">Cena: Od nejvyšší</option>
              </select>
            </div>
          </div>

          {/* Checkbox "Jen s Kup teď" */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="buyNowOnly"
              checked={buyNowOnly}
              onChange={(e) => setBuyNowOnly(e.target.checked)}
              className="w-4 h-4 text-lego-red border-gray-300 rounded focus:ring-lego-red"
            />
            <label htmlFor="buyNowOnly" className="ml-2 text-sm font-medium text-gray-700 cursor-pointer">
              🌟 Jen s možností "Kup teď"
            </label>
          </div>

          {/* Reset filtrů */}
          {(selectedCategory !== 'all' || selectedCondition !== 'all' || selectedLocation !== 'all' || sortBy !== 'ending-soon' || searchQuery || buyNowOnly) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCondition('all');
                setSelectedLocation('all');
                setSortBy('ending-soon');
                setSearchQuery('');
                setBuyNowOnly(false);
              }}
              className="mt-4 text-sm text-lego-red hover:text-red-700 font-medium"
            >
              ✕ Zrušit všechny filtry
            </button>
          )}
        </div>

        {/* Seznam aukcí */}
        {filteredAuctions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAuctions.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Žádné aukce nenalezeny
            </h3>
            <p className="text-gray-600 mb-4">
              Zkuste změnit filtry nebo hledat jinou kategorii
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCondition('all');
                setSelectedLocation('all');
                setSortBy('ending-soon');
                setSearchQuery('');
                setBuyNowOnly(false);
              }}
              className="px-6 py-2 bg-lego-red text-white rounded-lg hover:bg-red-700"
            >
              Zrušit filtry
            </button>
          </div>
        )}
      </section>

      {/* Call to action */}
      <section className="bg-gray-900 text-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Máte LEGO, které nechcete?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Vytvořte si účet a začněte prodávat své LEGO sety ještě dnes!
          </p>
          <Link
            href="/registrace"
            className="inline-block px-8 py-4 bg-lego-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg"
          >
            Zaregistrovat se zdarma
          </Link>
        </div>
      </section>
    </div>
  );
}
