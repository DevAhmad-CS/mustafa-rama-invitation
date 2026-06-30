import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const MusicContext = createContext(null)

const MUSIC_SRC = '/assets/audio/wedding-music.mp3'
const START_AT = 2

export function MusicProvider({ children }) {
  const audioRef = useRef(null)
  const unlockedRef = useRef(false)
  const mutedRef = useRef(false)
  const [muted, setMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC)
    audio.loop = true
    audio.preload = 'auto'
    audio.volume = 0.55
    audioRef.current = audio

    const markPlaying = () => setIsPlaying(true)
    const markPaused = () => setIsPlaying(false)
    audio.addEventListener('playing', markPlaying)
    audio.addEventListener('pause', markPaused)

    return () => {
      audio.removeEventListener('playing', markPlaying)
      audio.removeEventListener('pause', markPaused)
      audio.pause()
    }
  }, [])

  const attemptPlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    unlockedRef.current = true
    audio.currentTime = START_AT
    audio.muted = mutedRef.current
    audio.play().catch(() => {})
  }, [])

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev
      mutedRef.current = next
      const audio = audioRef.current
      if (audio) {
        unlockedRef.current = true
        audio.muted = next
        if (!next) {
          if (audio.currentTime < START_AT) audio.currentTime = START_AT
          audio.play().catch(() => {})
        }
      }
      return next
    })
  }, [])

  const value = { muted, isPlaying, toggleMute, attemptPlay }

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
}

export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) {
    throw new Error('useMusic must be used within a MusicProvider')
  }
  return ctx
}
