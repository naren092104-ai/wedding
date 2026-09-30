import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface FooterProps {
  lang: 'en' | 'ta';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-amber-500/20 bg-[#080c14] py-12 text-slate-400 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Monogram Seal */}
          <div className="w-12 h-12 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 font-cinzel font-bold text-sm flex items-center justify-center mx-auto shadow-md">
            J&amp;V
          </div>

          <div>
            <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wider">
              {lang === 'en' ? 'C. JABARAJ & R. THARANI (VERONICA)' : 'C. ஜெபராஜ் & R. தாரணி (விரோனிக்கா)'}
            </h4>
            <p className="text-xs text-amber-400/80 font-cinzel uppercase tracking-widest mt-1">
              {lang === 'en' ? 'Tuesday, 13th October 2026 · Chennai' : '13-10-2026 செவ்வாய்க்கிழமை · சென்னை'}
            </p>
          </div>

          <p className="font-garamond italic text-base text-slate-300 max-w-xl mx-auto">
            &ldquo;{lang === 'en' ? WEDDING_DATA.verse.quoteEn : WEDDING_DATA.verse.quoteTa}&rdquo;
            <span className="block text-xs uppercase tracking-widest text-slate-500 font-sans not-italic mt-1">
              {lang === 'en' ? WEDDING_DATA.verse.refEn : WEDDING_DATA.verse.refTa}
            </span>
          </p>

          <div className="inline-block p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <span className="text-amber-300 font-semibold block">
              {lang === 'en' ? 'With Best Compliments From:' : 'தங்கள் வருகையை அன்புடன் எதிர்நோக்கும்:'}
            </span>
            <span className="text-slate-400 block mt-0.5">
              {lang === 'en' ? 'Friends & Relatives' : 'சுற்றமும் நட்பும்'}
            </span>
          </div>

          <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>
              {lang === 'en'
                ? 'Holy Matrimony & Reception Celebration Website'
                : 'பரிசுத்த மெய்விவாக மற்றும் திருமண வரவேற்பு இணையதளம்'}
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors"
            >
              <span>{lang === 'en' ? 'Back to Top' : 'மேலே செல்ல'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
