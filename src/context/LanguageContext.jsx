import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { TRANSLATIONS } from '../data/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar')

  const toggleLang = () => setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))

  const t = TRANSLATIONS[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    document.title =
      lang === 'ar' ? `دعوة زفاف ${t.hero.groom} و ${t.hero.bride}` : `${t.hero.groom} & ${t.hero.bride} Wedding Invitation`
  }, [lang, t])

  const value = useMemo(() => ({ lang, dir: t.dir, toggleLang, t }), [lang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}

/** Shorthand for components that only need the translated copy tree */
export function useT() {
  return useLanguage().t
}
