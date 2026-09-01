import React from 'react';
import { X, FileSpreadsheet, CheckCircle2, AlertTriangle, Bug, HelpCircle, ShieldAlert } from 'lucide-react';
import { Translations } from '../types';

interface QASpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

export const QASpecsModal: React.FC<QASpecsModalProps> = ({
  isOpen,
  onClose,
  t,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="qa-specs-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050811]/90 p-4 backdrop-blur-lg animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        id="qa-specs-modal-card"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-emerald-500/50 bg-gradient-to-b from-[#0e1626] via-[#0a101d] to-[#060a14] p-6 sm:p-8 shadow-2xl backdrop-blur-2xl ring-1 ring-emerald-500/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Ichimatsu Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-ichimatsu" />

        {/* Close Button */}
        <button
          type="button"
          id="close-qa-specs-btn"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4 pr-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/30 mb-2">
            <FileSpreadsheet className="h-3.5 w-3.5" />
            <span>{t.qaSpecsTitle}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {t.qaSpecsTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {t.qaSpecsSubtitle}
          </p>
        </div>

        {/* QA Test Table */}
        <div className="overflow-y-auto flex-1 pr-1 space-y-3 rounded-2xl border border-slate-800 bg-[#080d17]/80 p-3 sm:p-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400 font-bold">
                  <th className="py-2.5 px-3">Field</th>
                  <th className="py-2.5 px-3">Requirement</th>
                  <th className="py-2.5 px-3">Validation Rule</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                {t.qaSpecsItems.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-800/40 transition-colors ${
                      item.isBug ? 'bg-amber-950/20' : ''
                    }`}
                  >
                    <td className="py-3 px-3 font-semibold text-white whitespace-nowrap">
                      {item.field}
                    </td>
                    <td className="py-3 px-3 text-slate-300">
                      {item.requirement}
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-slate-400">
                      {item.rule}
                    </td>
                    <td className="py-3 px-3 text-center whitespace-nowrap">
                      {item.isBug ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400 border border-amber-500/30">
                          <Bug className="h-3 w-3" />
                          Bug Target
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                          <CheckCircle2 className="h-3 w-3" />
                          Passed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3 mt-3 flex items-start gap-2.5 text-xs text-amber-200/90">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
            <div>
              <span className="font-bold text-amber-300">QA Bug Finding Mission:</span> มีบั๊ก 2 จุดที่ซ่อนอยู่ในแบบฟอร์มนี้เพื่อการทดสอบระบบ (1. เบอร์โทรศัพท์ 9 vs 10 หลัก, 2. ช่องยอมรับข้อตกลง Inverted logic)
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-md hover:from-emerald-500 hover:to-teal-400 transition-all cursor-pointer"
          >
            {t.termsCloseButton}
          </button>
        </div>
      </div>
    </div>
  );
};
