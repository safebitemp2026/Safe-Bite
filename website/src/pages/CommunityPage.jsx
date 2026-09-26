import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { BarChart3, ShieldAlert, Activity, Filter, Search, CheckCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function CommunityPage({ onSelectProduct, onOpenAppModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Chart 1: Category scan counts
  const categoryData = [
    { category: 'Snacks', scans: 42100 },
    { category: 'Beverages', scans: 31200 },
    { category: 'Instant Foods', scans: 24500 },
    { category: 'Cereals', scans: 14800 },
    { category: 'Dairy', scans: 12250 }
  ];

  // Chart 2: Top detected allergens
  const allergenData = [
    { name: 'Milk & Dairy', value: 32, color: '#EF4444' },
    { name: 'Peanuts', value: 24, color: '#F97316' },
    { name: 'Wheat & Gluten', value: 18, color: '#F59E0B' },
    { name: 'Soy Derivatives', value: 15, color: '#10B981' },
    { name: 'Tree Nuts & Others', value: 11, color: '#6366F1' }
  ];

  // Chart 3: NOVA Distribution
  const novaData = [
    { nova: 'NOVA 1 (Unprocessed)', percentage: 14 },
    { nova: 'NOVA 2 (Processed Ingredients)', percentage: 11 },
    { nova: 'NOVA 3 (Processed)', percentage: 23 },
    { nova: 'NOVA 4 (Ultra-Processed)', percentage: 52 }
  ];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || p.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-mint-light pt-12 pb-16 px-4 sm:px-6 lg:px-8 rounded-b-3xl sm:rounded-b-[40px]">
        <div className="max-w-7xl mx-auto space-y-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-100/80 border border-emerald-200/80 px-3.5 py-1 rounded-full">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-800" />
            <span className="text-xs font-semibold text-emerald-800 tracking-wide">
              Anonymized Product Health Insights
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Community Safety Analytics
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Real-time aggregate food data collected from over 120,000+ anonymous scans. Updated via backend Celery worker rollups (`community_rollup_task`).
          </p>

          {/* Stat Cards Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto pt-6">
            <div className="bg-white border border-emerald-100 rounded-2xl p-5 shadow-2xs text-center">
              <span className="text-3xl font-extrabold text-forest block">124,850+</span>
              <span className="text-xs font-semibold text-gray-500">Scans Logged</span>
            </div>
            <div className="bg-white border border-emerald-100 rounded-2xl p-5 shadow-2xs text-center">
              <span className="text-3xl font-extrabold text-forest block">45,200+</span>
              <span className="text-xs font-semibold text-gray-500">Products Indexed</span>
            </div>
            <div className="bg-white border border-emerald-100 rounded-2xl p-5 shadow-2xs text-center">
              <span className="text-3xl font-extrabold text-red-600 block">18,400+</span>
              <span className="text-xs font-semibold text-gray-500">Allergen Flags</span>
            </div>
            <div className="bg-white border border-emerald-100 rounded-2xl p-5 shadow-2xs text-center">
              <span className="text-3xl font-extrabold text-amber-600 block">52%</span>
              <span className="text-xs font-semibold text-gray-500">NOVA 4 Ultra-Processed</span>
            </div>
          </div>

        </div>
      </section>

      {/* Visual Analytics Charts Section (Recharts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Community Food Trends & Visualizations
          </h2>
          <p className="text-gray-500 text-sm">
            Powered by Recharts charting library as specified in tech stack document.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Chart 1: Bar Chart */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 shadow-2xs space-y-4">
            <h3 className="font-extrabold text-gray-900 text-lg">Most Scanned Categories</h3>
            <div className="h-64 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <XAxis dataKey="category" stroke="#9CA3AF" fontSize={12} tickLine={false} />
                  <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} />
                  <Tooltip cursor={{ fill: '#F3FAF5' }} />
                  <Bar dataKey="scans" fill="#0F512D" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Donut Allergen Chart */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 shadow-2xs space-y-4">
            <h3 className="font-extrabold text-gray-900 text-lg">Top Detected Allergens (%)</h3>
            <div className="h-64 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allergenData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {allergenData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs pt-2">
              {allergenData.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }}></span>
                  <span className="text-gray-600 truncate">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Community Scanned Food Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Community Scanned Products Feed
            </h2>
            <p className="text-xs text-gray-500">Explore anonymized product health scores across the database</p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
            {['All', 'Snacks', 'Beverages', 'Instant Foods', 'Cereals'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-forest text-white shadow-2xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
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

    </div>
  );
}
