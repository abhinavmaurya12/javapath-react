import React from 'react'
import { Link } from 'react-router-dom'

const JAVA_STEPS = [
  { n: 1, title: 'Introduction to Java', desc: 'What is Java, features, JVM/JRE/JDK, first program', link: '/java', level: 'Beginner' },
  { n: 2, title: 'Constants, Variables & Data Types', desc: 'All data types, operators, type casting, keywords', link: '/java', level: 'Beginner' },
  { n: 3, title: 'Flow Control', desc: 'if/else, switch, for/while loops, break/continue', link: '/java', level: 'Beginner' },
  { n: 4, title: 'Objects and Classes', desc: 'OOP basics, class design, object creation', link: '/java', level: 'Beginner' },
  { n: 5, title: 'Constructors', desc: 'Default, parameterized, copy constructors, static, this', link: '/java', level: 'Beginner' },
  { n: 6, title: 'Inheritance', desc: 'Types of inheritance, super keyword, aggregation', link: '/java', level: 'Intermediate' },
  { n: 7, title: 'Polymorphism', desc: 'Compile-time & runtime polymorphism, upcasting', link: '/java', level: 'Intermediate' },
  { n: 8, title: 'Abstraction', desc: 'Abstract classes, interfaces, when to use which', link: '/java', level: 'Intermediate' },
  { n: 9, title: 'Encapsulation', desc: 'Access modifiers, data hiding, getters/setters', link: '/java', level: 'Intermediate' },
  { n: 10, title: 'Java Arrays', desc: 'Single & multidimensional arrays, cloning', link: '/java', level: 'Intermediate' },
  { n: 11, title: 'Object and Math Class', desc: 'Object methods, Math class, wrapper classes', link: '/java', level: 'Intermediate' },
  { n: 12, title: 'Recursion', desc: 'Recursive methods, factorial, Fibonacci', link: '/java', level: 'Intermediate' },
  { n: 13, title: 'Java String', desc: 'String immutability, StringBuffer, StringBuilder', link: '/java', level: 'Intermediate' },
  { n: 14, title: 'Exception Handling & Multithreading', desc: 'Try-catch, custom exceptions, Thread class, deadlock', link: '/java', level: 'Advanced' },
  { n: 15, title: 'Stream and File', desc: 'Byte/character streams, file I/O, File class', link: '/java', level: 'Advanced' }
]

export default function RoadmapPage() {
  return (
    <div>
      <div className="section">
        <div className="section-title">
          <h2><i className="fas fa-map" style={{ color: 'var(--primary)' }}></i> Complete Java Learning Roadmap</h2>
          <p>Follow this path from beginner to advanced Java developer</p>
        </div>
        <div className="roadmap">
          {JAVA_STEPS.map(step => (
            <div className="roadmap-step" key={step.n}>
              <div className="roadmap-dot">{step.n}</div>
              <div className="roadmap-info">
                <h3><Link to={step.link}>{step.title}</Link></h3>
                <p>{step.desc}</p>
                <span className={'badge ' + (step.level === 'Beginner' ? 'beginner' : step.level === 'Intermediate' ? 'intermediate' : 'advanced')}>{step.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section" style={{ background: 'var(--card)' }}>
        <div className="section-title">
          <h2><i className="fas fa-project-diagram" style={{ color: '#27ae60' }}></i> DSA Learning Roadmap</h2>
          <p>Master Data Structures & Algorithms step by step</p>
        </div>
        <div className="roadmap">
          {[
            ['Java Basics for DSA', '/dsa'], ['Complexity Analysis', '/dsa'], ['Arrays', '/dsa'],
            ['Strings', '/dsa'], ['Sorting', '/dsa'], ['Recursion & Backtracking', '/dsa'],
            ['Linked Lists', '/dsa'], ['Stacks, Queues & Deque', '/dsa'], ['Hashing', '/dsa'],
            ['Trees & BST', '/dsa'], ['Heaps, Trie & Graphs', '/dsa'],
            ['Greedy & Dynamic Programming', '/dsa'], ['Bit Manipulation & Math', '/dsa'],
            ['DSA Patterns', '/dsa']
          ].map(([title, link], i) => (
            <div className="roadmap-step" key={i}>
              <div className="roadmap-dot">{i + 1}</div>
              <div className="roadmap-info">
                <h3><Link to={link}>{title}</Link></h3>
                <p>Master this topic with examples and practice</p>
                <span className={'badge ' + (i < 5 ? 'beginner' : i < 10 ? 'intermediate' : 'advanced')}>{i < 5 ? 'Beginner' : i < 10 ? 'Intermediate' : 'Advanced'}</span>
              </div>
            </div>
          ))}
          <div className="roadmap-step" style={{ '--final': true }}>
            <div className="roadmap-dot"><i className="fas fa-check-circle"></i></div>
            <div className="roadmap-info">
              <h3>DSA Mastered!</h3>
              <p>Now solve coding problems</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section" style={{ background: 'var(--card)' }}>
        <div className="section-title">
          <h2><i className="fas fa-route" style={{ color: '#61dafb' }}></i> Frontend Developer Roadmap</h2>
          <p>HTML → CSS → JavaScript → React → Projects → Job Ready</p>
        </div>
        <div className="roadmap">
          {[
            ['HTML Basics', '/frontend/html'], ['CSS Fundamentals', '/frontend/css'],
            ['CSS Layout', '/frontend/css'], ['JavaScript Core', '/frontend/javascript'],
            ['Advanced JavaScript', '/frontend/javascript'], ['React Fundamentals', '/frontend/react'],
            ['React Advanced', '/frontend/react'], ['Projects', '/projects'],
            ['Interview Prep', '/interview']
          ].map(([title, link], i) => (
            <div className="roadmap-step" key={i}>
              <div className="roadmap-dot">{i + 1}</div>
              <div className="roadmap-info">
                <h3><Link to={link}>{title}</Link></h3>
                <p>Build frontend skills step by step</p>
              </div>
            </div>
          ))}
          <div className="roadmap-step" style={{ '--final': true }}>
            <div className="roadmap-dot"><i className="fas fa-rocket"></i></div>
            <div className="roadmap-info">
              <h3>Job Ready!</h3>
              <p>Start your frontend career</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}