import React, { useState, useEffect, useRef } from 'react'
import { useNotes } from '../hooks/useNotes'

const COLORS = [
  { key: 'yellow', light: { background: '#fef9c3', color: '#713f12' }, dark: { background: '#422f0f', color: '#fde68a' } },
  { key: 'blue', light: { background: '#dbeafe', color: '#1e3a8a' }, dark: { background: '#1e3a66', color: '#bfdbfe' } },
  { key: 'green', light: { background: '#dcfce7', color: '#14532d' }, dark: { background: '#14532d', color: '#bbf7d0' } },
  { key: 'pink', light: { background: '#fce7f3', color: '#9d174d' }, dark: { background: '#5b2138', color: '#fbcfe8' } },
  { key: 'purple', light: { background: '#ede9fe', color: '#5b21b6' }, dark: { background: '#3b2a6b', color: '#ddd6fe' } },
  { key: 'default', light: { background: 'var(--card)', color: 'var(--text)' }, dark: { background: 'var(--card)', color: 'var(--text)' } }
]

function isDark() {
  return document.documentElement.getAttribute('data-theme') === 'dark'
}

function colorStyle(key) {
  const c = COLORS.find(x => x.key === key)
  const base = c || COLORS[5]
  return isDark() ? base.dark : base.light
}

// Strip HTML so the note-list preview shows plain text.
function plain(html) {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}

export default function MyNotesPage() {
  const { notes, selected, selectedId, setSelectedId, create, update, remove, fmtDate } = useNotes()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [color, setColor] = useState('yellow')

  const editorRef = useRef(null)

  // Populate the editor once when the selected note changes. The editor is
  // UNCONTROLLED after that: typing never re-writes its innerHTML (which would
  // mangle input and throw the cursor), we only read it on input/commands.
  useEffect(() => {
    if (selected) {
      setTitle(selected.title)
      setBody(selected.body || '')
      setColor(selected.color || 'yellow')
      if (editorRef.current) editorRef.current.innerHTML = selected.body || ''
    } else {
      setTitle('')
      setBody('')
      setColor('yellow')
      if (editorRef.current) editorRef.current.innerHTML = ''
    }
  }, [selectedId]) // eslint-disable-line react-hooks/exhaustive-deps

  function newNote() {
    create('Untitled Note')
  }

  function saveTitle(v) {
    setTitle(v)
    if (selectedId) update(selectedId, { title: v })
  }

  function saveBody(html) {
    setBody(html)
    if (selectedId) update(selectedId, { body: html })
  }

  function saveColor(c) {
    setColor(c)
    if (selectedId) update(selectedId, { color: c })
  }

  function deleteNote() {
    if (!selectedId) return
    if (confirm('Delete this note? This cannot be undone.')) remove(selectedId)
  }

  function clearEditor() {
    setTitle('')
    setBody('')
    setColor('yellow')
    if (editorRef.current) editorRef.current.innerHTML = ''
  }

// Run a formatting command in the mousedown handler. preventDefault keeps
  // the button from stealing focus from the editor, so the selection is still
  // live when the command runs. Re-focus + restore the selection defensively.
  function cmd(e, fn) {
    e.preventDefault()
    const sel = document.getSelection()
    let saved = null
    if (sel && sel.rangeCount) saved = sel.getRangeAt(0)
    editorRef.current && editorRef.current.focus()
    if (saved) {
      const s = window.getSelection()
      s.removeAllRanges()
      s.addRange(saved)
    }
    try { fn() } catch (err) {}
    onInput()
  }

  // execCommand is deprecated/removed in modern browsers, so wrap the live
  // selection in the requested inline tag instead.
  function wrapSelection(tag) {
    const sel = window.getSelection()
    if (!sel || !sel.rangeCount) return
    const range = sel.getRangeAt(0)
    if (range.collapsed) return
    const selected = range.toString()
    if (!selected) return
    const el = document.createElement(tag)
    el.textContent = selected
    range.deleteContents()
    range.insertNode(el)
    // Move the caret right after the wrapped node so typing continues normally.
    const newRange = document.createRange()
    newRange.setStartAfter(el)
    newRange.setEndAfter(el)
    sel.removeAllRanges()
    sel.addRange(newRange)
  }

  function bold(e) { cmd(e, () => wrapSelection('strong')) }
  function italic(e) { cmd(e, () => wrapSelection('em')) }
  function underline(e) { cmd(e, () => wrapSelection('u')) }

  function insertCode(e) {
    cmd(e, () => {
      const sel = window.getSelection()
      if (!sel || !sel.rangeCount) return
      const range = sel.getRangeAt(0)
      const text = range.toString()
      if (!text) return
      const el = document.createElement('code')
      el.textContent = text
      range.deleteContents()
      range.insertNode(el)
      const newRange = document.createRange()
      newRange.setStartAfter(el)
      newRange.setEndAfter(el)
      sel.removeAllRanges()
      sel.addRange(newRange)
    })
  }

  function newLine(e) {
    cmd(e, () => {
      const sel = window.getSelection()
      if (!sel || !sel.rangeCount) return
      const range = sel.getRangeAt(0)
      range.deleteContents()
      range.insertNode(document.createTextNode('\n'))
      const newRange = document.createRange()
      newRange.setStartAfter(range.startContainer)
      newRange.setEndAfter(range.startContainer)
      sel.removeAllRanges()
      sel.addRange(newRange)
    })
  }

  function makeList(e, listTag) {
    e.preventDefault()
    const sel = window.getSelection()
    if (!sel || !sel.rangeCount || !editorRef.current) return
    const range = sel.getRangeAt(0)
    const selected = range.toString()
    const list = document.createElement(listTag)
    const item = document.createElement('li')
    if (selected) item.appendChild(document.createTextNode(selected))
    list.appendChild(item)
    range.deleteContents()
    range.insertNode(list)
    // Place the caret inside the new list item for continued typing.
    const newRange = document.createRange()
    newRange.setStart(item, item.childNodes.length)
    newRange.setEnd(item, item.childNodes.length)
    sel.removeAllRanges()
    sel.addRange(newRange)
    onInput()
  }
  function bullet(e) { makeList(e, 'ul') }
  function number(e) { makeList(e, 'ol') }
  function divider(e) {
    cmd(e, () => {
      const sel = window.getSelection()
      if (!sel || !sel.rangeCount) return
      const range = sel.getRangeAt(0)
      const hr = document.createElement('hr')
      hr.style.margin = '12px 0'
      hr.style.border = 'none'
      hr.style.borderTop = '1px solid var(--border)'
      range.deleteContents()
      range.insertNode(hr)
      const newRange = document.createRange()
      newRange.setStartAfter(hr)
      newRange.setEndAfter(hr)
      sel.removeAllRanges()
      sel.addRange(newRange)
    })
  }

  function onInput() {
    saveBody(editorRef.current.innerHTML)
  }

  function onPaste(e) {
    // Paste plain text instead of rich HTML from the clipboard.
    e.preventDefault()
    const text = (e.clipboardData || window.clipboardData).getData('text') || ''
    const sel = window.getSelection()
    if (sel && sel.rangeCount) {
      const range = sel.getRangeAt(0)
      range.deleteContents()
      range.insertNode(document.createTextNode(text))
      const newRange = document.createRange()
      newRange.setStartAfter(range.startContainer)
      newRange.setEndAfter(range.startContainer)
      sel.removeAllRanges()
      sel.addRange(newRange)
    }
    onInput()
  }

  return (
    <div id="page-mynotes" className="mynotes-layout" style={{ background: 'var(--bg)', minHeight: 'calc(100vh - var(--nav-sub-h, 112px))' }}>
      <aside className="mynotes-sidebar">
        <div className="mynotes-new-card" onClick={newNote}>
          <div className="mynotes-new-icon"><i className="fas fa-plus"></i></div>
          <h4>New Note</h4>
          <p>Create a blank note</p>
        </div>
        <div className="mynotes-notes-list">
          {notes.length === 0 ? (
            <div className="mynotes-empty-state" style={{ border: 'none', background: 'transparent', padding: '24px 12px' }}>
              <i className="fas fa-sticky-note"></i>
              <p style={{ margin: 0, fontSize: '.82rem' }}>No notes yet. Tap <b>New Note</b> to start.</p>
            </div>
          ) : (
            notes.map(n => (
              <div
                key={n.id}
                className={'mynotes-note-item' + (n.id === selectedId ? ' active' : '')}
                onClick={() => setSelectedId(n.id)}
                style={{ borderLeftColor: n.color !== 'default' ? colorStyle(n.color).background : 'transparent' }}
              >
                <div className="mynotes-note-title">{n.title || 'Untitled Note'}</div>
                <div className="mynotes-note-meta">{fmtDate(n.updatedAt)} · {plain(n.body).split('\n')[0].slice(0, 40) || 'No text yet'}</div>
              </div>
            ))
          )}
        </div>
      </aside>

      <section className="mynotes-editor-wrap">
        {!selected ? (
          <div className="mynotes-editor-card" style={{ background: 'var(--card)' }}>
            <div className="mynotes-empty-state">
              <i className="fas fa-sticky-note"></i>
              <h3 style={{ color: 'var(--text)', marginBottom: 8 }}>No note selected</h3>
              <p style={{ marginBottom: 24 }}>Pick a note from the list or create a new one.</p>
              <button className="btn btn-primary" onClick={newNote}><i className="fas fa-plus"></i> New Note</button>
            </div>
          </div>
        ) : (
          <div className="mynotes-editor-card" style={{ background: colorStyle(color).background }}>
            <div className="mynotes-editor-toolbar">
              <div className="mynotes-toolbar-group">
                <button className="mynotes-tool-btn" onMouseDown={bold} title="Bold (Ctrl+B)"><i className="fas fa-bold"></i></button>
                <button className="mynotes-tool-btn" onMouseDown={italic} title="Italic (Ctrl+I)"><i className="fas fa-italic"></i></button>
                <button className="mynotes-tool-btn" onMouseDown={underline} title="Underline (Ctrl+U)"><i className="fas fa-underline"></i></button>
                <button className="mynotes-tool-btn" onMouseDown={insertCode} title="Code"><i className="fas fa-code"></i></button>
              </div>
              <div className="mynotes-toolbar-group">
                <button className="mynotes-tool-btn" onMouseDown={newLine} title="New line"><i className="fas fa-arrow-down"></i></button>
                <button className="mynotes-tool-btn" onMouseDown={bullet} title="Bullet list"><i className="fas fa-list-ul"></i></button>
                <button className="mynotes-tool-btn" onMouseDown={number} title="Numbered list"><i className="fas fa-list-ol"></i></button>
                <button className="mynotes-tool-btn" onMouseDown={divider} title="Divider"><i className="fas fa-minus"></i></button>
              </div>
              <div className="mynotes-toolbar-group">
                {COLORS.map(c => (
                  <span
                    key={c.key}
                    className={'mynotes-color-swatch' + (color === c.key ? ' active' : '')}
                    style={colorStyle(c.key)}
                    onClick={() => saveColor(c.key)}
                    title={c.key}
                  ></span>
                ))}
              </div>
            </div>

            <div className="mynotes-editor-title">
              <input
                type="text"
                value={title}
                onChange={e => saveTitle(e.target.value)}
                placeholder="Note title..."
                style={{ color: colorStyle(color).color }}
              />
            </div>

<div
              ref={editorRef}
              className="mynotes-editor-body"
              contentEditable
              suppressContentEditableWarning
              spellCheck={true}
              data-placeholder="Start typing your note..."
              style={{ background: colorStyle(color).background, color: colorStyle(color).color }}
              onInput={onInput}
              onPaste={onPaste}
              onKeyDown={e => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'b') { e.preventDefault(); bold(e) }
                if ((e.ctrlKey || e.metaKey) && e.key === 'i') { e.preventDefault(); italic(e) }
                if ((e.ctrlKey || e.metaKey) && e.key === 'u') { e.preventDefault(); underline(e) }
              }}
            />

            <div className="mynotes-editor-actions">
              <span style={{ color: 'var(--text-muted)', fontSize: '.82rem' }}>
                <i className="fas fa-calendar" style={{ marginRight: 6 }}></i>
                Created {fmtDate(selected.createdAt)} · Updated {fmtDate(selected.updatedAt)}
              </span>
              <span style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-outline" onClick={clearEditor}><i className="fas fa-eraser"></i> Clear</button>
                <button className="btn btn-outline" onClick={deleteNote}><i className="fas fa-trash"></i> Delete</button>
              </span>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}