import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* O nás */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">O LEGO Aukce</h3>
            <p className="text-sm text-gray-400">
              Marketplace pro LEGO sběratele, stavitele a nadšence.
              Kupujte a prodávejte LEGO sety bezpečně a snadno.
            </p>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Odkazy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-lego-red transition-colors">
                  Aukce
                </Link>
              </li>
              <li>
                <Link href="/kategorie" className="hover:text-lego-red transition-colors">
                  Kategorie
                </Link>
              </li>
              <li>
                <Link href="/jak-to-funguje" className="hover:text-lego-red transition-colors">
                  Jak to funguje
                </Link>
              </li>
            </ul>
          </div>

          {/* Podpora */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Podpora</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kontakt" className="hover:text-lego-red transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-lego-red transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/pravidla" className="hover:text-lego-red transition-colors">
                  Pravidla
                </Link>
              </li>
            </ul>
          </div>

          {/* Sociální sítě */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Sledujte nás</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-lego-red transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-lego-red transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} LEGO Aukce. Všechna práva vyhrazena.</p>
          <p className="mt-2">
            Tento projekt není oficiálně spojen se společností LEGO Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
