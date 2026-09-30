import React, { useState } from 'react';
import { X, Printer, Share2, Sparkles, Download, Loader2 } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { generateWeddingInvitationPdf } from '../utils/pdfGenerator';

interface DigitalCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ta';
}

export const DigitalCardModal: React.FC<DigitalCardModalProps> = ({
  isOpen,
  onClose,
  lang: defaultLang,
}) => {
  const [activeLang, setActiveLang] = useState<'en' | 'ta'>(defaultLang);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    try {
      setIsGeneratingPdf(true);
      await generateWeddingInvitationPdf(activeLang);
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0e1424] border border-amber-500/40 rounded-2xl shadow-2xl p-4 sm:p-6 max-h-[92vh] overflow-y-auto">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeLang === 'en'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              English Card
            </button>
            <button
              onClick={() => setActiveLang('ta')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                activeLang === 'ta'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              தமிழ் அழைப்பிதழ்
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-lg shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
              title="Download Invitation as PDF / அழைப்பிதழ் PDF பதிவிறக்கு"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF {activeLang === 'ta' ? 'பதிவிறக்கு' : 'Download'}</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Print Card"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Card Replica Canvas */}
        <div className="relative p-3.5 sm:p-10 rounded-xl bg-[#faf7f2] text-slate-900 border-2 sm:border-4 border-double border-amber-800/40 shadow-inner overflow-hidden font-serif">
          {/* Classic Royal Floral Corner Ornaments */}
          <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 text-amber-700/40 text-base sm:text-xl font-serif">❦</div>
          <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-amber-700/40 text-base sm:text-xl font-serif">❦</div>
          <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 text-amber-700/40 text-base sm:text-xl font-serif">❦</div>
          <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 text-amber-700/40 text-base sm:text-xl font-serif">❦</div>

          {activeLang === 'en' ? (
            <div className="text-center space-y-3 sm:space-y-4">
              {/* Praise Header */}
              <div className="border-b border-amber-900/15 pb-2">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-900 font-semibold font-cinzel">
                  Praise the Lord
                </p>
                <p className="text-xs italic text-amber-950/80 font-garamond mt-0.5">
                  &ldquo;The things proceedeth from the LORD.&rdquo; (Gen 24:50)
                </p>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-cinzel text-base sm:text-xl font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#1e293b] uppercase">
                  Holy Matrimony Invitation
                </h3>
              </div>

              {/* Royal Emblem */}
              <div className="flex justify-center my-2 sm:my-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-600 bg-amber-50 shadow-md flex items-center justify-center p-2 text-center">
                  <div>
                    <span className="font-cinzel font-bold text-base sm:text-lg text-amber-900 block leading-tight">
                      J &amp; V
                    </span>
                    <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-amber-800 font-sans block">
                      Wedding
                    </span>
                  </div>
                </div>
              </div>

              {/* Parents Greeting */}
              <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">
                Mr. (Late) Charles &amp; Mrs. Latha <br />
                <span className="italic text-slate-500">and</span> <br />
                Mr. (Late) Raja &amp; Mrs. Devi <br />
                <span className="font-medium text-amber-950 block mt-1">
                  Cordially invites you to the Holy Matrimony of our children
                </span>
              </p>

              {/* Couple Names */}
              <div className="py-2 border-y border-amber-900/15 max-w-sm mx-auto space-y-1">
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold tracking-tight text-[#0f172a]">
                  C. JABARAJ
                </h4>
                <p className="italic text-amber-800 text-xs sm:text-sm font-garamond">weds</p>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold tracking-tight text-[#0f172a]">
                  R. THARANI (A) VERONICA
                </h4>
              </div>

              {/* Date & Event Schedule */}
              <div className="text-xs text-slate-800 space-y-2 pt-1">
                <p className="font-semibold text-xs sm:text-sm text-amber-900 font-cinzel">
                  on Tuesday, 13th October 2026 From 5.00 pm onwards
                </p>
                <div className="bg-amber-50/70 p-2.5 sm:p-3 rounded-lg border border-amber-200/60 max-w-md mx-auto text-left space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">💒 Ceremony: 5.00 PM</span>
                    <span className="text-slate-700 block text-[11px] sm:text-xs">
                      The Pentecostal Mission, Sharma Nagar, E.H Road, Chennai - 39
                    </span>
                  </div>
                  <div className="pt-2 border-t border-amber-200/60">
                    <span className="font-bold text-slate-900 block">🎉 Reception: 7.00 PM onwards</span>
                    <span className="text-slate-700 block text-[11px] sm:text-xs">
                      Annal Ambedkar Thirumana Maaligai, Chandrayogi Main Road, Mangalapuram, Perambur, Chennai - 12
                    </span>
                  </div>
                </div>
              </div>

              {/* Compliments */}
              <div className="pt-2 sm:pt-3 border-t border-amber-900/15 text-[10px] sm:text-[11px] text-slate-600">
                <p className="font-medium">With best compliments from : Friends &amp; Relatives</p>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-3 sm:space-y-4 font-tamil">
              {/* Praise Header Tamil */}
              <div className="border-b border-amber-900/15 pb-2">
                <p className="text-xs font-semibold text-amber-900">
                  கர்த்தருக்கு ஸ்தோத்திரம்
                </p>
                <p className="text-xs italic text-amber-950/80 mt-0.5">
                  &ldquo;இந்தக் காரியம் கர்த்தரால் வந்தது&rdquo; (ஆதியாகமம் - 24:50)
                </p>
              </div>

              {/* Title Tamil */}
              <div>
                <h3 className="text-base sm:text-xl font-bold text-[#1e293b]">
                  பரிசுத்த மெய்விவாக அழைப்பிதழ்
                </h3>
              </div>

              {/* Royal Emblem */}
              <div className="flex justify-center my-2 sm:my-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-600 bg-amber-50 shadow-md flex items-center justify-center p-2 text-center">
                  <div>
                    <span className="font-cinzel font-bold text-base sm:text-lg text-amber-900 block leading-tight">
                      J &amp; V
                    </span>
                    <span className="text-[7px] sm:text-[8px] font-sans uppercase tracking-wider text-amber-800 block">
                      மணமக்கள்
                    </span>
                  </div>
                </div>
              </div>

              {/* Tamil Couple Names */}
              <div className="py-2 border-y border-amber-900/15 max-w-sm mx-auto space-y-0.5 sm:space-y-1">
                <span className="text-[11px] sm:text-xs text-slate-600 block">மணமக்கள் :</span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                  C.ஜெபராஜ்
                </h4>
                <p className="text-[11px] sm:text-xs text-amber-800 font-medium">மற்றும்</p>
                <h4 className="text-xl sm:text-2xl font-bold text-[#0f172a]">
                  R.தாரணி (எ) விரோனிக்கா
                </h4>
              </div>

              {/* Tamil Date & Venue */}
              <div className="text-xs text-slate-800 space-y-2 pt-1">
                <p className="font-bold text-xs sm:text-sm text-amber-900">
                  மணநாள் : 13-10-2026 செவ்வாய்க்கிழமை
                </p>
                <div className="bg-amber-50/70 p-2.5 sm:p-3 rounded-lg border border-amber-200/60 max-w-md mx-auto text-left space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">💒 விவாக ஆராதனை : மாலை 5.00 மணி</span>
                    <span className="text-slate-700 block text-[11px] sm:text-xs">
                      த பெந்தெகொஸ்தே சபை, சர்மா நகர், E.H. ரோடு, சென்னை - 39
                    </span>
                  </div>
                  <div className="pt-2 border-t border-amber-200/60">
                    <span className="font-bold text-slate-900 block">🎉 வரவேற்பு : மாலை 7.00 மணிக்குமேல்</span>
                    <span className="text-slate-700 block text-[11px] sm:text-xs">
                      அண்ணல் அம்பேத்கர் திருமண மாளிகை, சந்திரயோகி மெயின் ரோடு, மங்களபுரம், பெரம்பூர், சென்னை - 12
                    </span>
                  </div>
                </div>
              </div>

              {/* Relations Compliments */}
              <div className="pt-2 sm:pt-3 border-t border-amber-900/15 text-[10px] sm:text-[11px] text-slate-700">
                <p>தங்கள் வருகை தந்து மணமக்களை ஆசீர்வதிக்குமாறு அன்புடன் அழைக்கின்றோம்.</p>
                <p className="text-[10px] text-slate-500 mt-1">தொடர்புக்கு : 81244 16269 / 72002 27347 / 73058 01527</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
