import React, { useState, useEffect } from 'react'

export default function TryItPage() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768)

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div id="page-tryit" style={{ position: 'fixed', inset: 0, background: 'var(--bg)' }}>
      {/* Desktop iframe */}
      {!isMobile && (
        <iframe
          id="tryItFrame"
          src="https://onecompiler.com/java"
          style={{
            width: '100%',
            height: 'calc(100vh + 48px)',
            border: 'none',
            marginTop: '-25px'
          }}
          allow="clipboard-write"
          loading="lazy"
          title="Java Code Compiler"
        />
      )}
      {/* Mobile iframe — separate instance sized for the smaller viewport */}
      {isMobile && (
        <iframe
          id="tryItFrameMobile"
          src="https://onecompiler.com/java"
          style={{
            width: '100%',
            height: 'calc(100vh - 56px)',
            border: 'none',
            marginTop: 0,
            background: 'var(--bg)'
          }}
          allow="clipboard-write"
          loading="lazy"
          title="Java Code Compiler (Mobile)"
        />
      )}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '4px 16px',
          fontSize: '.78rem',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          zIndex: 1001
        }}
      >
        <i className="fas fa-keyboard" style={{ color: 'var(--primary)' }}></i> For run{' '}
        <button className="hint-btn">
          <span>Ctrl</span>+<span>Enter</span>
        </button>
      </div>
    </div>
  )
}