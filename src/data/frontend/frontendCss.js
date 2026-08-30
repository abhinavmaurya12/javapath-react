export default  {
  title: 'CSS',
  icon: 'fa-brands fa-css3-alt',
  color: '#1572b6',
  chapters: [
    {
      title: 'Introduction to CSS',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=AGDDdsiZ0Ko" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Introduction to CSS</p>
  </div>
</div>
<div class="concept-box"><h3>What is CSS?</h3><p><strong>CSS (Cascading Style Sheets)</strong> is used to style and layout web pages. While HTML provides the structure, CSS controls the presentation — colors, fonts, spacing, and positioning.</p><ul><li><strong>Cascading:</strong> Styles flow from multiple sources with priority rules</li><li><strong>Style Sheets:</strong> Rules that define how HTML elements are displayed</li><li><strong>Separation:</strong> Content (HTML) is separate from presentation (CSS)</li></ul></div>
<div class="concept-box"><h3>Three Ways to Add CSS</h3>
<table><tr><th>Method</th><th>Example</th><th>Scope</th></tr>
<tr><td>Inline</td><td><code>&lt;h1 style="color:red"&gt;</code></td><td>Single element</td></tr>
<tr><td>Internal</td><td><code>&lt;style&gt;...&lt;/style&gt;</code></td><td>Single page</td></tr>
<tr><td>External</td><td><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></td><td>Entire site</td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>style.css</span><span>CSS</span></div><pre><code><span class="cmt">/* External CSS - best practice */</span>
<span class="kw">body</span> {
    <span class="prop">font-family</span>: <span class="val">Arial, sans-serif</span>;
    <span class="prop">background-color</span>: <span class="val">#f5f5f5</span>;
    <span class="prop">margin</span>: <span class="val">0</span>;
    <span class="prop">padding</span>: <span class="val">0</span>;
}

<span class="kw">h1</span> {
    <span class="prop">color</span>: <span class="val">#333</span>;
    <span class="prop">text-align</span>: <span class="val">center</span>;
    <span class="prop">margin-top</span>: <span class="val">40px</span>;
}</code></pre></div>
<div class="alert-box">Always use external CSS for maintainability. Inline styles should be avoided except for quick testing.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create an external style.css file</li><li>Style all <code>&lt;h1&gt;</code> tags with a custom color</li><li>Change the body background color</li><li>Add padding to the body</li></ol></div>`
    },
    {
      title: 'CSS Selectors',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=QgxkYbGr2II" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">CSS Selectors Explained</p>
  </div>
</div>
<div class="concept-box"><h3>What are Selectors?</h3><p>CSS selectors target HTML elements to apply styles. They can select by tag name, class, ID, attributes, or relationships.</p></div>
<div class="concept-box"><h3>Common Selectors</h3>
<table><tr><th>Selector</th><th>Targets</th><th>Example</th></tr>
<tr><td><code>*</code></td><td>All elements</td><td><code>* { margin: 0; }</code></td></tr>
<tr><td><code>element</code></td><td>Tag name</td><td><code>p { color: red; }</code></td></tr>
<tr><td><code>.class</code></td><td>Class attribute</td><td><code>.btn { ... }</code></td></tr>
<tr><td><code>#id</code></td><td>ID attribute</td><td><code>#header { ... }</code></td></tr>
<tr><td><code>[attr]</code></td><td>Attribute</td><td><code>[type="text"] { ... }</code></td></tr>
<tr><td><code>A B</code></td><td>Descendant</td><td><code>div p { ... }</code></td></tr>
<tr><td><code>A > B</code></td><td>Direct child</td><td><code>ul > li { ... }</code></td></tr>
<tr><td><code>A + B</code></td><td>Adjacent sibling</td><td><code>h1 + p { ... }</code></td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>selectors.css</span><span>CSS</span></div><pre><code><span class="cmt">/* Element selector */</span>
<span class="kw">h1</span> {
    <span class="prop">color</span>: <span class="val">#333</span>;
}

<span class="cmt">/* Class selector */</span>
<span class="kw">.card</span> {
    <span class="prop">background</span>: <span class="val">white</span>;
    <span class="prop">padding</span>: <span class="val">20px</span>;
}

<span class="cmt">/* ID selector */</span>
<span class="kw">#main-header</span> {
    <span class="prop">font-size</span>: <span class="val">2rem</span>;
}

<span class="cmt">/* Descendant selector */</span>
<span class="kw">nav a</span> {
    <span class="prop">text-decoration</span>: <span class="val">none</span>;
}

<span class="cmt">/* Pseudo-class */</span>
<span class="kw">a:hover</span> {
    <span class="prop">color</span>: <span class="val">blue</span>;
}</code></pre></div>
<div class="alert-box">IDs must be unique per page. Use classes for reusable styles. Pseudo-classes like <code>:hover</code>, <code>:nth-child()</code>, and <code>:first-child</code> add interactivity.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Style all <code>&lt;p&gt;</code> tags with a specific font</li><li>Create a <code>.highlight</code> class and apply it to some elements</li><li>Use the <code>:hover</code> pseudo-class on links</li><li>Style all <code>&lt;li&gt;</code> inside a <code>&lt;ul&gt;</code></li></ol></div>`
    },
    {
      title: 'Box Model & Positioning',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=MxEtxo_AaZ4" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">CSS Box Model & Positioning</p>
  </div>
</div>
<div class="concept-box"><h3>The CSS Box Model</h3><p>Every HTML element is a box. The box model consists of: <strong>Content</strong> → <strong>Padding</strong> → <strong>Border</strong> → <strong>Margin</strong>.</p></div>
<div class="concept-box"><h3>Box Model Properties</h3>
<table><tr><th>Property</th><th>Description</th><th>Example</th></tr>
<tr><td><code>width</code> / <code>height</code></td><td>Content size</td><td><code>width: 300px;</code></td></tr>
<tr><td><code>padding</code></td><td>Space inside border</td><td><code>padding: 20px;</code></td></tr>
<tr><td><code>border</code></td><td>Border around padding</td><td><code>border: 1px solid #ccc;</code></td></tr>
<tr><td><code>margin</code></td><td>Space outside border</td><td><code>margin: 10px;</code></td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>boxmodel.css</span><span>CSS</span></div><pre><code><span class="kw">.box</span> {
    <span class="prop">width</span>: <span class="val">300px</span>;
    <span class="prop">height</span>: <span class="val">200px</span>;
    <span class="prop">padding</span>: <span class="val">20px</span>;
    <span class="prop">border</span>: <span class="val">2px solid #333</span>;
    <span class="prop">margin</span>: <span class="val">30px auto</span>;
    <span class="prop">background-color</span>: <span class="val">white</span>;
}

<span class="cmt">/* box-sizing: border-box includes padding+border in width */</span>
<span class="kw">.box</span> {
    <span class="prop">box-sizing</span>: <span class="val">border-box</span>;
}</code></pre></div>
<div class="concept-box"><h3>Position Property</h3>
<table><tr><th>Value</th><th>Description</th></tr>
<tr><td><code>static</code></td><td>Default, normal flow</td></tr>
<tr><td><code>relative</code></td><td>Relative to normal position</td></tr>
<tr><td><code>absolute</code></td><td>Relative to nearest positioned ancestor</td></tr>
<tr><td><code>fixed</code></td><td>Relative to viewport (stays on scroll)</td></tr>
<tr><td><code>sticky</code></td><td>Hybrid: scrolls until threshold, then sticks</td></tr>
</table></div>
<div class="alert-box"><code>box-sizing: border-box</code> is the modern standard. It makes width/height include padding and border, preventing layout surprises.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a box with 300px width, 20px padding, and 2px border</li><li>Add 30px margin to center the box</li><li>Set <code>box-sizing: border-box</code> and observe the difference</li><li>Use <code>position: relative</code> and <code>top: 10px</code></li></ol></div>`
    },
    {
      title: 'Flexbox',
      difficulty: 'Intermediate',
      difficultyClass: 'intermediate',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=PTm-A0HG3GU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Flexbox Complete Tutorial</p>
  </div>
</div>
<div class="concept-box"><h3>What is Flexbox?</h3><p><strong>Flexbox (Flexible Box Layout)</strong> is a one-dimensional layout model for arranging items in a row or column. It makes centering, aligning, and distributing space much easier.</p></div>
<div class="concept-box"><h3>Key Properties</h3>
<table><tr><th>Property</th><th>Applies To</th><th>Common Values</th></tr>
<tr><td><code>display</code></td><td>Container</td><td><code>flex</code></td></tr>
<tr><td><code>flex-direction</code></td><td>Container</td><td><code>row</code>, <code>column</code>, <code>row-reverse</code></td></tr>
<tr><td><code>justify-content</code></td><td>Container</td><td><code>center</code>, <code>space-between</code>, <code>flex-start</code></td></tr>
<tr><td><code>align-items</code></td><td>Container</td><td><code>center</code>, <code>stretch</code>, <code>flex-start</code></td></tr>
<tr><td><code>flex-wrap</code></td><td>Container</td><td><code>wrap</code>, <code>nowrap</code></td></tr>
<tr><td><code>gap</code></td><td>Container</td><td><code>20px</code></td></tr>
<tr><td><code>flex</code></td><td>Item</td><td><code>1</code>, <code>2</code>, <code>0 0 200px</code></td></tr>
<tr><td><code>align-self</code></td><td>Item</td><td><code>center</code>, <code>flex-end</code></td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>flexbox.css</span><span>CSS</span></div><pre><code><span class="kw">.container</span> {
    <span class="prop">display</span>: <span class="val">flex</span>;
    <span class="prop">flex-direction</span>: <span class="val">row</span>;
    <span class="prop">justify-content</span>: <span class="val">space-between</span>;
    <span class="prop">align-items</span>: <span class="val">center</span>;
    <span class="prop">gap</span>: <span class="val">20px</span>;
    <span class="prop">flex-wrap</span>: <span class="val">wrap</span>;
}

<span class="kw">.item</span> {
    <span class="prop">flex</span>: <span class="val">1</span>;
    <span class="prop">min-width</span>: <span class="val">200px</span>;
}

<span class="cmt">/* Center both horizontally and vertically */</span>
<span class="kw">.center</span> {
    <span class="prop">display</span>: <span class="val">flex</span>;
    <span class="prop">justify-content</span>: <span class="val">center</span>;
    <span class="prop">align-items</span>: <span class="val">center</span>;
    <span class="prop">min-height</span>: <span class="val">100vh</span>;
}</code></pre></div>
<div class="alert-box">Flexbox is ideal for 1D layouts (rows OR columns). Use <code>justify-content</code> for main-axis alignment and <code>align-items</code> for cross-axis alignment.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a 3-column card layout with Flexbox</li><li>Center a div both horizontally and vertically</li><li>Create a navbar with evenly spaced links</li><li>Use <code>flex-wrap: wrap</code> for responsive cards</li></ol></div>`
    },
    {
      title: 'CSS Grid',
      difficulty: 'Intermediate',
      difficultyClass: 'intermediate',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=EaWj2AWI5Es" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">CSS Grid Complete Guide</p>
  </div>
</div>
<div class="concept-box"><h3>What is CSS Grid?</h3><p><strong>CSS Grid</strong> is a two-dimensional layout system for rows AND columns. Unlike Flexbox (1D), Grid can handle complex page layouts with precise control.</p></div>
<div class="concept-box"><h3>Grid Properties</h3>
<table><tr><th>Property</th><th>Applies To</th><th>Common Values</th></tr>
<tr><td><code>display</code></td><td>Container</td><td><code>grid</code></td></tr>
<tr><td><code>grid-template-columns</code></td><td>Container</td><td><code>1fr 1fr 1fr</code>, <code>repeat(3, 1fr)</code></td></tr>
<tr><td><code>grid-template-rows</code></td><td>Container</td><td><code>auto 1fr</code></td></tr>
<tr><td><code>gap</code></td><td>Container</td><td><code>20px</code></td></tr>
<tr><td><code>grid-column</code></td><td>Item</td><td><code>1 / 3</code> (span 2 cols)</td></tr>
<tr><td><code>grid-row</code></td><td>Item</td><td><code>1 / 3</code> (span 2 rows)</td></tr>
<tr><td><code>grid-area</code></td><td>Item</td><td><code>"header header"</code></td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>grid.css</span><span>CSS</span></div><pre><code><span class="kw">.grid-container</span> {
    <span class="prop">display</span>: <span class="val">grid</span>;
    <span class="prop">grid-template-columns</span>: <span class="val">repeat(3, 1fr)</span>;
    <span class="prop">grid-template-rows</span>: <span class="val">auto 1fr auto</span>;
    <span class="prop">gap</span>: <span class="val">20px</span>;
    <span class="prop">min-height</span>: <span class="val">100vh</span>;
}

<span class="kw">.header</span> {
    <span class="prop">grid-column</span>: <span class="val">1 / -1</span>; <span class="cmt">/* span all columns */</span>
}

<span class="kw">.sidebar</span> {
    <span class="prop">grid-row</span>: <span class="val">2 / 4</span>; <span class="cmt">/* span rows 2-3 */</span>
}

<span class="cmt">/* Named grid areas */</span>
<span class="kw">.layout</span> {
    <span class="prop">display</span>: <span class="val">grid</span>;
    <span class="prop">grid-template-areas</span>: <span class="val">"header header"</span>
                           <span class="val">"sidebar main"</span>
                           <span class="val">"footer footer"</span>;
}
<span class="kw">.header</span> { <span class="prop">grid-area</span>: <span class="val">header</span>; }
<span class="kw">.sidebar</span> { <span class="prop">grid-area</span>: <span class="val">sidebar</span>; }
<span class="kw">.main</span> { <span class="prop">grid-area</span>: <span class="val">main</span>; }</code></pre></div>
<div class="alert-box">Use <code>1fr</code> for flexible units. <code>repeat(3, 1fr)</code> creates 3 equal columns. Use <code>minmax()</code> for responsive grids: <code>repeat(auto-fit, minmax(300px, 1fr))</code>.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a 3-column grid layout</li><li>Make a header span all columns</li><li>Create a sidebar + main content layout</li><li>Use <code>auto-fit</code> and <code>minmax()</code> for responsive cards</li></ol></div>`
    },
    {
      title: 'Colors, Typography & Units',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=uRQEMKXj6AQ" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">CSS Colors, Typography & Units</p>
  </div>
</div>
<div class="concept-box"><h3>Colors in CSS</h3><p>CSS supports multiple color formats: named colors, hex codes, RGB, RGBA, HSL, and HSLA.</p></div>
<div class="code-block"><div class="code-header"><span>colors.css</span><span>CSS</span></div><pre><code><span class="kw">.example</span> {
    <span class="cmt">/* Named color */</span>
    <span class="prop">color</span>: <span class="val">tomato</span>;

    <span class="cmt">/* Hex code */</span>
    <span class="prop">background</span>: <span class="val">#3498db</span>;

    <span class="cmt">/* RGB with opacity */</span>
    <span class="prop">border-color</span>: <span class="val">rgba(231, 76, 60, 0.5)</span>;

    <span class="cmt">/* HSL */</span>
    <span class="prop">color</span>: <span class="val">hsl(210, 70%, 50%)</span>;
}</code></pre></div>
<div class="concept-box"><h3>Typography</h3>
<table><tr><th>Property</th><th>Purpose</th><th>Example</th></tr>
<tr><td><code>font-family</code></td><td>Font stack</td><td><code>'Segoe UI', Arial, sans-serif</code></td></tr>
<tr><td><code>font-size</code></td><td>Text size</td><td><code>16px</code>, <code>1.2rem</code></td></tr>
<tr><td><code>font-weight</code></td><td>Boldness</td><td><code>400</code>, <code>700</code>, <code>bold</code></td></tr>
<tr><td><code>line-height</code></td><td>Line spacing</td><td><code>1.6</code></td></tr>
<tr><td><code>letter-spacing</code></td><td>Letter spacing</td><td><code>0.5px</code></td></tr>
<tr><td><code>text-align</code></td><td>Alignment</td><td><code>center</code>, <code>justify</code></td></tr>
</table></div>
<div class="concept-box"><h3>CSS Units</h3>
<table><tr><th>Unit</th><th>Type</th><th>Description</th></tr>
<tr><td><code>px</code></td><td>Absolute</td><td>Pixels, fixed size</td></tr>
<tr><td><code>%</code></td><td>Relative</td><td>Percentage of parent</td></tr>
<tr><td><code>em</code></td><td>Relative</td><td>Relative to parent font size</td></tr>
<tr><td><code>rem</code></td><td>Relative</td><td>Relative to root font size</td></tr>
<tr><td><code>vw</code> / <code>vh</code></td><td>Relative</td><td>Viewport width / height</td></tr>
<tr><td><code>fr</code></td><td>Grid</td><td>Fraction of available space</td></tr>
</table></div>
<div class="alert-box">Use <code>rem</code> for font sizes and spacing — it respects user browser settings. Use <code>px</code> for borders and fine control.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Style a paragraph with <code>font-family</code>, <code>font-size</code>, and <code>line-height</code></li><li>Use <code>rem</code> instead of <code>px</code> for spacing</li><li>Apply an RGBA color with transparency</li><li>Set <code>text-align: justify</code> on a paragraph</li></ol></div>`
    },
    {
      title: 'Transitions & Animations',
      difficulty: 'Intermediate',
      difficultyClass: 'intermediate',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=SgmNxE9lWcY" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">CSS Transitions & Animations</p>
  </div>
</div>
<div class="concept-box"><h3>CSS Transitions</h3><p>Transitions smoothly animate property changes over time. Use <code>transition</code> on the element and change properties on hover or via JavaScript.</p></div>
<div class="code-block"><div class="code-header"><span>transitions.css</span><span>CSS</span></div><pre><code><span class="kw">.button</span> {
    <span class="prop">background</span>: <span class="val">#3498db</span>;
    <span class="prop">color</span>: <span class="val">white</span>;
    <span class="prop">padding</span>: <span class="val">12px 24px</span>;
    <span class="prop">border</span>: <span class="val">none</span>;
    <span class="prop">border-radius</span>: <span class="val">8px</span>;
    <span class="prop">transition</span>: <span class="val">all 0.3s ease</span>;
}

<span class="kw">.button:hover</span> {
    <span class="prop">background</span>: <span class="val">#2980b9</span>;
    <span class="prop">transform</span>: <span class="val">translateY(-2px)</span>;
    <span class="prop">box-shadow</span>: <span class="val">0 4px 12px rgba(0,0,0,0.2)</span>;
}</code></pre></div>
<div class="concept-box"><h3>CSS Animations</h3><p>Animations use <code>@keyframes</code> to define complex, multi-step animations that run automatically.</p></div>
<div class="code-block"><div class="code-header"><span>animations.css</span><span>CSS</span></div><pre><code><span class="kw">@keyframes</span> <span class="val">fadeIn</span> {
    <span class="kw">from</span> { <span class="prop">opacity</span>: <span class="val">0</span>; <span class="prop">transform</span>: <span class="val">translateY(20px)</span>; }
    <span class="kw">to</span> { <span class="prop">opacity</span>: <span class="val">1</span>; <span class="prop">transform</span>: <span class="val">translateY(0)</span>; }
}

<span class="kw">.card</span> {
    <span class="prop">animation</span>: <span class="val">fadeIn 0.5s ease forwards</span>;
}

<span class="cmt">/* Multiple keyframes */</span>
<span class="kw">@keyframes</span> <span class="val">pulse</span> {
    <span class="val">0%, 100%</span> { <span class="prop">transform</span>: <span class="val">scale(1)</span>; }
    <span class="val">50%</span> { <span class="prop">transform</span>: <span class="val">scale(1.05)</span>; }
}

<span class="kw">.pulse</span> {
    <span class="prop">animation</span>: <span class="val">pulse 2s infinite</span>;
}</code></pre></div>
<div class="alert-box"><code>transition</code> needs a trigger (hover, class change). <code>animation</code> runs automatically. Use <code>forwards</code> to keep the final state.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a button with a smooth hover transition</li><li>Add a <code>transform: scale(1.1)</code> on hover</li><li>Create a <code>@keyframes</code> animation for a bouncing element</li><li>Add a loading spinner using CSS animation</li></ol></div>`
    },
    {
      title: 'Responsive Design',
      difficulty: 'Advanced',
      difficultyClass: 'advanced',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=69IbzTWg5PM" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Responsive Web Design</p>
  </div>
</div>
<div class="concept-box"><h3>What is Responsive Design?</h3><p><strong>Responsive web design</strong> ensures your site looks good on all devices (mobile, tablet, desktop). It uses flexible layouts, images, and CSS media queries.</p></div>
<div class="concept-box"><h3>Media Queries</h3><p>Media queries apply different styles based on screen size, orientation, or other device features.</p></div>
<div class="code-block"><div class="code-header"><span>responsive.css</span><span>CSS</span></div><pre><code><span class="cmt">/* Mobile First - default styles for mobile */</span>
<span class="kw">.container</span> {
    <span class="prop">padding</span>: <span class="val">16px</span>;
    <span class="prop">display</span>: <span class="val">grid</span>;
    <span class="prop">grid-template-columns</span>: <span class="val">1fr</span>;
}

<span class="cmt">/* Tablet: 768px and up */</span>
<span class="kw">@media</span> (<span class="prop">min-width</span>: <span class="val">768px</span>) {
    <span class="kw">.container</span> {
        <span class="prop">grid-template-columns</span>: <span class="val">repeat(2, 1fr)</span>;
        <span class="prop">padding</span>: <span class="val">24px</span>;
    }
}

<span class="cmt">/* Desktop: 1024px and up */</span>
<span class="kw">@media</span> (<span class="prop">min-width</span>: <span class="val">1024px</span>) {
    <span class="kw">.container</span> {
        <span class="prop">grid-template-columns</span>: <span class="val">repeat(3, 1fr)</span>;
        <span class="prop">max-width</span>: <span class="val">1200px</span>;
        <span class="prop">margin</span>: <span class="val">0 auto</span>;
    }
}</code></pre></div>
<div class="concept-box"><h3>Responsive Techniques</h3>
<table><tr><th>Technique</th><th>Usage</th></tr>
<tr><td><code>viewport</code> meta tag</td><td>Enable mobile zooming control</td></tr>
<tr><td><code>max-width</code></td><td>Fluid images: <code>max-width: 100%</code></td></tr>
<tr><td><code>rem</code> units</td><td>Scale text with root font size</td></tr>
<tr><td><code>vw</code>/<code>vh</code></td><td>Viewport-based sizing</td></tr>
<tr><td><code>clamp()</code></td><td>Fluid sizing: <code>clamp(1rem, 2.5vw, 2rem)</code></td></tr>
</table></div>
<div class="alert-box">Always include <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> in the <code>&lt;head&gt;</code> for responsive mobile behavior.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a mobile-first grid with 1 column</li><li>Add a media query for tablet (768px+) with 2 columns</li><li>Add a media query for desktop (1024px+) with 3 columns</li><li>Test by resizing your browser window</li></ol></div>`
    }
  ]
};
