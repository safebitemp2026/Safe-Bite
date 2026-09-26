import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CommunityPage from './pages/CommunityPage';
import AppModal from './components/AppModal';
import { PRODUCTS } from './data/products';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFA] text-gray-900 font-sans selection:bg-emerald-100 selection:text-forest">
      
      {/* Persistent Navigation Header */}
      <Header 
        currentPage={currentPage} 
        setCurrentPage={handlePageChange} 
        onOpenAppModal={() => setIsAppModalOpen(true)}
      />

      {/* Dynamic View Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onSelectProduct={handleSelectProduct}
            onOpenAppModal={() => setIsAppModalOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onOpenAppModal={() => setIsAppModalOpen(true)}
            setCurrentPage={handlePageChange}
          />
        )}

        {currentPage === 'product' && (
          <ProductDetailPage 
            product={selectedProduct}
            onBackToSearch={() => handlePageChange('home')}
            onSelectProduct={handleSelectProduct}
            onOpenAppModal={() => setIsAppModalOpen(true)}
          />
        )}

        {currentPage === 'community' && (
          <CommunityPage 
            onSelectProduct={handleSelectProduct}
            onOpenAppModal={() => setIsAppModalOpen(true)}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer 
        setCurrentPage={handlePageChange} 
        onOpenAppModal={() => setIsAppModalOpen(true)}
      />

      {/* App Download Modal */}
      <AppModal 
        isOpen={isAppModalOpen} 
        onClose={() => setIsAppModalOpen(false)} 
      />

    </div>
  );
}
