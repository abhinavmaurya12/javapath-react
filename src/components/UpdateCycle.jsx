import React from 'react'
import { Link } from 'react-router-dom'

// The 10-day content refresh cycle. Each day ships a new batch of questions,
// fixes, and features. Day 1 is always today.
const CYCLE_DAYS = [
  { day: 1, label: 'Today', task: 'Fresh CodeArena questions + compiler fixes' },
  { day: 2, label: 'Day 2', task: 'New interview phase + DSA examples' },
  { day: 3, label: 'Day 3', task: 'Frontend chapter updates & voice reader' },
  { day: 4, label: 'Day 4', task: 'Bug fixes & dark/light theme polish' },
  { day: 5, label: 'Day 5', task: 'New practice programs & roadmap step' },
  { day: 6, label: 'Day 6', task: 'Interview Q&A batch + hints' },
  { day: 7, label: 'Day 7', task: 'CodeArena category expansion' },
  { day: 8, label: 'Day 8', task: 'Java chapter deep-dive content' },
  { day: 9, label: 'Day 9', task: 'Gamification badges & XP tweaks' },
  { day: 10, label: 'Day 10', task: 'Major feature release + recap' },
]

export default function UpdateCycle() {
  return (
    <section className="update-cycle">
      <div className="update-cycle-inner">
        <span className="cycle-badge">
          <i className="fas fa-sync-alt"></i> 10-Day Update Cycle
        </span>
        <h2 className="cycle-heading">
          Fresh Content Every <span className="cycle-highlight">10 Days</span>
        </h2>
        <p className="cycle-sub">
          We ship new practice questions, interview batches, bug fixes, and
          features on a rolling 10-day cycle so the platform keeps getting better.
        </p>
        <div className="cycle-timeline">
          {CYCLE_DAYS.map((d, i) => (
            <div key={d.day} className="cycle-day" style={{ '--delay': i }}>
              <div className="day-dot"></div>
              <div className="day-card">
                <span className="day-label">{d.label}</span>
                <span className="day-task">{d.task}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="cycle-cta">
          <Link to="/codearena" className="btn btn-primary">
            <i className="fas fa-trophy"></i> Explore Today's Practice
          </Link>
        </div>
      </div>
    </section>
  )
}