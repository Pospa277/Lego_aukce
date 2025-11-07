import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Jak to funguje | LEGO Aukce',
  description: 'Zjistěte, jak fungují LEGO aukce - průvodce pro kupující i prodávající',
};

export default function HowItWorksPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero sekce */}
      <section className="bg-gradient-to-r from-lego-red to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jak to funguje?
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Vítejte na platformě pro nákup a prodej LEGO. Ať už hledáte vzácné sety nebo chcete prodat své staré stavebnice, jsme tu pro vás!
          </p>
        </div>
      </section>

      {/* Jak kupovat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🛒 Jak kupovat LEGO
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nákup LEGO setů je jednoduchý a bezpečný. Následujte tyto kroky:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Krok 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-lego-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Najděte LEGO</h3>
            <p className="text-gray-600">
              Procházejte aukce pomocí vyhledávání a filtrů. Můžete filtrovat podle kategorie, stavu, lokace nebo ceny.
            </p>
          </div>

          {/* Krok 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-lego-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Přihazujte nebo kupte hned</h3>
            <p className="text-gray-600">
              Sledujte aukci a přihazujte, nebo použijte funkci "Kup teď" pro okamžitý nákup za stanovenou cenu.
            </p>
          </div>

          {/* Krok 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-lego-red text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Dohodněte se s prodejcem</h3>
            <p className="text-gray-600">
              Po vyhrání aukce se spojte s prodejcem, dohodněte způsob platby a doručení. Vždy komunikujte bezpečně!
            </p>
          </div>
        </div>
      </section>

      {/* Jak prodávat */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💰 Jak prodávat LEGO
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prodej vašich LEGO setů je rychlý a jednoduchý. Začněte vydělávat ještě dnes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Krok 1 */}
            <div className="bg-gray-50 rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-lego-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Vytvořte aukci</h3>
              <p className="text-gray-600">
                Zaregistrujte se a vytvořte novou aukci. Přidejte kvalitní fotky, podrobný popis a nastavte počáteční cenu.
              </p>
            </div>

            {/* Krok 2 */}
            <div className="bg-gray-50 rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-lego-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Sledujte příhozy</h3>
              <p className="text-gray-600">
                Dostávejte upozornění na nové příhozy. Můžete odpovídat na dotazy zájemců a sledovat průběh aukce.
              </p>
            </div>

            {/* Krok 3 */}
            <div className="bg-gray-50 rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-lego-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Dokončete prodej</h3>
              <p className="text-gray-600">
                Po skončení aukce se dohodněte s vítězem na platbě a dodání. Po úspěšném prodeji získáte hodnocení.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pravidla a bezpečnost */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-3xl mr-3">🔒</span>
            Pravidla a bezpečnost
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">✅ Doporučujeme:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Komunikujte pouze přes platformu</li>
                <li>• Vyžadujte osobní předání nebo dobírku</li>
                <li>• Kontrolujte hodnocení prodejců</li>
                <li>• Pořizujte kvalitní fotografie</li>
                <li>• Čtěte popis pozorně před přihazováním</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">❌ Varování:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Neposílejte peníze předem bez záruky</li>
                <li>• Nedůvěřujte podezřele nízkým cenám</li>
                <li>• Neplatě mimo platformu</li>
                <li>• Neodpovídejte na podezřelé zprávy</li>
                <li>• Nahlaste podezřelé chování</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Typy aukcí */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            📦 Typy aukcí
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Klasická aukce */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">⏰</span>
                <h3 className="text-xl font-bold">Klasická aukce</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Standardní formát, kde nabízející nastaví počáteční cenu a kupující postupně přihazují. Po skončení aukce vyhrává nejvyšší příhoz.
              </p>
              <div className="bg-white rounded p-3 text-sm">
                <strong>Ideální pro:</strong> Vzácné sety, kolekce, starší LEGO
              </div>
            </div>

            {/* Kup teď */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-lego-red">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">⚡</span>
                <h3 className="text-xl font-bold">Aukce s "Kup teď"</h3>
              </div>
              <p className="text-gray-700 mb-3">
                Kromě standardního příhazování má aukce i možnost okamžitého nákupu za pevnou cenu. Tím aukce okamžitě končí.
              </p>
              <div className="bg-white rounded p-3 text-sm">
                <strong>Ideální pro:</strong> Běžné sety, rychlý prodej
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          ❓ Časté dotazy
        </h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {/* Otázka 1 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg mb-2">Jak dlouho trvá aukce?</h3>
            <p className="text-gray-700">
              Délku aukce určuje prodejce při vytváření, obvykle 3-7 dní. Doba aukce je viditelná na každém inzerátu.
            </p>
          </div>

          {/* Otázka 2 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg mb-2">Jaké jsou poplatky?</h3>
            <p className="text-gray-700">
              Vytvoření aukce je zdarma. Po úspěšném prodeji účtujeme malý poplatek z prodejní ceny (bude specifikován po implementaci platebního systému).
            </p>
          </div>

          {/* Otázka 3 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg mb-2">Mohu zrušit svůj příhoz?</h3>
            <p className="text-gray-700">
              Po potvrzení je příhoz závazný a nelze ho zrušit. Proto si vždy pečlivě kontrolujte částku před odesláním.
            </p>
          </div>

          {/* Otázka 4 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg mb-2">Jak funguje doručení?</h3>
            <p className="text-gray-700">
              Způsob doručení si domlouváte přímo s prodejcem. Doporučujeme osobní předání nebo dobírku přes Českou poštu/PPL.
            </p>
          </div>

          {/* Otázka 5 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg mb-2">Co když mám problém s prodejcem?</h3>
            <p className="text-gray-700">
              Kontaktujte naši podporu přes sekci "Kontakt". Řešíme spory a v případě porušení pravidel můžeme uživatele zablokovat.
            </p>
          </div>

          {/* Otázka 6 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-lg mb-2">Mohu prodávat i jednotlivé díly?</h3>
            <p className="text-gray-700">
              Ano! Můžete prodávat jak kompletní sety, tak i jednotlivé díly, minifigurky nebo náhradní součástky.
            </p>
          </div>
        </div>
      </section>

      {/* Tipy pro úspěch */}
      <section className="bg-gradient-to-br from-lego-blue to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            💡 Tipy pro úspěšný obchod
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tipy pro kupující */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🛍️</span>
                Pro kupující
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Sledujte aukce a nastavte si upozornění před koncem</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Ptejte se prodejce na detaily, které nejsou jasné</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Zkontrolujte hodnocení a historii prodejce</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Porovnejte ceny s jinými aukcemi podobných setů</span>
                </li>
              </ul>
            </div>

            {/* Tipy pro prodejce */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">📸</span>
                Pro prodejce
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Pořiďte kvalitní fotky ze všech stran (min. 3-4 kusy)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Popište přesně stav, kompletnost a případné vady</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Nastavte realistickou počáteční cenu</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Odpovídejte rychle na dotazy zájemců</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Ohlasy uživatelů */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          ⭐ Co říkají naši uživatelé
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Přidejte se k tisícům spokojených sběratelů a nadšenců LEGO, kteří už úspěšně nakupují a prodávají
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-lego-red rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                M
              </div>
              <div>
                <h4 className="font-bold">Martin K.</h4>
                <div className="flex text-yellow-400 text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Skvělá platforma pro sběratele! Koupil jsem zde vzácný Star Wars set z roku 2008, který jsem hledal roky. Prodejce byl vstřícný a dodání proběhlo bez problémů."
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Kupující od 2023
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-lego-blue rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                K
              </div>
              <div>
                <h4 className="font-bold">Karolína V.</h4>
                <div className="flex text-yellow-400 text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Prodala jsem celou kolekci LEGO Friends mých dětí během týdne. Díky funkci 'Kup teď' to šlo rychle a jednoduše. Doporučuji všem, kdo chtějí prodat LEGO!"
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Prodejce od 2022
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-lego-yellow rounded-full flex items-center justify-center text-gray-900 font-bold text-xl mr-3">
                P
              </div>
              <div>
                <h4 className="font-bold">Petr Š.</h4>
                <div className="flex text-yellow-400 text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Jako dlouholetý sběratel jsem vyzkoušel různé platformy, ale tahle je nejlepší. Přehledné rozhraní, férová komunita a skvělé ceny. Už jsem zde koupil přes 20 setů!"
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Kupující i prodejce od 2021
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-lego-green rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                J
              </div>
              <div>
                <h4 className="font-bold">Jana N.</h4>
                <div className="flex text-yellow-400 text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Perfektní místo pro hledání vzácných minifigurek! Filtry podle kategorie mi ušetřily spoustu času. Komunikace s prodejci funguje skvěle."
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Kupující od 2023
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                T
              </div>
              <div>
                <h4 className="font-bold">Tomáš H.</h4>
                <div className="flex text-yellow-400 text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Provozuji e-shop s LEGO a tuhle platformu používám k prodeji přebytečných zásob. Přehledný dashboard, jednoduché nahrávání fotek a rychlé prodeje. Top!"
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Prodejce od 2022
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                L
              </div>
              <div>
                <h4 className="font-bold">Lucie B.</h4>
                <div className="flex text-yellow-400 text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Syn sbírá LEGO Technic a díky této platformě jsme našli sety za skvělé ceny. Hodnocení prodejců je super funkce, díky které nakupuji s klidem."
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Kupující od 2023
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Připraveni začít?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Připojte se k největší české komunitě LEGO nadšenců a začněte kupovat nebo prodávat ještě dnes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registrace"
              className="px-8 py-4 bg-lego-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-lg"
            >
              Zaregistrovat se zdarma
            </Link>
            <Link
              href="/"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              Procházet aukce
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
