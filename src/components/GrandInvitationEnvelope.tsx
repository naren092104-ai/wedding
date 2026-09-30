import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Church } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface GrandInvitationEnvelopeProps {
  lang: 'en' | 'ta';
  onOpen: () => void;
}

export const GrandInvitationEnvelope: React.FC<GrandInvitationEnvelopeProps> = ({
  lang,
  onOpen,
}) => {
  const [isOpenTriggered, setIsOpenTriggered] = useState(false);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);

  const handleOpenDoors = () => {
    if (isOpenTriggered) return;
    setIsOpenTriggered(true);

    // Multi-stage Royal Confetti celebration
    const duration = 2.8 * 1000;
    const end = Date.now() + duration;

    // Initial big burst
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#ffd700', '#f43f5e', '#ffffff', '#e11d48', '#fbbf24'],
      zIndex: 99999,
    });

    // Continuous sparkles shower while doors open
    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors: ['#ffd700', '#f59e0b', '#f43f5e', '#ffffff'],
        zIndex: 99999,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors: ['#ffd700', '#f59e0b', '#f43f5e', '#ffffff'],
        zIndex: 99999,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // After 3D doors swing open and content inside is seen, transition smoothly to website
    setTimeout(() => {
      setIsFullyRevealed(true);
      setTimeout(() => {
        onOpen();
      }, 500);
    }, 1900);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#04060d] overflow-hidden select-none transition-all duration-700 ${
        isFullyRevealed ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
      style={{ perspective: '1600px' }}
    >
      {/* ══════════════════════════════════════════════════════════════════
          ULTRA-LUXURY PALACE SANCTUARY BACKGROUND WITH BOKEH & LIGHT BEAMS
      ══════════════════════════════════════════════════════════════════ */}
      {/* 1. Photorealistic Palace Hall Image Layer with cinematic depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={WEDDING_DATA.images.palaceBg}
          alt="Royal Wedding Palace Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-115 blur-[2.5px] transition-transform duration-10000 ease-out"
          style={{ transform: isOpenTriggered ? 'scale(1.15)' : 'scale(1.05)' }}
        />
      </div>

      {/* 2. Deep Royal Midnight & Golden Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#03060f] via-[#050914]/70 to-[#03060f]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.25)_0%,rgba(3,6,15,0.75)_65%,rgba(2,4,10,0.95)_100%)] pointer-events-none" />

      {/* 3. Ceiling Golden Chandelier Light Beams */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.35),transparent_70%)] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

      {/* 4. Drifting Royal Bokeh Spheres */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large bokeh orbs */}
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-amber-500/15 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-12 right-12 w-64 h-64 rounded-full bg-amber-600/15 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 rounded-full bg-rose-500/10 blur-2xl animate-pulse" style={{ animationDuration: '7s' }} />
        
        {/* Floating golden sparkle particles */}
        <div className="absolute top-1/5 left-1/6 w-2.5 h-2.5 rounded-full bg-amber-300 blur-[0.5px] animate-ping" style={{ animationDuration: '3.5s' }} />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-yellow-200 blur-[1px] animate-pulse" style={{ animationDuration: '2.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-amber-400 blur-[0.5px] animate-bounce" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/6 w-2.5 h-2.5 rounded-full bg-amber-300 blur-[0.8px] animate-ping" style={{ animationDuration: '4.5s' }} />
        <div className="absolute top-2/3 left-1/12 w-2 h-2 rounded-full bg-amber-200 animate-pulse" />
        <div className="absolute top-1/3 left-3/4 w-2 h-2 rounded-full bg-yellow-400 blur-[0.5px] animate-pulse" />
      </div>

      {/* 5. Top Velvet Royal Curtain Arch Pelmet Silhouette */}
      <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-b from-[#0b0410] to-transparent opacity-80 pointer-events-none" />

      {/* ══════════════════════════════════════════════════════════════════
          3D GATEFOLD CARD CONTAINER
      ══════════════════════════════════════════════════════════════════ */}
      <div
        className={`relative w-full max-w-xl aspect-[4/5] sm:aspect-[1/1.25] max-h-[88vh] rounded-3xl transition-transform duration-1000 ease-out z-10 ${
          isOpenTriggered ? 'scale-105' : 'hover:scale-[1.01]'
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Soft Golden Outer Halo Glow around card */}
        <div
          className={`absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600 opacity-60 blur-2xl transition-all duration-1000 ${
            isOpenTriggered ? 'opacity-95 scale-110' : 'animate-pulse'
          }`}
          style={{ animationDuration: '3.5s' }}
        />

        {/* ══════════════════════════════════════════════════════════════════
            INSIDE CONTENT (Revealed as the 3D doors swing open)
        ══════════════════════════════════════════════════════════════════ */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#fffdfa] via-[#fbf6ec] to-[#f4ecd8] border-4 border-amber-500/80 shadow-[0_30px_70px_rgba(0,0,0,0.95)] p-5 sm:p-8 flex flex-col items-center justify-between text-center overflow-hidden"
          style={{ zIndex: 1 }}
        >
          {/* Inner Ornate Corner Accents */}
          <div className="absolute top-2 left-2 text-amber-700 text-lg">❦</div>
          <div className="absolute top-2 right-2 text-amber-700 text-lg">❦</div>
          <div className="absolute bottom-2 left-2 text-amber-700 text-lg">❦</div>
          <div className="absolute bottom-2 right-2 text-amber-700 text-lg">❦</div>

          {/* Top Blessing */}
          <div className="w-full border-b border-amber-800/20 pb-2">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-900 font-extrabold font-cinzel">
              {lang === 'en' ? '✝ Praise the Lord ✝' : '✝ கர்த்தருக்கு ஸ்தோத்திரம் ✝'}
            </p>
            <p className="text-[11px] sm:text-xs italic text-amber-950/80 font-serif mt-0.5">
              {lang === 'en'
                ? '“The things proceedeth from the LORD.” (Genesis 24:50)'
                : '“இந்தக் காரியம் கர்த்தரால் வந்தது” (ஆதியாகமம் 24:50)'}
            </p>
          </div>

          {/* Couple Picture with Golden Aura inside */}
          <div className="relative my-2">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-amber-600 via-amber-300 to-amber-600 shadow-2xl mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-slate-900 shadow-inner">
                <img
                  src={WEDDING_DATA.images.hero}
                  alt="Jabaraj and Veronica"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 inset-x-0 flex justify-center">
              <span className="bg-amber-600 text-white px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-amber-300 shadow-md">
                {lang === 'en' ? 'Holy Matrimony' : 'பரிசுத்த மெய்விவாகம்'}
              </span>
            </div>
          </div>

          {/* Couple Names */}
          <div className="space-y-1">
            <h2 className="font-cinzel text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight">
              {lang === 'en' ? WEDDING_DATA.groom.nameEn : WEDDING_DATA.groom.nameTa}
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-[1px] w-8 bg-amber-700/40" />
              <span className="text-amber-800 font-serif italic text-xs sm:text-sm font-bold">
                {lang === 'en' ? 'weds' : 'மற்றும்'}
              </span>
              <div className="h-[1px] w-8 bg-amber-700/40" />
            </div>
            <h2 className="font-cinzel text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight">
              {lang === 'en' ? WEDDING_DATA.bride.nameEn : WEDDING_DATA.bride.nameTa}
            </h2>
          </div>

          {/* Date & Welcoming Message */}
          <div className="w-full pt-2 border-t border-amber-800/20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-100/90 border border-amber-300 text-amber-950 font-bold text-xs">
              <span>📅</span>
              <span>
                {lang === 'en'
                  ? 'Tuesday, 13th October 2026'
                  : 'செவ்வாய்க்கிழமை, 13 அக்டோபர் 2026'}
              </span>
            </div>
            <p className="text-[11px] text-amber-900 font-medium mt-1.5 animate-pulse">
              ✨ {lang === 'en' ? 'Welcome to our Wedding Celebration!' : 'எங்களது திருமண விழாவிற்கு அன்போடு அழைக்கிறோம்!'} ✨
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            LEFT 3D GATEFOLD DOOR
        ══════════════════════════════════════════════════════════════════ */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 rounded-l-2xl overflow-hidden shadow-2xl transition-transform duration-1000 ease-in-out cursor-pointer"
          style={{
            transformOrigin: 'left center',
            transform: isOpenTriggered ? 'rotateY(-125deg)' : 'rotateY(0deg)',
            zIndex: 10,
            transformStyle: 'preserve-3d',
          }}
          onClick={handleOpenDoors}
        >
          {/* Outer Royal Texture & Borders */}
          <div className="w-full h-full bg-gradient-to-br from-[#1e0d2d] via-[#150a21] to-[#0d0517] border-4 border-r-2 border-amber-400 p-4 sm:p-6 flex flex-col justify-between relative shadow-[inset_0_0_30px_rgba(217,119,6,0.3)]">
            {/* Damask Gold Ornaments */}
            <div className="absolute top-3 left-3 text-amber-300/60 text-xl">❦</div>
            <div className="absolute bottom-3 left-3 text-amber-300/60 text-xl">❦</div>
            <div className="absolute inset-2 border border-amber-400/30 rounded-lg pointer-events-none" />

            {/* Left Top Seal */}
            <div className="text-left pt-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold font-cinzel block">
                {lang === 'en' ? 'Groom' : 'மணமகன்'}
              </span>
              <span className="text-sm sm:text-base font-bold text-amber-100 font-cinzel">
                {lang === 'en' ? 'C. JABARAJ' : 'C. ஜெபராஜ்'}
              </span>
            </div>

            {/* Middle Ornate Crest Graphic */}
            <div className="my-auto flex flex-col items-center justify-center opacity-85">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400/60 bg-amber-500/10 flex items-center justify-center p-2 shadow-inner">
                <span className="font-cinzel text-2xl sm:text-3xl font-black text-amber-300">J</span>
              </div>
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-2" />
            </div>

            {/* Left Bottom Info */}
            <div className="text-left pb-2">
              <p className="text-[9px] sm:text-[10px] text-amber-200/70 font-serif">
                {lang === 'en' ? 'Holy Matrimony' : 'பரிசுத்த மெய்விவாகம்'}
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            RIGHT 3D GATEFOLD DOOR
        ══════════════════════════════════════════════════════════════════ */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 rounded-r-2xl overflow-hidden shadow-2xl transition-transform duration-1000 ease-in-out cursor-pointer"
          style={{
            transformOrigin: 'right center',
            transform: isOpenTriggered ? 'rotateY(125deg)' : 'rotateY(0deg)',
            zIndex: 10,
            transformStyle: 'preserve-3d',
          }}
          onClick={handleOpenDoors}
        >
          {/* Outer Royal Texture & Borders */}
          <div className="w-full h-full bg-gradient-to-bl from-[#1e0d2d] via-[#150a21] to-[#0d0517] border-4 border-l-2 border-amber-400 p-4 sm:p-6 flex flex-col justify-between relative shadow-[inset_0_0_30px_rgba(217,119,6,0.3)]">
            {/* Damask Gold Ornaments */}
            <div className="absolute top-3 right-3 text-amber-300/60 text-xl">❦</div>
            <div className="absolute bottom-3 right-3 text-amber-300/60 text-xl">❦</div>
            <div className="absolute inset-2 border border-amber-400/30 rounded-lg pointer-events-none" />

            {/* Right Top Seal */}
            <div className="text-right pt-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold font-cinzel block">
                {lang === 'en' ? 'Bride' : 'மணமகள்'}
              </span>
              <span className="text-sm sm:text-base font-bold text-amber-100 font-cinzel truncate block">
                {lang === 'en' ? 'R. VERONICA' : 'R. வெரோனிக்கா'}
              </span>
            </div>

            {/* Middle Ornate Crest Graphic */}
            <div className="my-auto flex flex-col items-center justify-center opacity-85">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400/60 bg-amber-500/10 flex items-center justify-center p-2 shadow-inner">
                <span className="font-cinzel text-2xl sm:text-3xl font-black text-amber-300">V</span>
              </div>
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-2" />
            </div>

            {/* Right Bottom Info */}
            <div className="text-right pb-2">
              <p className="text-[9px] sm:text-[10px] text-amber-200/70 font-serif">
                13.10.2026 • Chennai
              </p>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            CENTRAL EMBOSSED ROYAL WAX SEAL & OPEN BUTTON
            (Locks the two doors together until clicked)
        ══════════════════════════════════════════════════════════════════ */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-700 ${
            isOpenTriggered ? 'opacity-0 scale-125' : 'opacity-100 scale-100'
          }`}
          style={{ zIndex: 20 }}
        >
          {/* Golden Ribbon across the middle */}
          <div className="w-full h-12 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 shadow-xl border-y-2 border-amber-200/60 flex items-center justify-center opacity-90">
            <span className="text-[10px] sm:text-xs font-cinzel uppercase tracking-[0.3em] text-slate-950 font-black drop-shadow-xs">
              {lang === 'en' ? '• Royal Wedding Invitation •' : '• பரிசுத்த விவாக அழைப்பிதழ் •'}
            </span>
          </div>

          {/* Golden 3D Medallion Seal Button */}
          <button
            onClick={handleOpenDoors}
            className="pointer-events-auto absolute group p-2 rounded-full cursor-pointer focus:outline-none"
            aria-label="Open Royal Invitation"
          >
            {/* Outer Pulsing Golden Halo Rings */}
            <div className="absolute inset-0 rounded-full bg-amber-400/40 animate-ping" style={{ animationDuration: '2.5s' }} />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600 blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />

            {/* 3D Wax Seal Body */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 border-4 border-amber-200 shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_2px_10px_rgba(255,255,255,0.8)] flex flex-col items-center justify-center p-3 text-center transform group-hover:scale-105 group-active:scale-95 transition-transform duration-300">
              
              {/* Embossed inner circle */}
              <div className="w-full h-full rounded-full border-2 border-dashed border-amber-900/40 flex flex-col items-center justify-center bg-gradient-to-b from-amber-400/90 to-amber-600/90 shadow-inner">
                <span className="text-amber-950 text-xs sm:text-sm font-bold">✝</span>
                <span className="font-cinzel text-base sm:text-xl font-black text-amber-950 tracking-wider leading-none">
                  J &amp; V
                </span>
                <div className="flex items-center gap-1 mt-1">
                  <Sparkles className="w-3 h-3 text-amber-950 animate-bounce" />
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-amber-950">
                    {lang === 'en' ? 'OPEN' : 'திறக்கவும்'}
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* Bottom Tap Instruction Pill */}
          <div className="absolute bottom-6 inset-x-0 flex justify-center pointer-events-auto">
            <button
              onClick={handleOpenDoors}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-[0_10px_25px_rgba(245,158,11,0.5)] border border-amber-200 flex items-center gap-2 active:scale-95 transition-all cursor-pointer animate-bounce"
              style={{ animationDuration: '2s' }}
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>{lang === 'en' ? 'Click to Open Invitation' : 'அழைப்பிதழைத் திறக்க தொடவும்'}</span>
              <span>💌</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
