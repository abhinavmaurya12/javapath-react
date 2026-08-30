import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import FrontendPage from './pages/FrontendPage'

function Layout({ children }) {
  const location = useLocation()
  const isTryIt = location.pathname === '/tryit'

  // On tryit page we don't want the navbar/footer overlay
  if (isTryIt) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <Routes>
          <Route path="/tryit" element={<TryItPage />} />
        </Routes>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: 64 }}>
        {children}
      </main>
      <Footer />
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
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/java" element={<Layout><JavaPage /></Layout>} />
        <Route path="/dsa" element={<Layout><DSAPage /></Layout>} />
        <Route path="/practice" element={<Layout><PracticePage /></Layout>} />
        <Route path="/practice-landing" element={<Layout><PracticeLandingPage /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/interview" element={<Layout><InterviewPage /></Layout>} />
        <Route path="/javapro" element={<Layout><JavaProPage /></Layout>} />
        <Route path="/tryit" element={<TryItPage />} />
        <Route path="/roadmap" element={<Layout><RoadmapPage /></Layout>} />
        <Route path="/frontend/:track" element={<Layout><FrontendPage /></Layout>} />
      </Routes>
    </ProgressProvider>
  )
}