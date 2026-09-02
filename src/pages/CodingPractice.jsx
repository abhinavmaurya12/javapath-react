import React, { useState, useEffect, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import ProgressBar from '../components/ProgressBar'
import QuestionFilters from '../components/QuestionFilters'
import QuestionCard from '../components/QuestionCard'
import QuestionNavigation from '../components/QuestionNavigation'
import htmlCssQuestions from '../data/htmlCssQuestions'
import frontendQuestions from '../data/frontendQuestions'
import reactQuestions from '../data/reactQuestions'
import javaBasicQuestions from '../data/javaBasicQuestions'
import javaIntermediateQuestions from '../data/javaIntermediateQuestions'
import javaHardQuestions from '../data/javaHardQuestions'
import arrayQuestions from '../data/arrayQuestions'
import stringQuestions from '../data/stringQuestions'
import linkedListQuestions from '../data/linkedListQuestions'
import stackQueueQuestions from '../data/stackQueueQuestions'
import advancedDsaQuestions from '../data/advancedDsaQuestions'
import mixedInterviewQuestions from '../data/mixedInterviewQuestions'

const ALL_QUESTIONS = [
  ...htmlCssQuestions,
  ...frontendQuestions,
  ...reactQuestions,
  ...javaBasicQuestions,
  ...javaIntermediateQuestions,
  ...javaHardQuestions,
  ...arrayQuestions,
  ...stringQuestions,
  ...linkedListQuestions,
  ...stackQueueQuestions,
  ...advancedDsaQuestions,
  ...mixedInterviewQuestions
].sort((a, b) => a.id - b.id)

const CATEGORY_COUNTS = {
  'HTML/CSS': 10, 'JavaScript': 10, 'React': 10,
  'Java Basic': 20, 'Java Intermediate': 20, 'Java Hard': 20,
  'Arrays': 20, 'Strings': 20, 'Linked List': 20,
  'Stack & Queue': 20, 'Advanced DSA': 20, 'Interview': 10
}

export default function CodingPractice() {
  const navigate = useNavigate()
  const { codingCompleted, markCodingComplete } = useProgressContext()
  const [filters, setFilters] = useState({ difficulty: 'All', category: 'All', search: '' })
  const [activeId, setActiveId] = useState(null)

  // Restore active question from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('javanest_coding_active')
    if (saved) {
      const id = parseInt(saved)
      if (id && ALL_QUESTIONS.find(q => q.id === id)) setActiveId(id)
    }
  }, [])

  useEffect(() => {
    if (activeId) localStorage.setItem('javanest_coding_active', activeId)
  }, [activeId])

  // Filter questions
  const filtered = useMemo(() => {
    return ALL_QUESTIONS.filter(q => {
      if (filters.difficulty !== 'All' && String(q.difficulty).toLowerCase() !== filters.difficulty.toLowerCase()) return false
      if (filters.category !== 'All' && q.category !== filters.category) return false
      if (filters.search) {
        const s = filters.search.toLowerCase()
        const match = String(q.id).includes(s) ||
          q.title.toLowerCase().includes(s) ||
          q.topic.toLowerCase().includes(s) ||
          q.category.toLowerCase().includes(s) ||
          (q.concepts || []).some(c => c.toLowerCase().includes(s))
        if (!match) return false
      }
      return true
    })
  }, [filters])

  // Progress stats
  const solved = ALL_QUESTIONS.filter(q => (codingCompleted.solved || []).includes(q.id)).length
  const attempted = ALL_QUESTIONS.filter(q => (codingCompleted.attempted || []).includes(q.id)).length
  const total = ALL_QUESTIONS.length

  function getStatus(q) {
    if ((codingCompleted.solved || []).includes(q.id)) return 'solved'
    if ((codingCompleted.attempted || []).includes(q.id)) return 'attempted'
    return 'none'
  }

  function handleStatusChange(qId, status) {
    markCodingComplete(qId, status)
  }

  function handleLeetCode(url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  function handleStartCoding(q) {
    navigate('/tryit', { state: { question: q } })
  }

  function goPrev() {
    const idx = filtered.findIndex(q => q.id === activeId)
    if (idx > 0) setActiveId(filtered[idx - 1].id)
  }

  function goNext() {
    const idx = filtered.findIndex(q => q.id === activeId)
    if (idx < filtered.length - 1) setActiveId(filtered[idx + 1].id)
  }

  const activeQ = ALL_QUESTIONS.find(q => q.id === activeId)
  const activeIndex = filtered.findIndex(q => q.id === activeId)

  return (
    <div className="cp-page">
      <div className="cp-container">
        <div className="cp-header">
          <h1>200 Coding & Interview Practice <span>Questions</span></h1>
          <p>Originally written problems with solutions, hints, and progress tracking</p>
        </div>

        <ProgressBar solved={solved} attempted={attempted} total={total} />

        <QuestionFilters filters={filters} onChange={setFilters} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '.9rem' }}>
            Showing <strong>{filtered.length}</strong> of {total} questions
          </span>
          <Link to="/interview" className="cp-back-link"><i className="fas fa-arrow-left"></i> Back to Interview Q&A</Link>
        </div>

        {filtered.length === 0 ? (
          <div className="cp-empty">
            <i className="fas fa-search"></i>
            <h3>No questions found</h3>
            <p>Try adjusting your filters or search term.</p>
          </div>
        ) : (
          <>
            <div className="cp-question-list">
              {filtered.map(q => (
                <QuestionCard
                  key={q.id}
                  q={q}
                  status={getStatus(q)}
                  onStatusChange={handleStatusChange}
                  onLeetCode={handleLeetCode}
                  onStartCoding={handleStartCoding}
                />
              ))}
            </div>

            {activeQ && (
              <QuestionNavigation
                current={activeQ.id}
                total={total}
                onPrev={goPrev}
                onNext={goNext}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}