import React, { useState } from 'react';
import { Sparkles, Sword, Flame, Shield, MapPin, UserCheck, FileSpreadsheet } from 'lucide-react';
import { FormData, Language } from './types';
import { translations } from './translations';
import { LanguageToggle } from './components/LanguageToggle';
import { ExpeditionForm } from './components/ExpeditionForm';
import { SuccessModal } from './components/SuccessModal';
import { TermsModal } from './components/TermsModal';
import { QASpecsModal } from './components/QASpecsModal';

export default function App() {
  const [lang, setLang] = useState<Language>('th');
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    contactNumber: '',
    dob: '',
    archaeologyExp: '',
    preferredRole: '',
    expeditionRegion: '',
    desiredSalary: '',
    contactMethod: 'email',
    passportFile: null,
    comments: '',
    agreeTerms: false,
  });

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [dossierId, setDossierId] = useState<string>('');
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  const t = translations[lang];

  const handleFormSuccess = (data: FormData) => {
    const randomCode = 'DSC-' + Math.floor(100000 + Math.random() * 900000);
    setDossierId(randomCode);
    setSubmittedData(data);
    setIsSuccessOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#070b14] text-slate-100 overflow-x-hidden selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Banner: Developer & Student ID info as requested */}
      <div className="w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-b border-emerald-500/30 px-4 py-2 text-center text-xs font-semibold text-emerald-300 flex items-center justify-center gap-2">
        <UserCheck className="h-4 w-4 text-emerald-400 shrink-0" />
        <span>ผู้พัฒนา / ผู้จัดทำ:</span>
        <span className="text-white font-bold">นาย พีรพัฒน์ ธงศรี</span>
        <span className="text-emerald-500">•</span>
        <span>รหัสนักศึกษา:</span>
        <span className="text-amber-400 font-mono font-bold">66040233120</span>
        <span className="hidden sm:inline-block text-slate-500">|</span>
        <span className="hidden sm:inline-block text-slate-400">Assignment: RealBugz Form & QA Bug Finding</span>
      </div>

      {/* Demon Slayer Atmospheric Ambient Lighting */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 h-96 w-full max-w-5xl rounded-full bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-rose-600/15 blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/15 blur-[150px] pointer-events-none" />
      <div className="fixed top-1/3 -left-32 h-80 w-80 rounded-full bg-emerald-700/15 blur-[130px] pointer-events-none" />

      {/* Japanese Grid / Ichimatsu faint ambient background texture */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#064e3b12_1px,transparent_1px),linear-gradient(to_bottom,#064e3b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <main className="relative z-10 mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Top Control Bar: Demon Slayer Corps Emblem & Language Switcher */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-500/20">
          <div className="flex items-center gap-3.5">
            {/* Tanjiro Haori Styled Emblem Box with 滅 Kanji */}
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ichimatsu text-emerald-300 shadow-xl shadow-emerald-950/60 ring-2 ring-emerald-400/40">
              <span className="font-kanji text-2xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                滅
              </span>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 ring-2 ring-[#070b14]">
                <Flame className="h-2.5 w-2.5 text-white" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-emerald-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>鬼殺隊 • RealBugz Task Assessment</span>
              </div>
              <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-tight font-kanji">
                鬼滅の刃 探検・隊士選抜 (RealBugz Task Form)
              </h1>
            </div>
          </div>

          {/* Bilingual Language Switcher */}
          <div className="self-end sm:self-center flex items-center gap-3">
            <LanguageToggle
              currentLanguage={lang}
              onLanguageChange={(newLang) => setLang(newLang)}
            />
          </div>
        </header>

        {/* Hero Title & Subtitle banner with Wisteria and Sword Badges */}
        <section className="text-center space-y-3 pt-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0c1424]/90 px-4 py-1.5 text-xs font-bold text-emerald-300 border border-emerald-500/30 shadow-lg backdrop-blur-md">
            <Sword className="h-3.5 w-3.5 text-emerald-400" />
            <span>Archaeology & Demon Slayer Task Application</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white font-kanji">
            {t.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </section>

        {/* Main Demon Slayer / RealBugz Task Registration Form */}
        <section aria-label="RealBugz Task Registration Form">
          <ExpeditionForm
            formData={formData}
            setFormData={setFormData}
            onSuccess={handleFormSuccess}
            onOpenTerms={() => setIsTermsOpen(true)}
            onOpenSpecs={() => setIsSpecsOpen(true)}
            t={t}
          />
        </section>

        {/* Footer */}
        <footer className="pt-6 pb-8 border-t border-emerald-500/20 text-center text-xs text-slate-400 space-y-2">
          <p className="flex items-center justify-center gap-2 font-medium">
            <span className="font-kanji text-emerald-400 font-bold">鬼殺隊 本部</span>
            <span>• Demon Slayer Corps & Archaeology Expedition Task Form • RealBugz Concept</span>
          </p>
          <p className="text-[11px] text-slate-400 font-mono">
            Candidate: <strong className="text-emerald-300">พีรพัฒน์ ธงศรี</strong> (Student ID: <strong className="text-amber-400">66040233120</strong>)
          </p>
        </footer>
      </main>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        formData={submittedData}
        dossierId={dossierId}
        t={t}
      />

      {/* Terms Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        t={t}
      />

      {/* QA Test Specifications Modal */}
      <QASpecsModal
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
        t={t}
      />
    </div>
  );
}


