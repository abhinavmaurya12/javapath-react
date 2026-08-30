import React from 'react'
import { Link } from 'react-router-dom'

const PROJECTS = [
  { id: 1, title: 'Calculator', desc: 'A simple calculator application with basic arithmetic operations', level: 'Beginner' },
  { id: 2, title: 'ATM System', desc: 'Simulate ATM operations like withdraw, deposit, and balance check', level: 'Beginner' },
  { id: 3, title: 'Number Guessing Game', desc: 'Interactive game where users guess a random number', level: 'Beginner' },
  { id: 4, title: 'Library Management', desc: 'Manage books, members, and borrowing operations', level: 'Intermediate' },
  { id: 5, title: 'Bank Management', desc: 'Full banking system with accounts, transactions, and transfers', level: 'Intermediate' },
  { id: 6, title: 'Employee Management', desc: 'Manage employee records with CRUD operations', level: 'Intermediate' }
]

export default function ProjectsPage() {
  return (
    <div className="section" style={{ paddingTop: 100 }}>
      <div className="section-title">
        <h2><i className="fas fa-project-diagram" style={{ color: 'var(--primary)' }}></i> Java Projects</h2>
        <p>Build real-world applications with Java</p>
      </div>
      <div className="project-grid" style={{ maxWidth: 1000, margin: '0 auto', padding: '0 20px' }}>
        {PROJECTS.map(p => (
          <div key={p.id} className="project-card">
            <div className="project-card-top">
              <i className={'fas ' + (p.id === 1 ? 'fa-calculator' : p.id === 2 ? 'fa-university' : p.id === 3 ? 'fa-gamepad' : p.id === 4 ? 'fa-book' : p.id === 5 ? 'fa-piggy-bank' : 'fa-users')}></i>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
            <div style={{ padding: '0 20px 20px' }}><span className={'badge ' + (p.level === 'Beginner' ? 'beginner' : 'intermediate')}>{p.level}</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}