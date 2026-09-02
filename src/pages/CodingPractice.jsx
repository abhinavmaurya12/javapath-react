import React, { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import ProgressBar from '../components/ProgressBar'
import QuestionFilters from '../components/QuestionFilters'
import QuestionTable from '../components/QuestionTable'
import TrendingCompanies from '../components/TrendingCompanies'
import companyQuestions from '../data/companyQuestions'
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
  const [companyFilter, setCompanyFilter] = useState('')

  // Build a status map: id -> 'solved' | 'attempted' | 'none'
  const statusMap = useMemo(() => {
    const map = {}
    ALL_QUESTIONS.forEach(q => {
      if ((codingCompleted.solved || []).includes(q.id)) map[q.id] = 'solved'
      else if ((codingCompleted.attempted || []).includes(q.id)) map[q.id] = 'attempted'
      else map[q.id] = 'none'
    })
    return map
  }, [codingCompleted])

  // Filter questions
  const filtered = useMemo(() => {
    return ALL_QUESTIONS.filter(q => {
      if (filters.difficulty !== 'All' && String(q.difficulty).toLowerCase() !== filters.difficulty.toLowerCase()) return false
      if (filters.category !== 'All' && q.category !== filters.category) return false
      if (companyFilter) {
        const ids = companyQuestions[companyFilter] || []
        if (!ids.includes(q.id)) return false
      }
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
  }, [filters, companyFilter])

  // Progress stats
  const solved = ALL_QUESTIONS.filter(q => (codingCompleted.solved || []).includes(q.id)).length
  const attempted = ALL_QUESTIONS.filter(q => (codingCompleted.attempted || []).includes(q.id)).length
  const total = ALL_QUESTIONS.length

  function handleStatusChange(qId, status) {
    markCodingComplete(qId, status)
  }

  function handleLeetCode(url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  function handleStartCoding(q) {
    navigate('/tryit', { state: { question: q } })
  }

  return (
    <div className="cp-page">
      <div className="cp-container">
        <div className="cp-header">
          <h1><span style={{ color: 'var(--primary)' }}>200 Coding &amp; Interview Practice Questions</span> &mdash; Originally written problems with solutions, hints, and progress tracking</h1>
        </div>

        <div className="cp-layout">
          <div className="cp-sidebar-col">
            <div className="cp-card">
              <TrendingCompanies onFilter={setCompanyFilter} />
            </div>
          </div>

          <div className="cp-main-col">
            <div className="cp-card">
              <div className="cp-card-two">
                <div className="cp-card-left">
                  <ProgressBar solved={solved} attempted={attempted} total={total} />
                </div>
                <div className="cp-card-right">
                  <QuestionFilters filters={filters} onChange={setFilters} />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '.9rem' }}>
                Showing <strong>{filtered.length}</strong> of {total} questions
                {companyFilter && <span> for <strong>{companyFilter}</strong></span>}
              </span>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                {companyFilter && (
                  <button
                    className="cp-btn"
                    onClick={() => setCompanyFilter('')}
                  >
                    <i className="fas fa-times"></i> Clear company filter
                  </button>
                )}
                <Link to="/interview" className="cp-back-link"><i className="fas fa-arrow-left"></i> Back to Interview Q&A</Link>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="cp-empty">
                <i className="fas fa-search"></i>
                <h3>No questions found</h3>
                <p>
                  {companyFilter
                    ? `No questions matched "${companyFilter}". Try clearing the company filter or adjusting your search.`
                    : 'Try adjusting your filters or search term.'}
                </p>
                {companyFilter && (
                  <button className="cp-btn" style={{ marginTop: 12 }} onClick={() => setCompanyFilter('')}>
                    <i className="fas fa-times"></i> Clear company filter
                  </button>
                )}
              </div>
            ) : (
              <QuestionTable
                questions={filtered}
                statusMap={statusMap}
                onStatusChange={handleStatusChange}
                onLeetCode={handleLeetCode}
                onStartCoding={handleStartCoding}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}