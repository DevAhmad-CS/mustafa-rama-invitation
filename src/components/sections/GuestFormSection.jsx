import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, CheckCircle2, Heart } from 'lucide-react'
import { useT } from '../../context/LanguageContext'
import CelebrationBurst from '../effects/CelebrationBurst'
import FloatingMotif from '../effects/FloatingMotif'
import OrnamentDivider from '../common/OrnamentDivider'
import ScrollReveal from '../common/ScrollReveal'
import SectionMark from '../common/SectionMark'
import ShimmerText from '../common/ShimmerText'

const TAP_TRANSITION = { duration: 0.18, ease: [0.22, 1, 0.36, 1] }
const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY
const POST_URL = ['https://api', 'web3forms', 'com/submit'].join('.')

function buildSuccessMessage(template, { name, groom, bride }) {
  return template.replace('{name}', name).replace('{groom}', groom).replace('{bride}', bride)
}

export default function GuestFormSection() {
  const { rsvp, hero } = useT()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [name, setName] = useState('')
  const [guests, setGuests] = useState(1)
  const [notes, setNotes] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (sending) return

    const guestName = name.trim()

    setSending(true)
    try {
      const formData = new FormData(event.target)
      formData.append('access_key', FORM_KEY)
      formData.set('subject', `تأكيد حضور جديد من ${guestName} — دعوة زفاف ${hero.groom} و ${hero.bride}`)
      formData.set('from_name', `موقع دعوة زفاف ${hero.groom} و ${hero.bride}`)
      formData.set(rsvp.fieldLabels.notes, notes.trim() || '—')

      const response = await globalThis.fetch(POST_URL, { method: 'POST', body: formData })
      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
      }
    } catch {
      setSubmitted(true)
    } finally {
      setSending(false)
    }
  }

  const successMessage = buildSuccessMessage(rsvp.success, {
    name: name.trim(),
    groom: hero.groom,
    bride: hero.bride,
  })

  return (
    <section id="rsvp" className="rsvp-section relative w-full overflow-hidden px-6 pb-16 pt-8">
      <div className="section-bg pointer-events-none absolute inset-0" />
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <FloatingMotif shape="heart" tone="rose" count={10} />
      <FloatingMotif shape="spark" tone="gold" count={4} />

      <div className="relative z-[1] mx-auto flex max-w-[22rem] flex-col items-center gap-8">
        <SectionMark />

        <ScrollReveal className="flex flex-col items-center gap-3 text-center">
          <motion.span
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart size={20} strokeWidth={1.6} className="fill-gold/15 text-gold" />
          </motion.span>
          <ShimmerText as="h2" className="font-display text-[1.875rem] font-bold leading-[1.7] text-purple-deep">
            {rsvp.title}
          </ShimmerText>
          <OrnamentDivider variant="luxury" />
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="w-full">
          <div className="rsvp-card luxury-card relative w-full overflow-hidden rounded-[24px] px-6 py-7">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="relative flex flex-col items-center gap-3 py-8 text-center"
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CelebrationBurst />
                  <motion.span
                    className="rsvp-success-icon relative z-[1] flex h-14 w-14 items-center justify-center rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.15, 1] }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Check size={26} strokeWidth={2.5} />
                  </motion.span>
                  <p className="relative z-[1] font-display text-[1.25rem] font-bold leading-[1.6] text-purple-deep">
                    {successMessage}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 text-start"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <label className="flex flex-col gap-1.5">
                    <span className="font-body text-[0.8125rem] font-medium text-burgundy">{rsvp.name}</span>
                    <input
                      type="text"
                      name={rsvp.fieldLabels.name}
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder={rsvp.namePlaceholder}
                      className="rsvp-input rounded-full px-4 py-2.5 font-body text-[0.875rem] text-burgundy outline-none transition-shadow duration-300 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)]"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="font-body text-[0.8125rem] font-medium text-burgundy">{rsvp.guests}</span>
                    <input
                      type="number"
                      name={rsvp.fieldLabels.guests}
                      min={1}
                      value={guests}
                      onChange={(event) => setGuests(event.target.value)}
                      required
                      className="rsvp-input rounded-full px-4 py-2.5 font-body text-[0.875rem] text-burgundy outline-none transition-shadow duration-300 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)]"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="font-body text-[0.8125rem] font-medium text-burgundy">{rsvp.notes}</span>
                    <textarea
                      name={rsvp.fieldLabels.notes}
                      rows={3}
                      value={notes}
                      onChange={(event) => setNotes(event.target.value)}
                      placeholder={rsvp.notesPlaceholder}
                      className="rsvp-input rounded-2xl px-4 py-2.5 font-body text-[0.875rem] text-burgundy outline-none transition-shadow duration-300 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.2)]"
                    />
                  </label>

                  <motion.button
                    type="submit"
                    disabled={sending}
                    className={`rsvp-submit btn-ornate relative mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-[0.9375rem] font-medium text-ivory ${
                      sending ? 'btn-disabled' : ''
                    }`}
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.02 }}
                    transition={TAP_TRANSITION}
                  >
                    <span className="btn-ornate__gem btn-ornate__gem--start" aria-hidden="true" />
                    <CheckCircle2 size={18} strokeWidth={2} />
                    {sending ? rsvp.sending : rsvp.submit}
                    <span className="btn-ornate__gem btn-ornate__gem--end" aria-hidden="true" />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
