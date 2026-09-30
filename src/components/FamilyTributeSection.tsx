import React from 'react';
import { Phone, MessageCircle, HelpCircle } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

interface FamilyTributeSectionProps {
  lang: 'en' | 'ta';
}

export const FamilyTributeSection: React.FC<FamilyTributeSectionProps> = ({ lang }) => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative border-t border-amber-500/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Family Coordinators & Contact Info */}
        <div className="rounded-2xl p-4 sm:p-6 md:p-8 bg-gradient-to-r from-amber-500/10 via-slate-900/90 to-amber-600/10 border border-amber-500/30 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-cinzel tracking-widest uppercase mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'en' ? 'Route Guidance & Inquiries' : 'தொடர்புக்கு & வழிநடத்துதலுக்கு'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-cinzel text-white">
              {lang === 'en' ? 'Family Contact Coordinators' : 'குடும்பத் தொடர்புகள்'}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5">
              {lang === 'en'
                ? 'For any questions regarding venue directions or wedding celebrations, feel free to contact us.'
                : 'திருமண நிகழ்வு மற்றும் வழித்தட விவரங்கள் அறிய குடும்பத்தினரைத் தொடர்பு கொள்ளலாம்.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {WEDDING_DATA.contacts.map((contact, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-slate-400 text-xs block">
                    {lang === 'en' ? 'Representative' : 'பொறுப்பாளர்'}
                  </span>
                  <span className="text-white font-semibold text-base block mt-0.5">
                    {lang === 'en' ? contact.nameEn : contact.nameTa}
                  </span>
                  <span className="text-amber-300 font-mono text-sm block mt-1.5 font-semibold">
                    {contact.displayPhone}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-900">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors min-h-[44px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'en' ? 'Call' : 'அழைக்க'}</span>
                  </a>
                  <a
                    href={`https://wa.me/91${contact.phone}?text=${encodeURIComponent(
                      lang === 'en'
                        ? 'Hello! Regarding the wedding of Jabaraj & Veronica...'
                        : 'வணக்கம்! ஜெபராஜ் & விரோனிக்கா திருமண விபரம் குறித்து...'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-medium flex items-center justify-center gap-1.5 border border-emerald-500/30 transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
