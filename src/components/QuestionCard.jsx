import React, { useState } from 'react'
import CodeHighlight from './CodeHighlight'

export default function QuestionCard({ q, status, onStatusChange, onLeetCode, onStartCoding, onBackToArena, autoHint }) {
  const [hintOpen, setHintOpen] = useState(() => !!autoHint)
  const [solOpen, setSolOpen] = useState(false)

  function toggleStatus() {
    const next = status === 'solved' ? 'none' : status === 'attempted' ? 'solved' : 'attempted'
    onStatusChange(q.id, next)
  }

  const statusLabel = status === 'solved' ? 'Solved' : status === 'attempted' ? 'Attempted' : 'Not Started'
  const statusClass = status === 'solved' ? 'cp-btn-solved' : ''

  const isFrontend = q.category === 'HTML/CSS' || q.category === 'JavaScript' || q.category === 'React'
  const isReact = q.category === 'React'

  return (
    <div className="cp-qcard" id={'q-' + q.id}>
      <div className="cp-qcard-top">
        <div>
          <div className="cp-qcard-title">Problem #{q.id}: {q.title}</div>
          <div className="cp-qcard-meta">
            <span className={'cp-badge ' + q.difficulty.toLowerCase()}>{q.difficulty}</span>
            <span className="cp-cat-badge">{q.category}</span>
            <span className="cp-cat-badge">{q.topic}</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button className={'cp-btn ' + statusClass} onClick={toggleStatus}>
            <i className={'fas ' + (status === 'solved' ? 'fa-check-circle' : status === 'attempted' ? 'fa-pen' : 'fa-circle')}></i>
            {statusLabel}
          </button>
        </div>
      </div>

      <div className="cp-qcard-desc">{q.problem}</div>

      {q.example && q.example.input && q.example.input !== 'See problem' && q.example.output && q.example.output !== 'See problem' && (
        <div className="cp-qcard-io">
          {q.example.input && q.example.input !== 'See problem' && (
            <div className="cp-io-box"><label>Input</label><pre>{q.example.input}</pre></div>
          )}
          {q.example.output && q.example.output !== 'See problem' && (
            <div className="cp-io-box"><label>Output</label><pre>{q.example.output}</pre></div>
          )}
        </div>
      )}

      <div className="cp-qcard-actions">
        <button className="cp-btn" onClick={() => setHintOpen(!hintOpen)}>
          <i className="fas fa-lightbulb"></i> {hintOpen ? 'Hide Hint' : 'Show Hint'}
        </button>
        <button className="cp-btn" onClick={() => setSolOpen(!solOpen)}>
          <i className="fas fa-eye"></i> {solOpen ? 'Hide Solution' : 'Show Solution'}
        </button>
        {q.leetcode && (
          <button className="cp-btn cp-btn-primary" onClick={() => onLeetCode(q.leetcode)}>
            <i className="fas fa-external-link-alt"></i> Solve on LeetCode
          </button>
        )}
        {onStartCoding && (
          <button className="cp-btn cp-btn-primary" onClick={() => onStartCoding(q)}>
            <i className="fas fa-code"></i> Start Coding
          </button>
        )}
        {onBackToArena && (
          <button className="cp-btn" onClick={() => onBackToArena()}>
            <i className="fas fa-arrow-left"></i> Back to CodeArena
          </button>
        )}
      </div>

      {hintOpen && q.hint && (
        <div className="cp-qcard-section">
          <details open>
            <summary><i className="fas fa-lightbulb"></i> Hint</summary>
            <div className="cp-hint-box">{q.hint}</div>
          </details>
        </div>
      )}

      {solOpen && (
        <div className="cp-qcard-section">
          <details open>
            <summary><i className="fas fa-code"></i> Solution</summary>
            <div className="cp-sol-box">
              {q.approach && <p style={{ color: 'var(--text-muted)', fontSize: '.9rem', marginBottom: 8 }}><strong>Approach:</strong> {q.approach}</p>}
              {isReact ? (
                <CodeHighlight code={q.solution} language="JSX" header="Solution.jsx" />
              ) : isFrontend ? (
                <CodeHighlight code={q.solution} language={q.category === 'HTML/CSS' ? 'HTML' : 'JavaScript'} header="Solution" />
              ) : (
                <CodeHighlight code={q.solution} language="Java" header="Solution.java" />
              )}
              {q.time && <p style={{ marginTop: 12, fontSize: '.85rem', color: 'var(--text-muted)' }}><strong>Time:</strong> {q.time} &nbsp; <strong>Space:</strong> {q.space}</p>}
              {q.concepts && (
                <p style={{ marginTop: 8, fontSize: '.82rem', color: 'var(--text-muted)' }}>
                  <strong>Concepts:</strong> {q.concepts.join(', ')}
                </p>
              )}
            </div>
          </details>
        </div>
      )}
    </div>
  )
}