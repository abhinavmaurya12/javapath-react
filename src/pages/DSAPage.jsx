import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import { dsaTopics } from '../data'
import SafeHTML from '../components/SafeHTML'

const DSA_SECTIONS = [
  { title: '01. Java Basics for DSA', items: ['java-basics'] },
  { title: '02. Complexity Analysis', items: ['complexity-analysis'] },
  { title: '03. Arrays', items: ['arrays', 'array-techniques'] },
  { title: '04. Strings', items: ['strings', 'string-builder'] },
  { title: '05-06. Sorting & Searching', items: ['sorting', 'searching'] },
  { title: '07-08. Recursion & Backtracking', items: ['recursion', 'backtracking'] },
  { title: '09-12. Linked Lists', items: ['linked-list', 'doubly-linked-list', 'circular-linked-list'] },
  { title: '13-15. Stacks, Queues & Deque', items: ['stack', 'queue', 'deque'] },
  { title: '16. Hashing', items: ['hashing'] },
  { title: '17-18. Trees & BST', items: ['trees', 'bst'] },
  { title: '19-20. Heaps & Trie', items: ['heap', 'trie'] },
  { title: '21-23. Graphs', items: ['graph-basics', 'graph-traversal', 'graph-algorithms'] },
  { title: '24-25. Greedy & DP', items: ['greedy', 'dp'] },
  { title: '26-30. Advanced Topics', items: ['bit-manipulation', 'math', 'java-collections', 'dsa-patterns'] }
]

const topicKeys = Object.keys(dsaTopics)

export default function DSAPage() {
  const [activeTopic, setActiveTopic] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  const { dsaCompleted, markDSAComplete, setLast, checkBadges } = useProgressContext()

  useEffect(() => {
    checkBadges()
  }, [checkBadges])

  useEffect(() => {
    const st = location.state
    if (st && st.topic) {
      setActiveTopic(st.topic)
    }
  }, []) // eslint-disable-line

  function showTopic(topicId, el) {
    setActiveTopic(topicId)
    navigate('/dsa', { state: { topic: topicId } })
    const t = dsaTopics[topicId]
    if (t) setLast('dsa-' + topicId, t.title)
    if (el) {
      document.querySelectorAll('#dsaSidebar .sidebar-item').forEach(i => i.classList.remove('active'))
      el.classList.add('active')
    }
    const sidebar = document.getElementById('dsaSidebar')
    if (sidebar) sidebar.classList.remove('open')
    window.scrollTo(0, 0)
  }

  function navigateDSATopic(topicId) {
    const idx = topicKeys.indexOf(topicId)
    const next = idx < topicKeys.length - 1 ? topicKeys[idx + 1] : null
    if (next) showTopic(next, document.querySelector('#dsaSidebar .sidebar-item[onclick*="' + next + '"]'))
  }

  function markComplete() {
    if (activeTopic) {
      markDSAComplete(activeTopic)
      checkBadges()
    }
  }

  const topic = activeTopic ? dsaTopics[activeTopic] : null
  const isCompleted = activeTopic ? dsaCompleted.includes(activeTopic) : false

  // Wire global handlers for inline onclick in SafeHTML
  useEffect(() => {
    window.__dsaShow = (el, id) => showTopic(id, el)
    window.__dsaMark = (id) => markDSAComplete(id)
    window.__dsaNavigate = (id) => navigateDSATopic(id)
    return () => {
      delete window.__dsaShow
      delete window.__dsaMark
      delete window.__dsaNavigate
    }
  }, [activeTopic]) // eslint-disable-line

  function getDifficulty(content) {
    if (content.indexOf('intermediate') !== -1) return 'Intermediate'
    if (content.indexOf('advanced') !== -1) return 'Advanced'
    return 'Beginner'
  }

  if (!topic) {
    return (
      <div className="learn-layout">
        <aside className="sidebar" id="dsaSidebar">
          <div className="search-sidebar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search DSA topics..." id="dsaSearchInput" />
          </div>
          {DSA_SECTIONS.map(sec => (
            <div className="sidebar-section" key={sec.title}>
              <div className="sidebar-section-title">{sec.title}</div>
              {sec.items.map(t => (
                <div key={t} className="sidebar-item active" onClick={e => showTopic(t, e.currentTarget)}>
                  <i className="fas fa-coffee"></i> {dsaTopics[t] ? dsaTopics[t].title : t}
                </div>
              ))}
            </div>
          ))}
        </aside>
        <main className="main-content" id="dsaMainContent">
          <button className="sidebar-toggle-btn" onClick={() => {
            const s = document.getElementById('dsaSidebar')
            if (s) s.classList.toggle('closed')
          }}><i className="fas fa-bars"></i> Topics</button>
          <div className="lesson-container" id="dsaContainer">
            <div className="lesson-header">
              <h1><i className="fas fa-project-diagram" style={{ color: 'var(--primary)' }}></i> Data Structures & Algorithms</h1>
            </div>
            <div className="concept-box">
              <h3>Master DSA with Java</h3>
              <p>Complete DSA course covering all essential topics for coding interviews and placements. Based on structured handwritten notes and curated practice problems.</p>
              <p style={{ marginTop: 12 }}><strong>Select a topic from the sidebar to begin learning.</strong></p>
            </div>
            <div className="cards-grid" style={{ marginTop: 24 }}>
              {topicKeys.map(key => {
                const t = dsaTopics[key]
                if (!t) return null
                return (
                  <div key={key} className="card" style={{ cursor: 'pointer' }} onClick={() => showTopic(key, null)}>
                    <div className="card-icon orange"><i className={'fas ' + (t.icon || 'fa-book')}></i></div>
                    <h3>{t.title}</h3>
                    <p>{t.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </main>
      </div>
    )
  }

  const difficulty = getDifficulty(topic.content)
  const diffClass = difficulty.toLowerCase()
  const currentIdx = topicKeys.indexOf(activeTopic)
  const prevKey = currentIdx > 0 ? topicKeys[currentIdx - 1] : null
  const nextKey = currentIdx < topicKeys.length - 1 ? topicKeys[currentIdx + 1] : null

  // Strip the first .lesson-header from content (the DSA content has one embedded)
  let content = topic.content
  content = content.replace(/<div class="lesson-header">[\s\S]*?<\/div>/, '')

  const headerHtml = (
    <div className="lesson-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
      <div>
        <h1><i className={'fas ' + (topic.icon || 'fa-book')} style={{ color: 'var(--primary)' }}></i> {topic.title}</h1>
        <span className={'badge ' + diffClass}>{difficulty}</span>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {isCompleted ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 8, background: '#27ae60', color: '#fff', fontSize: '.85rem', fontWeight: 600 }}>
            <i className="fas fa-check-circle"></i> Completed
          </span>
        ) : (
          <button className="btn btn-primary" onClick={markComplete} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <i className="fas fa-check"></i> Mark Complete
          </button>
        )}
      </div>
    </div>
  )

  return (
    <div className="learn-layout">
      <aside className="sidebar" id="dsaSidebar">
        <div className="search-sidebar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search DSA topics..." id="dsaSearchInput" />
        </div>
        {DSA_SECTIONS.map(sec => (
          <div className="sidebar-section" key={sec.title}>
            <div className="sidebar-section-title">{sec.title}</div>
            {sec.items.map(t => {
              const tt = dsaTopics[t]
              return (
                <div
                  key={t}
                  className={'sidebar-item' + (activeTopic === t ? ' active' : '')}
                  onClick={e => showTopic(t, e.currentTarget)}
                >
                  <i className={'fas ' + (tt ? tt.icon : 'fas fa-coffee')}></i> {tt ? tt.title : t}
                </div>
              )
            })}
          </div>
        ))}
      </aside>
      <main className="main-content" id="dsaMainContent">
        <button className="sidebar-toggle-btn" onClick={() => {
          const s = document.getElementById('dsaSidebar')
          if (s) s.classList.toggle('open')
        }}><i className="fas fa-bars"></i> Topics</button>
        <div className="lesson-container" id="dsaContainer">
          {headerHtml}
          <SafeHTML html={content} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32, padding: '16px 0', borderTop: '1px solid var(--border)' }}>
            {prevKey ? (
              <button className="btn btn-outline" onClick={() => navigateDSATopic(prevKey)}><i className="fas fa-arrow-left"></i> {dsaTopics[prevKey].title}</button>
            ) : <div></div>}
            {nextKey ? (
              <button className="btn btn-outline" onClick={() => navigateDSATopic(nextKey)}>{dsaTopics[nextKey].title} <i className="fas fa-arrow-right"></i></button>
            ) : <div></div>}
          </div>
        </div>
      </main>
    </div>
  )
}