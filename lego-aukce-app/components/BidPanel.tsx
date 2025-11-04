'use client';

import { useState } from 'react';
import { Auction } from '@/types';

interface BidPanelProps {
  auction: Auction;
}

export default function BidPanel({ auction }: BidPanelProps) {
  const [bidAmount, setBidAmount] = useState(auction.currentPrice + 100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const minBid = auction.currentPrice + 100; // Minimální příhoz je +100 Kč

  const handleBidSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Simulace odeslání příhozu (zatím jen UI)
    setTimeout(() => {
      setMessage('✅ Váš příhoz byl úspěšně odeslán!');
      setIsSubmitting(false);
      // V reálné aplikaci by se zde aktualizovala aktuální cena
    }, 1000);
  };

  const handleBuyNow = () => {
    if (confirm(`Opravdu chcete koupit tento předmět za ${auction.buyNowPrice?.toLocaleString('cs-CZ')} Kč?`)) {
      setMessage('✅ Koupě byla úspěšná! Prodejce vás bude kontaktovat.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
      <div className="mb-6">
        <div className="text-sm text-gray-600 mb-1">Aktuální cena</div>
        <div className="text-3xl font-bold text-lego-red">
          {auction.currentPrice.toLocaleString('cs-CZ')} Kč
        </div>
        <div className="text-sm text-gray-500 mt-1">
          {auction.totalBids} příhozů
        </div>
      </div>

      {/* Formulář pro přihazování */}
      <form onSubmit={handleBidSubmit} className="space-y-4">
        <div>
          <label htmlFor="bidAmount" className="block text-sm font-medium text-gray-700 mb-2">
            Váš příhoz (min. {minBid.toLocaleString('cs-CZ')} Kč)
          </label>
          <div className="relative">
            <input
              type="number"
              id="bidAmount"
              value={bidAmount}
              onChange={(e) => setBidAmount(Number(e.target.value))}
              min={minBid}
              step="100"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-lego-red focus:outline-none text-lg font-semibold"
              disabled={isSubmitting}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              Kč
            </span>
          </div>
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={() => setBidAmount(minBid)}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
            >
              +100 Kč
            </button>
            <button
              type="button"
              onClick={() => setBidAmount(auction.currentPrice + 500)}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
            >
              +500 Kč
            </button>
            <button
              type="button"
              onClick={() => setBidAmount(auction.currentPrice + 1000)}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
            >
              +1000 Kč
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || bidAmount < minBid}
          className="w-full px-6 py-4 bg-lego-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-lg"
        >
          {isSubmitting ? 'Odesílám...' : 'Přihodit'}
        </button>
      </form>

      {/* Tlačítko "Kup teď" */}
      {auction.buyNowPrice && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={handleBuyNow}
            className="w-full px-6 py-3 bg-lego-yellow text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Kup teď za {auction.buyNowPrice.toLocaleString('cs-CZ')} Kč
          </button>
        </div>
      )}

      {/* Zpráva */}
      {message && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
          {message}
        </div>
      )}

      {/* Info */}
      <div className="mt-6 space-y-2 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <span>⏰</span>
          <span>Aukce končí: {new Date(auction.endDate).toLocaleString('cs-CZ')}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>💳</span>
          <span>Bezpečná platba</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>🛡️</span>
          <span>Ochrana kupujícího</span>
        </div>
      </div>
    </div>
  );
}
