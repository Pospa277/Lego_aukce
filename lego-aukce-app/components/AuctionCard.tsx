import Link from 'next/link';
import Image from 'next/image';
import { Auction } from '@/types';

interface AuctionCardProps {
  auction: Auction;
}

// Pomocná funkce pro formátování zbývajícího času
function getTimeRemaining(endDate: string): string {
  const now = new Date();
  const end = new Date(endDate);
  const diff = end.getTime() - now.getTime();

  if (diff <= 0) return 'Aukce skončila';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

export default function AuctionCard({ auction }: AuctionCardProps) {
  const timeRemaining = getTimeRemaining(auction.endDate);
  const isEndingSoon = new Date(auction.endDate).getTime() - Date.now() < 24 * 60 * 60 * 1000; // méně než 24h

  return (
    <Link href={`/aukce/${auction.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-200 hover:border-lego-red">
        {/* Obrázek */}
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          <Image
            src={auction.images[0]}
            alt={auction.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Badge pro "Kup teď" */}
          {auction.buyNowPrice && (
            <div className="absolute top-3 right-3 bg-lego-yellow text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
              Kup teď
            </div>
          )}
          {/* Badge pro blížící se konec */}
          {isEndingSoon && auction.status === 'active' && (
            <div className="absolute top-3 left-3 bg-lego-red text-white px-3 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">
              Končí brzy!
            </div>
          )}
        </div>

        {/* Obsah */}
        <div className="p-4">
          {/* Název */}
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-lego-red transition-colors">
            {auction.title}
          </h3>

          {/* Cena */}
          <div className="mb-3">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-lego-red">
                {auction.currentPrice.toLocaleString('cs-CZ')} Kč
              </span>
              {auction.buyNowPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {auction.buyNowPrice.toLocaleString('cs-CZ')} Kč
                </span>
              )}
            </div>
          </div>

          {/* Statistiky */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <span>📊</span>
              <span>{auction.totalBids} příhozů</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>⏰</span>
              <span className={isEndingSoon ? 'text-lego-red font-semibold' : ''}>
                {timeRemaining}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
