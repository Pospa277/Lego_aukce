import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b-4 border-lego-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-lego-red">LEGO</span>
              <span className="text-gray-800"> Aukce</span>
            </div>
          </Link>

          {/* Navigace */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-lego-red transition-colors font-medium"
            >
              Aukce
            </Link>
            <Link
              href="/kategorie"
              className="text-gray-700 hover:text-lego-red transition-colors font-medium"
            >
              Kategorie
            </Link>
            <Link
              href="/jak-to-funguje"
              className="text-gray-700 hover:text-lego-red transition-colors font-medium"
            >
              Jak to funguje
            </Link>
          </nav>

          {/* Tlačítka */}
          <div className="flex items-center space-x-4">
            <Link
              href="/aukce/nova"
              className="hidden sm:block px-4 py-2 bg-lego-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              + Vytvořit aukci
            </Link>
            <Link
              href="/profil/1"
              className="flex items-center space-x-2 text-gray-700 hover:text-lego-red transition-colors"
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                👤
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobilní navigace */}
      <div className="md:hidden border-t border-gray-200 px-4 py-3 space-y-2">
        <Link
          href="/"
          className="block text-gray-700 hover:text-lego-red transition-colors font-medium"
        >
          Aukce
        </Link>
        <Link
          href="/kategorie"
          className="block text-gray-700 hover:text-lego-red transition-colors font-medium"
        >
          Kategorie
        </Link>
        <Link
          href="/jak-to-funguje"
          className="block text-gray-700 hover:text-lego-red transition-colors font-medium"
        >
          Jak to funguje
        </Link>
        <Link
          href="/aukce/nova"
          className="block w-full text-center px-4 py-2 bg-lego-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          + Vytvořit aukci
        </Link>
      </div>
    </header>
  );
}
