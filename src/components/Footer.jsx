import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h4><i className="fa-brands fa-java"></i> JavaNest</h4>
          <p>Learn Java, DSA &amp; Frontend</p>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '.85rem', marginTop: 8 }}>A complete learning platform with structured lessons for Java, DSA, HTML, CSS, JavaScript, and React. Practical examples, coding practice, interview preparation, and online compilers. CodeArena — 200+ practice questions with hints, solutions, and progress tracking.</p>
          <div className="footer-social">
            <a href="https://github.com/abhinavmaurya12" target="_blank" rel="noopener"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/abhinavmaurya1/" target="_blank" rel="noopener"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div>
          <h4>Learn</h4>
          <Link to="/java">Java Chapters</Link>
          <Link to="/dsa">DSA Topics</Link>
          <Link to="/frontend/html">HTML Track</Link>
          <Link to="/frontend/css">CSS Track</Link>
          <Link to="/roadmap">Learning Roadmap</Link>
          <Link to="/practice">Practice Code</Link>
          <Link to="/coding-practice">CodeArena</Link>
        </div>
        <div>
          <h4>Prepare</h4>
          <Link to="/interview">Interview Q&A</Link>
          <Link to="/practice">Coding Practice</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/javapro">Java Book</Link>
        </div>
        <div>
          <h4>Resources</h4>
          <Link to="/javapro">JavaBook</Link>
          <Link to="/ebook">E-Book</Link>
          <Link to="/tryit">Compiler</Link>
          <Link to="/roadmap">Roadmap</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 JavaNest. All rights reserved. Built for learning Java from scratch. with Abhinav Maurya</p>
      </div>
    </footer>
  )
}