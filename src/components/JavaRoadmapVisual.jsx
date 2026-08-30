import React from 'react'
import { Link } from 'react-router-dom'

const STEPS = [
  { n: 1, title: 'Java Basics', desc: 'Variables, Data Types, Operators', to: '/java' },
  { n: 2, title: 'Flow Control', desc: 'Conditions, Loops, Switch', to: '/java' },
  { n: 3, title: 'OOP Concepts', desc: 'Classes, Inheritance, Polymorphism', to: '/java' },
  { n: 4, title: 'Arrays & Strings', desc: 'Collections, String Handling', to: '/java' },
  { n: 5, title: 'Advanced Java', desc: 'Exceptions, Multithreading, Streams', to: '/java' },
  { n: 6, title: 'DSA', desc: 'Data Structures & Algorithms', to: '/dsa' },
  { n: 7, title: 'Practice', desc: '375+ Coding Problems', to: '/practice' },
  { n: 8, title: 'Projects', desc: 'Build Real Applications', to: '/projects' },
  { n: 9, title: 'Interview Prep', desc: '100+ Questions & Answers', to: '/interview' }
]

export default function JavaRoadmapVisual() {
  return (
    <div className="roadmap-visual" style={{ maxWidth: 600, margin: '0 auto' }}>
      {STEPS.map((s, i) => (
        <div key={i} className="roadmap-step-visual" onClick={() => window.__nav(s.to)}>
          <div className="step-num">{s.n}</div>
          <div className="step-info">
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
          <i className="fas fa-check-circle step-check"></i>
        </div>
      ))}
      <div className="roadmap-connector"></div>
      <div className="roadmap-step-visual step-final">
        <div className="step-num"><i className="fas fa-rocket"></i></div>
        <div className="step-info">
          <h4>Job Ready!</h4>
          <p>Start your Java career</p>
        </div>
      </div>
    </div>
  )
}