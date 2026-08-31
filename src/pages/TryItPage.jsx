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
    <div id="page-tryit" style={{ position: 'fixed', inset: 0, background: 'var(--bg)', overflow: 'hidden' }}>
      {/* Desktop iframe */}
      {!isMobile && (
        <div style={{ position: 'fixed', top: 64, left: 0, margin: '-38px', right: 0, bottom: 44, overflow: 'auto' }}>
          <iframe
            id="tryItFrame"
            src="https://onecompiler.com/java?embed=true"
            style={{ width: '100%', height: '100%', border: 'none', background: 'var(--bg)' }}
            allow="clipboard-write"
            loading="lazy"
            title="Java Code Compiler"
          />
        </div>
      )}
      {/* Mobile iframe — separate instance sized for the smaller viewport */}
      {isMobile && (
        <div style={{ position: 'fixed', top: 56, left: 0, right: 0,  margin: '-38px',bottom: 44, overflow: 'auto' }}>
          <iframe
            id="tryItFrameMobile"
            src="https://onecompiler.com/java?embed=true"
            style={{ width: '100%', height: '100%', border: 'none', background: 'var(--bg)' }}
            allow="clipboard-write"
            loading="lazy"
            title="Java Code Compiler (Mobile)"
          />
        </div>
      )}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          padding: '30px',
          left: 0,
          width: '100%',
          padding: '6px 16px',
          fontSize: '30px',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'var(--surface)',
          borderTop: '1px solid var(--border)',
          zIndex: 1001,
          height: 44,
          boxSizing: 'border-box'
        }}
      >
        <i className="fas fa-keyboard" style={{ color: 'var(--primary)' }}></i> For run{' '}
        <button className="hint-btn" style={{padding:'10px', fontWeight: 'bold', color: 'darkblue', fontSize:'20px'}}>
          <span>Ctrl</span>+<span>Enter</span>
        </button>
      </div>
    </div>
  )
}