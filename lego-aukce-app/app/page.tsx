import AuctionCard from '@/components/AuctionCard';
import { mockAuctions, mockCategories } from '@/data/mockData';
import Link from 'next/link';

export default function HomePage() {
  // Filtrujeme pouze aktivní aukce
  const activeAuctions = mockAuctions.filter(a => a.status === 'active');

  // Aukce končící brzy (méně než 24h)
  const endingSoonAuctions = activeAuctions
    .filter(a => new Date(a.endDate).getTime() - Date.now() < 24 * 60 * 60 * 1000)
    .slice(0, 3);

  return (
    <div>
      {/* Hero sekce */}
      <section className="bg-gradient-to-r from-lego-red to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Objevte svět LEGO aukcí
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Kupujte a prodávejte LEGO sety a díly s komunitou sběratelů
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/aukce/nova"
              className="px-8 py-4 bg-white text-lego-red font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Vytvořit aukci
            </Link>
            <Link
              href="#aukce"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-lego-red transition-colors text-lg"
            >
              Procházet aukce
            </Link>
          </div>
        </div>
      </section>

      {/* Kategorie */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Kategorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {mockCategories.map((category) => (
            <Link
              key={category.id}
              href={`/kategorie/${category.slug}`}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-lego-red"
            >
              <span className="text-3xl mb-2">{category.icon}</span>
              <span className="text-sm font-medium text-center text-gray-700">
                {category.name}
              </span>
            </Link>
          ))}
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

      {/* Všechny aktivní aukce */}
      <section id="aukce" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Všechny aukce</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>{activeAuctions.length} aktivních aukcí</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeAuctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
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
