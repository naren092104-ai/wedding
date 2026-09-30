import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDateISO: string;
  lang: 'en' | 'ta';
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPassed: boolean;
}

interface PaperFlipCardProps {
  value: number;
  label: string;
}

const PaperFlipCard: React.FC<PaperFlipCardProps> = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [fallingValue, setFallingValue] = useState<number | null>(null);
  const [isFalling, setIsFalling] = useState(false);

  useEffect(() => {
    if (value !== displayValue) {
      setFallingValue(displayValue);
      setDisplayValue(value);
      setIsFalling(true);

      const timeout = setTimeout(() => {
        setIsFalling(false);
        setFallingValue(null);
      }, 550);

      return () => clearTimeout(timeout);
    }
  }, [value, displayValue]);

  const formattedCurr = String(displayValue).padStart(2, '0');
  const formattedFalling = fallingValue !== null ? String(fallingValue).padStart(2, '0') : null;

  return (
    <div className="flex flex-col items-center">
      {/* 3D Paper Perspective Container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-square max-w-[125px] rounded-xl border border-amber-500/40 bg-[#0d1424] shadow-[0_8px_25px_rgba(0,0,0,0.65)] perspective-paper p-1">
        {/* Top Calendar Binder Line */}
        <div className="absolute top-0 inset-x-3 h-[2px] bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 rounded-b shadow-[0_0_8px_rgba(245,158,11,0.6)] z-30" />

        {/* Paper Corner Rivets */}
        <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-slate-950 border border-amber-400/60 z-30 shadow-inner" />
        <div className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-slate-950 border border-amber-400/60 z-30 shadow-inner" />

        {/* Middle Paper Fold Seam Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-black/80 border-b border-white/5 z-20 pointer-events-none" />

        {/* Underneath Card (Base showing current value) */}
        <div
          className={`w-full h-full rounded-lg bg-gradient-to-b from-[#131b2e] via-[#0f172a] to-[#0a0f1d] flex items-center justify-center relative overflow-hidden border border-slate-800 ${
            isFalling ? 'animate-paper-reveal' : ''
          }`}
        >
          {/* Paper subtle light sheen on top half */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-white/[0.03] pointer-events-none" />
          <span className="text-xl min-[380px]:text-2xl sm:text-4xl md:text-5xl font-bold font-cinzel tabular-nums text-gold-gradient tracking-tight drop-shadow-sm">
            {formattedCurr}
          </span>
        </div>

        {/* Falling Paper Leaf (Animated falling down forward like page tearing/flipping to next) */}
        {isFalling && formattedFalling !== null && (
          <div
            key={formattedFalling}
            className="absolute inset-1 rounded-lg bg-gradient-to-b from-[#1a233a] via-[#11192c] to-[#0c1220] flex items-center justify-center border border-amber-400/35 animate-paper-fall z-30 overflow-hidden shadow-2xl pointer-events-none"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-white/[0.04] pointer-events-none" />
            <span className="text-xl min-[380px]:text-2xl sm:text-4xl md:text-5xl font-bold font-cinzel tabular-nums text-gold-gradient tracking-tight drop-shadow-sm">
              {formattedFalling}
            </span>
          </div>
        )}
      </div>

      {/* Label */}
      <span className="text-[10px] min-[380px]:text-[11px] sm:text-xs text-amber-200/80 font-medium uppercase tracking-wider sm:tracking-widest mt-1.5 text-center">
        {label}
      </span>
    </div>
  );
};

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateISO, lang }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDateISO).getTime() - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPassed: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateISO]);

  const units = [
    { labelEn: 'Days', labelTa: 'நாட்கள்', value: timeLeft.days },
    { labelEn: 'Hours', labelTa: 'மணிகள்', value: timeLeft.hours },
    { labelEn: 'Minutes', labelTa: 'நிமிடங்கள்', value: timeLeft.minutes },
    { labelEn: 'Seconds', labelTa: 'நொடிகள்', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="text-center mb-3">
        <span className="text-xs uppercase tracking-[0.25em] text-amber-300/80 font-cinzel font-semibold">
          {lang === 'en' ? 'Countdown to Holy Matrimony' : 'திருமணத்திற்கு மீதமுள்ள நேரம்'}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {units.map((unit, idx) => (
          <PaperFlipCard
            key={idx}
            value={unit.value}
            label={lang === 'en' ? unit.labelEn : unit.labelTa}
          />
        ))}
      </div>
    </div>
  );
};

