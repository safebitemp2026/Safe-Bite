import React from 'react';
import { Shield, Globe, Share2, MessageCircle, Send } from 'lucide-react';

export default function Footer({ setCurrentPage, onOpenAppModal }) {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand */}
        <div 
          onClick={() => setCurrentPage('home')}
          className="flex items-center space-x-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-forest flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="text-xl font-bold text-gray-900 group-hover:text-forest transition-colors">SafeBite</span>
        </div>

        {/* Center: Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-medium">
          <button 
            onClick={() => setCurrentPage('home')}
            className="hover:text-forest transition-colors cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('about')}
            className="hover:text-forest transition-colors cursor-pointer"
          >
            About Us
          </button>

          <button 
            onClick={onOpenAppModal}
            className="hover:text-forest transition-colors cursor-pointer"
          >
            Get the App
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
        © 2026 SafeBite. All rights reserved. Powered by AI Food Safety Infrastructure.
      </div>
    </footer>
  );
}
