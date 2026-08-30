// Lightweight client-side Java syntax highlighter (no dependencies).
// Wraps tokens in <span class="tok-..."> for CSS coloring.

const TOKENS = [
  { type: 'str', re: /"(?:\\.|[^"\\])*"/ },
  { type: 'cmt', re: /\/\/[^\n]*/ },
  { type: 'cmt', re: /\/\*[\s\S]*?\*\// },
  { type: 'num', re: /\b0[xX][0-9a-fA-F]+\b|\b\d+\.?\d*(?:[eE][+-]?\d+)?[fFdDlL]?\b/ },
  { type: 'kw', re: /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/ },
]

export function highlightJava(code = '') {
  let html = ''
  let i = 0
  while (i < code.length) {
    let matched = false
    for (const { type, re } of TOKENS) {
      const m = code.slice(i).match(re)
      if (m && m.index === 0) {
        const text = m[0]
        html += '<span class="tok-' + type + '">' + escapeHtml(text) + '</span>'
        i += text.length
        matched = true
        break
      }
    }
    if (!matched) {
      const ch = code[i]
      html += (ch === '\n' ? '\n' : (ch === '<' ? '&lt;' : (ch === '>' ? '&gt;' : (ch === '&' ? '&amp;' : ch))))
      i++
    }
  }
  return html
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export default highlightJava