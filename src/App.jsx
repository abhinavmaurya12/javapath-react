import CodingPractice from './pages/CodingPractice'
import CodeArenaPage from './pages/CodeArenaPage'
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProgressProvider } from './contexts/ProgressContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import HomePage from './pages/HomePage'
import JavaPage from './pages/JavaPage'
import DSAPage from './pages/DSAPage'
import PracticePage from './pages/PracticePage'
import PracticeLandingPage from './pages/PracticeLandingPage'
import ProjectsPage from './pages/ProjectsPage'
import InterviewPage from './pages/InterviewPage'
import JavaProPage from './pages/JavaProPage'
import TryItPage from './pages/TryItPage'
import RoadmapPage from './pages/RoadmapPage'
import EBookPage from './pages/EBookPage'
import CodeSqzPage from './pages/CodeSqzPage'
import FrontendPage from './pages/FrontendPage'

function Layout({ children, hideFooter = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: 64 }}>
        {children}
      </main>
      {!hideFooter && <Footer />}
      <Chatbot />
    </div>
  )
}

export default function App() {
  useEffect(() => {
    // Ctrl+K search shortcut
    function onKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        const input = document.getElementById('searchInput')
        if (input) { input.focus(); input.select() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <ProgressProvider>
      <Routes>
        <Route path="/coding-practice" element={<Layout hideFooter><CodingPractice /></Layout>} />
        <Route path="/codearena" element={<Layout hideFooter><CodeArenaPage /></Layout>} />
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/java" element={<Layout hideFooter><JavaPage /></Layout>} />
        <Route path="/dsa" element={<Layout hideFooter><DSAPage /></Layout>} />
        <Route path="/practice" element={<Layout hideFooter><PracticePage /></Layout>} />
        <Route path="/practice-landing" element={<Layout hideFooter><PracticeLandingPage /></Layout>} />
        <Route path="/projects" element={<Layout hideFooter><ProjectsPage /></Layout>} />
        <Route path="/interview" element={<Layout hideFooter><InterviewPage /></Layout>} />
        <Route path="/javapro" element={<Layout hideFooter><JavaProPage /></Layout>} />
        <Route path="/tryit" element={<Layout hideFooter><TryItPage /></Layout>} />
        <Route path="/roadmap" element={<Layout hideFooter><RoadmapPage /></Layout>} />
        <Route path="/ebook" element={<Layout hideFooter><EBookPage /></Layout>} />
        <Route path="/codesqz" element={<Layout hideFooter><CodeSqzPage /></Layout>} />
        <Route path="/frontend/:track" element={<Layout hideFooter><FrontendPage /></Layout>} />
      </Routes>
    </ProgressProvider>
  )
}