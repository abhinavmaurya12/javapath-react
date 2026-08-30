export default  {
  title: 'JavaScript',
  icon: 'fab fa-js',
  color: '#f7df1e',
  chapters: [
    {
      title: 'Introduction to JavaScript',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=zofMnllkVfI" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Introduction to JavaScript</p>
  </div>
</div>
<div class="concept-box"><h3>What is JavaScript?</h3><p><strong>JavaScript (JS)</strong> is a versatile, high-level programming language primarily used to add interactivity to web pages. It runs in browsers and on servers (Node.js).</p><ul><li><strong>Client-side:</strong> Runs in the browser, manipulates DOM</li><li><strong>Server-side:</strong> Node.js allows JS on servers</li><li><strong>Dynamic:</strong> Variables can change type at runtime</li><li><strong>Interpreted:</strong> No compilation needed (though modern JS uses transpilers)</li></ul></div>
<div class="concept-box"><h3>JavaScript in HTML</h3><p>You can include JavaScript using the <code>&lt;script&gt;</code> tag, either inline or as an external file.</p></div>
<div class="code-block"><div class="code-header"><span>inline.js</span><span>JavaScript</span></div><pre><code><span class="cmt">&lt;!-- Inline --&gt;</span>
<span class="kw">&lt;script&gt;</span>
    <span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'Hello, World!'</span>);
<span class="kw">&lt;/script&gt;</span>

<span class="cmt">&lt;!-- External file --&gt;</span>
<span class="kw">&lt;script</span> <span class="attr">src</span>=<span class="str">"app.js"</span><span class="kw">&gt;&lt;/script&gt;</span></code></pre></div>
<div class="code-block"><div class="code-header"><span>app.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// First JavaScript program</span>
<span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'Hello, World!'</span>);

<span class="cmt">// Alert popup</span>
<span class="mth">alert</span>(<span class="str">'Welcome to JavaScript!'</span>);

<span class="cmt">// Write to the page</span>
<span class="prop">document</span>.<span class="mth">write</span>(<span class="str">'&lt;p&gt;Hello from JS!&lt;/p&gt;'</span>);</code></pre></div>
<div class="alert-box"><code>console.log()</code> is your best friend for debugging. Use the browser's DevTools (F12) to see console output and inspect elements.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create an HTML file and add a <code>&lt;script&gt;</code> tag</li><li>Use <code>console.log()</code> to print your name</li><li>Use <code>alert()</code> to show a welcome message</li><li>Use <code>document.write()</code> to add a paragraph</li></ol></div>`
    },
    {
      title: 'Variables, Data Types & Operators',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=JKPfM2AtgGw" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Variables, Data Types & Operators</p>
  </div>
</div>
<div class="concept-box"><h3>Variables</h3><p>JavaScript has three ways to declare variables: <code>var</code> (old, function-scoped), <code>let</code> (modern, block-scoped), and <code>const</code> (immutable reference).</p></div>
<div class="code-block"><div class="code-header"><span>variables.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// Modern variable declarations</span>
<span class="kw">let</span> name = <span class="str">"Alice"</span>;     <span class="cmt">// Can be reassigned</span>
<span class="kw">const</span> PI = <span class="val">3.14159</span>;    <span class="cmt">// Cannot be reassigned</span>
<span class="kw">var</span> age = <span class="val">25</span>;          <span class="cmt">// Avoid - old style</span>

name = <span class="str">"Bob"</span>;            <span class="cmt">// OK</span>
<span class="cmt">// PI = 3.14;            // Error: Assignment to constant</span></code></pre></div>
<div class="concept-box"><h3>Data Types</h3>
<table><tr><th>Type</th><th>Example</th><th>Description</th></tr>
<tr><td><code>String</code></td><td><code>"hello"</code></td><td>Text in quotes</td></tr>
<tr><td><code>Number</code></td><td><code>42</code>, <code>3.14</code></td><td>Integers and floats</td></tr>
<tr><td><code>Boolean</code></td><td><code>true</code>, <code>false</code></td><td>Logical values</td></tr>
<tr><td><code>undefined</code></td><td><code>undefined</code></td><td>Variable declared but not assigned</td></tr>
<tr><td><code>null</code></td><td><code>null</code></td><td>Intentional absence of value</td></tr>
<tr><td><code>object</code></td><td><code>{}</code>, <code>[]</code></td><td>Collections of data</td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>operators.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// Arithmetic</span>
<span class="kw">let</span> a = <span class="val">10</span>, b = <span class="val">3</span>;
<span class="prop">console</span>.<span class="mth">log</span>(a + b);  <span class="cmt">// 13</span>
<span class="prop">console</span>.<span class="mth">log</span>(a % b);  <span class="cmt">// 1 (modulo)</span>

<span class="cmt">// Comparison</span>
<span class="prop">console</span>.<span class="mth">log</span>(a == b);   <span class="cmt">// false</span>
<span class="prop">console</span>.<span class="mth">log</span>(a === <span class="str">"10"</span>); <span class="cmt">// false (strict)</span>
<span class="prop">console</span>.<span class="mth">log</span>(a != b);   <span class="cmt">// true</span>

<span class="cmt">// Logical</span>
<span class="prop">console</span>.<span class="mth">log</span>(a > <span class="val">5</span> && b < <span class="val">5</span>); <span class="cmt">// true</span>
<span class="prop">console</span>.<span class="mth">log</span>(!<span class="kw">true</span>);           <span class="cmt">// false</span></code></pre></div>
<div class="alert-box">Use <code>===</code> (strict equality) instead of <code>==</code>. <code>===</code> checks both value AND type. <code>null</code> is an object (historical bug), not a primitive.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Declare variables with <code>let</code> and <code>const</code></li><li>Check the type of different values with <code>typeof</code></li><li>Use arithmetic operators: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li><li>Compare values using <code>===</code> and <code>!==</code></li></ol></div>`
    },
    {
      title: 'Functions & Scope',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=j1laALb8OVM" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">JavaScript Functions & Scope</p>
  </div>
</div>
<div class="concept-box"><h3>Functions</h3><p>Functions are reusable blocks of code. JavaScript supports function declarations, expressions, and arrow functions.</p></div>
<div class="code-block"><div class="code-header"><span>functions.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// Function Declaration</span>
<span class="kw">function</span> <span class="mth">greet</span>(name) {
    <span class="kw">return</span> <span class="str">"Hello, "</span> + name + <span class="str">"!"</span>;
}
<span class="prop">console</span>.<span class="mth">log</span>(<span class="mth">greet</span>(<span class="str">"Alice"</span>)); <span class="cmt">// Hello, Alice!</span>

<span class="cmt">// Function Expression</span>
<span class="kw">const</span> add = <span class="kw">function</span>(a, b) {
    <span class="kw">return</span> a + b;
};

<span class="cmt">// Arrow Function (ES6)</span>
<span class="kw">const</span> multiply = (a, b) => a * b;
<span class="kw">const</span> square = x => x * x;</code></pre></div>
<div class="concept-box"><h3>Scope</h3>
<table><tr><th>Scope</th><th>Description</th></tr>
<tr><td><strong>Global</strong></td><td>Accessible everywhere, declared outside functions</td></tr>
<tr><td><strong>Function</strong></td><td>Accessible only within the function (var)</td></tr>
<tr><td><strong>Block</strong></td><td>Accessible only within <code>{}</code> (let, const)</td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>scope.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// Global scope</span>
<span class="kw">let</span> global = <span class="str">"I'm global"</span>;

<span class="kw">function</span> <span class="mth">testScope</span>() {
    <span class="kw">let</span> local = <span class="str">"I'm local"</span>;
    <span class="prop">console</span>.<span class="mth">log</span>(global); <span class="cmt">// OK</span>
}
<span class="cmt">// console.log(local);  // Error: local is not defined</span>

<span class="kw">if</span> (<span class="kw">true</span>) {
    <span class="kw">let</span> blockScoped = <span class="str">"I'm block scoped"</span>;
    <span class="prop">console</span>.<span class="mth">log</span>(blockScoped); <span class="cmt">// OK</span>
}
<span class="cmt">// console.log(blockScoped);  // Error</span></code></pre></div>
<div class="alert-box">Always use <code>let</code> or <code>const</code> instead of <code>var</code>. <code>var</code> is function-scoped and can cause bugs with hoisting.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Write a function that adds two numbers</li><li>Convert it to an arrow function</li><li>Write a function with a default parameter</li><li>Demonstrate block scope vs function scope</li></ol></div>`
    },
    {
      title: 'DOM Manipulation',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=5fb2aPlgoys" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">DOM Manipulation Tutorial</p>
  </div>
</div>
<div class="concept-box"><h3>What is the DOM?</h3><p>The <strong>Document Object Model (DOM)</strong> is a programming interface for HTML documents. It represents the page as a tree of objects that JavaScript can manipulate.</p></div>
<div class="code-block"><div class="code-header"><span>dom.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// Select elements</span>
<span class="kw">const</span> title = <span class="prop">document</span>.<span class="mth">getElementById</span>(<span class="str">'title'</span>);
<span class="kw">const</span> items = <span class="prop">document</span>.<span class="mth">querySelectorAll</span>(<span class="str">'.item'</span>);
<span class="kw">const</span> firstItem = <span class="prop">document</span>.<span class="mth">querySelector</span>(<span class="str">'.item'</span>);

<span class="cmt">// Modify content</span>
title.<span class="prop">textContent</span> = <span class="str">'New Title'</span>;
title.<span class="prop">innerHTML</span> = <span class="str">'&lt;em&gt;Italic&lt;/em&gt;'</span>;

<span class="cmt">// Modify styles</span>
title.<span class="prop">style</span>.<span class="prop">color</span> = <span class="str">'red'</span>;
title.<span class="prop">style</span>.<span class="prop">fontSize</span> = <span class="str">'24px'</span>;

<span class="cmt">// Modify attributes</span>
title.<span class="mth">setAttribute</span>(<span class="str">'class'</span>, <span class="str">'highlight'</span>);

<span class="cmt">// Create new element</span>
<span class="kw">const</span> newDiv = <span class="prop">document</span>.<span class="mth">createElement</span>(<span class="str">'div'</span>);
newDiv.<span class="prop">textContent</span> = <span class="str">'New Element'</span>;
<span class="prop">document</span>.<span class="prop">body</span>.<span class="mth">appendChild</span>(newDiv);

<span class="cmt">// Remove element</span>
newDiv.<span class="mth">remove</span>();</code></pre></div>
<div class="alert-box">Use <code>textContent</code> for plain text (safer, faster). Use <code>innerHTML</code> when you need to include HTML tags. <code>querySelector</code> uses CSS selectors.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Change the text of an <code>&lt;h1&gt;</code> element</li><li>Change the background color of a <code>&lt;div&gt;</code></li><li>Add a new <code>&lt;li&gt;</code> to a <code>&lt;ul&gt;</code></li><li>Remove an element from the page</li></ol></div>`
    },
    {
      title: 'Events & Event Handling',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=ac8mvhdXXiA" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">JavaScript Events Explained</p>
  </div>
</div>
<div class="concept-box"><h3>What are Events?</h3><p>Events are actions that happen in the browser (clicks, key presses, mouse movements). <strong>Event handling</strong> lets you run code in response to these actions.</p></div>
<div class="code-block"><div class="code-header"><span>events.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// Inline event handler (not recommended)</span>
<span class="kw">&lt;button</span> <span class="attr">onclick</span>=<span class="str">"handleClick()"</span><span class="kw">&gt;</span>Click me<span class="kw">&lt;/button&gt;</span>

<span class="cmt">// addEventListener (recommended)</span>
<span class="kw">const</span> btn = <span class="prop">document</span>.<span class="mth">querySelector</span>(<span class="str">'button'</span>);

btn.<span class="mth">addEventListener</span>(<span class="str">'click'</span>, <span class="kw">function</span>() {
    <span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'Button clicked!'</span>);
});

<span class="cmt">// Common events</span>
element.<span class="mth">addEventListener</span>(<span class="str">'mouseover'</span>, handler);   <span class="cmt">// Hover</span>
element.<span class="mth">addEventListener</span>(<span class="str">'mouseout'</span>, handler);    <span class="cmt">// Leave</span>
element.<span class="mth">addEventListener</span>(<span class="str">'keydown'</span>, handler);    <span class="cmt">// Key press</span>
element.<span class="mth">addEventListener</span>(<span class="str">'submit'</span>, handler);    <span class="cmt">// Form submit</span>
element.<span class="mth">addEventListener</span>(<span class="str">'scroll'</span>, handler);     <span class="cmt">// Scroll</span></code></pre></div>
<div class="concept-box"><h3>Event Object</h3><p>The event handler receives an <strong>event object</strong> with information about the event.</p></div>
<div class="code-block"><div class="code-header"><span>event-obj.js</span><span>JavaScript</span></div><pre><code>btn.<span class="mth">addEventListener</span>(<span class="str">'click'</span>, <span class="kw">function</span>(e) {
    <span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'Clicked at:'</span>, e.<span class="prop">clientX</span>, e.<span class="prop">clientY</span>);
    <span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'Target:'</span>, e.<span class="prop">target</span>.<span class="prop">textContent</span>);
    e.<span class="prop">preventDefault</span>(); <span class="cmt">// Prevent default behavior</span>
});</code></pre></div>
<div class="alert-box">Use <code>addEventListener</code> instead of inline <code>onclick</code>. It allows multiple listeners and separates HTML from JavaScript.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Add a click event to a button that shows an alert</li><li>Add a <code>mouseover</code> event that changes background color</li><li>Use the event object to log click coordinates</li><li>Prevent a form from submitting with <code>preventDefault()</code></li></ol></div>`
    },
    {
      title: 'Control Flow & Loops',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=xbbnP10FYzU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Control Flow & Loops</p>
  </div>
</div>
<div class="concept-box"><h3>Conditional Statements</h3><p>Control the flow of execution based on conditions using <code>if</code>, <code>else if</code>, <code>else</code>, and <code>switch</code>.</p></div>
<div class="code-block"><div class="code-header"><span>conditionals.js</span><span>JavaScript</span></div><pre><code><span class="kw">let</span> score = <span class="val">85</span>;

<span class="kw">if</span> (score >= <span class="val">90</span>) {
    <span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'A'</span>);
} <span class="kw">else if</span> (score >= <span class="val">80</span>) {
    <span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'B'</span>);
} <span class="kw">else</span> {
    <span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'C'</span>);
}

<span class="cmt">// Ternary operator (shorthand)</span>
<span class="kw">let</span> status = score >= <span class="val">60</span> ? <span class="str">'Pass'</span> : <span class="str">'Fail'</span>;</code></pre></div>
<div class="concept-box"><h3>Loops</h3>
<table><tr><th>Loop</th><th>Use Case</th></tr>
<tr><td><code>for</code></td><td>Known number of iterations</td></tr>
<tr><td><code>while</code></td><td>Condition-based, unknown iterations</td></tr>
<tr><td><code>do...while</code></td><td>Runs at least once</td></tr>
<tr><td><code>for...of</code></td><td>Iterate over iterables (arrays)</td></tr>
<tr><td><code>for...in</code></td><td>Iterate over object keys</td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>loops.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// for loop</span>
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="val">0</span>; i < <span class="val">5</span>; i++) {
    <span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'Iteration:'</span>, i);
}

<span class="cmt">// for...of (arrays)</span>
<span class="kw">const</span> fruits = [<span class="str">'apple'</span>, <span class="str">'banana'</span>, <span class="str">'orange'</span>];
<span class="kw">for</span> (<span class="kw">const</span> fruit <span class="kw">of</span> fruits) {
    <span class="prop">console</span>.<span class="mth">log</span>(fruit);
}

<span class="cmt">// for...in (objects)</span>
<span class="kw">const</span> person = { name: <span class="str">'Alice'</span>, age: <span class="val">25</span> };
<span class="kw">for</span> (<span class="kw">const</span> key <span class="kw">in</span> person) {
    <span class="prop">console</span>.<span class="mth">log</span>(key, person[key]);
}</code></pre></div>
<div class="alert-box">Use <code>for...of</code> for arrays and <code>for...in</code> for objects. Avoid <code>for...in</code> on arrays — use <code>forEach()</code> or <code>for...of</code> instead.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Print numbers 1-10 using a for loop</li><li>Use <code>for...of</code> to iterate over an array</li><li>Create a <code>switch</code> statement for days of the week</li><li>Use the ternary operator for a simple condition</li></ol></div>`
    },
    {
      title: 'Arrays & Objects',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=u2clriPMrCc" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">JavaScript Arrays & Objects</p>
  </div>
</div>
<div class="concept-box"><h3>Arrays</h3><p>Arrays store ordered collections of values. JavaScript arrays are dynamic and can hold mixed types.</p></div>
<div class="code-block"><div class="code-header"><span>arrays.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// Create array</span>
<span class="kw">const</span> fruits = [<span class="str">'apple'</span>, <span class="str">'banana'</span>, <span class="str">'orange'</span>];
<span class="kw">const</span> numbers = [<span class="val">1</span>, <span class="val">2</span>, <span class="val">3</span>, <span class="val">4</span>, <span class="val">5</span>];

<span class="cmt">// Access</span>
<span class="prop">console</span>.<span class="mth">log</span>(fruits[<span class="val">0</span>]);    <span class="cmt">// 'apple'</span>
<span class="prop">console</span>.<span class="mth">log</span>(fruits.length); <span class="cmt">// 3</span>

<span class="cmt">// Add/remove</span>
fruits.<span class="mth">push</span>(<span class="str">'grape'</span>);     <span class="cmt">// Add to end</span>
fruits.<span class="mth">pop</span>();              <span class="cmt">// Remove from end</span>
fruits.<span class="mth">unshift</span>(<span class="str">'mango'</span>);  <span class="cmt">// Add to start</span>
fruits.<span class="mth">shift</span>();            <span class="cmt">// Remove from start</span>

<span class="cmt">// Methods</span>
fruits.<span class="mth">slice</span>(<span class="val">1</span>, <span class="val">3</span>);    <span class="cmt">// ['banana', 'orange']</span>
fruits.<span class="mth">splice</span>(<span class="val">1</span>, <span class="val">1</span>);    <span class="cmt">// Remove 1 at index 1</span>
fruits.<span class="mth">indexOf</span>(<span class="str">'banana'</span>); <span class="cmt">// 0</span></code></pre></div>
<div class="concept-box"><h3>Objects</h3><p>Objects store key-value pairs. They're the building blocks of JavaScript.</p></div>
<div class="code-block"><div class="code-header"><span>objects.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// Create object</span>
<span class="kw">const</span> person = {
    <span class="prop">name</span>: <span class="str">'Alice'</span>,
    <span class="prop">age</span>: <span class="val">25</span>,
    <span class="prop">city</span>: <span class="str">'New York'</span>,
    <span class="mth">greet</span>: <span class="kw">function</span>() {
        <span class="kw">return</span> <span class="str">'Hi, I'm '</span> + <span class="kw">this</span>.name;
    }
};

<span class="cmt">// Access properties</span>
person.<span class="prop">name</span>;           <span class="cmt">// 'Alice'</span>
person[<span class="str">'age'</span>];          <span class="cmt">// 25</span>

<span class="cmt">// Add/modify</span>
person.<span class="prop">job</span> = <span class="str">'Developer'</span>;
person.<span class="prop">age</span> = <span class="val">26</span>;

<span class="cmt">// Object methods</span>
<span class="prop">Object</span>.<span class="mth">keys</span>(person);  <span class="cmt">// ['name', 'age', 'city', 'greet']</span>
<span class="prop">Object</span>.<span class="mth">values</span>(person); <span class="cmt">// ['Alice', 25, 'New York', ƒ]</span>
<span class="prop">Object</span>.<span class="mth">entries</span>(person); <span class="cmt">// [['name','Alice'], ...]</span></code></pre></div>
<div class="alert-box">Arrays are objects with numeric keys. Use arrays for ordered lists and objects for key-value pairs. <code>this</code> refers to the current object.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create an array of 5 numbers and sum them</li><li>Use <code>push()</code> and <code>pop()</code> on an array</li><li>Create an object representing a car (make, model, year)</li><li>Use <code>Object.keys()</code> to list all properties</li></ol></div>`
    },
    {
      title: 'Async JavaScript & Promises',
      difficulty: 'Intermediate',
      difficultyClass: 'intermediate',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=ESddoqFwaUw" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Async JavaScript & Promises</p>
  </div>
</div>
<div class="concept-box"><h3>Synchronous vs Asynchronous</h3><p>JavaScript is <strong>single-threaded</strong> and synchronous by default. Asynchronous code allows long-running tasks (API calls, file reads) to happen without blocking the main thread.</p></div>
<div class="code-block"><div class="code-header"><span>async.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// Callback pattern (old)</span>
<span class="kw">function</span> <span class="mth">fetchData</span>(callback) {
    <span class="mth">setTimeout</span>(() => {
        <span class="kw">const</span> data = { id: <span class="val">1</span>, name: <span class="str">'Alice'</span> };
        <span class="mth">callback</span>(data);
    }, <span class="val">1000</span>);
}

<span class="cmt">// Promise pattern</span>
<span class="kw">function</span> <span class="mth">fetchDataPromise</span>() {
    <span class="kw">return new</span> <span class="cls">Promise</span>((resolve, reject) => {
        <span class="mth">setTimeout</span>(() => {
            <span class="kw">const</span> data = { id: <span class="val">1</span>, name: <span class="str">'Alice'</span> };
            <span class="mth">resolve</span>(data);
        }, <span class="val">1000</span>);
    });
}</code></pre></div>
<div class="concept-box"><h3>Using Promises</h3></div>
<div class="code-block"><div class="code-header"><span>promises.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// .then() and .catch()</span>
<span class="mth">fetchDataPromise</span>()
    .<span class="mth">then</span>(data => {
        <span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'Data:'</span>, data);
    })
    .<span class="mth">catch</span>(error => {
        <span class="prop">console</span>.<span class="mth">error</span>(<span class="str">'Error:'</span>, error);
    });

<span class="cmt">// Async/await (modern)</span>
<span class="kw">async function</span> <span class="mth">loadData</span>() {
    <span class="kw">try</span> {
        <span class="kw">const</span> data = <span class="kw">await</span> <span class="mth">fetchDataPromise</span>();
        <span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'Data:'</span>, data);
    } <span class="kw">catch</span> (error) {
        <span class="prop">console</span>.<span class="mth">error</span>(<span class="str">'Error:'</span>, error);
    }
}</code></pre></div>
<div class="alert-box">Always handle promise rejections with <code>.catch()</code> or <code>try/catch</code> in async functions. <code>async/await</code> is the modern, cleaner way to work with promises.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a promise that resolves after 2 seconds</li><li>Use <code>.then()</code> to handle the resolved value</li><li>Convert the promise to async/await</li><li>Add a <code>.catch()</code> to handle errors</li></ol></div>`
    },
    {
      title: 'ES6+ Features',
      difficulty: 'Intermediate',
      difficultyClass: 'intermediate',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=crR_ktQrsXU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">ES6+ Features</p>
  </div>
</div>
<div class="concept-box"><h3>ES6+ (Modern JavaScript)</h3><p>ES6 (ECMAScript 2015) and later versions introduced many features that make JavaScript cleaner and more powerful.</p></div>
<div class="code-block"><div class="code-header"><span>es6.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// 1. Arrow Functions</span>
<span class="kw">const</span> add = (a, b) => a + b;

<span class="cmt">// 2. Template Literals</span>
<span class="kw">const</span> name = <span class="str">"Alice"</span>;
<span class="kw">const</span> greeting = <span class="str">\`Hello, \${name}! You are \${age} years old.\`</span>;

<span class="cmt">// 3. Destructuring</span>
<span class="kw">const</span> person = { name: <span class="str">'Bob'</span>, age: <span class="val">30</span>, city: <span class="str">'Paris'</span> };
<span class="kw">const</span> { name, age } = person;

<span class="cmt">// 4. Spread Operator</span>
<span class="kw">const</span> arr1 = [<span class="val">1</span>, <span class="val">2</span>];
<span class="kw">const</span> arr2 = [...arr1, <span class="val">3</span>, <span class="val">4</span>]; <span class="cmt">// [1, 2, 3, 4]</span>

<span class="cmt">// 5. Modules (import/export)</span>
<span class="kw">import</span> { greet } <span class="kw">from</span> <span class="str">'./utils.js'</span>;
<span class="kw">export const</span> PI = <span class="val">3.14159</span>;

<span class="cmt">// 6. Optional Chaining</span>
<span class="kw">const</span> city = person?.address?.city;

<span class="cmt">// 7. Nullish Coalescing</span>
<span class="kw">const</span> name = user?.name ?? <span class="str">'Guest'</span>;

<span class="cmt">// 8. Array Methods</span>
<span class="kw">const</span> nums = [<span class="val">1</span>, <span class="val">2</span>, <span class="val">3</span>, <span class="val">4</span>, <span class="val">5</span>];
nums.<span class="mth">map</span>(x => x * <span class="val">2</span>);           <span class="cmt">// [2, 4, 6, 8, 10]</span>
nums.<span class="mth">filter</span>(x => x > <span class="val">2</span>);       <span class="cmt">// [3, 4, 5]</span>
nums.<span class="mth">reduce</span>((a, b) => a + b, <span class="val">0</span>); <span class="cmt">// 15</span></code></pre></div>
<div class="alert-box">ES6+ features are essential for modern JavaScript. <code>?.</code> (optional chaining) prevents errors when accessing nested properties. <code>??</code> (nullish coalescing) handles <code>null</code> and <code>undefined</code> only (not falsy values like <code>0</code> or <code>""</code>).</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Rewrite a regular function as an arrow function</li><li>Use template literals for string interpolation</li><li>Destructure an object to extract properties</li><li>Use <code>.map()</code>, <code>.filter()</code>, and <code>.reduce()</code></li></ol></div>`
    },
    {
      title: 'Closures & Prototypes',
      difficulty: 'Advanced',
      difficultyClass: 'advanced',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=JVT_d9Qx_ro" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Closures & Prototypes</p>
  </div>
</div>
<div class="concept-box"><h3>Closures</h3><p>A <strong>closure</strong> is a function that retains access to its outer (enclosing) function's variables, even after the outer function has returned.</p></div>
<div class="code-block"><div class="code-header"><span>closures.js</span><span>JavaScript</span></div><pre><code><span class="kw">function</span> <span class="mth">createCounter</span>() {
    <span class="kw">let</span> count = <span class="val">0</span>; <span class="cmt">// Private variable</span>

    <span class="kw">return</span> {
        <span class="mth">increment</span>: () => ++count,
        <span class="mth">decrement</span>: () => --count,
        <span class="mth">getCount</span>: () => count
    };
}

<span class="kw">const</span> counter = <span class="mth">createCounter</span>();
counter.<span class="mth">increment</span>(); <span class="cmt">// 1</span>
counter.<span class="mth">increment</span>(); <span class="cmt">// 2</span>
counter.<span class="mth">getCount</span>();   <span class="cmt">// 2</span></code></pre></div>
<div class="concept-box"><h3>Prototypes & Inheritance</h3><p>JavaScript uses <strong>prototypal inheritance</strong>. Every object has a prototype, and it inherits properties from its prototype.</p></div>
<div class="code-block"><div class="code-header"><span>prototypes.js</span><span>JavaScript</span></div><pre><code><span class="cmt">// Constructor function</span>
<span class="kw">function</span> <span class="cls">Animal</span>(name) {
    <span class="kw">this</span>.name = name;
}

<span class="cmt">// Add method to prototype</span>
Animal.<span class="prop">prototype</span>.<span class="mth">speak</span> = <span class="kw">function</span>() {
    <span class="kw">return</span> <span class="kw">this</span>.name + <span class="str">' makes a sound'</span>;
};

<span class="cmt">// ES6 Class syntax (syntactic sugar)</span>
<span class="kw">class</span> <span class="cls">Dog</span> <span class="kw">extends</span> <span class="cls">Animal</span> {
    <span class="mth">speak</span>() {
        <span class="kw">return</span> <span class="kw">this</span>.name + <span class="str">' barks'</span>;
    }
}

<span class="kw">const</span> dog = <span class="kw">new</span> <span class="cls">Dog</span>(<span class="str">'Rex'</span>);
dog.<span class="mth">speak</span>(); <span class="cmt">// 'Rex barks'</span></code></pre></div>
<div class="alert-box">Closures enable data privacy (like private variables). The <code>class</code> syntax is syntactic sugar over prototypes — they work the same way under the hood.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a closure that maintains a private counter</li><li>Create a function factory that generates greeting functions</li><li>Create a class with a method on the prototype</li><li>Use <code>extends</code> to create a child class</li></ol></div>`
    }
  ]
};
