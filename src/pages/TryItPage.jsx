import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import QuestionCard from '../components/QuestionCard'

export default function TryItPage() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768)
  const location = useLocation()
  const navigate = useNavigate()
  const { codingCompleted, markCodingComplete } = useProgressContext()
  const question = location.state?.question

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  if (!question) {
    return (
      <div id="page-tryit" style={{ position: 'fixed', inset: 0, background: 'var(--bg)', overflow: 'hidden' }}>
        {!isMobile && (
          <div style={{ position: 'fixed', top: 64, left: 0, right: 0, padding: '10px 16px', background: 'var(--card)', borderBottom: '1px solid var(--border)', zIndex: 1000, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
<span style={{ color: 'var(--text-muted)', fontSize: '.85rem' }}>No question selected. Choose a problem from Coding Practice to start coding here.</span>
              <Link to="/coding-practice" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', fontSize: '.85rem', marginLeft: 'auto' }}>
                <i className="fas fa-trophy"></i> Coding Practice
              </Link>
          </div>
        )}
        <div style={{ position: 'fixed', top: isMobile ? 56 : 108, left: 0, right: 0, bottom: 44, overflow: 'auto' }}>
          <iframe
            id="tryItFrame"
            src="https://onecompiler.com/embed/java?codeChangeEvent=true"
            style={{ width: '100%', height: '100%', border: 'none', background: 'var(--bg)' }}
            allow="clipboard-write"
            loading="lazy"
            title="Java Code Compiler"
          />
        </div>
        <div
          style={{
            position: 'fixed',
            bottom: 0,
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
          <button className="hint-btn" style={{padding:'10px', fontWeight: 'bold', color: 'var(--primary)', fontSize:'20px'}}>
            <span>Ctrl</span>+<span>Enter</span>
          </button>
        </div>
      </div>
    )
  }

  const status = (codingCompleted.solved || []).includes(question.id)
    ? 'solved'
    : (codingCompleted.attempted || []).includes(question.id)
      ? 'attempted'
      : 'none'

  function handleStatusChange(qId, next) {
    markCodingComplete(qId, next)
  }

  function handleLeetCode(url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  function handleStartCoding() {
    navigate('/tryit', { state: { question } })
  }

  function handleBackToArena() {
    navigate('/coding-practice')
  }

  // Desktop: two-column layout — card left, compiler right
  if (!isMobile) {
    return (
      <div id="page-tryit" style={{ position: 'fixed', inset: 0, background: 'var(--bg)', overflow: 'hidden', display: 'flex' }}>
        {/* Left: question card */}
        <div style={{
          width: '38%',
          minWidth: 280,
          maxWidth: 440,
          background: 'var(--card)',
          borderRight: '1px solid var(--border)',
          overflowY: 'auto',
          height: '100%',
          paddingTop: 64,
          paddingBottom: 44
        }}>
          <div style={{ padding: '0 12px 12px' }}>
<QuestionCard
            q={question}
            status={status}
            onStatusChange={handleStatusChange}
            onLeetCode={handleLeetCode}
            onStartCoding={handleStartCoding}
            onBackToArena={handleBackToArena}
            autoHint
          />
          </div>
        </div>

        {/* Right: compiler */}
        <div style={{ flex: 1, height: '100%', overflow: 'hidden', background: 'var(--bg)', paddingTop: 64, paddingBottom: 44 }}>
          <iframe
            id="tryItFrame"
            src="https://onecompiler.com/embed/java?codeChangeEvent=true"
            style={{ width: '100%', height: '100%', border: 'none', background: 'var(--bg)' }}
            allow="clipboard-write"
            loading="lazy"
            title="Java Code Compiler"
          />
        </div>

        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
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
          <button className="hint-btn" style={{padding:'10px', fontWeight: 'bold', color: 'var(--primary)', fontSize:'20px'}}>
            <span>Ctrl</span>+<span>Enter</span>
          </button>
        </div>
      </div>
    )
  }

  // Mobile: stacked — card on top, compiler below
  return (
    <div id="page-tryit" style={{ position: 'fixed', inset: 0, background: 'var(--bg)', overflow: 'hidden' }}>
      <div style={{
        position: 'fixed',
        top: 56,
        left: 0,
        right: 0,
        background: 'var(--bg)',
        zIndex: 1000,
        overflowY: 'auto',
        maxHeight: '55vh'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '12px 16px 16px' }}>
<QuestionCard
              q={question}
              status={status}
              onStatusChange={handleStatusChange}
              onLeetCode={handleLeetCode}
              onStartCoding={handleStartCoding}
              onBackToArena={handleBackToArena}
              autoHint
            />
        </div>
      </div>

      <div style={{ position: 'fixed', top: '55vh', left: 0, right: 0, bottom: 44, overflow: 'auto' }}>
        <iframe
          id="tryItFrameMobile"
          src="https://onecompiler.com/embed/java?codeChangeEvent=true"
          style={{ width: '100%', height: '100%', border: 'none', background: 'var(--bg)' }}
          allow="clipboard-write"
          loading="lazy"
          title="Java Code Compiler (Mobile)"
        />
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: 0,
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
        <button className="hint-btn" style={{padding:'10px', fontWeight: 'bold', color: 'var(--primary)', fontSize:'20px'}}>
          <span>Ctrl</span>+<span>Enter</span>
        </button>
      </div>
    </div>
  )
}