import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BidPanel from '@/components/BidPanel';
import { getAuctionById, getUserById, getCategoryById, mockBids, mockUsers } from '@/data/mockData';
import { BidWithUser } from '@/types';

// Pro statické generování stránek
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export default function AuctionDetailPage({ params }: { params: { id: string } }) {
  const auction = getAuctionById(params.id);

  if (!auction) {
    notFound();
  }

  const seller = getUserById(auction.sellerId);
  const category = getCategoryById(auction.categoryId);

  // Získat příhozy pro tuto aukci
  const auctionBids = mockBids
    .filter(bid => bid.auctionId === auction.id)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5); // Posledních 5 příhozů

  const bidsWithUsers: BidWithUser[] = auctionBids.map(bid => ({
    ...bid,
    user: getUserById(bid.userId) || mockUsers[0],
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-lego-red">Domů</Link>
        <span className="mx-2">/</span>
        <Link href="/" className="hover:text-lego-red">Aukce</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{auction.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Levá část - Obrázky a popis */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hlavní obrázek */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-96 bg-gray-100">
              <Image
                src={auction.images[0]}
                alt={auction.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Thumbnaily dalších obrázků */}
            {auction.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 p-4">
                {auction.images.slice(1).map((img, idx) => (
                  <div key={idx} className="relative h-24 bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-75">
                    <Image
                      src={img}
                      alt={`${auction.title} - obrázek ${idx + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Název a kategorie */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-2 mb-3">
              {category && (
                <Link
                  href={`/kategorie/${category.slug}`}
                  className="text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 flex items-center space-x-1"
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </Link>
              )}
              <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                Aktivní
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {auction.title}
            </h1>
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-line">
                {auction.description}
              </p>
            </div>
          </div>

          {/* Informace o prodejci */}
          {seller && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">O prodejci</h2>
              <Link href={`/profil/${seller.id}`} className="flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors">
                <div className="relative w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                  {seller.avatar ? (
                    <Image src={seller.avatar} alt={seller.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl">
                      👤
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{seller.name}</h3>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <span>⭐</span>
                    <span>{seller.rating.toFixed(1)}</span>
                    <span>•</span>
                    <span>Člen od {new Date(seller.memberSince).getFullYear()}</span>
                  </div>
                  {seller.bio && (
                    <p className="text-sm text-gray-600 mt-2">{seller.bio}</p>
                  )}
                </div>
              </Link>
            </div>
          )}

          {/* Historie příhozů */}
          {bidsWithUsers.length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Historie příhozů</h2>
              <div className="space-y-3">
                {bidsWithUsers.map((bid) => (
                  <div key={bid.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                        {bid.user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{bid.user.name}</div>
                        <div className="text-xs text-gray-500">
                          {new Date(bid.createdAt).toLocaleString('cs-CZ')}
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-lego-red">
                      {bid.amount.toLocaleString('cs-CZ')} Kč
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pravá část - BidPanel */}
        <div className="lg:col-span-1">
          <BidPanel auction={auction} />
        </div>
      </div>
    </div>
  );
}
