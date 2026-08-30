import React from 'react'
import { Link } from 'react-router-dom'

const PRACTICE_CARDS = [
  { icon: 'fas fa-th', title: 'Pattern Programs', desc: 'Star patterns, number patterns, Floyd\'s triangle, butterfly pattern, and more.', action: 'Pattern Programs section coming soon!' },
  { icon: 'fas fa-layer-group', title: 'Array Problems', desc: 'Find min/max, sort arrays, rotate array, merge arrays, find duplicates.', action: 'Array Problems section coming soon!' },
  { icon: 'fas fa-font', title: 'String Problems', desc: 'Reverse strings, palindrome check, anagram, substring search.', action: 'String Problems section coming soon!' },
  { icon: 'fas fa-question-circle', title: 'Java Quiz', desc: 'Test your knowledge with multiple choice questions from all chapters.', action: 'Quiz section coming soon!' },
  { icon: 'fas fa-terminal', title: 'Online Code Editor', desc: 'Write and run Java code directly in your browser.', action: 'Code Editor coming soon!' },
  { icon: 'fas fa-bug', title: 'Debugging Exercises', desc: 'Find and fix bugs in pre-written Java code.', action: 'Debugging section coming soon!' }
]

export default function PracticeLandingPage() {
  return (
    <div className="section">
      <div className="section-title">
        <h2><i className="fas fa-laptop-code" style={{ color: 'var(--primary)' }}></i> Practice Java</h2>
        <p>Sharpen your skills with hands-on exercises</p>
      </div>
      <div className="practice-grid">
        {PRACTICE_CARDS.map((c, i) => (
          <div key={i} className="practice-card" onClick={() => alert(c.action)}>
            <i className={c.icon}></i>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <Link to="/practice" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 'var(--radius)', background: 'var(--primary)', color: '#fff', textDecoration: 'none' }}>
          <i className="fas fa-code"></i> Browse 375+ Practice Programs
        </Link>
      </div>
    </div>
  )
}