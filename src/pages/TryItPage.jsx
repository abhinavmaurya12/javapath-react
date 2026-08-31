import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { highlightJava } from '../utils/highlightJava'

const DEFAULT_CODE = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`

export default function TryItPage() {
  const [code, setCode] = useState(DEFAULT_CODE)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [running, setRunning] = useState(false)
  const edRef = useRef(null)

  useLayoutEffect(() => {
    const ed = edRef.current
    if (ed) ed.innerHTML = highlightJava(DEFAULT_CODE)
  }, [])

  useEffect(() => {
    const ed = edRef.current
    if (!ed) return
    if (document.activeElement === ed) return
    ed.innerHTML = highlightJava(code)
  }, [code])

  useEffect(() => {
    const ed = edRef.current
    if (ed) ed.focus()
  }, [])

  function readCode() {
    const ed = edRef.current
    if (!ed) return ''
    return (ed.innerText || ed.textContent || '').replace(/\r\n/g, '\n')
  }

  function onInput() {
    setCode(readCode())
  }

  function onKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault()
      document.execCommand('insertText', false, '    ')
      onInput()
    } else if (e.ctrlKey && e.key === 'Enter') {
      e.preventDefault()
      runCode()
    }
  }

  async function runCode() {
    if (running) return
    setRunning(true)
    setOutput('')
    setError('')
    try {
      const res = await fetch('https://codecompiler.forgesparse.com/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: 'java',
          version: '1.8.0',
          files: [{ name: 'Main.java', content: code }],
          stdin: input
        })
      })
      const data = await res.json()
      if (data.error) {
        setError(data.error)
      } else {
        setOutput(data.output || data.stdout || '')
        if (data.stderr) setError(prev => (prev ? prev + '\n' + data.stderr : data.stderr))
      }
    } catch (e) {
      setError('Network error: could not reach the compiler. Please try again.')
    } finally {
      setRunning(false)
    }
  }

  function resetCode() {
    setCode(DEFAULT_CODE)
    setInput('')
    setOutput('')
    setError('')
  }

  return (
    <div className="section" style={{ padding: '40px 20px 80px' }}>
      <div className="section-title">
        <h2><i className="fas fa-laptop-code" style={{ color: 'var(--primary)' }}></i> Try It — Java Compiler</h2>
        <p>Write, run, and test Java code right in your browser.</p>
      </div>
      <div className="playground" style={{ height: 'calc(100vh - 180px)', marginTop: 24 }}>
        <div className="playground-pane">
          <div className="pane-header">
            <h3><i className="fas fa-code"></i> Java Editor</h3>
            <div className="sample-programs">
              <button className="sample-btn" onClick={resetCode}>Reset</button>
            </div>
          </div>
          <div
            ref={edRef}
            className="code-highlight"
            contentEditable
            suppressContentEditableWarning
            onInput={onInput}
            onKeyDown={onKeyDown}
            spellCheck={false}
            style={{ height: 'calc(100% - 44px)', margin: 0, padding: 16, overflow: 'auto', whiteSpace: 'pre', wordBreak: 'normal' }}
          />
        </div>
        <div className="playground-pane">
          <div className="pane-header">
            <h3><i className="fas fa-terminal"></i> stdin</h3>
          </div>
          <textarea
            className="code-editor"
            value={input}
            onChange={e => setInput(e.target.value)}
            spellCheck={false}
            style={{ height: 'calc(22vh - 44px)', resize: 'vertical' }}
          />
          <div className="pane-header" style={{ borderTop: '1px solid var(--border)' }}>
            <h3><i className="fas fa-cogs"></i> Output</h3>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="run-btn" onClick={runCode} disabled={running}>
                {running ? <span className="running-indicator"></span> : <i className="fas fa-play"></i>} Run <span style={{ opacity: .7 }}>(Ctrl+Enter)</span>
              </button>
            </div>
          </div>
          <div
            className="output-area"
            style={{ height: 'calc(100% - 44px)' }}
          >
            {running ? (<span style={{ color: 'var(--primary)' }}>Running Java...</span>) : (output || error || (<span style={{ color: 'var(--code-text)', fontStyle: 'italic' }}>Output will appear here...</span>))}
          </div>
        </div>
      </div>
    </div>
  )
}