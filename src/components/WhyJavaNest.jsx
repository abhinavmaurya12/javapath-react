import React from 'react'
import { Link } from 'react-router-dom'

const CARDS = [
  { icon: 'fas fa-seedling', color: 'orange', title: 'Beginner Friendly', desc: 'Start from absolute basics. No prior programming experience required.' },
  { icon: 'fas fa-book-open', color: 'blue', title: '15 Complete Chapters', desc: 'From introduction to Java Streams. Organized in a logical learning path.' },
  { icon: 'fas fa-code', color: 'green', title: 'Real Code Examples', desc: 'Every concept comes with practical, runnable code examples.' },
  { icon: 'fas fa-project-diagram', color: 'red', title: '30+ DSA Topics', desc: 'Complete DSA course with Java implementations and practice problems.' },
  { icon: 'fas fa-puzzle-piece', color: 'purple', title: '375+ Practice Programs', desc: 'Hands-on coding practice across all Java topics.' },
  { icon: 'fas fa-gift', color: 'teal', title: 'Free Forever', desc: 'All notes are completely free. Learn at your own pace.' }
]

export default function WhyJavaNest() {
  return (
    <div className="cards-grid">
      {CARDS.map((c, i) => (
        <div key={i} className="card">
          <div className={'card-icon ' + c.color}><i className={c.icon}></i></div>
          <h3>{c.title}</h3>
          <p>{c.desc}</p>
        </div>
      ))}
    </div>
  )
}