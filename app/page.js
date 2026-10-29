'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import FloorPlans from '../components/FloorPlans';
import DreamHomeForm from '../components/DreamHomeForm';
import Footer from '../components/Footer';
import ReviewsModal from '../components/ReviewsModal';
import WhatsAppFloating from '../components/WhatsAppFloating';
import AmbientDriftBackground from '../components/AmbientDriftBackground';

export default function Home() {
  const [reviewsOpen, setReviewsOpen] = useState(false);

  return (
    <div className="belikov-app-wrapper">
      {/* Dim blurred slowly moving ambient light background */}
      <AmbientDriftBackground />

      <Navbar
        onOpenInquiry={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <Hero
        onOpenReviews={() => setReviewsOpen(true)}
        onOpenContact={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectProject={() => {
          const el = document.getElementById('projects');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <Portfolio />
      <FloorPlans />
      <DreamHomeForm />
      <Footer />

      {/* Reviews Modal */}
      <ReviewsModal
        isOpen={reviewsOpen}
        onClose={() => setReviewsOpen(false)}
      />

      {/* Floating Quick WhatsApp Desk */}
      <WhatsAppFloating />
    </div>
  );
}
