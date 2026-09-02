import React, { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'

// Browsers silently fail or truncate very long utterances, so we split the
// text into chunks and speak them one after another.
const CHUNK_SIZE = 180

// Convert an HTML string into readable plain text for the speech engine.
function stripHtml(html) {
  if (!html) return ''
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<pre[\s\S]*?<\/pre>/gi, ' ') // keep code blocks as plain text below
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '$1')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, String.fromCharCode(39))
    .replace(/&apos;/g, String.fromCharCode(39))
    .replace(/&hellip;/g, '...')
    .replace(/\s+/g, ' ')
    .trim()
}

function chunkText(text) {
  const chunks = []
  let start = 0
  while (start < text.length) {
    let end = start + CHUNK_SIZE
    if (end >= text.length) { chunks.push(text.slice(start)); break }
    const slice = text.slice(start, end)
    const lastPeriod = Math.max(slice.lastIndexOf('. '), slice.lastIndexOf('? '), slice.lastIndexOf('! '))
    end = lastPeriod > 0 ? start + lastPeriod + 1 : end
    chunks.push(text.slice(start, end).trim())
    start = end
  }
  return chunks.filter(c => c.length > 0)
}

// Pick the default voice: prefer Google Hindi, then any Hindi voice, then default.
function findHindiVoice(voices) {
  if (!voices || !voices.length) return ''
  const googleHindi = voices.find(v => /google/i.test(v.name) && /hi-IN|hindi/i.test(v.lang))
  if (googleHindi) return googleHindi.voiceURI
  const anyHindi = voices.find(v => /hi-IN|hindi/i.test(v.lang))
  if (anyHindi) return anyHindi.voiceURI
  return ''
}

export default function VoiceReader({ text, title }) {
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null
  const [playing, setPlaying] = useState(false)
  const [paused, setPaused] = useState(false)
  const [rate, setRate] = useState(0.9)
  const [voices, setVoices] = useState([])
  const [voiceURI, setVoiceURI] = useState('')
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const chunkIndexRef = useRef(0)
  const currentChunkRef = useRef(-1)
  const chunksRef = useRef([])
  const stoppedRef = useRef(false)
  const pausedRef = useRef(false)
  // Pending inter-chunk timer, so pause/restart can cancel it and avoid two
  // speakNext() calls racing each other into duplicate chunks.
  const pendingTimerRef = useRef(null)
  const panelRef = useRef(null)
  // Increments on every start/restart/cancel so stale utterance callbacks
  // (from a cancelled chunk) can't advance the queue out of order.
  const sessionRef = useRef(0)

  useEffect(() => {
    if (!synth) return
    const load = () => {
      try { setVoices(synth.getVoices()) } catch (e) { setVoices([]) }
    }
    load()
    synth.onvoiceschanged = load
    return () => { synth.onvoiceschanged = null }
  }, [synth])

  useEffect(() => {
    if (!voices.length) return
    const pick = findHindiVoice(voices)
    if (pick) setVoiceURI(pick)
  }, [voices]) // eslint-disable-line

  useEffect(() => {
    return () => { if (synth) synth.cancel() }
  }, [text, synth])

  // Close the panel when clicking outside it.
  useEffect(() => {
    if (!open) return
    function onClick(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [open])

  function buildUtterance(t) {
    const u = new window.SpeechSynthesisUtterance(t)
    u.rate = rate
    u.pitch = 1
    u.lang = 'en-US'
    if (voiceURI) {
      const v = voices.find(voice => voice.voiceURI === voiceURI)
      if (v) u.voice = v
    }
    return u
  }

  // Restart the current chunk when rate changes while playing.
  useEffect(() => {
    if (!playing || pausedRef.current) return
    if (!synth) return
    if (pendingTimerRef.current) { clearTimeout(pendingTimerRef.current); pendingTimerRef.current = null }
    sessionRef.current++ // invalidate any in-flight chunk callbacks
    synth.cancel()
    // Rewind to the chunk currently being spoken so it replays with new settings.
    chunkIndexRef.current = Math.max(0, currentChunkRef.current)
    setTimeout(() => speakNext(), 100)
  }, [rate]) // eslint-disable-line

  function speakNext() {
    const mySession = ++sessionRef.current
    if (stoppedRef.current) return
    if (pendingTimerRef.current) { clearTimeout(pendingTimerRef.current); pendingTimerRef.current = null }
    pausedRef.current = false
    setPaused(false)
    const chunks = chunksRef.current
    if (chunkIndexRef.current >= chunks.length) {
      if (mySession !== sessionRef.current) return
      setPlaying(false)
      setPaused(false)
      setPosition(0)
      currentChunkRef.current = -1
      return
    }
    const chunk = chunks[chunkIndexRef.current]
    currentChunkRef.current = chunkIndexRef.current
    chunkIndexRef.current++
    setPosition(chunkIndexRef.current)
    const u = buildUtterance(chunk)
    u.onend = () => {
      if (stoppedRef.current || mySession !== sessionRef.current) return
      pendingTimerRef.current = setTimeout(() => {
        pendingTimerRef.current = null
        speakNext()
      }, 120)
    }
    u.onerror = () => {
      if (stoppedRef.current || mySession !== sessionRef.current) return
      setPlaying(false)
      setPaused(false)
    }
    synth.speak(u)
  }

  function speak() {
    if (!synth || !text) return
    sessionRef.current++
    synth.cancel()
    if (pendingTimerRef.current) { clearTimeout(pendingTimerRef.current); pendingTimerRef.current = null }
    stoppedRef.current = false
    pausedRef.current = false
    const plain = stripHtml(text)
    if (!plain) return
    chunksRef.current = chunkText(plain)
    chunkIndexRef.current = 0
    currentChunkRef.current = -1
    setPosition(0)
    setPlaying(true)
    setPaused(false)
    speakNext()
  }

  function togglePause() {
    if (!synth) return
    if (playing) {
      if (pausedRef.current) {
        // Resume is unreliable (Chrome can leave an utterance stuck paused
        // after resume() with no callback to detect it), so we never rely on
        // it. Cancel and replay the current chunk from its start — this is
        // deterministic and can't hang. If we were paused in the inter-chunk
        // gap (no chunk was speaking), just advance the queue.
        if (pendingTimerRef.current) { clearTimeout(pendingTimerRef.current); pendingTimerRef.current = null }
        const wasSpeaking = synth.speaking
        pausedRef.current = false
        setPaused(false)
        setOpen(false)
        sessionRef.current++
        synth.cancel()
        if (wasSpeaking && currentChunkRef.current >= 0) {
          // Paused mid-chunk: replay it from the start.
          chunkIndexRef.current = currentChunkRef.current
        }
        // else: paused in the gap before any chunk — chunkIndexRef already
        // points at the next chunk, so just speakNext().
        setTimeout(() => speakNext(), 100)
      } else {
        if (pendingTimerRef.current) { clearTimeout(pendingTimerRef.current); pendingTimerRef.current = null }
        synth.pause()
        pausedRef.current = true
        setPaused(true)
      }
    } else {
      speak()
      setOpen(false)
    }
  }

  function stop() {
    if (!synth) return
    if (pendingTimerRef.current) { clearTimeout(pendingTimerRef.current); pendingTimerRef.current = null }
    stoppedRef.current = true
    pausedRef.current = false
    synth.cancel()
    setPlaying(false)
    setPaused(false)
    setPosition(0)
    currentChunkRef.current = -1
  }

  if (!synth || !text) return null

  const plain = stripHtml(text)
  if (!plain) return null

  const total = chunksRef.current.length || 1
  const pct = Math.round((position / total) * 100)
  const label = title ? `Read aloud: ${title}` : 'Read aloud'

  return createPortal(
    <div className="voice-reader" ref={panelRef}>
      <div className="voice-reader__halo" aria-hidden="true"></div>
      <button
        className={'voice-reader__fab ' + (playing ? (paused ? 'voice-reader__fab--paused' : 'voice-reader__fab--playing') : 'voice-reader__fab--idle')}
        onClick={e => { e.stopPropagation(); setOpen(o => !o) }}
        title={playing ? (paused ? 'Resume' : 'Pause') : 'Read aloud'}
        aria-label={label}
        aria-expanded={open}
      >
        <i className={'fas ' + (playing ? (paused ? 'fa-play' : 'fa-pause') : 'fa-volume-high')}></i>
        {playing && <span className="voice-reader__fab-dot"></span>}
      </button>

      {/* Visible label so the read-aloud feature is easy to spot on every chapter. */}
      <div className="voice-reader__label" aria-hidden="true">
        <i className="fas fa-volume-high"></i>
        <span>Voice Reader</span>
        <span className="voice-reader__label-dot"></span>
      </div>

      {open && (
        <div className="voice-reader__panel">
          <div className="voice-reader__panel-head">
            <div className="voice-reader__panel-title">
              <i className="fas fa-volume-high"></i>
              <span>Voice Reader</span>
            </div>
            <span className={'voice-reader__status ' + (playing ? (paused ? 'voice-reader__status--paused' : 'voice-reader__status--playing') : 'voice-reader__status--idle')}>
              {playing ? (paused ? 'Paused' : 'Speaking') : 'Ready'}
            </span>
          </div>

          {title && <div className="voice-reader__panel-sub">{title}</div>}

          <div className="voice-reader__progress-wrap">
            <div className="voice-reader__progress">
              <div className="voice-reader__progress-fill" style={{ width: pct + '%' }}></div>
            </div>
            <div className="voice-reader__progress-label">{position} / {total} <span>·</span> {pct}%</div>
          </div>

          <div className="voice-reader__controls">
            <button className="voice-reader__btn" onClick={togglePause} title={playing ? (paused ? 'Resume' : 'Pause') : 'Read aloud'} aria-label={label}>
              <i className={'fas ' + (playing ? (paused ? 'fa-play' : 'fa-pause') : 'fa-play')}></i>
              <span>{playing ? (paused ? 'Resume' : 'Pause') : 'Read'}</span>
            </button>
            <button className="voice-reader__btn voice-reader__btn--stop" onClick={stop} title="Stop" aria-label="Stop reading" disabled={!playing && position === 0}>
              <i className="fas fa-stop"></i>
              <span>Stop</span>
            </button>
          </div>

          <div className="voice-reader__row">
            <div className="voice-reader__group">
              <label className="voice-reader__group-label">Speed <span className="voice-reader__group-val">{rate.toFixed(1)}x</span></label>
              <input type="range" min="0.5" max="2" step="0.1" value={rate} onChange={e => setRate(parseFloat(e.target.value))} className="voice-reader__range" />
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  )
}