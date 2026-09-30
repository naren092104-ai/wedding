/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { CoupleStorySection } from './components/CoupleStorySection';
import { EventsSection } from './components/EventsSection';
import { FamilyTributeSection } from './components/FamilyTributeSection';
import { BlessingsWall } from './components/BlessingsWall';
import { Footer } from './components/Footer';
import { RSVPModal } from './components/RSVPModal';
import { DigitalCardModal } from './components/DigitalCardModal';
import { PdfDownloadModal } from './components/PdfDownloadModal';
import { GrandInvitationEnvelope } from './components/GrandInvitationEnvelope';
import { FloatingParticles } from './components/FloatingParticles';
import { Heart, Globe, FileDown, Mail } from 'lucide-react';
import { WEDDING_DATA } from './data/weddingData';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ta'>('ta'); // Default to Tamil
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [showFloatingRsvp, setShowFloatingRsvp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show the floating button when user scrolls down past the hero section
      if (window.scrollY > 480) {
        setShowFloatingRsvp(true);
      } else {
        setShowFloatingRsvp(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-[#040711] text-slate-100 relative ${lang === 'ta' ? 'font-tamil' : ''}`}>
      {/* ══════════════════════════════════════════════════════════════════
          MASTER FULL-WEBSITE LUXURY PALACE BACKGROUND SYSTEM
      ══════════════════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Photorealistic Palace Hall Layer */}
        <img
          src={WEDDING_DATA.images.palaceBg}
          alt="Royal Wedding Palace Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.2] blur-[2.5px] scale-105"
        />

        {/* Deep Royal Midnight & Gold Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040711]/90 via-[#060b19]/80 to-[#040711]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(245,158,11,0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(217,119,6,0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(180,83,9,0.16),transparent_70%)]" />

        {/* Ambient Top Ceiling Chandelier Light Beam */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.22),transparent_70%)]" />

        {/* Subtle Sacred Gold Stardust Pattern */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      {/* Floating Celestial Golden Particles, Star Sparkles & Orbs */}
      <FloatingParticles />

      {/* Discrete Corner Actions (Replay Envelope, PDF Download & Language Switcher) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsEnvelopeOpened(false)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-500/40 bg-[#0b101b]/85 backdrop-blur-md hover:bg-amber-500/20 text-amber-200 hover:text-white transition-all text-xs font-semibold shadow-lg shadow-black/60 cursor-pointer"
          title="Replay Royal Envelope Opening / தொடக்க அழைப்பு உறை"
        >
          <Mail className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">{lang === 'en' ? 'Envelope' : 'அழைப்பு உறை'}</span>
        </button>

        <button
          onClick={() => setIsPdfModalOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-500/20 to-amber-600/30 backdrop-blur-md hover:bg-amber-500/40 text-amber-200 hover:text-white transition-all text-xs font-semibold shadow-lg shadow-black/60 cursor-pointer"
          title="Download Invitation as PDF / அழைப்பிதழ் PDF பதிவிறக்கு"
        >
          <FileDown className="w-3.5 h-3.5 text-amber-400" />
          <span>{lang === 'en' ? 'PDF' : 'அழைப்பிதழ் PDF'}</span>
        </button>

        <button
          onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-amber-500/40 bg-[#0b101b]/85 backdrop-blur-md hover:bg-amber-500/20 text-amber-200 hover:text-amber-100 transition-all text-xs font-semibold shadow-lg shadow-black/60 cursor-pointer"
          title="Switch Language / மொழியை மாற்றவும்"
        >
          <Globe className="w-3.5 h-3.5 text-amber-400" />
          <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
        </button>
      </div>

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section with Monogram, Couple Names, Cartoon Visual, Countdown */}
        <HeroSection
          lang={lang}
          onOpenRsvp={() => setIsRsvpOpen(true)}
          onOpenCardModal={() => setIsCardModalOpen(true)}
          onOpenPdfModal={() => setIsPdfModalOpen(true)}
        />

        {/* Blessed Couple Details & Parents */}
        <CoupleStorySection lang={lang} />

        {/* Events: Holy Matrimony & Reception with Church/Stage Cartoon visuals and Maps */}
        <EventsSection lang={lang} />

        {/* Family & Relations Poetic Tribute & Direct Contacts */}
        <FamilyTributeSection lang={lang} />

        {/* Interactive Wishes & Blessings Wall */}
        <BlessingsWall lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Animated Quick RSVP Button on Mobile (Only shows when scrolled past Hero) */}
      {showFloatingRsvp && (
        <div className="fixed bottom-5 right-4 z-40 sm:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={() => setIsRsvpOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-bold text-xs tracking-wider shadow-[0_4px_25px_rgba(245,158,11,0.5)] active:scale-95 transition-transform border border-amber-300/40 animate-pulse-soft"
            aria-label="Quick RSVP"
          >
            <Heart className="w-4 h-4 fill-rose-600 text-rose-600 animate-heartbeat" />
            <span>{lang === 'en' ? 'RSVP' : 'வாழ்த்து / வருகை'}</span>
          </button>
        </div>
      )}

      {/* Modals */}
      <RSVPModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        lang={lang}
      />

      <DigitalCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
        lang={lang}
      />

      <PdfDownloadModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        currentLang={lang}
      />

      {/* Grand Opening Royal Envelope Screen (Appears on open or replay) */}
      {!isEnvelopeOpened && (
        <GrandInvitationEnvelope
          lang={lang}
          onOpen={() => setIsEnvelopeOpened(true)}
        />
      )}
    </div>
  );
}
