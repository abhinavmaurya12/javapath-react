import React, { useState } from 'react'

export default function CodeBlock({ code, header = '', language = 'Java', className = '' }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    const text = (code || '').replace(/^\n+|\n+$/g, '')
    function done() {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        try { document.execCommand('copy') } catch (e) {}
        document.body.removeChild(ta)
        done()
      })
    } else {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch (e) {}
      document.body.removeChild(ta)
      done()
    }
  }

  return (
    <div className={'code-block ' + className}>
      {header && (
        <div className="code-header">
          <span>{header}</span>
          <span>{language}</span>
        </div>
      )}
      <div style={{ position: 'relative' }}>
        <pre style={{ margin: 0 }}><code dangerouslySetInnerHTML={{ __html: code || '' }} /></pre>
        <button
          className={'copy-btn' + (copied ? ' copied' : '')}
          onClick={copy}
          style={{ position: 'absolute', top: 8, right: 8 }}
        >
          <i className={'fas ' + (copied ? 'fa-check' : 'fa-copy')}></i> {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}