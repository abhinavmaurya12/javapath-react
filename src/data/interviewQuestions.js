export default  [
  {id:1, title:"Static Blocks & Initializers", content:`<div class="concept-box"><h3>1) What are static blocks and static initializers in java?</h3><p>A <strong>static block</strong> (also called a static initializer) is a block of code that runs exactly once when the class is first loaded into memory, before any objects are created or static methods are called. It is mainly used for initializing static variables.</p><p><strong>Key points:</strong></p><ul><li>Declared with the <code>static</code> keyword</li><li>Executes only once when the class is loaded</li><li>Can contain any code (not just variable assignments)</li><li>Multiple static blocks are allowed and run in order</li><li>Cannot access instance (non-static) members</li><li>Cannot use <code>this</code> or <code>super</code></li></ul></div><div class="code-block"><div class="code-header"><span>StaticBlockDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">StaticBlockDemo</span> {\n    <span class="kw">static int</span> count;\n\n    <span class="cmt">// Static block - runs once when class is loaded</span>\n    <span class="kw">static</span> {\n        count = <span class="mth">10</span>;\n        System.out.<span class="mth">println</span>(<span class="str">"Static block executed. count = "</span> + count);\n    }\n\n    <span class="kw">static</span> {\n        count = count * <span class="mth">2</span>;\n        System.out.<span class="mth">println</span>(<span class="str">"Second static block. count = "</span> + count);\n    }\n\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        System.out.<span class="mth">println</span>(<span class="str">"Main method. count = "</span> + count);\n    }\n}</code></pre></div><div class="output-block">Static block executed. count = 10<br>Second static block. count = 20<br>Main method. count = 20</div>`},
  {id:2, title:"Constructor Chaining", content:`<div class="concept-box"><h3>2) How to call one constructor from the other constructor?</h3><p><strong>Constructor chaining</strong> is the process of calling one constructor from another constructor within the same class (using <code>this()</code>) or from a parent class (using <code>super()</code>).</p><p><strong>Key points:</strong></p><ul><li><code>this()</code> calls another constructor in the <strong>same class</strong></li><li><code>super()</code> calls a constructor in the <strong>parent class</strong></li><li>The call must be the <strong>first statement</strong> in the constructor</li><li>You cannot use both <code>this()</code> and <code>super()</code> in the same constructor</li></ul></div><div class="code-block"><div class="code-header"><span>ConstructorChainingDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ConstructorChainingDemo</span> {\n    String name;\n    <span class="kw">int</span> age;\n\n    <span class="cmt">// Constructor 1: no-arg</span>\n    <span class="kw">public</span> <span class="mth">ConstructorChainingDemo</span>() {\n        <span class="kw">this</span>(<span class="str">"Unknown"</span>, <span class="mth">0</span>);\n        System.out.<span class="mth">println</span>(<span class="str">"No-arg constructor called"</span>);\n    }\n\n    <span class="cmt">// Constructor 2: one arg</span>\n    <span class="kw">public</span> <span class="mth">ConstructorChainingDemo</span>(String name) {\n        <span class="kw">this</span>(name, <span class="mth">25</span>);\n        System.out.<span class="mth">println</span>(<span class="str">"One-arg constructor called"</span>);\n    }\n\n    <span class="cmt">// Constructor 3: two args</span>\n    <span class="kw">public</span> <span class="mth">ConstructorChainingDemo</span>(String name, <span class="kw">int</span> age) {\n        <span class="kw">this</span>.name = name;\n        <span class="kw">this</span>.age = age;\n        System.out.<span class="mth">println</span>(<span class="str">"Two-arg constructor called: "</span> + name + <span class="str">", "</span> + age);\n    }\n\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        <span class="kw">new</span> ConstructorChainingDemo();\n    }\n}</code></pre></div><div class="output-block">Two-arg constructor called: Unknown, 0<br>One-arg constructor called<br>Two-arg constructor called: Unknown, 0<br>No-arg constructor called</div>`},
  {id:3, title:"Method Overriding", content:`<div class="concept-box"><h3>3) What is method overriding in java?</h3><p><strong>Method overriding</strong> occurs when a subclass provides its own specific implementation for a method already defined in its parent class. The method in the subclass must have the <strong>same name, same parameters, and same return type</strong> (or covariant return type).</p><p><strong>Key points:</strong></p><ul><li>Occurs between parent and child classes (inheritance)</li><li>Method signature must be identical</li><li>Access modifier cannot be more restrictive</li><li>Private, static, and final methods cannot be overridden</li><li>Enables <strong>runtime polymorphism</strong></li></ul></div><div class="code-block"><div class="code-header"><span>MethodOverridingDemo.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Animal</span> {\n    <span class="kw">void</span> <span class="mth">sound</span>() {\n        System.out.<span class="mth">println</span>(<span class="str">"Animal makes a sound"</span>);\n    }\n}\n\n<span class="kw">class</span> <span class="cls">Dog</span> <span class="kw">extends</span> <span class="cls">Animal</span> {\n    <span class="kw">@Override</span>\n    <span class="kw">void</span> <span class="mth">sound</span>() {\n        System.out.<span class="mth">println</span>(<span class="str">"Dog barks"</span>);\n    }\n}\n\n<span class="kw">class</span> <span class="cls">Cat</span> <span class="kw">extends</span> <span class="cls">Animal</span> {\n    <span class="kw">@Override</span>\n    <span class="kw">void</span> <span class="mth">sound</span>() {\n        System.out.<span class="mth">println</span>(<span class="str">"Cat meows"</span>);\n    }\n}\n\n<span class="kw">public class</span> <span class="cls">MethodOverridingDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        Animal a1 = <span class="kw">new</span> Dog();\n        Animal a2 = <span class="kw">new</span> Cat();\n        a1.<span class="mth">sound</span>();\n        a2.<span class="mth">sound</span>();\n    }\n}</code></pre></div><div class="output-block">Dog barks<br>Cat meows</div>`},
  {id:4, title:"Super Keyword", content:`<div class="concept-box"><h3>4) What is super keyword in java?</h3><p>The <code>super</code> keyword refers to the <strong>immediate parent class</strong> object. It is used to:</p><ul><li>Call a parent class constructor</li><li>Access parent class methods (when overridden)</li><li>Access parent class fields (when shadowed)</li></ul></div><div class="code-block"><div class="code-header"><span>SuperKeywordDemo.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Parent</span> {\n    String color = <span class="str">"Red"</span>;\n    Parent() { System.out.<span class="mth">println</span>(<span class="str">"Parent constructor"</span>); }\n    <span class="kw">void</span> <span class="mth">display</span>() { System.out.<span class="mth">println</span>(<span class="str">"Parent display()"</span>); }\n}\n\n<span class="kw">class</span> <span class="cls">Child</span> <span class="kw">extends</span> <span class="cls">Parent</span> {\n    String color = <span class="str">"Blue"</span>;\n    Child() {\n        <span class="kw">super</span>();\n        System.out.<span class="mth">println</span>(<span class="str">"Child constructor"</span>);\n    }\n    <span class="kw">void</span> <span class="mth">showColor</span>() {\n        System.out.<span class="mth">println</span>(<span class="str">"Child color: "</span> + <span class="kw">super</span>.color);\n        <span class="kw">super</span>.<span class="mth">display</span>();\n    }\n}\n\n<span class="kw">public class</span> <span class="cls">SuperKeywordDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        Child c = <span class="kw">new</span> Child();\n        c.<span class="mth">showColor</span>();\n    }\n}</code></pre></div><div class="output-block">Parent constructor<br>Child constructor<br>Child color: Red<br>Parent display()</div>`},
  {id:5, title:"Overloading vs Overriding", content:`<div class="concept-box"><h3>5) Difference between method overloading and method overriding in java?</h3><table><tr><th>Feature</th><th>Overloading</th><th>Overriding</th></tr><tr><td>Parameters</td><td>Must be different</td><td>Must be same</td></tr><tr><td>Return Type</td><td>Can be different</td><td>Must be same/covariant</td></tr><tr><td>Access Modifier</td><td>No restriction</td><td>Cannot be more restrictive</td></tr><tr><td>Binding</td><td>Compile-time (static)</td><td>Runtime (dynamic)</td></tr><tr><td>Class</td><td>Same class or subclass</td><td>Only in subclass</td></tr><tr><td>Also Known As</td><td>Compile-time polymorphism</td><td>Runtime polymorphism</td></tr></table></div><div class="code-block"><div class="code-header"><span>OverloadingDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">OverloadingDemo</span> {\n    <span class="kw">int</span> <span class="mth">add</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) { <span class="kw">return</span> a+b; }\n    <span class="kw">double</span> <span class="mth">add</span>(<span class="kw">double</span> a, <span class="kw">double</span> b) { <span class="kw">return</span> a+b; }\n    <span class="kw">int</span> <span class="mth">add</span>(<span class="kw">int</span> a, <span class="kw">int</span> b, <span class="kw">int</span> c) { <span class="kw">return</span> a+b+c; }\n\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        OverloadingDemo obj = <span class="kw">new</span> OverloadingDemo();\n        System.out.<span class="mth">println</span>(obj.<span class="mth">add</span>(<span class="mth">5</span>, <span class="mth">3</span>));\n        System.out.<span class="mth">println</span>(obj.<span class="mth">add</span>(<span class="mth">2.5</span>, <span class="mth">3.5</span>));\n        System.out.<span class="mth">println</span>(obj.<span class="mth">add</span>(<span class="mth">1</span>, <span class="mth">2</span>, <span class="mth">3</span>));\n    }\n}</code></pre></div><div class="output-block">8<br>6.0<br>6</div>`},
  {id:6, title:"Abstract Class vs Interface", content:`<div class="concept-box"><h3>6) Difference between abstract class and interface?</h3><table><tr><th>Feature</th><th>Abstract Class</th><th>Interface</th></tr><tr><td>Method Bodies</td><td>Can have both abstract and concrete methods</td><td>All methods abstract (Java 7). Java 8+ allows default/static methods</td></tr><tr><td>Variables</td><td>Can have any type of variables</td><td>Only <code>public static final</code> variables</td></tr><tr><td>Inheritance</td><td>Single class can extend only one</td><td>A class can implement multiple interfaces</td></tr><tr><td>Constructors</td><td>Can have constructors</td><td>Cannot have constructors</td></tr><tr><td>Use When</td><td>Classes share common state/behavior</td><td>Classes define a contract/capability</td></tr></table></div><div class="code-block"><div class="code-header"><span>AbstractVsInterface.java</span></div><pre><code><span class="kw">abstract class</span> <span class="cls">Shape</span> {\n    <span class="kw">double</span> area;\n    <span class="kw">abstract double</span> <span class="mth">calculateArea</span>();\n    <span class="kw">void</span> <span class="mth">display</span>() { System.out.<span class="mth">println</span>(<span class="str">"Area = "</span> + area); }\n}\n\n<span class="kw">interface</span> <span class="cls">Resizable</span> {\n    <span class="kw">void</span> <span class="mth">resize</span>(<span class="kw">double</span> factor);\n}\n\n<span class="kw">class</span> <span class="cls">Circle</span> <span class="kw">extends</span> <span class="cls">Shape</span> <span class="kw">implements</span> <span class="cls">Resizable</span> {\n    <span class="kw">double</span> radius;\n    Circle(<span class="kw">double</span> r) { radius = r; }\n    <span class="kw">double</span> <span class="mth">calculateArea</span>() { <span class="kw">return</span> Math.PI * radius * radius; }\n    <span class="kw">public void</span> <span class="mth">resize</span>(<span class="kw">double</span> f) { radius *= f; }\n}\n\n<span class="kw">public class</span> <span class="cls">AbstractVsInterface</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        Circle c = <span class="kw">new</span> Circle(<span class="mth">5</span>);\n        c.area = c.<span class="mth">calculateArea</span>();\n        c.<span class="mth">display</span>();\n        c.<span class="mth">resize</span>(<span class="mth">2</span>);\n        c.area = c.<span class="mth">calculateArea</span>();\n        c.<span class="mth">display</span>();\n    }\n}</code></pre></div><div class="output-block">Area = 78.53981633974483<br>Area = 314.1592653589793</div>`},
  {id:7, title:"Platform Independent", content:`<div class="concept-box"><h3>7) Why java is platform independent?</h3><p>Java is called platform independent because of its <strong>"Write Once, Run Anywhere" (WORA)</strong> principle. Java source code is compiled into <strong>bytecode</strong> (not native machine code), and this bytecode runs on any platform that has a JVM.</p><p><strong>How it works:</strong></p><ul><li>Source code (.java) compiled by <code>javac</code> into bytecode (.class file)</li><li>JVM interprets/compiles the bytecode at runtime</li><li>Each platform has its own JVM implementation</li><li>Bytecode is the same on all platforms</li></ul></div><div class="code-block"><div class="code-header"><span>PlatformDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">PlatformDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        System.out.<span class="mth">println</span>(<span class="str">"OS: "</span> + System.<span class="mth">getProperty</span>(<span class="str">"os.name"</span>));\n        System.out.<span class="mth">println</span>(<span class="str">"Java: "</span> + System.<span class="mth">getProperty</span>(<span class="str">"java.version"</span>));\n    }\n}</code></pre></div><div class="output-block">OS: Windows 10<br>Java: 17.0.1</div>`},
  {id:8, title:"Method Overloading", content:`<div class="concept-box"><h3>8) What is method overloading in java?</h3><p><strong>Method overloading</strong> means having multiple methods with the <strong>same name</strong> but <strong>different parameter lists</strong> within the same class. It is a form of compile-time (static) polymorphism.</p><p><strong>Ways to overload:</strong></p><ul><li>Different number of parameters</li><li>Different types of parameters</li><li>Different order of parameter types</li></ul><p><strong>Note:</strong> Changing only the return type does NOT count as overloading.</p></div><div class="code-block"><div class="code-header"><span>MethodOverloadingDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">MethodOverloadingDemo</span> {\n    <span class="kw">static int</span> <span class="mth">add</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) { <span class="kw">return</span> a + b; }\n    <span class="kw">static double</span> <span class="mth">add</span>(<span class="kw">double</span> a, <span class="kw">double</span> b) { <span class="kw">return</span> a + b; }\n    <span class="kw">static int</span> <span class="mth">add</span>(<span class="kw">int</span> a, <span class="kw">int</span> b, <span class="kw">int</span> c) { <span class="kw">return</span> a + b + c; }\n\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        System.out.<span class="mth">println</span>(<span class="mth">add</span>(<span class="mth">10</span>, <span class="mth">20</span>));\n        System.out.<span class="mth">println</span>(<span class="mth">add</span>(<span class="mth">10.5</span>, <span class="mth">20.5</span>));\n        System.out.<span class="mth">println</span>(<span class="mth">add</span>(<span class="mth">5</span>, <span class="mth">10</span>, <span class="mth">15</span>));\n    }\n}</code></pre></div><div class="output-block">30<br>31.0<br>30</div>`},
  {id:9, title:"C++ vs Java", content:`<div class="concept-box"><h3>9) What is difference between C++ and java?</h3><table><tr><th>Feature</th><th>C++</th><th>Java</th></tr><tr><td>Platform</td><td>Platform dependent</td><td>Platform independent</td></tr><tr><td>Pointers</td><td>Supports pointers</td><td>No pointers (uses references)</td></tr><tr><td>Inheritance</td><td>Multiple inheritance supported</td><td>No multiple inheritance (uses interfaces)</td></tr><tr><td>Memory</td><td>Manual (new/delete)</td><td>Automatic (Garbage Collection)</td></tr><tr><td>Operator Overloading</td><td>Supported</td><td>Not supported</td></tr></table></div><div class="code-block"><div class="code-header"><span>CppVsJava.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">CppVsJava</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        String s = <span class="str">"Hello"</span>;\n        System.out.<span class="mth">println</span>(s);\n        Object obj = <span class="kw">new</span> Object();\n        obj = <span class="kw">null</span>;\n        System.out.<span class="mth">println</span>(<span class="str">"Java handles memory automatically"</span>);\n    }\n}</code></pre></div><div class="output-block">Hello<br>Java handles memory automatically</div>`},
  {id:10, title:"JIT Compiler", content:`<div class="concept-box"><h3>10) What is JIT compiler?</h3><p>The <strong>JIT (Just-In-Time) Compiler</strong> is part of the JVM that improves performance by compiling <strong>bytecode into native machine code at runtime</strong>, rather than interpreting it line by line.</p><p><strong>How it works:</strong></p><ul><li>JVM starts by interpreting bytecode</li><li>When a method is called frequently (hot spot), JIT compiles it to native code</li><li>Compiled native code is cached and reused</li><li>Eliminates repeated interpretation overhead</li></ul></div><div class="code-block"><div class="code-header"><span>JitDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">JitDemo</span> {\n    <span class="kw">static long</span> <span class="mth">compute</span>(<span class="kw">int</span> n) {\n        <span class="kw">long</span> sum = <span class="mth">0</span>;\n        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i &lt; n; i++) sum += i;\n        <span class="kw">return</span> sum;\n    }\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        <span class="kw">long</span> start = System.<span class="mth">nanoTime</span>();\n        <span class="mth">compute</span>(<span class="mth">100000000</span>);\n        System.out.<span class="mth">println</span>(<span class="str">"Time: "</span> + (System.<span class="mth">nanoTime</span>() - start) + <span class="str">" ns"</span>);\n    }\n}</code></pre></div><div class="output-block">Time: 12543200 ns</div>`},
  {id:11, title:"Bytecode", content:`<div class="concept-box"><h3>11) What is bytecode in java?</h3><p><strong>Bytecode</strong> is an intermediate set of instructions produced by the Java compiler (<code>javac</code>). Stored in <code>.class</code> files and executed by the JVM.</p><p><strong>Key points:</strong></p><ul><li>Platform-independent — same bytecode runs on any JVM</li><li>More compact than source code</li><li>Can be inspected using <code>javap</code> command</li></ul></div><div class="code-block"><div class="code-header"><span>BytecodeDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">BytecodeDemo</span> {\n    <span class="kw">int</span> x = <span class="mth">10</span>;\n    <span class="kw">public void</span> <span class="mth">greet</span>() { System.out.<span class="mth">println</span>(<span class="str">"Hello"</span>); }\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        BytecodeDemo obj = <span class="kw">new</span> BytecodeDemo();\n        obj.<span class="mth">greet</span>();\n    }\n}</code></pre></div><div class="output-block">Hello<br><br>View bytecode: javap -c BytecodeDemo.class</div>`},
  {id:12, title:"this() vs super()", content:`<div class="concept-box"><h3>12) Difference between this() and super() in java?</h3><table><tr><th>Feature</th><th>this()</th><th>super()</th></tr><tr><td>Purpose</td><td>Calls another constructor in same class</td><td>Calls a constructor in parent class</td></tr><tr><td>Inheritance</td><td>Works within the same class</td><td>Requires inheritance</td></tr><tr><td>Must be</td><td colspan="2" style="text-align:center">First statement in constructor</td></tr><tr><td>Together</td><td colspan="2" style="text-align:center">Cannot use both in same constructor</td></tr></table></div><div class="code-block"><div class="code-header"><span>ThisVsSuperDemo.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Parent</span> {\n    Parent(String msg) { System.out.<span class="mth">println</span>(<span class="str">"Parent: "</span> + msg); }\n}\n<span class="kw">class</span> <span class="cls">Child</span> <span class="kw">extends</span> <span class="cls">Parent</span> {\n    Child() {\n        <span class="kw">super</span>(<span class="str">"Hello"</span>);\n        System.out.<span class="mth">println</span>(<span class="str">"Child no-arg"</span>);\n    }\n    Child(String msg) {\n        <span class="kw">this</span>();\n        System.out.<span class="mth">println</span>(<span class="str">"Child: "</span> + msg);\n    }\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) { <span class="kw">new</span> Child(<span class="str">"Test"</span>); }\n}</code></pre></div><div class="output-block">Parent: Hello<br>Child no-arg<br>Child: Test</div>`},
  {id:13, title:"Class", content:`<div class="concept-box"><h3>13) What is a class?</h3><p>A <strong>class</strong> is a blueprint or template that defines the properties (fields) and behaviors (methods) of objects. It is a user-defined data type in Java.</p><p><strong>Key points:</strong></p><ul><li>A class is a logical entity that doesn't occupy memory at definition time</li><li>Objects are created from classes (instances)</li><li>A class can contain fields, methods, constructors, blocks, and nested classes</li></ul></div><div class="code-block"><div class="code-header"><span>ClassDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ClassDemo</span> {\n    String name;\n    <span class="kw">int</span> age;\n    <span class="kw">public</span> <span class="mth">ClassDemo</span>(String name, <span class="kw">int</span> age) {\n        <span class="kw">this</span>.name = name;\n        <span class="kw">this</span>.age = age;\n    }\n    <span class="kw">void</span> <span class="mth">introduce</span>() {\n        System.out.<span class="mth">println</span>(<span class="str">"Hi, I'm "</span> + name + <span class="str">", age "</span> + age);\n    }\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        <span class="kw">new</span> ClassDemo(<span class="str">"Alice"</span>, <span class="mth">25</span>).<span class="mth">introduce</span>();\n    }\n}</code></pre></div><div class="output-block">Hi, I'm Alice, age 25</div>`},
  {id:14, title:"Object", content:`<div class="concept-box"><h3>14) What is an object?</h3><p>An <strong>object</strong> is an instance of a class. It has state (fields), behavior (methods), and identity (reference). Created using the <code>new</code> keyword.</p></div><div class="code-block"><div class="code-header"><span>ObjectDemo.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Car</span> {\n    String model;\n    <span class="kw">int</span> year;\n    Car(String model, <span class="kw">int</span> year) { <span class="kw">this</span>.model = model; <span class="kw">this</span>.year = year; }\n    <span class="kw">void</span> <span class="mth">drive</span>() { System.out.<span class="mth">println</span>(year + <span class="str">" "</span> + model + <span class="str">" is driving"</span>); }\n}\n<span class="kw">public class</span> <span class="cls">ObjectDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        Car c1 = <span class="kw">new</span> Car(<span class="str">"Civic"</span>, <span class="mth">2022</span>);\n        Car c2 = <span class="kw">new</span> Car(<span class="str">"Corolla"</span>, <span class="mth">2023</span>);\n        c1.<span class="mth">drive</span>();\n        c2.<span class="mth">drive</span>();\n    }\n}</code></pre></div><div class="output-block">2022 Civic is driving<br>2023 Corolla is driving</div>`},
  {id:15, title:"Method", content:`<div class="concept-box"><h3>15) What is method in java?</h3><p>A <strong>method</strong> is a block of code that runs only when called. It performs a specific task and promotes code reuse.</p><p><strong>Syntax:</strong> <code>accessModifier returnType methodName(parameters) { // body }</code></p></div><div class="code-block"><div class="code-header"><span>MethodDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">MethodDemo</span> {\n    <span class="kw">void</span> <span class="mth">sayHello</span>() { System.out.<span class="mth">println</span>(<span class="str">"Hello!"</span>); }\n    <span class="kw">int</span> <span class="mth">add</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) { <span class="kw">return</span> a + b; }\n    <span class="kw">static</span> String <span class="mth">greet</span>(String name) { <span class="kw">return</span> <span class="str">"Hello, "</span> + name; }\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        MethodDemo obj = <span class="kw">new</span> MethodDemo();\n        obj.<span class="mth">sayHello</span>();\n        System.out.<span class="mth">println</span>(obj.<span class="mth">add</span>(<span class="mth">5</span>, <span class="mth">3</span>));\n        System.out.<span class="mth">println</span>(<span class="mth">greet</span>(<span class="str">"Java"</span>));\n    }\n}</code></pre></div><div class="output-block">Hello!<br>8<br>Hello, Java</div>`},
  {id:16, title:"Encapsulation", content:`<div class="concept-box"><h3>16) What is encapsulation?</h3><p><strong>Encapsulation</strong> is the process of wrapping data and code together as a single unit and restricting direct access to fields using <strong>access modifiers</strong>. Achieved through <strong>getters and setters</strong>.</p><p><strong>Benefits:</strong> Data hiding, controlled access, flexibility.</p></div><div class="code-block"><div class="code-header"><span>EncapsulationDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">EncapsulationDemo</span> {\n    <span class="kw">private</span> String name;\n    <span class="kw">private int</span> age;\n    <span class="kw">public</span> String <span class="mth">getName</span>() { <span class="kw">return</span> name; }\n    <span class="kw">public void</span> <span class="mth">setName</span>(String name) {\n        <span class="kw">if</span> (name != <span class="kw">null</span> && !name.<span class="mth">isEmpty</span>()) <span class="kw">this</span>.name = name;\n    }\n    <span class="kw">public int</span> <span class="mth">getAge</span>() { <span class="kw">return</span> age; }\n    <span class="kw">public void</span> <span class="mth">setAge</span>(<span class="kw">int</span> age) {\n        <span class="kw">if</span> (age > <span class="mth">0</span> && age &lt; <span class="mth">150</span>) <span class="kw">this</span>.age = age;\n    }\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        EncapsulationDemo obj = <span class="kw">new</span> EncapsulationDemo();\n        obj.<span class="mth">setName</span>(<span class="str">"Bob"</span>);\n        obj.<span class="mth">setAge</span>(<span class="mth">25</span>);\n        System.out.<span class="mth">println</span>(obj.<span class="mth">getName</span>() + <span class="str">", "</span> + obj.<span class="mth">getAge</span>());\n    }\n}</code></pre></div><div class="output-block">Bob, 25</div>`},
  {id:17, title:"main() Signature", content:`<div class="concept-box"><h3>17) Why main() method is public, static and void in java?</h3><p><strong>public:</strong></p><p>"public" is an access specifier which can be used outside the class. When main method is declared public it means it can be used outside the class.</p><p><strong>static:</strong></p><p>To call a method we require object. Sometimes it may be required to call a method without creating the object. With the help of object, static method can be used outside the class. JVM calls the main() method without help of object. Then we declare that method as static.</p><p><strong>void:</strong></p><p>Then we declare keyword type is used when a method doesn't return any value — main() method doesn't return any value.</p></div><div class="code-block"><div class="code-header"><span>MainSignatureDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">MainSignatureDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        System.out.<span class="mth">println</span>(<span class="str">"JVM calls main() without creating an object"</span>);\n    }\n}</code></pre></div><div class="output-block">JVM calls main() without creating an object</div>`},
  {id:18, title:"main() Method", content:`<div class="concept-box"><h3>18) Explain about main() method in java?</h3><p>The <code>main()</code> method is the <strong>entry point</strong> of any Java application.</p><p><strong>Syntax:</strong> <code>public static void main(String[] args)</code></p><p><code>String[] args</code> holds command-line arguments.</p></div><div class="code-block"><div class="code-header"><span>MainMethodDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">MainMethodDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        System.out.<span class="mth">println</span>(<span class="str">"Main method called"</span>);\n        <span class="kw">for</span> (String arg : args) System.out.<span class="mth">println</span>(<span class="str">"Arg: "</span> + arg);\n    }\n}</code></pre></div><div class="output-block">Main method called</div>`},
  {id:19, title:"Constructor", content:`<div class="concept-box"><h3>19) What is constructor in java?</h3><p>A <strong>constructor</strong> is a special block called automatically when an object is created. Same name as class, no return type.</p><p>Java provides a default constructor if none is defined.</p></div><div class="code-block"><div class="code-header"><span>ConstructorDemo.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Student</span> {\n    String name;\n    <span class="kw">int</span> rollNo;\n    Student() { name = <span class="str">"Unknown"</span>; rollNo = <span class="mth">0</span>; }\n    Student(String name, <span class="kw">int</span> rollNo) { <span class="kw">this</span>.name = name; <span class="kw">this</span>.rollNo = rollNo; }\n}\n<span class="kw">public class</span> <span class="cls">ConstructorDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        Student s1 = <span class="kw">new</span> Student();\n        Student s2 = <span class="kw">new</span> Student(<span class="str">"Alice"</span>, <span class="mth">101</span>);\n        System.out.<span class="mth">println</span>(s1.name + <span class="str">" - "</span> + s1.rollNo);\n        System.out.<span class="mth">println</span>(s2.name + <span class="str">" - "</span> + s2.rollNo);\n    }\n}</code></pre></div><div class="output-block">Unknown - 0<br>Alice - 101</div>`},
  {id:20, title:"length vs length()", content:`<div class="concept-box"><h3>20) What is difference between length and length() method in java?</h3><table><tr><th>Feature</th><th>length</th><th>length()</th></tr><tr><td>Used For</td><td>Arrays</td><td>Strings</td></tr><tr><td>Type</td><td>Final field</td><td>Method of String class</td></tr><tr><td>Syntax</td><td><code>arr.length</code></td><td><code>str.length()</code></td></tr></table><p>For <code>ArrayList</code>, use <code>size()</code>.</p></div><div class="code-block"><div class="code-header"><span>LengthDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">LengthDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        <span class="kw">int</span>[] arr = {<span class="mth">1</span>, <span class="mth">2</span>, <span class="mth">3</span>, <span class="mth">4</span>, <span class="mth">5</span>};\n        System.out.<span class="mth">println</span>(<span class="str">"Array length: "</span> + arr.length);\n        String str = <span class="str">"Hello"</span>;\n        System.out.<span class="mth">println</span>(<span class="str">"String length: "</span> + str.<span class="mth">length</span>());\n    }\n}</code></pre></div><div class="output-block">Array length: 5<br>String length: 5</div>`},
  {id:21, title:"ASCII Code", content:`<div class="concept-box"><h3>21) What is ASCII Code?</h3><p>ASCII stands for American Standard Code for Information Interchange. ASCII character set is 0 to 255. We can't add more characters to the ASCII Character set. ASCII character set supports only English.</p></div><div class="code-block"><div class="code-header"><span>AsciiDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">AsciiDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        <span class="kw">char</span> ch = <span class="str">'A'</span>;\n        System.out.<span class="mth">println</span>(<span class="str">"Character: "</span> + ch);\n        System.out.<span class="mth">println</span>(<span class="str">"ASCII value: "</span> + (<span class="kw">int</span>) ch);\n        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">65</span>; i &lt;= <span class="mth">70</span>; i++)\n            System.out.<span class="mth">println</span>(i + <span class="str">" -> "</span> + (<span class="kw">char</span>) i);\n    }\n}</code></pre></div><div class="output-block">Character: A<br>ASCII value: 65<br>65 -> A<br>66 -> B<br>67 -> C<br>68 -> D<br>69 -> E<br>70 -> F</div>`},
  {id:22, title:"Unicode", content:`<div class="concept-box"><h3>22) What is Unicode?</h3><p>Unicode is a character set developed by Unicode Consortium. To support all languages in the world Java uses Unicode. Unicode characters were represented by 16 bits and its character range is 0–65,535. We can't add more characters to the ASCII Character set. ASCII character set supports only English. That is the reason, if we see C language we can write a language only in English — we can't write in other languages because it uses ASCII code.</p></div><div class="code-block"><div class="code-header"><span>UnicodeDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">UnicodeDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        <span class="kw">char</span> a = <span class="str">'A'</span>;\n        <span class="kw">char</span> h = <span class="str">'\\u0939'</span>;\n        <span class="kw">char</span> j = <span class="str">'\\u3042'</span>;\n        System.out.<span class="mth">println</span>(<span class="str">"English: "</span> + a + <span class="str">" = "</span> + (<span class="kw">int</span>) a);\n        System.out.<span class="mth">println</span>(<span class="str">"Hindi:   "</span> + h + <span class="str">" = "</span> + (<span class="kw">int</span>) h);\n        System.out.<span class="mth">println</span>(<span class="str">"Japanese:"</span> + j + <span class="str">" = "</span> + (<span class="kw">int</span>) j);\n    }\n}</code></pre></div><div class="output-block">English: A = 65<br>Hindi:   ह = 2361<br>Japanese:あ = 12354</div>`},
  {id:23, title:"Char vs String Constant", content:`<div class="concept-box"><h3>23) Difference between Character Constant and String Constant in java?</h3><p>Character constant is enclosed in single quotes. Character constants are single digit or character. String constants are enclosed in double quotes. String constants are collection of characters.</p><p>Ex: '2', 'A'</p><p>Ex: "Hello World"</p></div><div class="code-block"><div class="code-header"><span>CharVsString.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">CharVsString</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        <span class="kw">char</span> c = <span class="str">'A'</span>;\n        String s = <span class="str">"Hello"</span>;\n        System.out.<span class="mth">println</span>(<span class="str">"char: "</span> + c + <span class="str">", size: 1"</span>);\n        System.out.<span class="mth">println</span>(<span class="str">"String: "</span> + s + <span class="str">", length: "</span> + s.<span class="mth">length</span>());\n    }\n}</code></pre></div><div class="output-block">char: A, size: 1<br>String: Hello, length: 5</div>`},
  {id:24, title:"Constants", content:`<div class="concept-box"><h3>24) What are constants and how to create constants in java?</h3><p>Constants are fixed values whose values cannot be changed during the execution of program. We create constants in java using final keyword.</p><p>Ex: final int number = 10;</p><p>Ex: final String str = "java-interview-questions";</p></div><div class="code-block"><div class="code-header"><span>ConstantsDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ConstantsDemo</span> {\n    <span class="kw">static final double</span> PI = <span class="mth">3.14159</span>;\n    <span class="kw">static final</span> String GREETING = <span class="str">"Hello World"</span>;\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        <span class="kw">final int</span> MAX = <span class="mth">100</span>;\n        System.out.<span class="mth">println</span>(<span class="str">"PI: "</span> + PI);\n        System.out.<span class="mth">println</span>(<span class="str">"Greeting: "</span> + GREETING);\n        System.out.<span class="mth">println</span>(<span class="str">"MAX: "</span> + MAX);\n    }\n}</code></pre></div><div class="output-block">PI: 3.14159<br>Greeting: Hello World<br>MAX: 100</div>`},
  {id:25, title:">> vs >>>", content:`<div class="concept-box"><h3>25) Difference between '>>' and '>>>' operators in java?</h3><p>'>>' is a right shift operator — shifts all of the bits in a value to the right a specified number of times.</p><p>'>>>' is an unsigned right shift operator, used to shift right. The bits shifted in from the left are filled with zeroes.</p></div><div class="code-block"><div class="code-header"><span>ShiftDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ShiftDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        <span class="kw">int</span> a = <span class="mth">-16</span>;\n        System.out.<span class="mth">println</span>(<span class="str">"a >> 2  = "</span> + (a >> <span class="mth">2</span>));\n        System.out.<span class="mth">println</span>(<span class="str">"a >>> 2 = "</span> + (a >>> <span class="mth">2</span>));\n    }\n}</code></pre></div><div class="output-block">a >> 2  = -4<br>a >>> 2 = 1073741820</div>`},
  {id:26, title:"Class Naming Conventions", content:`<div class="concept-box"><h3>26) Explain Java Coding Standards for classes (or Java coding conventions for classes)?</h3><p>Sun has created Java Coding standards for classes / Java Coding Conventions. It is highly recommended to follow these standards.</p><ul><li>Classnames should start with an uppercase letter.</li><li>Classnames should be nouns.</li><li>If the class name has multiple words, the first letter of each inner word must be capital (CamelCase).</li></ul><p>Ex: Employee, EmployeeDetails, ArrayList, TreeSet, HashSet</p></div><div class="code-block"><div class="code-header"><span>ClassNamingExamples.java</span></div><pre><code><span class="cmt">// Correct</span>\n<span class="kw">public class</span> <span class="cls">EmployeeDetails</span> { }\n<span class="kw">class</span> <span class="cls">DatabaseConnection</span> { }\n<span class="kw">class</span> <span class="cls">HashMap</span> { }\n\n<span class="cmt">// WRONG</span>\n<span class="kw">class</span> <span class="cls">employeeDetails</span> { }   <span class="cmt">// starts lowercase</span>\n<span class="kw">class</span> <span class="cls">employee_details</span> { }  <span class="cmt">// uses underscore</span></code></pre></div><div class="output-block">Follow CamelCase: EmployeeDetails, DatabaseConnection</div>`},
  {id:27, title:"Interface Naming Conventions", content:`<div class="concept-box"><h3>27) Explain Java Coding standards for interfaces?</h3><ul><li>Interface names should start with an uppercase letter.</li><li>Interface names should be adjectives.</li></ul><p>Example: Runnable, Serializable, Cloneable</p></div><div class="code-block"><div class="code-header"><span>InterfaceNamingExamples.java</span></div><pre><code><span class="kw">public interface</span> <span class="cls">Runnable</span> { <span class="kw">void</span> <span class="mth">run</span>(); }\n<span class="kw">public interface</span> <span class="cls">Serializable</span> { }\n<span class="kw">public interface</span> <span class="cls">Cloneable</span> { }\n<span class="kw">public interface</span> <span class="cls">Comparable</span>&lt;T&gt; { <span class="kw">int</span> <span class="mth">compareTo</span>(T o); }\n<span class="kw">public interface</span> <span class="cls">Playable</span> { <span class="kw">void</span> <span class="mth">play</span>(); }</code></pre></div><div class="output-block">Adjective-based: Runnable, Serializable, Playable</div>`},
  {id:28, title:"Method Naming Conventions", content:`<div class="concept-box"><h3>28) Explain Java Coding standards for Methods?</h3><ul><li>Method names should start with a small (lowercase) letter.</li><li>Method names are usually verbs.</li><li>If method names are a combination of multiple words, every inner word should start with an uppercase letter.</li></ul><p>Ex: toString()</p><p>Ex: public abstract void getDetails();</p></div><div class="code-block"><div class="code-header"><span>MethodNamingExamples.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">MethodNamingExamples</span> {\n    <span class="kw">void</span> <span class="mth">calculateTotal</span>() { }\n    <span class="kw">void</span> <span class="mth">getEmployeeName</span>() { }\n    <span class="kw">boolean</span> <span class="mth">isEligible</span>() { <span class="kw">return true</span>; }\n    <span class="kw">void</span> <span class="mth">setUserName</span>(String name) { }\n}</code></pre></div><div class="output-block">calculateTotal, getEmployeeName, isEligible</div>`},
  {id:29, title:"Variable Naming Conventions", content:`<div class="concept-box"><h3>29) Explain Java Coding Standards for variables?</h3><ul><li>Variable names should start with a small letter.</li><li>Variable names should be nouns.</li><li>Short, meaningful names are recommended.</li><li>If there are multiple words, every inner word should start with an uppercase character.</li></ul><p>Ex: string, value, empName, employeeId</p></div><div class="code-block"><div class="code-header"><span>VariableNamingExamples.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">VariableNamingExamples</span> {\n    <span class="kw">int</span> age;\n    String firstName;\n    <span class="kw">double</span> salary;\n    <span class="kw">boolean</span> isActive;\n    <span class="kw">int</span> employeeId;\n}</code></pre></div><div class="output-block">age, firstName, salary, isActive</div>`},
  {id:30, title:"Constants Naming Conventions", content:`<div class="concept-box"><h3>30) Explain Java Coding Standards for Constants?</h3><ul><li>Constants in java are created using static and final keywords.</li><li>Constant names contain only uppercase letters. If the constant name is a combination of two words, it should be separated by an underscore.</li></ul><p>Ex: MAX_VALUE, MIN_VALUE, MAX_PRIORITY, MIN_PRIORITY</p></div><div class="code-block"><div class="code-header"><span>ConstantsNamingExamples.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ConstantsNamingExamples</span> {\n    <span class="kw">static final int</span> MAX_VALUE = <span class="mth">100</span>;\n    <span class="kw">static final int</span> MIN_VALUE = <span class="mth">0</span>;\n    <span class="kw">static final</span> String DATABASE_URL = <span class="str">"jdbc:mysql://localhost/mydb"</span>;\n    <span class="kw">static final double</span> PI = <span class="mth">3.14159</span>;\n}</code></pre></div><div class="output-block">MAX_VALUE, MIN_VALUE, DATABASE_URL, PI</div>`},
  {id:31, title:"Overriding vs Overloading", content:`<div class="concept-box"><h3>31) Difference between overriding and overloading in java?</h3><table><tr><th>Feature</th><th>Overriding</th><th>Overriding</th></tr><tr><td>Class</td><td>Parent-child</td><td>Same class</td></tr><tr><td>Parameters</td><td>Same</td><td>Different</td></tr><tr><td>Binding</td><td>Runtime</td><td>Compile-time</td></tr></table></div><div class="code-block"><div class="code-header"><span>OverrideVsOverload.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Parent</span> {\n    <span class="kw">void</span> <span class="mth">display</span>() { System.out.<span class="mth">println</span>(<span class="str">"Parent"</span>); }\n}\n<span class="kw">class</span> <span class="cls">Child</span> <span class="kw">extends</span> <span class="cls">Parent</span> {\n    <span class="kw">@Override</span>\n    <span class="kw">void</span> <span class="mth">display</span>() { System.out.<span class="mth">println</span>(<span class="str">"Child"</span>); }\n    <span class="kw">void</span> <span class="mth">display</span>(String msg) { System.out.<span class="mth">println</span>(<span class="str">"Child: "</span> + msg); }\n}</code></pre></div><div class="output-block">Child<br>Child: Hello</div>`},
  {id:32, title:"IS-A Relationship", content:`<div class="concept-box"><h3>32) What is 'IS-A' relationship in java?</h3><p>An <strong>IS-A relationship</strong> is established through <strong>inheritance</strong>. If class B extends class A, then B IS-A A.</p><p>Examples: Dog IS-A Animal, Car IS-A Vehicle</p></div><div class="code-block"><div class="code-header"><span>IsARelationshipDemo.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Animal</span> { <span class="kw">void</span> <span class="mth">eat</span>() { System.out.<span class="mth">println</span>(<span class="str">"Eating"</span>); } }\n<span class="kw">class</span> <span class="cls">Dog</span> <span class="kw">extends</span> <span class="cls">Animal</span> { <span class="kw">void</span> <span class="mth">bark</span>() { System.out.<span class="mth">println</span>(<span class="str">"Barking"</span>); } }\n<span class="kw">public class</span> <span class="cls">IsARelationshipDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        Dog d = <span class="kw">new</span> Dog();\n        d.<span class="mth">eat</span>();\n        d.<span class="mth">bark</span>();\n        System.out.<span class="mth">println</span>(<span class="str">"Dog is Animal? "</span> + (d <span class="kw">instanceof</span> Animal));\n    }\n}</code></pre></div><div class="output-block">Eating<br>Barking<br>Dog is Animal? true</div>`},
  {id:33, title:"HAS-A Relationship", content:`<div class="concept-box"><h3>33) What is 'HAS-A' relationship in java?</h3><p>A <strong>HAS-A relationship</strong> is established through <strong>composition</strong>. If class A contains a reference to class B, then A HAS-A B.</p><p>Examples: Car HAS-A Engine, Employee HAS-A Address</p></div><div class="code-block"><div class="code-header"><span>HasARelationshipDemo.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Engine</span> { <span class="kw">void</span> <span class="mth">start</span>() { System.out.<span class="mth">println</span>(<span class="str">"Engine started"</span>); } }\n<span class="kw">class</span> <span class="cls">Car</span> {\n    Engine engine = <span class="kw">new</span> Engine();\n    <span class="kw">void</span> <span class="mth">drive</span>() { engine.<span class="mth">start</span>(); System.out.<span class="mth">println</span>(<span class="str">"Car driving"</span>); }\n}\n<span class="kw">public class</span> <span class="cls">HasARelationshipDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) { <span class="kw">new</span> Car().<span class="mth">drive</span>(); }\n}</code></pre></div><div class="output-block">Engine started<br>Car driving</div>`},
  {id:34, title:"IS-A vs HAS-A", content:`<div class="concept-box"><h3>34) Difference between 'IS-A' and 'HAS-A' relationship in java?</h3><table><tr><th>Feature</th><th>IS-A</th><th>HAS-A</th></tr><tr><td>Mechanism</td><td>Inheritance</td><td>Composition</td></tr><tr><td>Example</td><td>Dog IS-A Animal</td><td>Car HAS-A Engine</td></tr><tr><td>Coupling</td><td>Tight</td><td>Loose</td></tr></table></div><div class="code-block"><div class="code-header"><span>IsAvsHasADemo.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Engine</span> { <span class="kw">void</span> <span class="mth">start</span>() { System.out.<span class="mth">println</span>(<span class="str">"Engine started"</span>); } }\n<span class="kw">class</span> <span class="cls">Vehicle</span> { <span class="kw">void</span> <span class="mth">move</span>() { System.out.<span class="mth">println</span>(<span class="str">"Moving"</span>); } }\n<span class="kw">class</span> <span class="cls">Car</span> <span class="kw">extends</span> <span class="cls">Vehicle</span> {\n    Engine engine = <span class="kw">new</span> Engine();\n    <span class="kw">void</span> <span class="mth">drive</span>() { engine.<span class="mth">start</span>(); <span class="mth">move</span>(); }\n}</code></pre></div><div class="output-block">Engine started<br>Moving</div>`},
  {id:35, title:"instanceof Operator", content:`<div class="concept-box"><h3>35) Explain about instanceof operator in java?</h3><p>The <code>instanceof</code> operator checks whether an object is an instance of a specific class. Returns <code>true</code> or <code>false</code>.</p><p>Syntax: <code>object instanceof ClassName</code></p></div><div class="code-block"><div class="code-header"><span>InstanceofDemo.java</span></div><pre><code><span class="kw">class</span> <span class="cls">Animal</span> { }\n<span class="kw">class</span> <span class="cls">Dog</span> <span class="kw">extends</span> <span class="cls">Animal</span> { }\n<span class="kw">public class</span> <span class="cls">InstanceofDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        Dog d = <span class="kw">new</span> Dog();\n        System.out.<span class="mth">println</span>(d + <span class="str">" instanceof Dog: "</span> + (d <span class="kw">instanceof</span> Dog));\n        System.out.<span class="mth">println</span>(d + <span class="str">" instanceof Animal: "</span> + (d <span class="kw">instanceof</span> Animal));\n    }\n}</code></pre></div><div class="output-block">Dog@15db9742 instanceof Dog: true<br>Dog@15db9742 instanceof Animal: true</div>`},
  {id:36, title:"null in Java", content:`<div class="concept-box"><h3>36) What does null mean in java?</h3><p>When a reference variable doesn't point to any value, it is assigned null.</p></div><div class="code-block"><div class="code-header"><span>NullDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">NullDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        String s = <span class="kw">null</span>;\n        System.out.<span class="mth">println</span>(<span class="str">"Value: "</span> + s);\n        <span class="kw">try</span> { System.out.<span class="mth">println</span>(s.<span class="mth">length</span>()); }\n        <span class="kw">catch</span> (NullPointerException e) {\n            System.out.<span class="mth">println</span>(<span class="str">"Caught: NullPointerException"</span>);\n        }\n    }\n}</code></pre></div><div class="output-block">Value: null<br>Caught: NullPointerException</div>`},
  {id:37, title:"Multiple Classes in File", content:`<div class="concept-box"><h3>37) Can we have multiple classes in a single file?</h3><p>Yes, but only <strong>one public class</strong>. File name must match the public class name.</p></div><div class="code-block"><div class="code-header"><span>MultipleClasses.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">MultipleClasses</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        Dog d = <span class="kw">new</span> Dog(); d.<span class="mth">bark</span>();\n        Cat c = <span class="kw">new</span> Cat(); c.<span class="mth">meow</span>();\n    }\n}\n<span class="kw">class</span> <span class="cls">Dog</span> { <span class="kw">void</span> <span class="mth">bark</span>() { System.out.<span class="mth">println</span>(<span class="str">"Dog barks"</span>); } }\n<span class="kw">class</span> <span class="cls">Cat</span> { <span class="kw">void</span> <span class="mth">meow</span>() { System.out.<span class="mth">println</span>(<span class="str">"Cat meows"</span>); } }</code></pre></div><div class="output-block">Dog barks<br>Cat meows</div>`},
  {id:38, title:"Top-level Class Access", content:`<div class="concept-box"><h3>38) What all access modifiers are allowed for a top-level class?</h3><p>Only <strong>public</strong> and <strong>default</strong> (no modifier) are allowed. <code>private</code> and <code>protected</code> cannot be used for top-level classes.</p></div><div class="code-block"><div class="code-header"><span>ClassAccessDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ClassAccessDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        DefaultClass dc = <span class="kw">new</span> DefaultClass();\n        dc.<span class="mth">show</span>();\n    }\n}\n<span class="kw">class</span> <span class="cls">DefaultClass</span> {\n    <span class="kw">void</span> <span class="mth">show</span>() { System.out.<span class="mth">println</span>(<span class="str">"Default access class"</span>); }\n}</code></pre></div><div class="output-block">Default access class</div>`},
  {id:39, title:"Packages", content:`<div class="concept-box"><h3>39) What are packages in java?</h3><p>A <strong>package</strong> is a namespace that groups related classes and interfaces. Prevents naming conflicts and provides access control.</p><p>Built-in: <code>java.lang</code>, <code>java.util</code>, <code>java.io</code></p></div><div class="code-block"><div class="code-header"><span>PackageDemo.java</span></div><pre><code><span class="kw">import</span> java.util.ArrayList;\n<span class="kw">public class</span> <span class="cls">PackageDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        ArrayList&lt;String&gt; list = <span class="kw">new</span> ArrayList&lt;&gt;();\n        list.<span class="mth">add</span>(<span class="str">"Java"</span>);\n        list.<span class="mth">add</span>(<span class="str">"Packages"</span>);\n        System.out.<span class="mth">println</span>(list);\n    }\n}</code></pre></div><div class="output-block">[Java, Packages]</div>`},
  {id:40, title:"Multiple Package Statements", content:`<div class="concept-box"><h3>40) Can we have more than one package statement in a source file?</h3><p><strong>No</strong>. Only one package statement allowed, and it must be the first line.</p></div><div class="code-block"><div class="code-header"><span>PackageStatementDemo.java</span></div><pre><code><span class="kw">package</span> com.example.myapp;\n<span class="kw">import</span> java.util.List;\n<span class="kw">public class</span> <span class="cls">PackageStatementDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        System.out.<span class="mth">println</span>(<span class="str">"Single package statement"</span>);\n    }\n}</code></pre></div><div class="output-block">Single package statement</div>`},
  {id:41, title:"Package after Import", content:`<div class="concept-box"><h3>41) Can we define a package statement after an import statement?</h3><p><strong>No</strong>. Correct order: package (optional) -> imports -> class declaration.</p></div><div class="code-block"><div class="code-header"><span>FileOrderDemo.java</span></div><pre><code><span class="kw">package</span> com.example;\n<span class="kw">import</span> java.util.List;\n<span class="kw">public class</span> <span class="cls">FileOrderDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        System.out.<span class="mth">println</span>(<span class="str">"Correct file structure"</span>);\n    }\n}</code></pre></div><div class="output-block">Correct file structure</div>`},
  {id:42, title:"Identifiers", content:`<div class="concept-box"><h3>42) What are identifiers in a java program?</h3><p>Identifiers can be class names, method names, or variable names.</p><p><strong>Rules for defining identifiers in java:</strong></p><ul><li>Identifiers can't start with a number.</li><li>Identifiers must start with a letter, underscore (_) or dollar ($) sign.</li><li>Identifiers are case sensitive.</li><li>There is no limit on the number of characters in an identifier, but it is not recommended to have more characters.</li><li>First letter can be an alphabet, underscore, or dollar sign. From the second letter onward, we can also have numbers.</li><li>We should not use reserved words as identifiers in java.</li></ul></div><div class="code-block"><div class="code-header"><span>IdentifierDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">IdentifierDemo</span> {\n    <span class="kw">int</span> age = <span class="mth">25</span>;\n    String _name = <span class="str">"Bob"</span>;\n    <span class="kw">double</span> $price = <span class="mth">9.99</span>;\n    <span class="kw">int</span> num1 = <span class="mth">10</span>;\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        IdentifierDemo obj = <span class="kw">new</span> IdentifierDemo();\n        System.out.<span class="mth">println</span>(obj.age + obj.$price);\n    }\n}</code></pre></div><div class="output-block">34.99</div>`},
  {id:43, title:"Access Modifiers", content:`<div class="concept-box"><h3>43) What are access modifiers in java?</h3><p>Access control is an important feature of encapsulation. By preventing misuse of a class, methods and members through access modification, we can control access.</p></div><div class="code-block"><div class="code-header"><span>AccessModifierDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">AccessModifierDemo</span> {\n    <span class="kw">public</span> String pub = <span class="str">"Public"</span>;\n    <span class="kw">protected</span> String prot = <span class="str">"Protected"</span>;\n    String def = <span class="str">"Default"</span>;\n    <span class="kw">private</span> String priv = <span class="str">"Private"</span>;\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        AccessModifierDemo obj = <span class="kw">new</span> AccessModifierDemo();\n        System.out.<span class="mth">println</span>(obj.pub);\n        System.out.<span class="mth">println</span>(obj.prot);\n        System.out.<span class="mth">println</span>(obj.def);\n        System.out.<span class="mth">println</span>(obj.priv);\n    }\n}</code></pre></div><div class="output-block">Public<br>Protected<br>Default<br>Private</div>`},
  {id:44, title:"Specifiers vs Modifiers", content:`<div class="concept-box"><h3>44) What is the difference between access specifiers and access modifiers in java?</h3><p>In C++, we have access specifiers: public, private, protected. But there is no such division of access specifiers and access modifiers in java — in java we have access modifiers and non-access modifiers.</p><p><strong>Access Modifiers:</strong></p><p>public, private, protected, default.</p><p><strong>Non-Access Modifiers:</strong></p><p>abstract, static, final.</p></div><div class="code-block"><div class="code-header"><span>ModifierDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ModifierDemo</span> {\n    <span class="kw">public int</span> a = <span class="mth">1</span>;\n    <span class="kw">private int</span> b = <span class="mth">2</span>;\n    <span class="kw">static int</span> count = <span class="mth">0</span>;\n    <span class="kw">final</span> String NAME = <span class="str">"Java"</span>;\n}</code></pre></div><div class="output-block">Access: public, protected, default, private<br>Non-access: static, final, abstract</div>`},
  {id:45, title:"Class Access Modifiers", content:`<div class="concept-box"><h3>45) What access modifiers can be used for a class?</h3><p>We can use only two access modifiers for a class in java: public and default.</p><ul><li>A class with the public modifier can be accessed from anywhere.</li><li>A class with the default modifier can be accessed only within the same package.</li></ul></div><div class="code-block"><div class="code-header"><span>ClassAccessModifier.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ClassAccessModifier</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        DefaultClass dc = <span class="kw">new</span> DefaultClass();\n        dc.<span class="mth">show</span>();\n    }\n}\n<span class="kw">class</span> <span class="cls">DefaultClass</span> {\n    <span class="kw">void</span> <span class="mth">show</span>() { System.out.<span class="mth">println</span>(<span class="str">"Default access"</span>); }\n}</code></pre></div><div class="output-block">Default access</div>`},
  {id:46, title:"Method Access Modifiers", content:`<div class="concept-box"><h3>46) Explain what access modifiers can be used for methods?</h3><p>We can use all access modifiers — public, private, protected and default — for methods.</p><p><strong>public:</strong></p><p>When a method is declared public it can be accessed:</p><ul><li>In the same class</li><li>In the same package — subclass</li><li>In the same package — non-subclass</li><li>In a different package — subclass</li><li>In a different package — non-subclass</li></ul><p><strong>default:</strong></p><p>When a method is declared with default access, it can be accessed:</p><ul><li>In the same class</li><li>In the same package — subclass</li><li>In the same package — non-subclass</li></ul><p>It cannot be accessed in a different package (subclass or non-subclass).</p></div><div class="code-block"><div class="code-header"><span>MethodAccessDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">MethodAccessDemo</span> {\n    <span class="kw">public void</span> <span class="mth">pub</span>() { System.out.<span class="mth">println</span>(<span class="str">"public"</span>); }\n    <span class="kw">protected void</span> <span class="mth">prot</span>() { System.out.<span class="mth">println</span>(<span class="str">"protected"</span>); }\n    <span class="kw">void</span> <span class="mth">def</span>() { System.out.<span class="mth">println</span>(<span class="str">"default"</span>); }\n    <span class="kw">private void</span> <span class="mth">priv</span>() { System.out.<span class="mth">println</span>(<span class="str">"private"</span>); }\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        MethodAccessDemo obj = <span class="kw">new</span> MethodAccessDemo();\n        obj.<span class="mth">pub</span>(); obj.<span class="mth">prot</span>(); obj.<span class="mth">def</span>(); obj.<span class="mth">priv</span>();\n    }\n}</code></pre></div><div class="output-block">public<br>protected<br>default<br>private</div>`},
  {id:47, title:"Variable Access Modifiers", content:`<div class="concept-box"><h3>47) Explain what access modifiers can be used for variables?</h3><p>We can use all access modifiers — public, private, protected and default — for variables.</p><p><strong>public:</strong> When a variable is declared public it can be accessed in the same class, same package (subclass/non-subclass), and different package (subclass/non-subclass).</p><p><strong>default:</strong> When a variable is declared default it can be accessed in the same class and same package (subclass/non-subclass). Cannot access from different package.</p><p><strong>protected:</strong> A protected variable can be accessed within the same class, same package (subclass/non-subclass), and different package (subclass only).</p><p><strong>private:</strong> When a variable is declared private, it can be accessed only within that class.</p></div><div class="code-block"><div class="code-header"><span>VariableAccessDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">VariableAccessDemo</span> {\n    <span class="kw">public</span> String a = <span class="str">"Public"</span>;\n    <span class="kw">protected</span> String b = <span class="str">"Protected"</span>;\n    String c = <span class="str">"Default"</span>;\n    <span class="kw">private</span> String d = <span class="str">"Private"</span>;\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        VariableAccessDemo obj = <span class="kw">new</span> VariableAccessDemo();\n        System.out.<span class="mth">println</span>(obj.a + <span class="str">" "</span> + obj.b + <span class="str">" "</span> + obj.c + <span class="str">" "</span> + obj.d);\n    }\n}</code></pre></div><div class="output-block">Public Protected Default Private</div>`},
  {id:48, title:"Final Modifier", content:`<div class="concept-box"><h3>48) What is the final access modifier in java?</h3><p>The <code>final</code> keyword is a non-access modifier used to restrict the user. It can be applied to variables, methods, and classes.</p><ul><li><strong>final variable:</strong> Value cannot be changed (constant)</li><li><strong>final method:</strong> Cannot be overridden</li><li><strong>final class:</strong> Cannot be extended (no subclasses)</li></ul></div><div class="code-block"><div class="code-header"><span>FinalDemo.java</span></div><pre><code><span class="kw">final class</span> <span class="cls">ImmutableClass</span> {\n    <span class="kw">final</span> String name;\n    ImmutableClass(String name) { <span class="kw">this</span>.name = name; }\n    <span class="kw">final</span> String <span class="mth">getName</span>() { <span class="kw">return</span> name; }\n}\n<span class="kw">public class</span> <span class="cls">FinalDemo</span> {\n    <span class="kw">final int</span> MAX = <span class="mth">100</span>;\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        <span class="kw">final</span> String greeting = <span class="str">"Hello"</span>;\n        FinalDemo obj = <span class="kw">new</span> FinalDemo();\n        System.out.<span class="mth">println</span>(<span class="str">"MAX: "</span> + obj.MAX);\n        System.out.<span class="mth">println</span>(<span class="str">"Greeting: "</span> + greeting);\n        ImmutableClass ic = <span class="kw">new</span> ImmutableClass(<span class="str">"Java"</span>);\n        System.out.<span class="mth">println</span>(<span class="str">"Name: "</span> + ic.<span class="mth">getName</span>());\n    }\n}</code></pre></div><div class="output-block">MAX: 100<br>Greeting: Hello<br>Name: Java</div>`},
  {id:49, title:"Abstract Classes", content:`<div class="concept-box"><h3>49) Explain about abstract classes in java?</h3><p>For example, if we take a Vehicle class, we cannot provide implementation for it because there may be two-wheelers, four-wheelers, etc. At that moment we make the Vehicle class abstract. Any class which extends Vehicle will provide the important features of abstract methods and concrete methods to provide implementation. It's the responsibility of the subclasses to provide the method implementation. Abstract classes cannot be instantiated.</p><p>Though we cannot instantiate abstract classes, we can create object references. An abstract class can contain either 0 or more abstract methods.</p></div><div class="code-block"><div class="code-header"><span>AbstractClassDemo.java</span></div><pre><code><span class="kw">abstract class</span> <span class="cls">Shape</span> {\n    String color;\n    Shape(String color) { <span class="kw">this</span>.color = color; }\n    <span class="kw">abstract double</span> <span class="mth">area</span>();\n    <span class="kw">void</span> <span class="mth">display</span>() { System.out.<span class="mth">println</span>(color + <span class="str">" area = "</span> + <span class="mth">area</span>()); }\n}\n<span class="kw">class</span> <span class="cls">Circle</span> <span class="kw">extends</span> <span class="cls">Shape</span> {\n    <span class="kw">double</span> r;\n    Circle(String c, <span class="kw">double</span> r) { <span class="kw">super</span>(c); <span class="kw">this</span>.r = r; }\n    <span class="kw">double</span> <span class="mth">area</span>() { <span class="kw">return</span> Math.PI * r * r; }\n}\n<span class="kw">public class</span> <span class="cls">AbstractClassDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        Circle c = <span class="kw">new</span> Circle(<span class="str">"Red"</span>, <span class="mth">5</span>);\n        c.<span class="mth">display</span>();\n    }\n}</code></pre></div><div class="output-block">Red area = 78.53981633974483</div>`},
  {id:50, title:"Constructor in Abstract Class", content:`<div class="concept-box"><h3>50) Can we create a constructor in an abstract class?</h3><p>We can create a constructor in an abstract class; it doesn't give any compilation error. But since we cannot instantiate the class, there is no direct use in creating a constructor for an abstract class — it is used when a subclass constructor calls super().</p></div><div class="code-block"><div class="code-header"><span>AbstractConstructorDemo.java</span></div><pre><code><span class="kw">abstract class</span> <span class="cls">Animal</span> {\n    String name;\n    Animal(String name) {\n        <span class="kw">this</span>.name = name;\n        System.out.<span class="mth">println</span>(<span class="str">"Animal constructor: "</span> + name);\n    }\n    <span class="kw">abstract void</span> <span class="mth">sound</span>();\n}\n<span class="kw">class</span> <span class="cls">Dog</span> <span class="kw">extends</span> <span class="cls">Animal</span> {\n    Dog(String name) {\n        <span class="kw">super</span>(name);\n        System.out.<span class="mth">println</span>(<span class="str">"Dog constructor"</span>);\n    }\n    <span class="kw">void</span> <span class="mth">sound</span>() { System.out.<span class="mth">println</span>(<span class="str">"Dog barks"</span>); }\n}\n<span class="kw">public class</span> <span class="cls">AbstractConstructorDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        Dog d = <span class="kw">new</span> Dog(<span class="str">"Buddy"</span>);\n        d.<span class="mth">sound</span>();\n    }\n}</code></pre></div><div class="output-block">Animal constructor: Buddy<br>Dog constructor<br>Dog barks</div>`},
  {id:51, title:"Abstract Methods", content:`<div class="concept-box"><h3>51) What are abstract methods in java?</h3><p>An abstract method is a method which doesn't have any body. Abstract methods are declared with the keyword abstract and a semicolon in place of the method body.</p><p><strong>Signature:</strong></p><p>public abstract void &lt;methodName&gt;();</p><p>Ex: public abstract void getDetails();</p><p>It is the responsibility of the subclass to provide implementation for the abstract method defined in the abstract class.</p></div><div class="code-block"><div class="code-header"><span>AbstractMethodDemo.java</span></div><pre><code><span class="kw">abstract class</span> <span class="cls">Vehicle</span> {\n    <span class="kw">abstract void</span> <span class="mth">start</span>();\n    <span class="kw">void</span> <span class="mth">stop</span>() { System.out.<span class="mth">println</span>(<span class="str">"Vehicle stopped"</span>); }\n}\n<span class="kw">class</span> <span class="cls">Car</span> <span class="kw">extends</span> <span class="cls">Vehicle</span> {\n    <span class="kw">void</span> <span class="mth">start</span>() { System.out.<span class="mth">println</span>(<span class="str">"Car starts with key"</span>); }\n}\n<span class="kw">class</span> <span class="cls">Bike</span> <span class="kw">extends</span> <span class="cls">Vehicle</span> {\n    <span class="kw">void</span> <span class="mth">start</span>() { System.out.<span class="mth">println</span>(<span class="str">"Bike starts with kick"</span>); }\n}\n<span class="kw">public class</span> <span class="cls">AbstractMethodDemo</span> {\n    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {\n        Vehicle v1 = <span class="kw">new</span> Car();\n        Vehicle v2 = <span class="kw">new</span> Bike();\n        v1.<span class="mth">start</span>();\n        v2.<span class="mth">start</span>();\n        v1.<span class="mth">stop</span>();\n    }\n}</code></pre></div><div class="output-block">Car starts with key<br>Bike starts with kick<br>Vehicle stopped</div>`}
,
{id:52, title:"Array Programs", content:`<div class="concept-box"><h3>52) What is an array in java?</h3><p>An <strong>array</strong> is a container object that holds a fixed number of values of the same type. It is created with the <code>new</code> keyword and indexed from 0.</p><p><strong>Key points:</strong></p><ul><li>Array size is fixed at creation time</li><li>Elements are accessed by index (0-based)</li><li>Array of objects vs array of primitives</li><li>Array length is accessed with <code>arr.length</code></li></ul></div><div class="code-block"><div class="code-header"><span>ArrayBasics.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ArrayBasics</span> {</code></pre></div><div class="output-block">Fixed-size, same-type, zero-indexed container</div>`},
{id:53, title:"1D vs 2D Array", content:`<div class="concept-box"><h3>53) Difference between one-dimensional and two-dimensional array in java?</h3><p>A <strong>1D array</strong> stores a single list of values (like a row). A <strong>2D array</strong> is an array of arrays — it stores a table of rows and columns.</p><p><strong>Key points:</strong></p><ul><li>1D: <code>int[] arr</code> — single index</li><li>2D: <code>int[][] arr</code> — two indices</li><li>2D arrays can be jagged (different row lengths)</li></ul></div><div class="code-block"><div class="code-header"><span>Array2DDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">Array2DDemo</span> {</code></pre></div><div class="output-block">1D = row; 2D = table of rows and columns</div>`},
{id:54, title:"Jagged Array", content:`<div class="concept-box"><h3>54) What is a jagged array in java?</h3><p>A <strong>jagged array</strong> is a multidimensional array whose rows can have <strong>different numbers of columns</strong>. Each row is allocated its own length.</p><p><strong>Key points:</strong></p><ul><li>Unlike a rectangular matrix, rows may differ in size</li><li>Declared as <code>int[][] jagged = new int[3][];</code></li><li>Each row is initialized separately</li></ul></div><div class="code-block"><div class="code-header"><span>JaggedDemo.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">JaggedDemo</span> {</code></pre></div><div class="output-block">Rows of different lengths</div>`},
{id:55, title:"Array Memory", content:`<div class="concept-box"><h3>55) How are arrays stored in memory in java?</h3><p>An array is an <strong>object</strong> in Java, so it lives on the <strong>heap</strong>. The array variable holds a <strong>reference</strong> to the contiguous block of memory; the metadata includes the array type and length.</p><p><strong>Key points:</strong></p><ul><li>Array object is stored on the heap</li><li>The reference is stored on the stack (or as an object field)</li><li>Elements are stored contiguously</li><li><code>arr.length</code> reads the length from the object header</li></ul></div><div class="code-block"><div class="code-header"><span>ArrayMemory.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ArrayMemory</span> {</code></pre></div><div class="output-block">Heap object with contiguous elements</div>`},
{id:56, title:"Array vs ArrayList", content:`<div class="concept-box"><h3>56) Difference between array and ArrayList in java?</h3><table><tr><th>Feature</th><th>Array</th><th>ArrayList</th></tr><tr><td>Size</td><td>Fixed</td><td>Dynamic</td></tr><tr><td>Type</td><td>Can hold primitives</td><td>Only objects</td></tr><tr><td>Performance</td><td>Faster</td><td>Slightly slower</td></tr><tr><td>Length</td><td><code>arr.length</code></td><td><code>list.size()</code></td></tr></table></div><div class="code-block"><div class="code-header"><span>ArrayVsList.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">ArrayVsList</span> {</code></pre></div><div class="output-block">Array = fixed/primitives; ArrayList = dynamic/objects</div>`},
{id:57, title:"Bubble Sort", content:`<div class="concept-box"><h3>57) Explain bubble sort algorithm in java?</h3><p><strong>Bubble sort</strong> repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass is repeated until the list is sorted.</p><p><strong>Key points:</strong></p><ul><li>Time complexity: O(n²) worst and average</li><li>Stable (equal elements keep their order)</li><li>In-place (O(1) extra space)</li></ul></div><div class="code-block"><div class="code-header"><span>BubbleSort.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">BubbleSort</span> {</code></pre></div><div class="output-block">O(n²) in-place stable sort</div>`},
{id:58, title:"Kadane Algorithm", content:`<div class="concept-box"><h3>58) What is Kadane's algorithm in java?</h3><p>Kadane's algorithm finds the <strong>maximum sum of a contiguous subarray</strong> in a single pass (O(n)). It maintains a running sum and resets it to 0 when it becomes negative.</p><p><strong>Key points:</strong></p><ul><li>Time complexity: O(n)</li><li>Space complexity: O(1)</li><li>Handles negative numbers with a small modification</li></ul></div><div class="code-block"><div class="code-header"><span>Kadane.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">Kadane</span> {</code></pre></div><div class="output-block">O(n) max contiguous subarray sum</div>`},
{id:59, title:"Two Pointers", content:`<div class="concept-box"><h3>59) What is the two-pointer technique in array problems?</h3><p>The <strong>two-pointer technique</strong> uses two indices that move through the array from opposite ends (or in parallel) to solve problems in linear time without extra space.</p><p><strong>Key points:</strong></p><ul><li>Commonly used for sorted arrays (pair sum, container with most water)</li><li>Opposite directions: one from start, one from end</li><li>Same direction: fast and slow pointers (remove duplicates)</li></ul></div><div class="code-block"><div class="code-header"><span>TwoPointers.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">TwoPointers</span> {</code></pre></div><div class="output-block">Linear scan using two indices</div>`},
{id:60, title:"Binary Search", content:`<div class="concept-box"><h3>60) What is binary search in java?</h3><p><strong>Binary search</strong> finds the position of a target value in a <strong>sorted</strong> array by repeatedly dividing the search interval in half.</p><p><strong>Key points:</strong></p><ul><li>Time complexity: O(log n)</li><li>Requires the array to be sorted</li><li>Compares target with the middle element</li></ul></div><div class="code-block"><div class="code-header"><span>BinarySearch.java</span></div><pre><code><span class="kw">public class</span> <span class="cls">BinarySearch</span> {</code></pre></div><div class="output-block">O(log n) search on sorted array</div>`},
{id:61, title:"WAP to find Kth smallest element in an unsorted array", content:`<div class="concept-box"><h3>61) WAP to find Kth smallest element in an unsorted array.</h3><p><p><strong>How it works:</strong></p><ul><li>We sort the array in ascending order.</li><li>The Kth smallest element is at index (K-1) because sorting places</li><li>Example: arr[] = {7,10,4,3,20,15}, K=3</li></ul></p><p><strong>Example:</strong> arr[] = {7,10,4,3,20,15}, K=3</p></div><div class="code-block"><div class="code-header"><span>Q36.java</span></div><pre><code>class Q36
{
    // Q36: WAP to find Kth smallest element in an unsorted array.
    // Explanation:
    //  - We sort the array in ascending order.
    //  - The Kth smallest element is at index (K-1) because sorting places
    //    the smallest at index 0, 2nd smallest at index 1, and so on.
    //  - Example: arr[] = {7,10,4,3,20,15}, K=3
    //    Sorted -&gt; {3,4,7,10,15,20}, so 3rd smallest = arr[2] = 7.
    //    For K=4 -&gt; arr[3] = 10.
    static int kthSmallest(int arr[], int k)
    {
        // Bubble sort the array in place
        for(int i = 0; i &lt; arr.length - 1; i++)
        {
            for(int j = i + 1; j &lt; arr.length; j++)
            {
                if(arr[i] &gt; arr[j])
                {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr[k - 1];
    }
    public static void main(String args[])
    {
        int arr[] = {7, 10, 4, 3, 20, 15};
        System.out.println(&quot;K=3 -&gt; &quot; + kthSmallest(arr, 3));  // 7
        int arr2[] = {7, 10, 4, 3, 20, 15};
        System.out.println(&quot;K=4 -&gt; &quot; + kthSmallest(arr2, 4)); // 10
    }
}</code></pre></div>`},
{id:62, title:"Sort the array and calculate cumulative frequency of each element", content:`<div class="concept-box"><h3>62) Sort the array and calculate cumulative frequency of each element.</h3><p><p><strong>How it works:</strong></p><ul><li>First sort the array so equal elements group together.</li><li>Walk through the sorted array, count occurrences of each distinct value.</li><li>Keep a running total (cumulative frequency) and print value->cumulative.</li><li>Example: {1,3,2,1,2,4} sorted -> {1,1,2,2,3,4}</li></ul></p><p><strong>Example:</strong> {1,3,2,1,2,4} sorted -> {1,1,2,2,3,4}</p></div><div class="code-block"><div class="code-header"><span>Q37.java</span></div><pre><code>class Q37
{
    // Q37: Sort the array and calculate cumulative frequency of each element.
    // Explanation:
    //  - First sort the array so equal elements group together.
    //  - Walk through the sorted array, count occurrences of each distinct value.
    //  - Keep a running total (cumulative frequency) and print value-&gt;cumulative.
    //  - Example: {1,3,2,1,2,4} sorted -&gt; {1,1,2,2,3,4}
    //    1 appears 2 times  -&gt; cumulative = 2    =&gt; 1-&gt;2
    //    2 appears 2 times  -&gt; cumulative = 4    =&gt; 2-&gt;4
    //    3 appears 1 time   -&gt; cumulative = 5    =&gt; 3-&gt;5
    //    4 appears 1 time   -&gt; cumulative = 6    =&gt; 4-&gt;6
    static void cumulativeFrequency(int arr[])
    {
        // Sort in place (bubble sort)
        for(int i = 0; i &lt; arr.length - 1; i++)
        {
            for(int j = i + 1; j &lt; arr.length; j++)
            {
                if(arr[i] &gt; arr[j])
                {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        int cumulative = 0;
        int i = 0;
        while(i &lt; arr.length)
        {
            int value = arr[i];
            int count = 0;
            // Count how many times 'value' repeats consecutively
            while(i &lt; arr.length &amp;&amp; arr[i] == value)
            {
                count++;
                i++;
            }
            cumulative += count;
            System.out.println(value + &quot;-&gt;&quot; + cumulative);
        }
    }
    public static void main(String args[])
    {
        int arr1[] = {1, 3, 2, 1, 2, 4};
        System.out.println(&quot;Input: {1,3,2,1,2,4}&quot;);
        cumulativeFrequency(arr1);
        System.out.println();

        int arr2[] = {1, 2, 1, 2, 1, 2};
        System.out.println(&quot;Input: {1,2,1,2,1,2}&quot;);
        cumulativeFrequency(arr2);
    }
}</code></pre></div>`},
{id:63, title:"Find the majority element (appears more than n/2 times)", content:`<div class="concept-box"><h3>63) Find the majority element (appears more than n/2 times).</h3><p><p><strong>How it works:</strong></p><ul><li>Boyer-Moore Majority Vote algorithm: keep a candidate and a counter.</li><li>For each element: if counter == 0 pick it as candidate; else if it</li><li>After one pass the candidate is the majority if one exists.</li><li>We then verify it by counting occurrences (must be > n/2).</li><li>Example: {1,1,2,3,1,5,3,1,1,1} n=10, majority threshold >5.</li></ul></p><p><strong>Example:</strong> {1,1,2,3,1,5,3,1,1,1} n=10, majority threshold >5.</p></div><div class="code-block"><div class="code-header"><span>Q38.java</span></div><pre><code>class Q38
{
    // Q38: Find the majority element (appears more than n/2 times).
    // Explanation:
    //  - Boyer-Moore Majority Vote algorithm: keep a candidate and a counter.
    //  - For each element: if counter == 0 pick it as candidate; else if it
    //    matches candidate increment counter, else decrement.
    //  - After one pass the candidate is the majority if one exists.
    //  - We then verify it by counting occurrences (must be &gt; n/2).
    //  - Example: {1,1,2,3,1,5,3,1,1,1} n=10, majority threshold &gt;5.
    //    Candidate ends as 1, count = 7 &gt; 5 -&gt; majority = 1.
    static int majorityElement(int arr[])
    {
        int candidate = 0;
        int count = 0;

        for(int i = 0; i &lt; arr.length; i++)
        {
            if(count == 0)
            {
                candidate = arr[i];
                count = 1;
            }
            else if(arr[i] == candidate)
            {
                count++;
            }
            else
            {
                count--;
            }
        }

        // Verify
        int freq = 0;
        for(int i = 0; i &lt; arr.length; i++)
        {
            if(arr[i] == candidate)
                freq++;
        }
        if(freq &gt; arr.length / 2)
            return candidate;
        return -1; // no majority
    }
    public static void main(String args[])
    {
        int arr[] = {1, 1, 2, 3, 1, 5, 3, 1, 1, 1};
        System.out.println(&quot;Majority element = &quot; + majorityElement(arr)); // 1
    }
}</code></pre></div>`},
{id:64, title:"Length of the longest consecutive elements sequence (unsorted)", content:`<div class="concept-box"><h3>64) Length of the longest consecutive elements sequence (unsorted).</h3><p><p><strong>How it works:</strong></p><ul><li>Put all numbers into a HashSet for O(1) lookups.</li><li>For each element that is the START of a sequence (i.e. num-1 is not</li><li>Track the maximum length found.</li><li>Example: {49,1,3,200,2,4,70,5} -> longest run is {1,2,3,4,5} -> 5.</li></ul></p><p><strong>Example:</strong> {49,1,3,200,2,4,70,5} -> longest run is {1,2,3,4,5} -> 5.</p></div><div class="code-block"><div class="code-header"><span>Q39.java</span></div><pre><code>import java.util.HashSet;

class Q39
{
    // Q39: Length of the longest consecutive elements sequence (unsorted).
    // Explanation:
    //  - Put all numbers into a HashSet for O(1) lookups.
    //  - For each element that is the START of a sequence (i.e. num-1 is not
    //    in the set), count how long the run of num, num+1, num+2, ... is.
    //  - Track the maximum length found.
    //  - Example: {49,1,3,200,2,4,70,5} -&gt; longest run is {1,2,3,4,5} -&gt; 5.
    static int longestConsecutive(int arr[])
    {
        HashSet&lt;Integer&gt; set = new HashSet&lt;&gt;();
        for(int i = 0; i &lt; arr.length; i++)
            set.add(arr[i]);

        int maxLen = 0;
        for(int i = 0; i &lt; arr.length; i++)
        {
            // Only start counting if arr[i]-1 is absent (start of a sequence)
            if(!set.contains(arr[i] - 1))
            {
                int num = arr[i];
                int len = 1;
                while(set.contains(num + 1))
                {
                    num++;
                    len++;
                }
                if(len &gt; maxLen)
                    maxLen = len;
            }
        }
        return maxLen;
    }
    public static void main(String args[])
    {
        int arr[] = {49, 1, 3, 200, 2, 4, 70, 5};
        System.out.println(&quot;Longest consecutive sequence length = &quot; + longestConsecutive(arr)); // 5
    }
}</code></pre></div>`},
{id:65, title:"Max product formed by multiplying three numbers (unsorted, negatives allowed)", content:`<div class="concept-box"><h3>65) Max product formed by multiplying three numbers (unsorted, negatives allowed).</h3><p><p><strong>How it works:</strong></p><ul><li>The maximum product of three numbers is either:</li><li>We find the three largest and two smallest in one linear pass (no sort).</li><li>Example: {2,5,-2,6,-3,8,0,-7,-9,4}</li></ul></p><p><strong>Example:</strong> {2,5,-2,6,-3,8,0,-7,-9,4}</p></div><div class="code-block"><div class="code-header"><span>Q40.java</span></div><pre><code>class Q40
{
    // Q40: Max product formed by multiplying three numbers (unsorted, negatives allowed).
    // Explanation:
    //  - The maximum product of three numbers is either:
    //      (a) product of the three largest numbers, OR
    //      (b) product of the two smallest (most negative) numbers and the largest.
    //    Case (b) matters because two negatives multiply to a positive that may
    //    exceed the product of the next largest positive numbers.
    //  - We find the three largest and two smallest in one linear pass (no sort).
    //  - Example: {2,5,-2,6,-3,8,0,-7,-9,4}
    //    three largest: 8,6,5 -&gt; product = 240
    //    two smallest: -9,-7 and largest 8 -&gt; product = 504  &lt;-- max
    static long maxProductOfThree(int arr[])
    {
        // Initialise extremes
        int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE, max3 = Integer.MIN_VALUE;
        int min1 = Integer.MAX_VALUE, min2 = Integer.MAX_VALUE;

        for(int i = 0; i &lt; arr.length; i++)
        {
            int x = arr[i];

            // Update three largest
            if(x &gt; max1)
            {
                max3 = max2;
                max2 = max1;
                max1 = x;
            }
            else if(x &gt; max2)
            {
                max3 = max2;
                max2 = x;
            }
            else if(x &gt; max3)
            {
                max3 = x;
            }

            // Update two smallest
            if(x &lt; min1)
            {
                min2 = min1;
                min1 = x;
            }
            else if(x &lt; min2)
            {
                min2 = x;
            }
        }

        long candidate1 = (long) max1 * max2 * max3;
        long candidate2 = (long) min1 * min2 * max1;
        return (candidate1 &gt; candidate2) ? candidate1 : candidate2;
    }
    public static void main(String args[])
    {
        int arr[] = {2, 5, -2, 6, -3, 8, 0, -7, -9, 4};
        System.out.println(&quot;Max product of three = &quot; + maxProductOfThree(arr)); // 504
    }
}</code></pre></div>`},
{id:66, title:"Find numbers that are NOT repeated; all others appear twice", content:`<div class="concept-box"><h3>66) Find numbers that are NOT repeated; all others appear twice.</h3><p><p><strong>How it works:</strong></p><ul><li>Count frequency of every element.</li><li>Print only those whose frequency is exactly 1.</li><li>Example: {23,34,56,21,21,56,78,23,34} -> only 78 appears once.</li></ul></p><p><strong>Example:</strong> {23,34,56,21,21,56,78,23,34} -> only 78 appears once.</p></div><div class="code-block"><div class="code-header"><span>Q41.java</span></div><pre><code>import java.util.LinkedHashSet;
import java.util.Set;

class Q41
{
    // Q41: Find numbers that are NOT repeated; all others appear twice.
    // Explanation:
    //  - Count frequency of every element.
    //  - Print only those whose frequency is exactly 1.
    //  - Example: {23,34,56,21,21,56,78,23,34} -&gt; only 78 appears once.
    static void printNonRepeated(int arr[])
    {
        // Frequency map using an auxiliary array of counts (values are small here)
        int max = 0;
        for(int i = 0; i &lt; arr.length; i++)
            if(arr[i] &gt; max) max = arr[i];

        int freq[] = new int[max + 1];
        for(int i = 0; i &lt; arr.length; i++)
            freq[arr[i]]++;

        System.out.print(&quot;Non-repeated elements: &quot;);
        for(int i = 0; i &lt; arr.length; i++)
        {
            if(freq[arr[i]] == 1)
            {
                System.out.print(arr[i] + &quot; &quot;);
                freq[arr[i]] = 0; // avoid printing twice
            }
        }
        System.out.println();
    }
    public static void main(String args[])
    {
        int arr[] = {23, 34, 56, 21, 21, 56, 78, 23, 34};
        printNonRepeated(arr); // 78
    }
}</code></pre></div>`},
{id:67, title:"Sort array1 using array2 as the sorting key", content:`<div class="concept-box"><h3>67) Sort array1 using array2 as the sorting key.</h3><p><p><strong>How it works:</strong></p><ul><li>array2 holds a small set of integer keys (e.g. 0,1,2). We treat each</li><li>Then we output buckets in ascending key order.</li><li>Example: array1={"a",...,"i"}, array2={0,1,1,0,1,2,2,0,1}</li></ul></p><p><strong>Example:</strong> array1={"a",...,"i"}, array2={0,1,1,0,1,2,2,0,1}</p></div><div class="code-block"><div class="code-header"><span>Q42.java</span></div><pre><code>class Q42
{
    // Q42: Sort array1 using array2 as the sorting key.
    // Explanation:
    //  - array2 holds a small set of integer keys (e.g. 0,1,2). We treat each
    //    element of array1 as belonging to a bucket given by the matching
    //    array2 value, preserving the original order inside each bucket.
    //  - Then we output buckets in ascending key order.
    //  - Example: array1={&quot;a&quot;,...,&quot;i&quot;}, array2={0,1,1,0,1,2,2,0,1}
    //    bucket0: a,d,h ; bucket1: b,c,e,i ; bucket2: f,g
    //    Output: {a,d,h,b,c,e,i,f,g}
    static String[] sortByKey(String array1[], int array2[])
    {
        // Find max key to size the buckets (linked lists preserve insertion order)
        int maxKey = 0;
        for(int i = 0; i &lt; array2.length; i++)
            if(array2[i] &gt; maxKey) maxKey = array2[i];

        // buckets[k] holds a list of strings whose key == k
        java.util.ArrayList&lt;String&gt; buckets[] = new java.util.ArrayList[maxKey + 1];
        for(int k = 0; k &lt;= maxKey; k++)
            buckets[k] = new java.util.ArrayList&lt;&gt;();

        for(int i = 0; i &lt; array1.length; i++)
            buckets[array2[i]].add(array1[i]);

        String result[] = new String[array1.length];
        int idx = 0;
        for(int k = 0; k &lt;= maxKey; k++)
        {
            for(int j = 0; j &lt; buckets[k].size(); j++)
            {
                result[idx] = buckets[k].get(j);
                idx++;
            }
        }
        return result;
    }
    public static void main(String args[])
    {
        String array1[] = {&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;,&quot;e&quot;,&quot;f&quot;,&quot;g&quot;,&quot;h&quot;,&quot;i&quot;};
        int array2[] = {0,1,1,0,1,2,2,0,1};
        String out1[] = sortByKey(array1, array2);
        System.out.print(&quot;Output: {&quot;);
        for(int i = 0; i &lt; out1.length; i++)
            System.out.print(&quot;\\&quot;&quot; + out1[i] + &quot;\\&quot;&quot; + (i &lt; out1.length-1 ? &quot;,&quot; : &quot;&quot;));
        System.out.println(&quot;}&quot;);

        String array1b[] = {&quot;g&quot;,&quot;e&quot;,&quot;e&quot;,&quot;k&quot;,&quot;s&quot;,&quot;f&quot;,&quot;o&quot;,&quot;r&quot;,&quot;g&quot;,&quot;e&quot;,&quot;e&quot;,&quot;k&quot;,&quot;s&quot;};
        int array2b[] = {0,1,1,0,1,2,2,0,1};
        String out2[] = sortByKey(array1b, array2b);
        System.out.print(&quot;Output: {&quot;);
        for(int i = 0; i &lt; out2.length; i++)
            System.out.print(&quot;\\&quot;&quot; + out2[i] + &quot;\\&quot;&quot; + (i &lt; out2.length-1 ? &quot;,&quot; : &quot;&quot;));
        System.out.println(&quot;}&quot;);
    }
}</code></pre></div>`},
{id:68, title:"Find the missing number in an array containing 1..100 with one missing", content:`<div class="concept-box"><h3>68) Find the missing number in an array containing 1..100 with one missing.</h3><p><p><strong>How it works:</strong></p><ul><li>Sum of 1..100 = n*(n+1)/2 where n=100.</li><li>Sum the actual array elements.</li><li>missing = expectedSum - actualSum.</li><li>Works in O(n) time and O(1) extra space.</li></ul></p></div><div class="code-block"><div class="code-header"><span>Q43.java</span></div><pre><code>class Q43
{
    // Q43: Find the missing number in an array containing 1..100 with one missing.
    // Explanation:
    //  - Sum of 1..100 = n*(n+1)/2 where n=100.
    //  - Sum the actual array elements.
    //  - missing = expectedSum - actualSum.
    //  - Works in O(n) time and O(1) extra space.
    static int findMissing(int arr[])
    {
        int n = 100;
        int expectedSum = n * (n + 1) / 2;

        int actualSum = 0;
        for(int i = 0; i &lt; arr.length; i++)
            actualSum += arr[i];

        return expectedSum - actualSum;
    }
    public static void main(String args[])
    {
        // Build an array 1..100 skipping 42
        int arr[] = new int[99];
        int idx = 0;
        for(int i = 1; i &lt;= 100; i++)
        {
            if(i == 42) continue;
            arr[idx] = i;
            idx++;
        }
        System.out.println(&quot;Missing number = &quot; + findMissing(arr)); // 42
    }
}</code></pre></div>`},
{id:69, title:"Demonstrate jagged arrays (arrays of arrays with different lengths)", content:`<div class="concept-box"><h3>69) Demonstrate jagged arrays (arrays of arrays with different lengths).</h3><p><p><strong>How it works:</strong></p><ul><li>A jagged array is a multidimensional array whose rows can have</li><li>Each row is allocated its own length, unlike a rectangular matrix.</li></ul></p></div><div class="code-block"><div class="code-header"><span>Q44.java</span></div><pre><code>class Q44
{
    // Q44: Demonstrate jagged arrays (arrays of arrays with different lengths).
    // Explanation:
    //  - A jagged array is a multidimensional array whose rows can have
    //    different numbers of columns.
    //  - Each row is allocated its own length, unlike a rectangular matrix.
    static void printJagged(int jagged[][])
    {
        for(int i = 0; i &lt; jagged.length; i++)
        {
            for(int j = 0; j &lt; jagged[i].length; j++)
            {
                System.out.print(jagged[i][j] + &quot; &quot;);
            }
            System.out.println();
        }
    }
    public static void main(String args[])
    {
        // Row 0 has 2 elements, row 1 has 4, row 2 has 3 -&gt; jagged shape
        int jagged[][] = {
            {1, 2},
            {3, 4, 5, 6},
            {7, 8, 9}
        };
        System.out.println(&quot;Jagged array (rows of different lengths):&quot;);
        printJagged(jagged);
    }
}</code></pre></div>`},
{id:70, title:"Find all pairs in an integer array whose sum equals a given number", content:`<div class="concept-box"><h3>70) Find all pairs in an integer array whose sum equals a given number.</h3><p><p><strong>How it works:</strong></p><ul><li>Use a HashSet of seen values.</li><li>For each element x, if (target - x) is already in the set, a pair</li><li>Runs in O(n) time.</li></ul></p></div><div class="code-block"><div class="code-header"><span>Q45.java</span></div><pre><code>import java.util.HashSet;

class Q45
{
    // Q45: Find all pairs in an integer array whose sum equals a given number.
    // Explanation:
    //  - Use a HashSet of seen values.
    //  - For each element x, if (target - x) is already in the set, a pair
    //    (target-x, x) exists. Add x to the set.
    //  - Runs in O(n) time.
    static void printPairsWithSum(int arr[], int sum)
    {
        HashSet&lt;Integer&gt; seen = new HashSet&lt;&gt;();
        for(int i = 0; i &lt; arr.length; i++)
        {
            int complement = sum - arr[i];
            if(seen.contains(complement))
            {
                System.out.println(&quot;Pair: (&quot; + complement + &quot;, &quot; + arr[i] + &quot;)&quot;);
            }
            seen.add(arr[i]);
        }
    }
    public static void main(String args[])
    {
        int arr[] = {1, 4, 45, 6, 10, 8};
        int sum = 16;
        System.out.println(&quot;Pairs with sum &quot; + sum + &quot;:&quot;);
        printPairsWithSum(arr, sum); // (6,10), (8,8) if duplicates allowed
    }
}</code></pre></div>`},
{id:71, title:"Remove duplicates from an array in place and return new length", content:`<div class="concept-box"><h3>71) Remove duplicates from an array in place and return new length.</h3><p><p><strong>How it works:</strong></p><ul><li>Two-pointer approach: 'j' tracks the position of the next unique element.</li><li>For each element, if it differs from the last kept element, copy it to arr[j].</li><li>After the pass, arr[0..j-1] holds unique elements and j is the new length.</li><li>Works on a sorted array (duplicates are adjacent).</li></ul></p></div><div class="code-block"><div class="code-header"><span>Q46.java</span></div><pre><code>class Q46
{
    // Q46: Remove duplicates from an array in place and return new length.
    // Explanation:
    //  - Two-pointer approach: 'j' tracks the position of the next unique element.
    //  - For each element, if it differs from the last kept element, copy it to arr[j].
    //  - After the pass, arr[0..j-1] holds unique elements and j is the new length.
    //  - Works on a sorted array (duplicates are adjacent).
    static int removeDuplicates(int arr[])
    {
        if(arr.length == 0) return 0;

        int j = 1; // index of next unique element
        for(int i = 1; i &lt; arr.length; i++)
        {
            if(arr[i] != arr[j - 1])
            {
                arr[j] = arr[i];
                j++;
            }
        }
        return j;
    }
    public static void main(String args[])
    {
        int arr[] = {1, 1, 2, 3, 3, 4, 5, 5, 5, 6};
        int newLen = removeDuplicates(arr);
        System.out.print(&quot;Unique array: &quot;);
        for(int i = 0; i &lt; newLen; i++)
            System.out.print(arr[i] + &quot; &quot;);
        System.out.println(&quot;\\nNew length = &quot; + newLen);
    }
}</code></pre></div>`},
{id:72, title:"Every element repeats twice except one — find that element", content:`<div class="concept-box"><h3>72) Every element repeats twice except one — find that element.</h3><p><p><strong>How it works:</strong></p><ul><li>XOR all elements. Bits that appear twice cancel out (x ^ x == 0),</li><li>O(n) time, O(1) space.</li><li>Example: {2,3,4,2,3} -> 2^3^4^2^3 = 4.</li></ul></p><p><strong>Example:</strong> {2,3,4,2,3} -> 2^3^4^2^3 = 4.</p></div><div class="code-block"><div class="code-header"><span>Q47.java</span></div><pre><code>class Q47
{
    // Q47: Every element repeats twice except one — find that element.
    // Explanation:
    //  - XOR all elements. Bits that appear twice cancel out (x ^ x == 0),
    //    leaving only the element that appears once (x ^ 0 == x).
    //  - O(n) time, O(1) space.
    //  - Example: {2,3,4,2,3} -&gt; 2^3^4^2^3 = 4.
    static int findSingle(int arr[])
    {
        int result = 0;
        for(int i = 0; i &lt; arr.length; i++)
            result ^= arr[i];
        return result;
    }
    public static void main(String args[])
    {
        int arr[] = {2, 3, 4, 2, 3};
        System.out.println(&quot;The non-repeating element = &quot; + findSingle(arr)); // 4
    }
}</code></pre></div>`},
{id:73, title:"Print all common elements in three sorted arrays", content:`<div class="concept-box"><h3>73) Print all common elements in three sorted arrays.</h3><p><p><strong>How it works:</strong></p><ul><li>Three pointers walk through the three arrays simultaneously.</li><li>If all three values match, print once and advance all.</li><li>Otherwise advance the pointer whose value is smallest.</li><li>Example: {1,5,10,20,40,80}, {6,7,20,80,100}, {3,4,15,20,30,70,80,120}</li></ul></p><p><strong>Example:</strong> {1,5,10,20,40,80}, {6,7,20,80,100}, {3,4,15,20,30,70,80,120}</p></div><div class="code-block"><div class="code-header"><span>Q48.java</span></div><pre><code>class Q48
{
    // Q48: Print all common elements in three sorted arrays.
    // Explanation:
    //  - Three pointers walk through the three arrays simultaneously.
    //  - If all three values match, print once and advance all.
    //  - Otherwise advance the pointer whose value is smallest.
    //  - Example: {1,5,10,20,40,80}, {6,7,20,80,100}, {3,4,15,20,30,70,80,120}
    //    Common: 20 and 80.
    static void printCommon(int a[], int b[], int c[])
    {
        int i = 0, j = 0, k = 0;
        while(i &lt; a.length &amp;&amp; j &lt; b.length &amp;&amp; k &lt; c.length)
        {
            if(a[i] == b[j] &amp;&amp; b[j] == c[k])
            {
                System.out.println(&quot;Common: &quot; + a[i]);
                i++; j++; k++;
            }
            else if(a[i] &lt; b[j])
                i++;
            else if(b[j] &lt; c[k])
                j++;
            else
                k++;
        }
    }
    public static void main(String args[])
    {
        int input1[] = {1, 5, 10, 20, 40, 80};
        int input2[] = {6, 7, 20, 80, 100};
        int input3[] = {3, 4, 15, 20, 30, 70, 80, 120};
        System.out.println(&quot;Common elements in three arrays:&quot;);
        printCommon(input1, input2, input3); // 20, 80
    }
}</code></pre></div>`},
{id:74, title:"First repeating element — the element that occurs more than once and whose index of first ", content:`<div class="concept-box"><h3>74) First repeating element — the element that occurs more than once and</h3><p><p><strong>How it works:</strong></p><ul><li>Record the first index where each value appears.</li><li>Then scan again: any value that appears a second time is a candidate.</li><li>Example: {10,5,3,4,3,5,6}</li></ul></p><p><strong>Example:</strong> {10,5,3,4,3,5,6}</p></div><div class="code-block"><div class="code-header"><span>Q49.java</span></div><pre><code>import java.util.HashMap;

class Q49
{
    // Q49: First repeating element — the element that occurs more than once and
    //      whose index of first occurrence is smallest.
    // Explanation:
    //  - Record the first index where each value appears.
    //  - Then scan again: any value that appears a second time is a candidate.
    //    Among candidates, pick the one with the smallest first-occurrence index.
    //  - Example: {10,5,3,4,3,5,6}
    //    5 first appears at index 1, 3 at index 2 -&gt; answer is 5.
    static int firstRepeating(int arr[])
    {
        HashMap&lt;Integer, Integer&gt; firstIdx = new HashMap&lt;&gt;();
        for(int i = 0; i &lt; arr.length; i++)
        {
            if(!firstIdx.containsKey(arr[i]))
                firstIdx.put(arr[i], i);
        }

        int bestIdx = arr.length;
        int answer = -1;
        for(int i = 0; i &lt; arr.length; i++)
        {
            // If this value repeats later, it is a repeating element
            boolean repeats = false;
            for(int j = i + 1; j &lt; arr.length; j++)
            {
                if(arr[j] == arr[i]) { repeats = true; break; }
            }
            if(repeats &amp;&amp; firstIdx.get(arr[i]) &lt; bestIdx)
            {
                bestIdx = firstIdx.get(arr[i]);
                answer = arr[i];
            }
        }
        return answer;
    }
    public static void main(String args[])
    {
        int arr[] = {10, 5, 3, 4, 3, 5, 6};
        System.out.println(&quot;First repeating element = &quot; + firstRepeating(arr)); // 5
    }
}</code></pre></div>`},
{id:75, title:"Smallest positive integer NOT representable as a subset sum", content:`<div class="concept-box"><h3>75) Smallest positive integer NOT representable as a subset sum.</h3><p></p><p><strong>Example:</strong> {1,3,6,10,11,15}</p></div><div class="code-block"><div class="code-header"><span>Q50.java</span></div><pre><code>class Q50
{
    // Q50: Smallest positive integer NOT representable as a subset sum.
    // Explanation (O(n)):
    //  - Sort the array.
    //  - Maintain 'smallestUnrepresentable' = 1 initially.
    //  - For each element x:
    //      if x &gt; smallestUnrepresentable -&gt; we cannot form it, return it.
    //      else -&gt; we can form all sums up to (smallestUnrepresentable + x - 1),
    //              so update smallestUnrepresentable += x.
    //  - Example: {1,3,6,10,11,15}
    //    smallest=1; x=1 -&gt; 2; x=3 -&gt; 5; x=6 -&gt; 11; x=10 -&gt; 21;
    //    x=11 -&gt; 32; x=15 -&gt; 47; return 2 (can't make 2).
    static int smallestNonRepresentable(int arr[])
    {
        // Sort in place (bubble sort)
        for(int i = 0; i &lt; arr.length - 1; i++)
        {
            for(int j = i + 1; j &lt; arr.length; j++)
            {
                if(arr[i] &gt; arr[j])
                {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        int smallest = 1;
        for(int i = 0; i &lt; arr.length; i++)
        {
            if(arr[i] &gt; smallest)
                break;
            smallest += arr[i];
        }
        return smallest;
    }
    public static void main(String args[])
    {
        int arr[] = {1, 3, 6, 10, 11, 15};
        System.out.println(&quot;Smallest non-representable = &quot; + smallestNonRepresentable(arr)); // 2
    }
}</code></pre></div>`},
{id:76, title:"Rearrange array alternating positive/negative, preserving order", content:`<div class="concept-box"><h3>76) Rearrange array alternating positive/negative, preserving order.</h3><p><p><strong>How it works:</strong></p><ul><li>Collect positives and negatives separately (preserving order).</li><li>Then interleave them: take one negative, one positive, and so on.</li><li>Whatever remains (extra positives or negatives) is appended at the end.</li><li>Example: {1,2,3,-4,-1,4}</li></ul></p><p><strong>Example:</strong> {1,2,3,-4,-1,4}</p></div><div class="code-block"><div class="code-header"><span>Q51.java</span></div><pre><code>class Q51
{
    // Q51: Rearrange array alternating positive/negative, preserving order.
    // Explanation:
    //  - Collect positives and negatives separately (preserving order).
    //  - Then interleave them: take one negative, one positive, and so on.
    //  - Whatever remains (extra positives or negatives) is appended at the end.
    //  - Example: {1,2,3,-4,-1,4}
    //    negatives: {-4,-1}, positives: {1,2,3,4}
    //    interleaved: {-4,1,-1,2,3,4}
    static int[] rearrangeAlternating(int arr[])
    {
        java.util.ArrayList&lt;Integer&gt; neg = new java.util.ArrayList&lt;&gt;();
        java.util.ArrayList&lt;Integer&gt; pos = new java.util.ArrayList&lt;&gt;();
        for(int i = 0; i &lt; arr.length; i++)
        {
            if(arr[i] &lt; 0) neg.add(arr[i]);
            else pos.add(arr[i]);
        }

        int result[] = new int[arr.length];
        int i = 0, j = 0, k = 0;
        boolean turnNeg = true; // start with negative
        while(i &lt; neg.size() &amp;&amp; j &lt; pos.size())
        {
            if(turnNeg) result[k++] = neg.get(i++);
            else result[k++] = pos.get(j++);
            turnNeg = !turnNeg;
        }
        // Append remaining negatives
        while(i &lt; neg.size()) result[k++] = neg.get(i++);
        // Append remaining positives
        while(j &lt; pos.size()) result[k++] = pos.get(j++);
        return result;
    }
    public static void main(String args[])
    {
        int arr[] = {1, 2, 3, -4, -1, 4};
        int out[] = rearrangeAlternating(arr);
        System.out.print(&quot;Output: {&quot;);
        for(int i = 0; i &lt; out.length; i++)
            System.out.print(out[i] + (i &lt; out.length-1 ? &quot;,&quot; : &quot;&quot;));
        System.out.println(&quot;}&quot;);

        int arr2[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8};
        int out2[] = rearrangeAlternating(arr2);
        System.out.print(&quot;Output: {&quot;);
        for(int i = 0; i &lt; out2.length; i++)
            System.out.print(out2[i] + (i &lt; out2.length-1 ? &quot;,&quot; : &quot;&quot;));
        System.out.println(&quot;}&quot;);
    }
}</code></pre></div>`},
{id:77, title:"Check if any subarray has sum equal to zero", content:`<div class="concept-box"><h3>77) Check if any subarray has sum equal to zero.</h3><p><p><strong>How it works:</strong></p><ul><li>Maintain a running prefix sum. If the same prefix sum appears twice,</li><li>Store prefix sums in a HashSet; first repeat means a zero-sum subarray.</li><li>Example: {4,2,-3,1,6} -> prefix sums: 4,6,3,4,10 -> 4 repeats</li></ul></p><p><strong>Example:</strong> {4,2,-3,1,6} -> prefix sums: 4,6,3,4,10 -> 4 repeats</p></div><div class="code-block"><div class="code-header"><span>Q52.java</span></div><pre><code>import java.util.HashSet;

class Q52
{
    // Q52: Check if any subarray has sum equal to zero.
    // Explanation:
    //  - Maintain a running prefix sum. If the same prefix sum appears twice,
    //    the subarray between those two indices sums to zero (prefix[j] - prefix[i] == 0).
    //  - Store prefix sums in a HashSet; first repeat means a zero-sum subarray.
    //  - Example: {4,2,-3,1,6} -&gt; prefix sums: 4,6,3,4,10 -&gt; 4 repeats
    //    =&gt; subarray from index 1..2 ({2,-3,1}) sums to 0.
    static boolean hasZeroSumSubarray(int arr[])
    {
        HashSet&lt;Integer&gt; set = new HashSet&lt;&gt;();
        int sum = 0;
        for(int i = 0; i &lt; arr.length; i++)
        {
            sum += arr[i];
            if(arr[i] == 0 || set.contains(sum) || sum == 0)
                return true;
            set.add(sum);
        }
        return false;
    }
    public static void main(String args[])
    {
        int arr[] = {4, 2, -3, 1, 6};
        System.out.println(&quot;Zero-sum subarray exists? &quot; + hasZeroSumSubarray(arr)); // true
    }
}</code></pre></div>`},
{id:78, title:"Remove duplicates IN PLACE from a sorted array; return new length", content:`<div class="concept-box"><h3>78) Remove duplicates IN PLACE from a sorted array; return new length.</h3><p><p><strong>How it works:</strong></p><ul><li>Since the array is sorted, duplicates are adjacent.</li><li>Use a write pointer 'j': copy arr[i] to arr[j] only when it differs</li><li>Example: [1,1,2] -> arr becomes [1,2,...], return 2.</li></ul></p><p><strong>Example:</strong> [1,1,2] -> arr becomes [1,2,...], return 2.</p></div><div class="code-block"><div class="code-header"><span>Q53.java</span></div><pre><code>class Q53
{
    // Q53: Remove duplicates IN PLACE from a sorted array; return new length.
    // Explanation:
    //  - Since the array is sorted, duplicates are adjacent.
    //  - Use a write pointer 'j': copy arr[i] to arr[j] only when it differs
    //    from the last kept element. j is the new length.
    //  - Example: [1,1,2] -&gt; arr becomes [1,2,...], return 2.
    static int removeDuplicatesInPlace(int arr[])
    {
        if(arr.length == 0) return 0;
        int j = 1;
        for(int i = 1; i &lt; arr.length; i++)
        {
            if(arr[i] != arr[i - 1])
            {
                arr[j] = arr[i];
                j++;
            }
        }
        return j;
    }
    public static void main(String args[])
    {
        int A[] = {1, 1, 2};
        int len = removeDuplicatesInPlace(A);
        System.out.println(&quot;New length = &quot; + len); // 2
        System.out.print(&quot;A = &quot;);
        for(int i = 0; i &lt; len; i++)
            System.out.print(A[i] + &quot; &quot;);
        System.out.println();
    }
}</code></pre></div>`},
{id:79, title:"Remove all instances of a value IN PLACE; return new length", content:`<div class="concept-box"><h3>79) Remove all instances of a value IN PLACE; return new length.</h3><p><p><strong>How it works:</strong></p><ul><li>Write pointer 'j' copies only elements != val. j is the new length.</li><li>Order of remaining elements is preserved (stable).</li><li>Elements beyond the new length can be anything.</li></ul></p></div><div class="code-block"><div class="code-header"><span>Q54.java</span></div><pre><code>class Q54
{
    // Q54: Remove all instances of a value IN PLACE; return new length.
    // Explanation:
    //  - Write pointer 'j' copies only elements != val. j is the new length.
    //  - Order of remaining elements is preserved (stable).
    //  - Elements beyond the new length can be anything.
    static int removeElement(int arr[], int val)
    {
        int j = 0;
        for(int i = 0; i &lt; arr.length; i++)
        {
            if(arr[i] != val)
            {
                arr[j] = arr[i];
                j++;
            }
        }
        return j;
    }
    public static void main(String args[])
    {
        int arr[] = {3, 2, 2, 3};
        int val = 3;
        int len = removeElement(arr, val);
        System.out.println(&quot;New length after removing &quot; + val + &quot; = &quot; + len); // 2
        System.out.print(&quot;Remaining: &quot;);
        for(int i = 0; i &lt; len; i++)
            System.out.print(arr[i] + &quot; &quot;);
        System.out.println();
    }
}</code></pre></div>`},
{id:80, title:"Maximum sum of a contiguous subarray (Kadane's algorithm)", content:`<div class="concept-box"><h3>80) Maximum sum of a contiguous subarray (Kadane's algorithm).</h3><p><p><strong>How it works:</strong></p><ul><li>Walk through the array keeping a running sum (current).</li><li>If current becomes negative, reset it to 0 (a negative prefix only</li><li>Track the maximum current sum seen.</li><li>Example: {-2,1,-3,4,-1,2,1,-5,4} -> max sum = 6 (subarray [4,-1,2,1]).</li></ul></p><p><strong>Example:</strong> {-2,1,-3,4,-1,2,1,-5,4} -> max sum = 6 (subarray [4,-1,2,1]).</p></div><div class="code-block"><div class="code-header"><span>Q55.java</span></div><pre><code>class Q55
{
    // Q55: Maximum sum of a contiguous subarray (Kadane's algorithm).
    // Explanation:
    //  - Walk through the array keeping a running sum (current).
    //  - If current becomes negative, reset it to 0 (a negative prefix only
    //    reduces the sum of any following subarray).
    //  - Track the maximum current sum seen.
    //  - Example: {-2,1,-3,4,-1,2,1,-5,4} -&gt; max sum = 6 (subarray [4,-1,2,1]).
    static int maxSubArraySum(int arr[])
    {
        int max = Integer.MIN_VALUE;
        int current = 0;
        for(int i = 0; i &lt; arr.length; i++)
        {
            current += arr[i];
            if(current &gt; max)
                max = current;
            if(current &lt; 0)
                current = 0;
        }
        return max;
    }
    public static void main(String args[])
    {
        int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println(&quot;Maximum subarray sum = &quot; + maxSubArraySum(arr)); // 6
    }
}</code></pre></div>`},
{id:81, title:"Maximum product of a contiguous subarray", content:`<div class="concept-box"><h3>81) Maximum product of a contiguous subarray.</h3><p><p><strong>How it works:</strong></p><ul><li>Keep track of max and min product ending at the current position.</li><li>A negative number can flip the sign, turning a min product into a</li><li>Example: {2,3,-2,4} -> max product = 6 (subarray [2,3]).</li></ul></p><p><strong>Example:</strong> {2,3,-2,4} -> max product = 6 (subarray [2,3]).</p></div><div class="code-block"><div class="code-header"><span>Q56.java</span></div><pre><code>class Q56
{
    // Q56: Maximum product of a contiguous subarray.
    // Explanation:
    //  - Keep track of max and min product ending at the current position.
    //  - A negative number can flip the sign, turning a min product into a
    //    max product, so we must track both.
    //  - Example: {2,3,-2,4} -&gt; max product = 6 (subarray [2,3]).
    static int maxSubArrayProduct(int arr[])
    {
        int max = arr[0];
        int min = arr[0];
        int result = arr[0];

        for(int i = 1; i &lt; arr.length; i++)
        {
            int temp = min;
            min = Math.min(arr[i], Math.min(max * arr[i], min * arr[i]));
            max = Math.max(arr[i], Math.max(max * arr[i], temp * arr[i]));
            if(max &gt; result)
                result = max;
        }
        return result;
    }
    public static void main(String args[])
    {
        int arr[] = {2, 3, -2, 4};
        System.out.println(&quot;Maximum subarray product = &quot; + maxSubArrayProduct(arr)); // 6
    }
}</code></pre></div>`},
{id:82, title:"Length of longest consecutive sequence in an unsorted array", content:`<div class="concept-box"><h3>82) Length of longest consecutive sequence in an unsorted array.</h3><p><p><strong>How it works:</strong></p><ul><li>Put all numbers in a HashSet for O(1) membership tests.</li><li>For each value that starts a sequence (value-1 absent), count the</li><li>Track the maximum run length.</li><li>Example: {100,4,200,1,3,2} -> longest run {1,2,3,4} -> 4.</li></ul></p><p><strong>Example:</strong> {100,4,200,1,3,2} -> longest run {1,2,3,4} -> 4.</p></div><div class="code-block"><div class="code-header"><span>Q57.java</span></div><pre><code>import java.util.HashSet;

class Q57
{
    // Q57: Length of longest consecutive sequence in an unsorted array.
    // Explanation:
    //  - Put all numbers in a HashSet for O(1) membership tests.
    //  - For each value that starts a sequence (value-1 absent), count the
    //    run of value, value+1, value+2, ...
    //  - Track the maximum run length.
    //  - Example: {100,4,200,1,3,2} -&gt; longest run {1,2,3,4} -&gt; 4.
    static int longestConsecutive(int arr[])
    {
        HashSet&lt;Integer&gt; set = new HashSet&lt;&gt;();
        for(int i = 0; i &lt; arr.length; i++)
            set.add(arr[i]);

        int maxLen = 0;
        for(int i = 0; i &lt; arr.length; i++)
        {
            if(!set.contains(arr[i] - 1))
            {
                int num = arr[i];
                int len = 1;
                while(set.contains(num + 1))
                {
                    num++;
                    len++;
                }
                if(len &gt; maxLen)
                    maxLen = len;
            }
        }
        return maxLen;
    }
    public static void main(String args[])
    {
        int arr[] = {100, 4, 200, 1, 3, 2};
        System.out.println(&quot;Longest consecutive sequence length = &quot; + longestConsecutive(arr)); // 4
    }
}</code></pre></div>`},
{id:83, title:"Find all elements that appear more than n/k times", content:`<div class="concept-box"><h3>83) Find all elements that appear more than n/k times.</h3><p><p><strong>How it works:</strong></p><ul><li>Count frequency of every element using a HashMap.</li><li>Threshold = n/k. Print every element whose count exceeds it.</li><li>Example: {3,1,2,2,1,2,3,3}, n=8, k=4 -> threshold = 2.</li></ul></p><p><strong>Example:</strong> {3,1,2,2,1,2,3,3}, n=8, k=4 -> threshold = 2.</p></div><div class="code-block"><div class="code-header"><span>Q58.java</span></div><pre><code>import java.util.HashMap;
import java.util.Map;

class Q58
{
    // Q58: Find all elements that appear more than n/k times.
    // Explanation:
    //  - Count frequency of every element using a HashMap.
    //  - Threshold = n/k. Print every element whose count exceeds it.
    //  - Example: {3,1,2,2,1,2,3,3}, n=8, k=4 -&gt; threshold = 2.
    //    Counts: 3-&gt;4, 1-&gt;2, 2-&gt;3. Elements appearing more than 2 times: 2, 3.
    static void moreThanNk(int arr[], int k)
    {
        int n = arr.length;
        int threshold = n / k;
        Map&lt;Integer, Integer&gt; freq = new HashMap&lt;&gt;();
        for(int i = 0; i &lt; n; i++)
        {
            freq.put(arr[i], freq.getOrDefault(arr[i], 0) + 1);
        }

        System.out.print(&quot;Elements appearing more than &quot; + threshold + &quot; times: &quot;);
        for(Map.Entry&lt;Integer, Integer&gt; e : freq.entrySet())
        {
            if(e.getValue() &gt; threshold)
                System.out.print(e.getKey() + &quot; &quot;);
        }
        System.out.println();
    }
    public static void main(String args[])
    {
        int arr[] = {3, 1, 2, 2, 1, 2, 3, 3};
        int k = 4;
        moreThanNk(arr, k); // 2 3
    }
}</code></pre></div>`},
{id:84, title:"Reverse an array IN PLACE", content:`<div class="concept-box"><h3>84) Reverse an array IN PLACE.</h3><p><p><strong>How it works:</strong></p><ul><li>Swap the first and last elements, then move inward until the middle.</li><li>O(n) time, O(1) extra space (no second array).</li></ul></p></div><div class="code-block"><div class="code-header"><span>Q59.java</span></div><pre><code>class Q59
{
    // Q59: Reverse an array IN PLACE.
    // Explanation:
    //  - Swap the first and last elements, then move inward until the middle.
    //  - O(n) time, O(1) extra space (no second array).
    static void reverseInPlace(int arr[])
    {
        int start = 0, end = arr.length - 1;
        while(start &lt; end)
        {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    public static void main(String args[])
    {
        int arr[] = {10, 20, 30, 40, 50, 60};
        reverseInPlace(arr);
        System.out.print(&quot;Reversed: &quot;);
        for(int i = 0; i &lt; arr.length; i++)
            System.out.print(arr[i] + &quot; &quot;);
        System.out.println();
    }
}</code></pre></div>`},
{id:85, title:"Minimum steps from (1,1) to (N,M) moving (x, x+y) or (x+y, y)", content:`<div class="concept-box"><h3>85) Minimum steps from (1,1) to (N,M) moving (x, x+y) or (x+y, y).</h3><p><p><strong>How it works:</strong></p><ul><li>Work backwards from (N,M): while N>1 and M>1, the larger coordinate</li><li>When one coordinate reaches 1, the remaining steps equal the other</li><li>If a coordinate never reduces to 1 it is unreachable -> return -1.</li><li>Example: N=4, M=7 -> (4,7)->(4,3)->(1,3)->(1,2)->(1,1): 4 steps.</li></ul></p><p><strong>Example:</strong> N=4, M=7 -> (4,7)->(4,3)->(1,3)->(1,2)->(1,1): 4 steps.</p></div><div class="code-block"><div class="code-header"><span>Q60.java</span></div><pre><code>class Q60
{
    // Q60: Minimum steps from (1,1) to (N,M) moving (x, x+y) or (x+y, y).
    // Explanation:
    //  - Work backwards from (N,M): while N&gt;1 and M&gt;1, the larger coordinate
    //    must have been reached by adding the smaller one, so subtract.
    //  - When one coordinate reaches 1, the remaining steps equal the other
    //    coordinate minus 1 (each step adds the fixed 1).
    //  - If a coordinate never reduces to 1 it is unreachable -&gt; return -1.
    //  - Example: N=4, M=7 -&gt; (4,7)-&gt;(4,3)-&gt;(1,3)-&gt;(1,2)-&gt;(1,1): 4 steps.
    static int minSteps(int N, int M)
    {
        int steps = 0;
        while(N &gt; 1 &amp;&amp; M &gt; 1)
        {
            if(N &gt; M)
                N -= M;
            else
                M -= N;
            steps++;
        }

        if(N == 1 &amp;&amp; M &gt;= 1)
            return steps + (M - 1);
        if(M == 1 &amp;&amp; N &gt;= 1)
            return steps + (N - 1);
        return -1;
    }
    public static void main(String args[])
    {
        int N = 4, M = 7;
        System.out.println(&quot;Minimum steps from (1,1) to (&quot; + N + &quot;,&quot; + M + &quot;) = &quot; + minSteps(N, M));
    }
}</code></pre></div>`},
{id:86, title:"Print a 2D matrix in spiral (clockwise) order", content:`<div class="concept-box"><h3>86) Print a 2D matrix in spiral (clockwise) order.</h3><p><p><strong>How it works:</strong></p><ul><li>Maintain four boundaries: top, bottom, left, right.</li><li>Print top row (left->right), then right column (top->bottom),</li><li>Shrink the boundaries inward and repeat until all elements printed.</li><li>Example: {{10,20,30},{40,50,60},{70,80,90}}</li></ul></p><p><strong>Example:</strong> {{10,20,30},{40,50,60},{70,80,90}}</p></div><div class="code-block"><div class="code-header"><span>Q61.java</span></div><pre><code>class Q61
{
    // Q61: Print a 2D matrix in spiral (clockwise) order.
    // Explanation:
    //  - Maintain four boundaries: top, bottom, left, right.
    //  - Print top row (left-&gt;right), then right column (top-&gt;bottom),
    //    then bottom row (right-&gt;left), then left column (bottom-&gt;top).
    //  - Shrink the boundaries inward and repeat until all elements printed.
    //  - Example: {{10,20,30},{40,50,60},{70,80,90}}
    //    Output: 10 20 30 60 90 80 70 40 50.
    static void printSpiral(int matrix[][])
    {
        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;

        while(top &lt;= bottom &amp;&amp; left &lt;= right)
        {
            // Top row
            for(int j = left; j &lt;= right; j++)
                System.out.print(matrix[top][j] + &quot; &quot;);
            top++;

            // Right column
            for(int i = top; i &lt;= bottom; i++)
                System.out.print(matrix[i][right] + &quot; &quot;);
            right--;

            // Bottom row
            if(top &lt;= bottom)
            {
                for(int j = right; j &gt;= left; j--)
                    System.out.print(matrix[bottom][j] + &quot; &quot;);
                bottom--;
            }

            // Left column
            if(left &lt;= right)
            {
                for(int i = bottom; i &gt;= top; i--)
                    System.out.print(matrix[i][left] + &quot; &quot;);
                left++;
            }
        }
        System.out.println();
    }
    public static void main(String args[])
    {
        int arr[][] = {
            {10, 20, 30},
            {40, 50, 60},
            {70, 80, 90}
        };
        System.out.print(&quot;Spiral: &quot;);
        printSpiral(arr); // 10 20 30 60 90 80 70 40 50
    }
}</code></pre></div>`},
{id:87, title:"Find the single repeated element in an array of 101 numbers containing 1..100 with one val", content:`<div class="concept-box"><h3>87) Find the single repeated element in an array of 101 numbers</h3><p></p><p><strong>Example:</strong> array holds 1..100 with one value duplicated -> that value.</p></div><div class="code-block"><div class="code-header"><span>Q62.java</span></div><pre><code>class Q62
{
    // Q62: Find the single repeated element in an array of 101 numbers
    //       containing 1..100 with one value repeated.
    // Explanation (single loop):
    //  - Sum of 1..100 = 100*101/2 = 5050.
    //  - Subtract the actual array sum from 5050; the difference is the
    //    repeated element (since it contributes one extra time).
    //  - One pass computes the sum, giving O(n) time and O(1) space.
    //  - Example: array holds 1..100 with one value duplicated -&gt; that value.
    static int findRepeated(int arr[])
    {
        int sumOf100 = 100 * 101 / 2; // 5050
        int total = 0;
        for(int i = 0; i &lt; arr.length; i++)
            total += arr[i];
        return total - sumOf100;
    }
    public static void main(String args[])
    {
        // Build an array of 1..100 and repeat 42 once more (101 elements)
        int arr[] = new int[101];
        int idx = 0;
        for(int i = 1; i &lt;= 100; i++)
            arr[idx++] = i;
        arr[idx] = 42; // the repeated element

        System.out.println(&quot;Repeated element = &quot; + findRepeated(arr)); // 42
    }
}</code></pre></div>`},
{ id:88, title:"Find maximum element in an array", content:`<div class="concept-box"><h3>1) Find maximum element in an array.</h3><p><strong>How it works?</strong></p><ul><li>Traverse array from start to end, keep updating max so far.</li><li>Time complexity O(n), space O(1).</li></ul></p><div class="code-block"><div class="code-header"><span>Q63.java</span></div><pre><code>class Q63
{
    static int max(int x[])
    {
        int m = x[0];
        for(int i=1; i&lt;x.length; i++)
            if(x[i] &gt; m)
                m = x[i];
        return m;
    }
    public static void main(String args[])
    {
        int x[] = {2, 5, 1, 9, 3};
        System.out.println("Maximum = " + max(x)); // 9
    }
}</code></pre></div>`},
{ id:89, title:"Find minimum element in an array", content:`<div class="concept-box"><h3>2) Find minimum element in an array.</h3><p><strong>How it works?</strong></p><ul><li>Traverse array and keep track of smallest value seen.</li><li>Time complexity O(n), space O(1).</li></ul></p><div class="code-block"><div class="code-header"><span>Q64.java</span></div><pre><code>class Q64
{
    static int min(int x[])
    {
        int m = x[0];
        for(int i=1; i&lt;x.length; i++)
            if(x[i] &lt; m)
                m = x[i];
        return m;
    }
    public static void main(String args[])
    {
        int x[] = {2, 5, 1, 9, 3};
        System.out.println("Minimum = " + min(x)); // 1
    }
}</code></pre></div>`},
{ id:90, title:"Find maximum element in a 2D matrix", content:`<div class="concept-box"><h3>3) Find maximum element in a 2D matrix.</h3><p><strong>How it works?</strong></p><ul><li>Nested loops walk through every row and column.</li><li>Update a running maximum whenever a larger value is found.</li></ul></p><div class="code-block"><div class="code-header"><span>Q65.java</span></div><pre><code>class Q65
{
    static int max1(int x[][])
    {
        int m = x[0][0];
        for(int i=0; i&lt;x.length; i++)
            for(int j=0; j&lt;x[i].length; j++)
                if(x[i][j] &gt; m)
                    m = x[i][j];
        return m;
    }
    public static void main(String args[])
    {
        int x[][] = {{2,5,1},{9,3,7}};
        System.out.println("Maximum in matrix = " + max1(x)); // 9
    }
}</code></pre></div>`},
{ id:91, title:"Find minimum element in a 2D matrix", content:`<div class="concept-box"><h3>4) Find minimum element in a 2D matrix.</h3><p><strong>How it works?</strong></p><ul><li>Nested loops walk through every row and column.</li><li>Update a running minimum whenever a smaller value is found.</li></ul></p><div class="code-block"><div class="code-header"><span>Q66.java</span></div><pre><code>class Q66
{
    static int min1(int x[][])
    {
        int m = x[0][0];
        for(int i=0; i&lt;x.length; i++)
            for(int j=0; j&lt;x[i].length; j++)
                if(x[i][j] &lt; m)
                    m = x[i][j];
        return m;
    }
    public static void main(String args[])
    {
        int x[][] = {{2,5,1},{9,3,7}};
        System.out.println("Minimum in matrix = " + min1(x)); // 1
    }
}</code></pre></div>`},
{ id:92, title:"Sort an array in ascending order (selection sort)", content:`<div class="concept-box"><h3>5) Sort an array in ascending order (selection sort).</h3><p><strong>How it works?</strong></p><ul><li>Repeatedly find the minimum of the remaining part and swap it to the front.</li><li>Time complexity O(n^2), space O(1) in place.</li></ul></p><div class="code-block"><div class="code-header"><span>Q67.java</span></div><pre><code>class Q67
{
    static void sort(int x[])
    {
        for(int i=0; i&lt;x.length-1; i++)
        {
            int minIdx = i;
            for(int j=i+1; j&lt;x.length; j++)
                if(x[j] &lt; x[minIdx])
                    minIdx = j;
            int temp = x[i];
            x[i] = x[minIdx];
            x[minIdx] = temp;
        }
    }
    public static void main(String args[])
    {
        int x[] = {25, 10, 45, 95, 62};
        sort(x);
        System.out.print("Ascending: ");
        for(int i=0; i&lt;x.length; i++)
            System.out.print(x[i] + " ");
        System.out.println();
    }
}</code></pre></div>`},{ id:93, title:"Sort an array in descending order (selection sort)", content:`<div class="concept-box"><h3>6) Sort an array in descending order (selection sort).</h3><p><strong>How it works?</strong></p><ul><li>Repeatedly find the maximum of the remaining part and swap it to the front.</li><li>Time complexity O(n^2), space O(1) in place.</li></ul></p><div class="code-block"><div class="code-header"><span>Q68.java</span></div><pre><code>class Q68
{
    static void sort1(int x[])
    {
        for(int i=0; i&lt;x.length-1; i++)
        {
            int maxIdx = i;
            for(int j=i+1; j&lt;x.length; j++)
                if(x[j] &gt; x[maxIdx])
                    maxIdx = j;
            int temp = x[i];
            x[i] = x[maxIdx];
            x[maxIdx] = temp;
        }
    }
    public static void main(String args[])
    {
        int x[] = {25, 10, 45, 95, 62};
        sort1(x);
        System.out.print("Descending: ");
        for(int i=0; i&lt;x.length; i++)
            System.out.print(x[i] + " ");
        System.out.println();
    }
}</code></pre></div>`},
{ id:94, title:"Merge two sorted arrays into one sorted array", content:`<div class="concept-box"><h3>7) Merge two sorted arrays into one sorted array.</h3><p><strong>How it works?</strong></p><ul><li>Use two pointers to walk through both arrays simultaneously.</li><li>Smaller of the two current elements is placed into the merged array.</li><li>Remaining elements from either array are appended at the end.</li></ul></p><div class="code-block"><div class="code-header"><span>Q69.java</span></div><pre><code>class Q69
{
    static int[] mergesort(int x[], int y[])
    {
        int result[] = new int[x.length + y.length];
        int i = 0, j = 0, k = 0;
        while(i &lt; x.length &amp;&amp; j &lt; y.length)
        {
            if(x[i] &lt;= y[j])
                result[k++] = x[i++];
            else
                result[k++] = y[j++];
        }
        while(i &lt; x.length) result[k++] = x[i++];
        while(j &lt; y.length) result[k++] = y[j++];
        return result;
    }
    public static void main(String args[])
    {
        int x[] = {1, 3, 5};
        int y[] = {2, 4, 6};
        int out[] = mergesort(x, y);
        System.out.print("Merged: ");
        for(int v : out) System.out.print(v + " ");
        System.out.println();
    }
}</code></pre></div>`},
{ id:95, title:"Print union of two arrays (distinct values)", content:`<div class="concept-box"><h3>8) Print union of two arrays (distinct values).</h3><p><strong>How it works?</strong></p><ul><li>Collect every element from both arrays into a Set.</li><li>A Set automatically removes duplicates, giving the union.</li><li>Example: {1,2,3} union {3,4,5} -&gt; {1,2,3,4,5}.</li></ul></p><div class="code-block"><div class="code-header"><span>Q70.java</span></div><pre><code>import java.util.LinkedHashSet;
import java.util.Set;

class Q70
{
    static void union(int x[], int y[])
    {
        Set&lt;Integer&gt; set = new LinkedHashSet&lt;&gt;();
        for(int v : x) set.add(v);
        for(int v : y) set.add(v);
        System.out.print("Union: ");
        for(int v : set) System.out.print(v + " ");
        System.out.println();
    }
    public static void main(String args[])
    {
        int x[] = {1, 2, 3};
        int y[] = {3, 4, 5};
        union(x, y); // 1 2 3 4 5
    }
}</code></pre></div>`},
{ id:96, title:"Add two matrices element-wise", content:`<div class="concept-box"><h3>9) Add two matrices element-wise.</h3><p><strong>How it works?</strong></p><ul><li>Both matrices must have the same dimensions.</li><li>For each (i,j) cell, result[i][j] = x[i][j] + y[i][j].</li></ul></p><div class="code-block"><div class="code-header"><span>Q71.java</span></div><pre><code>class Q71
{
    static void matrixadd(int x[][], int y[][])
    {
        int rows = x.length, cols = x[0].length;
        int result[][] = new int[rows][cols];
        for(int i=0; i&lt;rows; i++)
            for(int j=0; j&lt;cols; j++)
                result[i][j] = x[i][j] + y[i][j];

        System.out.println("Matrix Addition:");
        for(int i=0; i&lt;rows; i++)
        {
            for(int j=0; j&lt;cols; j++)
                System.out.print(result[i][j] + " ");
            System.out.println();
        }
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6}};
        int y[][] = {{6,5,4},{3,2,1}};
        matrixadd(x, y); // {{7,7,7},{7,7,7}}
    }
}</code></pre></div>`},{ id:97, title:"Transpose of a matrix", content:`<div class="concept-box"><h3>10) Transpose of a matrix.</h3><p><strong>How it works?</strong></p><ul><li>Swap rows with columns: trans[i][j] = original[j][i].</li><li>The resulting matrix has dimensions cols x rows.</li></ul></p><div class="code-block"><div class="code-header"><span>Q72.java</span></div><pre><code>class Q72
{
    static void matrixtranspose(int x[][])
    {
        int rows = x.length, cols = x[0].length;
        int t[][] = new int[cols][rows];
        for(int i=0; i&lt;rows; i++)
            for(int j=0; j&lt;cols; j++)
                t[j][i] = x[i][j];

        System.out.println("Transpose:");
        for(int i=0; i&lt;cols; i++)
        {
            for(int j=0; j&lt;rows; j++)
                System.out.print(t[i][j] + " ");
            System.out.println();
        }
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6}};
        matrixtranspose(x); // {{1,4},{2,5},{3,6}}
    }
}</code></pre></div>`},
{ id:98, title:"Multiply two matrices", content:`<div class="concept-box"><h3>11) Multiply two matrices.</h3><p><strong>How it works?</strong></p><ul><li>For result[i][j] = sum over k of x[i][k] * y[k][j].</li><li>Inner dimension of first must equal rows of second.</li></ul></p><div class="code-block"><div class="code-header"><span>Q73.java</span></div><pre><code>class Q73
{
    static void matrixmult(int x[][], int y[][])
    {
        int r1 = x.length, c1 = x[0].length;
        int r2 = y.length, c2 = y[0].length;
        if(c1 != r2)
        {
            System.out.println("Cannot multiply: incompatible dimensions");
            return;
        }
        int result[][] = new int[r1][c2];
        for(int i=0; i&lt;r1; i++)
            for(int j=0; j&lt;c2; j++)
                for(int k=0; k&lt;c1; k++)
                    result[i][j] += x[i][k] * y[k][j];

        System.out.println("Matrix Multiplication:");
        for(int i=0; i&lt;r1; i++)
        {
            for(int j=0; j&lt;c2; j++)
                System.out.print(result[i][j] + " ");
            System.out.println();
        }
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6}};
        int y[][] = {{1,2},{3,4},{5,6}};
        matrixmult(x, y); // {{22,28},{49,64}}
    }
}</code></pre></div>`},
{ id:99, title:"Sum of all elements in a matrix", content:`<div class="concept-box"><h3>12) Sum of all elements in a matrix.</h3><p><strong>How it works?</strong></p><ul><li>Nested loops add every cell value to a running total.</li><li>Time complexity O(rows * cols).</li></ul></p><div class="code-block"><div class="code-header"><span>Q74.java</span></div><pre><code>class Q74
{
    static void matrixsum(int x[][])
    {
        int sum = 0;
        for(int i=0; i&lt;x.length; i++)
            for(int j=0; j&lt;x[i].length; j++)
                sum += x[i][j];
        System.out.println("Sum of all elements = " + sum);
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6}};
        matrixsum(x); // 21
    }
}</code></pre></div>`},
{ id:100, title:"Sum of the upper triangular part of a matrix", content:`<div class="concept-box"><h3>13) Sum of the upper triangular part of a matrix.</h3><p><strong>How it works?</strong></p><ul><li>Upper triangle contains cells where column index &gt;= row index.</li><li>Nested loop adds those cells and prints the total.</li></ul></p><div class="code-block"><div class="code-header"><span>Q75.java</span></div><pre><code>class Q75
{
    static void triangleAsum(int x[][])
    {
        int sum = 0;
        for(int i=0; i&lt;x.length; i++)
            for(int j=i; j&lt;x[i].length; j++)
                sum += x[i][j];
        System.out.println("Upper triangle sum = " + sum);
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6},{7,8,9}};
        triangleAsum(x); // 1+2+3+5+6+9 = 26
    }
}</code></pre></div>`},{ id:101, title:"Maximum element in the upper triangular part of a matrix", content:`<div class="concept-box"><h3>14) Maximum element in the upper triangular part of a matrix.</h3><p><strong>How it works?</strong></p><ul><li>Upper triangle contains cells where column index &gt;= row index.</li><li>Track the maximum among those cells.</li></ul></p><div class="code-block"><div class="code-header"><span>Q76.java</span></div><pre><code>class Q76
{
    static void triangleAmax(int x[][])
    {
        int max = x[0][0];
        for(int i=0; i&lt;x.length; i++)
            for(int j=i; j&lt;x[i].length; j++)
                if(x[i][j] &gt; max)
                    max = x[i][j];
        System.out.println("Upper triangle max = " + max);
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6},{7,8,9}};
        triangleAmax(x); // 9
    }
}</code></pre></div>`},
{ id:102, title:"Minimum element in the upper triangular part of a matrix", content:`<div class="concept-box"><h3>15) Minimum element in the upper triangular part of a matrix.</h3><p><strong>How it works?</strong></p><ul><li>Upper triangle contains cells where column index &gt;= row index.</li><li>Track the minimum among those cells.</li></ul></p><div class="code-block"><div class="code-header"><span>Q77.java</span></div><pre><code>class Q77
{
    static void triangleAmin(int x[][])
    {
        int min = x[0][0];
        for(int i=0; i&lt;x.length; i++)
            for(int j=i; j&lt;x[i].length; j++)
                if(x[i][j] &lt; min)
                    min = x[i][j];
        System.out.println("Upper triangle min = " + min);
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6},{7,8,9}};
        triangleAmin(x); // 1
    }
}</code></pre></div>`},
{ id:103, title:"Sum of the lower triangular part of a matrix", content:`<div class="concept-box"><h3>16) Sum of the lower triangular part of a matrix.</h3><p><strong>How it works?</strong></p><ul><li>Lower triangle contains cells where column index &lt;= row index.</li><li>Nested loop adds those cells and prints the total.</li></ul></p><div class="code-block"><div class="code-header"><span>Q78.java</span></div><pre><code>class Q78
{
    static void triangleBsum(int x[][])
    {
        int sum = 0;
        for(int i=0; i&lt;x.length; i++)
            for(int j=0; j&lt;=i; j++)
                sum += x[i][j];
        System.out.println("Lower triangle sum = " + sum);
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6},{7,8,9}};
        triangleBsum(x); // 1+4+5+7+8+9 = 34
    }
}</code></pre></div>`},
{ id:104, title:"Maximum element in the lower triangular part of a matrix", content:`<div class="concept-box"><h3>17) Maximum element in the lower triangular part of a matrix.</h3><p><strong>How it works?</strong></p><ul><li>Lower triangle contains cells where column index &lt;= row index.</li><li>Track the maximum among those cells.</li></ul></p><div class="code-block"><div class="code-header"><span>Q79.java</span></div><pre><code>class Q79
{
    static void triangleBmax(int x[][])
    {
        int max = x[0][0];
        for(int i=0; i&lt;x.length; i++)
            for(int j=0; j&lt;=i; j++)
                if(x[i][j] &gt; max)
                    max = x[i][j];
        System.out.println("Lower triangle max = " + max);
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6},{7,8,9}};
        triangleBmax(x); // 9
    }
}</code></pre></div>`},
{ id:105, title:"Minimum element in the lower triangular part of a matrix", content:`<div class="concept-box"><h3>18) Minimum element in the lower triangular part of a matrix.</h3><p><strong>How it works?</strong></p><ul><li>Lower triangle contains cells where column index &lt;= row index.</li><li>Track the minimum among those cells.</li></ul></p><div class="code-block"><div class="code-header"><span>Q80.java</span></div><pre><code>class Q80
{
    static void triangleBmin(int x[][])
    {
        int min = x[0][0];
        for(int i=0; i&lt;x.length; i++)
            for(int j=0; j&lt;=i; j++)
                if(x[i][j] &lt; min)
                    min = x[i][j];
        System.out.println("Lower triangle min = " + min);
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6},{7,8,9}};
        triangleBmin(x); // 1
    }
}</code></pre></div>`},
{ id:106, title:"Right shift array elements by one position", content:`<div class="concept-box"><h3>19) Right shift array elements by one position.</h3><p><strong>How it works?</strong></p><ul><li>Save the last element, then move every element one position to the right.</li><li>Place the saved last element at index 0.</li></ul></p><div class="code-block"><div class="code-header"><span>Q81.java</span></div><pre><code>class Q81
{
    static void shift(int x[])
    {
        int last = x[x.length - 1];
        for(int i = x.length - 1; i &gt; 0; i--)
            x[i] = x[i - 1];
        x[0] = last;
    }
    public static void main(String args[])
    {
        int x[] = {1, 2, 3, 4, 5};
        shift(x);
        System.out.print("After right shift: ");
        for(int v : x) System.out.print(v + " ");
        System.out.println(); // 5 1 2 3 4
    }
}</code></pre></div>`},
{ id:107, title:"Frequency count of each element in an array", content:`<div class="concept-box"><h3>20) Frequency count of each element in an array.</h3><p><strong>How it works?</strong></p><ul><li>Count occurrences of each distinct value and print value -&gt; count.</li><li>Use a HashMap to store counts in a single pass.</li></ul></p><div class="code-block"><div class="code-header"><span>Q82.java</span></div><pre><code>import java.util.HashMap;
import java.util.Map;

class Q82
{
    static void frequencycount(int x[])
    {
        Map&lt;Integer, Integer&gt; freq = new HashMap&lt;&gt;();
        for(int v : x)
            freq.put(v, freq.getOrDefault(v, 0) + 1);

        for(Map.Entry&lt;Integer, Integer&gt; e : freq.entrySet())
            System.out.println(e.getKey() + " -&gt; " + e.getValue());
    }
    public static void main(String args[])
    {
        int x[] = {1, 2, 2, 3, 1, 4, 2};
        frequencycount(x);
        // 1-&gt;2, 2-&gt;3, 3-&gt;1, 4-&gt;1
    }
}</code></pre></div>`},
{ id:108, title:"First non-repeating element in an array", content:`<div class="concept-box"><h3>21) First non-repeating element in an array.</h3><p><strong>How it works?</strong></p><ul><li>Count frequency of every element.</li><li>Walk the array again and return the first element whose count is 1.</li></ul></p><div class="code-block"><div class="code-header"><span>Q83.java</span></div><pre><code>import java.util.HashMap;
import java.util.Map;

class Q83
{
    static void firstnonrepeatingelement(int x[])
    {
        Map&lt;Integer, Integer&gt; freq = new HashMap&lt;&gt;();
        for(int v : x)
            freq.put(v, freq.getOrDefault(v, 0) + 1);

        for(int v : x)
        {
            if(freq.get(v) == 1)
            {
                System.out.println("First non-repeating element = " + v);
                return;
            }
        }
        System.out.println("No non-repeating element found");
    }
    public static void main(String args[])
    {
        int x[] = {10, 5, 3, 4, 3, 5, 6};
        firstnonrepeatingelement(x); // 10
    }
}</code></pre></div>`},
{ id:109, title:"Convert binary array to decimal number", content:`<div class="concept-box"><h3>22) Convert binary array to decimal number.</h3><p><strong>How it works?</strong></p><ul><li>Each element is a binary digit (0 or 1).</li><li>Decimal = sum of digit * 2^position from the right.</li></ul></p><div class="code-block"><div class="code-header"><span>Q84.java</span></div><pre><code>class Q84
{
    static int binarytodecimal(int x[])
    {
        int decimal = 0;
        int power = 1;
        for(int i = x.length - 1; i &gt;= 0; i--)
        {
            decimal += x[i] * power;
            power *= 2;
        }
        return decimal;
    }
    public static void main(String args[])
    {
        int x[] = {1, 0, 1, 1}; // binary 1011
        System.out.println("Decimal value = " + binarytodecimal(x)); // 11
    }
}</code></pre></div>`},{ id:110, title:"Find the maximum element in any single row of a matrix", content:`<div class="concept-box"><h3>23) Find the maximum element in any single row of a matrix.</h3><p><strong>How it works?</strong></p><ul><li>For a chosen row, scan its columns and keep the largest value.</li><li>Repeat for every row and print each row maximum.</li></ul></p><div class="code-block"><div class="code-header"><span>Q85.java</span></div><pre><code>class Q85
{
    static void maxinonerow(int x[][])
    {
        for(int i=0; i&lt;x.length; i++)
        {
            int max = x[i][0];
            for(int j=1; j&lt;x[i].length; j++)
                if(x[i][j] &gt; max)
                    max = x[i][j];
            System.out.println("Row " + i + " max = " + max);
        }
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6},{7,8,9}};
        maxinonerow(x);
        // Row 0 max = 3, Row 1 max = 6, Row 2 max = 9
    }
}</code></pre></div>`},
{ id:111, title:"Print each word stored in an array of strings", content:`<div class="concept-box"><h3>24) Print each word stored in an array of strings.</h3><p><strong>How it works?</strong></p><ul><li>Each array slot holds one word (String).</li><li>A simple loop prints every element on its own line.</li></ul></p><div class="code-block"><div class="code-header"><span>Q86.java</span></div><pre><code>class Q86
{
    static void printword(int x[])
    {
        for(int i=0; i&lt;x.length; i++)
            System.out.println("Element at index " + i + " = " + x[i]);
    }
    public static void main(String args[])
    {
        int x[] = {10, 20, 30, 40};
        printword(x);
    }
}</code></pre></div>`},
{ id:112, title:"Print matrix elements diagonal-wise (main and anti)", content:`<div class="concept-box"><h3>25) Print matrix elements diagonal-wise (main and anti).</h3><p><strong>How it works?</strong></p><ul><li>Print the main diagonal where row == column.</li><li>Print the anti diagonal where row + column == n-1.</li></ul></p><div class="code-block"><div class="code-header"><span>Q87.java</span></div><pre><code>class Q87
{
    static void printdigonalwise(int x[][])
    {
        int n = x.length;
        System.out.println("Main diagonal:");
        for(int i=0; i&lt;n; i++)
            System.out.print(x[i][i] + " ");
        System.out.println();
        System.out.println("Anti diagonal:");
        for(int i=0; i&lt;n; i++)
            System.out.print(x[i][n-1-i] + " ");
        System.out.println();
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6},{7,8,9}};
        printdigonalwise(x); // main: 1 5 9 ; anti: 3 5 7
    }
}</code></pre></div>`},
{ id:113, title:"Print matrix elements in diagonal sequence form", content:`<div class="concept-box"><h3>26) Print matrix elements in diagonal sequence form.</h3><p><strong>How it works?</strong></p><ul><li>First print the main diagonal, then the anti diagonal, one after another.</li><li>Helpful for inspecting both diagonals in a single output stream.</li></ul></p><div class="code-block"><div class="code-header"><span>Q88.java</span></div><pre><code>class Q88
{
    static void sequencediagonalwise(int x[][])
    {
        int n = x.length;
        System.out.print("Main then anti diagonal: ");
        for(int i=0; i&lt;n; i++)
            System.out.print(x[i][i] + " ");
        for(int i=0; i&lt;n; i++)
            System.out.print(x[i][n-1-i] + " ");
        System.out.println();
    }
    public static void main(String args[])
    {
        int x[][] = {{1,2,3},{4,5,6},{7,8,9}};
        sequencediagonalwise(x); // 1 5 9 3 5 7
    }
}</code></pre></div>`},{ id:114, title:"Apply an if/else criteria element-wise over an array", content:`<div class="concept-box"><h3>27) Apply an if/else criteria element-wise over an array.</h3><p><strong>How it works?</strong></p><ul><li>Test each element against a predicate using if/else.</li><li>Here we classify each number as even or odd.</li></ul></p><div class="code-block"><div class="code-header"><span>Q89.java</span></div><pre><code>class Q89
{
    static void ICMcriteriaelsewise(int x[])
    {
        for(int i=0; i&lt;x.length; i++)
        {
            if(x[i] % 2 == 0)
                System.out.println(x[i] + " : even");
            else
                System.out.println(x[i] + " : odd");
        }
    }
    public static void main(String args[])
    {
        int x[] = {2, 4, 7, 9, 11};
        ICMcriteriaelsewise(x);
    }
}</code></pre></div>`},
{ id:115, title:"Find HCF (GCD) of all array elements using if/else", content:`<div class="concept-box"><h3>28) Find HCF (GCD) of all array elements using if/else.</h3><p><strong>How it works?</strong></p><ul><li>Start with the first element as the running HCF.</li><li>Repeatedly apply Euclid's algorithm (a % b) with the next element.</li></ul></p><div class="code-block"><div class="code-header"><span>Q90.java</span></div><pre><code>class Q90
{
    static int gcd(int a, int b)
    {
        while(b != 0)
        {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    static void HCF(int x[])
    {
        int result = x[0];
        for(int i=1; i&lt;x.length; i++)
            result = gcd(result, x[i]);
        System.out.println("HCF (GCD) of array = " + result);
    }
    public static void main(String args[])
    {
        int x[] = {24, 36, 60, 96};
        HCF(x); // 12
    }
}</code></pre></div>`},
{ id:116, title:"Find the first 3-digit number in an array", content:`<div class="concept-box"><h3>29) Find the first 3-digit number in an array.</h3><p><strong>How it works?</strong></p><ul><li>A 3-digit number satisfies 100 &lt;= value &lt;= 999.</li><li>Scan the array and return the first element matching that range.</li></ul></p><div class="code-block"><div class="code-header"><span>Q91.java</span></div><pre><code>class Q91
{
    static int find3digit(int x[])
    {
        for(int i=0; i&lt;x.length; i++)
        {
            if(x[i] &gt;= 100 &amp;&amp; x[i] &lt;= 999)
                return x[i];
        }
        return -1;
    }
    public static void main(String args[])
    {
        int x[] = {9, 99, 100, 5, 999, 1000};
        int r = find3digit(x);
        System.out.println(r == -1 ? "No 3-digit number" : ("First 3-digit number = " + r));
    }
}</code></pre></div>`},
{ id:117, title:"Find the median of an array", content:`<div class="concept-box"><h3>30) Find the median of an array.</h3><p><strong>How it works?</strong></p><ul><li>Sort the array first.</li><li>If length is odd, median is the middle element.</li><li>If even, median is the average of the two middle elements.</li></ul></p><div class="code-block"><div class="code-header"><span>Q92.java</span></div><pre><code>class Q92
{
    static float findmedian(int x[])
    {
        // Sort ascending (bubble sort)
        for(int i=0; i&lt;x.length-1; i++)
            for(int j=i+1; j&lt;x.length; j++)
                if(x[i] &gt; x[j])
                {
                    int t = x[i]; x[i] = x[j]; x[j] = t;
                }

        int n = x.length;
        if(n % 2 == 1)
            return x[n/2];
        else
            return (x[n/2 - 1] + x[n/2]) / 2f;
    }
    public static void main(String args[])
    {
        int x[] = {5, 2, 8, 1, 9};
        System.out.println("Median = " + findmedian(x)); // 5
    }
}</code></pre></div>`},
{ id:118, title:"Find the largest value in an array without sorting", content:`<div class="concept-box"><h3>31) Find the largest value in an array without sorting.</h3><p><strong>How it works?</strong></p><ul><li>A single pass keeps a running maximum, starting from the first element.</li><li>O(n) time, O(1) extra space — no sorting needed.</li></ul></p><div class="code-block"><div class="code-header"><span>Q93.java</span></div><pre><code>class Q93
{
    static float findlargestvalueinarray(int x[])
    {
        float max = x[0];
        for(int i=1; i&lt;x.length; i++)
            if(x[i] &gt; max)
                max = x[i];
        return max;
    }
    public static void main(String args[])
    {
        int x[] = {12, 45, 23, 89, 34, 67};
        System.out.println("Largest value (without sorting) = " + findlargestvalueinarray(x)); // 89
    }
}</code></pre></div>`},{ id:119, title:"Find the mode (most frequent value) of an array", content:`<div class="concept-box"><h3>32) Find the mode (most frequent value) of an array.</h3><p><strong>How it works?</strong></p><ul><li>Count occurrences of each value using a HashMap.</li><li>Track the value with the highest count; that is the mode.</li></ul></p><div class="code-block"><div class="code-header"><span>Q94.java</span></div><pre><code>import java.util.HashMap;
import java.util.Map;

class Q94
{
    static float findmode(int x[])
    {
        Map&lt;Integer, Integer&gt; freq = new HashMap&lt;&gt;();
        for(int v : x)
            freq.put(v, freq.getOrDefault(v, 0) + 1);

        int mode = x[0], maxCount = 0;
        for(Map.Entry&lt;Integer, Integer&gt; e : freq.entrySet())
        {
            if(e.getValue() &gt; maxCount)
            {
                maxCount = e.getValue();
                mode = e.getKey();
            }
        }
        return mode;
    }
    public static void main(String args[])
    {
        int x[] = {2, 3, 2, 4, 5, 2, 3};
        System.out.println("Mode = " + findmode(x)); // 2
    }
}</code></pre></div>`},
{ id:120, title:"Find the mean (average) of array elements", content:`<div class="concept-box"><h3>33) Find the mean (average) of array elements.</h3><p><strong>How it works?</strong></p><ul><li>Sum all elements, then divide by the number of elements.</li><li>Use float division to preserve fractional results.</li></ul></p><div class="code-block"><div class="code-header"><span>Q95.java</span></div><pre><code>class Q95
{
    static float findmean(int x[])
    {
        int sum = 0;
        for(int v : x)
            sum += v;
        return (float) sum / x.length;
    }
    public static void main(String args[])
    {
        int x[] = {2, 4, 6, 8, 10};
        System.out.println("Mean = " + findmean(x)); // 6.0
    }
}</code></pre></div>`},
{ id:121, title:"Make every element of a 5x5 matrix zero", content:`<div class="concept-box"><h3>34) Make every element of a 5x5 matrix zero.</h3><p><strong>How it works?</strong></p><ul><li>Nested loops walk through every cell of the 5x5 matrix.</li><li>Each cell is assigned the value 0.</li></ul></p><div class="code-block"><div class="code-header"><span>Q96.java</span></div><pre><code>class Q96
{
    static void makeallelementzero(int x[][])
    {
        for(int i=0; i&lt;x.length; i++)
            for(int j=0; j&lt;x[i].length; j++)
                x[i][j] = 0;
    }
    public static void main(String args[])
    {
        int x[][] = {
            {1,2,3,4,5},
            {6,7,8,9,10},
            {11,12,13,14,15},
            {16,17,18,19,20},
            {21,22,23,24,25}
        };
        makeallelementzero(x);
        System.out.println("Matrix after setting all elements to zero:");
        for(int i=0; i&lt;x.length; i++)
        {
            for(int j=0; j&lt;x[i].length; j++)
                System.out.print(x[i][j] + " ");
            System.out.println();
        }
    }
}</code></pre></div>`},
];