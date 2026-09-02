import React, { useState } from 'react'

const CATEGORIES = [
  { key: 'HTML/CSS', label: 'HTML/CSS', color: '#e34f26' },
  { key: 'JavaScript', label: 'HTML CSS JS', color: '#f7df1e' },
  { key: 'React', label: 'React', color: '#61dafb' },
  { key: 'Java Basic', label: 'Java Basic', color: '#f89820' },
  { key: 'Java Intermediate', label: 'Java Intermediate', color: '#5382a1' },
  { key: 'Java Hard', label: 'Java Hard', color: '#e74c3c' },
  { key: 'Arrays', label: 'Arrays', color: '#27ae60' },
  { key: 'Strings', label: 'Strings', color: '#16a085' },
  { key: 'Linked List', label: 'Linked List', color: '#8e44ad' },
  { key: 'Stack & Queue', label: 'Stack & Queue', color: '#c0392b' },
  { key: 'Advanced DSA', label: 'Advanced DSA', color: '#2c3e50' },
  { key: 'Interview', label: 'Mixed Interview', color: '#d4af37' }
]

export default function QuestionFilters({ filters, onChange }) {
  const [open, setOpen] = useState(false)
  const { difficulty, category, search } = filters

  const toggleDifficulty = (d) => {
    onChange({ ...filters, difficulty: filters.difficulty === d ? 'All' : d })
  }

  const toggleCategory = (c) => {
    onChange({ ...filters, category: filters.category === c ? 'All' : c })
  }

  return (
    <div className={'cp-filters' + (open ? '' : ' collapsed')}>
      <div className="cp-filter-header" onClick={() => setOpen(!open)}>
        <span>
          <i className={'fas ' + (open ? 'fa-chevron-down' : 'fa-chevron-right')} style={{ marginRight: 6, fontSize: '.7rem' }}></i>
          Difficulty / Category / Search
        </span>
      </div>
      {open && (
        <div className="cp-filter-row">
          <div className="cp-filter-group diff-group">
            <label>Difficulty</label>
            <div className="cp-filter-chips">
              {['All', 'Easy', 'Medium', 'Hard'].map(d => (
                <span key={d} className={'cp-chip' + (difficulty === d ? ' active' : '')} onClick={() => toggleDifficulty(d)}>{d}</span>
              ))}
            </div>
          </div>
          <div className="cp-filter-group" style={{ flex: '0 1 auto' }}>
            <label>Category</label>
            <select value={category} onChange={e => toggleCategory(e.target.value)}>
              <option value="All">All Categories</option>
              {CATEGORIES.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
            </select>
          </div>
          <div className="cp-filter-group" style={{ flex: '0 1 260px' }}>
            <label>Search</label>
            <input
              type="text"
              placeholder="Search number, title, topic, keyword..."
              value={search}
              onChange={e => onChange({ ...filters, search: e.target.value })}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export { CATEGORIES }