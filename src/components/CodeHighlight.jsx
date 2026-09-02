import React, { useMemo, useState } from 'react'

// Lightweight client-side syntax highlighter for Java, JSX, HTML, CSS, JavaScript
export default function CodeHighlight({ code, language = 'Java', header = '' }) {
  const [copied, setCopied] = useState(false)
  const html = useMemo(() => highlight(code, language), [code, language])

  function copy() {
    const text = (code || '').replace(/^\n+|\n+$/g, '')
    function done() {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () {
        fallbackCopy(text, done)
      })
    } else {
      fallbackCopy(text, done)
    }
  }

  function fallbackCopy(text, done) {
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

  return (
    <div className="code-block">
      {header && (
        <div className="code-header">
          <span className={language === 'Java' ? 'java-file' : ''}>{header}</span>
          <span>{language}</span>
        </div>
      )}
      <div style={{ position: 'relative', maxHeight: 600, overflowY: 'auto', overflowX: 'auto' }}>
        <pre style={{ margin: 0, whiteSpace: 'pre', wordBreak: 'normal' }}><code dangerouslySetInnerHTML={{ __html: html || escapeHtml(code) }} /></pre>
        <button
          className={'copy-btn' + (copied ? ' copied' : '')}
          onClick={copy}
          style={{ position: 'sticky', top: 8, right: 8, float: 'right', margin: '8px 0 0 0' }}
        >
          <i className={'fas ' + (copied ? 'fa-check' : 'fa-copy')}></i> {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function highlight(code, lang) {
  if (!code) return ''
  let src = code.replace(/^\n+|\n+$/g, '')
  // Escape HTML first
  src = escapeHtml(src)

  if (lang === 'Java') return highlightJava(src)
  if (lang === 'JSX' || lang === 'JavaScript') return highlightJS(src)
  if (lang === 'HTML') return highlightHtml(src)
  if (lang === 'CSS') return highlightCss(src)
  return src
}

function highlightJava(src) {
  const tokens = [
    { re: /\/\/.*$/gm, cls: 'cmt' },
    { re: /\/\*[\s\S]*?\*\//g, cls: 'cmt' },
    { re: /\b(true|false|null|void|char|byte|short|int|long|float|double|boolean)\b/g, cls: 'kw' },
    { re: /\b(class|interface|enum|extends|implements|instanceof|new|return|public|private|protected|static|final|abstract|synchronized|strictfp|transient|volatile|native|assert|default|do|if|else|switch|case|break|continue|for|while|try|catch|finally|throw|throws|import|package|super|this)\b/g, cls: 'kw' },
    { re: /"[^"]*"/g, cls: 'str' },
    { re: /'[^']*'/g, cls: 'str' },
    { re: /\b\d+[lLfFdD]?\b/g, cls: 'num' },
    { re: /\b[A-Z][a-zA-Z0-9_]*\b/g, cls: 'cls' }
  ]
  return applyTokens(src, tokens)
}

function highlightJS(src) {
  const tokens = [
    { re: /\/\/.*$/gm, cls: 'cmt' },
    { re: /\/\*[\s\S]*?\*\//g, cls: 'cmt' },
    { re: /\b(true|false|null|undefined|void|let|const|var|function|return|if|else|switch|case|break|continue|for|while|do|try|catch|finally|throw|new|typeof|instanceof|class|extends|import|export|default|from|as|async|await|yield|delete|in|of|with)\b/g, cls: 'kw' },
    { re: /"[^"]*"/g, cls: 'str' },
    { re: /'[^']*'/g, cls: 'str' },
    { re: /`[^`]*`/g, cls: 'str' },
    { re: /\b\d+\b/g, cls: 'num' },
    { re: /\b[A-Z][a-zA-Z0-9_]*\b/g, cls: 'cls' }
  ]
  return applyTokens(src, tokens)
}

function highlightHtml(src) {
  const tokens = [
    { re: /&lt;!--[\s\S]*?--&gt;/g, cls: 'cmt' },
    { re: /&lt;\/?[a-zA-Z][^&]*&gt;/g, cls: 'cls' },
    { re: /&lt;!--[\s\S]*?--&gt;/g, cls: 'cmt' }
  ]
  let out = src
  // First escape any remaining < > that are not part of tags
  // We already escaped HTML, so tags are like &lt;tag&gt;
  const parts = []
  let i = 0
  const tagRe = /(&lt;\/?[a-zA-Z][^&]*&gt;)/g
  let m
  while ((m = tagRe.exec(out)) !== null) {
    parts.push(escapeHtml(out.slice(i, m.index)))
    parts.push('<span class="cls">' + m[0] + '</span>')
    i = m.index + m[0].length
  }
  parts.push(escapeHtml(out.slice(i)))
  return parts.join('')
}

function highlightCss(src) {
  const tokens = [
    { re: /\/\*[\s\S]*?\*\//g, cls: 'cmt' },
    { re: /#[a-fA-F0-9]{3,8}\b/g, cls: 'num' },
    { re: /\b(\d+)(px|em|rem|%|vh|vw|s|ms)?\b/g, cls: 'num' },
    { re: /[a-zA-Z-]+(?=\s*:)/g, cls: 'mth' }
  ]
  return applyTokens(src, tokens)
}

function applyTokens(src, tokens) {
  const result = []
  let i = 0
  while (i < src.length) {
    let matched = false
    for (const t of tokens) {
      t.re.lastIndex = 0
      const m = t.re.exec(src.slice(i))
      if (m && m.index === 0) {
        result.push('<span class="' + t.cls + '">' + escapeHtml(m[0]) + '</span>')
        i += m[0].length
        matched = true
        break
      }
    }
    if (!matched) {
      result.push(escapeHtml(src[i]))
      i++
    }
  }
  return result.join('')
}