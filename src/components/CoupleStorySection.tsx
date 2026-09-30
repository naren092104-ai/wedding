import React from 'react';
import { Heart, Crown, Home, Users } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface CoupleStorySectionProps {
  lang: 'en' | 'ta';
}

export const CoupleStorySection: React.FC<CoupleStorySectionProps> = ({ lang }) => {
  return (
    <section id="story" className="py-12 sm:py-16 md:py-24 relative border-t border-amber-500/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-cinzel font-semibold mb-2">
            <Crown className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'The Blessed Couple' : 'மணமக்கள் விபரம்'}</span>
            <Crown className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel text-white mb-2 sm:mb-3">
            {lang === 'en' ? 'United by God’s Divine Grace' : 'தெய்வீக அன்பால் இணையும் மணமக்கள்'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base font-garamond italic">
            {lang === 'en'
              ? '“Therefore what God has joined together, let no one separate.” Two souls embarking on a sacred lifelong journey of fellowship, faith, and joy.'
              : '“தேவன் இணைத்ததை மனிதன் பிரிக்காதிருக்கக்கடவன்.” கர்த்தரின் வழிநடத்துதலோடு இல்லற நல்வாழ்வில் இணையும் புதுமணத் தம்பதிகள்.'}
          </p>
        </div>

        {/* Central Couple Avatar Showcase */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="relative group">
            {/* Rotating halo ring */}
            <div className="absolute -inset-2.5 rounded-full border border-dashed border-amber-400/50 animate-spin-very-slow pointer-events-none" />
            <div className="absolute -inset-3 rounded-full bg-amber-500/15 blur-lg animate-pulse-soft pointer-events-none" />

            <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-amber-500 via-amber-200 to-amber-700 shadow-[0_0_40px_rgba(245,158,11,0.35)] relative animate-gold-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-900">
                <img
                  src={WEDDING_DATA.images.avatar}
                  alt="Couple cartoon portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            {/* Heart Seal */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 border-2 border-slate-950 flex items-center justify-center text-slate-950 shadow-md animate-heartbeat z-10">
              <Heart className="w-4 h-4 fill-current text-rose-800" />
            </div>
          </div>
        </div>

        {/* Groom & Bride Detailed Family Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {/* Groom Card */}
          <div className="relative rounded-2xl p-5 sm:p-8 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-amber-500/25 shadow-xl backdrop-blur-sm group hover:border-amber-400/60 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-cinzel uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                {lang === 'en' ? 'The Groom' : 'மணமகன்'}
              </span>
              <span className="text-xl">🤵</span>
            </div>

            <h3 className={`${lang === 'en' ? 'font-cinzel-decorative' : 'font-tamil-serif'} text-2xl sm:text-3xl font-extrabold text-royal-gold mb-2 drop-shadow-md`}>
              {lang === 'en' ? WEDDING_DATA.groom.nameEn : WEDDING_DATA.groom.nameTa}
            </h3>

            <div className="space-y-3 text-sm text-slate-300 mt-4">
              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    {lang === 'en' ? 'Parents' : 'பெற்றோர்'}
                  </span>
                  <span className="text-slate-200 font-medium">
                    {lang === 'en' ? WEDDING_DATA.groom.parentsEn : WEDDING_DATA.groom.parentsTa}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Home className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    {lang === 'en' ? 'Residence' : 'இருப்பிடம்'}
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm">
                    {lang === 'en' ? WEDDING_DATA.groom.residenceEn : WEDDING_DATA.groom.residenceTa}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bride Card */}
          <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-amber-500/25 shadow-xl backdrop-blur-sm group hover:border-amber-400/50 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-cinzel uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                {lang === 'en' ? 'The Bride' : 'மணமகள்'}
              </span>
              <span className="text-xl">👰</span>
            </div>

            <h3 className={`${lang === 'en' ? 'font-cinzel-decorative' : 'font-tamil-serif'} text-2xl sm:text-3xl font-extrabold text-royal-gold mb-2 drop-shadow-md`}>
              {lang === 'en' ? WEDDING_DATA.bride.nameEn : WEDDING_DATA.bride.nameTa}
            </h3>

            <div className="space-y-3 text-sm text-slate-300 mt-4">
              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    {lang === 'en' ? 'Parents' : 'பெற்றோர்'}
                  </span>
                  <span className="text-slate-200 font-medium">
                    {lang === 'en' ? WEDDING_DATA.bride.parentsEn : WEDDING_DATA.bride.parentsTa}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Crown className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    {lang === 'en' ? 'Brother' : 'சகோதரன்'}
                  </span>
                  <span className="text-slate-200 font-medium">
                    {lang === 'en' ? WEDDING_DATA.bride.brotherEn : WEDDING_DATA.bride.brotherTa}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Home className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    {lang === 'en' ? 'Residence' : 'இருப்பிடம்'}
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm">
                    {lang === 'en' ? WEDDING_DATA.bride.residenceEn : WEDDING_DATA.bride.residenceTa}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
