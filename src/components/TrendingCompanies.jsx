import React, { useState, useEffect } from 'react'
import companyQuestions from '../data/companyQuestions'

const COMPANIES = [
  { name: 'Amazon' },
  { name: 'Google' },
  { name: 'Apple' },
  { name: 'TikTok' },
  { name: 'Microsoft' },
  { name: 'Bloomberg' },
  { name: 'Meta' },
  { name: 'Citadel' },
  { name: 'LinkedIn' },
  { name: 'Goldman Sachs' },
  { name: 'Uber' },
  { name: 'Adobe' },
  { name: 'Pinterest' },
  { name: 'Infosys' },
  { name: 'Roblox' },
  { name: 'Salesforce' },
  { name: 'Oracle' },
  { name: 'Capital One' },
  { name: 'Walmart Labs' },
  { name: 'Nvidia' }
]

export default function TrendingCompanies({ onFilter }) {
  const [open, setOpen] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.innerWidth >= 768
  })

  useEffect(() => {
    function onResize() {
      if (window.innerWidth < 768 && open) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])
  const [search, setSearch] = useState('')

  const filtered = search
    ? COMPANIES.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    : COMPANIES

  function selectCompany(c) {
    setSearch('')
    if (onFilter) onFilter(c.name)
  }

  return (
    <aside className={'tc-sidebar' + (open ? '' : ' collapsed')}>
      <div className="tc-header" onClick={() => setOpen(!open)}>
        <span>
          <i className={'fas ' + (open ? 'fa-chevron-down' : 'fa-chevron-right')} style={{ marginRight: 6, fontSize: '.7rem' }}></i>
          Trending Companies
        </span>
      </div>
      {open && (
        <>
          <div className="tc-search">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search for a company..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="tc-list">
            {filtered.map(c => (
              <div
                key={c.name}
                className="tc-item"
                onClick={() => selectCompany(c)}
              >
                <span className="tc-name">{c.name}</span>
                <span className="tc-count">{(companyQuestions[c.name] || []).length}</span>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="tc-empty">No companies found</div>
            )}
          </div>
        </>
      )}
    </aside>
  )
}

export { COMPANIES }