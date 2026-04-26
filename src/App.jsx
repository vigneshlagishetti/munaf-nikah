import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import weddingData from './data/wedding.json';
import CardOpening from './components/CardOpening';
import HeroSection from './components/HeroSection';
import FamilySection from './components/FamilySection';
import SaveTheDate from './components/SaveTheDate';
import EventsSection from './components/EventsSection';
import VenueSection from './components/VenueSection';
import AccommodationSection from './components/AccommodationSection';
import DressCode from './components/DressCode';
import RSVPForm from './components/RSVPForm';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SectionDivider from './components/ui/SectionDivider';
import AudioToggle from './components/ui/AudioToggle';

const FloatingParticles = () => {
  // Generate stable random values for 40 particles
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${10 + Math.random() * 20}s`,
    animationDelay: `${Math.random() * -20}s`,
    size: `${2 + Math.random() * 4}px`, // Slightly larger
    opacity: 0.3 + Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            bottom: '-10px',
            boxShadow: `0 0 ${p.size} rgba(212, 175, 55, 0.8)`
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [cardOpened, setCardOpened] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const data = weddingData;

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame to optimize performance
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Dynamic Interactive Background Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
        style={{
          opacity: cardOpened ? 1 : 0,
          background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.12), transparent)`,
          mixBlendMode: 'screen'
        }}
      />
      {/* Global drifting pattern background - Increased opacity for visibility */}
      <div 
        className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 islamic-pattern-bg ${cardOpened ? 'opacity-100' : 'opacity-0'}`} 
      />

      {cardOpened && <FloatingParticles />}

      {/* Card Opening Experience */}
      <AnimatePresence>
        {!cardOpened && (
          <CardOpening data={data} onOpen={() => setCardOpened(true)} />
        )}
      </AnimatePresence>

      {/* Main Invitation — always rendered, but fades in when card opens */}
      <div 
        className={`w-full min-h-screen relative z-10 shadow-2xl shadow-gold/5 bg-transparent transition-opacity duration-1000 ${cardOpened ? 'opacity-100' : 'opacity-0 pointer-events-none h-screen overflow-hidden'}`}
      >
        <HeroSection data={data} />
        <SectionDivider />
        <FamilySection data={data} />
        <SaveTheDate data={data} />
        <SectionDivider />
        <EventsSection data={data} />
        <SectionDivider />
        <VenueSection data={data} />
        <SectionDivider />
        <AccommodationSection data={data} />
        <SectionDivider />
        <DressCode data={data} />
        <SectionDivider />
        <RSVPForm data={data} />
        <SectionDivider />
        <FAQSection data={data} />
        <SectionDivider />
        <ContactSection data={data} />
        <Footer data={data} />

        {/* Audio Toggle (only if enabled) */}
        {data.settings.includeMusic && data.settings.backgroundAudioUrl && (
          <AudioToggle audioUrl={data.settings.backgroundAudioUrl} />
        )}
      </div>
    </>
  );
}
