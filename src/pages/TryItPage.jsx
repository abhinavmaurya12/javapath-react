import React, { useEffect, useRef, useState } from 'react'

export default function TryItPage() {
  const iframeRef = useRef(null)
  const [code, setCode] = useState(`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`)
  const [output, setOutput] = useState('Output will appear here...')

  function runCode() {
    setOutput('Running Java code... (Note: client-side Java execution requires an online compiler)')
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden', paddingTop: 64, boxSizing: 'border-box' }}>
      <iframe
        ref={iframeRef}
        id="tryItFrame"
        src="https://onecompiler.com/java"
        style={{ width: '100%', height: 'calc(100vh + 48px)', border: 'none', marginTop: -48 }}
        allow="clipboard-write"
        loading="lazy"
      ></iframe>
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', padding: '4px 16px', fontSize: '.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface)', borderTop: '1px solid var(--border)', zIndex: 1001 }}>
        <i className="fas fa-keyboard" style={{ color: 'var(--primary)' }}></i> For run <button className="hint-btn"><span>Ctrl</span>+<span>Enter</span></button>
      </div>
    </div>
  )
}