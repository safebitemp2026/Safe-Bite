import React from 'react';
import { Shield, Smartphone, Heart, Search, BarChart3, Info, Home as HomeIcon } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage, onOpenAppModal }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => setCurrentPage('home')}
          className="flex items-center space-x-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-forest flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
            <Shield className="w-6 h-6 stroke-[2.5]" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-forest transition-colors">
            SafeBite
          </span>
        </div>

        {/* Navigation links */}
        <nav className="flex items-center space-x-1 sm:space-x-2">
          
          {/* Home button */}
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
              currentPage === 'home'
                ? 'bg-emerald-100/90 text-forest border border-emerald-200/80 shadow-2xs font-semibold'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
            }`}
          >
            <HomeIcon className="w-4 h-4" />
            <span>Home</span>
          </button>

          {/* About Us button */}
          <button
            onClick={() => setCurrentPage('about')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
              currentPage === 'about'
                ? 'bg-emerald-100/90 text-forest border border-emerald-200/80 shadow-2xs font-semibold'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>About Us</span>
          </button>

          {/* Community Insights button */}
          <button
            onClick={() => setCurrentPage('community')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
              currentPage === 'community'
                ? 'bg-emerald-100/90 text-forest border border-emerald-200/80 shadow-2xs font-semibold'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Community Insights</span>
          </button>

          {/* Get the App button */}
          <button
            onClick={onOpenAppModal}
            className="ml-2 flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-200 text-forest bg-emerald-50/80 hover:bg-emerald-100/80 transition-colors shadow-2xs cursor-pointer"
          >
            <Smartphone className="w-4 h-4 text-forest" />
            <span>Get the App</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
