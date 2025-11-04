'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockCategories } from '@/data/mockData';

export default function NewAuctionPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    categoryId: '',
    startingPrice: '',
    buyNowPrice: '',
    duration: '7', // dny
    imageUrls: [''],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulace odeslání (zatím jen UI)
    setTimeout(() => {
      alert('Aukce byla úspěšně vytvořena! (simulace)');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleAddImageUrl = () => {
    setFormData({
      ...formData,
      imageUrls: [...formData.imageUrls, ''],
    });
  };

  const handleImageUrlChange = (index: number, value: string) => {
    const newUrls = [...formData.imageUrls];
    newUrls[index] = value;
    setFormData({ ...formData, imageUrls: newUrls });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-lego-red">Domů</Link>
        <span className="mx-2">/</span>
        <Link href="/" className="hover:text-lego-red">Aukce</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Nová aukce</span>
      </div>

      {/* Hlavička */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Vytvořit novou aukci
        </h1>
        <p className="text-gray-600">
          Vyplňte informace o vašem LEGO předmětu a vytvořte aukci
        </p>
      </div>

      {/* Formulář */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Základní informace */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Základní informace</h2>

          {/* Název */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Název aukce *
            </label>
            <input
              type="text"
              id="title"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="např. LEGO Star Wars Millennium Falcon 75192"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-lego-red focus:outline-none"
            />
          </div>

          {/* Kategorie */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Kategorie *
            </label>
            <select
              id="category"
              required
              value={formData.categoryId}
              onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-lego-red focus:outline-none"
            >
              <option value="">Vyberte kategorii</option>
              {mockCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Popis */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Popis *
            </label>
            <textarea
              id="description"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={6}
              placeholder="Podrobně popište stav, obsah, rok vydání a další relevantní informace..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-lego-red focus:outline-none"
            />
            <p className="text-sm text-gray-500 mt-1">
              Minimálně 50 znaků
            </p>
          </div>
        </div>

        {/* Ceny */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Ceny</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Počáteční cena */}
            <div>
              <label htmlFor="startingPrice" className="block text-sm font-medium text-gray-700 mb-2">
                Počáteční cena *
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="startingPrice"
                  required
                  min="0"
                  step="100"
                  value={formData.startingPrice}
                  onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                  placeholder="1000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-lego-red focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  Kč
                </span>
              </div>
            </div>

            {/* Kup teď cena */}
            <div>
              <label htmlFor="buyNowPrice" className="block text-sm font-medium text-gray-700 mb-2">
                Kup teď cena (volitelné)
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="buyNowPrice"
                  min="0"
                  step="100"
                  value={formData.buyNowPrice}
                  onChange={(e) => setFormData({ ...formData, buyNowPrice: e.target.value })}
                  placeholder="5000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-lego-red focus:outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  Kč
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Umožní kupujícím koupit ihned za tuto cenu
              </p>
            </div>
          </div>
        </div>

        {/* Doba trvání */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Doba trvání aukce</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 3, 7, 14].map((days) => (
              <label
                key={days}
                className={`
                  flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all
                  ${formData.duration === days.toString()
                    ? 'border-lego-red bg-red-50 text-lego-red font-bold'
                    : 'border-gray-300 hover:border-gray-400'
                  }
                `}
              >
                <input
                  type="radio"
                  name="duration"
                  value={days}
                  checked={formData.duration === days.toString()}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="sr-only"
                />
                <span>{days} {days === 1 ? 'den' : days <= 4 ? 'dny' : 'dní'}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Obrázky */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Obrázky</h2>
          <p className="text-sm text-gray-600 mb-4">
            Přidejte URL odkazy na obrázky vašeho LEGO předmětu
          </p>
          <div className="space-y-3">
            {formData.imageUrls.map((url, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Obrázek {index + 1} {index === 0 && '*'}
                </label>
                <input
                  type="url"
                  required={index === 0}
                  value={url}
                  onChange={(e) => handleImageUrlChange(index, e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-lego-red focus:outline-none"
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddImageUrl}
            className="mt-3 text-lego-red hover:text-red-700 font-medium text-sm"
          >
            + Přidat další obrázek
          </button>
        </div>

        {/* Tlačítka */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-8 py-4 bg-lego-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 text-lg"
          >
            {isSubmitting ? 'Vytvářím...' : 'Vytvořit aukci'}
          </button>
          <Link
            href="/"
            className="flex-1 px-8 py-4 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-colors text-center text-lg"
          >
            Zrušit
          </Link>
        </div>
      </form>
    </div>
  );
}
