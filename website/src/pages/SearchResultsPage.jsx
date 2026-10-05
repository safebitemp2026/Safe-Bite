import React from 'react';
import { PRODUCTS } from '../data/products';
import { ArrowLeft, Search, AlertCircle } from 'lucide-react';

export default function SearchResultsPage({ searchQuery, onSelectProduct, onBackToSearch }) {
  // Filter products based on search query
  const results = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FAFCFA]">
      <div className="max-w-5xl mx-auto space-y-6">
        
        <button
          onClick={onBackToSearch}
          className="flex items-center space-x-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Search Results for "{searchQuery}"
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Found {results.length} product{results.length !== 1 ? 's' : ''}
          </p>
        </div>

        {results.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center shadow-xs">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-4 text-gray-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 text-sm">
              We couldn't find any products matching "{searchQuery}". Try searching for something else.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((product) => (
              <div 
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="mb-3">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-forest transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-3">{product.ingredients}</p>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 uppercase border border-emerald-100">
                    {product.category}
                  </span>
                  
                  {product.allergyAlert && product.allergensFound && product.allergensFound.length > 0 && (
                    <span className="inline-flex items-center space-x-1 text-red-600 text-xs font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{product.allergensFound.length} Allergens</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
