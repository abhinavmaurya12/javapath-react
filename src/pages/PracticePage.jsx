import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import { practiceData, categoryKeyMap, categoryNameToId, categoryMeta } from '../data'
import SafeHTML from '../components/SafeHTML'

const CATEGORIES = [
  'basic', 'patterns', 'pattern-assignment', 'number-patterns', 'loops', 'arrays',
  'strings', 'oop', 'exceptions', 'threading', 'switch-continue', 'this-super',
  'gc', 'packages', 'practice', 'awt-swing', 'friday-fun'
]

export default function PracticePage() {
  const [activeCat, setActiveCat] = useState('basic')
  const [activeFile, setActiveFile] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  const { projectsCompleted, markProjectComplete } = useProgressContext()

  useEffect(() => {
    const st = location.state
    if (st && st.category) {
      setActiveCat(st.category)
      if (st.file) setActiveFile(st.file)
    }
  }, []) // eslint-disable-line

  function showCategory(catId) {
    setActiveCat(catId)
    setActiveFile(null)
    navigate('/practice', { state: { category: catId } })
  }

  function openFile(fileName) {
    setActiveFile(fileName)
    navigate('/practice', { state: { category: activeCat, file: fileName } })
  }

  const catName = categoryKeyMap[activeCat]
  const cat = practiceData[catName]
  const meta = categoryMeta[activeCat] || {}
  const files = cat && cat.files ? Object.keys(cat.files) : []

  useEffect(() => {
    window.__practiceShowCategory = (el, catId) => showCategory(catId)
    window.__practiceOpenFile = (catId, fileName) => openFile(fileName)
    return () => {
      delete window.__practiceShowCategory
      delete window.__practiceOpenFile
    }
  }, [activeCat]) // eslint-disable-line

  let fileCode = ''
  if (activeFile && cat && cat.files) {
    const fd = cat.files[activeFile]
    fileCode = typeof fd === 'string' ? fd : (fd.code || fd.content || JSON.stringify(fd))
  }

  return (
    <div className="learn-layout">
      <aside className="sidebar" id="practiceSidebar">
        <div className="search-sidebar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search practice topics..." id="practiceSearchInput" />
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-title">Practice Code</div>
          {CATEGORIES.map(c => (
            <div
              key={c}
              className={'sidebar-item' + (activeCat === c ? ' active' : '')}
              onClick={() => showCategory(c)}
            >
              <i className={'fas ' + (categoryMeta[c] ? categoryMeta[c].icon : 'fa-code')}></i> {categoryMeta[c] ? categoryMeta[c].title : c}
            </div>
          ))}
        </div>
      </aside>
      <main className="main-content" id="practiceMainContent">
        <button className="sidebar-toggle-btn" onClick={() => {
          const s = document.getElementById('practiceSidebar')
          if (s) s.classList.toggle('open')
        }}><i className="fas fa-bars"></i> Categories</button>
        <div className="lesson-container" id="practiceContainer">
          {!activeFile ? (
            cat ? (
              <>
                <div className="lesson-header">
                  <h1><i className={'fas ' + (meta.icon || 'fa-code')} style={{ color: 'var(--primary)' }}></i> {meta.title || catName}</h1>
                </div>
                <div className="concept-box">
                  <h3>{meta.title || catName}</h3>
                  <p>{cat.description || ''}</p>
                </div>
                <div className="cards-grid" style={{ marginTop: 24 }}>
                  {files.map(f => (
                    <div key={f} className="card" style={{ cursor: 'pointer' }} onClick={() => openFile(f)}>
                      <div className="card-icon orange"><i className="fas fa-file-code"></i></div>
                      <h3>{f}</h3>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="empty-state"><i className="fas fa-folder-open"></i><h3>No category selected</h3><p>Select a category from the sidebar.</p></div>
            )
          ) : (
            <>
              <div className="lesson-header">
                <h1>{activeFile}</h1>
                <span className="badge beginner">Java</span>
              </div>
              <div className="code-block">
                <div className="code-header">
                  <span className="java-file">{activeFile}</span>
                  <span>Java</span>
                </div>
                <pre style={{ overflowX: 'auto', whiteSpace: 'pre', wordWrap: 'normal', maxWidth: '100%' }} data-code={fileCode}><code dangerouslySetInnerHTML={{ __html: fileCode }} /></pre>
              </div>
              <div className="lesson-nav">
                <button className="btn btn-outline" onClick={() => setActiveFile(null)}><i className="fas fa-arrow-left"></i> Back to Files</button>
                <button className="btn btn-primary" onClick={() => { navigator.clipboard.writeText(fileCode) }}><i className="fas fa-copy"></i> Copy Code</button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}