import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useProgressContext } from '../contexts/ProgressContext'
import ProgressDashboard from '../components/ProgressDashboard'
import DailyChallenge from '../components/DailyChallenge'
import GamificationDashboard from '../components/GamificationDashboard'
import WhyJavaNest from '../components/WhyJavaNest'
import JavaRoadmapVisual from '../components/JavaRoadmapVisual'

const WHATS_NEW = [
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

export default function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__nav = (to) => navigate(to)
    return () => { delete window.__nav }
  }, [navigate])

  return (
    <div id="page-home">
      <section className="hero">
        <div className="hero-content">
          <h1>Learn Java, DSA & <span>Frontend</span></h1>
          <p>A complete learning platform with structured lessons for Java, DSA, HTML, CSS, JavaScript, and React. Practical examples, coding practice, interview preparation, and online compilers.</p>
          <div className="hero-btns">
            <Link to="/java" className="btn btn-primary"><i className="fas fa-play"></i> Start Learning Java</Link>
            <Link to="/dsa" className="btn btn-secondary"><i className="fas fa-project-diagram"></i> Start DSA</Link>
            <Link to="/frontend/html" className="btn btn-outline"><i className="fab fa-html5"></i> Learn Frontend</Link>
            <Link to="/tryit" className="btn btn-outline"><i className="fas fa-laptop-code"></i> Start Coding</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="stat-num">15+</span><span className="stat-label">Java Chapters</span></div>
            <div className="hero-stat"><span className="stat-num">30+</span><span className="stat-label">DSA Topics</span></div>
            <div className="hero-stat"><span className="stat-num">375+</span><span className="stat-label">Java Programs</span></div>
            <div className="hero-stat"><span className="stat-num">30+</span><span className="stat-label">Frontend Chapters</span></div>
            <div className="hero-stat"><span className="stat-num">100+</span><span className="stat-label">Interview Q&A</span></div>
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
        <div className="whats-new-scroll">
          <div className="whats-new-cards">
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