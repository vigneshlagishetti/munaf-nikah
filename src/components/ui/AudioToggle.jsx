import { Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function AudioToggle({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioUrl) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioUrl]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  if (!audioUrl) return null;

  return (
    <button
      onClick={toggleAudio}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-card-gold flex items-center justify-center text-gold hover:scale-110 transition-transform duration-300 cursor-pointer"
      aria-label={isPlaying ? 'Mute audio' : 'Play audio'}
    >
      {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </button>
  );
}
