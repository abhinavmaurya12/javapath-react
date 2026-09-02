import React from 'react'
import { Link } from 'react-router-dom'

export default function CodeArenaPage() {
  return (
    <div id="page-codearena" style={{ maxWidth: 900, margin: '0 auto', padding: '48px 20px 80px' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: 8, color: 'var(--text)' }}>
        {/* <i className="fas fa-trophy" style={{ fontSize: '3rem', color: 'var(--primary)', display: 'block', marginBottom: 16 }}></i> */}
         🏆 CodeArena — 200 Practice Questions</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          Originally written coding & interview questions with hints, solutions, and progress tracking
        </p>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          <b>For coding in CodeArena use Laptop/PC with a keyboard. Mobile devices are not recommended for coding.</b>
        </p>
      </div>

      <div style={{ background: 'var(--card)', border: '2px solid var(--primary)', borderRadius: 'var(--radius)', padding: 40, marginBottom: 32 }}>
        <h2 style={{ marginBottom: 12, color: 'var(--text)' }}>200 Coding & Interview Practice Questions</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24, fontSize: '.95rem', lineHeight: 1.6 }}>
          Covers HTML + CSS, JavaScript, React, Java Basics to Advanced, Arrays, Strings, Linked Lists, Stacks & Queues, Advanced DSA, and Mixed Interview Questions.
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 28 }}>
          <span style={{ background: 'rgba(39,174,96,.15)', color: '#27ae60', padding: '6px 16px', borderRadius: 20, fontSize: '.8rem', fontWeight: 600 }}>Easy</span>
          <span style={{ background: 'rgba(241,196,15,.15)', color: '#f1c40f', padding: '6px 16px', borderRadius: 20, fontSize: '.8rem', fontWeight: 600 }}>Medium</span>
          <span style={{ background: 'rgba(231,76,60,.15)', color: '#e74c3c', padding: '6px 16px', borderRadius: 20, fontSize: '.8rem', fontWeight: 600 }}>Hard</span>
          <span style={{ background: 'var(--surface)', color: 'var(--text-muted)', padding: '6px 16px', borderRadius: 20, fontSize: '.8rem' }}>12 Categories</span>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/coding-practice" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 36px', fontSize: '1rem' }}>
            <i className="fas fa-trophy"></i> Enter CodeArena
          </Link>
          <Link to="/tryit" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 36px', fontSize: '1rem' }}>
            <i className="fas fa-laptop-code"></i> Open Compiler
          </Link>
        </div>
      </div>
    </div>
  )
}