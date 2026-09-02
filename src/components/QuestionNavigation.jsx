import React from 'react'
import { Link } from 'react-router-dom'

export default function QuestionNavigation({ current, total, onPrev, onNext }) {
  const hasPrev = current > 1
  const hasNext = current < total
  return (
    <div className="cp-nav">
      <button className="cp-nav-btn" disabled={!hasPrev} onClick={onPrev}>
        <i className="fas fa-arrow-left"></i> Previous Question
      </button>
      <span style={{ color: 'var(--text-muted)', fontSize: '.9rem', fontWeight: 600 }}>
        Question {current} of {total}
      </span>
      <button className="cp-nav-btn" disabled={!hasNext} onClick={onNext}>
        Next Question <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  )
}