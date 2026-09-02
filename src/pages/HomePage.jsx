import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import ProgressDashboard from '../components/ProgressDashboard'
import DailyChallenge from '../components/DailyChallenge'
import GamificationDashboard from '../components/GamificationDashboard'
import WhyJavaNest from '../components/WhyJavaNest'
import JavaRoadmapVisual from '../components/JavaRoadmapVisual'

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
  'New: Voice Reader for all chapters — read-aloud feature',
  'New: CodeArena 200+ coding & practice questions',
  'New: Array Core Interview Questions Phase 2 (70 questions)',
  'New: Added Pattern Questions Phase 3 (43 questions)'
]

export default function HomePage() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768)

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

useEffect(() => {
    window.__nav = (to) => navigate(to)
    return () => { delete window.__nav }
  }, [navigate])

  function scrollCards(dir) {
    const track = document.getElementById('whats-new-track')
    if (!track) return
    const card = track.querySelector('.whats-new-card')
    const amount = card ? card.offsetWidth + 20 : 320
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <div id="page-home">
      <section className="hero">
        <div className="hero-aurora"></div>
        <div className="hero-cloud" aria-hidden="true">
          <div className="hero-cloud-inner">
            <span className="cc cc-1">{}</span>
            <span className="cc cc-2">[]</span>
            <span className="cc cc-3">()</span>
            <span className="cc cc-4">;</span>
            <span className="cc cc-5">&lt;&gt;</span>
            <span className="cc cc-6">=&gt;</span>
            <span className="cc cc-7">+</span>
            <span className="cc cc-8">{}</span>
            <span className="cc cc-9">[]</span>
            <span className="cc cc-10">()</span>
            <span className="cc cc-11">;</span>
            <span className="cc cc-12">&lt;&gt;</span>
          </div>
          <span className="hero-cloud-cut cut-top"></span>
          <span className="hero-cloud-cut cut-bottom"></span>
          <span className="hero-cloud-cut cut-left"></span>
          <span className="hero-cloud-cut cut-right"></span>
        </div>
        <div className="hero-marquee" aria-hidden="true">
          <div className="hero-marquee-track">
            {HERO_NOTICE.map((n, i) => (
              <span key={i} className="hero-marquee-item">
                <i className="fas fa-bullhorn"></i> {n}
                <span className="hero-marquee-dot"></span>
              </span>
            ))}
            {HERO_NOTICE.map((n, i) => (
              <span key={'dup'+i} className="hero-marquee-item">
                <i className="fas fa-bullhorn"></i> {n}
                <span className="hero-marquee-dot"></span>
              </span>
            ))}
          </div>
        </div>
        <div className="hero-content">
          <h1>Learn Java, DSA & <span>Frontend</span></h1>
          <p>A complete learning platform with structured lessons for Java, DSA, HTML, CSS, JavaScript, and React. Practical examples, coding practice, interview preparation, and online compilers. <strong>CodeArena — 200+ practice questions</strong> with hints, solutions, and progress tracking.</p>
          <div className="hero-btns">
            <Link to="/java" className="btn btn-primary"><i className="fas fa-play"></i> Start Learning Java</Link>
            <Link to="/dsa" className="btn btn-secondary"><i className="fas fa-project-diagram"></i> Start DSA</Link>
            <Link to="/codearena" className="btn btn-primary"><i className="fas fa-trophy"></i> CodeArena</Link>
            <Link to="/frontend/html" className="btn btn-outline"><i className="fab fa-html5"></i> Learn Frontend</Link>
            {!isMobile && <Link to="/tryit" className="btn btn-outline"><i className="fas fa-laptop-code"></i> Start Coding</Link>}
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><Link to="/java" style={{ color: 'inherit', textDecoration: 'none' }}><span className="stat-num">15+</span><span className="stat-label">Java Chapters</span></Link></div>
            <div className="hero-stat"><Link to="/dsa" style={{ color: 'inherit', textDecoration: 'none' }}><span className="stat-num">30+</span><span className="stat-label">DSA Topics</span></Link></div>
            <div className="hero-stat"><Link to="/practice" style={{ color: 'inherit', textDecoration: 'none' }}><span className="stat-num">375+</span><span className="stat-label">Java Programs</span></Link></div>
            <div className="hero-stat"><Link to="/frontend/html" style={{ color: 'inherit', textDecoration: 'none' }}><span className="stat-num">30+</span><span className="stat-label">Frontend Chapters</span></Link></div>
            <div className="hero-stat"><Link to="/interview" style={{ color: 'inherit', textDecoration: 'none' }}><span className="stat-num">100+</span><span className="stat-label">Interview Q&A</span></Link></div>
            <div className="hero-stat"><Link to="/codearena" style={{ color: 'inherit', textDecoration: 'none' }}><span className="stat-num">200+</span><span className="stat-label">CodeArena</span></Link></div>
          </div>
          <div className="hero-link"><Link to="/roadmap">View Roadmap <i className="fas fa-arrow-right"></i></Link></div>
          <div className="hero-code">
            <div className="code-block">
              <div className="code-header"><span> HelloWorld.java</span><span>Java</span></div>
              <pre><code><span className="kw">public class</span> <span className="cls">HelloWorld</span> &#123;
    <span className="kw">public static void</span> <span className="mth">main</span>(String[] args) &#123;
        System.out.<span className="mth">println</span>(<span className="str">"Hello, World!"</span>);
    &#125;
&#125;</code></pre>
            </div>
          </div>
        </div>
      </section>

      <section className="update-cycle">
        <div className="update-cycle-inner">
          <div className="cycle-badge"><i className="fas fa-sync-alt fa-spin"></i> 10-Day Update Cycle</div>
          <h2 className="cycle-heading">Fresh Content Every <span className="cycle-highlight">10 Days</span></h2>
          <p className="cycle-sub">We research, write, and publish new topics on a rolling schedule so you always have something new to learn.</p>
          <div className="cycle-timeline">
            {['Research & Outline','Write Concepts','Add Code Examples','Review & Diagrams','Publish & Notify','Gather Feedback','Update Practice','Fix Issues','Prepare Next','Launch Update'].map((t, i) => (
              <div key={i} className="cycle-day" style={{ '--delay': i }}>
                <div className="day-dot"></div>
                <div className="day-card">
                  <span className="day-label">Day {i + 1}</span>
                  <span className="day-task">{t}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="cycle-cta">
            <Link to="/java" className="btn btn-primary"><i className="fas fa-bell"></i> Start Learning Now</Link>
          </div>
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
              <span style={{ background: 'rgba(241,196,15,.15)', color: '#f1c40f', padding: '4px 12px', borderRadius: 20, fontSize: '.75rem', fontWeight: 600 }}>Medium</span>
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

      <section className="section">
        <div className="section-title">
          <h2>Why JavaNest?</h2>
          <p>Everything you need to master Java programming in one place</p>
        </div>
        <WhyJavaNest />
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
          <div className="whats-new-nav">
            <button type="button" aria-label="Previous" onClick={() => scrollCards(-1)}><i className="fas fa-chevron-left"></i></button>
            <button type="button" aria-label="Next" onClick={() => scrollCards(1)}><i className="fas fa-chevron-right"></i></button>
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