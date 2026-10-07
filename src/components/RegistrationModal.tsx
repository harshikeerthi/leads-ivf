import React, { useState } from 'react';
import { X, Calendar, User, Phone, ChevronRight, Clock, ShieldCheck } from 'lucide-react';
import { Translation } from '../data/translations';
import { getUpcomingSaturdays } from '../utils/saturdays';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmit: (data: { name: string; phone: string; slot: string; date: string; age?: string; formSource?: string }) => void;
  t: Translation;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, onFormSubmit, t }) => {
  const isTe = t.nav.brandName.includes('మెడ్సీ');
  const saturdayOptions = getUpcomingSaturdays(isTe ? 'te' : 'en');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    date: saturdayOptions[0]?.value || '',
    slot: t.hero.slotOptions[0] || '10:00 AM - 06:00 PM'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFormSubmit({
        ...formData,
        formSource: 'FREE MEDICAL CAMP Consultation Registration'
      });
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="glass-card bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-[#652D6C]/30 text-[#2A102D] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF3FB] hover:bg-[#652D6C] text-[#652D6C] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#652D6C]/10 text-[#652D6C] text-xs font-extrabold rounded-full uppercase tracking-wider mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#9A389F]" />
            <span>{t.nav.freeCampBadge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2A102D]">
            {t.nav.campFormTitle}
          </h2>

          <p className="text-xs sm:text-sm text-[#56335B] font-medium max-w-sm mx-auto">
            {t.nav.campFormSubtitle}
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-[#2A102D] mb-1">
              {t.hero.fullNameLabel}
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3.5 top-3.5 text-[#56335B]" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.hero.fullNamePlaceholder}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium"
              />
            </div>
          </div>

          {/* Phone & Age */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-[#2A102D] mb-1">
                {t.hero.mobileLabel}
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-[#56335B]" />
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.hero.mobilePlaceholder}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium"
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
                className="w-full px-3 py-2.5 text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-medium text-center"
              />
            </div>
          </div>

          {/* Date & Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#2A102D] mb-1">
                {t.hero.dateLabel}
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-3 text-[#56335B] pointer-events-none" />
                <select
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D]"
                >
                  {saturdayOptions.map((sat) => (
                    <option key={sat.value} value={sat.value}>
                      {sat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2A102D] mb-1">
                {t.hero.slotLabel}
              </label>
              <select
                value={formData.slot}
                onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white border border-[#652D6C]/25 rounded-xl focus:ring-2 focus:ring-[#9A389F] focus:border-[#652D6C] outline-none font-semibold text-[#2A102D]"
              >
                {t.hero.slotOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-accent py-3.5 px-6 rounded-xl font-black text-base flex items-center justify-center gap-2 shadow-lg mt-3 group"
          >
            <span>{isSubmitting ? t.hero.submitting : t.hero.submitButton}</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#56335B] font-medium pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.hero.privacyNote}</span>
          </div>

        </form>

      </div>
    </div>
  );
};
