import { useState, useEffect, useCallback } from 'react'

const PREFIX = 'javanest_'

function read(key) {
  try { return JSON.parse(localStorage.getItem(PREFIX + key)) || null }
  catch (e) { return null }
}
function write(key, val) {
  localStorage.setItem(PREFIX + key, JSON.stringify(val))
}

export const TRACK_TOTALS = { java: 15, dsa: 30, html: 6, css: 8, javascript: 10, react: 8 }

export function useProgress() {
  const [javaCompleted, setJavaCompleted] = useState(() => read('java_completed') || [])
  const [dsaCompleted, setDSACompleted] = useState(() => read('dsa_completed') || [])
  const [interviewCompleted, setInterviewCompleted] = useState(() => read('interview_completed') || [])
  const [projectsCompleted, setProjectsCompleted] = useState(() => read('projects_completed') || [])
  const [frontendCompleted, setFrontendCompleted] = useState(() => {
    const out = {}
    ;['html','css','javascript','react'].forEach(t => { out[t] = read('frontend_' + t + '_completed') || [] })
    return out
  })
  const [xp, setXP] = useState(() => read('xp') || 0)
  const [xpHistory, setXPHistory] = useState(() => read('xp_history') || [])
  const [streak, setStreak] = useState(() => read('streak') || { count: 0, lastDate: null })
  const [badges, setBadges] = useState(() => read('badges') || [])
  const [challengesSolved, setChallengesSolved] = useState(() => read('challenges_solved') || [])
  const [lastLesson, setLastLesson] = useState(() => read('last_lesson') || null)

  useEffect(() => { write('java_completed', javaCompleted) }, [javaCompleted])
  useEffect(() => { write('dsa_completed', dsaCompleted) }, [dsaCompleted])
  useEffect(() => { write('interview_completed', interviewCompleted) }, [interviewCompleted])
  useEffect(() => { write('projects_completed', projectsCompleted) }, [projectsCompleted])
  useEffect(() => { write('xp', xp) }, [xp])
  useEffect(() => { write('xp_history', xpHistory) }, [xpHistory])
  useEffect(() => { write('streak', streak) }, [streak])
  useEffect(() => { write('badges', badges) }, [badges])
  useEffect(() => { write('challenges_solved', challengesSolved) }, [challengesSolved])
  useEffect(() => { write('last_lesson', lastLesson) }, [lastLesson])
  useEffect(() => {
    ;['html','css','javascript','react'].forEach(t => {
      write('frontend_' + t + '_completed', frontendCompleted[t] || [])
    })
  }, [frontendCompleted])

  const addXP = useCallback((amount, label) => {
    setXP(x => x + amount)
    setXPHistory(h => { const n = [...h]; n.push({ amount, label: label || 'General', time: Date.now() }); return n })
  }, [])

  const getStreak = useCallback(() => {
    const today = new Date().toDateString()
    const yesterday = new Date(Date.now() - 86400000).toDateString()
    if (streak.lastDate === today) return streak.count
    if (streak.lastDate === yesterday) return streak.count
    return 0
  }, [streak])

  const updateStreak = useCallback(() => {
    const today = new Date().toDateString()
    const yesterday = new Date(Date.now() - 86400000).toDateString()
    setStreak(s => {
      if (s.lastDate === today) return s
      const count = (s.lastDate === yesterday) ? s.count + 1 : 1
      return { count, lastDate: today }
    })
  }, [])

  const unlockBadge = useCallback((badgeId) => {
    setBadges(b => b.includes(badgeId) ? b : [...b, badgeId])
  }, [])

  const checkBadges = useCallback((state) => {
    const s = state || { javaCompleted, dsaCompleted, interviewCompleted, frontendCompleted }
    if (s.javaCompleted.length >= 1) unlockBadge('java-beginner')
    if (s.javaCompleted.length >= 5) unlockBadge('java-explorer')
    if (s.javaCompleted.length >= 15) unlockBadge('java-master')
    if (s.dsaCompleted.length >= 1) unlockBadge('dsa-starter')
    if (s.dsaCompleted.length >= 10) unlockBadge('dsa-warrior')
    if (s.interviewCompleted.length >= 20) unlockBadge('interview-ready')
    if (s.frontendCompleted.html.length >= 1) unlockBadge('html-beginner')
    if (s.frontendCompleted.html.length >= 6) unlockBadge('html-master')
    if (s.frontendCompleted.css.length >= 1) unlockBadge('css-beginner')
    if (s.frontendCompleted.css.length >= 8) unlockBadge('css-master')
    if (s.frontendCompleted.javascript.length >= 1) unlockBadge('js-beginner')
    if (s.frontendCompleted.javascript.length >= 10) unlockBadge('js-master')
    if (s.frontendCompleted.react.length >= 1) unlockBadge('react-beginner')
    if (s.frontendCompleted.react.length >= 8) unlockBadge('react-master')
  }, [unlockBadge])

  const markJavaComplete = useCallback((idx) => {
    setJavaCompleted(c => c.includes(idx) ? c : [...c, idx])
    addXP(10, 'Complete Lesson')
    updateStreak()
  }, [addXP, updateStreak])

  const markDSAComplete = useCallback((topicId) => {
    setDSACompleted(c => c.includes(topicId) ? c : [...c, topicId])
    addXP(20, 'Solve Practice')
    updateStreak()
  }, [addXP, updateStreak])

  const markInterviewComplete = useCallback((qId) => {
    setInterviewCompleted(c => c.includes(qId) ? c : [...c, qId])
    addXP(30, 'Pass Quiz')
    updateStreak()
  }, [addXP, updateStreak])

  const markProjectComplete = useCallback((projectId) => {
    setProjectsCompleted(c => c.includes(projectId) ? c : [...c, projectId])
    addXP(100, 'Complete Project')
  }, [addXP])

  const markFrontendComplete = useCallback((track, idx) => {
    setFrontendCompleted(f => ({ ...f, [track]: f[track].includes(idx) ? f[track] : [...f[track], idx] }))
    addXP(10, 'Complete ' + track.toUpperCase() + ' Lesson')
    updateStreak()
  }, [addXP, updateStreak])

  const setLast = useCallback((idx, title) => {
    setLastLesson({ idx, title, time: Date.now() })
  }, [])

  const markChallengeSolved = useCallback((id) => {
    setChallengesSolved(c => c.includes(id) ? c : [...c, id])
    addXP(50, 'Daily Challenge')
    updateStreak()
  }, [addXP, updateStreak])

  const getSolved = () => javaCompleted.length + dsaCompleted.length + interviewCompleted.length

  return {
    javaCompleted, dsaCompleted, interviewCompleted, projectsCompleted,
    frontendCompleted, xp, xpHistory, streak, badges, challengesSolved,
    lastLesson, getStreak, updateStreak, addXP, unlockBadge, checkBadges,
    markJavaComplete, markDSAComplete, markInterviewComplete, markProjectComplete,
    markFrontendComplete, setLast, markChallengeSolved, getSolved
  }
}

export default useProgress