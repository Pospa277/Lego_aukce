'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HowItWorksPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [testimonialSlide, setTestimonialSlide] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Jak dlouho trvá aukce?',
      answer: 'Délku aukce určuje prodejce při vytváření, obvykle 3-7 dní. Doba aukce je viditelná na každém inzerátu.',
    },
    {
      question: 'Jaké jsou poplatky?',
      answer: 'Vytvoření aukce je zdarma. Po úspěšném prodeji účtujeme malý poplatek z prodejní ceny (bude specifikován po implementaci platebního systému).',
    },
    {
      question: 'Mohu zrušit svůj příhoz?',
      answer: 'Po potvrzení je příhoz závazný a nelze ho zrušit. Proto si vždy pečlivě kontrolujte částku před odesláním.',
    },
    {
      question: 'Jak funguje doručení?',
      answer: 'Způsob doručení si domlouváte přímo s prodejcem. Doporučujeme osobní předání nebo dobírku přes Českou poštu/PPL.',
    },
    {
      question: 'Co když mám problém s prodejcem?',
      answer: 'Kontaktujte naši podporu přes sekci "Kontakt". Řešíme spory a v případě porušení pravidel můžeme uživatele zablokovat.',
    },
    {
      question: 'Mohu prodávat i jednotlivé díly?',
      answer: 'Ano! Můžete prodávat jak kompletní sety, tak i jednotlivé díly, minifigurky nebo náhradní součástky.',
    },
  ];

  const testimonials = [
    {
      name: 'Martin K.',
      initial: 'M',
      color: 'bg-lego-red',
      rating: 5,
      text: 'Skvělá platforma pro sběratele! Koupil jsem zde vzácný Star Wars set z roku 2008, který jsem hledal roky. Prodejce byl vstřícný a dodání proběhlo bez problémů.',
      role: 'Kupující od 2023',
    },
    {
      name: 'Karolína V.',
      initial: 'K',
      color: 'bg-lego-blue',
      rating: 5,
      text: 'Prodala jsem celou kolekci LEGO Friends mých dětí během týdne. Díky funkci \'Kup teď\' to šlo rychle a jednoduše. Doporučuji všem, kdo chtějí prodat LEGO!',
      role: 'Prodejce od 2022',
    },
    {
      name: 'Petr Š.',
      initial: 'P',
      color: 'bg-lego-yellow',
      rating: 5,
      text: 'Jako dlouholetý sběratel jsem vyzkoušel různé platformy, ale tahle je nejlepší. Přehledné rozhraní, férová komunita a skvělé ceny. Už jsem zde koupil přes 20 setů!',
      role: 'Kupující i prodejce od 2021',
    },
    {
      name: 'Jana N.',
      initial: 'J',
      color: 'bg-lego-green',
      rating: 5,
      text: 'Perfektní místo pro hledání vzácných minifigurek! Filtry podle kategorie mi ušetřily spoustu času. Komunikace s prodejci funguje skvěle.',
      role: 'Kupující od 2023',
    },
    {
      name: 'Tomáš H.',
      initial: 'T',
      color: 'bg-purple-500',
      rating: 5,
      text: 'Provozuji e-shop s LEGO a tuhle platformu používám k prodeji přebytečných zásob. Přehledný dashboard, jednoduché nahrávání fotek a rychlé prodeje. Top!',
      role: 'Prodejce od 2022',
    },
    {
      name: 'Lucie B.',
      initial: 'L',
      color: 'bg-pink-500',
      rating: 5,
      text: 'Syn sbírá LEGO Technic a díky této platformě jsme našli sety za skvělé ceny. Hodnocení prodejců je super funkce, díky které nakupuji s klidem.',
      role: 'Kupující od 2023',
    },
  ];

  const visibleTestimonials = testimonials.slice(0, 3);
  const sliderTestimonials = testimonials.slice(3);

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

      {/* Typy aukcí */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          📦 Typy aukcí
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Klasická aukce */}
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">⏰</span>
              <h3 className="text-xl font-bold">Klasická aukce</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Standardní formát, kde nabízející nastaví počáteční cenu a kupující postupně přihazují. Po skončení aukce vyhrává nejvyšší příhoz.
            </p>
            <div className="bg-gray-50 rounded p-3 text-sm">
              <strong>Ideální pro:</strong> Vzácné sety, kolekce, starší LEGO
            </div>
          </div>

          {/* Kup teď */}
          <div className="bg-white rounded-xl p-6 border-2 border-lego-red shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">⚡</span>
              <h3 className="text-xl font-bold">Aukce s "Kup teď"</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Kromě standardního příhazování má aukce i možnost okamžitého nákupu za pevnou cenu. Tím aukce okamžitě končí.
            </p>
            <div className="bg-red-50 rounded p-3 text-sm">
              <strong>Ideální pro:</strong> Běžné sety, rychlý prodej
            </div>
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

        {/* Layout: 3 ohlasy v gridu + posuvník vedle (4. sloupec) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* První 3 ohlasy - statický grid (3 sloupce) */}
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center ${testimonial.color === 'bg-lego-yellow' ? 'text-gray-900' : 'text-white'} font-bold text-xl mr-3`}>
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <div className="flex text-yellow-400 text-sm">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "{testimonial.text}"
              </p>
              <div className="mt-4 text-sm text-gray-500">
                {testimonial.role}
              </div>
            </div>
          ))}

          {/* Další 3 ohlasy - posuvník (4. sloupec) */}
          <div className="relative flex flex-col">
            <div className="overflow-hidden flex-1">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${testimonialSlide * 100}%)` }}
              >
                {sliderTestimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center ${testimonial.color === 'bg-lego-yellow' ? 'text-gray-900' : 'text-white'} font-bold text-xl mr-3`}>
                          {testimonial.initial}
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <div className="flex text-yellow-400 text-sm">
                            {'⭐'.repeat(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 italic flex-1">
                        "{testimonial.text}"
                      </p>
                      <div className="mt-4 text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigační tlačítka posuvníku */}
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => setTestimonialSlide(Math.max(0, testimonialSlide - 1))}
                disabled={testimonialSlide === 0}
                className="w-10 h-10 rounded-full bg-lego-red text-white font-bold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-red-700 transition-colors"
              >
                ←
              </button>
              <div className="flex gap-2">
                {sliderTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      testimonialSlide === index ? 'bg-lego-red' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setTestimonialSlide(Math.min(sliderTestimonials.length - 1, testimonialSlide + 1))}
                disabled={testimonialSlide === sliderTestimonials.length - 1}
                className="w-10 h-10 rounded-full bg-lego-red text-white font-bold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-red-700 transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Roletka */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ❓ Časté dotazy
          </h2>
          <div className="space-y-3 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-lg text-gray-900">{faq.question}</h3>
                  <span className="text-2xl text-lego-red ml-4 flex-shrink-0">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
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
