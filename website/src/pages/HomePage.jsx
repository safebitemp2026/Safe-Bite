import React, { useState } from 'react';
import { Search, Shield, Heart, Sparkles, CheckCircle2, Lock, Scan, Users, Smartphone, ArrowRight, Zap } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function HomePage({ onSelectProduct, onOpenAppModal, onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (onSearchSubmit) {
      onSearchSubmit(searchQuery);
    }
  };

  const handleQuickPillClick = (productName) => {
    setSearchQuery(productName);
    if (onSearchSubmit) {
      onSearchSubmit(productName);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="bg-mint-light pt-12 pb-16 px-4 sm:px-6 lg:px-8 rounded-b-3xl sm:rounded-b-[40px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-100/80 border border-emerald-200/80 px-3.5 py-1 rounded-full">
              <span className="text-xs font-semibold text-emerald-800 tracking-wide">
                Your Food. Your Safety.
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Know What You Eat, <br />
              <span className="text-gray-900">Live Worry Free.</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              SafeBite helps you check packaged foods against your allergies, so every aisle feels easier and every bite feels safer.
            </p>

            <div className="flex items-center space-x-2 text-emerald-700 font-semibold text-base">
              <span>Better food choices. A healthier you.</span>
              <Heart className="w-4 h-4 fill-emerald-600 text-emerald-600 inline" />
            </div>
          </div>

          {/* Right Phone Mockup Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-80">
              
              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-6 bg-white border border-emerald-100 shadow-md px-3.5 py-2 rounded-full flex items-center space-x-2 z-20 animate-float-slow">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs">
                  🛡️
                </div>
                <span className="text-xs font-bold text-gray-800">Allergy-Check</span>
              </div>

              {/* Floating Badge 2 - Middle Right */}
              <div className="absolute top-24 -right-8 bg-white border border-emerald-100 shadow-md px-3.5 py-2 rounded-full flex items-center space-x-2 z-20 animate-float-delayed">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs">
                  💚
                </div>
                <span className="text-xs font-bold text-gray-800">Health First</span>
              </div>

              {/* Floating Badge 3 - Bottom Left */}
              <div className="absolute bottom-12 -left-8 bg-white border border-emerald-100 shadow-md px-3.5 py-2 rounded-full flex items-center space-x-2 z-20 animate-float-slow">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs">
                  ☁️
                </div>
                <span className="text-xs font-bold text-gray-800">Safer Choices</span>
              </div>

              {/* Device Frame */}
              <div className="border-[10px] border-gray-900 rounded-[44px] bg-white p-3 shadow-2xl overflow-hidden">
                <div className="bg-emerald-50/60 rounded-[32px] p-6 h-[440px] flex flex-col items-center justify-between border border-emerald-100">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mt-6 shadow-2xs">
                    <Shield className="w-9 h-9 stroke-[2]" />
                  </div>
                  
                  {/* Barcode graphic lines */}
                  <div className="w-full bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 flex flex-col items-center justify-center space-y-3 my-auto">
                    <div className="flex flex-col space-y-1.5 items-center justify-center h-12 w-12">
                      <div className="h-1 w-10 bg-gray-400 rounded-full"></div>
                      <div className="h-1.5 w-12 bg-gray-800 rounded-full"></div>
                      <div className="h-0.5 w-10 bg-gray-400 rounded-full"></div>
                      <div className="h-2 w-12 bg-emerald-600 rounded-full"></div>
                      <div className="h-1 w-10 bg-gray-400 rounded-full"></div>
                      <div className="h-1.5 w-12 bg-gray-800 rounded-full"></div>
                    </div>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
                      Ready to Scan
                    </span>
                  </div>

                  <div className="w-12 h-1 bg-gray-300 rounded-full mb-2"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Interactive Search Section matching UI */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
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
              Search our food database
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
                placeholder="Search by product"
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
      </section>


      {/* App Download Banner Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
          
          <div className="space-y-6 max-w-lg z-10">
            <div className="inline-flex items-center space-x-2 bg-emerald-100/20 border border-emerald-300/30 px-3.5 py-1 rounded-full">
              <span className="text-xs font-semibold text-emerald-200">
                Get the SafeBite App
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Scan. Check. Eat Safe.
            </h2>

            <p className="text-emerald-100 text-sm leading-relaxed">
              Carry personalized food safety guidance in your pocket.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenAppModal}
                className="bg-emerald-950 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center space-x-2 border border-emerald-800 transition-colors cursor-pointer shadow-sm"
              >
                <span>▶ Google Play</span>
              </button>
            </div>
          </div>

          {/* Right Phone Banner Graphic */}
          <div className="relative w-64 h-56 flex items-center justify-center shrink-0">
            <div className="w-52 h-64 border-4 border-emerald-800 rounded-[32px] bg-white p-3 shadow-2xl flex flex-col items-center justify-between transform rotate-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mt-4">
                <Shield className="w-7 h-7 stroke-[2]" />
              </div>
              <div className="w-full bg-emerald-50 rounded-xl p-3 text-center my-auto border border-emerald-100">
                <div className="w-1.5 h-6 bg-emerald-600 rounded-full mx-auto animate-pulse"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

// Simple Helper Target icon component
function Target(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
