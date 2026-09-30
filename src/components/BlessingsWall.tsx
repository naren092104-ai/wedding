import React, { useState, useEffect } from 'react';
import { Heart, Send, Sparkles, MessageSquareHeart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WEDDING_DATA } from '../data/weddingData';

interface Wish {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  hearts: number;
}

interface BlessingsWallProps {
  lang: 'en' | 'ta';
}

export const BlessingsWall: React.FC<BlessingsWallProps> = ({ lang }) => {
  const [wishes, setWishes] = useState<Wish[]>(() => {
    // Clear any previous dummy wishes from old storage key
    try {
      localStorage.removeItem('wedding_wishes_jv');
    } catch {
      // ignore
    }
    const saved = localStorage.getItem('wedding_wishes_live_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTag, setSelectedTag] = useState('God Bless You Both');

  const presetTags = [
    { en: 'God Bless You Both', ta: 'கர்த்தரின் ஆசீர்வாதம்' },
    { en: 'Happy Married Life', ta: 'இனிய இல்லற நல்வாழ்த்துகள்' },
    { en: 'Joy & Prosperity', ta: 'வாழ்க வளமுடன்' },
    { en: 'Everlasting Love', ta: 'என்றென்றும் அன்பு' },
  ];

  useEffect(() => {
    localStorage.setItem('wedding_wishes_live_v2', JSON.stringify(wishes));
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Trigger golden confetti celebration
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#eab308', '#f59e0b', '#f43f5e', '#38bdf8'],
      });
    } catch {
      // ignore
    }

    const newWish: Wish = {
      id: 'wish_' + Date.now(),
      name: name.trim(),
      relation: relation.trim() || (lang === 'en' ? 'Well-wisher' : 'நலன்விரும்பி'),
      message: `[${selectedTag}] ${message.trim()}`,
      timestamp: 'Just now',
      hearts: 1,
    };

    setWishes([newWish, ...wishes]);
    setMessage('');
    setName('');
    setRelation('');
  };

  const handleHeart = (id: string) => {
    setWishes((prev) =>
      prev.map((w) => (w.id === id ? { ...w, hearts: w.hearts + 1 } : w))
    );
  };

  return (
    <section id="blessings" className="py-12 sm:py-16 md:py-24 relative border-t border-amber-500/10 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-cinzel font-semibold mb-2">
            <MessageSquareHeart className="w-3.5 h-3.5 text-rose-400" />
            <span>{lang === 'en' ? 'Blessings & Wishes' : 'மணமக்களுக்கான ஆசிர்மொழிகள்'}</span>
            <MessageSquareHeart className="w-3.5 h-3.5 text-rose-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-cinzel text-white mb-2 sm:mb-3">
            {lang === 'en' ? 'Heartfelt Wishes Wall' : 'வாழ்த்து மடல் & ஆசீர்வாதங்கள்'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base">
            {lang === 'en'
              ? 'Leave your loving prayers and warm congratulations for Jabaraj & Veronica.'
              : 'ஜெபராஜ் & விரோனிக்கா தம்பதியினருக்கு உங்கள் இதயப்பூர்வமான வாழ்த்துகளையும் வேண்டுதல்களையும் இங்கு பதிவு செய்யுங்கள்.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Wish Input Form */}
          <div className="lg:col-span-5 rounded-2xl p-4 sm:p-7 bg-slate-900/90 border border-amber-500/30 shadow-xl backdrop-blur-sm">
            <h3 className="font-cinzel text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{lang === 'en' ? 'Write Your Blessing' : 'வாழ்த்துக் குறிப்பு எழுதவும்'}</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {lang === 'en' ? 'Your Name *' : 'உங்கள் பெயர் *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. Samuel & Grace' : 'எ.கா. சாமுவேல் & குடும்பத்தினர்'}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm sm:text-base focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {lang === 'en' ? 'Relation / City' : 'உறவுமுறை / ஊர்'}
                </label>
                <input
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder={lang === 'en' ? 'e.g. College Friend, Chennai' : 'எ.கா. நண்பர்கள், சென்னை'}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm sm:text-base focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Tag options */}
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1.5">
                  {lang === 'en' ? 'Choose Blessing Tag' : 'வாழ்த்து முத்திரை'}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {presetTags.map((tag) => {
                    const label = lang === 'en' ? tag.en : tag.ta;
                    const isSelected = selectedTag === tag.en;
                    return (
                      <button
                        key={tag.en}
                        type="button"
                        onClick={() => setSelectedTag(tag.en)}
                        className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 font-semibold'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {lang === 'en' ? 'Your Loving Message *' : 'உங்கள் வாழ்த்துச் செய்தி *'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'en'
                      ? 'Wishing you both abundant blessings and joyful years together...'
                      : 'மணமக்கள் கர்த்தரின் அருளோடு சீரோடும் சிறப்போடும் வாழ வாழ்த்துகிறோம்...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 text-sm sm:text-base focus:border-amber-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-md shadow-amber-900/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer min-h-[46px]"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'en' ? 'Post Blessing' : 'வாழ்த்தைப் பதிவிடவும்'}</span>
              </button>
            </form>
          </div>

          {/* Wishes Stream */}
          <div className="lg:col-span-7 space-y-4 max-h-[600px] overflow-y-auto pr-1">
            {wishes.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl bg-slate-900/40 border border-dashed border-amber-500/25 text-center my-auto min-h-[300px]">
                <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-3 shadow-[0_0_20px_rgba(245,158,11,0.15)] animate-pulse-soft">
                  <MessageSquareHeart className="w-7 h-7" />
                </div>
                <h4 className="font-cinzel text-base sm:text-lg font-bold text-white mb-1.5">
                  {lang === 'en' ? 'Be the First to Bless the Couple!' : 'மணமக்களுக்கு உங்கள் முதல் ஆசீர்வாதத்தை அளியுங்கள்!'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                  {lang === 'en'
                    ? 'Fill the form on the left to shower your prayers and loving wishes for Jabaraj & Veronica.'
                    : 'ஜெபராஜ் & விரோனிக்கா தம்பதியினருக்கு உங்கள் அன்பான வாழ்த்துகளை இடதுபுறப் படிவத்தில் பதிவு செய்யுங்கள்.'}
                </p>
              </div>
            ) : (
              wishes.map((wish) => (
                <div
                  key={wish.id}
                  className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-400/40 hover:bg-slate-900/90 hover:-translate-y-0.5 shadow-md hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-semibold text-white text-sm sm:text-base">
                        {wish.name}
                      </span>
                      <span className="text-slate-500 text-xs">{wish.timestamp}</span>
                    </div>
                    <span className="text-amber-400/80 text-xs block mb-2">
                      {wish.relation}
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                      {wish.message}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                    <span className="italic text-slate-500">J &amp; V Matrimony 2026</span>
                    <button
                      onClick={() => handleHeart(wish.id)}
                      className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 active:scale-125 transition-transform p-1 cursor-pointer"
                      title="Send Love / ஆசி"
                    >
                      <Heart className="w-4 h-4 fill-rose-500/30 hover:fill-rose-500" />
                      <span className="tabular-nums font-mono">{wish.hearts}</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
