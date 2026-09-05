import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'

const TOTAL = 160

// Vite serves the app under a base path (see vite.config.js), so images must be
// resolved relative to that base instead of the domain root, otherwise the
// browser requests /ebook/p001.jpg from the site root and gets a 404.
const BASE = import.meta.env.BASE_URL || '/'

function pageSrc(n) {
  return `${BASE}ebook/p${String(n).padStart(3, '0')}.jpg`
}

// Page groupings (like a learn-section sidebar). Each page is a handwritten
// Java notebook page; group by 20s so the sidebar stays manageable.
const SECTIONS = [
  { title: 'Pages 1 – 20', range: [1, 20] },
  { title: 'Pages 21 – 40', range: [21, 40] },
  { title: 'Pages 41 – 60', range: [41, 60] },
  { title: 'Pages 61 – 80', range: [61, 80] },
  { title: 'Pages 81 – 100', range: [81, 100] },
  { title: 'Pages 101 – 120', range: [101, 120] },
  { title: 'Pages 121 – 140', range: [121, 140] },
  { title: 'Pages 141 – 160', range: [141, 160] }
]

export default function EBookPage() {
  const [page, setPage] = useState(1)
  const [zoom, setZoom] = useState(0.85)
  const [input, setInput] = useState('1')
  const [showLevelUp, setShowLevelUp] = useState(false)
  const [note, setNote] = useState('')
  const [search, setSearch] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [ready, setReady] = useState(false)
  const scrollRef = useRef(null)
  const pageRefs = useRef([])
  // While true, the scroll-sync handler is ignored so a programmatic scroll
  // (from clicking a sidebar page) isn't "corrected" back mid-animation.
  const ignoring = useRef(false)
  const ignoreTimer = useRef(null)

  // Preload every page image so the layout offsets are correct before the
  // user clicks a sidebar entry. Without this, lazy-loaded pages past ~100
  // collapse to height 0 and scroll-to-page lands on the wrong page.
  useEffect(() => {
    let cancelled = false
    let loaded = 0
    for (let n = 1; n <= TOTAL; n++) {
      const img = new Image()
      img.src = pageSrc(n)
      img.onload = () => { if (++loaded === TOTAL && !cancelled) setReady(true) }
      img.onerror = () => { if (++loaded === TOTAL && !cancelled) setReady(true) }
    }
    return () => { cancelled = true }
  }, [])

  // Persist ApnaNote in localStorage
  useEffect(() => {
    try { setNote(localStorage.getItem('apnaNote') || '') } catch {}
  }, [])

  useEffect(() => {
    try { localStorage.setItem('apnaNote', note) } catch {}
  }, [note])

  const go = useCallback((n) => {
    if (n < 1 || n > TOTAL) return
    setPage(n)
    setInput(String(n))
    const doScroll = () => {
      const el = pageRefs.current[n - 1]
      if (el && scrollRef.current) {
        ignoring.current = true
        if (ignoreTimer.current) clearTimeout(ignoreTimer.current)
        ignoreTimer.current = setTimeout(() => { ignoring.current = false }, 1500)
        const top = el.getBoundingClientRect().top - scrollRef.current.getBoundingClientRect().top + scrollRef.current.scrollTop
        scrollRef.current.scrollTo({ top, behavior: 'smooth' })
      }
    }
    // Wait for lazy images to load so offsets are correct, then scroll.
    if (ready) doScroll()
    else {
      let tries = 0
      const t = setInterval(() => {
        if (ready || ++tries > 40) { clearInterval(t); doScroll() }
      }, 50)
    }
    setSidebarOpen(false)
  }, [ready])

  const goPrev = () => go(page - 1)
  const goNext = () => go(page + 1)

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = parseInt(input, 10)
    if (isNaN(v) || v < 1 || v > TOTAL) { setInput(String(page)); return }
    go(v)
  }

  const zoomIn = () => setZoom(z => Math.min(3, z + 0.25))
  const zoomOut = () => setZoom(z => Math.max(0.5, z - 0.25))
  const resetZoom = () => setZoom(1)

  // Keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.key === 'ArrowRight' || e.key === 'PageDown') goNext()
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') goPrev()
      if (e.key === 'Home') go(1)
      if (e.key === 'End') go(TOTAL)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goPrev, goNext])

  // Track which page is currently visible (scroll + intersection fallback)
  useEffect(() => {
    const viewer = scrollRef.current
    if (!viewer) return
    function updateActive() {
      if (ignoring.current) return
      const vtop = viewer.scrollTop
      let best = 1, bestDist = Infinity
      pageRefs.current.forEach((el, i) => {
        if (!el) return
        const d = Math.abs(el.offsetTop - vtop)
        if (d < bestDist) { bestDist = d; best = i + 1 }
      })
      if (best !== page) { setPage(best); setInput(String(best)) }
    }
    viewer.addEventListener('scroll', updateActive, { passive: true })
    return () => viewer.removeEventListener('scroll', updateActive)
  }, [page])

  const progress = Math.round((page / TOTAL) * 100)
  const q = search.trim().toLowerCase()
  const visiblePages = q
    ? Array.from({ length: TOTAL }, (_, i) => i + 1).filter(n => String(n).includes(q))
    : null

  return (
    <div className="ebook-layout">
      {/* Sidebar */}
      <aside className={'ebook-sidebar' + (sidebarOpen ? ' open' : '')} id="ebookSidebar">
        <div className="search-sidebar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search page number..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="sidebar-search-input"
            id="ebookSearchInput"
          />
        </div>
        <div className="ebook-sidebar-body">
          {visiblePages ? (
            <div className="sidebar-section">
              <div className="sidebar-section-title">{visiblePages.length} match{visiblePages.length === 1 ? '' : 's'}</div>
              {visiblePages.map(n => (
                <div
                  key={n}
                  className={'sidebar-item' + (page === n ? ' active' : '')}
                  onClick={() => go(n)}
                >
                  <i className="fas fa-file-alt"></i> Page {n}
                </div>
              ))}
            </div>
          ) : (
            SECTIONS.map(sec => (
              <div className="sidebar-section" key={sec.title}>
                <div className="sidebar-section-title">{sec.title}</div>
                {Array.from({ length: sec.range[1] - sec.range[0] + 1 }, (_, i) => sec.range[0] + i).map(n => (
                  <div
                    key={n}
                    className={'sidebar-item' + (page === n ? ' active' : '')}
                    onClick={() => go(n)}
                  >
                    <i className="fas fa-file-alt"></i> Page {n}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </aside>
      <div
        id="ebookSidebarBackdrop"
        className={'sidebar-backdrop' + (sidebarOpen ? ' open' : '')}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Main */}
      <main className="ebook-main" id="ebookMain">
        <button className="sidebar-toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <i className="fas fa-bars"></i> Pages
        </button>

        <div className="ebook-toolbar">
          <div className="ebook-title">
            <i className="fas fa-book"></i> Apna College E-Book
            <span className="ebook-badge">Handwritten Java Notes</span>
          </div>
          <div className="ebook-tools">
            <button className="eb-tool-btn" onClick={zoomOut} title="Zoom out"><i className="fas fa-search-minus"></i></button>
            <span className="eb-zoom-label">{Math.round(zoom * 100)}%</span>
            <button className="eb-tool-btn" onClick={zoomIn} title="Zoom in"><i className="fas fa-search-plus"></i></button>
            <button className="eb-tool-btn" onClick={resetZoom} title="Reset zoom"><i className="fas fa-expand"></i></button>
            <button className="eb-tool-btn" onClick={() => setShowLevelUp(!showLevelUp)} title="LevelUp / ApnaNote">
              <i className="fas fa-level-up-alt"></i> LevelUp
            </button>
          </div>
        </div>

        <div className="ebook-progress">
          <span>Page {page} of {TOTAL}</span>
          <div className="ebook-progress-bar"><div className="ebook-progress-fill" style={{ width: progress + '%' }}></div></div>
          <span>{progress}% read</span>
        </div>

        <div className="ebook-viewer" ref={scrollRef}>
          <div className="ebook-pdf-stack">
            {Array.from({ length: TOTAL }, (_, i) => i + 1).map((n) => (
              <section
                key={n}
                ref={el => (pageRefs.current[n - 1] = el)}
                data-page={n}
                className="ebook-pdf-page"
                id={`ebook-page-${n}`}
              >
                <img
                  src={pageSrc(n)}
                  alt={`E-book page ${n}`}
                  className="ebook-pdf-img"
                  style={{ width: `${zoom * 100}%` }}
                  loading="eager"
                />
                <div className="ebook-pdf-page-num">Page {n}</div>
              </section>
            ))}
          </div>
        </div>

      </main>

      {/* LevelUp / ApnaNote panel */}
      {showLevelUp && (
        <div className="ebook-levelup-panel">
          <div className="ebook-levelup-card">
            <div className="ebook-levelup-head">
              <div>
                <span className="ebook-levelup-eyebrow">LevelUp Section</span>
                <h3>ApnaNote</h3>
              </div>
              <button className="eb-tool-btn" onClick={() => setShowLevelUp(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <p className="ebook-levelup-desc">
              Jot down your own notes while reading the handwritten Java notebook.
              Your notes are saved locally on this device.
            </p>
            <textarea
              className="ebook-notearea"
              value={note}
              onChange={e => setNote(e.target.value)}
              placeholder="Write your notes here...&#10;&#10;Example:&#10;- switch case is used for multiple conditions&#10;- Scanner is used for user input"
              spellCheck={false}
            />
            <div className="ebook-levelup-actions">
              <button className="eb-go-btn" onClick={() => setNote('')}>
                <i className="fas fa-trash"></i> Clear Notes
              </button>
              <span className="ebook-note-hint"><i className="fas fa-cloud-download-alt"></i> Auto-saved locally</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}