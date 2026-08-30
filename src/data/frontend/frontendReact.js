export default  {
  title: 'React',
  icon: 'fa-brands fa-react',
  color: '#61dafb',
  chapters: [
    {
      title: 'Introduction to React',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=x4rFhThSX04" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Introduction to React</p>
  </div>
</div>
<div class="concept-box"><h3>What is React?</h3><p><strong>React</strong> is a JavaScript library for building user interfaces, developed by Meta (Facebook). It uses a <strong>component-based architecture</strong> and a virtual DOM for efficient rendering.</p><ul><li><strong>Component-Based:</strong> Build encapsulated components that manage their own state</li><li><strong>Declarative:</strong> Describe what UI should look like, React updates it</li><li><strong>Virtual DOM:</strong> Efficient diffing algorithm minimizes real DOM updates</li><li><strong>Unidirectional Data Flow:</strong> Data flows top-down from parent to child</li></ul></div>
<div class="concept-box"><h3>Setting Up React</h3>
<table><tr><th>Method</th><th>Command</th><th>Use Case</th></tr>
<tr><td>Vite</td><td><code>npm create vite@latest my-app -- --template react</code></td><td>Fast, modern setup</td></tr>
<tr><td>Create React App</td><td><code>npx create-react-app my-app</code></td><td>All-in-one (legacy)</td></tr>
<tr><td>CDN</td><td><code>&lt;script src="react.production.min.js"&gt;</code></td><td>Quick prototyping</td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>App.jsx</span><span>JSX</span></div><pre><code><span class="kw">import</span> React <span class="kw">from</span> <span class="str">'react'</span>;
<span class="kw">import</span> ReactDOM <span class="kw">from</span> <span class="str">'react-dom/client'</span>;
<span class="kw">import</span> <span class="str">'./index.css'</span>;
<span class="kw">import</span> App <span class="kw">from</span> <span class="str">'./App.jsx'</span>;

ReactDOM.<span class="mth">createRoot</span>(document.<span class="mth">getElementById</span>(<span class="str">'root'</span>)).<span class="mth">render</span>(
    <span class="kw">&lt;React.StrictMode&gt;</span>
        <span class="kw">&lt;App /&gt;</span>
    <span class="kw">&lt;/React.StrictMode&gt;</span>
);</code></pre></div>
<div class="alert-box">React uses JSX — a syntax extension that looks like HTML in JavaScript. JSX gets compiled to <code>React.createElement()</code> calls.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a new React project with Vite</li><li>Run <code>npm run dev</code> and see the app in browser</li><li>Modify the App.jsx to display your name</li><li>Install React Developer Tools browser extension</li></ol></div>`
    },
    {
      title: 'JSX & Components',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=a0qYh8fLD-M" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">JSX & Components</p>
  </div>
</div>
<div class="concept-box"><h3>What is JSX?</h3><p><strong>JSX (JavaScript XML)</strong> lets you write HTML-like syntax in JavaScript. It makes React code easier to write and read.</p></div>
<div class="code-block"><div class="code-header"><span>JSX.jsx</span><span>JSX</span></div><pre><code><span class="cmt">// JSX - looks like HTML, but it's JavaScript</span>
<span class="kw">const</span> element = <span class="kw">&lt;h1&gt;</span>Hello, World!<span class="kw">&lt;/h1&gt;</span>;

<span class="cmt">// Embedding expressions with {}</span>
<span class="kw">const</span> name = <span class="str">"Alice"</span>;
<span class="kw">const</span> element2 = <span class="kw">&lt;h1&gt;</span>Hello, {name}!<span class="kw">&lt;/h1&gt;</span>;

<span class="cmt">// JavaScript expressions in JSX</span>
<span class="kw">const</span> element3 = <span class="kw">&lt;div&gt;</span>
    <span class="kw">&lt;h1&gt;</span>{<span class="val">2</span> + <span class="val">2</span>}<span class="kw">&lt;/h1&gt;</span>
    <span class="kw">&lt;p&gt;</span>{name.<span class="prop">toUpperCase</span>()}<span class="kw">&lt;/p&gt;</span>
    <span class="kw">&lt;ul&gt;</span>
        {[<span class="str">'a'</span>, <span class="str">'b'</span>, <span class="str">'c'</span>].<span class="mth">map</span>(item => <span class="kw">&lt;li key={item}&gt;</span>{item}<span class="kw">&lt;/li&gt;</span>)}
    <span class="kw">&lt;/ul&gt;</span>
<span class="kw">&lt;/div&gt;</span>;</code></pre></div>
<div class="concept-box"><h3>Components</h3><p>Components are reusable building blocks. They can be functions (recommended) or classes.</p></div>
<div class="code-block"><div class="code-header"><span>components.jsx</span><span>JSX</span></div><pre><code><span class="cmt">// Functional Component (recommended)</span>
<span class="kw">function</span> <span class="mth">Welcome</span>(props) {
    <span class="kw">return</span> <span class="kw">&lt;h1&gt;</span>Hello, {props.name}!<span class="kw">&lt;/h1&gt;</span>;
}

<span class="cmt">// Arrow function component</span>
<span class="kw">const</span> Welcome = ({ name }) => <span class="kw">&lt;h1&gt;</span>Hello, {name}!<span class="kw">&lt;/h1&gt;</span>;

<span class="cmt">// Using a component</span>
<span class="kw">&lt;Welcome</span> <span class="attr">name</span>=<span class="str">"Alice"</span> <span class="kw">/&gt;</span>
<span class="kw">&lt;Welcome</span> <span class="attr">name</span>=<span class="str">"Bob"</span> <span class="kw">/&gt;</span></code></pre></div>
<div class="alert-box">Component names MUST start with a capital letter. JSX uses <code>className</code> instead of <code>class</code>, and <code>htmlFor</code> instead of <code>for</code>.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a <code>Heading</code> component that accepts a <code>text</code> prop</li><li>Create a <code>Card</code> component with title and body props</li><li>Use a component inside another component</li><li>Render a list of items using <code>.map()</code> in JSX</li></ol></div>`
    },
    {
      title: 'Props & State',
      difficulty: 'Beginner',
      difficultyClass: 'beginner',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=SqcY0GlETPk" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">React Props & State</p>
  </div>
</div>
<div class="concept-box"><h3>Props</h3><p><strong>Props (properties)</strong> are read-only inputs passed from parent to child components. They enable component reusability.</p></div>
<div class="code-block"><div class="code-header"><span>props.jsx</span><span>JSX</span></div><pre><code><span class="cmt">// Parent component</span>
<span class="kw">function</span> <span class="mth">App</span>() {
    <span class="kw">return</span> (
        <span class="kw">&lt;div&gt;</span>
            <span class="kw">&lt;Card</span> <span class="attr">title</span>=<span class="str">"React Basics"</span> <span class="attr">body</span>=<span class="str">"Learn props and state"</span> <span class="kw">/&gt;</span>
            <span class="kw">&lt;Card</span> <span class="attr">title</span>=<span class="str">"Components"</span> <span class="attr">body</span>=<span class="str">"Build reusable UI"</span> <span class="kw">/&gt;</span>
        <span class="kw">&lt;/div&gt;</span>
    );
}

<span class="cmt">// Child component</span>
<span class="kw">function</span> <span class="mth">Card</span>(props) {
    <span class="kw">return</span> (
        <span class="kw">&lt;div</span> <span class="attr">className</span>=<span class="str">"card"</span><span class="kw">&gt;</span>
            <span class="kw">&lt;h2&gt;</span>{props.title}<span class="kw">&lt;/h2&gt;</span>
            <span class="kw">&lt;p&gt;</span>{props.body}<span class="kw">&lt;/p&gt;</span>
        <span class="kw">&lt;/div&gt;</span>
    );
}</code></pre></div>
<div class="concept-box"><h3>State</h3><p><strong>State</strong> is mutable data that belongs to a component. When state changes, React re-renders the component.</p></div>
<div class="code-block"><div class="code-header"><span>state.jsx</span><span>JSX</span></div><pre><code><span class="kw">import</span> { useState } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">function</span> <span class="mth">Counter</span>() {
    <span class="cmt">// Declare state variable</span>
    <span class="kw">const</span> [count, setCount] = <span class="mth">useState</span>(<span class="val">0</span>);

    <span class="kw">return</span> (
        <span class="kw">&lt;div&gt;</span>
            <span class="kw">&lt;p&gt;</span>Count: {count}<span class="kw">&lt;/p&gt;</span>
            <span class="kw">&lt;button</span> <span class="attr">onClick</span>={() => <span class="mth">setCount</span>(count + <span class="val">1</span>)}<span class="kw">&gt;</span>
                Increment
            <span class="kw">&lt;/button&gt;</span>
            <span class="kw">&lt;button</span> <span class="attr">onClick</span>={() => <span class="mth">setCount</span>(count - <span class="val">1</span>)}<span class="kw">&gt;</span>
                Decrement
            <span class="kw">&lt;/button&gt;</span>
        <span class="kw">&lt;/div&gt;</span>
    );
}</code></pre></div>
<div class="alert-box"><strong>Props</strong> = data from parent (read-only). <strong>State</strong> = data within component (mutable). State changes trigger re-renders.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a component that accepts <code>title</code> and <code>color</code> props</li><li>Use <code>useState</code> to track a counter</li><li>Update state with a button click</li><li>Pass state from parent to child as props</li></ol></div>`
    },
    {
      title: 'React Hooks',
      difficulty: 'Intermediate',
      difficultyClass: 'intermediate',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=UgUPXKRNS-I" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">React Hooks Complete Guide</p>
  </div>
</div>
<div class="concept-box"><h3>What are Hooks?</h3><p><strong>Hooks</strong> let you use state and other React features in functional components. They start with <code>use</code> (e.g., <code>useState</code>, <code>useEffect</code>).</p></div>
<div class="concept-box"><h3>Common Hooks</h3>
<table><tr><th>Hook</th><th>Purpose</th><th>Example</th></tr>
<tr><td><code>useState</code></td><td>Add state to component</td><td><code>const [count, setCount] = useState(0)</code></td></tr>
<tr><td><code>useEffect</code></td><td>Side effects (fetch, DOM, subscriptions)</td><td><code>useEffect(() => {...}, [dep])</code></td></tr>
<tr><td><code>useContext</code></td><td>Access context value</td><td><code>const theme = useContext(ThemeContext)</code></td></tr>
<tr><td><code>useRef</code></td><td>Persistent mutable reference</td><td><code>const inputRef = useRef(null)</code></td></tr>
<tr><td><code>useMemo</code></td><td>Memoize expensive calculations</td><td><code>const val = useMemo(() => calc(), [dep])</code></td></tr>
<tr><td><code>useCallback</code></td><td>Memoize functions</td><td><code>const fn = useCallback(() => {}, [dep])</code></td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span>hooks.jsx</span><span>JSX</span></div><pre><code><span class="kw">import</span> { useState, useEffect } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">function</span> <span class="mth">UserProfile</span>({ userId }) {
    <span class="kw">const</span> [user, setUser] = <span class="mth">useState</span>(<span class="kw">null</span>);
    <span class="kw">const</span> [loading, setLoading] = <span class="mth">useState</span>(<span class="kw">true</span>);

    <span class="mth">useEffect</span>(() => {
        <span class="mth">fetch</span>(<span class="str">\`/api/users/\${userId}\`</span>)
            .<span class="mth">then</span>(res => res.<span class="mth">json</span>())
            .<span class="mth">then</span>(data => {
                <span class="mth">setUser</span>(data);
                <span class="mth">setLoading</span>(<span class="kw">false</span>);
            });
    }, [userId]); <span class="cmt">// Re-run when userId changes</span>

    <span class="kw">if</span> (loading) <span class="kw">return</span> <span class="kw">&lt;p&gt;</span>Loading...<span class="kw">&lt;/p&gt;</span>;

    <span class="kw">return</span> <span class="kw">&lt;div&gt;</span>{user.name}<span class="kw">&lt;/div&gt;</span>;
}</code></pre></div>
<div class="alert-box">Follow the <strong>Rules of Hooks</strong>: only call hooks at the top level (not in loops/conditions) and only from React functions. <code>useEffect</code> with empty array <code>[]</code> runs once on mount.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a component with <code>useState</code> for a toggle</li><li>Use <code>useEffect</code> to update document title</li><li>Add a dependency array to control when effect runs</li><li>Use <code>useRef</code> to access a DOM element</li></ol></div>`
    },
    {
      title: 'Event Handling & Forms',
      difficulty: 'Intermediate',
      difficultyClass: 'intermediate',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=6fXNZ0tLUKc" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">React Event Handling & Forms</p>
  </div>
</div>
<div class="concept-box"><h3>Event Handling in React</h3><p>React events use camelCase naming (e.g., <code>onClick</code> instead of <code>onclick</code>). Pass a function as the event handler.</p></div>
<div class="code-block"><div class="code-header"><span>events.jsx</span><span>JSX</span></div><pre><code><span class="kw">function</span> <span class="mth">Button</span>() {
    <span class="kw">const</span> <span class="mth">handleClick</span> = (e) => {
        <span class="prop">console</span>.<span class="mth">log</span>(<span class="str">'Clicked!'</span>, e.<span class="prop">target</span>);
    };

    <span class="kw">return</span> (
        <span class="kw">&lt;button</span> <span class="attr">onClick</span>={handleClick}<span class="kw">&gt;</span>
            Click me
        <span class="kw">&lt;/button&gt;</span>
    );
}</code></pre></div>
<div class="concept-box"><h3>Controlled Forms</h3><p>In React, form elements are <strong>controlled components</strong> — their value is controlled by React state.</p></div>
<div class="code-block"><div class="code-header"><span>forms.jsx</span><span>JSX</span></div><pre><code><span class="kw">function</span> <span class="mth">LoginForm</span>() {
    <span class="kw">const</span> [email, setEmail] = <span class="mth">useState</span>(<span class="str">''</span>);
    <span class="kw">const</span> [password, setPassword] = <span class="mth">useState</span>(<span class="str">''</span>);

    <span class="kw">const</span> <span class="mth">handleSubmit</span> = (e) => {
        e.<span class="mth">preventDefault</span>();
        <span class="prop">console</span>.<span class="mth">log</span>({ email, password });
    };

    <span class="kw">return</span> (
        <span class="kw">&lt;form</span> <span class="attr">onSubmit</span>={handleSubmit}<span class="kw">&gt;</span>
            <span class="kw">&lt;input</span>
                <span class="attr">type</span>=<span class="str">"email"</span>
                <span class="attr">value</span>={email}
                <span class="attr">onChange</span>={(e) => <span class="mth">setEmail</span>(e.<span class="prop">target</span>.value)}
                <span class="attr">placeholder</span>=<span class="str">"Email"</span>
            <span class="kw">/&gt;</span>
            <span class="kw">&lt;input</span>
                <span class="attr">type</span>=<span class="str">"password"</span>
                <span class="attr">value</span>={password}
                <span class="attr">onChange</span>={(e) => <span class="mth">setPassword</span>(e.<span class="prop">target</span>.value)}
                <span class="attr">placeholder</span>=<span class="str">"Password"</span>
            <span class="kw">/&gt;</span>
            <span class="kw">&lt;button</span> <span class="attr">type</span>=<span class="str">"submit"</span><span class="kw">&gt;</span>Login<span class="kw">&lt;/button&gt;</span>
        <span class="kw">&lt;/form&gt;</span>
    );
}</code></pre></div>
<div class="alert-box">Always use <code>onSubmit</code> on forms instead of <code>onClick</code> on buttons. Call <code>e.preventDefault()</code> to prevent page reload. Each input needs its own state variable.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a form with name and email inputs</li><li>Use <code>onChange</code> to update state on every keystroke</li><li>Handle form submission with <code>onSubmit</code></li><li>Add input validation (required, minLength)</li></ol></div>`
    },
    {
      title: 'React Router',
      difficulty: 'Intermediate',
      difficultyClass: 'intermediate',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=SooZZCeppuk" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">React Router Complete Guide</p>
  </div>
</div>
<div class="concept-box"><h3>What is React Router?</h3><p><strong>React Router</strong> is the standard library for routing in React. It enables navigation between different views without page reloads (Single Page Application).</p></div>
<div class="code-block"><div class="code-header"><span>router.jsx</span><span>JSX</span></div><pre><code><span class="kw">import</span> { BrowserRouter, Routes, Route, Link } <span class="kw">from</span> <span class="str">'react-router-dom'</span>;

<span class="kw">function</span> <span class="mth">App</span>() {
    <span class="kw">return</span> (
        <span class="kw">&lt;BrowserRouter&gt;</span>
            <span class="kw">&lt;nav&gt;</span>
                <span class="kw">&lt;Link</span> <span class="attr">to</span>=<span class="str">"/"</span><span class="kw">&gt;</span>Home<span class="kw">&lt;/Link&gt;</span>
                <span class="kw">&lt;Link</span> <span class="attr">to</span>=<span class="str">"/about"</span><span class="kw">&gt;</span>About<span class="kw">&lt;/Link&gt;</span>
                <span class="kw">&lt;Link</span> <span class="attr">to</span>=<span class="str">"/users/123"</span><span class="kw">&gt;</span>User 123<span class="kw">&lt;/Link&gt;</span>
            <span class="kw">&lt;/nav&gt;</span>

            <span class="kw">&lt;Routes&gt;</span>
                <span class="kw">&lt;Route</span> <span class="attr">path</span>=<span class="str">"/"</span> <span class="attr">element</span>={<span class="kw">&lt;Home /&gt;</span>} <span class="kw">/&gt;</span>
                <span class="kw">&lt;Route</span> <span class="attr">path</span>=<span class="str">"/about"</span> <span class="attr">element</span>={<span class="kw">&lt;About /&gt;</span>} <span class="kw">/&gt;</span>
                <span class="kw">&lt;Route</span> <span class="attr">path</span>=<span class="str">"/users/:id"</span> <span class="attr">element</span>={<span class="kw">&lt;UserProfile /&gt;</span>} <span class="kw">/&gt;</span>
                <span class="kw">&lt;Route</span> <span class="attr">path</span>=<span class="str">"*"</span> <span class="attr">element</span>={<span class="kw">&lt;NotFound /&gt;</span>} <span class="kw">/&gt;</span>
            <span class="kw">&lt;/Routes&gt;</span>
        <span class="kw">&lt;/BrowserRouter&gt;</span>
    );
}

<span class="cmt">// Accessing URL parameters</span>
<span class="kw">function</span> <span class="mth">UserProfile</span>() {
    <span class="kw">const</span> { id } = <span class="mth">useParams</span>();
    <span class="kw">return</span> <span class="kw">&lt;h1&gt;</span>User ID: {id}<span class="kw">&lt;/h1&gt;</span>;
}</code></pre></div>
<div class="alert-box">Use <code>&lt;Link&gt;</code> instead of <code>&lt;a&gt;</code> for navigation. <code>&lt;a&gt;</code> causes page reloads. <code>:id</code> is a URL parameter. <code>*</code> catches all unmatched routes (404).</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Set up React Router in your app</li><li>Create routes for Home, About, and Contact</li><li>Add a 404 Not Found page</li><li>Create a dynamic route with <code>:id</code> parameter</li></ol></div>`
    },
    {
      title: 'Context API & State Management',
      difficulty: 'Advanced',
      difficultyClass: 'advanced',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=SBEK8Yb7kHk" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">React Context API</p>
  </div>
</div>
<div class="concept-box"><h3>Prop Drilling Problem</h3><p>When you need to pass data through many component layers, it's called <strong>prop drilling</strong>. React's <strong>Context API</strong> solves this by providing a way to share values across the component tree without prop drilling.</p></div>
<div class="code-block"><div class="code-header"><span>context.jsx</span><span>JSX</span></div><pre><code><span class="cmt">// 1. Create context</span>
<span class="kw">const</span> ThemeContext = React.<span class="mth">createContext</span>();

<span class="cmt">// 2. Create provider component</span>
<span class="kw">function</span> <span class="mth">ThemeProvider</span>({ children }) {
    <span class="kw">const</span> [theme, setTheme] = <span class="mth">useState</span>(<span class="str">'light'</span>);

    <span class="kw">const</span> toggleTheme = () => {
        <span class="mth">setTheme</span>(prev => prev === <span class="str">'light'</span> ? <span class="str">'dark'</span> : <span class="str">'light'</span>);
    };

    <span class="kw">return</span> (
        <span class="kw">&lt;ThemeContext.Provider</span> <span class="attr">value</span>={{ theme, toggleTheme }}<span class="kw">&gt;</span>
            {children}
        <span class="kw">&lt;/ThemeContext.Provider&gt;</span>
    );
}

<span class="cmt">// 3. Wrap app with provider</span>
<span class="kw">&lt;ThemeProvider&gt;</span>
    <span class="kw">&lt;App /&gt;</span>
<span class="kw">&lt;/ThemeProvider&gt;</span>

<span class="cmt">// 4. Consume context in child</span>
<span class="kw">function</span> <span class="mth">ThemedButton</span>() {
    <span class="kw">const</span> { theme, toggleTheme } = <span class="mth">useContext</span>(ThemeContext);
    <span class="kw">return</span> <span class="kw">&lt;button</span> <span class="attr">onClick</span>={toggleTheme}<span class="kw">&gt;</span>
        Switch to {theme === <span class="str">'light'</span> ? <span class="str">'dark'</span> : <span class="str">'light'</span>}
    <span class="kw">&lt;/button&gt;</span>;
}</code></pre></div>
<div class="concept-box"><h3>When to Use Context vs State Management</h3>
<table><tr><th>Solution</th><th>Best For</th></tr>
<tr><td><code>useState</code></td><td>Local component state</td></tr>
<tr><td><code>useContext</code></td><td>Theming, auth, language (low frequency updates)</td></tr>
<tr><td>Redux / Zustand</td><td>Complex global state (high frequency updates)</td></tr>
<tr><td><code>useReducer</code></td><td>Complex local state logic</td></tr>
</table></div>
<div class="alert-box">Context is great for global concerns (theme, auth, language). For complex state with frequent updates, consider Redux Toolkit or Zustand.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a ThemeContext for light/dark mode</li><li>Wrap your app with ThemeProvider</li><li>Consume context in a nested component</li><li>Add a toggle button to switch themes</li></ol></div>`
    },
    {
      title: 'Performance & Best Practices',
      difficulty: 'Advanced',
      difficultyClass: 'advanced',
      content: `
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=keTcXT145CI" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">React Performance & Best Practices</p>
  </div>
</div>
<div class="concept-box"><h3>React Performance Optimization</h3><p>React is fast by default, but large apps can benefit from optimization. Key techniques include memoization, code splitting, and avoiding unnecessary re-renders.</p></div>
<div class="code-block"><div class="code-header"><span>performance.jsx</span><span>JSX</span></div><pre><code><span class="kw">import</span> { memo, useMemo, useCallback, lazy, Suspense } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="cmt">// 1. Memoize components</span>
<span class="kw">const</span> ExpensiveList = <span class="mth">memo</span>(<span class="kw">function</span> ExpensiveList({ items }) {
    <span class="kw">return</span> items.<span class="mth">map</span>(item => <span class="kw">&lt;li</span> <span class="attr">key</span>={item.id}<span class="kw">&gt;</span>{item.name}<span class="kw">&lt;/li&gt;</span>);
});

<span class="cmt">// 2. Memoize expensive calculations</span>
<span class="kw">const</span> sortedItems = <span class="mth">useMemo</span>(() => {
    <span class="kw">return</span> items.<span class="mth">sort</span>((a, b) => a.name.<span class="mth">localeCompare</span>(b.name));
}, [items]);

<span class="cmt">// 3. Memoize event handlers</span>
<span class="kw">const</span> handleClick = <span class="mth">useCallback</span>((id) => {
    <span class="mth">console</span>.<span class="mth">log</span>(<span class="str">'Clicked:'</span>, id);
}, []);

<span class="cmt">// 4. Code splitting with lazy loading</span>
<span class="kw">const</span> HeavyComponent = <span class="mth">lazy</span>(() => <span class="mth">import</span>(<span class="str">'./HeavyComponent'</span>));

<span class="kw">function</span> <span class="mth">App</span>() {
    <span class="kw">return</span> (
        <span class="kw">&lt;Suspense</span> <span class="attr">fallback</span>={<span class="kw">&lt;div&gt;</span>Loading...<span class="kw">&lt;/div&gt;</span>}<span class="kw">&gt;</span>
            <span class="kw">&lt;HeavyComponent /&gt;</span>
        <span class="kw">&lt;/Suspense&gt;</span>
    );
}</code></pre></div>
<div class="concept-box"><h3>Best Practices</h3>
<table><tr><th>Practice</th><th>Why</th></tr>
<tr><td>Use keys in lists</td><td>Helps React track elements</td></tr>
<tr><td>Keep components small</td><td>Single responsibility, easier to test</td></tr>
<tr><td>Use unique keys</td><td>Never use index as key for dynamic lists</td></tr>
<tr><td>Avoid inline functions in JSX</td><td>Creates new function on every render</td></tr>
<tr><td>Use React DevTools</td><td>Inspect component tree, props, state</td></tr>
<tr><td>Lazy load routes</td><td>Reduce initial bundle size</td></tr>
</table></div>
<div class="alert-box"><code>React.memo()</code> prevents re-renders when props haven't changed. <code>useMemo</code> caches expensive calculations. <code>useCallback</code> caches function references. Only optimize when you measure a performance problem.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Wrap a component with <code>React.memo()</code></li><li>Use <code>useMemo</code> for an expensive array operation</li><li>Use <code>useCallback</code> for a click handler passed to a child</li><li>Implement lazy loading for a route with <code>React.lazy()</code></li></ol></div>`
    }
  ]
};
