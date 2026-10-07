import React, { useState } from 'react';
import { Language, translations } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PackageInclusions } from './components/PackageInclusions';
import { DoctorsSection } from './components/DoctorsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { RegistrationModal } from './components/RegistrationModal';
import { MobileBottomBar } from './components/MobileBottomBar';

import { sendToGoogleSheet, FormSubmissionData } from './utils/googleSheets';

export function App() {
  // Default language is set to English ('en')
  const [lang, setLang] = useState<Language>('en');
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState<FormSubmissionData | null>(null);

  const t = translations[lang];

  const handleOpenRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleBookClick = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleFormSubmit = (data: FormSubmissionData) => {
    setBookingData(data);
    setIsModalOpen(true);
    sendToGoogleSheet(data);
  };

  return (
    <div className="min-h-screen bg-[#FAF6FA] text-[#2A102D] font-sans pb-16 lg:pb-0 overflow-x-hidden">
      {/* Top Glass Navbar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        onBookClick={handleBookClick} 
        onOpenRegistrationModal={handleOpenRegistrationModal}
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          t={t} 
          onFormSubmit={handleFormSubmit} 
        />

        {/* 2. Inclusions Section (8 Key Inclusions) */}
        <PackageInclusions 
          t={t} 
          onBookClick={handleBookClick} 
        />

        {/* 3. Meet the Experts Section (Dr. Sireesha Rani & Dr. Sudheshna Devi) */}
        <DoctorsSection 
          t={t} 
          onDoctorClick={handleBookClick} 
        />
      </main>

      {/* Footer with Map & Contact */}
      <Footer 
        t={t} 
      />

      {/* Registration Popup Modal */}
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
        onFormSubmit={handleFormSubmit}
        t={t}
      />

      {/* Token Confirmation Modal */}
      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingData={bookingData}
        t={t}
      />

      {/* Mobile Bottom Action Bar */}
      <MobileBottomBar 
        t={t} 
        onBookClick={handleBookClick} 
      />
    </div>
  );
}

export default App;
