import React from 'react';
import { X, Shield, Smartphone, QrCode, CheckCircle2 } from 'lucide-react';

export default function AppModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-emerald-100">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-forest flex items-center justify-center text-white mx-auto shadow-md">
            <Shield className="w-8 h-8 stroke-[2.5]" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900">Get SafeBite App</h3>
          <p className="text-xs text-gray-500 max-w-xs mx-auto">
            Scan food labels , check personal allergy risks instantly, and chat with AI health assistant.
          </p>
        </div>

        {/* QR Code Demo Placeholder */}
        <div className="bg-mint-light border border-emerald-200 rounded-2xl p-4 text-center space-y-3">
          <div className="w-32 h-32 bg-white rounded-xl mx-auto p-2 border border-emerald-100 flex items-center justify-center shadow-xs">
            <QrCode className="w-24 h-24 text-forest" />
          </div>
          <p className="text-xs font-semibold text-emerald-800">
            Scan QR code to install
          </p>
        </div>

        {/* App Store Buttons */}
        <div className="flex justify-center pt-2">
          <button
            onClick={() => alert('Redirecting to Google Play Store...')}
            className="w-48 bg-emerald-950 hover:bg-black text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 border border-emerald-800 transition-colors cursor-pointer"
          >
            <span>▶ Google Play</span>
          </button>
        </div>

      </div>
    </div>
  );
}
