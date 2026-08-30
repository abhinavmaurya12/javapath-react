// Filters `.sidebar-item` entries inside a chapter sidebar by matching
// their visible text. Hides non-matching items (and empty section titles).
//
// Uses document-level event delegation so it survives React re-renders and
// works for sidebars that swap between multiple render paths (e.g. DSA).
export default function useSidebarSearch() {
  // No React-side effects needed. The delegated listener is attached below
  // in a module-level effect guard.
}

function applyFilter(input) {
  const sidebarId = input.getAttribute('data-sidebar')
  const sidebar = sidebarId ? document.getElementById(sidebarId) : input.closest('.sidebar, .frontend-sidebar')
  if (!sidebar) return
  const q = (input.value || '').trim().toLowerCase()
  const items = sidebar.querySelectorAll('.sidebar-item')
  let anyVisible = false
  items.forEach(item => {
    const text = (item.textContent || '').toLowerCase()
    const match = !q || text.includes(q)
    item.classList.toggle('sidebar-hidden', !match)
    if (match) anyVisible = true
  })
  const sections = sidebar.querySelectorAll(':scope > .sidebar-section, :scope > .sidebar-section')
  sections.forEach(sec => {
    const visible = sec.querySelectorAll('.sidebar-item:not(.sidebar-hidden)').length
    const title = sec.querySelector('.sidebar-section-title')
    if (title) title.classList.toggle('sidebar-hidden', visible === 0)
  })
  const empty = sidebar.querySelector('.sidebar-no-results')
  if (empty) empty.style.display = (q && !anyVisible) ? 'block' : 'none'
}

if (typeof window !== 'undefined' && !window.__sidebarSearchDelegated) {
  window.__sidebarSearchDelegated = true
  document.addEventListener('input', (e) => {
    const t = e.target
    if (t && t.closest && t.closest('.sidebar-search-input')) applyFilter(t)
  })
}