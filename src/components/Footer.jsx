import { useState } from 'react';
import { Share2, Link2, MessageCircle } from 'lucide-react';
import { shareInvitation, shareViaWhatsApp } from '../utils/share';
import AnimatedSection from './ui/AnimatedSection';
import GoldButton from './ui/GoldButton';

export default function Footer({ data }) {
  const [copyMsg, setCopyMsg] = useState('');

  const handleShare = async () => {
    const result = await shareInvitation({
      title: `${data.groom.name} & ${data.bride.name} — Nikah Invitation`,
      text: `You are cordially invited to the Nikah of ${data.groom.name} & ${data.bride.name}. ${data.nikah.dateGregorian}`,
      url: window.location.href,
    });
    if (result.method === 'clipboard') {
      setCopyMsg('Link copied!');
      setTimeout(() => setCopyMsg(''), 2000);
    }
  };

  const handleWhatsApp = () => {
    shareViaWhatsApp({
      text: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nYou are cordially invited to the Nikah of ${data.groom.name} & ${data.bride.name}\n\n📅 ${data.nikah.dateGregorian}\n🕌 ${data.nikah.venueName}\n\nPlease join us for this blessed occasion.`,
      url: window.location.href,
    });
  };

  return (
    <footer className="section-padding text-center border-t border-gold/10 islamic-pattern-bg">
      {/* Monogram */}
      <AnimatedSection>
        <div className="mb-8">
          <p className="font-script text-5xl gold-text">
            {data.groom.name[0]} & {data.bride.name[0]}
          </p>
        </div>
      </AnimatedSection>

      {/* Closing Dua */}
      <AnimatedSection delay={0.1}>
        <div className="max-w-sm mx-auto mb-8">
          <p className="arabic-text text-gold/60 text-xl leading-loose mb-3">
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p className="font-display text-ivory/50 text-sm italic leading-relaxed">
            "May Allah bless you, and shower His blessings upon you, and unite you both in goodness."
          </p>
        </div>
      </AnimatedSection>

      <div className="gold-shimmer-line w-20 mx-auto mb-8" />

      {/* Share */}
      <AnimatedSection delay={0.2}>
        <p className="text-ivory/30 text-xs mb-4 tracking-wide">Share this invitation</p>
        <div className="flex justify-center gap-3 mb-8">
          <GoldButton onClick={handleWhatsApp} variant="outline">
            <MessageCircle size={14} /> WhatsApp
          </GoldButton>
          <GoldButton onClick={handleShare} variant="ghost">
            {copyMsg ? <><Link2 size={14} /> {copyMsg}</> : <><Share2 size={14} /> Share Link</>}
          </GoldButton>
        </div>
      </AnimatedSection>

      {/* Credits */}
      <p className="text-ivory/15 text-[10px] tracking-wide">
        Made with 🤍 and du'a
      </p>
    </footer>
  );
}
