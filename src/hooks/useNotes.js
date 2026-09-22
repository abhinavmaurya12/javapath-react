import { useState, useEffect, useCallback } from 'react'

const PREFIX = 'javanest_'
const KEY = 'notes'

function read() {
  try {
    return JSON.parse(localStorage.getItem(PREFIX + KEY)) || []
  } catch (e) {
    return []
  }
}
function write(notes) {
  localStorage.setItem(PREFIX + KEY, JSON.stringify(notes))
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

function fmtDate(ts) {
  const d = new Date(ts)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export function useNotes() {
  const [notes, setNotes] = useState(read)
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => { write(notes) }, [notes])

  const create = useCallback((title = 'Untitled Note') => {
    const note = {
      id: uid(),
      title,
      body: '',
      color: 'yellow',
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    setNotes(n => {
      setSelectedId(note.id)
      return [note, ...n]
    })
    return note
  }, [])

  const update = useCallback((id, patch) => {
    setNotes(n => n.map(x => x.id === id ? { ...x, ...patch, updatedAt: Date.now() } : x))
  }, [])

  const remove = useCallback((id) => {
    setNotes(n => {
      const next = n.filter(x => x.id !== id)
      if (next.length === 0) setSelectedId(null)
      return next
    })
    setSelectedId(cur => (cur === id ? null : cur))
  }, [])

  const selected = notes.find(n => n.id === selectedId) || null

  return { notes, selected, selectedId, setSelectedId, create, update, remove, fmtDate }
}

export default useNotes