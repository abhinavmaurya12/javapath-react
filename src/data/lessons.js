export default  [
{title:"Introduction to Java",difficulty:"Beginner",badgeClass:"beginner",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=o0YcgYG-OkA" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Part 1 - What is Java? (Introduction) — Java Tutorial</p>
  </div>
</div>
<div class="concept-box"><h3>What is Java?</h3><p>Java is a <strong>high-level, object-oriented, platform-independent</strong> programming language developed by Sun Microsystems (now Oracle) in 1995. James Gosling is known as the "Father of Java."</p><p>Java follows the WORA principle — <strong>Write Once, Run Anywhere</strong>. A Java program compiled on one platform can run on any other platform that has a JVM.</p><ul><li><strong>High-Level Language:</strong> Easy to read and write, close to human language</li><li><strong>Object-Oriented:</strong> Organizes code into objects and classes</li><li><strong>Platform Independent:</strong> JVM translates bytecode to machine code for any OS</li><li><strong>Compiled + Interpreted:</strong> Source code → bytecode → machine code</li></ul></div>
<div class="concept-box"><h3>Features of Java</h3>
<table><tr><th>#</th><th>Feature</th><th>Description</th></tr>
<tr><td>1</td><td>Platform Independent</td><td>Write once, run anywhere (WORA) via JVM</td></tr>
<tr><td>2</td><td>Object Oriented</td><td>Follows OOP principles: Encapsulation, Inheritance, Polymorphism, Abstraction</td></tr>
<tr><td>3</td><td>Simple</td><td>Clean syntax similar to C++, no pointers, automatic memory management</td></tr>
<tr><td>4</td><td>Robust</td><td>Strong memory management, exception handling, type checking</td></tr>
<tr><td>5</td><td>Multithreading</td><td>Supports concurrent execution of multiple threads</td></tr>
<tr><td>6</td><td>Dynamic</td><td>Can load classes dynamically, supports dynamic linking</td></tr>
<tr><td>7</td><td>High Performance</td><td>Bytecode is close to native code, JIT compiler optimizes at runtime</td></tr>
<tr><td>8</td><td>Distributed</td><td>Built-in networking support, RMI, EJB for distributed computing</td></tr>
<tr><td>9</td><td>Portable</td><td>Platform independent, fixed-size data types</td></tr>
<tr><td>10</td><td>Rich Standard Library</td><td>Built-in classes for I/O, networking, collections, utilities</td></tr>
</table></div>
<div class="concept-box"><h3>Applications of Java</h3><ul><li><strong>Web Applications:</strong> Servlets, JSP, Spring Boot, REST APIs</li><li><strong>Mobile Applications:</strong> Android development</li><li><strong>Desktop Applications:</strong> JavaFX, Swing (e.g., Eclipse IDE)</li><li><strong>Embedded Systems:</strong> SIM cards, Blu-ray players, smart cards</li><li><strong>Enterprise Applications:</strong> Banking systems, e-commerce</li><li><strong>Scientific Computing:</strong> MATLAB, scientific simulations</li></ul></div>
<div class="concept-box"><h3>Java Installation</h3><ol><li>Visit <code>https://www.oracle.com/java/technologies/downloads/</code></li><li>Download JDK (Java Development Kit) for your OS</li><li>Run the installer and follow the setup wizard</li><li>Set Environment Variables: <code>JAVA_HOME = C:\\Program Files\\Java\\jdk-17</code></li><li>Add <code>%JAVA_HOME%\\bin</code> to the PATH variable</li><li>Verify: <code>java -version</code> and <code>javac -version</code></li></ol></div>
<div class="concept-box"><h3>First Java Program — HelloWorld</h3></div>
<div class="code-block"><div class="code-header"><span> HelloWorld.java</span><span>Java</span></div><pre><code><span class="kw">public class</span> <span class="cls">HelloWorld</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        System.out.<span class="mth">println</span>(<span class="str">"Hello, World!"</span>);
    }
}</code></pre></div>
<div class="output-block">Hello, World!</div>
<div class="quick-reference"><div class="quick-ref-item"><code>public</code> — Access modifier, accessible everywhere</div><div class="quick-ref-item"><code>class</code> — Keyword to define a class</div><div class="quick-ref-item"><code>static</code> — Can be called without creating an object</div><div class="quick-ref-item"><code>void</code> — Return type, means no return value</div><div class="quick-ref-item"><code>main()</code> — Entry point of every Java program</div><div class="quick-ref-item"><code>String[] args</code> — Command line arguments</div><div class="quick-ref-item"><code>System.out.println()</code> — Prints output to console</div><div class="quick-ref-item"><code>javac HelloWorld.java</code> — Compile command</div></div>
<div class="concept-box"><h3>JVM, JRE, JDK</h3>
<table><tr><th>Component</th><th>Full Form</th><th>Description</th></tr>
<tr><td><strong>JVM</strong></td><td>Java Virtual Machine</td><td>Executes bytecode. Platform-specific. Provides garbage collection.</td></tr>
<tr><td><strong>JRE</strong></td><td>Java Runtime Environment</td><td>JVM + Class libraries. Needed to run Java programs.</td></tr>
<tr><td><strong>JDK</strong></td><td>Java Development Kit</td><td>JRE + Development tools (javac, java, javadoc). Needed to develop.</td></tr>
</table>
<div class="alert-box">JDK ⊃ JRE ⊃ JVM. To develop Java programs, you need JDK installed.</div></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Install Java and verify using <code>java -version</code></li><li>Write your first Java program that prints your name</li><li>What happens if you remove <code>static</code> from main?</li><li>Can you have two main methods in a class? Try it!</li><li>Explain JDK, JRE, JVM in your own words.</li></ol></div>`},
{title:"Constants, Variables & Data Types",difficulty:"Beginner",badgeClass:"beginner",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=TGVLmr194DI" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Variables & Data Types — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>Constants in Java</h3><p>Constants are variables whose value cannot be changed once assigned. Use the <code>final</code> keyword.</p></div>
<div class="code-block"><div class="code-header"><span> ConstantsDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ConstantsDemo</span> {
    <span class="kw">static final double</span> PI = <span class="mth">3.14159</span>;
    <span class="kw">final</span> String COMPANY = <span class="str">"JavaNest"</span>;
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="kw">final int</span> MAX = <span class="mth">100</span>;
        System.out.<span class="mth">println</span>(PI);
        System.out.<span class="mth">println</span>(MAX);
    }
}</code></pre></div>
<div class="output-block">3.14159\n100</div>
<div class="alert-box">Constants should be named in UPPER_SNAKE_CASE (e.g., MAX_VALUE, PI).</div>
<div class="concept-box"><h3>Types of Variables</h3>
<table><tr><th>Type</th><th>Declared Where</th><th>Default Value</th><th>Example</th></tr>
<tr><td>Instance Variable</td><td>Inside class, outside methods</td><td>0, null, false</td><td><code>int age;</code></td></tr>
<tr><td>Static Variable</td><td>With static keyword in class</td><td>0, null, false</td><td><code>static int count;</code></td></tr>
<tr><td>Local Variable</td><td>Inside methods, blocks</td><td>No default value</td><td><code>int x = 10;</code></td></tr>
</table>
<div class="alert-box">Local variables must be initialized before use. Instance and static variables get default values.</div></div>
<div class="concept-box"><h3>Data Types</h3>
<table><tr><th>Type</th><th>Size</th><th>Default</th><th>Range</th><th>Example</th></tr>
<tr><td><code>byte</code></td><td>1 byte</td><td>0</td><td>-128 to 127</td><td><code>byte b = 100;</code></td></tr>
<tr><td><code>short</code></td><td>2 bytes</td><td>0</td><td>-32,768 to 32,767</td><td><code>short s = 30000;</code></td></tr>
<tr><td><code>int</code></td><td>4 bytes</td><td>0</td><td>-2^31 to 2^31-1</td><td><code>int i = 100000;</code></td></tr>
<tr><td><code>long</code></td><td>8 bytes</td><td>0L</td><td>-2^63 to 2^63-1</td><td><code>long l = 9999999999L;</code></td></tr>
<tr><td><code>float</code></td><td>4 bytes</td><td>0.0f</td><td>~6-7 decimal digits</td><td><code>float f = 3.14f;</code></td></tr>
<tr><td><code>double</code></td><td>8 bytes</td><td>0.0</td><td>~15-16 decimal digits</td><td><code>double d = 3.14159;</code></td></tr>
<tr><td><code>char</code></td><td>2 bytes</td><td>'\\u0000'</td><td>0 to 65,535</td><td><code>char c = 'A';</code></td></tr>
<tr><td><code>boolean</code></td><td>1 bit</td><td>false</td><td>true/false</td><td><code>boolean flag = true;</code></td></tr>
</table></div>
<div class="concept-box"><h3>Type Casting</h3><p><strong>Widening (Implicit):</strong> Smaller to larger type — automatic.</p>
<div class="code-block"><div class="code-header"><span> Widening.java</span></div><pre><code><span class="kw">int</span> i = <span class="mth">100</span>;
<span class="kw">long</span> l = i;      <span class="cmt">// int to long — automatic</span>
<span class="kw">float</span> f = l;     <span class="cmt">// long to float — automatic</span></code></pre></div>
<p><strong>Narrowing (Explicit):</strong> Larger to smaller — manual with casting.</p>
<div class="code-block"><div class="code-header"><span> Narrowing.java</span></div><pre><code><span class="kw">double</span> d = <span class="mth">9.78</span>;
<span class="kw">int</span> i = (<span class="kw">int</span>) d;  <span class="cmt">// double to int — result: 9</span></code></pre></div>
<div class="alert-box">Narrowing can cause data loss. 9.78 becomes 9 (decimal truncated).</div></div>
<div class="concept-box"><h3>Operators</h3>
<table><tr><th>Category</th><th>Operators</th><th>Example</th></tr>
<tr><td>Arithmetic</td><td>+ - * / %</td><td><code>10 + 3 = 13</code>, <code>10 % 3 = 1</code></td></tr>
<tr><td>Relational</td><td>== != > < >= <=</td><td><code>5 > 3</code> → true</td></tr>
<tr><td>Logical</td><td>&& || !</td><td><code>true && false</code> → false</td></tr>
<tr><td>Bitwise</td><td>& | ^ ~ << >></td><td><code>5 & 3</code> → 1</td></tr>
<tr><td>Assignment</td><td>= += -= *= /= %=</td><td><code>x += 5</code> → x = x + 5</td></tr>
<tr><td>Ternary</td><td>? :</td><td><code>(a>b) ? a : b</code></td></tr>
</table>
<div class="alert-box"><code>&&</code> is short-circuit AND. <code>||</code> is short-circuit OR.</div></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Find size of each primitive using <code>System.out.println(Byte.SIZE)</code></li><li>What happens when you cast 9.99 to int?</li><li>Swap two variables without using a third variable</li><li>What is the result of <code>10 / 3</code> vs <code>10.0 / 3</code>?</li><li>List all Java keywords you know</li></ol></div>`},
{title:"Flow Control",difficulty:"Beginner",badgeClass:"beginner",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=Q_ll-EKocuI" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java If Statements are Easy! — by Bro Code</p>
  </div>
</div>
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture — If-Else-If Ladder</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=4ezfRdg6Z7E" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java LOGICAL OPERATORS are easy! (&&, ||, !) — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>if, if-else, if-else-if Ladder</h3><p>Conditional statements control execution flow based on conditions.</p></div>
<div class="code-block"><div class="code-header"><span> ConditionalDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ConditionalDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="kw">int</span> num = <span class="mth">15</span>;
        <span class="kw">if</span> (num > <span class="mth">0</span>) {
            System.out.<span class="mth">println</span>(<span class="str">"Number is positive"</span>);
        }
        <span class="kw">if</span> (num % <span class="mth">2</span> == <span class="mth">0</span>) {
            System.out.<span class="mth">println</span>(<span class="str">"Even"</span>);
        } <span class="kw">else</span> {
            System.out.<span class="mth">println</span>(<span class="str">"Odd"</span>);
        }
        <span class="kw">if</span> (num > <span class="mth">0</span>) {
            System.out.<span class="mth">println</span>(<span class="str">"Positive"</span>);
        } <span class="kw">else if</span> (num < <span class="mth">0</span>) {
            System.out.<span class="mth">println</span>(<span class="str">"Negative"</span>);
        } <span class="kw">else</span> {
            System.out.<span class="mth">println</span>(<span class="str">"Zero"</span>);
        }
    }
}</code></pre></div>
<div class="output-block">Number is positive\nOdd\nPositive</div>
<div class="concept-box"><h3>switch Statement</h3><p>Selects one of many code blocks based on expression value.</p></div>
<div class="code-block"><div class="code-header"><span> SwitchDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">SwitchDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="kw">int</span> day = <span class="mth">3</span>;
        <span class="kw">switch</span> (day) {
            <span class="kw">case</span> <span class="mth">1</span>: System.out.<span class="mth">println</span>(<span class="str">"Monday"</span>); <span class="kw">break</span>;
            <span class="kw">case</span> <span class="mth">2</span>: System.out.<span class="mth">println</span>(<span class="str">"Tuesday"</span>); <span class="kw">break</span>;
            <span class="kw">case</span> <span class="mth">3</span>: System.out.<span class="mth">println</span>(<span class="str">"Wednesday"</span>); <span class="kw">break</span>;
            <span class="kw">default</span>: System.out.<span class="mth">println</span>(<span class="str">"Other day"</span>);
        }
    }
}</code></pre></div>
<div class="output-block">Wednesday</div>
<div class="alert-box">switch works with byte, short, int, char, String (Java 7+), and enum. Missing break causes fall-through.</div>
<div class="concept-box"><h3>Loops</h3><p>Loops execute a block of code repeatedly.</p></div>
<div class="code-block"><div class="code-header"><span> LoopsDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">LoopsDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="cmt">// for loop</span>
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i <= <span class="mth">5</span>; i++) {
            System.out.<span class="mth">print</span>(i + <span class="str">" "</span>);
        }
        <span class="cmt">// while loop</span>
        <span class="kw">int</span> j = <span class="mth">1</span>;
        <span class="kw">while</span> (j <= <span class="mth">5</span>) {
            System.out.<span class="mth">print</span>(j + <span class="str">" "</span>);
            j++;
        }
        <span class="cmt">// do-while loop</span>
        <span class="kw">int</span> k = <span class="mth">1</span>;
        <span class="kw">do</span> {
            System.out.<span class="mth">print</span>(k + <span class="str">" "</span>);
            k++;
        } <span class="kw">while</span> (k <= <span class="mth">5</span>);
    }
}</code></pre></div>
<div class="output-block">1 2 3 4 5</div>
<div class="concept-box"><h3>break and continue</h3><ul><li><code>break</code> — Terminates innermost loop or switch</li><li><code>continue</code> — Skips current iteration, moves to next</li></ul>
<div class="code-block"><div class="code-header"><span> BreakContinue.java</span></div><pre><code><span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i <= <span class="mth">10</span>; i++) {
    <span class="kw">if</span> (i == <span class="mth">6</span>) <span class="kw">break</span>;
    System.out.<span class="mth">print</span>(i + <span class="str">" "</span>);
}
<span class="cmt">// Output: 1 2 3 4 5</span></code></pre></div></div>
<div class="concept-box"><h3>Comments</h3><ul><li>Single-line: <code>// comment</code></li><li>Multi-line: <code>/* comment */</code></li><li>Documentation: <code>/** Javadoc */</code></li></ul></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Check if a number is positive, negative, or zero</li><li>Print multiplication table using any loop</li><li>Find sum of all even numbers from 1 to 100</li><li>Switch to convert number (1-7) to day name</li><li>Print all prime numbers between 1 and 50</li></ol></div>`},
{title:"Objects and Classes",difficulty:"Beginner",badgeClass:"beginner",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=kd3dr39rgrk" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Objects & Classes (OOP) — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>What is a Class?</h3><p>A <strong>class</strong> is a blueprint or template for creating objects. It defines properties (fields) and behaviors (methods).</p></div>
<div class="code-block"><div class="code-header"><span> Student.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">Student</span> {
    String name;
    <span class="kw">int</span> age;
    <span class="kw">double</span> gpa;
    <span class="kw">void</span> <span class="mth">display</span>() {
        System.out.<span class="mth">println</span>(<span class="str">"Name: "</span> + name + <span class="str">", Age: "</span> + age + <span class="str">", GPA: "</span> + gpa);
    }
}</code></pre></div>
<div class="concept-box"><h3>What is an Object?</h3><p>An <strong>object</strong> is an instance of a class, created using the <code>new</code> keyword.</p></div>
<div class="code-block"><div class="code-header"><span> TestStudent.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">TestStudent</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        Student s1 = <span class="kw">new</span> Student();
        s1.name = <span class="str">"Alice"</span>;
        s1.age = <span class="mth">20</span>;
        s1.gpa = <span class="mth">3.8</span>;
        s1.<span class="mth">display</span>();
        Student s2 = <span class="kw">new</span> Student();
        s2.name = <span class="str">"Bob"</span>;
        s2.age = <span class="mth">22</span>;
        s2.gpa = <span class="mth">3.5</span>;
        s2.<span class="mth">display</span>();
    }
}</code></pre></div>
<div class="output-block">Name: Alice, Age: 20, GPA: 3.8\nName: Bob, Age: 22, GPA: 3.5</div>
<div class="concept-box"><h3>Ways to Initialize Objects</h3>
<table><tr><th>Method</th><th>Example</th></tr>
<tr><td>Reference variable</td><td><code>Student s = new Student();</code></td></tr>
<tr><td>Method</td><td><code>s.name = "Alice";</code></td></tr>
<tr><td>Constructor</td><td><code>Student s = new Student("Alice", 20);</code></td></tr>
</table>
<div class="alert-box">Every class implicitly extends <code>java.lang.Object</code>.</div></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create a Car class with brand, model, year. Create 3 objects.</li><li>Create a BankAccount class with deposit and withdraw methods</li><li>What is the default value of each field type?</li></ol></div>`},
{title:"Constructors",difficulty:"Beginner",badgeClass:"beginner",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=ZD7CB6wKg8A" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Constructors Tutorial — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>What is a Constructor?</h3><p>A <strong>constructor</strong> is called automatically when an object is created. Same name as class, no return type.</p></div>
<div class="code-block"><div class="code-header"><span> ConstructorDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">Employee</span> {
    String name;
    <span class="kw">double</span> salary;
    Employee() { name = <span class="str">"Unknown"</span>; salary = <span class="mth">0</span>; }
    Employee(String n, <span class="kw">double</span> s) { name = n; salary = s; }
    <span class="kw">void</span> <span class="mth">display</span>() {
        System.out.<span class="mth">println</span>(name + <span class="str">" earns "</span> + salary);
    }
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        Employee e1 = <span class="kw">new</span> Employee();
        Employee e2 = <span class="kw">new</span> Employee(<span class="str">"Alice"</span>, <span class="mth">75000</span>);
        e1.<span class="mth">display</span>();
        e2.<span class="mth">display</span>();
    }
}</code></pre></div>
<div class="output-block">Unknown earns 0.0\nAlice earns 75000.0</div>
<div class="concept-box"><h3>Types of Constructors</h3>
<table><tr><th>Type</th><th>Description</th></tr>
<tr><td><strong>Default</strong></td><td>No parameters, compiler provides if none defined</td></tr>
<tr><td><strong>Parameterized</strong></td><td>Takes parameters to initialize fields</td></tr>
<tr><td><strong>Copy</strong></td><td>Takes object of same class, copies values</td></tr>
</table>
<div class="alert-box">If you define ANY constructor, compiler will NOT provide a default constructor.</div></div>
<div class="concept-box"><h3>Constructor Overloading</h3><p>Multiple constructors with different parameter lists.</p></div>
<div class="concept-box"><h3>static Keyword</h3><p><code>static</code> means the member belongs to the class, not to any object.</p><ul><li><strong>static variable:</strong> Shared by all objects</li><li><strong>static method:</strong> Can be called without object</li><li><strong>static block:</strong> Executes once when class is loaded</li></ul>
<div class="code-block"><div class="code-header"><span> StaticDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">Counter</span> {
    <span class="kw">static int</span> count = <span class="mth">0</span>;
    Counter() { count++; }
    <span class="kw">static void</span> <span class="mth">showCount</span>() {
        System.out.<span class="mth">println</span>(<span class="str">"Count: "</span> + count);
    }
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        Counter c1 = <span class="kw">new</span> Counter();
        Counter c2 = <span class="kw">new</span> Counter();
        Counter c3 = <span class="kw">new</span> Counter();
        Counter.<span class="mth">showCount</span>();
    }
}</code></pre></div>
<div class="output-block">Count: 3</div></div>
<div class="concept-box"><h3>this Keyword</h3><p><code>this</code> refers to the current object. Distinguishes instance variables from parameters.</p></div>
<div class="code-block"><div class="code-header"><span> ThisDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">Person</span> {
    String name;
    <span class="kw">int</span> age;
    Person(String name, <span class="kw">int</span> age) {
        <span class="kw">this</span>.name = name;
        <span class="kw">this</span>.age = age;
    }
}</code></pre></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create Circle class with constructors and area method</li><li>What happens if you use no-arg constructor after defining parameterized?</li><li>Write a class with static block</li><li>Explain difference between this and static</li></ol></div>`},
{title:"Inheritance",difficulty:"Intermediate",badgeClass:"intermediate",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=GTP5lVEKXaU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Inheritance Tutorial — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>What is Inheritance?</h3><p>Inheritance allows a class (child) to inherit fields and methods from another class (parent). Promotes <strong>code reusability</strong>. Use <code>extends</code> keyword.</p></div>
<div class="code-block"><div class="code-header"><span> InheritanceDemo.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Animal</span> {
    String name;
    <span class="kw">void</span> <span class="mth">eat</span>() { System.out.<span class="mth">println</span>(name + <span class="str">" is eating"</span>); }
}
<span class="kw">class</span> <span class="cls">Dog</span> <span class="kw">extends</span> Animal {
    <span class="kw">void</span> <span class="mth">bark</span>() { System.out.<span class="mth">println</span>(name + <span class="str">" is barking"</span>); }
}
<span class="kw">public class</span> <span class="cls">Test</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        Dog d = <span class="kw">new</span> Dog();
        d.name = <span class="str">"Rex"</span>;
        d.<span class="mth">eat</span>();
        d.<span class="mth">bark</span>();
    }
}</code></pre></div>
<div class="output-block">Rex is eating\nRex is barking</div>
<div class="concept-box"><h3>Types of Inheritance</h3><ul><li><strong>Single:</strong> A → B</li><li><strong>Multilevel:</strong> A → B → C</li><li><strong>Hierarchical:</strong> A → B, A → C</li><li><strong>Multiple:</strong> NOT supported via classes. Use interfaces.</li></ul>
<div class="alert-box">Java doesn't support multiple inheritance through classes to avoid the Diamond Problem.</div></div>
<div class="concept-box"><h3>super Keyword</h3><p><code>super</code> refers to the parent class. Used to access parent methods, fields, constructors.</p></div>
<div class="concept-box"><h3>Aggregation (Has-A)</h3><p>When a class contains a reference to another class. E.g., Car HAS-A Engine.</p></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create Shape class, extend to Circle and Rectangle</li><li>Why no multiple inheritance with classes?</li><li>Multilevel: Animal → Dog → Puppy</li><li>What is the difference between is-a and has-a?</li></ol></div>`},
{title:"Polymorphism",difficulty:"Intermediate",badgeClass:"intermediate",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=6xRd0j1anzc" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Polymorphism Tutorial — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>What is Polymorphism?</h3><p>"Many forms" — objects treated as instances of their parent class. Two types: compile-time (overloading) and runtime (overriding).</p></div>
<div class="concept-box"><h3>Method Overloading (Compile-Time)</h3><p>Same method name, different parameter lists in same class.</p></div>
<div class="code-block"><div class="code-header"><span> Overloading.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Calculator</span> {
    <span class="kw">int</span> <span class="mth">add</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) { <span class="kw">return</span> a + b; }
    <span class="kw">double</span> <span class="mth">add</span>(<span class="kw">double</span> a, <span class="kw">double</span> b) { <span class="kw">return</span> a + b; }
    <span class="kw">int</span> <span class="mth">add</span>(<span class="kw">int</span> a, <span class="kw">int</span> b, <span class="kw">int</span> c) { <span class="kw">return</span> a + b + c; }
}
<span class="kw">public class</span> <span class="cls">Test</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        Calculator c = <span class="kw">new</span> Calculator();
        System.out.<span class="mth">println</span>(c.<span class="mth">add</span>(<span class="mth">5</span>, <span class="mth">3</span>));
        System.out.<span class="mth">println</span>(c.<span class="mth">add</span>(<span class="mth">2.5</span>, <span class="mth">3.5</span>));
        System.out.<span class="mth">println</span>(c.<span class="mth">add</span>(<span class="mth">1</span>, <span class="mth">2</span>, <span class="mth">3</span>));
    }
}</code></pre></div>
<div class="output-block">8\n6.0\n6</div>
<div class="concept-box"><h3>Method Overriding (Runtime)</h3><p>Subclass provides specific implementation of parent's method. Same signature.</p></div>
<div class="code-block"><div class="code-header"><span> Overriding.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Animal</span> {
    <span class="kw">void</span> <span class="mth">sound</span>() { System.out.<span class="mth">println</span>(<span class="str">"Animal makes a sound"</span>); }
}
<span class="kw">class</span> <span class="cls">Dog</span> <span class="kw">extends</span> Animal {
    <span class="kw">void</span> <span class="mth">sound</span>() { System.out.<span class="mth">println</span>(<span class="str">"Dog barks"</span>); }
}
<span class="kw">class</span> <span class="cls">Cat</span> <span class="kw">extends</span> Animal {
    <span class="kw">void</span> <span class="mth">sound</span>() { System.out.<span class="mth">println</span>(<span class="str">"Cat meows"</span>); }
}
<span class="kw">public class</span> <span class="cls">Test</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        Animal a1 = <span class="kw">new</span> Dog();
        Animal a2 = <span class="kw">new</span> Cat();
        a1.<span class="mth">sound</span>();
        a2.<span class="mth">sound</span>();
    }
}</code></pre></div>
<div class="output-block">Dog barks\nCat meows</div>
<div class="concept-box"><h3>Upcasting & Downcasting</h3><ul><li><strong>Upcasting:</strong> Child in parent reference (implicit). <code>Animal a = new Dog();</code></li><li><strong>Downcasting:</strong> Parent cast to child (explicit). <code>Dog d = (Dog) a;</code></li></ul>
<div class="alert-box">Use <code>instanceof</code> before downcasting to avoid ClassCastException.</div></div>
<div class="concept-box"><h3>final Keyword</h3><ul><li><strong>final variable:</strong> Cannot be reassigned</li><li><strong>final method:</strong> Cannot be overridden</li><li><strong>final class:</strong> Cannot be extended</li></ul></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create Vehicle with start(), override in Car and Bike</li><li>Demonstrate upcasting and downcasting</li><li>Overloading vs overriding?</li><li>Can we override final or static method?</li></ol></div>`},
{title:"Abstraction",difficulty:"Intermediate",badgeClass:"intermediate",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=HvPlEJ3LHgE" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Abstract Classes & Interfaces — by Coding with John</p>
  </div>
</div>
<div class="concept-box"><h3>What is Abstraction?</h3><p>Hides implementation details, shows only functionality. Achieved using <strong>abstract classes</strong> and <strong>interfaces</strong>.</p></div>
<div class="concept-box"><h3>Abstract Classes</h3><p>Cannot be instantiated. Can have abstract (no body) and concrete methods. Subclasses must implement all abstract methods.</p></div>
<div class="code-block"><div class="code-header"><span> AbstractDemo.java</span></div><pre><code><span class="kw">abstract class</span> <span class="cls">Shape</span> {
    String color;
    Shape(String color) { <span class="kw">this</span>.color = color; }
    <span class="kw">abstract double</span> <span class="mth">area</span>();
    <span class="kw">void</span> <span class="mth">displayColor</span>() { System.out.<span class="mth">println</span>(<span class="str">"Color: "</span> + color); }
}
<span class="kw">class</span> <span class="cls">Circle</span> <span class="kw">extends</span> Shape {
    <span class="kw">double</span> radius;
    Circle(String color, <span class="kw">double</span> r) { <span class="kw">super</span>(color); radius = r; }
    <span class="kw">double</span> <span class="mth">area</span>() { <span class="kw">return</span> Math.PI * radius * radius; }
}
<span class="kw">class</span> <span class="cls">Rectangle</span> <span class="kw">extends</span> Shape {
    <span class="kw">double</span> length, width;
    Rectangle(String c, <span class="kw">double</span> l, <span class="kw">double</span> w) { <span class="kw">super</span>(c); length = l; width = w; }
    <span class="kw">double</span> <span class="mth">area</span>() { <span class="kw">return</span> length * width; }
}
<span class="kw">public class</span> <span class="cls">Test</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        Circle c = <span class="kw">new</span> Circle(<span class="str">"Red"</span>, <span class="mth">5</span>);
        c.<span class="mth">displayColor</span>();
        System.out.<span class="mth">println</span>(<span class="str">"Area: "</span> + c.<span class="mth">area</span>());
    }
}</code></pre></div>
<div class="output-block">Color: Red\nArea: 78.53981633974483</div>
<div class="concept-box"><h3>Interfaces</h3><p>A contract that a class must follow. All methods implicitly <code>public abstract</code>. A class can implement multiple interfaces.</p></div>
<div class="code-block"><div class="code-header"><span> InterfaceDemo.java</span></div><pre><code><span class="kw">interface</span> <span class="cls">Vehicle</span> {
    <span class="kw">void</span> <span class="mth">start</span>();
    <span class="kw">void</span> <span class="mth">stop</span>();
}
<span class="kw">interface</span> <span class="cls">Electric</span> {
    <span class="kw">void</span> <span class="mth">charge</span>();
}
<span class="kw">class</span> <span class="cls">Tesla</span> <span class="kw">implements</span> Vehicle, Electric {
    <span class="kw">public void</span> <span class="mth">start</span>() { System.out.<span class="mth">println</span>(<span class="str">"Tesla started"</span>); }
    <span class="kw">public void</span> <span class="mth">stop</span>() { System.out.<span class="mth">println</span>(<span class="str">"Tesla stopped"</span>); }
    <span class="kw">public void</span> <span class="mth">charge</span>() { System.out.<span class="mth">println</span>(<span class="str">"Tesla charging"</span>); }
}</code></pre></div>
<div class="concept-box"><h3>Abstract Class vs Interface</h3>
<table><tr><th>Feature</th><th>Abstract Class</th><th>Interface</th></tr>
<tr><td>Methods</td><td>Abstract + concrete</td><td>All abstract (default in Java 8+)</td></tr>
<tr><td>Variables</td><td>Any type</td><td>Only public static final</td></tr>
<tr><td>Inheritance</td><td>Single (extends)</td><td>Multiple (implements)</td></tr>
<tr><td>Constructor</td><td>Can have</td><td>Cannot have</td></tr>
</table></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create Drawable interface, implement in Circle and Rectangle</li><li>When to use abstract class over interface?</li><li>Can interface extend another interface?</li></ol></div>`},
{title:"Encapsulation",difficulty:"Intermediate",badgeClass:"intermediate",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=eboNNUADeIc" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Encapsulation Tutorial — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>What is Encapsulation?</h3><p>Wrapping data and code together, restricting direct access. Achieved through <strong>access modifiers</strong> and <strong>getters/setters</strong>.</p></div>
<div class="concept-box"><h3>Access Modifiers</h3>
<table><tr><th>Modifier</th><th>Class</th><th>Package</th><th>Subclass</th><th>World</th></tr>
<tr><td><strong>public</strong></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td><strong>protected</strong></td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td></tr>
<tr><td><strong>default</strong></td><td>Yes</td><td>Yes</td><td>No</td><td>No</td></tr>
<tr><td><strong>private</strong></td><td>Yes</td><td>No</td><td>No</td><td>No</td></tr>
</table></div>
<div class="concept-box"><h3>Encapsulation Example</h3></div>
<div class="code-block"><div class="code-header"><span> EncapsulationDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">BankAccount</span> {
    <span class="kw">private</span> String accountNumber;
    <span class="kw">private double</span> balance;
    <span class="kw">public</span> BankAccount(String accNum, <span class="kw">double</span> initialBalance) {
        <span class="kw">this</span>.accountNumber = accNum;
        <span class="kw">this</span>.balance = initialBalance;
    }
    <span class="kw">public double</span> <span class="mth">getBalance</span>() { <span class="kw">return</span> balance; }
    <span class="kw">public void</span> <span class="mth">deposit</span>(<span class="kw">double</span> amount) {
        <span class="kw">if</span> (amount > <span class="mth">0</span>) {
            balance += amount;
            System.out.<span class="mth">println</span>(<span class="str">"Deposited: "</span> + amount);
        }
    }
    <span class="kw">public void</span> <span class="mth">withdraw</span>(<span class="kw">double</span> amount) {
        <span class="kw">if</span> (amount > <span class="mth">0</span> && amount <= balance) {
            balance -= amount;
            System.out.<span class="mth">println</span>(<span class="str">"Withdrawn: "</span> + amount);
        } <span class="kw">else</span> {
            System.out.<span class="mth">println</span>(<span class="str">"Invalid amount"</span>);
        }
    }
}</code></pre></div>
<div class="alert-box">Encapsulation benefits: Data protection, flexibility, controlled access through methods.</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create Person class with private fields and getters/setters</li><li>Why make fields private and provide getters/setters?</li><li>What is the difference between encapsulation and abstraction?</li></ol></div>`},
{title:"Java Arrays",difficulty:"Intermediate",badgeClass:"intermediate",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=9dr2mHYYoug" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Arrays Tutorial — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>What is an Array?</h3><p>A container holding <strong>fixed number of values</strong> of a single type. Arrays are objects with fixed length.</p></div>
<div class="concept-box"><h3>Single Dimensional Array</h3></div>
<div class="code-block"><div class="code-header"><span> ArrayDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ArrayDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="kw">int</span>[] nums = {<span class="mth">10</span>, <span class="mth">20</span>, <span class="mth">30</span>, <span class="mth">40</span>, <span class="mth">50</span>};
        System.out.<span class="mth">println</span>(nums[<span class="mth">0</span>]);
        System.out.<span class="mth">println</span>(<span class="str">"Length: "</span> + nums.length);
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < nums.length; i++) {
            System.out.<span class="mth">print</span>(nums[i] + <span class="str">" "</span>);
        }
    }
}</code></pre></div>
<div class="output-block">10\nLength: 5\n10 20 30 40 50</div>
<div class="concept-box"><h3>Multidimensional Array</h3></div>
<div class="code-block"><div class="code-header"><span> MultiArray.java</span></div><pre><code><span class="kw">int</span>[][] matrix = { {<span class="mth">1</span>,<span class="mth">2</span>,<span class="mth">3</span>}, {<span class="mth">4</span>,<span class="mth">5</span>,<span class="mth">6</span>}, {<span class="mth">7</span>,<span class="mth">8</span>,<span class="mth">9</span>} };
<span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < matrix.length; i++) {
    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">0</span>; j < matrix[i].length; j++) {
        System.out.<span class="mth">print</span>(matrix[i][j] + <span class="str">" "</span>);
    }
    System.out.<span class="mth">println</span>();
}</code></pre></div>
<div class="output-block">1 2 3\n4 5 6\n7 8 9</div>
<div class="concept-box"><h3>Cloning an Array</h3><p>Use <code>clone()</code> or <code>System.arraycopy()</code> to copy arrays.</p></div>
<div class="code-block"><div class="code-header"><span> CloneDemo.java</span></div><pre><code><span class="kw">int</span>[] a = {<span class="mth">1</span>, <span class="mth">2</span>, <span class="mth">3</span>};
<span class="kw">int</span>[] b = a.<span class="mth">clone</span>();
<span class="kw">int</span>[] c = <span class="kw">new int</span>[<span class="mth">3</span>];
System.<span class="mth">arraycopy</span>(a, <span class="mth">0</span>, c, <span class="mth">0</span>, a.length);</code></pre></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Find largest and smallest in an array</li><li>Reverse an array without second array</li><li>Count duplicates in an array</li><li>Merge two sorted arrays</li></ol></div>`},
{title:"Object and Math Class",difficulty:"Intermediate",badgeClass:"intermediate",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=w0VTlSOXBs8" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Math Class Methods — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>Object Class Methods</h3><p><code>java.lang.Object</code> is the root class. Every class inherits these methods:</p>
<table><tr><th>Method</th><th>Purpose</th></tr>
<tr><td><code>toString()</code></td><td>Returns string representation</td></tr>
<tr><td><code>equals(Object obj)</code></td><td>Compares objects for equality</td></tr>
<tr><td><code>hashCode()</code></td><td>Returns hash code value</td></tr>
<tr><td><code>getClass()</code></td><td>Returns runtime class</td></tr>
<tr><td><code>clone()</code></td><td>Creates a copy</td></tr>
<tr><td><code>finalize()</code></td><td>Called by garbage collector</td></tr>
</table></div>
<div class="code-block"><div class="code-header"><span> ObjectMethods.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Person</span> {
    String name;
    <span class="kw">int</span> age;
    Person(String name, <span class="kw">int</span> age) { <span class="kw">this</span>.name = name; <span class="kw">this</span>.age = age; }
    <span class="kw">public</span> String <span class="mth">toString</span>() { <span class="kw">return</span> name + <span class="str">" ("</span> + age + <span class="str">")"</span>; }
    <span class="kw">public boolean</span> <span class="mth">equals</span>(Object obj) {
        <span class="kw">if</span> (obj <span class="kw">instanceof</span> Person) {
            Person p = (Person) obj;
            <span class="kw">return this</span>.name.equals(p.name) && <span class="kw">this</span>.age == p.age;
        }
        <span class="kw">return false</span>;
    }
}</code></pre></div>
<div class="concept-box"><h3>Math Class</h3><p>All methods are static. Key methods:</p>
<table><tr><th>Method</th><th>Example</th></tr>
<tr><td><code>Math.abs(-10)</code></td><td>10</td></tr>
<tr><td><code>Math.max(5, 8)</code></td><td>8</td></tr>
<tr><td><code>Math.sqrt(16)</code></td><td>4.0</td></tr>
<tr><td><code>Math.pow(2, 3)</code></td><td>8.0</td></tr>
<tr><td><code>Math.random()</code></td><td>0.0 to 1.0</td></tr>
<tr><td><code>Math.ceil(4.3)</code></td><td>5.0</td></tr>
<tr><td><code>Math.floor(4.7)</code></td><td>4.0</td></tr>
<tr><td><code>Math.round(4.5)</code></td><td>5</td></tr>
</table></div>
<div class="concept-box"><h3>Wrapper Classes</h3>
<table><tr><th>Primitive</th><th>Wrapper</th></tr>
<tr><td><code>byte</code></td><td><code>Byte</code></td></tr>
<tr><td><code>short</code></td><td><code>Short</code></td></tr>
<tr><td><code>int</code></td><td><code>Integer</code></td></tr>
<tr><td><code>long</code></td><td><code>Long</code></td></tr>
<tr><td><code>float</code></td><td><code>Float</code></td></tr>
<tr><td><code>double</code></td><td><code>Double</code></td></tr>
<tr><td><code>char</code></td><td><code>Character</code></td></tr>
<tr><td><code>boolean</code></td><td><code>Boolean</code></td></tr>
</table>
<p><strong>Autoboxing:</strong> <code>Integer i = 10;</code> (primitive → wrapper)</p>
<p><strong>Unboxing:</strong> <code>int n = i;</code> (wrapper → primitive)</p></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Override toString() and equals() for a custom class</li><li>Generate random numbers between 1 and 100</li><li>Convert String to int and vice versa</li></ol></div>`},
{title:"Recursion",difficulty:"Intermediate",badgeClass:"intermediate",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=u8Xam9EsqXQ" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Recursion Tutorial — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>What is Recursion?</h3><p>A method calls <strong>itself</strong> to solve a problem by breaking it into smaller sub-problems. Must have a <strong>base case</strong> to stop.
<ul><li><strong>Base Case:</strong> Condition where recursion stops</li><li><strong>Recursive Case:</strong> Method calls itself with smaller input</li></ul></div>
<div class="concept-box"><h3>Factorial Example</h3></div>
<div class="code-block"><div class="code-header"><span> Factorial.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">Factorial</span> {
    <span class="kw">static int</span> <span class="mth">factorial</span>(<span class="kw">int</span> n) {
        <span class="kw">if</span> (n == <span class="mth">0</span> || n == <span class="mth">1</span>) <span class="kw">return</span> <span class="mth">1</span>;
        <span class="kw">return</span> n * <span class="mth">factorial</span>(n - <span class="mth">1</span>);
    }
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        System.out.<span class="mth">println</span>(<span class="str">"5! = "</span> + <span class="mth">factorial</span>(<span class="mth">5</span>));
    }
}</code></pre></div>
<div class="output-block">5! = 120</div>
<div class="alert-box">factorial(5) = 5*4*3*2*1 = 120</div>
<div class="concept-box"><h3>Fibonacci Example</h3></div>
<div class="code-block"><div class="code-header"><span> Fibonacci.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">Fibonacci</span> {
    <span class="kw">static int</span> <span class="mth">fib</span>(<span class="kw">int</span> n) {
        <span class="kw">if</span> (n <= <span class="mth">1</span>) <span class="kw">return</span> n;
        <span class="kw">return</span> <span class="mth">fib</span>(n - <span class="mth">1</span>) + <span class="mth">fib</span>(n - <span class="mth">2</span>);
    }
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < <span class="mth">10</span>; i++) {
            System.out.<span class="mth">print</span>(<span class="mth">fib</span>(i) + <span class="str">" "</span>);
        }
    }
}</code></pre></div>
<div class="output-block">0 1 1 2 3 5 8 13 21 34</div>
<div class="concept-box"><h3>Call by Value</h3><p>Java is always <strong>call by value</strong>. For primitives, value is copied. For objects, reference is copied.</p></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Sum of digits using recursion</li><li>Reverse a string recursively</li><li>Find GCD of two numbers recursively</li></ol></div>`},
{title:"Java String",difficulty:"Intermediate",badgeClass:"intermediate",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=P9hEmbfdiuc" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java String Methods Tutorial — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>String Introduction</h3><p>String is <strong>immutable</strong> (cannot be changed once created). Stored in String Constant Pool.</p></div>
<div class="concept-box"><h3>String Class Methods</h3>
<table><tr><th>Method</th><th>Example</th></tr>
<tr><td><code>length()</code></td><td><code>"Hello".length()</code> → 5</td></tr>
<tr><td><code>charAt(i)</code></td><td><code>"Hello".charAt(1)</code> → 'e'</td></tr>
<tr><td><code>substring(start)</code></td><td><code>"Hello".substring(1)</code> → "ello"</td></tr>
<tr><td><code>toLowerCase()</code></td><td><code>"Hello".toLowerCase()</code> → "hello"</td></tr>
<tr><td><code>trim()</code></td><td><code>" hi ".trim()</code> → "hi"</td></tr>
<tr><td><code>replace(old, new)</code></td><td><code>"Hello".replace('l','r')</code> → "Herro"</td></tr>
<tr><td><code>split(regex)</code></td><td><code>"a,b,c".split(",")</code></td></tr>
<tr><td><code>contains(str)</code></td><td><code>"Hello".contains("ell")</code> → true</td></tr>
<tr><td><code>equals(str)</code></td><td><code>"abc".equals("abc")</code> → true</td></tr>
<tr><td><code>indexOf(str)</code></td><td><code>"Hello".indexOf("lo")</code> → 3</td></tr>
</table></div>
<div class="concept-box"><h3>StringBuffer and StringBuilder</h3><p>Both are <strong>mutable</strong>. StringBuffer is thread-safe (synchronized). StringBuilder is faster but not thread-safe.</p></div>
<div class="code-block"><div class="code-header"><span> StringBuilderDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">StringBuilderDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        StringBuilder sb = <span class="kw">new</span> StringBuilder(<span class="str">"Hello"</span>);
        sb.<span class="mth">append</span>(<span class="str">" World"</span>);
        sb.<span class="mth">insert</span>(<span class="mth">5</span>, <span class="str">","</span>);
        System.out.<span class="mth">println</span>(sb);
    }
}</code></pre></div>
<div class="output-block">Hello, World</div>
<div class="concept-box"><h3>StringTokenizer</h3><p>Breaks a string into tokens based on delimiters.</p></div>
<div class="code-block"><div class="code-header"><span> TokenDemo.java</span></div><pre><code><span class="kw">import</span> java.util.StringTokenizer;
<span class="kw">public class</span> <span class="cls">TokenDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        StringTokenizer st = <span class="kw">new</span> StringTokenizer(<span class="str">"Hello,World,Java"</span>, <span class="str">","</span>);
        <span class="kw">while</span> (st.hasMoreTokens()) {
            System.out.<span class="mth">println</span>(st.<span class="mth">nextToken</span>());
        }
    }
}</code></pre></div>
<div class="output-block">Hello\nWorld\nJava</div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Check if string is palindrome</li><li>Reverse string using StringBuilder</li><li>Count vowels and consonants</li><li>== vs equals() for strings?</li></ol></div>`},
{title:"Exception Handling & Multithreading",difficulty:"Advanced",badgeClass:"advanced",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture — Exception Handling</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=u1PROb-aRUI" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch Exception Handling</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Exception Handling — by Bro Code</p>
  </div>
</div>
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture — Multithreading</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=taI7G6U29L8" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch Multithreading</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Multithreading Tutorial — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>Multithreading</h3><p>Multithreading allows concurrent execution of two or more threads. Two ways:</p>
<ul><li><strong>Extend Thread class:</strong> Override run() method</li><li><strong>Implement Runnable interface:</strong> Implement run() method</li></ul></div>
<div class="code-block"><div class="code-header"><span> ThreadDemo.java</span></div><pre><code><span class="kw">class</span> <span class="cls">MyThread</span> <span class="kw">extends</span> Thread {
    <span class="kw">public void</span> <span class="mth">run</span>() {
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < <span class="mth">5</span>; i++) {
            System.out.<span class="mth">println</span>(Thread.<span class="mth">currentThread</span>().<span class="mth">getName</span>() + <span class="str">": "</span> + i);
        }
    }
}
<span class="kw">class</span> <span class="cls">MyRunnable</span> <span class="kw">implements</span> Runnable {
    <span class="kw">public void</span> <span class="mth">run</span>() {
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < <span class="mth">5</span>; i++) {
            System.out.<span class="mth">println</span>(Thread.<span class="mth">currentThread</span>().<span class="mth">getName</span>() + <span class="str">": "</span> + i);
        }
    }
}
<span class="kw">public class</span> <span class="cls">ThreadDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        MyThread t1 = <span class="kw">new</span> MyThread();
        t1.<span class="mth">start</span>();
        Thread t2 = <span class="kw">new</span> Thread(<span class="kw">new</span> MyRunnable());
        t2.<span class="mth">start</span>();
    }
}</code></pre></div>
<div class="concept-box"><h3>Thread Lifecycle</h3><ul><li><strong>New:</strong> Created but not started</li><li><strong>Runnable:</strong> Ready to run</li><li><strong>Running:</strong> Currently executing</li><li><strong>Waiting:</strong> Waiting for another thread</li><li><strong>Terminated:</strong> Execution completed</li></ul></div>
<div class="concept-box"><h3>Inter-Thread Communication</h3><p><code>wait()</code>, <code>notify()</code>, <code>notifyAll()</code> — must be called in synchronized block.</p></div>
<div class="concept-box"><h3>Deadlock</h3><p>Two or more threads blocked forever, each waiting for the other. Must be avoided.</p></div>
<div class="concept-box"><h3>Error vs Exception</h3>
<table><tr><th>Error</th><th>Exception</th></tr>
<tr><td>Serious, unrecoverable</td><td>Recoverable with try-catch</td></tr>
<tr><td>OutOfMemoryError, StackOverflowError</td><td>IOException, NullPointerException</td></tr>
</table></div>
<div class="concept-box"><h3>Exception Handling</h3><p>Use try-catch-finally to handle exceptions.</p></div>
<div class="code-block"><div class="code-header"><span> ExceptionDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ExceptionDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="kw">try</span> {
            <span class="kw">int</span>[] arr = {<span class="mth">1</span>, <span class="mth">2</span>, <span class="mth">3</span>};
            System.out.<span class="mth">println</span>(arr[<span class="mth">5</span>]);
        } <span class="kw">catch</span> (ArrayIndexOutOfBoundsException e) {
            System.out.<span class="mth">println</span>(<span class="str">"Index out of bounds!"</span>);
        } <span class="kw">finally</span> {
            System.out.<span class="mth">println</span>(<span class="str">"Finally block always runs"</span>);
        }
    }
}</code></pre></div>
<div class="output-block">Index out of bounds!\nFinally block always runs</div>
<div class="concept-box"><h3>Custom Exceptions</h3><p>Use <code>throw</code> to throw, <code>throws</code> in method signature to declare.</p></div>
<div class="code-block"><div class="code-header"><span> CustomException.java</span></div><pre><code><span class="kw">class</span> <span class="cls">InsufficientBalanceException</span> <span class="kw">extends</span> Exception {
    InsufficientBalanceException(String msg) { <span class="kw">super</span>(msg); }
}
<span class="kw">class</span> <span class="cls">Bank</span> {
    <span class="kw">double</span> balance = <span class="mth">1000</span>;
    <span class="kw">void</span> <span class="mth">withdraw</span>(<span class="kw">double</span> amt) <span class="kw">throws</span> InsufficientBalanceException {
        <span class="kw">if</span> (amt > balance) <span class="kw">throw new</span> InsufficientBalanceException(<span class="str">"Not enough!"</span>);
        balance -= amt;
    }
}</code></pre></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Create thread printing even numbers, another for odd</li><li>Demonstrate deadlock and how to avoid it</li><li>Create InvalidAgeException</li><li>throw vs throws?</li></ol></div>`},
{title:"Stream and File",difficulty:"Advanced",badgeClass:"advanced",content:`
<div class="video-section" style="margin-bottom: 20px;">
  <h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
  <div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
    <a href="https://www.youtube.com/watch?v=ScUJx4aWRi0" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
      <i class="fab fa-youtube" style="font-size:1.2rem;"></i>
      <span>Watch on YouTube</span>
      <i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
    </a>
    <p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java File I/O Tutorial — by Bro Code</p>
  </div>
</div>
<div class="concept-box"><h3>Introduction to Streams</h3><p>Streams handle I/O operations. Two types:</p>
<ul><li><strong>Byte Streams:</strong> Handle binary data (InputStream, OutputStream)</li><li><strong>Character Streams:</strong> Handle text data (Reader, Writer)</li></ul></div>
<div class="concept-box"><h3>Stream Class Hierarchy</h3>
<table><tr><th>Byte Streams</th><th>Character Streams</th></tr>
<tr><td>InputStream</td><td>Reader</td></tr>
<tr><td>OutputStream</td><td>Writer</td></tr>
<tr><td>FileInputStream</td><td>FileReader</td></tr>
<tr><td>FileOutputStream</td><td>FileWriter</td></tr>
<tr><td>BufferedInputStream</td><td>BufferedReader</td></tr>
<tr><td>BufferedOutputStream</td><td>BufferedWriter</td></tr>
</table></div>
<div class="concept-box"><h3>File Class</h3><p>Represents file/directory paths. Can check existence, create/delete files, get properties.</p></div>
<div class="code-block"><div class="code-header"><span> FileDemo.java</span></div><pre><code><span class="kw">import</span> java.io.File;
<span class="kw">public class</span> <span class="cls">FileDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        File file = <span class="kw">new</span> File(<span class="str">"test.txt"</span>);
        System.out.<span class="mth">println</span>(<span class="str">"Exists: "</span> + file.exists());
        System.out.<span class="mth">println</span>(<span class="str">"Name: "</span> + file.getName());
        System.out.<span class="mth">println</span>(<span class="str">"Path: "</span> + file.getAbsolutePath());
        System.out.<span class="mth">println</span>(<span class="str">"Is file: "</span> + file.isFile());
    }
}</code></pre></div>
<div class="concept-box"><h3>FileInputStream & FileOutputStream</h3><p>Read from and write to files using byte streams.</p></div>
<div class="code-block"><div class="code-header"><span> FileReadWrite.java</span></div><pre><code><span class="kw">import</span> java.io.*;
<span class="kw">public class</span> <span class="cls">FileReadWrite</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="kw">try</span> (FileOutputStream fos = <span class="kw">new</span> FileOutputStream(<span class="str">"output.txt"</span>)) {
            String data = <span class="str">"Hello, Java Streams!"</span>;
            fos.<span class="mth">write</span>(data.<span class="mth">getBytes</span>());
            System.out.<span class="mth">println</span>(<span class="str">"Data written"</span>);
        } <span class="kw">catch</span> (IOException e) { e.<span class="mth">printStackTrace</span>(); }
        <span class="kw">try</span> (FileInputStream fis = <span class="kw">new</span> FileInputStream(<span class="str">"output.txt"</span>)) {
            <span class="kw">int</span> content;
            <span class="kw">while</span> ((content = fis.<span class="mth">read</span>()) != -<span class="mth">1</span>) {
                System.out.<span class="mth">print</span>((<span class="kw">char</span>) content);
            }
        } <span class="kw">catch</span> (IOException e) { e.<span class="mth">printStackTrace</span>(); }
    }
}</code></pre></div>
<div class="output-block">Data written\nHello, Java Streams!</div>
<div class="concept-box"><h3>Stream Methods</h3>
<table><tr><th>Method</th><th>Description</th></tr>
<tr><td><code>read()</code></td><td>Reads a byte (-1 at end)</td></tr>
<tr><td><code>write(int)</code></td><td>Writes a byte</td></tr>
<tr><td><code>close()</code></td><td>Closes stream, releases resources</td></tr>
<tr><td><code>flush()</code></td><td>Forces buffered output to write</td></tr>
</table>
<div class="alert-box">Always close streams. Use try-with-resources for auto-close.</div></div>
<div class="practice-section"><h3><i class="fas fa-puzzle-piece"></i> Practice</h3><ol><li>Copy contents of one file to another</li><li>Count lines in a text file</li><li>Read a file and count word occurrences</li></ol></div>`}
];
