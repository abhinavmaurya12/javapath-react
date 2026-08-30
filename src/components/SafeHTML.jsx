import React, { useEffect, useRef } from 'react'

// Renders an HTML string and auto-attaches copy buttons + java-file coloring,
// exactly like the original code-utils.js addCopyButtons()/colorJavaFiles().
export default function SafeHTML({ html }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    attachCopyButtons(ref.current)
    colorJavaFiles(ref.current)
    // observe for dynamic content changes inside this container
    const mo = new MutationObserver(() => {
      attachCopyButtons(ref.current)
      colorJavaFiles(ref.current)
    })
    mo.observe(ref.current, { childList: true, subtree: true })
    return () => mo.disconnect()
  }, [html])

  return (
    <div
      ref={ref}
      className="safe-html-container"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

function attachCopyButtons(container) {
  const blocks = container.querySelectorAll('.code-block')
  blocks.forEach(function (block) {
    if (block.querySelector('.copy-btn')) return
    const btn = document.createElement('button')
    btn.className = 'copy-btn'
    btn.innerHTML = '<i class="fas fa-copy"></i> Copy'
    btn.addEventListener('click', function (e) {
      e.stopPropagation()
      const pre = block.querySelector('pre')
      let text = ''
      if (pre && window.__practiceCode && window.__practiceCode[pre.id]) {
        text = window.__practiceCode[pre.id]
      } else if (pre && pre.getAttribute('data-code')) {
        text = pre.getAttribute('data-code')
      } else {
        const code = block.querySelector('code') || pre
        if (!code) return
        text = code.textContent || code.innerText || ''
      }
      text = text.replace(/^\n+|\n+$/g, '')
      function done() {
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!'
        btn.classList.add('copied')
        setTimeout(function () {
          btn.innerHTML = '<i class="fas fa-copy"></i> Copy'
          btn.classList.remove('copied')
        }, 2000)
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {
          fallbackCopy(text, done)
        })
      } else {
        fallbackCopy(text, done)
      }
    })
    const header = block.querySelector('.code-header')
    if (header) header.appendChild(btn)
    else block.appendChild(btn)
  })
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

function colorJavaFiles(container) {
  container.querySelectorAll('.code-header span:first-child').forEach(function (span) {
    if (span.textContent.indexOf('.java') !== -1 && !span.classList.contains('java-file')) {
      span.classList.add('java-file')
    }
  })
}