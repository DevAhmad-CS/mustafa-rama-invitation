import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'

const MusicContext = createContext(null)

const MUSIC_SRC = `${import.meta.env.BASE_URL}assets/audio/wedding-music.mp3`
const START_AT = 2

function trySeek(audio) {
  try {
    if (Number.isFinite(audio.duration) && audio.duration > START_AT) {
      audio.currentTime = START_AT
    }
  } catch {
    /* iOS may reject seeking before enough data is buffered */
  }
}

export function MusicProvider({ children }) {
  const audioRef = useRef(null)
  const mutedRef = useRef(false)
  const startedRef = useRef(false)
  const [muted, setMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.55
    audio.load()

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

  /**
   * Must be called synchronously, directly inside a tap/click/key handler —
   * NEVER after an `await` — otherwise mobile browsers drop the "user
   * gesture" association and silently block playback.
   */
  const attemptPlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio || mutedRef.current) return

    if (!startedRef.current) {
      startedRef.current = true
      trySeek(audio)
      audio.addEventListener('loadedmetadata', () => trySeek(audio), { once: true })
    }

    const playPromise = audio.play()
    playPromise?.catch(() => {
      // Audible playback was blocked — fall back to a muted stream so timing
      // stays correct, and flip the UI to "muted" so the toggle invites a tap.
      audio.muted = true
      audio.play().catch(() => {})
      mutedRef.current = true
      setMuted(true)
    })
  }, [])

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev
      mutedRef.current = next
      const audio = audioRef.current
      if (!audio) return next

      audio.muted = next

      if (!next) {
        if (!startedRef.current) {
          startedRef.current = true
          trySeek(audio)
          audio.addEventListener('loadedmetadata', () => trySeek(audio), { once: true })
        }
        audio.play().catch(() => {})
      }

      return next
    })
  }, [])

  const value = { muted, isPlaying, toggleMute, attemptPlay }

  return (
    <MusicContext.Provider value={value}>
      <audio
        ref={audioRef}
        src={MUSIC_SRC}
        loop
        preload="auto"
        playsInline
        className="pointer-events-none fixed opacity-0"
        aria-hidden="true"
        tabIndex={-1}
      />
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const ctx = useContext(MusicContext)
  if (!ctx) {
    throw new Error('useMusic must be used within a MusicProvider')
  }
  return ctx
}
