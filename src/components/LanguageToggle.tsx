import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div
        id="language-toggle-wrapper"
        className="relative flex items-center rounded-full bg-[#0a101d]/90 p-1 border border-emerald-500/30 shadow-lg shadow-emerald-950/40 backdrop-blur-md"
      >
        <div className="flex items-center gap-1 px-2 text-emerald-400">
          <Languages className="h-4 w-4" />
        </div>

        {/* TH button */}
        <button
          type="button"
          id="toggle-lang-th"
          onClick={() => onLanguageChange('th')}
          className={`relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
            currentLanguage === 'th'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/30 font-black'
              : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-label="Switch to Thai"
        >
          <span className="text-sm leading-none">🇹🇭</span>
          <span>TH</span>
        </button>

        {/* EN button */}
        <button
          type="button"
          id="toggle-lang-en"
          onClick={() => onLanguageChange('en')}
          className={`relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
            currentLanguage === 'en'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/30 font-black'
              : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-label="Switch to English"
        >
          <span className="text-sm leading-none">🇬🇧</span>
          <span>EN</span>
        </button>
      </div>
    </div>
  );
};

