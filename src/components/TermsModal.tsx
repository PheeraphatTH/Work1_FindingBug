import React from 'react';
import { Scroll, X, ShieldAlert, CheckCircle2, Sparkles, Sword } from 'lucide-react';
import { Translations } from '../types';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

export const TermsModal: React.FC<TermsModalProps> = ({
  isOpen,
  onClose,
  t,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="terms-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050811]/90 p-4 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="terms-modal-card"
        className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-3xl border border-emerald-500/40 bg-[#0c121e]/95 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-emerald-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Ichimatsu bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-ichimatsu" />

        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mt-1">
          <div className="flex items-center gap-2.5 text-emerald-400">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
              <Sword className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-extrabold text-white">
              {t.termsModalTitle}
            </h3>
          </div>
          <button
            type="button"
            id="close-terms-modal-btn"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="my-5 space-y-3.5 overflow-y-auto max-h-[60vh] pr-2 text-sm text-slate-300 leading-relaxed">
          <div className="rounded-xl bg-purple-950/30 border border-purple-500/30 p-3.5 flex items-start gap-3 text-purple-200/90 text-xs">
            <ShieldAlert className="h-4 w-4 shrink-0 text-purple-400 mt-0.5" />
            <span>
              藤の花の家紋 — บัญญัติกฎเหล็กแห่งหน่วยพิฆาตอสูร (Demon Slayer Corps Sacred Codex). เหล่านักล่าอสูรทุกคนต้องปฏิบัติตามกฎเพื่อความปลอดภัยและเกียรติยศแห่งมนุษยชาติ
            </span>
          </div>

          {t.termsModalContent.map((clause, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl bg-[#080d17]/80 p-3.5 border border-slate-800 hover:border-emerald-500/30 transition-colors"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-200">{clause}</p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <button
            type="button"
            id="confirm-terms-modal-btn"
            onClick={onClose}
            className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 py-3 text-sm font-black text-slate-950 shadow-lg shadow-emerald-500/20 hover:from-emerald-500 hover:to-teal-400 transition-all cursor-pointer"
          >
            {t.termsModalClose}
          </button>
        </div>
      </div>
    </div>
  );
};

