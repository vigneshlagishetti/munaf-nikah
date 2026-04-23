import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CardOpening({ data, onOpen }) {
  const [cardState, setCardState] = useState('closed'); 
  // states: 'closed', 'opening', 'zooming'

  const handleOpen = () => {
    if (cardState === 'closed') {
      setCardState('opening');
      
      // Show card for 10 seconds, then jump to homepage with zoom animation
      window.cardTimeout = setTimeout(() => {
        setCardState('zooming');
        setTimeout(() => {
          onOpen();
        }, 1200); // 1.2s matches the zoom animation duration
      }, 10000);
    } else if (cardState === 'opening') {
      // Allow user to tap again to skip the 10-second wait
      if (window.cardTimeout) clearTimeout(window.cardTimeout);
      setCardState('zooming');
      setTimeout(() => {
        onOpen();
      }, 1200);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="gatefold-scene"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, #1a1508 0%, #0a0a08 40%, #050505 100%)',
          perspective: '1200px'
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Soft radial light behind card */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 50%)' }} />

        {/* 3D Gatefold Container */}
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
          {/* --- INNER CARD --- */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light via-charcoal to-charcoal-light rounded-md border border-gold/30 shadow-2xl overflow-hidden flex flex-col items-center px-6 py-10" style={{ transform: 'translateZ(-1px)' }}>
            <div className="absolute inset-0 islamic-pattern-bg pointer-events-none opacity-40" />
            
            <p className="arabic-text text-gold/70 text-[1.4rem] mt-8 mb-10 relative z-10">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            
            <p className="font-serif text-ivory/50 text-[11px] tracking-[0.3em] uppercase mb-8 relative z-10 text-center">
              You are cordially invited<br/>to the nikah of
            </p>

            <div className="text-center relative z-10 mb-10">
              <h1 className="font-script text-[3rem] gold-text leading-none">{data.groom.name}</h1>
              <p className="text-gold/50 font-serif text-sm italic my-3">&</p>
              <h1 className="font-script text-[3rem] gold-text leading-none">{data.bride.name}</h1>
            </div>

            <div className="gold-shimmer-line w-16 mx-auto mb-8 relative z-10" />

            <p className="font-serif text-ivory/40 text-[11px] tracking-[0.2em] uppercase relative z-10">
              {data.nikah.dateGregorian}
            </p>
          </div>

          {/* --- LEFT DOOR --- */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full z-20 origin-left"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: cardState !== 'closed' ? -135 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Front of Left Door */}
            <div className="absolute inset-0 bg-[#161616] border-r border-gold/40 rounded-l-md shadow-[10px_0_20px_rgba(0,0,0,0.5)] overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
              <div className="absolute inset-0 islamic-pattern-bg opacity-20" />
              <div className="absolute inset-2 border border-gold/20 rounded-sm" />
            </div>
            {/* Back of Left Door */}
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-r-md" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}></div>
          </motion.div>

          {/* --- RIGHT DOOR --- */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full z-20 origin-right"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: cardState !== 'closed' ? 135 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Front of Right Door */}
            <div className="absolute inset-0 bg-[#161616] border-l border-gold/40 rounded-r-md shadow-[-10px_0_20px_rgba(0,0,0,0.5)] overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
              <div className="absolute inset-0 islamic-pattern-bg opacity-20" />
              <div className="absolute inset-2 border border-gold/20 rounded-sm" />
            </div>
            {/* Back of Right Door */}
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-l-md" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}></div>
          </motion.div>

          {/* --- WAX SEAL (Splits or fades when opened) --- */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 wax-seal shadow-2xl"
            animate={{ 
              opacity: cardState !== 'closed' ? 0 : 1,
              scale: cardState !== 'closed' ? 1.5 : 1
            }}
            transition={{ duration: 0.4 }}
          >
            M&A
          </motion.div>

          {/* --- TAP HINT --- */}
          <motion.div 
            animate={{ opacity: cardState === 'closed' ? 1 : 0 }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-16 flex flex-col items-center gap-2 pointer-events-none"
          >
            <motion.div 
              animate={{ y: [0, 5, 0] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gold/50"
            >
              ↓
            </motion.div>
            <span className="text-gold/40 text-[10px] tracking-[0.3em] uppercase font-serif">
              Tap to Open
            </span>
          </motion.div>

          {/* --- SKIP HINT --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: cardState === 'opening' ? 1 : 0 }}
            transition={{ delay: cardState === 'opening' ? 2 : 0, duration: 1 }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-16 flex flex-col items-center gap-2 pointer-events-none"
          >
            <span className="text-gold/40 text-[10px] tracking-[0.3em] uppercase font-serif">
              Tap to Skip
            </span>
          </motion.div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
