import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProgressDashboard from '../components/ProgressDashboard'
import DailyChallenge from '../components/DailyChallenge'
import GamificationDashboard from '../components/GamificationDashboard'
import JavaRoadmapVisual from '../components/JavaRoadmapVisual'
import UpdateCycle from '../components/UpdateCycle'

const COURSES = [
  { icon: '☕', title: 'Java Mastery', desc: 'From variables to streams — complete Java from beginner to advanced.', to: '/java', color: '#e74c3c', level: 'Beginner', weeks: '15 Chapters', students: 'Free', rating: 4.8 },
  { icon: '📖', title: 'E-Book Library', desc: 'Handwritten Java notebook — 160 scanned pages with flipbook reader, zoom and LevelUp/ApnaNote.', to: '/ebook', color: '#0ea5e9', level: 'Free', weeks: '160 Pages', students: 'Free', rating: 4.9 },
  { icon: '🧠', title: 'DSA & Algorithms', desc: 'Master data structures and algorithms with Java implementations.', to: '/dsa', color: '#27ae60', level: 'Intermediate', weeks: '30 Topics', students: 'Free', rating: 4.7 },
  { icon: '💻', title: 'Web Development', desc: 'HTML, CSS, JavaScript and React — build modern websites.', to: '/frontend/html', color: '#2563eb', level: 'Beginner', weeks: '30 Chapters', students: 'Free', rating: 4.9 },
  { icon: '🔥', title: 'Interview Prep', desc: '100+ interview questions with hints, solutions and progress tracking.', to: '/interview', color: '#8e44ad', level: 'Advanced', weeks: '150+ Qs', students: 'Free', rating: 4.8 },
  { icon: '🏆', title: 'CodeArena Practice', desc: '200 coding & interview practice questions across 12 categories.', to: '/codearena', color: '#2563eb', level: 'All Levels', weeks: '200 Qs', students: 'Free', rating: 4.6 },
  { icon: '📚', title: 'Java Programs', desc: '375+ hands-on coding programs across all Java topics.', to: '/practice', color: '#0ea5e9', level: 'Practice', weeks: '375+ Progs', students: 'Free', rating: 4.7 }
]

const FEATURES = [
  { icon: '🎁', title: 'Free Forever', desc: 'A complete learning platform for Java, DSA, HTML, CSS, JavaScript, and React.' },
  { icon: '🎓', title: 'Beginner Friendly', desc: 'Start from absolute basics. No prior programming experience required.' },
  { icon: '📖', title: '15 Complete Chapters', desc: 'From introduction to Java Streams. Organized in a logical learning path.' },
  { icon: '💻', title: 'Real Code Examples', desc: 'Every concept comes with practical, runnable code examples.' },
  { icon: '🧠', title: '30+ DSA Topics', desc: 'Complete DSA course with Java implementations and practice problems.' },
  { icon: '🏆', title: '375+ Practice Programs', desc: 'Hands-on coding practice across all Java topics.' },
  { icon: '⚔️', title: 'CodeArena Practice', desc: '200 coding & interview practice questions with hints, solutions, and progress tracking.' }
]

const STATS = [
  { num: '15+', label: 'Java Chapters' },
  { num: '30+', label: 'DSA Topics' },
  { num: '375+', label: 'Practice Programs' },
  { num: '200+', label: 'CodeArena Questions' },
  { num: '100+', label: 'Interview Q&A' },
  { num: '30+', label: 'Frontend Chapters' }
]

const CATEGORIES = [
  { icon: '💻', label: 'Web Development', to: '/frontend/html' },
  { icon: '☕', label: 'Java', to: '/java' },
  { icon: '🧠', label: 'Data Structures', to: '/dsa' },
  { icon: '🔥', label: 'Interview Prep', to: '/interview' },
  { icon: '🏆', label: 'Coding Practice', to: '/codearena' },
  { icon: '📚', label: 'Programs', to: '/practice' },
  { icon: '📖', label: 'E-Book', to: '/ebook' }
]

const WHATS_NEW = [
  { date: 'September 2, 2026', title: 'CodeArena — 200 Practice Questions', items: [
      'Originally written coding & interview questions with hints, solutions, and progress tracking',
      '200 Coding & Interview Practice Questions covering HTML + CSS, JavaScript, React, Java Basics to Advanced, Arrays, Strings, Linked Lists, Stacks & Queues, Advanced DSA, and Mixed Interview Questions',
      'Difficulty levels: Easy, Medium, Hard across 12 Categories',
      'Each question links straight to the online compiler with the problem loaded'
    ]},
    { date: 'September 1, 2026', title: 'Voice Reader, Dark/Light Fixes & More', items: [
      'Voice reader (read-aloud) now available for all Java, DSA, HTML, CSS, JavaScript and React chapters',
      'Added Pattern Questions Phase 3 (42 questions) to the Interview section',
      'Fixed dark/light mode text color bugs on the 10-Day Update Cycle and Fresh Content section',
      'Added a slow-internet loader so content loads smoothly even on weak connections',
      'Fixed compiler iframe bugs in the Try It editor',
      'Next update soon… with more features'
    ]},
    { date: 'August 31, 2026', title: 'Bug Fixes & Polish', items: [
    'Fixed Java compiler editor text color — code is now visible in both light and dark themes',
    'Frontend (HTML/CSS/JS/React) sidebar now closes automatically after selecting a chapter on mobile',
    'Improved overall page rendering and theme consistency',
    'New Array Core Interview Questions — Phase 2 (70 questions) added'
  ]},
  { date: 'August 29, 2026', title: 'Frontend Developer Tracks Added!', items: [
    'New HTML track with 6 chapters (tags, forms, semantic HTML, accessibility)',
    'New CSS track with 8 chapters (selectors, flexbox, grid, animations, responsive)',
    'New JavaScript track with 10 chapters (DOM, events, async, ES6+, closures)',
    'New React track with 8 chapters (components, hooks, routing, context API)',
    'Progress tracking and badges extended to all 4 frontend tracks'
  ]},
  { date: 'August 29, 2026', title: 'Video Lectures Added to All 15 Java Chapters', items: [
    'YouTube video links added to all Learn section chapters',
    'Chapter 1: Introduction to Java (dedicated intro video)',
    'Chapter 2: Variables & Data Types (Bro Code)',
    'Chapter 3: Flow Control — if/else & logical operators (Bro Code)',
    'Chapters 4-15: OOP, Arrays, Strings, Exceptions, Multithreading, File I/O (Bro Code & more)',
    'All videos open in new tab — works on mobile & desktop'
  ]},
  { date: 'August 28, 2026', title: 'Platform Upgrade', items: [
    'Redesigned homepage with modern layout',
    'Added daily coding challenges',
    'Progress tracking with localStorage',
    'Gamification system with XP and badges'
  ]},
  { date: 'August 20, 2026', title: 'Content Expansion', items: [
    'Added 15 complete Java chapters',
    '30+ DSA topics with examples',
    '375+ practice programs',
    '100+ interview questions'
  ]}
]

const HERO_NOTICE = [
  'Voice Reader for all chapters — read-aloud feature',
  'CodeArena 200+ coding & practice questions',
  'Array Core Interview Questions Phase 2 (70 questions)',
  'Pattern Questions Phase 3 (43 questions)'
]

export default function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__nav = (to) => navigate(to)
    return () => { delete window.__nav }
  }, [navigate])

  // Demo button on the Voice Reader section sends users to a chapter where
  // the floating Voice Reader is mounted and ready to use.
  useEffect(() => {
    const btn = document.getElementById('voice-reader-demo')
    if (!btn) return
    function onClick(e) {
      e.preventDefault()
      navigate('/java')
    }
    btn.addEventListener('click', onClick)
    return () => btn.removeEventListener('click', onClick)
}, [navigate])

  return (
    <div id="page-home">
<section className="ph-hero">
        <div className="ph-hero-grid">
          <div className="ph-hero-left">
            <div className="ph-hero-marquee" aria-hidden="true">
              <div className="ph-hero-marquee-track">
                {HERO_NOTICE.map((n, i) => (
                  <span key={i} className="ph-hero-marquee-item">
                    <i className="fas fa-bullhorn"></i> {n}
                    <span className="ph-hero-marquee-dot"></span>
                  </span>
                ))}
                {HERO_NOTICE.map((n, i) => (
                  <span key={'dup'+i} className="ph-hero-marquee-item">
                    <i className="fas fa-bullhorn"></i> {n}
                    <span className="ph-hero-marquee-dot"></span>
                  </span>
                ))}
              </div>
            </div>
            <h1>Learn Java, DSA & <span>Frontend</span></h1>
            <p>A complete learning platform with structured lessons for Java, DSA, HTML, CSS, JavaScript, and React. Practical examples, coding practice, interview preparation, and online compilers. <strong>CodeArena — 200+ practice questions</strong> with hints, solutions, and progress tracking.</p>
<div className="ph-hero-btns">
            <Link to="/java" className="ph-btn ph-btn-primary"><i className="fas fa-play"></i> Start Learning Java</Link>
            <Link to="/dsa" className="ph-btn ph-btn-outline ph-btn-outline--hero"><i className="fas fa-project-diagram"></i> Start DSA</Link>
            <Link to="/frontend/html" className="ph-btn ph-btn-outline ph-btn-outline--hero"><i className="fab fa-html5"></i> Learn Frontend</Link>
            <Link to="/codearena" className="ph-btn ph-btn-outline ph-btn-outline--hero"><i className="fas fa-trophy"></i> CodeArena</Link>
          </div>
          <div className="ph-hero-btns ph-hero-btns--second">
            <Link to="/ebook" className="ph-btn ph-btn-outline ph-btn-outline--hero"><i className="fas fa-book"></i> E-Book</Link>
            <Link to="/codesqz" className="ph-btn ph-btn-outline ph-btn-outline--hero"><i className="fas fa-book-open"></i> CodeSqz</Link>
          </div>
          </div>
          <div className="ph-hero-right">
            <div className="ph-hero-stats-card">
              <div className="ph-hero-stats-row">
                {STATS.map((s, i) => (
                  <div key={i} className="ph-hero-stat">
                    <span className="num">{s.num}</span>
                    <span className="label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ph-section" style={{ background: 'var(--card)' }}>
        <div className="ph-section-title">
          <h2>Popular Programming Courses</h2>
          <p>Master in-demand skills with our comprehensive course catalog</p>
        </div>
        <div className="ph-courses-grid">
          {COURSES.map((c, i) => (
            <div key={i} className="ph-course-card">
              <div className="ph-course-img" style={{ background: c.color }}>{c.icon}</div>
              <div className="ph-course-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="ph-course-meta">
                  <span>{c.level}</span>
                  <span className="ph-course-rating">★ {c.rating}</span>
                  <span>{c.students}</span>
                </div>
                <div className="ph-course-footer">
                  <span style={{ color: 'var(--text-muted)', fontSize: '.85rem' }}>{c.weeks}</span>
                  <Link to={c.to} className="ph-enroll-btn">Start Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <UpdateCycle />

      <section className="ph-section" style={{ background: 'var(--surface)' }}>
        <div className="ph-section-title">
          <h2>Why Choose JavaNest?</h2>
          <p>Experience the future of programming education with our innovative learning approach</p>
        </div>
        <div className="ph-features-grid">
          {FEATURES.map((f, i) => (
            <div key={i} className="ph-feature-card">
              <div className="ph-feature-icon" style={{ background: 'linear-gradient(135deg,var(--primary),var(--secondary))' }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ph-section" style={{ background: 'linear-gradient(135deg,var(--primary),var(--secondary))', color: '#fff' }}>
        <div className="ph-section-title">
          <h2 style={{ color: '#fff' }}>Platform Statistics</h2>
          <p style={{ color: 'rgba(255,255,255,.8)' }}>Join thousands of learners mastering programming</p>
        </div>
        <div className="ph-stats-row">
          {STATS.map((s, i) => (
            <div key={i} className="ph-stat-card">
              <div className="num">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ph-section" style={{ background: 'var(--card)' }}>
        <div className="ph-section-title">
          <h2>Browse by Category</h2>
          <p>Find the perfect learning path for your goals</p>
        </div>
        <div className="ph-category-row">
          {CATEGORIES.map((c, i) => (
            <Link key={i} to={c.to} className="ph-cat-chip" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '1.3rem' }}>{c.icon}</span>
              <span>{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" id="progress-section">
        <div className="section-title">
          <h2><i className="fas fa-chart-line" style={{ color: 'var(--primary)' }}></i> Your Progress</h2>
          <p>Track your learning journey</p>
        </div>
        <ProgressDashboard />
      </section>

      <section className="section" id="daily-challenge-section">
        <div className="section-title">
          <h2><i className="fas fa-fire-alt" style={{ color: '#e74c3c' }}></i> Daily Java Challenge</h2>
          <p>Solve today's coding problem and build your streak</p>
        </div>
        <DailyChallenge />
      </section>

      <section className="section" id="voice-reader-section">
        <div className="section-title">
          <h2><i className="fas fa-volume-high" style={{ color: 'var(--primary)' }}></i> Voice Reader — Read-Aloud Feature</h2>
          <p>Listen to any chapter out loud — Java, DSA, HTML, CSS, JavaScript & React</p>
        </div>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--surface) 0%, var(--card) 100%)', border: '2px solid var(--primary)', borderRadius: 'var(--radius)', padding: 36, display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 320px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary),var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                  <i className="fas fa-volume-high" style={{ fontSize: '1.6rem' }}></i>
                </div>
                <div>
                  <h3 style={{ margin: 0, color: 'var(--text)', fontSize: '1.25rem' }}>Listen While You Learn</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '.85rem' }}>Text-to-speech for every chapter across the whole platform</p>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: 18, fontSize: '.92rem', lineHeight: 1.6 }}>
                The Voice Reader converts any lesson into natural speech so you can study on the go — during a commute, workout, or chores. Pause, resume, and adjust the playback speed to match your pace.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
                <span style={{ background: 'rgba(39,174,96,.15)', color: '#27ae60', padding: '6px 14px', borderRadius: 20, fontSize: '.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}><i className="fas fa-check"></i> All 15 Java Chapters</span>
                <span style={{ background: 'rgba(39,174,96,.15)', color: '#27ae60', padding: '6px 14px', borderRadius: 20, fontSize: '.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}><i className="fas fa-check"></i> 30+ DSA Topics</span>
                <span style={{ background: 'rgba(39,174,96,.15)', color: '#27ae60', padding: '6px 14px', borderRadius: 20, fontSize: '.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}><i className="fas fa-check"></i> HTML, CSS, JS & React</span>
                <span style={{ background: 'rgba(39,174,96,.15)', color: '#27ae60', padding: '6px 14px', borderRadius: 20, fontSize: '.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}><i className="fas fa-check"></i> Interview Q&amp;A</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '.82rem', marginBottom: 0, lineHeight: 1.6 }}>
                <b>How to use:</b> Open any chapter and press the <b style={{ color: 'var(--primary)' }}><i className="fas fa-volume-high" style={{ color: 'var(--primary)' }}></i> Voice Reader</b> button in the bottom-right corner. Works offline — no internet required once the page is loaded.
              </p>
            </div>
            <div style={{ flex: '0 0 260px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
              <div style={{ position: 'relative', width: 96, height: 96 }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary),var(--secondary))', opacity: 0.25, animation: 'voiceHalo 2.4s ease-in-out infinite' }}></div>
                <div style={{ position: 'relative', width: 96, height: 96, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary),var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,.25)' }}>
                  <i className="fas fa-volume-high" style={{ fontSize: '2.4rem' }}></i>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '.78rem', margin: 0, textAlign: 'center' }}>Tap the button below to hear a demo</p>
              <button id="voice-reader-demo" style={{ background: 'linear-gradient(135deg,var(--primary),var(--secondary))', color: '#fff', border: 'none', borderRadius: 999, padding: '12px 26px', fontSize: '.95rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 6px 18px rgba(0,0,0,.2)' }}>
                <i className="fas fa-play"></i> Hear Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="codearena-section">
        <div className="section-title">
          <h2><i className="fas fa-trophy" style={{ color: 'var(--primary)' }}></i> CodeArena — 200 Practice Questions</h2>
          <p>Originally written coding & interview questions with hints, solutions, and progress tracking</p>
        </div>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: 'var(--card)', border: '2px solid var(--primary)', borderRadius: 'var(--radius)', padding: 32, marginBottom: 24 }}>
            <i className="fas fa-code" style={{ fontSize: '2.5rem', color: 'var(--primary)', display: 'block', marginBottom: 12 }}></i>
            <h3 style={{ marginBottom: 8, color: 'var(--text)' }}>200 Coding & Interview Practice Questions</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: '.9rem' }}>
              Covers HTML + CSS, JavaScript, React, Java Basics to Advanced, Arrays, Strings, Linked Lists, Stacks & Queues, Advanced DSA, and Mixed Interview Questions.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 16 }}>
              <span style={{ background: 'rgba(39,174,96,.15)', color: '#27ae60', padding: '4px 12px', borderRadius: 20, fontSize: '.75rem', fontWeight: 600 }}>Easy</span>
              <span style={{ background: 'rgba(37,99,235,.15)', color: '#2563eb', padding: '4px 12px', borderRadius: 20, fontSize: '.75rem', fontWeight: 600 }}>Medium</span>
              <span style={{ background: 'rgba(231,76,60,.15)', color: '#e74c3c', padding: '4px 12px', borderRadius: 20, fontSize: '.75rem', fontWeight: 600 }}>Hard</span>
              <span style={{ background: 'var(--surface)', color: 'var(--text-muted)', padding: '4px 12px', borderRadius: 20, fontSize: '.75rem' }}>12 Categories</span>
            </div>
            <Link to="/codearena" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', fontSize: '1rem' }}>
              <i className="fas fa-trophy"></i> Enter CodeArena
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '.82rem', marginTop: 16, marginBottom: 0 }}>
              <b>For coding in CodeArena use Laptop/PC with a keyboard. Mobile devices are not recommended for coding.</b>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="gamification-section">
        <div className="section-title">
          <h2><i className="fas fa-trophy" style={{ color: 'var(--primary)' }}></i> Your Achievements</h2>
          <p>Earn XP, build streaks, unlock badges</p>
        </div>
        <GamificationDashboard />
      </section>

      <section className="section" style={{ background: 'var(--card)' }}>
        <div className="section-title">
          <h2><i className="fas fa-newspaper" style={{ color: 'var(--primary)' }}></i> What's New</h2>
          <p>Latest updates and improvements</p>
        </div>
        <div className="whats-new-slider">
          <div className="whats-new-track" id="whats-new-track">
            {WHATS_NEW.map((w, i) => (
              <div key={i} className="whats-new-card">
                <div className="whats-new-card-date"><i className="fas fa-calendar"></i> {w.date}</div>
                <div className="whats-new-card-content">
                  <h4>{w.title}</h4>
                  <ul>
                    {w.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card)' }}>
        <div className="section-title">
          <h2><i className="fas fa-route" style={{ color: 'var(--primary)' }}></i> Java Developer Roadmap</h2>
          <p>Your path from beginner to job-ready Java developer</p>
        </div>
        <JavaRoadmapVisual />
      </section>

      <section className="section" style={{ background: 'var(--card)' }}>
        <div className="section-title">
          <h2><i className="fas fa-route" style={{ color: '#61dafb' }}></i> Frontend Developer Roadmap</h2>
          <p>Your path from beginner to job-ready frontend developer</p>
        </div>
        <div className="roadmap-visual" style={{ maxWidth: 600, margin: '0 auto' }}>
          {[
            ['HTML Basics', '/frontend/html'], ['CSS Fundamentals', '/frontend/css'],
            ['CSS Layout', '/frontend/css'], ['JavaScript Core', '/frontend/javascript'],
            ['Advanced JavaScript', '/frontend/javascript'], ['React Fundamentals', '/frontend/react'],
            ['React Advanced', '/frontend/react'], ['Projects', '/projects'],
            ['Interview Prep', '/interview']
          ].map(([title, to], i) => (
            <div key={i} className="roadmap-step-visual" onClick={() => navigate(to)}>
              <div className="step-num">{i + 1}</div>
              <div className="step-info">
                <h4>{title}</h4>
                <p>Build frontend skills step by step</p>
              </div>
              <i className="fas fa-check-circle step-check"></i>
            </div>
          ))}
          <div className="roadmap-connector"></div>
          <div className="roadmap-step-visual step-final">
            <div className="step-num"><i className="fas fa-rocket"></i></div>
            <div className="step-info">
              <h4>Job Ready!</h4>
              <p>Start your frontend career</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}