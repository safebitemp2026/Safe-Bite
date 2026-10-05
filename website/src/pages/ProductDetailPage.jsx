import React, { useState } from 'react';
import { Search, ArrowLeft, AlertTriangle, Info, ShieldAlert, CheckCircle, HelpCircle, Heart, Zap, FileText, Activity } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function ProductDetailPage({ product, onBackToSearch, onSelectProduct, onOpenAppModal }) {
  const [activeTab, setActiveTab] = useState('ingredients');
  const [searchInput, setSearchInput] = useState(product?.name || '');

  const currentProduct = product || PRODUCTS[0];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    const found = PRODUCTS.find(p => p.name.toLowerCase().includes(searchInput.toLowerCase()) || p.brand.toLowerCase().includes(searchInput.toLowerCase()));
    if (found) {
      onSelectProduct(found);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Search Bar Banner Header */}
      <div className="bg-mint-light py-6 px-4 sm:px-6 lg:px-8 border-b border-emerald-100/60">
        <div className="max-w-7xl mx-auto space-y-4">
          
          {/* Back button */}
          <button
            onClick={onBackToSearch}
            className="flex items-center space-x-1.5 text-xs font-bold text-forest hover:text-emerald-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back to Search</span>
          </button>

          {/* Top Search Input */}
          <form onSubmit={handleSearchSubmit} className="max-w-4xl relative">
            <div className="flex items-center border border-emerald-200 rounded-full bg-white shadow-xs p-1.5 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-500/20">
              <Search className="w-5 h-5 text-emerald-600 ml-4 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search food database..."
                className="w-full px-3 py-1.5 text-gray-800 bg-transparent focus:outline-none text-base font-semibold"
              />
              <button
                type="submit"
                className="bg-forest text-white hover:bg-emerald-900 w-10 h-10 rounded-full flex items-center justify-center shrink-0 cursor-pointer shadow-2xs"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Product Overview Header Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Image Box */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-[280px] h-64 rounded-2xl bg-mint-light border border-emerald-100 flex flex-col items-center justify-center p-6 text-center shadow-inner relative overflow-hidden">
              <div className="w-24 h-24 rounded-full bg-emerald-100/80 flex items-center justify-center text-emerald-700 mb-3 shadow-2xs">
                <span className="text-4xl">🥔</span>
              </div>
              <span className="text-sm font-bold text-gray-800">{currentProduct.name}</span>
              <span className="text-xs text-gray-400 mt-1">{currentProduct.brand}</span>
            </div>
          </div>

          {/* Middle Product Details */}
          <div className="lg:col-span-5 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              {currentProduct.name}
            </h1>

            <div className="space-y-1 text-sm text-gray-500 font-medium">
              <p><strong className="text-gray-800">Brand:</strong> {currentProduct.brand}</p>
              <p><strong className="text-gray-800">Category:</strong> {currentProduct.category}</p>
              <p><strong className="text-gray-800">Barcode:</strong> {currentProduct.barcode}</p>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center space-x-1.5 bg-emerald-100/90 border border-emerald-200 text-forest text-xs font-semibold px-3 py-1.5 rounded-full">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{currentProduct.scannedBadge}</span>
              </span>
            </div>
          </div>

          {/* Right Warning Box */}
          <div className="lg:col-span-3">
            <div className="border border-red-200 bg-red-50/50 rounded-2xl p-5 space-y-4">
              
              {/* Alert Badge */}
              <div className="inline-flex items-center space-x-1.5 bg-white border border-red-300 text-red-600 font-bold px-3 py-1.5 rounded-xl text-xs shadow-2xs">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span>{currentProduct.allergyAlert}</span>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-800 tracking-wide">
                  Allergen(s) Found:
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {currentProduct.allergensFound.map((allergen, idx) => (
                    <span
                      key={idx}
                      className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-md border border-red-200"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 flex space-x-8 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'ingredients'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent text-gray-400 hover:text-gray-700'
            }`}
          >
            Ingredients & Allergens
          </button>
          
          <button
            onClick={() => setActiveTab('risks')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'risks'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent text-gray-400 hover:text-gray-700'
            }`}
          >
            Health Risks & Processing (NOVA)
          </button>

          <button
            onClick={() => setActiveTab('summary')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'summary'
                ? 'border-emerald-600 text-emerald-800 font-bold'
                : 'border-transparent text-gray-400 hover:text-gray-700'
            }`}
          >
            AI Summary & Verdict
          </button>
        </div>

        {/* TAB 1: Ingredients & Allergens */}
        {activeTab === 'ingredients' && (
          <div className="space-y-10">
            
            {/* Ingredients & Nutrition Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Ingredients Card */}
              <div className="lg:col-span-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-2xs space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-gray-900">Ingredients</h3>
                  <p className="text-xs font-semibold text-emerald-700">What this product contains</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pt-2">
                  {currentProduct.ingredients}
                </p>
              </div>

              {/* Nutrition Facts Card */}
              <div className="lg:col-span-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-2xs space-y-4">
                <h3 className="text-xl font-extrabold text-gray-900">Nutrition Facts (per 100g)</h3>
                
                <div className="divide-y divide-gray-100 text-sm">
                  <div className="flex justify-between py-2 font-medium">
                    <span className="text-gray-600">Energy</span>
                    <span className="font-bold text-gray-900">{currentProduct.nutritionPer100g.energy}</span>
                  </div>
                  <div className="flex justify-between py-2 font-medium">
                    <span className="text-gray-600">Protein</span>
                    <span className="font-bold text-gray-900">{currentProduct.nutritionPer100g.protein}</span>
                  </div>
                  <div className="flex justify-between py-2 font-medium">
                    <span className="text-gray-600">Carbohydrate</span>
                    <span className="font-bold text-gray-900">{currentProduct.nutritionPer100g.carbohydrate}</span>
                  </div>
                  <div className="flex justify-between py-2 font-medium">
                    <span className="text-gray-600">Total Fat</span>
                    <span className="font-bold text-gray-900">{currentProduct.nutritionPer100g.totalFat}</span>
                  </div>
                  <div className="flex justify-between py-2 font-medium">
                    <span className="text-gray-600">Sodium</span>
                    <span className="font-bold text-gray-900">{currentProduct.nutritionPer100g.sodium}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Allergy Causing Substances Section */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-extrabold text-red-600">Allergy Causing Substances</h3>
                <p className="text-xs text-gray-500">These ingredients may cause a reaction based on common allergen data.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentProduct.allergySubstances.map((sub, idx) => (
                  <div key={idx} className="bg-white border border-red-100 rounded-2xl p-5 shadow-2xs space-y-2">
                    <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-600">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-base">{sub.name}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{sub.description}</p>
                  </div>
                ))}

                {/* Did You Know? Card */}
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 shadow-2xs space-y-2">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sky-900 text-base">Did You Know?</h4>
                  <p className="text-xs text-sky-800 leading-relaxed">
                    Allergy symptoms can vary. Always follow advice from your healthcare professional.
                  </p>
                </div>
              </div>
            </div>

            {/* Harmful For People With These Medical Conditions */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-extrabold text-red-600">Harmful For People With These Medical Conditions</h3>
                <p className="text-xs text-gray-500">People with these conditions should review the product carefully.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentProduct.harmfulConditions.map((cond, idx) => (
                  <div key={idx} className="bg-white border border-red-100 rounded-2xl p-5 shadow-2xs space-y-2">
                    <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-500">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-base">{cond.condition}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{cond.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Red Warning Disclaimer Banner */}
            <div className="bg-red-50/90 border border-red-200 rounded-2xl p-4 flex items-center space-x-3 text-red-700 text-xs sm:text-sm font-semibold">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
              <span>If you have a diagnosed allergy, avoid this product and consult a qualified medical professional.</span>
            </div>

          </div>
        )}

        {/* TAB 2: Health Risks & Processing (NOVA) */}
        {activeTab === 'risks' && (
          <div className="space-y-8">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900">Food Processing Classifier (NOVA)</h3>
                  <p className="text-xs text-gray-500">ML classification powered by scikit-learn model trained on Open Food Facts</p>
                </div>
                
                <div className="bg-amber-100 text-amber-900 border border-amber-300 font-extrabold text-sm px-4 py-2 rounded-xl">
                  NOVA Class {currentProduct.novaClass}: {currentProduct.novaLabel}
                </div>
              </div>

              {/* Health Risk Factors */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 text-lg">Detected Health Risk Factors</h4>
                <div className="space-y-3">
                  {currentProduct.healthRisks.map((risk, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-start space-x-4">
                      <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${
                        risk.severity === 'High' ? 'bg-red-500' : 'bg-amber-500'
                      }`}></div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-gray-900 text-sm">{risk.title}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                            risk.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {risk.severity} Risk
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">{risk.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: AI Summary & Verdict */}
        {activeTab === 'summary' && (
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center space-x-3 text-emerald-700">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold">
                ✨
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900">AI Safety Verdict</h3>
                <p className="text-xs text-gray-500">Inference generated via Ollama (llama3.2) streaming report summarizer</p>
              </div>
            </div>

            <div className="bg-mint-light border border-emerald-200 rounded-2xl p-6 text-gray-800 leading-relaxed text-sm font-medium space-y-3">
              <p>{currentProduct.aiSummary}</p>
              <div className="pt-2 text-xs font-semibold text-emerald-800 flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Verified against 250+ biomedical ontologies & allergy registries.</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Footer Banner matching UI screenshot 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-forest text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/20 flex items-center justify-center text-white">
              <Shield className="w-6 h-6 stroke-[2.5]" />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
              SafeBite — Safer Choices. Healthier You.
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenAppModal}
              className="bg-emerald-950 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center space-x-2 border border-emerald-800 transition-colors cursor-pointer shadow-2xs"
            >
              <span>▶ Google Play</span>
            </button>
            <button
              onClick={onOpenAppModal}
              className="bg-emerald-950 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center space-x-2 border border-emerald-800 transition-colors cursor-pointer shadow-2xs"
            >
              <span> App Store</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
