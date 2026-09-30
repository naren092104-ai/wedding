import React, { useState } from 'react';
import { Calendar, MapPin, Heart, Share2, Sparkles, Download, FileDown, Loader2 } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { CountdownTimer } from './CountdownTimer';
import { generateWeddingInvitationPdf } from '../utils/pdfGenerator';

interface HeroSectionProps {
  lang: 'en' | 'ta';
  onOpenRsvp: () => void;
  onOpenCardModal: () => void;
  onOpenPdfModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenRsvp,
  onOpenCardModal,
  onOpenPdfModal,
}) => {
  // Calendar ICS generation
  const downloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Jabaraj and Veronica Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'SUMMARY:Wedding of C. Jabaraj & R. Tharani (Veronica)',
      'DESCRIPTION:Holy Matrimony at The Pentecostal Mission Sharma Nagar (5:00 PM) followed by Reception at Annal Ambedkar Thirumana Maaligai Perambur (7:00 PM)',
      'LOCATION:The Pentecostal Mission, Sharma Nagar, E.H Road, Chennai - 39',
      'DTSTART:20261013T113000Z', // 5:00 PM IST is 11:30 AM UTC
      'DTEND:20261013T163000Z',   // 10:00 PM IST is 4:30 PM UTC
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Jabaraj_Veronica_Wedding_Oct13_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    const shareText =
      lang === 'en'
        ? 'You are cordially invited to the Holy Matrimony of C. Jabaraj & R. Tharani (Veronica) on Tuesday, 13th October 2026 in Chennai!'
        : 'C. ஜெபராஜ் - R. தாரணி (எ) விரோனிக்கா ஆகியோரின் திருமண அழைப்பிதழ்! 13-10-2026 செவ்வாய்க்கிழமை சென்னை.';

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Jabaraj & Veronica Wedding',
          text: shareText,
          url: window.location.href,
        });
      } catch {
        // Fallback to clipboard
        navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
      }
    } else {
      navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
      alert(lang === 'en' ? 'Invitation link copied to clipboard!' : 'அழைப்பிதழ் இணைப்பு நகலெடுக்கப்பட்டது!');
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-sky-900/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sacred Verse Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-serif tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(245,158,11,0.15)] animate-pulse-soft">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-very-slow" />
            <span>{lang === 'en' ? WEDDING_DATA.verse.praiseEn : WEDDING_DATA.verse.praiseTa}</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-very-slow" />
          </div>
          <p className="font-garamond italic text-lg sm:text-xl md:text-2xl text-amber-200/90 leading-relaxed drop-shadow-sm">
            &ldquo;{lang === 'en' ? WEDDING_DATA.verse.quoteEn : WEDDING_DATA.verse.quoteTa}&rdquo;
          </p>
          <p className="text-xs uppercase tracking-widest text-slate-400 mt-1.5 font-medium">
            {lang === 'en' ? WEDDING_DATA.verse.refEn : WEDDING_DATA.verse.refTa}
          </p>
        </div>

        {/* Golden Royal Monogram Badge with Rotating Aura Halo */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            {/* Celestial spinning dashed halo */}
            <div className="absolute -inset-2 rounded-full border border-dashed border-amber-400/50 animate-spin-very-slow pointer-events-none" />
            <div className="absolute -inset-4 rounded-full bg-amber-500/15 blur-xl animate-pulse-soft pointer-events-none" />

            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-amber-400/80 bg-gradient-to-br from-amber-200/25 via-slate-900 to-amber-900/40 flex items-center justify-center relative overflow-hidden animate-gold-glow">
              {/* Inner ring */}
              <div className="absolute inset-1 rounded-full border border-dashed border-amber-400/30" />
              <div className="text-center z-10">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-gold-gradient block group-hover:scale-110 transition-transform">
                  J &amp; V
                </span>
                <span className="text-[9px] uppercase tracking-widest text-amber-200/80 font-semibold block">
                  2026
                </span>
              </div>
            </div>
            {/* Little olive sprig / leaf accent */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-950 border border-amber-400/60 text-[10px] text-amber-300 font-serif whitespace-nowrap shadow-md">
              Holy Matrimony
            </div>
          </div>
        </div>

        {/* Main Title & Couple Names */}
        <div className="text-center max-w-4xl mx-auto mb-10 relative">
          {/* Subtle radiant golden back-glow for names */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[500px] h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 mb-4 animate-pulse-soft">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
              {lang === 'en' ? 'Holy Matrimony Invitation' : 'பரிசுத்த மெய்விவாக அழைப்பிதழ்'}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>

          <div className="space-y-3 sm:space-y-4 relative z-10 animate-royal-glow">
            {/* Groom's Name */}
            <div className="group transition-transform duration-300 hover:scale-[1.02] cursor-default">
              <span className="text-[10px] sm:text-xs font-cinzel uppercase tracking-[0.35em] text-amber-300/80 block mb-1">
                {lang === 'en' ? '— The Groom —' : '— மணமகன் —'}
              </span>
              <h2 className={`${lang === 'en' ? 'font-cinzel-decorative' : 'font-tamil-serif'} text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-royal-gold leading-tight drop-shadow-[0_4px_25px_rgba(245,158,11,0.55)]`}>
                {lang === 'en' ? WEDDING_DATA.groom.nameEn : WEDDING_DATA.groom.nameTa}
              </h2>
            </div>

            {/* Regal Weds Divider */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 py-1">
              <div className="h-[1.5px] w-12 sm:w-36 bg-gradient-to-r from-transparent via-amber-400 to-amber-200" />
              <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900/90 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 fill-rose-500 animate-heartbeat" />
                <span className="font-garamond italic font-semibold text-base sm:text-2xl text-amber-200">
                  {lang === 'en' ? 'weds' : 'மற்றும்'}
                </span>
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 fill-rose-500 animate-heartbeat" />
              </div>
              <div className="h-[1.5px] w-12 sm:w-36 bg-gradient-to-l from-transparent via-amber-400 to-amber-200" />
            </div>

            {/* Bride's Name */}
            <div className="group transition-transform duration-300 hover:scale-[1.02] cursor-default">
              <span className="text-[10px] sm:text-xs font-cinzel uppercase tracking-[0.35em] text-amber-300/80 block mb-1">
                {lang === 'en' ? '— The Bride —' : '— மணமகள் —'}
              </span>
              <h2 className={`${lang === 'en' ? 'font-cinzel-decorative' : 'font-tamil-serif'} text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-royal-gold leading-tight drop-shadow-[0_4px_25px_rgba(245,158,11,0.55)]`}>
                {lang === 'en' ? WEDDING_DATA.bride.nameEn : WEDDING_DATA.bride.nameTa}
              </h2>
            </div>
          </div>

          {/* Date & Day */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 text-slate-300 text-xs sm:text-base font-medium">
            <span className="flex items-center gap-1.5 text-amber-300 font-cinzel font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-amber-400" />
              {lang === 'en' ? WEDDING_DATA.dateFormattedEn : WEDDING_DATA.dateFormattedTa}
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="flex items-center gap-1.5 text-slate-300 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              Chennai, Tamil Nadu
            </span>
          </div>
        </div>

        {/* Featured Cartoon Couple Visual in Floating Royal Frame */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12 animate-float-slow">
          <div className="relative rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-amber-500/35 via-slate-800/40 to-amber-600/25 border border-amber-400/50 shadow-[0_15px_50px_rgba(0,0,0,0.85)] backdrop-blur-sm group overflow-hidden hover:border-amber-400 transition-all">
            {/* Corner Filigree Accents with soft shine */}
            <div className="absolute top-2 left-2 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-l-2 border-amber-400 pointer-events-none drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            <div className="absolute top-2 right-2 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-amber-400 pointer-events-none drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            <div className="absolute bottom-2 left-2 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-amber-400 pointer-events-none drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            <div className="absolute bottom-2 right-2 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-amber-400 pointer-events-none drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />

            <div className="relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-[16/9] bg-slate-900">
              <img
                src={WEDDING_DATA.images.hero}
                alt="Cute 3D cartoon portrait of groom Jabaraj and bride Veronica"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20 pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-2.5 sm:bottom-4 inset-x-3 sm:inset-x-4 flex items-center justify-between text-white text-xs sm:text-sm gap-2">
                <span className="font-cinzel font-semibold tracking-wider drop-shadow-md text-amber-200 text-xs sm:text-sm truncate">
                  C. Jabaraj &amp; R. Tharani Veronica
                </span>
                <span className="bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/40 text-[10px] sm:text-[11px] font-sans text-amber-300 shrink-0">
                  {lang === 'en' ? '13 Oct 2026' : '13 அக்டோபர் 2026'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="mb-8 sm:mb-10">
          <CountdownTimer targetDateISO={WEDDING_DATA.dateISO} lang={lang} />
        </div>

        {/* Primary Action Buttons */}
        <div className="max-w-2xl mx-auto w-full space-y-2.5 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
          {/* PDF Download Button (Opens Language Choice Modal) */}
          <button
            onClick={onOpenPdfModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/30 active:scale-98 transition-all cursor-pointer whitespace-nowrap min-h-[46px] border border-amber-300"
            title="Download Official Invitation PDF (Tamil / English)"
          >
            <FileDown className="w-4 h-4 text-slate-950" />
            <span>{lang === 'en' ? 'Download Invitation PDF' : 'அழைப்பிதழ் PDF பதிவிறக்கு'}</span>
          </button>

          <button
            onClick={onOpenRsvp}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-amber-500/50 bg-slate-900/90 hover:bg-slate-800 text-amber-200 font-bold text-sm tracking-wide shadow-md active:scale-98 transition-all cursor-pointer whitespace-nowrap min-h-[46px]"
          >
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>{lang === 'en' ? 'Send RSVP' : 'வாழ்த்தி வர ஒப்புதல்'}</span>
          </button>

          <button
            onClick={downloadIcs}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-amber-500/40 bg-slate-900/80 hover:bg-slate-800 text-amber-200 font-semibold text-sm hover:border-amber-400 transition-all cursor-pointer whitespace-nowrap min-h-[46px]"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>{lang === 'en' ? 'Save to Calendar' : 'நாட்குறிப்பில் சேர்'}</span>
          </button>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onOpenCardModal}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white text-sm transition-all cursor-pointer min-h-[46px]"
              title="View Original Invitation Card Format"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'en' ? 'View Card' : 'அழைப்பிதழ்'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-amber-300 transition-all cursor-pointer min-h-[46px] min-w-[46px] flex items-center justify-center"
              title="Share Wedding Link"
              aria-label="Share Wedding Link"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
