import React, { useState } from 'react';
import { X, FileDown, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import { generateWeddingInvitationPdf } from '../utils/pdfGenerator';

interface PdfDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang?: 'en' | 'ta';
}

export const PdfDownloadModal: React.FC<PdfDownloadModalProps> = ({
  isOpen,
  onClose,
  currentLang = 'ta',
}) => {
  const [downloadingLang, setDownloadingLang] = useState<'en' | 'ta' | null>(null);

  if (!isOpen) return null;

  const handleDownload = async (targetLang: 'en' | 'ta') => {
    try {
      setDownloadingLang(targetLang);
      await generateWeddingInvitationPdf(targetLang);
      setTimeout(() => {
        onClose();
        setDownloadingLang(null);
      }, 500);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      setDownloadingLang(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-gradient-to-b from-[#0f172a] via-[#090d16] to-[#0b101b] border-2 border-amber-500/50 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner borders */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-400 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>PDF Download</span>
          </div>

          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide">
            {currentLang === 'en' ? 'Choose Invitation Language' : 'அழைப்பிதழ் மொழியைத் தேர்ந்தெடுக்கவும்'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1.5">
            {currentLang === 'en'
              ? 'Which language PDF would you like to download?'
              : 'எந்த மொழியில் அழைப்பிதழ் PDF பதிவிறக்க விரும்புகிறீர்கள்?'}
          </p>
        </div>

        {/* Language Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Tamil Option */}
          <button
            onClick={() => handleDownload('ta')}
            disabled={downloadingLang !== null}
            className={`group relative p-5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              downloadingLang === 'ta'
                ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-[1.02]'
                : 'bg-slate-900/80 border-amber-500/30 hover:border-amber-400 hover:bg-slate-850 hover:shadow-lg hover:shadow-amber-500/10'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  தமிழ்
                </span>
                <span className="text-xl">🌸</span>
              </div>
              <h4 className="font-tamil text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                தமிழ் அழைப்பிதழ்
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                பரிசுத்த மெய்விவாக அழைப்பிதழ், வேதாகம வசனம் &amp; விரிவான விவரங்கள்.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              {downloadingLang === 'ta' ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  PDF தயாராகிறது...
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 group-hover:text-amber-200">
                  <FileDown className="w-4 h-4" />
                  பதிவிறக்கு (Download)
                </span>
              )}
            </div>
          </button>

          {/* English Option */}
          <button
            onClick={() => handleDownload('en')}
            disabled={downloadingLang !== null}
            className={`group relative p-5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
              downloadingLang === 'en'
                ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] scale-[1.02]'
                : 'bg-slate-900/80 border-amber-500/30 hover:border-amber-400 hover:bg-slate-850 hover:shadow-lg hover:shadow-amber-500/10'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  English
                </span>
                <span className="text-xl">🕊️</span>
              </div>
              <h4 className="font-cinzel text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                English Invitation
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Holy Matrimony Invitation, Genesis 24:50 &amp; full celebration schedule.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              {downloadingLang === 'en' ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating PDF...
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 group-hover:text-amber-200">
                  <FileDown className="w-4 h-4" />
                  Download PDF
                </span>
              )}
            </div>
          </button>
        </div>

        {/* Footer info */}
        <p className="text-center text-[11px] text-slate-500">
          ✨ {currentLang === 'en' 
            ? 'Print-ready high resolution A4 format' 
            : 'பிரிண்ட் செய்யத்தக்க உயர் தர A4 வடிவம்'}
        </p>
      </div>
    </div>
  );
};
