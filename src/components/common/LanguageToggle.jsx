import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const TAP_TRANSITION = { duration: 0.15, ease: [0.22, 1, 0.36, 1] }

export default function LanguageToggle() {
  const { t, toggleLang } = useLanguage()

  return (
    <motion.button
      type="button"
      onClick={toggleLang}
      className="lang-toggle inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-body text-[0.75rem] font-medium text-burgundy"
      whileTap={{ scale: 0.95 }}
      transition={TAP_TRANSITION}
      aria-label="Switch language"
    >
      <Languages size={13} strokeWidth={2} className="text-gold" />
      {t.toggleLabel}
    </motion.button>
  )
}
