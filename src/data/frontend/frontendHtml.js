export default  {
  title: 'HTML',
  icon: 'fa-brands fa-html5',
  color: '#e34f26',
  chapters: [
    {
      title: 'Introduction to HTML',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=GDGejH3SDNQ" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Introduction to HTML & Web Development</p>
  </div>
</div>
<div class="concept-box"><h3>What is HTML?</h3><p><strong>HTML (HyperText Markup Language)</strong> is the standard language for creating web pages. It describes the structure of a web page using a series of elements (tags) that tell the browser how to display content.</p><ul><li><strong>HyperText:</strong> Text that links to other text (hyperlinks)</li><li><strong>Markup Language:</strong> Uses tags to define elements</li><li><strong>Not a programming language:</strong> No logic, variables, or loops — just structure</li></ul></div>
<div class="concept-box"><h3>HTML Document Structure</h3><p>Every HTML document follows a basic structure with <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>.</p></div>
<div class="code-block"><div class="code-header"><span>index.html</span><span>HTML</span></div><pre><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> <span class="attr">lang</span>=<span class="str">"en"</span><span class="kw">&gt;</span>
<span class="kw">&lt;head&gt;</span>
    <span class="kw">&lt;meta</span> <span class="attr">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;meta</span> <span class="attr">name</span>=<span class="str">"viewport"</span> <span class="attr">content</span>=<span class="str">"width=device-width, initial-scale=1.0"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;title&gt;</span>My First Webpage<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>
    <span class="kw">&lt;h1&gt;</span>Hello, World!<span class="kw">&lt;/h1&gt;</span>
    <span class="kw">&lt;p&gt;</span>This is my first webpage.<span class="kw">&lt;/p&gt;</span>
<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
<div class="output-block"><h1>Hello, World!</h1><p>This is my first webpage.</p></div>
<div class="concept-box"><h3>Key Elements Explained</h3>
<table><tr><th>Element</th><th>Purpose</th></tr>
<tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>Declares HTML5 document type</td></tr>
<tr><td><code>&lt;html&gt;</code></td><td>Root element of the page</td></tr>
<tr><td><code>&lt;head&gt;</code></td><td>Contains metadata (title, charset, viewport)</td></tr>
<tr><td><code>&lt;body&gt;</code></td><td>Contains visible page content</td></tr>
<tr><td><code>&lt;h1&gt;</code></td><td>Main heading (largest)</td></tr>
<tr><td><code>&lt;p&gt;</code></td><td>Paragraph</td></tr>
</table></div>
<div class="alert-box">HTML tags are case-insensitive, but lowercase is the modern standard. Always close your tags properly!</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create an HTML file with your name as the main heading</li><li>Add a paragraph describing yourself</li><li>Add a second heading <code>&lt;h2&gt;</code> with a subheading</li><li>View the page in your browser</li></ol></div>`
    },
    {
      title: 'HTML Tags & Elements',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=AvzWW0NlEmY" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">HTML Tags & Elements Explained</p>
  </div>
</div>
<div class="concept-box"><h3>HTML Elements</h3><p>An HTML element consists of a <strong>start tag</strong>, <strong>content</strong>, and an <strong>end tag</strong>. Some elements are <strong>void elements</strong> (self-closing) like <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, and <code>&lt;hr&gt;</code>.</p></div>
<div class="concept-box"><h3>Common Text Tags</h3>
<table><tr><th>Tag</th><th>Purpose</th><th>Example</th></tr>
<tr><td><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code></td><td>Headings</td><td><code>&lt;h1&gt;Title&lt;/h1&gt;</code></td></tr>
<tr><td><code>&lt;p&gt;</code></td><td>Paragraph</td><td><code>&lt;p&gt;Text...&lt;/p&gt;</code></td></tr>
<tr><td><code>&lt;strong&gt;</code></td><td>Bold (important)</td><td><code>&lt;strong&gt;Bold&lt;/strong&gt;</code></td></tr>
<tr><td><code>&lt;em&gt;</code></td><td>Italic (emphasis)</td><td><code>&lt;em&gt;Italic&lt;/em&gt;</code></td></tr>
<tr><td><code>&lt;br&gt;</code></td><td>Line break</td><td>Self-closing</td></tr>
<tr><td><code>&lt;hr&gt;</code></td><td>Horizontal rule</td><td>Self-closing</td></tr>
<tr><td><code>&lt;blockquote&gt;</code></td><td>Quotation</td><td><code>&lt;blockquote&gt;...&lt;/blockquote&gt;</code></td></tr>
<tr><td><code>&lt;code&gt;</code></td><td>Inline code</td><td><code>&lt;code&gt;x = 5&lt;/code&gt;</code></td></tr>
</table></div>
<div class="concept-box"><h3>Links & Images</h3><p>The <code>&lt;a&gt;</code> tag creates hyperlinks, and the <code>&lt;img&gt;</code> tag embeds images.</p></div>
<div class="code-block"><div class="code-header"><span>links-images.html</span><span>HTML</span></div><pre><code><span class="cmt">&lt;!-- Link --&gt;</span>
<span class="kw">&lt;a</span> <span class="attr">href</span>=<span class="str">"https://example.com"</span> <span class="attr">target</span>=<span class="str">"_blank"</span><span class="kw">&gt;</span>
    Visit Example
<span class="kw">&lt;/a&gt;</span>

<span class="cmt">&lt;!-- Image --&gt;</span>
<span class="kw">&lt;img</span> <span class="attr">src</span>=<span class="str">"photo.jpg"</span> <span class="attr">alt</span>=<span class="str">"A beautiful photo"</span> <span class="attr">width</span>=<span class="str">"300"</span><span class="kw">&gt;</span></code></pre></div>
<div class="alert-box">Always include an <code>alt</code> attribute on images for accessibility. <code>target="_blank"</code> opens the link in a new tab.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a heading, 3 paragraphs, and a horizontal line</li><li>Add a link to your favorite website</li><li>Add an image with proper alt text</li><li>Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> to emphasize words</li></ol></div>`
    },
    {
      title: 'HTML Forms & Input',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=H9zdfZrFUp0" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">HTML Forms & Input Explained</p>
  </div>
</div>
<div class="concept-box"><h3>What is a Form?</h3><p>HTML forms collect user input. The <code>&lt;form&gt;</code> element wraps input elements and uses the <code>action</code> attribute to specify where data is sent.</p></div>
<div class="concept-box"><h3>Input Types</h3>
<table><tr><th>Input Type</th><th>Purpose</th><th>Example</th></tr>
<tr><td><code>text</code></td><td>Single-line text</td><td><code>&lt;input type="text"&gt;</code></td></tr>
<tr><td><code>password</code></td><td>Password field</td><td><code>&lt;input type="password"&gt;</code></td></tr>
<tr><td><code>email</code></td><td>Email address</td><td><code>&lt;input type="email"&gt;</code></td></tr>
<tr><td><code>number</code></td><td>Numeric input</td><td><code>&lt;input type="number"&gt;</code></td></tr>
<tr><td><code>checkbox</code></td><td>Multiple choice</td><td><code>&lt;input type="checkbox"&gt;</code></td></tr>
<tr><td><code>radio</code></td><td>Single choice</td><td><code>&lt;input type="radio"&gt;</code></td></tr>
<tr><td><code>date</code></td><td>Date picker</td><td><code>&lt;input type="date"&gt;</code></td></tr>
<tr><td><code>submit</code></td><td>Submit button</td><td><code>&lt;input type="submit"&gt;</code></td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>form.html</span><span>HTML</span></div><pre><code><span class="kw">&lt;form</span> <span class="attr">action</span>=<span class="str">"/submit"</span> <span class="attr">method</span>=<span class="str">"POST"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;label&gt;</span>Name:<span class="kw">&lt;/label&gt;</span>
    <span class="kw">&lt;input</span> <span class="attr">type</span>=<span class="str">"text"</span> <span class="attr">name</span>=<span class="str">"name"</span> <span class="attr">placeholder</span>=<span class="str">"Enter your name"</span><span class="kw">&gt;</span>

    <span class="kw">&lt;label&gt;</span>Email:<span class="kw">&lt;/label&gt;</span>
    <span class="kw">&lt;input</span> <span class="attr">type</span>=<span class="str">"email"</span> <span class="attr">name</span>=<span class="str">"email"</span><span class="kw">&gt;</span>

    <span class="kw">&lt;label&gt;</span>Gender:<span class="kw">&lt;/label&gt;</span>
    <span class="kw">&lt;input</span> <span class="attr">type</span>=<span class="str">"radio"</span> <span class="attr">name</span>=<span class="str">"gender"</span> <span class="attr">value</span>=<span class="str">"male"</span><span class="kw">&gt;</span> Male
    <span class="kw">&lt;input</span> <span class="attr">type</span>=<span class="str">"radio"</span> <span class="attr">name</span>=<span class="str">"gender"</span> <span class="attr">value</span>=<span class="str">"female"</span><span class="kw">&gt;</span> Female

    <span class="kw">&lt;button</span> <span class="attr">type</span>=<span class="str">"submit"</span><span class="kw">&gt;</span>Submit<span class="kw">&lt;/button&gt;</span>
<span class="kw">&lt;/form&gt;</span></code></pre></div>
<div class="alert-box">Use <code>name</code> attributes on inputs to identify data on the server. <code>method="POST"</code> sends data securely in the request body.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a login form with email and password fields</li><li>Add a checkbox for "Remember me"</li><li>Add a dropdown using <code>&lt;select&gt;</code> and <code>&lt;option&gt;</code></li><li>Add a textarea for a message</li></ol></div>`
    },
    {
      title: 'Semantic HTML',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=kX3TfdUqpuU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Semantic HTML5 Tutorial</p>
  </div>
</div>
<div class="concept-box"><h3>What is Semantic HTML?</h3><p><strong>Semantic HTML</strong> uses meaningful tags that describe the content's purpose, making pages more accessible and SEO-friendly. Instead of <code>&lt;div&gt;</code> for everything, use tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, and <code>&lt;footer&gt;</code>.</p></div>
<div class="concept-box"><h3>Semantic vs Non-Semantic</h3>
<table><tr><th>Non-Semantic</th><th>Semantic</th><th>Purpose</th></tr>
<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;header&gt;</code></td><td>Page or section header</td></tr>
<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;nav&gt;</code></td><td>Navigation links</td></tr>
<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;main&gt;</code></td><td>Main content</td></tr>
<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;section&gt;</code></td><td>Thematic grouping</td></tr>
<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;article&gt;</code></td><td>Self-contained content</td></tr>
<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;aside&gt;</code></td><td>Sidebar content</td></tr>
<tr><td><code>&lt;div&gt;</code></td><td><code>&lt;footer&gt;</code></td><td>Page footer</td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>semantic.html</span><span>HTML</span></div><pre><code><span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html&gt;</span>
<span class="kw">&lt;head&gt;</span>
    <span class="kw">&lt;title&gt;</span>My Blog<span class="kw">&lt;/title&gt;</span>
<span class="kw">&lt;/head&gt;</span>
<span class="kw">&lt;body&gt;</span>
    <span class="kw">&lt;header&gt;</span>
        <span class="kw">&lt;h1&gt;</span>My Blog<span class="kw">&lt;/h1&gt;</span>
        <span class="kw">&lt;nav&gt;</span>
            <span class="kw">&lt;a</span> <span class="attr">href</span>=<span class="str">"/home"</span><span class="kw">&gt;</span>Home<span class="kw">&lt;/a&gt;</span>
            <span class="kw">&lt;a</span> <span class="attr">href</span>=<span class="str">"/about"</span><span class="kw">&gt;</span>About<span class="kw">&lt;/a&gt;</span>
        <span class="kw">&lt;/nav&gt;</span>
    <span class="kw">&lt;/header&gt;</span>

    <span class="kw">&lt;main&gt;</span>
        <span class="kw">&lt;article&gt;</span>
            <span class="kw">&lt;h2&gt;</span>Article Title<span class="kw">&lt;/h2&gt;</span>
            <span class="kw">&lt;p&gt;</span>Article content...<span class="kw">&lt;/p&gt;</span>
        <span class="kw">&lt;/article&gt;</span>
        <span class="kw">&lt;aside&gt;</span>
            <span class="kw">&lt;h3&gt;</span>Related<span class="kw">&lt;/h3&gt;</span>
            <span class="kw">&lt;p&gt;</span>Sidebar content...<span class="kw">&lt;/p&gt;</span>
        <span class="kw">&lt;/aside&gt;</span>
    <span class="kw">&lt;/main&gt;</span>

    <span class="kw">&lt;footer&gt;</span>
        <span class="kw">&lt;p&gt;</span>&copy; 2026 My Blog<span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;/footer&gt;</span>
<span class="kw">&lt;/body&gt;</span>
<span class="kw">&lt;/html&gt;</span></code></pre></div>
<div class="alert-box">Semantic HTML improves SEO, accessibility (screen readers), and code readability. Always prefer semantic tags over generic <code>&lt;div&gt;</code>.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Convert a <code>&lt;div&gt;</code>-based layout to semantic HTML</li><li>Create a blog post using <code>&lt;article&gt;</code></li><li>Add a <code>&lt;nav&gt;</code> for site navigation</li><li>Use <code>&lt;aside&gt;</code> for a sidebar</li></ol></div>`
    },
    {
      title: 'HTML Tables & Lists',
      difficulty: 'Intermediate',
      difficultyClass: 'intermediate',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=mD8eFFz2g8o" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">HTML Tables & Lists</p>
  </div>
</div>
<div class="concept-box"><h3>HTML Lists</h3><p>HTML supports three types of lists: <strong>ordered</strong> (<code>&lt;ol&gt;</code>), <strong>unordered</strong> (<code>&lt;ul&gt;</code>), and <strong>description</strong> (<code>&lt;dl&gt;</code>) lists.</p></div>
<div class="code-block"><div class="code-header"><span>lists.html</span><span>HTML</span></div><pre><code><span class="cmt">&lt;!-- Unordered List --&gt;</span>
<span class="kw">&lt;ul&gt;</span>
    <span class="kw">&lt;li&gt;</span>Apple<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>Banana<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>Orange<span class="kw">&lt;/li&gt;</span>
<span class="kw">&lt;/ul&gt;</span>

<span class="cmt">&lt;!-- Ordered List --&gt;</span>
<span class="kw">&lt;ol&gt;</span>
    <span class="kw">&lt;li&gt;</span>First step<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>Second step<span class="kw">&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;</span>Third step<span class="kw">&lt;/li&gt;</span>
<span class="kw">&lt;/ol&gt;</span>

<span class="cmt">&lt;-- Description List --&gt;</span>
<span class="kw">&lt;dl&gt;</span>
    <span class="kw">&lt;dt&gt;</span>HTML<span class="kw">&lt;/dt&gt;</span>
    <span class="kw">&lt;dd&gt;</span>HyperText Markup Language<span class="kw">&lt;/dd&gt;</span>
<span class="kw">&lt;/dl&gt;</span></code></pre></div>
<div class="concept-box"><h3>HTML Tables</h3><p>Tables display data in rows and columns using <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> (table row), <code>&lt;th&gt;</code> (table header), and <code>&lt;td&gt;</code> (table data).</p></div>
<div class="code-block"><div class="code-header"><span>table.html</span><span>HTML</span></div><pre><code><span class="kw">&lt;table&gt;</span>
    <span class="kw">&lt;thead&gt;</span>
        <span class="kw">&lt;tr&gt;</span>
            <span class="kw">&lt;th&gt;</span>Name<span class="kw">&lt;/th&gt;</span>
            <span class="kw">&lt;th&gt;</span>Age<span class="kw">&lt;/th&gt;</span>
            <span class="kw">&lt;th&gt;</span>City<span class="kw">&lt;/th&gt;</span>
        <span class="kw">&lt;/tr&gt;</span>
    <span class="kw">&lt;/thead&gt;</span>
    <span class="kw">&lt;tbody&gt;</span>
        <span class="kw">&lt;tr&gt;</span>
            <span class="kw">&lt;td&gt;</span>Alice<span class="kw">&lt;/td&gt;</span>
            <span class="kw">&lt;td&gt;</span>25<span class="kw">&lt;/td&gt;</span>
            <span class="kw">&lt;td&gt;</span>New York<span class="kw">&lt;/td&gt;</span>
        <span class="kw">&lt;/tr&gt;</span>
        <span class="kw">&lt;tr&gt;</span>
            <span class="kw">&lt;td&gt;</span>Bob<span class="kw">&lt;/td&gt;</span>
            <span class="kw">&lt;td&gt;</span>30<span class="kw">&lt;/td&gt;</span>
            <span class="kw">&lt;td&gt;</span>London<span class="kw">&lt;/td&gt;</span>
        <span class="kw">&lt;/tr&gt;</span>
    <span class="kw">&lt;/tbody&gt;</span>
<span class="kw">&lt;/table&gt;</span></code></pre></div>
<div class="alert-box">Use <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, and <code>&lt;tfoot&gt;</code> to structure tables semantically. Add <code>border="1"</code> or CSS for borders.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a list of your 5 favorite programming languages</li><li>Create an ordered list of steps to make tea</li><li>Build a table with 3 columns: Product, Price, Quantity</li><li>Add a description list for web technology terms</li></ol></div>`
    },
    {
      title: 'Accessibility & SEO',
      difficulty: 'Intermediate',
      difficultyClass: 'intermediate',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=MegmYHlOf3E" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">HTML Accessibility & SEO</p>
  </div>
</div>
<div class="concept-box"><h3>Web Accessibility (a11y)</h3><p>Accessibility ensures your website can be used by everyone, including people with disabilities. Key practices:</p><ul><li><strong>Alt text:</strong> Describe images with <code>alt</code> attributes</li><li><strong>Labels:</strong> Associate <code>&lt;label&gt;</code> with inputs using <code>for</code> and <code>id</code></li><li><strong>ARIA:</strong> Use ARIA roles for complex widgets</li><li><strong>Keyboard nav:</strong> Ensure all interactive elements are focusable</li><li><strong>Color contrast:</strong> Text should have sufficient contrast against background</li></ul></div>
<div class="concept-box"><h3>SEO Basics</h3><p><strong>Search Engine Optimization (SEO)</strong> helps search engines understand and rank your content.</p>
<table><tr><th>Element</th><th>Purpose</th></tr>
<tr><td><code>&lt;title&gt;</code></td><td>Page title shown in search results</td></tr>
<tr><td><code>&lt;meta name="description"&gt;</code></td><td>Summary shown in search results</td></tr>
<tr><td><code>&lt;h1&gt;</code></td><td>Main heading — only one per page</td></tr>
<tr><td><code>&lt;meta name="viewport"&gt;</code></td><td>Mobile responsiveness</td></tr>
<tr><td>Semantic HTML</td><td>Helps crawlers understand content hierarchy</td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>seo.html</span><span>HTML</span></div><pre><code><span class="kw">&lt;head&gt;</span>
    <span class="kw">&lt;meta</span> <span class="attr">charset</span>=<span class="str">"UTF-8"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;meta</span> <span class="attr">name</span>=<span class="str">"viewport"</span> <span class="attr">content</span>=<span class="str">"width=device-width, initial-scale=1.0"</span><span class="kw">&gt;</span>

    <span class="cmt">&lt;!-- SEO Meta Tags --&gt;</span>
    <span class="kw">&lt;title&gt;</span>Learn HTML — JavaNest<span class="kw">&lt;/title&gt;</span>
    <span class="kw">&lt;meta</span> <span class="attr">name</span>=<span class="str">"description"</span> <span class="attr">content</span>=<span class="str">"Complete HTML tutorial for beginners"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;meta</span> <span class="attr">name</span>=<span class="str">"keywords"</span> <span class="attr">content</span>=<span class="str">"HTML, web development, tutorial"</span><span class="kw">&gt;</span>

    <span class="cmt">&lt;!-- Open Graph for Social Media --&gt;</span>
    <span class="kw">&lt;meta</span> <span class="attr">property</span>=<span class="str">"og:title"</span> <span class="attr">content</span>=<span class="str">"Learn HTML"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;meta</span> <span class="attr">property</span>=<span class="str">"og:description"</span> <span class="attr">content</span>=<span class="str">"Complete HTML tutorial"</span><span class="kw">&gt;</span>

    <span class="cmt">&lt;!-- Accessible Form --&gt;</span>
    <span class="kw">&lt;label</span> <span class="attr">for</span>=<span class="str">"email"</span><span class="kw">&gt;</span>Email:<span class="kw">&lt;/label&gt;</span>
    <span class="kw">&lt;input</span> <span class="attr">type</span>=<span class="str">"email"</span> <span class="attr">id</span>=<span class="str">"email"</span> <span class="attr">aria-describedby</span>=<span class="str">"email-help"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;small</span> <span class="attr">id</span>=<span class="str">"email-help"</span><span class="kw">&gt;</span>We'll never share your email.<span class="kw">&lt;/small&gt;</span>
<span class="kw">&lt;/head&gt;</span></code></pre></div>
<div class="alert-box">Always use <code>lang</code> attribute on <code>&lt;html&gt;</code> tag for accessibility and SEO. Use <code>aria-*</code> attributes for screen readers.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Add <code>alt</code> text to all images on your page</li><li>Associate labels with all form inputs</li><li>Add proper meta description to your page</li><li>Ensure your page has exactly one <code>&lt;h1&gt;</code></li></ol></div>`
    }
  ]
};
