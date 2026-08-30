import React, { useEffect } from 'react'
import { useProgressContext } from '../contexts/ProgressContext'

const BADGES = [
  { id: 'java-beginner', icon: 'fas fa-award', title: 'Java Beginner', desc: 'Complete 1 chapter' },
  { id: 'java-explorer', icon: 'fas fa-compass', title: 'Java Explorer', desc: 'Complete 5 chapters' },
  { id: 'java-master', icon: 'fas fa-crown', title: 'Java Master', desc: 'Complete all chapters' },
  { id: 'dsa-starter', icon: 'fas fa-brain', title: 'DSA Starter', desc: 'Complete 1 DSA topic' },
  { id: 'dsa-warrior', icon: 'fas fa-shield-alt', title: 'DSA Warrior', desc: 'Complete 10 DSA topics' },
  { id: 'interview-ready', icon: 'fas fa-handshake', title: 'Interview Ready', desc: 'Complete 20 interview Qs' },
  { id: 'html-beginner', icon: 'fas fa-award', title: 'HTML Beginner', desc: 'Complete 1 HTML chapter' },
  { id: 'html-master', icon: 'fas fa-crown', title: 'HTML Master', desc: 'Complete all HTML chapters' },
  { id: 'css-beginner', icon: 'fas fa-award', title: 'CSS Beginner', desc: 'Complete 1 CSS chapter' },
  { id: 'css-master', icon: 'fas fa-crown', title: 'CSS Master', desc: 'Complete all CSS chapters' },
  { id: 'js-beginner', icon: 'fas fa-award', title: 'JavaScript Beginner', desc: 'Complete 1 JS chapter' },
  { id: 'js-master', icon: 'fas fa-crown', title: 'JavaScript Master', desc: 'Complete all JS chapters' },
  { id: 'react-beginner', icon: 'fas fa-award', title: 'React Beginner', desc: 'Complete 1 React chapter' },
  { id: 'react-master', icon: 'fas fa-crown', title: 'React Master', desc: 'Complete all React chapters' }
]

export default function GamificationDashboard() {
  const { xp, getStreak, getSolved, badges, checkBadges } = useProgressContext()

  useEffect(() => { checkBadges() }, [checkBadges])

  return (
    <div className="gamification-section">
      <div className="gamification-dashboard">
        <div className="gam-card xp-card">
          <div className="gam-icon"><i className="fas fa-star"></i></div>
          <div className="gam-value" id="xp-value">{xp}</div>
          <div className="gam-label">Total XP</div>
        </div>
        <div className="gam-card streak-card">
          <div className="gam-icon"><i className="fas fa-fire"></i></div>
          <div className="gam-value" id="streak-value">{getStreak()}</div>
          <div className="gam-label">Day Streak</div>
        </div>
        <div className="gam-card solved-card">
          <div className="gam-icon"><i className="fas fa-check-circle"></i></div>
          <div className="gam-value" id="solved-value">{getSolved()}</div>
          <div className="gam-label">Problems Solved</div>
        </div>
        <div className="gam-card badge-card">
          <div className="gam-icon"><i className="fas fa-medal"></i></div>
          <div className="gam-value" id="badge-value">{badges.length}</div>
          <div className="gam-label">Badges Earned</div>
        </div>
      </div>
      <div className="badges-grid" id="badges-grid">
        {BADGES.map(b => {
          const unlocked = badges.includes(b.id)
          return (
            <div key={b.id} className={'badge-item ' + (unlocked ? 'unlocked' : 'locked')} data-badge={b.id}>
              <i className={b.icon}></i>
              <span>{b.title}</span>
              <small>{b.desc}</small>
            </div>
          )
        })}
      </div>
    </div>
  )
}