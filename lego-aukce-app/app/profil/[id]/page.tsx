import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AuctionCard from '@/components/AuctionCard';
import { getUserById, getAuctionsByUserId, mockBids } from '@/data/mockData';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

// Povolit pouze předgenerované stránky
export const dynamicParams = false;

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = getUserById(id);

  if (!user) {
    notFound();
  }

  // Aukce tohoto uživatele
  const userAuctions = getAuctionsByUserId(user.id);

  // Příhozy tohoto uživatele
  const userBids = mockBids.filter(bid => bid.userId === user.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-lego-red">Domů</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Profil uživatele</span>
      </div>

      {/* Hlavička profilu */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Avatar */}
          <div className="relative w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
            {user.avatar ? (
              <Image src={user.avatar} alt={user.name} fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-5xl">
                👤
              </div>
            )}
          </div>

          {/* Informace o uživateli */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
              <div className="flex items-center space-x-1">
                <span>⭐</span>
                <span className="font-semibold">{user.rating.toFixed(1)}</span>
                <span className="text-sm">(hodnocení)</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📅</span>
                <span className="text-sm">
                  Člen od {new Date(user.memberSince).toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' })}
                </span>
              </div>
            </div>
            {user.bio && (
              <p className="text-gray-700 mb-4">{user.bio}</p>
            )}
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold text-lego-red">{userAuctions.length}</div>
                <div className="text-sm text-gray-600">Aktivních aukcí</div>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold text-lego-red">{userBids.length}</div>
                <div className="text-sm text-gray-600">Příhozů</div>
              </div>
            </div>
          </div>

          {/* Akční tlačítka */}
          <div className="flex flex-col space-y-2 w-full md:w-auto">
            <button className="px-6 py-2 bg-lego-red text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
              Odeslat zprávu
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
              Nahlásit uživatele
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button className="border-b-2 border-lego-red text-lego-red font-medium py-4">
              Aktivní aukce ({userAuctions.length})
            </button>
            <button className="border-b-2 border-transparent text-gray-600 hover:text-gray-900 font-medium py-4">
              Ukončené aukce (0)
            </button>
            <button className="border-b-2 border-transparent text-gray-600 hover:text-gray-900 font-medium py-4">
              Hodnocení (0)
            </button>
          </nav>
        </div>
      </div>

      {/* Aktivní aukce */}
      <div>
        {userAuctions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userAuctions.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Žádné aktivní aukce
            </h3>
            <p className="text-gray-600">
              Tento uživatel momentálně nemá žádné aktivní aukce.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
