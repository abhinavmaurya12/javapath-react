const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, 'src', 'data', 'array-assignment')
const files = fs.readdirSync(dir).sort()

// Fixed overview questions (ids 52-60) that bridge the gap between the original
// 51 core questions and the Q36-Q62 assignment questions. Without them the ids
// would be non-contiguous (1-51 then 61-87), which breaks the id-1 index used
// by InterviewPage.showQuestion.
const overview = [
  { id: 52, title: 'Array Programs', content: `<div class="concept-box"><h3>52) What is an array in java?</h3><p>An <strong>array</strong> is a container object that holds a fixed number of values of the same type. It is created with the <code>new</code> keyword and indexed from 0.</p><p><strong>Key points:</strong></p><ul><li>Array size is fixed at creation time</li><li>Elements are accessed by index (0-based)</li><li>Array of objects vs array of primitives</li><li>Array length is accessed with <code>arr.length</code></li></ul></div><div class="code-block"><div class="code-header"><span>ArrayBasics.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ArrayBasics</span> {</code></pre></div><div class="output-block">Fixed-size, same-type, zero-indexed container</div>` },
  { id: 53, title: '1D vs 2D Array', content: `<div class="concept-box"><h3>53) Difference between one-dimensional and two-dimensional array in java?</h3><p>A <strong>1D array</strong> stores a single list of values (like a row). A <strong>2D array</strong> is an array of arrays — it stores a table of rows and columns.</p><p><strong>Key points:</strong></p><ul><li>1D: <code>int[] arr</code> — single index</li><li>2D: <code>int[][] arr</code> — two indices</li><li>2D arrays can be jagged (different row lengths)</li></ul></div><div class="code-block"><div class="code-header"><span>Array2DDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">Array2DDemo</span> {</code></pre></div><div class="output-block">1D = row; 2D = table of rows and columns</div>` },
  { id: 54, title: 'Jagged Array', content: `<div class="concept-box"><h3>54) What is a jagged array in java?</h3><p>A <strong>jagged array</strong> is a multidimensional array whose rows can have <strong>different numbers of columns</strong>. Each row is allocated its own length.</p><p><strong>Key points:</strong></p><ul><li>Unlike a rectangular matrix, rows may differ in size</li><li>Declared as <code>int[][] jagged = new int[3][];</code></li><li>Each row is initialized separately</li></ul></div><div class="code-block"><div class="code-header"><span>JaggedDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">JaggedDemo</span> {</code></pre></div><div class="output-block">Rows of different lengths</div>` },
  { id: 55, title: 'Array Memory', content: `<div class="concept-box"><h3>55) How are arrays stored in memory in java?</h3><p>An array is an <strong>object</strong> in Java, so it lives on the <strong>heap</strong>. The array variable holds a <strong>reference</strong> to the contiguous block of memory; the metadata includes the array type and length.</p><p><strong>Key points:</strong></p><ul><li>Array object is stored on the heap</li><li>The reference is stored on the stack (or as an object field)</li><li>Elements are stored contiguously</li><li><code>arr.length</code> reads the length from the object header</li></ul></div><div class="code-block"><div class="code-header"><span>ArrayMemory.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ArrayMemory</span> {</code></pre></div><div class="output-block">Heap object with contiguous elements</div>` },
  { id: 56, title: 'Array vs ArrayList', content: `<div class="concept-box"><h3>56) Difference between array and ArrayList in java?</h3><table><tr><th>Feature</th><th>Array</th><th>ArrayList</th></tr><tr><td>Size</td><td>Fixed</td><td>Dynamic</td></tr><tr><td>Type</td><td>Can hold primitives</td><td>Only objects</td></tr><tr><td>Performance</td><td>Faster</td><td>Slightly slower</td></tr><tr><td>Length</td><td><code>arr.length</code></td><td><code>list.size()</code></td></tr></table></div><div class="code-block"><div class="code-header"><span>ArrayVsList.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ArrayVsList</span> {</code></pre></div><div class="output-block">Array = fixed/primitives; ArrayList = dynamic/objects</div>` },
  { id: 57, title: 'Bubble Sort', content: `<div class="concept-box"><h3>57) Explain bubble sort algorithm in java?</h3><p><strong>Bubble sort</strong> repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass is repeated until the list is sorted.</p><p><strong>Key points:</strong></p><ul><li>Time complexity: O(n²) worst and average</li><li>Stable (equal elements keep their order)</li><li>In-place (O(1) extra space)</li></ul></div><div class="code-block"><div class="code-header"><span>BubbleSort.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">BubbleSort</span> {</code></pre></div><div class="output-block">O(n²) in-place stable sort</div>` },
  { id: 58, title: 'Kadane Algorithm', content: `<div class="concept-box"><h3>58) What is Kadane's algorithm in java?</h3><p>Kadane's algorithm finds the <strong>maximum sum of a contiguous subarray</strong> in a single pass (O(n)). It maintains a running sum and resets it to 0 when it becomes negative.</p><p><strong>Key points:</strong></p><ul><li>Time complexity: O(n)</li><li>Space complexity: O(1)</li><li>Handles negative numbers with a small modification</li></ul></div><div class="code-block"><div class="code-header"><span>Kadane.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">Kadane</span> {</code></pre></div><div class="output-block">O(n) max contiguous subarray sum</div>` },
  { id: 59, title: 'Two Pointers', content: `<div class="concept-box"><h3>59) What is the two-pointer technique in array problems?</h3><p>The <strong>two-pointer technique</strong> uses two indices that move through the array from opposite ends (or in parallel) to solve problems in linear time without extra space.</p><p><strong>Key points:</strong></p><ul><li>Commonly used for sorted arrays (pair sum, container with most water)</li><li>Opposite directions: one from start, one from end</li><li>Same direction: fast and slow pointers (remove duplicates)</li></ul></div><div class="code-block"><div class="code-header"><span>TwoPointers.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">TwoPointers</span> {</code></pre></div><div class="output-block">Linear scan using two indices</div>` },
  { id: 60, title: 'Binary Search', content: `<div class="concept-box"><h3>60) What is binary search in java?</h3><p><strong>Binary search</strong> finds the position of a target value in a <strong>sorted</strong> array by repeatedly dividing the search interval in half.</p><p><strong>Key points:</strong></p><ul><li>Time complexity: O(log n)</li><li>Requires the array to be sorted</li><li>Compares target with the middle element</li></ul></div><div class="code-block"><div class="code-header"><span>BinarySearch.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">BinarySearch</span> {</code></pre></div><div class="output-block">O(log n) search on sorted array</div>` }
]

let out = ''
overview.forEach(q => { out += `{id:${q.id}, title:${JSON.stringify(q.title)}, content:\`${q.content}\`},\n` })
let nextId = 61
for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8')
  const qMatch = src.match(/\/\/ (Q\d+):\s*(.+)/m)
  const qNum = qMatch ? qMatch[1] : f.replace('.java', '')
  let topic = qMatch ? qMatch[2].trim() : f.replace('.java', '')
  // The topic may span multiple comment lines; join continuation lines for the body.
  let fullTopic = topic
  if (qMatch) {
    const start = qMatch.index + qMatch[0].length
    const rest = src.slice(start)
    const lines = rest.match(/^\s*\/\/\s*(.+)/gm) || []
    if (lines.length) {
      fullTopic = [topic, ...lines.map(l => l.replace(/^\s*\/\/\s*/, '').trim())].join(' ').trim()
    }
  }
  // Title uses the first sentence of the topic only (truncate at first period).
  let titleText = fullTopic.split(/\.\s/)[0]
  if (titleText.length > 90) titleText = titleText.slice(0, 90)
  // Titles are double-quoted, so escape quotes/backslashes with JSON.stringify.
  const title = JSON.stringify(titleText).slice(1, -1)

  const explStart = src.indexOf('// Explanation:')
  let bullets = []
  if (explStart !== -1) {
    const explEnd = src.indexOf('static', explStart)
    const block = src.slice(explStart, explEnd === -1 ? undefined : explEnd)
    for (const line of block.split('\n')) {
      const m = line.match(/\/\/\s+-\s+(.+)/)
      if (m) bullets.push(m[1].trim())
    }
  }
  const exMatch = src.match(/\/\/\s+-\s+Example:\s*(.+)/)
  const example = exMatch ? exMatch[1].trim() : ''

  const bulletsHtml = bullets.length
    ? '<p><strong>How it works:</strong></p><ul>' + bullets.map(b => `<li>${b}</li>`).join('') + '</ul>'
    : ''

  const codeHtml = src
    .replace(/\\/g, '\\\\')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

  out += `{id:${nextId++}, title:${JSON.stringify(title)}, content:\`<div class="concept-box"><h3>${nextId - 1}) ${topic}</h3><p>${bulletsHtml}</p>${example ? `<p><strong>Example:</strong> ${example}</p>` : ''}</div><div class="code-block"><div class="code-header"><span>${f}</span></div><pre><code>${codeHtml}</code></pre></div>\`},\n`
}

const dest = path.join(__dirname, 'src', 'data', 'interviewQuestions.js')
let s = fs.readFileSync(dest, 'utf8')
// Anchor: the last existing entry ends with `}` just before the closing `];`.
// All value-internal newlines are escaped, so the closing brace of the array is unique.
const anchor = '];'
const idx = s.lastIndexOf(anchor)
// Insert before the closing brace, adding a comma after the last existing entry.
const updated = s.slice(0, idx) + ',\n' + out + s.slice(idx)
fs.writeFileSync(dest, updated)
console.log('appended', files.length, 'questions')