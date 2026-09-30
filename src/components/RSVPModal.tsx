import React, { useState } from 'react';
import { X, Heart, Check, Users, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WEDDING_DATA } from '../data/weddingData';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ta';
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose, lang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guestCount, setGuestCount] = useState('2');
  const [attendingEvent, setAttendingEvent] = useState('both');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#eab308', '#f59e0b', '#f43f5e', '#ec4899', '#38bdf8'],
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const sendWhatsAppRSVP = () => {
    const eventName =
      attendingEvent === 'both'
        ? 'Both Holy Matrimony & Reception'
        : attendingEvent === 'ceremony'
        ? 'Holy Matrimony Service Only'
        : 'Reception Only';

    const text =
      `*Wedding RSVP for C. Jabaraj & R. Tharani (Veronica)*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `👥 *Number of Guests:* ${guestCount}\n` +
      `✨ *Attending:* ${eventName}\n` +
      (notes ? `💬 *Message/Notes:* ${notes}\n` : '') +
      `\nWe are looking forward to joining your auspicious celebration on 13th October 2026!`;

    // Direct to Ashwin / Family WhatsApp
    window.open(`https://wa.me/917305801527?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0f172a] border border-amber-500/30 p-4 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-5 sm:mb-6 pt-1">
              <div className="inline-flex p-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-1.5">
                <Heart className="w-5 h-5 fill-rose-500/20 text-amber-400" />
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                {lang === 'en' ? 'Wedding RSVP' : 'வருகை உறுதிப்படுத்தல்'}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                {lang === 'en'
                  ? 'Kindly let us know your attendance for Tuesday, 13th October 2026.'
                  : 'அக்டோபர் 13, 2026 செவ்வாய்க்கிழமை திருமண விழாவிற்கு தங்கள் வருகையை உறுதிப்படுத்துங்கள்.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {lang === 'en' ? 'Full Name *' : 'முழு பெயர் *'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'en' ? 'Your name / Family name' : 'உங்கள் பெயர் / குடும்பத்தினர் பெயர்'}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm sm:text-base focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {lang === 'en' ? 'Mobile Number' : 'அலைபேசி எண்'}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm sm:text-base focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {lang === 'en' ? 'No. of Guests' : 'விருந்தினர் எண்ணிக்கை'}
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm sm:text-base focus:border-amber-400 focus:outline-none"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5+ Family Members</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  {lang === 'en' ? 'Attending Events' : 'பங்கேற்கும் நிகழ்வு'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'both', labelEn: 'Both Events', labelTa: 'இரு நிகழ்வுகளும்' },
                    { id: 'ceremony', labelEn: 'Ceremony Only', labelTa: 'ஆராதனை மட்டும்' },
                    { id: 'reception', labelEn: 'Reception Only', labelTa: 'வரவேற்பு மட்டும்' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAttendingEvent(opt.id)}
                      className={`p-2.5 rounded-xl border text-xs font-medium transition-all text-center min-h-[38px] ${
                        attendingEvent === opt.id
                          ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-sm font-semibold'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {lang === 'en' ? opt.labelEn : opt.labelTa}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  {lang === 'en' ? 'Warm Note / Blessing for Couple' : 'மணமக்களுக்கான சிறு வாழ்த்து'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={lang === 'en' ? 'Can’t wait to celebrate!' : 'மனமார்ந்த வாழ்த்துகள்!'}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm sm:text-base focus:border-amber-400 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-900/30 transition-all cursor-pointer min-h-[46px]"
              >
                {lang === 'en' ? 'Confirm RSVP' : 'வருகையை உறுதிசெய்'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-white">
              {lang === 'en' ? 'Thank You!' : 'மிக்க நன்றி!'}
            </h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto">
              {lang === 'en'
                ? `We are delighted that you (${name}) will be joining the wedding celebrations on 13th October 2026!`
                : `13 அக்டோபர் 2026 அன்று எங்கள் குடும்ப விசேஷத்தில் நீங்கள் (${name}) பங்கேற்பதில் மிக்க மகிழ்ச்சி!`}
            </p>

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={sendWhatsAppRSVP}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'en' ? 'Share RSVP on WhatsApp' : 'வாட்ஸ்அப்பில் தெரிவிக்க'}</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-300 hover:text-white text-xs transition-colors"
              >
                {lang === 'en' ? 'Close Window' : 'மூடவும்'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
