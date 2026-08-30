import React, { useState, useEffect, useRef } from 'react'
import javaChatbotKnowledge from '../data/chatbotKnowledge'

// Lightweight keyword-based chatbot (mirrors chatbot-agent.js + chatbot-data.js logic)
export default function Chatbot() {
  const kb = javaChatbotKnowledge.keywords || javaChatbotKnowledge
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      html: `<div class="agent-avatar"><i class="fas fa-robot"></i></div><div class="agent-bubble">Hi! I'm your JavaNest assistant. I can help you with:<br><br>
        <span class="agent-tag" onclick="window.__agentAsk('What topics are covered?')">Topics</span>
        <span class="agent-tag" onclick="window.__agentAsk('Show me Java code examples')">Code Examples</span>
        <span class="agent-tag" onclick="window.__agentAsk('How to use this website?')">How to Use</span>
        <span class="agent-tag" onclick="window.__agentAsk('What are practice programs?')">Practice Programs</span>
        <span class="agent-tag" onclick="window.__agentAsk('Tell me about OOP')">OOP Concepts</span>
        <span class="agent-tag" onclick="window.__agentAsk('Explain multithreading')">Multithreading</span>
        <span class="agent-tag" onclick="window.__agentAsk('Show exception handling code')">Exceptions</span>
        <span class="agent-tag" onclick="window.__agentAsk('What interview questions are available?')">Interview Q&A</span>
      </div>`
    }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    window.__agentAsk = (q) => { setInput(q); sendMsg(q) }
    window.__agentToggle = () => setOpen(o => !o)
    return () => {
      delete window.__agentAsk
      delete window.__agentToggle
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  function stripHtml(html) {
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }

  function agentReply(q) {
    const ql = q.toLowerCase()
    // keyword matching
    for (const key of Object.keys(kb)) {
      if (ql.includes(key.toLowerCase())) {
        const entry = kb[key]
        return '<strong>' + entry.title + '</strong><br>' + entry.content
      }
    }
    if (ql.includes('hello') || ql.includes('hi')) return "Hello! Ask me anything about Java, DSA, or frontend."
    if (ql.includes('thank')) return "You're welcome! Happy learning."
    return "I'm a keyword-based assistant. Try asking about: Java basics, OOP, DSA, arrays, strings, exceptions, multithreading, or frontend topics."
  }

  function sendMsg(q) {
    const text = (q || input).trim()
    if (!text) return
    setMessages(m => [...m, { type: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      const reply = agentReply(text)
      setMessages(m => [...m, { type: 'bot', html: `<div class="agent-avatar"><i class="fas fa-robot"></i></div><div class="agent-bubble">${reply}</div>` }])
      setTyping(false)
    }, 600)
  }

  return (
    <div id="agentWidget" style={{ display: 'flex', position: 'fixed', bottom: 24, right: 24, zIndex: 10000 }}>
      <div id="agentBubble" onClick={() => setOpen(o => !o)} style={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', cursor: 'pointer', boxShadow: '0 4px 20px rgba(248,152,32,.4)', transition: 'all .3s', position: 'relative' }}>
        <i className="fas fa-robot"></i>
        <span className="agent-pulse" style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px solid var(--primary)', animation: 'agentPulse 2s infinite' }}></span>
      </div>
      <div id="agentPanel" style={{ position: 'absolute', bottom: 72, right: 0, width: 380, maxHeight: 520, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, boxShadow: '0 12px 40px rgba(0,0,0,.3)', display: open ? 'flex' : 'none', flexDirection: 'column', overflow: 'hidden' }}>
        <div id="agentHeader" style={{ padding: '14px 16px', background: 'var(--card)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <i className="fas fa-robot" style={{ fontSize: '1.3rem', color: 'var(--primary)' }}></i>
            <div>
              <div style={{ fontWeight: 700, fontSize: '.95rem' }}>JavaNest Assistant</div>
              <div style={{ fontSize: '.75rem', color: '#4caf50' }}>Online — Ask me anything</div>
            </div>
          </div>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: '1.1rem', cursor: 'pointer', padding: 4 }}><i className="fas fa-times"></i></button>
        </div>
        <div id="agentMessages" style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12, maxHeight: 360, background: 'var(--bg)' }}>
          {messages.map((m, i) => (
            <div key={i} className={'agent-msg ' + m.type}>
              {m.type === 'bot' ? (
                <div className="agent-avatar"><i className="fas fa-robot"></i></div>
              ) : (
                <div className="agent-avatar" style={{ background: 'var(--primary)', color: '#fff' }}><i className="fas fa-user"></i></div>
              )}
              {m.type === 'bot' ? (
                <div className="agent-bubble" dangerouslySetInnerHTML={{ __html: m.html }} />
              ) : (
                <div className="agent-bubble" style={{ background: 'var(--primary)', color: '#fff', borderBottomRightRadius: 4 }}>{m.text}</div>
              )}
            </div>
          ))}
          {typing && (
            <div className="agent-msg bot">
              <div className="agent-avatar"><i className="fas fa-robot"></i></div>
              <div className="agent-typing" style={{ padding: '10px 14px' }}><span></span><span></span><span></span></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div id="agentInput" style={{ padding: 12, borderTop: '1px solid var(--border)', display: 'flex', gap: 8, background: 'var(--card)' }}>
          <input
            type="text"
            id="agentText"
            placeholder="Ask about Java, DSA, HTML, CSS, JS, React..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') sendMsg() }}
          />
          <button onClick={() => sendMsg()}><i className="fas fa-paper-plane"></i></button>
        </div>
      </div>
    </div>
  )
}