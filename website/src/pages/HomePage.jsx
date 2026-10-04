import React, { useState } from 'react';
import { Search, Shield, Heart, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function HomePage({ onSelectProduct, onOpenAppModal }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    // Find matching product or default to first
    const matched = PRODUCTS.find(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()));
    if (matched) {
      onSelectProduct(matched);
    } else {
      // Default to Lays Classic if no exact match
      onSelectProduct(PRODUCTS[0]);
    }
  };

  const handleQuickPillClick = (productName) => {
    setSearchQuery(productName);
    const matched = PRODUCTS.find(p => p.name.toLowerCase().includes(productName.toLowerCase()));
    if (matched) {
      onSelectProduct(matched);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Interactive Search Section matching UI */}
      <section className="bg-mint-light pt-12 pb-16 px-4 sm:px-6 lg:px-8 rounded-b-3xl sm:rounded-b-[40px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="border-2 border-emerald-600/30 rounded-3xl p-6 sm:p-10 bg-white shadow-xs text-center space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              <span className="text-xs font-semibold text-emerald-800">
                Search Packaged Food
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">
                Is Your Packaged Food Safe?
              </h2>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Search our food database to understand ingredients, allergens, and health risks.
              </p>
            </div>

            {/* Search Input Bar */}
            <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto relative">
              <div className="flex items-center border border-gray-300 rounded-full bg-white shadow-xs p-1.5 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
                <Search className="w-5 h-5 text-gray-400 ml-4 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by product or brand"
                  className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none text-base font-medium"
                />
                <button
                  type="submit"
                  className="bg-forest text-white hover:bg-emerald-900 px-6 py-2.5 rounded-full font-semibold text-sm flex items-center space-x-1.5 transition-colors cursor-pointer shrink-0 shadow-2xs"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* Community Scanned Food Directory / Recently Scanned Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Recently Scanned Products
            </h2>
            <p className="text-xs text-gray-500">Explore anonymized product health scores recently searched by community</p>
          </div>
        </div>

        {/* Product Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 6).map((prod) => (
            <div
              key={prod.id}
              onClick={() => onSelectProduct(prod)}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all cursor-pointer space-y-4 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    {prod.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-forest transition-colors mt-2">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-gray-400">{prod.brand}</p>
                </div>
                
                <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-lg">
                  NOVA {prod.novaClass}
                </span>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-gray-100">
                <span className="text-xs font-semibold text-gray-500">Contains Allergens:</span>
                <div className="flex flex-wrap gap-1.5">
                  {prod.allergensFound.map((alg, idx) => (
                    <span key={idx} className="bg-red-100/80 text-red-800 text-[11px] font-semibold px-2 py-0.5 rounded">
                      {alg}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center text-xs font-bold text-forest pt-2">
                <span>View Health Report</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              <span className="text-xs font-semibold text-emerald-800">
                About SafeBite
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              What SafeBite Is
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base pr-4">
              SafeBite helps you check packaged foods against your allergies, so every aisle feels easier and every bite feels safer. We make food allergy information easier to find, understand, and act on—helping people choose packaged foods with confidence.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-6">
              How Community Insights Are Collected
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base pr-4">
              When users scan products using the SafeBite app, anonymized, aggregated health insights are collected. No personal user data is ever shown—only product-level community insights to help everyone make better choices.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-6">
              Privacy Explanation
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base pr-4">
              Your health preferences remain protected and private. We only collect scan data to build product insights, without tying any scans to your personal identity.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
