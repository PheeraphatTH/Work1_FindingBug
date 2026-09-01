import React from 'react';
import {
  Award,
  FileCheck,
  X,
  Printer,
  Sparkles,
  Sword,
  ShieldCheck,
  MapPin,
  Briefcase,
  DollarSign,
  PhoneCall,
  MessageSquare,
} from 'lucide-react';
import { FormData, Translations } from '../types';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: FormData | null;
  dossierId: string;
  t: Translations;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  formData,
  dossierId,
  t,
}) => {
  if (!isOpen || !formData) return null;

  const handlePrint = () => {
    window.print();
  };

  const selectedRegion = t.expeditionRegions.find(r => r.value === formData.expeditionRegion);
  const selectedRole = t.preferredRoles.find(r => r.value === formData.preferredRole);
  const selectedExp = t.archaeologyExpOptions[formData.archaeologyExp];

  return (
    <div
      id="success-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050811]/90 p-4 backdrop-blur-lg animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="success-modal-card"
        className="relative max-h-[92vh] w-full max-w-lg overflow-hidden rounded-3xl border border-emerald-500/50 bg-gradient-to-b from-[#0e1626] via-[#0a101d] to-[#060a14] p-6 sm:p-7 shadow-2xl backdrop-blur-2xl ring-1 ring-emerald-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Ichimatsu Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-ichimatsu" />

        {/* Glow ambient background */}
        <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-rose-500/20 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          id="close-success-btn"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Icon with Kanji 滅 (Metsu) */}
        <div className="text-center mb-5 mt-2">
          <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-slate-950 shadow-xl shadow-emerald-500/30 ring-4 ring-emerald-500/20">
            <span className="font-kanji text-4xl font-black tracking-tighter text-[#060a14]">
              滅
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-black text-emerald-400 border border-emerald-500/30 mb-1.5">
            <Sparkles className="h-3 w-3" />
            <span>{t.successSubtitle}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {t.successTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto leading-relaxed">
            {t.successMessage}
          </p>
        </div>

        {/* Slayer Code Box */}
        <div className="mb-4 rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-3 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300/90">
            {t.successDossierId}
          </span>
          <p className="font-mono text-xl font-black tracking-widest text-emerald-400">
            {dossierId}
          </p>
        </div>

        {/* Summary Card */}
        <div className="space-y-2 rounded-2xl bg-[#080d17]/80 p-4 border border-slate-700/60 text-xs sm:text-sm max-h-[36vh] overflow-y-auto pr-1">
          <div className="flex justify-between border-b border-slate-800 pb-1.5">
            <span className="text-slate-400">{t.fullNameLabel}:</span>
            <span className="font-bold text-white text-right">{formData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-1.5">
            <span className="text-slate-400">{t.emailLabel}:</span>
            <span className="font-semibold text-emerald-300 text-right">{formData.email}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-1.5">
            <span className="text-slate-400">{t.contactNumberLabel}:</span>
            <span className="font-mono font-semibold text-amber-300 text-right">{formData.contactNumber}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-1.5">
            <span className="text-slate-400">{t.dobLabel}:</span>
            <span className="font-semibold text-white text-right">{formData.dob}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-1.5">
            <span className="text-slate-400 flex items-center gap-1">
              <Sword className="h-3.5 w-3.5 text-emerald-400" />
              {t.archaeologyExpLabel}:
            </span>
            <span className="font-bold text-emerald-300 text-right">{selectedExp?.label || formData.archaeologyExp}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-1.5">
            <span className="text-slate-400 flex items-center gap-1">
              <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
              {t.preferredRoleLabel}:
            </span>
            <span className="font-semibold text-cyan-300 text-right">{selectedRole?.label || formData.preferredRole}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-1.5">
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-rose-400" />
              {t.expeditionRegionLabel}:
            </span>
            <span className="font-semibold text-rose-300 text-right">{selectedRegion?.label || formData.expeditionRegion}</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-1.5">
            <span className="text-slate-400 flex items-center gap-1">
              <DollarSign className="h-3.5 w-3.5 text-amber-400" />
              {t.desiredSalaryLabel}:
            </span>
            <span className="font-mono font-bold text-amber-300 text-right">${formData.desiredSalary} USD/wk</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-1.5">
            <span className="text-slate-400 flex items-center gap-1">
              <PhoneCall className="h-3.5 w-3.5 text-teal-400" />
              {t.contactMethodLabel}:
            </span>
            <span className="font-semibold text-teal-300 text-right">{t.contactMethods[formData.contactMethod]}</span>
          </div>
          {formData.comments && (
            <div className="flex flex-col border-b border-slate-800 pb-1.5">
              <span className="text-slate-400 flex items-center gap-1">
                <MessageSquare className="h-3.5 w-3.5 text-indigo-400" />
                {t.commentsLabel}:
              </span>
              <span className="text-slate-200 mt-1 italic pl-2 border-l-2 border-slate-700">{formData.comments}</span>
            </div>
          )}
          <div className="flex justify-between items-center pt-1">
            <span className="text-slate-400 flex items-center gap-1">
              <FileCheck className="h-3.5 w-3.5 text-purple-400" />
              {t.passportLabel}:
            </span>
            <span className="font-mono text-xs text-slate-300 truncate max-w-[180px]">
              {formData.passportFile ? formData.passportFile.name : 'Verified'}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            id="print-success-btn"
            onClick={handlePrint}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            <span>{t.successPrint}</span>
          </button>
          <button
            type="button"
            id="dismiss-success-modal-btn"
            onClick={onClose}
            className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-2.5 text-xs sm:text-sm font-black text-slate-950 shadow-lg shadow-emerald-500/25 hover:from-emerald-500 hover:to-teal-400 transition-all cursor-pointer"
          >
            {t.successClose}
          </button>
        </div>
      </div>
    </div>
  );
};


