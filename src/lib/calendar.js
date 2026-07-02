/**
 * Cross-platform "Add to Calendar" helper.
 * iOS: downloads a .ics file (Safari opens it straight into the native
 *      "Add Event" sheet — the most reliable path on iPhone).
 * Android / others: opens the Google Calendar "create event" template,
 *      which is handled natively by the Google Calendar app when installed.
 */

function pad(value) {
  return String(value).padStart(2, '0')
}

function toUtcStamp(date) {
  return (
    date.getUTCFullYear().toString() +
    pad(date.getUTCMonth() + 1) +
    pad(date.getUTCDate()) +
    'T' +
    pad(date.getUTCHours()) +
    pad(date.getUTCMinutes()) +
    pad(date.getUTCSeconds()) +
    'Z'
  )
}

function escapeICSText(value = '') {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
}

export function isIOS() {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent || ''
  const isAppleMobile = /iPad|iPhone|iPod/.test(ua)
  const isIPadOS13Plus = ua.includes('Macintosh') && typeof document !== 'undefined' && 'ontouchend' in document
  return isAppleMobile || isIPadOS13Plus
}

function downloadICSFile({ title, description, location, start, end }) {
  const dtStart = toUtcStamp(new Date(start))
  const dtEnd = toUtcStamp(new Date(end))
  const dtStamp = toUtcStamp(new Date())
  const uid = `${Date.now()}-${Math.random().toString(36).slice(2)}@wedding-invitation`

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//AR//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${escapeICSText(title)}`,
    `DESCRIPTION:${escapeICSText(description)}`,
    `LOCATION:${escapeICSText(location)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${title}.ics`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.setTimeout(() => URL.revokeObjectURL(url), 2000)
}

function openGoogleCalendar({ title, description, location, start, end }) {
  const dtStart = toUtcStamp(new Date(start))
  const dtEnd = toUtcStamp(new Date(end))
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${dtStart}/${dtEnd}`,
    details: description,
    location,
  })
  window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, '_blank', 'noopener,noreferrer')
}

/**
 * @param {{ title: string, description: string, location: string, start: string, end: string }} event
 */
export function addToCalendar(event) {
  if (isIOS()) {
    downloadICSFile(event)
  } else {
    openGoogleCalendar(event)
  }
}
