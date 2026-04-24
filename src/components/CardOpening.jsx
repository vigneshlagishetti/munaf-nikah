import { useState, useMemo } from 'react';
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
    {/* Small leaf/petal shapes */}
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
    {/* Outer ornate border */}
    <rect x="6" y="6" width="148" height="448" rx="4" stroke="#D4AF37" strokeWidth="0.6" opacity="0.3" />
    <rect x="12" y="12" width="136" height="436" rx="3" stroke="#D4AF37" strokeWidth="0.4" opacity="0.2" />
    
    {/* Top arch */}
    <path d="M30 20 Q80 -5 130 20" stroke="#D4AF37" strokeWidth="0.5" opacity="0.25" fill="none"/>
    <path d="M35 28 Q80 5 125 28" stroke="#D4AF37" strokeWidth="0.4" opacity="0.2" fill="none"/>
    
    {/* Central diamond lattice */}
    <path d="M80 60 L120 150 L80 240 L40 150 Z" stroke="#D4AF37" strokeWidth="0.5" opacity="0.15" />
    <path d="M80 90 L105 150 L80 210 L55 150 Z" stroke="#D4AF37" strokeWidth="0.4" opacity="0.12" />
    <circle cx="80" cy="150" r="18" stroke="#D4AF37" strokeWidth="0.4" opacity="0.15" />
    <circle cx="80" cy="150" r="10" stroke="#D4AF37" strokeWidth="0.3" opacity="0.12" />
    
    {/* Bottom ornament */}
    <path d="M40 320 Q80 290 120 320" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" fill="none"/>
    <path d="M50 340 Q80 315 110 340" stroke="#D4AF37" strokeWidth="0.4" opacity="0.15" fill="none"/>
    <path d="M80 300 L100 360 L80 420 L60 360 Z" stroke="#D4AF37" strokeWidth="0.4" opacity="0.12" />
    <circle cx="80" cy="360" r="12" stroke="#D4AF37" strokeWidth="0.3" opacity="0.12" />
    
    {/* Tiny corner dots */}
    <circle cx="20" cy="20" r="1.5" fill="#D4AF37" opacity="0.3" />
    <circle cx="140" cy="20" r="1.5" fill="#D4AF37" opacity="0.3" />
    <circle cx="20" cy="440" r="1.5" fill="#D4AF37" opacity="0.3" />
    <circle cx="140" cy="440" r="1.5" fill="#D4AF37" opacity="0.3" />
  </svg>
);

/* ── Falling Rose Petals ─────────────────────────────────── */
const FallingPetals = () => {
  const petals = useMemo(() =>
    Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${6 + Math.random() * 6}s`,
      size: 8 + Math.random() * 10,
      rotation: Math.random() * 360,
      opacity: 0.15 + Math.random() * 0.25,
      hue: Math.random() > 0.5 ? '#D4AF37' : '#C8828D', // gold or rose-gold
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

/* ── Shimmering Gold Dust ────────────────────────────────── */
const GoldDust = () => {
  const specs = useMemo(() =>
    Array.from({ length: 30 }).map((_, i) => ({
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

  const handleOpen = () => {
    // Any tap immediately jumps to homepage
    if (window.cardTimeout) clearTimeout(window.cardTimeout);
    setCardState('zooming');
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

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
        transition={{ duration: 1 }}
      >
        {/* Ambient radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 600px 400px at 50% 45%, rgba(212,175,55,0.18) 0%, transparent 70%)' }} />

        {/* Falling rose petals (visible when opened) */}
        <AnimatePresence>
          {cardState !== 'closed' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
              <FallingPetals />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── 3D Gatefold Card ───────────────────────────── */}
        <motion.div
          className="relative w-[320px] h-[460px] cursor-pointer"
          animate={{
            scale: cardState === 'zooming' ? 3 : 1,
            opacity: cardState === 'zooming' ? 0 : 1,
          }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={handleOpen}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* ─── INNER CARD (revealed content) ─────────── */}
          <div
            className="absolute inset-0 rounded-md overflow-hidden flex flex-col items-center justify-center"
            style={{
              transform: 'translateZ(-1px)',
              background: 'linear-gradient(170deg, #0f0e0a 0%, #0a0908 30%, #080704 70%, #0d0c08 100%)',
              border: '1px solid rgba(212,175,55,0.25)',
              boxShadow: 'inset 0 0 80px rgba(0,0,0,0.6), inset 0 0 20px rgba(212,175,55,0.04)',
            }}
          >
            {/* Islamic pattern overlay */}
            <div className="absolute inset-0 islamic-pattern-bg pointer-events-none opacity-30" />
            
            {/* Shimmering gold dust */}
            <GoldDust />

            {/* Inner embossed frame */}
            <div className="absolute inset-3 rounded-sm pointer-events-none"
              style={{ border: '1px solid rgba(212,175,55,0.12)' }} />
            <div className="absolute inset-5 rounded-sm pointer-events-none"
              style={{ border: '0.5px solid rgba(212,175,55,0.08)' }} />

            {/* Corner flourishes */}
            <CornerFlourish className="absolute top-1 left-1 pointer-events-none" />
            <CornerFlourish className="absolute top-1 right-1 pointer-events-none" style={{ transform: 'scaleX(-1)' }} />
            <CornerFlourish className="absolute bottom-1 left-1 pointer-events-none" style={{ transform: 'scaleY(-1)' }} />
            <CornerFlourish className="absolute bottom-1 right-1 pointer-events-none" style={{ transform: 'scale(-1, -1)' }} />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-8">
              {/* Crescent ornament */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: cardState !== 'closed' ? 1 : 0, y: cardState !== 'closed' ? 0 : -10 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mb-3"
              >
                <CrescentOrnament />
              </motion.div>

              {/* Bismillah */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: cardState !== 'closed' ? 1 : 0 }}
                transition={{ delay: 0.6, duration: 1.2 }}
                className="arabic-text text-gold/70 text-[1.3rem] mb-6"
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </motion.p>

              {/* Shimmer line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: cardState !== 'closed' ? 1 : 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="gold-shimmer-line-thick w-20 mb-5"
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: cardState !== 'closed' ? 1 : 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="font-serif text-white/50 text-[10px] tracking-[0.35em] uppercase mb-5 text-center"
              >
                You are cordially invited<br />to the nikah ceremony of
              </motion.p>

              {/* Names */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: cardState !== 'closed' ? 1 : 0, y: cardState !== 'closed' ? 0 : 20 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-center mb-5"
              >
                <h1 className="font-script text-[2.8rem] gold-text leading-none">{data.groom.name}</h1>
                <p className="text-gold/40 font-serif text-xs italic my-2.5">&amp;</p>
                <h1 className="font-script text-[2.8rem] gold-text leading-none">{data.bride.name}</h1>
              </motion.div>

              {/* Bottom shimmer */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: cardState !== 'closed' ? 1 : 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="gold-shimmer-line w-14 mb-4"
              />

              {/* Date */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: cardState !== 'closed' ? 1 : 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="font-serif text-white/40 text-[10px] tracking-[0.25em] uppercase"
              >
                {data.nikah.dateGregorian}
              </motion.p>
            </div>
          </div>

          {/* ─── LEFT DOOR ─────────────────────────────── */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full z-20 origin-left"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: cardState !== 'closed' ? -135 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
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
              {/* Embossed inner border */}
              <div className="absolute inset-2 border border-gold/15 rounded-sm" />
              <div className="absolute inset-4 rounded-sm" style={{ border: '0.5px solid rgba(212,175,55,0.08)' }} />
              {/* Vertical gold accent line */}
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
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: cardState !== 'closed' ? 135 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
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
              {/* Vertical gold accent line */}
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
              scale: cardState !== 'closed' ? 1.5 : 1,
              rotate: cardState !== 'closed' ? 15 : 0,
            }}
            transition={{ duration: 0.5 }}
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
            transition={{ delay: cardState === 'opening' ? 1.5 : 0, duration: 0.8 }}
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
