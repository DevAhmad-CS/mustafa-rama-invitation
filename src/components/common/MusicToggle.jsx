import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import { useMusic } from '../../context/MusicContext'

const TAP_TRANSITION = { duration: 0.15, ease: [0.22, 1, 0.36, 1] }

export default function MusicToggle() {
  const { muted, isPlaying, toggleMute } = useMusic()

  return (
    <motion.button
      type="button"
      onClick={toggleMute}
      className="lang-toggle relative z-[60] inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-body text-[0.75rem] font-medium text-burgundy"
      whileTap={{ scale: 0.95 }}
      transition={TAP_TRANSITION}
      aria-label={muted ? 'تشغيل الموسيقى' : 'كتم الصوت'}
    >
      {muted ? (
        <VolumeX size={14} strokeWidth={2} className="text-gold" />
      ) : (
        <motion.span
          animate={isPlaying ? { scale: [1, 1.12, 1] } : { scale: 1 }}
          transition={{ duration: 1.8, repeat: isPlaying ? Infinity : 0, ease: 'easeInOut' }}
        >
          <Volume2 size={14} strokeWidth={2} className="text-gold" />
        </motion.span>
      )}
    </motion.button>
  )
}
