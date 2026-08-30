import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h4><i className="fa-brands fa-java"></i> JavaNest</h4>
          <p>Learn Java, DSA & Frontend Development.</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '.85rem', marginTop: 8 }}>A complete learning platform for Java, DSA, HTML, CSS, JavaScript, and React.</p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-discord"></i></a>
          </div>
        </div>
        <div>
          <h4>Learn</h4>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/java">Java Chapters</Link></a>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/dsa">DSA Topics</Link></a>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/frontend/html">HTML Track</Link></a>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/frontend/css">CSS Track</Link></a>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/roadmap">Learning Roadmap</Link></a>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/practice">Practice Code</Link></a>
        </div>
        <div>
          <h4>Prepare</h4>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/interview">Interview Q&A</Link></a>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/practice">Coding Practice</Link></a>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/projects">Projects</Link></a>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/javapro">Java Book</Link></a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/javapro">JavaBook</Link></a>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/tryit">Compiler</Link></a>
          <a href="#" onClick={e => { e.preventDefault() }}><Link to="/roadmap">Roadmap</Link></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 JavaNest. All rights reserved. Built for learning Java from scratch. with Abhinav Maurya</p>
      </div>
    </footer>
  )
}