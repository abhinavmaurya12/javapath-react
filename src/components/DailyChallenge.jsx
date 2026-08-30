import React, { useEffect, useState } from 'react'
import { useProgressContext } from '../contexts/ProgressContext'
import { dailyChallenges } from '../data'

export default function DailyChallenge() {
  const { xp, getStreak, markChallengeSolved, challengesSolved, updateStreak } = useProgressContext()
  const [hintOpen, setHintOpen] = useState(false)
  const [solOpen, setSolOpen] = useState(false)
  const [historyOpen, setHistoryOpen] = useState(false)

  useEffect(() => { updateStreak() }, [updateStreak])

  const dayOfMonth = new Date().getDate()
  const challenge = dailyChallenges[dayOfMonth % dailyChallenges.length]
  const solved = challengesSolved.includes(challenge.id)
  const streak = getStreak()
  const solvedCount = challengesSolved.length

  function markSolved() {
    markChallengeSolved(challenge.id)
  }

  function toggleHistory() {
    setHistoryOpen(!historyOpen)
  }

  return (
    <div className="challenge-dashboard" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="challenge-streak-bar">
        <div className="streak-info"><i className="fas fa-fire"></i> <span id="challenge-streak">{streak}</span> Day Streak</div>
        <div className="streak-info"><i className="fas fa-check-double"></i> <span id="challenge-solved">{solvedCount}</span> Problems Solved</div>
      </div>
      <div className="challenge-card" id="daily-challenge">
        <div className="challenge-header">
          <h3 id="challenge-title">{challenge.title}</h3>
          <span className={'difficulty-badge ' + challenge.difficulty} id="challenge-difficulty">{challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}</span>
        </div>
        <div className="challenge-body">
          <p id="challenge-description">{challenge.description}</p>
          <div className="challenge-io">
            <div><strong>Input:</strong>
              <pre id="challenge-input">{challenge.input}</pre>
            </div>
            <div><strong>Output:</strong>
              <pre id="challenge-output">{challenge.output}</pre>
            </div>
          </div>
          {hintOpen && (
            <div className="challenge-hint" id="challenge-hint-box" style={{ display: 'block' }}><strong>Hint:</strong> <span id="challenge-hint">{challenge.hint}</span></div>
          )}
          {solOpen && (
            <div className="challenge-solution" id="challenge-solution-box" style={{ display: 'block' }}><strong>Solution:</strong>
              <div className="code-block">
                <div className="code-header"><span>Solution.java</span></div>
                <pre><code id="challenge-solution-code">{challenge.solution}</code></pre>
              </div>
            </div>
          )}
          <div className="challenge-history" id="challenge-history" style={{ display: historyOpen ? 'block' : 'none', marginTop: 24 }}>
            <h4>Previous Challenges</h4>
            {challengesSolved.slice(-5).reverse().map(id => {
              const ch = dailyChallenges.find(x => x.id === id)
              if (!ch) return null
              return (
                <div key={id} className="history-item">
                  <span className={'difficulty-badge ' + ch.difficulty}>{ch.difficulty}</span>
                  <span className="challenge-name">{ch.title}</span>
                  <span className="solved"><i className="fas fa-check-circle"></i> Solved</span>
                </div>
              )
            })}
            {challengesSolved.length === 0 && (
              <p style={{ color: 'var(--text-muted)', fontSize: '.88rem', textAlign: 'center', padding: 20 }}>No challenges solved yet. Start with today's challenge!</p>
            )}
          </div>
        </div>
        <div className="challenge-actions">
          <button className="btn btn-outline" onClick={() => setHintOpen(!hintOpen)}><i className="fas fa-lightbulb"></i> Hint</button>
          <button className="btn btn-outline" onClick={() => setSolOpen(!solOpen)}><i className="fas fa-eye"></i> Solution</button>
          <button className="btn btn-primary" onClick={markSolved}><i className="fas fa-check"></i> {solved ? 'Solved!' : 'Mark Solved'}</button>
          <button className="btn btn-outline" onClick={toggleHistory}><i className="fas fa-history"></i> History</button>
        </div>
      </div>
    </div>
  )
}