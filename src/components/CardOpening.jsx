import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Ornate Corner Flourish (SVG) ────────────────────────── */
const CornerFlourish = ({ className = '', style = {} }) => (
  <svg
    viewBox="0 0 120 120"
    className={className}
    style={{ width: 80, height: 80, ...style }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 118 C2 118 2 60 20 40 C32 26 50 20 60 18 C50 30 42 50 40 70 C38 90 40 100 42 108"
      stroke="url(#cg)" strokeWidth="1.2" opacity="0.7"
    />
    <path
      d="M2 118 C2 118 8 70 30 48 C44 34 62 28 75 26 C60 40 48 60 44 82 C42 94 44 106 46 114"
      stroke="url(#cg)" strokeWidth="0.8" opacity="0.5"
    />
    <path
      d="M10 118 C10 100 14 70 32 52 C44 40 56 36 68 34"
      stroke="url(#cg)" strokeWidth="0.6" opacity="0.4"
    />
    <ellipse cx="22" cy="38" rx="4" ry="8" transform="rotate(-40 22 38)" fill="url(#cg)" opacity="0.25" />
    <ellipse cx="46" cy="24" rx="3" ry="7" transform="rotate(-20 46 24)" fill="url(#cg)" opacity="0.2" />
    <circle cx="60" cy="18" r="2.5" fill="url(#cg)" opacity="0.35" />
    <circle cx="32" cy="50" r="2" fill="url(#cg)" opacity="0.3" />
    <defs>
      <linearGradient id="cg" x1="0" y1="0" x2="120" y2="120">
        <stop offset="0%" stopColor="#F5D96B" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#916C18" />
      </linearGradient>
    </defs>
  </svg>
);

/* ── Crescent & Star Ornament ────────────────────────────── */
const CrescentOrnament = () => (
  <svg viewBox="0 0 60 60" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 6 C18 6 8 16 8 28 C8 40 18 50 30 50 C22 46 18 38 18 28 C18 18 22 12 30 6Z"
      fill="url(#crg)" opacity="0.8"
    />
    <polygon
      points="42,20 43.5,25 48,25 44.5,28 46,33 42,30 38,33 39.5,28 36,25 40.5,25"
      fill="url(#crg)" opacity="0.7"
    />
    <defs>
      <linearGradient id="crg" x1="0" y1="0" x2="60" y2="60">
        <stop offset="0%" stopColor="#F5D96B" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
    </defs>
  </svg>
);

/* ── Door Panel Arabesque Pattern ────────────────────────── */
const DoorArabesque = () => (
  <svg viewBox="0 0 160 460" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="148" height="448" rx="4" stroke="#D4AF37" strokeWidth="0.6" opacity="0.3" />
    <rect x="12" y="12" width="136" height="436" rx="3" stroke="#D4AF37" strokeWidth="0.4" opacity="0.2" />
    <path d="M30 20 Q80 -5 130 20" stroke="#D4AF37" strokeWidth="0.5" opacity="0.25" fill="none"/>
    <path d="M35 28 Q80 5 125 28" stroke="#D4AF37" strokeWidth="0.4" opacity="0.2" fill="none"/>
    <path d="M80 60 L120 150 L80 240 L40 150 Z" stroke="#D4AF37" strokeWidth="0.5" opacity="0.15" />
    <path d="M80 90 L105 150 L80 210 L55 150 Z" stroke="#D4AF37" strokeWidth="0.4" opacity="0.12" />
    <circle cx="80" cy="150" r="18" stroke="#D4AF37" strokeWidth="0.4" opacity="0.15" />
    <circle cx="80" cy="150" r="10" stroke="#D4AF37" strokeWidth="0.3" opacity="0.12" />
    <path d="M40 320 Q80 290 120 320" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" fill="none"/>
    <path d="M50 340 Q80 315 110 340" stroke="#D4AF37" strokeWidth="0.4" opacity="0.15" fill="none"/>
    <path d="M80 300 L100 360 L80 420 L60 360 Z" stroke="#D4AF37" strokeWidth="0.4" opacity="0.12" />
    <circle cx="80" cy="360" r="12" stroke="#D4AF37" strokeWidth="0.3" opacity="0.12" />
    <circle cx="20" cy="20" r="1.5" fill="#D4AF37" opacity="0.3" />
    <circle cx="140" cy="20" r="1.5" fill="#D4AF37" opacity="0.3" />
    <circle cx="20" cy="440" r="1.5" fill="#D4AF37" opacity="0.3" />
    <circle cx="140" cy="440" r="1.5" fill="#D4AF37" opacity="0.3" />
  </svg>
);

/* ── Falling Rose Petals (reduced count for performance) ── */
const FallingPetals = () => {
  const petals = useMemo(() =>
    Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      delay: `${Math.random() * 6}s`,
      duration: `${6 + Math.random() * 5}s`,
      size: 8 + Math.random() * 10,
      rotation: Math.random() * 360,
      opacity: 0.15 + Math.random() * 0.25,
      hue: Math.random() > 0.5 ? '#D4AF37' : '#C8828D',
    })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map(p => (
        <div
          key={p.id}
          className="falling-petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            willChange: 'transform',
          }}
        >
          <svg width={p.size} height={p.size * 1.3} viewBox="0 0 12 16" style={{ transform: `rotate(${p.rotation}deg)`, opacity: p.opacity }}>
            <path
              d="M6 0 C8 3 12 6 10 11 C9 14 7 16 6 16 C5 16 3 14 2 11 C0 6 4 3 6 0Z"
              fill={p.hue}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

/* ── Shimmering Gold Dust (reduced for performance) ──────── */
const GoldDust = () => {
  const specs = useMemo(() =>
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${2 + Math.random() * 3}s`,
      size: 1 + Math.random() * 2.5,
    })), []);

  return (
    <div className="absolute inset-0 pointer-events-none z-5">
      {specs.map(s => (
        <div
          key={s.id}
          className="gold-dust-speck"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
            willChange: 'opacity',
          }}
        />
      ))}
    </div>
  );
};

/* ── Main Card Opening Component ─────────────────────────── */
export default function CardOpening({ data, onOpen }) {
  const [cardState, setCardState] = useState('closed');
  // states: 'closed', 'opening', 'zooming'

  const handleOpen = useCallback(() => {
    if (cardState === 'closed') {
      // First tap: open doors, then hold for 3 seconds before transitioning
      setCardState('opening');
      window.cardTimeout = setTimeout(() => {
        setCardState('zooming');
        setTimeout(() => onOpen(), 1000);
      }, 3000); // Hold open for 3 seconds
    } else if (cardState === 'opening') {
      // Tap during opening: skip wait, zoom immediately
      if (window.cardTimeout) clearTimeout(window.cardTimeout);
      setCardState('zooming');
      setTimeout(() => onOpen(), 800);
    }
  }, [cardState, onOpen]);

  return (
    <AnimatePresence>
      <motion.div
        key="gatefold-scene"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, #1a1508 0%, #0a0a08 40%, #030303 100%)',
          perspective: '1200px',
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Ambient radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 600px 400px at 50% 45%, rgba(212,175,55,0.18) 0%, transparent 70%)' }} />

        {/* Falling rose petals (visible when opened) */}
        {cardState !== 'closed' && <FallingPetals />}

        {/* ── 3D Gatefold Card ───────────────────────────── */}
        <motion.div
          className="relative w-[320px] h-[460px] cursor-pointer"
          animate={{
            scale: cardState === 'zooming' ? 1.8 : 1,
            opacity: cardState === 'zooming' ? 0 : 1,
          }}
          transition={{
            duration: cardState === 'zooming' ? 1.2 : 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          onClick={handleOpen}
          style={{ transformStyle: 'preserve-3d', willChange: 'transform, opacity' }}
        >
          {/* ─── INNER CARD (revealed content) — Premium Wedding Card ── */}
          <div
            className="absolute inset-0 rounded-md overflow-hidden flex flex-col items-center justify-center"
            style={{
              transform: 'translateZ(-1px)',
              background: 'linear-gradient(170deg, #1a1710 0%, #12100a 25%, #0d0b07 50%, #100e08 75%, #1a1710 100%)',
              border: '1.5px solid rgba(212,175,55,0.35)',
              boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5), inset 0 0 40px rgba(212,175,55,0.06), 0 0 60px rgba(212,175,55,0.08)',
            }}
          >
            {/* Warm ambient glow behind content */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 200px 250px at 50% 45%, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

            {/* Islamic pattern overlay */}
            <div className="absolute inset-0 islamic-pattern-bg pointer-events-none opacity-20" />
            
            {/* Shimmering gold dust */}
            <GoldDust />

            {/* Outer gold frame */}
            <div className="absolute inset-2 rounded-sm pointer-events-none"
              style={{ border: '1px solid rgba(212,175,55,0.2)' }} />
            {/* Inner delicate frame */}
            <div className="absolute inset-4 rounded-sm pointer-events-none"
              style={{ border: '0.5px solid rgba(212,175,55,0.12)' }} />
            {/* Innermost accent frame */}
            <div className="absolute inset-6 rounded-sm pointer-events-none"
              style={{ border: '0.5px solid rgba(212,175,55,0.06)' }} />

            {/* Corner flourishes */}
            <CornerFlourish className="absolute top-1 left-1 pointer-events-none" />
            <CornerFlourish className="absolute top-1 right-1 pointer-events-none" style={{ transform: 'scaleX(-1)' }} />
            <CornerFlourish className="absolute bottom-1 left-1 pointer-events-none" style={{ transform: 'scaleY(-1)' }} />
            <CornerFlourish className="absolute bottom-1 right-1 pointer-events-none" style={{ transform: 'scale(-1, -1)' }} />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-6">
              {/* Bismillah — Arabic calligraphy */}
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: cardState !== 'closed' ? 1 : 0, y: cardState !== 'closed' ? 0 : -8 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                className="text-[1.4rem] mb-2 text-center"
                style={{ fontFamily: "'Amiri', serif", color: 'rgba(212,175,55,0.8)' }}
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </motion.p>

              {/* Crescent ornament */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: cardState !== 'closed' ? 1 : 0, scale: cardState !== 'closed' ? 1 : 0.8 }}
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                className="mb-3"
              >
                <CrescentOrnament />
              </motion.div>

              {/* Top shimmer line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: cardState !== 'closed' ? 1 : 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                className="gold-shimmer-line-thick w-24 mb-4"
              />

              {/* Invitation text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: cardState !== 'closed' ? 1 : 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
                className="text-center mb-1 leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255,255,255,0.55)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                Together with their families
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: cardState !== 'closed' ? 1 : 0 }}
                transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
                className="text-center mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255,255,255,0.45)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' }}
              >
                Request the honour of your presence
              </motion.p>

              {/* Names — large, elegant */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: cardState !== 'closed' ? 1 : 0, y: cardState !== 'closed' ? 0 : 12 }}
                transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
                className="text-center mb-4"
              >
                <h1 className="gold-text leading-none mb-1" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2.6rem' }}>
                  {data.groom.name}
                </h1>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(212,175,55,0.5)', fontSize: '16px', letterSpacing: '0.15em' }} className="my-1.5">✦</p>
                <h1 className="gold-text leading-none" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '2.6rem' }}>
                  {data.bride.name}
                </h1>
              </motion.div>

              {/* Bottom shimmer */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: cardState !== 'closed' ? 1 : 0 }}
                transition={{ delay: 0.85, duration: 0.5, ease: 'easeOut' }}
                className="gold-shimmer-line w-16 mb-3"
              />

              {/* Date & Venue */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: cardState !== 'closed' ? 1 : 0 }}
                transition={{ delay: 0.9, duration: 0.7, ease: 'easeOut' }}
                className="text-center"
              >
                <p style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(212,175,55,0.7)', fontSize: '13px', letterSpacing: '0.15em' }}>
                  {data.nikah.dateGregorian}
                </p>
                <p className="mt-1.5" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255,255,255,0.35)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                  Nikah Ceremony
                </p>
              </motion.div>
            </div>
          </div>

          {/* ─── LEFT DOOR ─────────────────────────────── */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full z-20 origin-left"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: cardState !== 'closed' ? -135 : 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Front face */}
            <div
              className="absolute inset-0 rounded-l-md overflow-hidden"
              style={{
                backfaceVisibility: 'hidden',
                background: 'linear-gradient(160deg, #1a1810 0%, #111110 40%, #0e0d0a 100%)',
                borderRight: '1px solid rgba(212,175,55,0.35)',
                boxShadow: '10px 0 25px rgba(0,0,0,0.6)',
              }}
            >
              <div className="absolute inset-0 islamic-pattern-bg opacity-15" />
              <DoorArabesque />
              <div className="absolute inset-2 border border-gold/15 rounded-sm" />
              <div className="absolute inset-4 rounded-sm" style={{ border: '0.5px solid rgba(212,175,55,0.08)' }} />
              <div className="absolute right-0 top-8 bottom-8 w-[1px]"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), transparent)' }} />
            </div>
            {/* Back face */}
            <div className="absolute inset-0 bg-[#080808] rounded-r-md"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} />
          </motion.div>

          {/* ─── RIGHT DOOR ────────────────────────────── */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full z-20 origin-right"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: cardState !== 'closed' ? 135 : 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Front face */}
            <div
              className="absolute inset-0 rounded-r-md overflow-hidden"
              style={{
                backfaceVisibility: 'hidden',
                background: 'linear-gradient(200deg, #1a1810 0%, #111110 40%, #0e0d0a 100%)',
                borderLeft: '1px solid rgba(212,175,55,0.35)',
                boxShadow: '-10px 0 25px rgba(0,0,0,0.6)',
              }}
            >
              <div className="absolute inset-0 islamic-pattern-bg opacity-15" />
              <DoorArabesque />
              <div className="absolute inset-2 border border-gold/15 rounded-sm" />
              <div className="absolute inset-4 rounded-sm" style={{ border: '0.5px solid rgba(212,175,55,0.08)' }} />
              <div className="absolute left-0 top-8 bottom-8 w-[1px]"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.3), transparent)' }} />
            </div>
            {/* Back face */}
            <div className="absolute inset-0 bg-[#080808] rounded-l-md"
              style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} />
          </motion.div>

          {/* ─── WAX SEAL ──────────────────────────────── */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            animate={{
              opacity: cardState !== 'closed' ? 0 : 1,
              scale: cardState !== 'closed' ? 1.3 : 1,
              rotate: cardState !== 'closed' ? 10 : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Outer seal glow ring */}
            <div className="absolute -inset-3 rounded-full wax-seal-glow" />
            <div className="wax-seal shadow-2xl">
              M&R
            </div>
          </motion.div>

          {/* ─── TAP HINT ──────────────────────────────── */}
          <motion.div
            animate={{ opacity: cardState === 'closed' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-20 flex flex-col items-center gap-3 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-gold/50 text-lg"
            >
              ✦
            </motion.div>
            <span className="text-gold/40 text-[9px] tracking-[0.4em] uppercase font-serif">
              Tap to Open
            </span>
          </motion.div>

          {/* ─── SKIP HINT ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: cardState === 'opening' ? 1 : 0 }}
            transition={{ delay: cardState === 'opening' ? 1 : 0, duration: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-20 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-gold/40 text-[9px] tracking-[0.4em] uppercase font-serif">
              Tap to Skip
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
