import React, { useState } from 'react';
import { Calendar, MapPin, User, Phone, ChevronRight, Award, Heart, Star, ShieldCheck, Tag } from 'lucide-react';
import { Translation } from '../data/translations';

interface HeroProps {
  t: Translation;
  onFormSubmit: (data: { name: string; phone: string; slot: string; date: string; age?: string; formSource?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onFormSubmit }) => {
  const isTe = t.nav.brandName.includes('మెడ్సీ');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    date: new Date().toISOString().split('T')[0],
    slot: t.hero.slotOptions[0] || '10:00 AM - 07:00 PM'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmit({
        ...formData,
        formSource: 'Consultation Registration (Hero Form)'
      });
    }, 600);
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF6FA] min-h-[calc(100vh-8.5rem)] flex flex-col justify-center py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-10 xl:px-14">
      {/* Desktop Hero IVF Banner Artwork Background - Full fidelity without cutting */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/hero-ivf-banner.png"
          alt="Medcy IVF Fertility Care"
          className="absolute right-0 top-0 h-full w-full object-contain object-right"
        />
        {/* Soft left gradient protecting text & form legibility without obscuring the mother, baby & embryo on the right */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[62%] xl:w-[58%] bg-gradient-to-r from-[#FAF6FA] via-[#FAF6FA]/95 to-transparent" />
      </div>

      {/* Subtle Background Glow on left only */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#652D6C]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container - shifted to the left to give the right artwork full visibility */}
      <div className="w-full max-w-5xl xl:max-w-[1100px] 2xl:max-w-[1180px] relative z-10 my-auto mr-auto">
        {/* Mobile Hero Artwork Card - 100% visible with zero cutting */}
        <div className="lg:hidden w-full mb-5 rounded-2xl overflow-hidden shadow-lg border border-[#652D6C]/15 relative bg-white">
          <img
            src="/hero-ivf-banner.png"
            alt="Medcy IVF Fertility Care"
            className="w-full h-auto aspect-[16/9] object-contain bg-gradient-to-r from-[#FAF6FA] to-[#F5EAF7]"
          />
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white pointer-events-none">
            <span className="bg-[#652D6C]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm">
              Medcy IVF
            </span>
            <span className="bg-yellow-400 text-[#4D1F53] px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shadow-sm">
              8,000+ Families
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-7 xl:gap-8">
          
          {/* Left Column: Headlines & Discount Offer */}
          <div className="space-y-3.5 sm:space-y-4 lg:col-span-7 order-2 lg:order-1">
            
            {/* Brand Eyebrow: MEDCY IVF (Poppins SemiBold) */}
            {t.hero.brandTag && (
              <div className="font-poppins font-semibold text-xs sm:text-sm tracking-widest text-[#652D6C] uppercase flex items-center gap-2">
                <span className="w-5 h-0.5 bg-[#9A389F]/50 rounded-full inline-block"></span>
                <span>{t.hero.brandTag}</span>
              </div>
            )}

            {/* Main Headline */}
            <h1 className="tracking-tight text-[#2A102D] leading-[1.15]">
              <span className="block font-poppins font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#2A102D]">
                {t.hero.headlinePart1}
              </span>
              <span className="block font-poppins font-extrabold italic text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#652D6C] via-[#9A389F] to-[#7E3282] mt-1 sm:mt-1.5">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Tagline Line */}
            {t.hero.tagline && (
              <p className="text-base sm:text-lg lg:text-xl font-bold text-[#4D1F53] tracking-tight">
                {t.hero.tagline}
              </p>
            )}

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-base text-[#56335B] leading-relaxed max-w-2xl font-medium">
              {t.hero.subtext}
            </p>


            {/* Special Discount Offer Card comparing 1.9L vs 1.8L */}
            <div className="text-white shadow-xl relative overflow-hidden border border-yellow-300/40 bg-gradient-to-r from-[#4A164E] via-[#652D6C] to-[#8F2D95] px-5 py-4 sm:px-6 sm:py-5 rounded-2xl">
              <div className="relative z-10 space-y-2">
                {/* Badges Bar */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider bg-yellow-400 text-[#4D1F53] px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#4D1F53]" />
                    <span>{t.hero.offerBadge}</span>
                  </span>

                  <span className="text-[11px] font-extrabold uppercase tracking-wider bg-emerald-500 text-white px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1 animate-pulse">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{t.hero.offerSaveTag}</span>
                  </span>
                </div>

                {/* Price Comparison */}
                <div className="pt-0.5">
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <span className="text-xs sm:text-sm text-purple-200/80 line-through font-bold">
                      {t.hero.offerOriginalPrice}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-yellow-300 tracking-tight">
                      {t.hero.offerText}
                    </h3>
                  </div>

                  <p className="text-xs text-purple-100 font-medium mt-0.5">
                    {t.hero.offerNote}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full max-w-[420px]">
            <div className="bg-white/95 backdrop-blur-md relative shadow-2xl border border-[#652D6C]/20 px-6 pt-7 pb-8 sm:px-7 sm:pt-8 sm:pb-9 lg:pt-9 lg:pb-10 rounded-2xl">
              
              {/* Form Header */}
              <div className="text-center mb-4 sm:mb-5">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#2A102D] tracking-tight">
                  {t.hero.formTitle}
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                
                {/* Full Name Field */}
                <div>
                  <label className="block text-xs font-bold text-[#2A102D] mb-1">
                    {t.hero.fullNameLabel}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-[#652D6C]" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.hero.fullNamePlaceholder}
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D] shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Mobile & Age Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#2A102D] mb-1">
                      {t.hero.mobileLabel}
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-3 text-[#652D6C]" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.hero.mobilePlaceholder}
                        className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-[#2A102D] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2A102D] mb-1">
                      {t.hero.ageLabel}
                    </label>
                    <input
                      type="number"
                      min="18"
                      max="60"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder={t.hero.agePlaceholder}
                      className="w-full px-2.5 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-center text-[#2A102D] shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Date & Time Slot Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#2A102D] mb-1">
                      {t.hero.dateLabel}
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3 top-3 text-[#652D6C] pointer-events-none" />
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-9 pr-2.5 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2A102D] mb-1">
                      {t.hero.slotLabel}
                    </label>
                    <select
                      value={formData.slot}
                      onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                      className="w-full px-2.5 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D] shadow-sm transition-all cursor-pointer"
                    >
                      {t.hero.slotOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent rounded-xl font-extrabold text-sm sm:text-base py-3 px-5 flex items-center justify-center gap-2 shadow-lg mt-2 group hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
                >
                  <span>{isSubmitting ? t.hero.submitting : t.hero.submitButton}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-center text-[#56335B] font-medium pt-1 flex items-center justify-center gap-1">
                  <span>🔒</span>
                  <span>{t.hero.privacyNote}</span>
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
