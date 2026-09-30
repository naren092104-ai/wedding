import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, Bus, Copy, Check, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface EventsSectionProps {
  lang: 'en' | 'ta';
}

export const EventsSection: React.FC<EventsSectionProps> = ({ lang }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyAddress = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="events" className="py-16 md:py-24 relative border-t border-amber-500/10 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-cinzel font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Sacred Celebrations' : 'திருமண நிகழ்வுகள்'}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-white mb-3">
            {lang === 'en' ? 'Ceremony & Grand Reception' : 'விவாக ஆராதனை & அன்பின் உபசரிப்பு'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'en'
              ? 'Join us on Tuesday, 13th October 2026 to bless the couple in person across both auspicious sessions.'
              : '2026 அக்டோபர் 13 செவ்வாய்க்கிழமை அன்று மணமக்களை நேரில் வாழ்த்தி இறையாசி பெற்றுத்தருமாறு அன்புடன் அழைக்கிறோம்.'}
          </p>
        </div>

        {/* 2 Event Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {WEDDING_DATA.events.map((event) => {
            const isCeremony = event.id === 'ceremony';
            return (
              <div
                key={event.id}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-amber-500/25 shadow-2xl flex flex-col group hover:border-amber-400/60 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(245,158,11,0.2)] transition-all duration-300"
              >
                {/* Event Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={event.image}
                    alt={event.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-cinzel font-semibold bg-amber-500 text-slate-950 shadow-md">
                      {isCeremony
                        ? (lang === 'en' ? '1. Holy Matrimony' : '1. விவாக ஆராதனை')
                        : (lang === 'en' ? '2. Reception' : '2. வரவேற்பு விழா')}
                    </span>
                  </div>

                  {/* Time Badge Overlay */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-400/30 text-xs sm:text-sm font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'en' ? event.timeEn : event.timeTa}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="font-cinzel text-lg sm:text-2xl font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                      {lang === 'en' ? event.titleEn : event.titleTa}
                    </h3>
                    <p className="text-amber-200/80 font-garamond italic text-xs sm:text-sm mb-3 sm:mb-4">
                      {lang === 'en' ? event.subtitleEn : event.subtitleTa}
                    </p>

                    <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                      {/* Venue */}
                      <div className="flex items-start gap-2.5 sm:gap-3">
                        <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-white font-semibold text-sm sm:text-base block">
                            {lang === 'en' ? event.venueNameEn : event.venueNameTa}
                          </span>
                          <span className="text-slate-400 text-xs sm:text-sm block mt-0.5">
                            {lang === 'en' ? event.addressEn : event.addressTa}
                          </span>
                        </div>
                      </div>

                      {/* Bus route info if reception */}
                      {event.busInfoEn && (
                        <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1 mt-2">
                          <div className="flex items-center gap-2 text-amber-300 font-semibold">
                            <Bus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
                            <span>{lang === 'en' ? event.busInfoEn : event.busInfoTa}</span>
                          </div>
                          <p className="text-slate-300 pl-5.5 sm:pl-6 text-[11px] sm:text-xs">
                            {lang === 'en' ? event.dropPointEn : event.dropPointTa}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions (Open Maps & Copy Address) */}
                  <div className="pt-3 border-t border-slate-800 flex flex-col min-[420px]:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                    <a
                      href={event.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-amber-900/20 min-h-[42px]"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Open in Google Maps' : 'கூகுள் வரைபடம்'}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>

                    <button
                      onClick={() =>
                        copyAddress(
                          event.id,
                          `${lang === 'en' ? event.venueNameEn : event.venueNameTa}, ${lang === 'en' ? event.addressEn : event.addressTa}`
                        )
                      }
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-500 text-xs transition-all cursor-pointer min-h-[42px]"
                      title="Copy Address"
                    >
                      {copiedId === event.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">{lang === 'en' ? 'Copied' : 'நகலெடுக்கப்பட்டது'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Copy Address' : 'முகவரி'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
