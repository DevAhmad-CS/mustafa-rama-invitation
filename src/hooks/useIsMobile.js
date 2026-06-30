import { useEffect, useState } from 'react'
import { MOBILE_MAX_WIDTH } from '../data/introAssets'

export default function useIsMobile() {
  const query = `(max-width: ${MOBILE_MAX_WIDTH}px)`

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setIsMobile(media.matches)

    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [query])

  return isMobile
}
