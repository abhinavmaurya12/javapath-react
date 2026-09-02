import React from 'react'

export default function ProgressBar({ solved, attempted, total }) {
  const pct = total ? Math.round((solved / total) * 100) : 0
  const remaining = total - solved - attempted
  return (
    <div className="cp-progress-wrap">
      <div className="cp-progress-top">
        <span className="cp-progress-label">Overall Progress</span>
        <span className="cp-progress-count">{solved + attempted} / {total}</span>
      </div>
      <div className="cp-progress-bar">
        <div className="cp-progress-fill" style={{ width: pct + '%' }}></div>
      </div>
      <div className="cp-progress-stats">
        <div className="cp-stat"><div className="cp-stat-val">{solved}</div><div className="cp-stat-label">Solved</div></div>
        <div className="cp-stat"><div className="cp-stat-val">{attempted}</div><div className="cp-stat-label">Attempted</div></div>
        <div className="cp-stat"><div className="cp-stat-val">{remaining}</div><div className="cp-stat-label">Remaining</div></div>
        <div className="cp-stat"><div className="cp-stat-val">{pct}%</div><div className="cp-stat-label">Complete</div></div>
      </div>
    </div>
  )
}