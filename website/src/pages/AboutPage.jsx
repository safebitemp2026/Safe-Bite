import React, { useState } from 'react';
import { Shield, Lightbulb, CheckCircle2, Target, Heart, Lock, Scan, Users, ArrowRight, Sparkles, Eye, HandHeart, RefreshCw } from 'lucide-react';

export default function AboutPage({ onOpenAppModal, setCurrentPage }) {
  const [activeValueTab, setActiveValueTab] = useState('empathy');

  const valuesData = {
    empathy: {
      title: "Empathy First",
      icon: HandHeart,
      description: "People-first choices, clearly explained. We design with deep understanding for the daily anxieties of food allergies and dietary restrictions.",
      bullet: "Every allergen alert is prioritized for immediate user clarity."
    },
    innovation: {
      title: "Science & AI Innovation",
      icon: Sparkles,
      description: "Translating complex biochemical allergen taxonomy (spaCy NER + scikit-learn NOVA classifiers) into simple, actionable insights.",
      bullet: "Leveraging cutting-edge ML models trained on Open Food Facts data."
    },
    inclusivity: {
      title: "Universal Inclusivity",
      icon: Users,
      description: "Built for everyone—from children with celiac disease to elderly shoppers and multi-allergy households.",
      bullet: "Accessibility features including voice interaction and clear visual cues."
    },
    transparency: {
      title: "Radical Transparency",
      icon: Eye,
      description: "No hidden algorithms or mysterious scores. We explain exactly why a product is flagged and reference authoritative health guidelines.",
      bullet: "Direct ingredient breakdown with source trace-back."
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="bg-mint-light pt-12 pb-16 px-4 sm:px-6 lg:px-8 rounded-b-3xl sm:rounded-b-[40px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-100/80 border border-emerald-200/80 px-3.5 py-1 rounded-full">
              <span className="text-xs font-semibold text-emerald-800 tracking-wide">
                About SafeBite
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Our Mission Is <br />
              <span className="text-gray-900">Your Health</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              We make food allergy information easier to find, understand, and act on—helping people choose packaged foods with confidence.
            </p>

            <div className="flex items-center space-x-2 text-emerald-700 font-semibold text-base">
              <span>Because everyone deserves to eat safely.</span>
              <Heart className="w-4 h-4 fill-emerald-600 text-emerald-600 inline" />
            </div>
          </div>

          {/* Right Hero Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 sm:w-80 border-[10px] border-gray-900 rounded-[44px] bg-white p-3 shadow-2xl overflow-hidden">
              <div className="bg-emerald-50/60 rounded-[32px] p-6 h-[380px] flex flex-col items-center justify-between border border-emerald-100">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mt-8 shadow-2xs">
                  <Shield className="w-9 h-9 stroke-[2]" />
                </div>
                
                <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-emerald-100 space-y-3 text-center my-auto">
                  <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto"></div>
                  <div className="w-24 h-1 bg-gray-200 rounded-full mx-auto"></div>
                  <div className="w-16 h-1 bg-gray-200 rounded-full mx-auto"></div>
                </div>

                <div className="w-12 h-1 bg-gray-300 rounded-full mb-2"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How SafeBite Began Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-emerald-100/80 px-3.5 py-1 rounded-full">
              <span className="text-xs font-semibold text-emerald-800">
                Our Story
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              How SafeBite Began
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base pr-4">
              SafeBite began with a familiar moment: standing in a grocery aisle, turning over a package, and struggling to decide whether the ingredients were truly safe. We saw how unclear labels and generic advice created stress for people with allergies and their families. So we brought together thoughtful design, trusted food data, and personalized guidance to make each decision simpler. SafeBite turns complicated ingredient lists into clear, useful answers—because confidence should be part of every meal.
            </p>
          </div>

          {/* Right 3 Step Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Step 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs hover:shadow-sm transition-shadow flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-base">The Idea</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Remove the uncertainty from everyday food choices.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs hover:shadow-sm transition-shadow flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-base">The Solution</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Translates food data into personal instant guidance.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-2xs hover:shadow-sm transition-shadow flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-base">The Goal</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Help everyone eat with greater safety and confidence.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Banner Join the SafeBite Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-forest text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Join the SafeBite Journey
            </h2>
            <p className="text-emerald-100 text-xs sm:text-sm">
              Make confident food choices part of every day.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenAppModal}
              className="bg-emerald-950 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center space-x-2 border border-emerald-800 transition-colors cursor-pointer shadow-2xs"
            >
              <span>▶ Google Play</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

function TargetIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
