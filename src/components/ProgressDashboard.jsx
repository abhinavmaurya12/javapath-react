import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import { TRACK_TOTALS } from '../hooks/useProgress'
import { dailyChallenges } from '../data'

export default function ProgressDashboard() {
  const {
    javaCompleted, dsaCompleted, frontendCompleted, lastLesson,
    getStreak, updateStreak, checkBadges
  } = useProgressContext()
  const navigate = useNavigate()

  useEffect(() => { updateStreak() }, [updateStreak])

  function pct(arr, total) {
    return Math.round((arr.length / total) * 100)
  }

  const tracks = [
    { key: 'java', icon: 'fas fa-java', color: 'var(--primary)', total: TRACK_TOTALS.java, completed: javaCompleted, label: 'Java Progress' },
    { key: 'dsa', icon: 'fas fa-project-diagram', color: '#27ae60', total: TRACK_TOTALS.dsa, completed: dsaCompleted, label: 'DSA Progress' },
    { key: 'html', icon: 'fa-brands fa-html5', color: '#e34f26', total: TRACK_TOTALS.html, completed: frontendCompleted.html, label: 'HTML Progress' },
    { key: 'css', icon: 'fa-brands fa-css3-alt', color: '#1572b6', total: TRACK_TOTALS.css, completed: frontendCompleted.css, label: 'CSS Progress' },
    { key: 'javascript', icon: 'fab fa-js', color: '#f7df1e', total: TRACK_TOTALS.javascript, completed: frontendCompleted.javascript, label: 'JavaScript Progress' },
    { key: 'react', icon: 'fa-brands fa-react', color: '#61dafb', total: TRACK_TOTALS.react, completed: frontendCompleted.react, label: 'React Progress' }
  ]

  function resume() {
    if (!lastLesson) return
    const idx = lastLesson.idx
    if (typeof idx === 'number') {
      navigate('/java', { state: { lesson: idx } })
    } else if (typeof idx === 'string' && idx.startsWith('dsa-')) {
      navigate('/dsa', { state: { topic: idx.replace('dsa-', '') } })
    } else if (typeof idx === 'string' && idx.startsWith('frontend-')) {
      const parts = idx.split('-')
      navigate('/frontend/' + parts[1], { state: { chapter: parseInt(parts[2]) } })
    }
  }

  return (
    <div className="progress-dashboard">
      {tracks.map(t => {
        const p = pct(t.completed, t.total)
        return (
          <div key={t.key} className="progress-card">
            <div className="progress-card-header">
              <i className={t.icon} style={{ color: t.color }}></i>
              <h3>{t.label}</h3>
              <span className="progress-pct">{p}%</span>
            </div>
            <div className="progress-bar">
              <div className={'progress-fill ' + t.key} style={{ width: p + '%' }}></div>
            </div>
            <div className="progress-meta"><span>{t.completed.length}</span> of {t.total} {t.key === 'java' ? 'chapters' : t.key === 'dsa' ? 'topics' : 'chapters'} completed</div>
          </div>
        )
      })}
      <div id="continue-card" className="continue-card" style={{ display: lastLesson ? 'flex' : 'none' }}>
        <div className="continue-icon"><i className="fas fa-arrow-right"></i></div>
        <div className="continue-info">
          <h3>Continue Learning</h3>
          <p id="continue-text">You were learning: {lastLesson ? lastLesson.title : 'Java Basics'}</p>
        </div>
        <button className="btn btn-primary" onClick={resume}><i className="fas fa-play"></i> Resume</button>
      </div>
    </div>
  )
}