export default  {
'java-basics': {
title: 'Java Basics Required for DSA',
icon: 'fa-code',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=GoXwIVyNvX0" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Intro to Java Programming - Course for Absolute Beginners</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-code" style="color:var(--primary)"></i> Java Basics Required for DSA</h1><span class="badge beginner">Beginner</span></div>

<div class="concept-box">
<h3>Variables and Data Types</h3>
<p>Java is statically typed. Every variable must have a declared type.</p>
<table>
<tr><th>Type</th><th>Size</th><th>Example</th></tr>
<tr><td>int</td><td>4 bytes</td><td>int x = 10;</td></tr>
<tr><td>long</td><td>8 bytes</td><td>long x = 100000L;</td></tr>
<tr><td>float</td><td>4 bytes</td><td>float x = 3.14f;</td></tr>
<tr><td>double</td><td>8 bytes</td><td>double x = 3.14;</td></tr>
<tr><td>char</td><td>2 bytes</td><td>char c = 'A';</td></tr>
<tr><td>boolean</td><td>1 bit</td><td>boolean b = true;</td></tr>
<tr><td>String</td><td>Object</td><td>String s = "hello";</td></tr>
</table>
</div>

<div class="concept-box">
<h3>Operators</h3>
<ul>
<li><strong>Arithmetic:</strong> +, -, *, /, %</li>
<li><strong>Relational:</strong> ==, !=, <, >, <=, >=</li>
<li><strong>Logical:</strong> &&, ||, !</li>
<li><strong>Bitwise:</strong> &, |, ^, ~, <<, >></li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">import</span> java.util.Scanner;

<span class="kw">public class</span> <span class="cls">JavaBasics</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="cmt">// Variables and Data Types</span>
        <span class="kw">int</span> age = <span class="mth">25</span>;
        <span class="kw">double</span> salary = <span class="mth">50000.50</span>;
        <span class="kw">char</span> grade = <span class="mth">'A'</span>;
        <span class="kw">boolean</span> isActive = <span class="mth">true</span>;
        String name = <span class="str">"John"</span>;

        <span class="cmt">// Arithmetic Operators</span>
        <span class="kw">int</span> a = <span class="mth">10</span>, b = <span class="mth">3</span>;
        System.out.println(<span class="str">"Sum: "</span> + (a + b));       <span class="cmt">// 13</span>
        System.out.println(<span class="str">"Diff: "</span> + (a - b));      <span class="cmt">// 7</span>
        System.out.println(<span class="str">"Product: "</span> + (a * b));   <span class="cmt">// 30</span>
        System.out.println(<span class="str">"Quotient: "</span> + (a / b));  <span class="cmt">// 3</span>
        System.out.println(<span class="str">"Remainder: "</span> + (a % b)); <span class="cmt">// 1</span>

        <span class="cmt">// Scanner for input</span>
        Scanner sc = <span class="kw">new</span> Scanner(System.in);
        System.out.print(<span class="str">"Enter a number: "</span>);
        <span class="kw">int</span> num = sc.nextInt();
        System.out.println(<span class="str">"You entered: "</span> + num);
        sc.close();
    }
}</pre>
</div>

<div class="concept-box">
<h3>Control Flow</h3>
<ul>
<li><strong>if/else if/else:</strong> Conditional execution based on boolean expressions</li>
<li><strong>switch:</strong> Multi-way branching based on a single value</li>
<li><strong>for:</strong> Loop with known iteration count</li>
<li><strong>while:</strong> Loop with condition checked before each iteration</li>
<li><strong>do-while:</strong> Loop that executes at least once before condition check</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">ControlFlow</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="cmt">// if-else</span>
        <span class="kw">int</span> num = <span class="mth">15</span>;
        <span class="kw">if</span> (num % <span class="mth">2</span> == <span class="mth">0</span>) {
            System.out.println(<span class="str">"Even"</span>);
        } <span class="kw">else</span> {
            System.out.println(<span class="str">"Odd"</span>);
        }

        <span class="cmt">// switch</span>
        <span class="kw">int</span> day = <span class="mth">3</span>;
        <span class="kw">switch</span> (day) {
            <span class="kw">case</span> <span class="mth">1</span>: System.out.println(<span class="str">"Monday"</span>); <span class="kw">break</span>;
            <span class="kw">case</span> <span class="mth">2</span>: System.out.println(<span class="str">"Tuesday"</span>); <span class="kw">break</span>;
            <span class="kw">case</span> <span class="mth">3</span>: System.out.println(<span class="str">"Wednesday"</span>); <span class="kw">break</span>;
            <span class="kw">default</span>: System.out.println(<span class="str">"Other day"</span>);
        }

        <span class="cmt">// for loop</span>
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i <= <span class="mth">5</span>; i++) {
            System.out.print(i + <span class="str">" "</span>);  <span class="cmt">// 1 2 3 4 5</span>
        }

        <span class="cmt">// while loop</span>
        <span class="kw">int</span> count = <span class="mth">5</span>;
        <span class="kw">while</span> (count > <span class="mth">0</span>) {
            System.out.print(count + <span class="str">" "</span>);  <span class="cmt">// 5 4 3 2 1</span>
            count--;
        }
    }
}</pre>
</div>

<div class="concept-box">
<h3>Methods (Functions)</h3>
<p>Methods encapsulate reusable logic. They can return values and accept parameters.</p>
<ul>
<li><strong>Static methods:</strong> Called on the class, no object needed</li>
<li><strong>Instance methods:</strong> Called on an object</li>
<li><strong>Return type:</strong> Data type of the returned value, void if none</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">MethodsDemo</span> {
    <span class="kw">static int</span> <span class="mth">add</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) {
        <span class="kw">return</span> a + b;
    }

    <span class="kw">static void</span> <span class="mth">printArray</span>(<span class="kw">int</span>[] arr) {
        <span class="kw">for</span> (<span class="kw">int</span> val : arr) {
            System.out.print(val + <span class="str">" "</span>);
        }
        System.out.println();
    }

    <span class="kw">static boolean</span> <span class="mth">isEven</span>(<span class="kw">int</span> n) {
        <span class="kw">return</span> n % <span class="mth">2</span> == <span class="mth">0</span>;
    }

    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        System.out.println(<span class="mth">add</span>(<span class="mth">5</span>, <span class="mth">3</span>));            <span class="cmt">// 8</span>
        <span class="mth">printArray</span>(<span class="kw">new int</span>[]{<span class="mth">1</span>, <span class="mth">2</span>, <span class="mth">3</span>});       <span class="cmt">// 1 2 3</span>
        System.out.println(<span class="mth">isEven</span>(<span class="mth">4</span>));           <span class="cmt">// true</span>
    }
}</pre>
</div>

<div class="concept-box">
<h3>Arrays</h3>
<p>Arrays store fixed-size collections of same-type elements. They are zero-indexed.</p>
<ul>
<li><strong>1D Array:</strong> int[] arr = new int[5];</li>
<li><strong>2D Array:</strong> int[][] matrix = new int[3][3];</li>
<li><strong>Length:</strong> arr.length gives the size</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">ArrayBasics</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="cmt">// Declaration and initialization</span>
        <span class="kw">int</span>[] arr1 = <span class="kw">new int</span>[<span class="mth">5</span>];
        <span class="kw">int</span>[] arr2 = {<span class="mth">10</span>, <span class="mth">20</span>, <span class="mth">30</span>, <span class="mth">40</span>, <span class="mth">50</span>};

        <span class="cmt">// 2D Array</span>
        <span class="kw">int</span>[][] matrix = {
            {<span class="mth">1</span>, <span class="mth">2</span>, <span class="mth">3</span>},
            {<span class="mth">4</span>, <span class="mth">5</span>, <span class="mth">6</span>},
            {<span class="mth">7</span>, <span class="mth">8</span>, <span class="mth">9</span>}
        };

        <span class="cmt">// 1D traversal</span>
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < arr2.length; i++) {
            System.out.print(arr2[i] + <span class="str">" "</span>);
        }

        <span class="cmt">// 2D traversal</span>
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < matrix.length; i++) {
            <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">0</span>; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + <span class="str">" "</span>);
            }
            System.out.println();
        }
    }
}</pre>
</div>

<div class="concept-box">
<h3>String Methods</h3>
<p>Strings in Java are immutable objects. Every modification creates a new String.</p>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">StringBasics</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        String s = <span class="str">"Hello World"</span>;

        System.out.println(s.<span class="mth">length</span>());             <span class="cmt">// 11</span>
        System.out.println(s.<span class="mth">charAt</span>(<span class="mth">0</span>));            <span class="cmt">// H</span>
        System.out.println(s.<span class="mth">substring</span>(<span class="mth">0</span>, <span class="mth">5</span>));     <span class="cmt">// Hello</span>
        System.out.println(s.<span class="mth">substring</span>(<span class="mth">6</span>));        <span class="cmt">// World</span>
        System.out.println(s.<span class="mth">toLowerCase</span>());        <span class="cmt">// hello world</span>
        System.out.println(s.<span class="mth">toUpperCase</span>());        <span class="cmt">// HELLO WORLD</span>
        System.out.println(s.<span class="mth">indexOf</span>(<span class="str">"World"</span>));   <span class="cmt">// 6</span>
        System.out.println(s.<span class="mth">contains</span>(<span class="str">"ell"</span>));    <span class="cmt">// true</span>
        System.out.println(s.<span class="mth">replace</span>(<span class="str">"World"</span>, <span class="str">"Java"</span>)); <span class="cmt">// Hello Java</span>
        System.out.println(s.<span class="mth">trim</span>());              <span class="cmt">// Hello World</span>
        System.out.println(s.<span class="mth">isEmpty</span>());           <span class="cmt">// false</span>
        System.out.println(s.<span class="mth">startsWith</span>(<span class="str">"Hello"</span>)); <span class="cmt">// true</span>
        System.out.println(s.<span class="mth">endsWith</span>(<span class="str">"World"</span>));  <span class="cmt">// true</span>

        <span class="cmt">// Comparison</span>
        String a = <span class="str">"hello"</span>, b = <span class="str">"hello"</span>;
        System.out.println(a.<span class="mth">equals</span>(b));            <span class="cmt">// true</span>
        System.out.println(a.<span class="mth">compareTo</span>(b));         <span class="cmt">// 0</span>

        <span class="cmt">// toCharArray</span>
        <span class="kw">char</span>[] chars = a.<span class="mth">toCharArray</span>();
    }
}</pre>
</div>

<div class="concept-box">
<h3>Classes and Objects</h3>
<p>Java is object-oriented. Classes define blueprints; objects are instances of classes.</p>
<ul>
<li><strong>Constructor:</strong> Special method called when creating an object</li>
<li><strong>this keyword:</strong> Refers to the current object</li>
<li><strong>Methods:</strong> Functions defined inside a class</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">class</span> <span class="cls">Student</span> {
    String name;
    <span class="kw">int</span> rollNo;

    <span class="cls">Student</span>(String name, <span class="kw">int</span> rollNo) {
        <span class="kw">this</span>.name = name;
        <span class="kw">this</span>.rollNo = rollNo;
    }

    <span class="kw">void</span> <span class="mth">display</span>() {
        System.out.println(name + <span class="str">" - "</span> + rollNo);
    }
}

<span class="kw">public class</span> <span class="cls">ObjectsDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        Student s1 = <span class="kw">new</span> Student(<span class="str">"Alice"</span>, <span class="mth">101</span>);
        Student s2 = <span class="kw">new</span> Student(<span class="str">"Bob"</span>, <span class="mth">102</span>);
        s1.<span class="mth">display</span>();  <span class="cmt">// Alice - 101</span>
        s2.<span class="mth">display</span>();  <span class="cmt">// Bob - 102</span>
    }
}</pre>
</div>

<div class="concept-box">
<h3>Recursion Basics</h3>
<p>A method that calls itself. Must have a base case to stop the recursion.</p>
<ul>
<li><strong>Base case:</strong> Condition to stop recursion</li>
<li><strong>Recursive case:</strong> The method calls itself with a smaller input</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">RecursionBasics</span> {
    <span class="kw">static int</span> <span class="mth">factorial</span>(<span class="kw">int</span> n) {
        <span class="kw">if</span> (n <= <span class="mth">1</span>) <span class="kw">return</span> <span class="mth">1</span>;  <span class="cmt">// base case</span>
        <span class="kw">return</span> n * <span class="mth">factorial</span>(n - <span class="mth">1</span>);  <span class="cmt">// recursive case</span>
    }

    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        System.out.println(<span class="mth">factorial</span>(<span class="mth">5</span>));   <span class="cmt">// 120</span>
        System.out.println(<span class="mth">factorial</span>(<span class="mth">0</span>));   <span class="cmt">// 1</span>
        System.out.println(<span class="mth">factorial</span>(<span class="mth">10</span>));  <span class="cmt">// 3628800</span>
    }
}</pre>
</div>`
},
'complexity-analysis': {
title: 'Complexity Analysis',
icon: 'fa-chart-line',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=waPQP2TDOGE" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">The Ultimate Big O Notation Tutorial — Time & Space Complexity</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-chart-line" style="color:var(--primary)"></i> Complexity Analysis</h1><span class="badge beginner">Beginner</span></div>

<div class="concept-box">
<h3>What is Time Complexity?</h3>
<p>Time complexity measures how the runtime of an algorithm grows as input size increases. It is expressed using Big-O notation, focusing on the dominant term and ignoring constants.</p>
</div>

<div class="concept-box">
<h3>Big-O Notation (Upper Bound)</h3>
<p>Describes the worst-case growth rate of an algorithm.</p>
<table>
<tr><th>Notation</th><th>Name</th><th>Example</th></tr>
<tr><td>O(1)</td><td>Constant</td><td>Array index access, HashMap lookup</td></tr>
<tr><td>O(log n)</td><td>Logarithmic</td><td>Binary Search</td></tr>
<tr><td>O(n)</td><td>Linear</td><td>Linear Search, Single loop</td></tr>
<tr><td>O(n log n)</td><td>Linearithmic</td><td>Merge Sort, Quick Sort (avg)</td></tr>
<tr><td>O(n<sup>2</sup>)</td><td>Quadratic</td><td>Bubble Sort, Nested loops</td></tr>
<tr><td>O(n<sup>3</sup>)</td><td>Cubic</td><td>Matrix multiplication</td></tr>
<tr><td>O(2n)</td><td>Exponential</td><td>Recursive Fibonacci, Subsets</td></tr>
<tr><td>O(n!)</td><td>Factorial</td><td>Permutations, Brute force TSP</td></tr>
</table>
</div>

<div class="code-block">
<pre><span class="cmt">// O(1) - Constant Time</span>
<span class="kw">public static int</span> <span class="mth">getFirst</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">return</span> arr[<span class="mth">0</span>];  <span class="cmt">// Always one operation regardless of array size</span>
}

<span class="cmt">// O(n) - Linear Time</span>
<span class="kw">public static int</span> <span class="mth">findMax</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> max = arr[<span class="mth">0</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i < arr.length; i++) {  <span class="cmt">// Iterates n times</span>
        <span class="kw">if</span> (arr[i] > max) max = arr[i];
    }
    <span class="kw">return</span> max;
}

<span class="cmt">// O(log n) - Logarithmic Time</span>
<span class="kw">public static int</span> <span class="mth">binarySearch</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">int</span> low = <span class="mth">0</span>, high = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (low <= high) {  <span class="cmt">// Halves search space each iteration</span>
        <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
        <span class="kw">if</span> (arr[mid] == target) <span class="kw">return</span> mid;
        <span class="kw">else if</span> (arr[mid] < target) low = mid + <span class="mth">1</span>;
        <span class="kw">else</span> high = mid - <span class="mth">1</span>;
    }
    <span class="kw">return</span> -<span class="mth">1</span>;
}

<span class="cmt">// O(n<sup>2</sup>) - Quadratic Time</span>
<span class="kw">public static void</span> <span class="mth">bubbleSort</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < arr.length; i++) {
        <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">0</span>; j < arr.length - i - <span class="mth">1</span>; j++) {
            <span class="kw">if</span> (arr[j] > arr[j + <span class="mth">1</span>]) {
                <span class="kw">int</span> temp = arr[j];
                arr[j] = arr[j + <span class="mth">1</span>];
                arr[j + <span class="mth">1</span>] = temp;
            }
        }
    }
}

<span class="cmt">// O(2^n) - Exponential Time</span>
<span class="kw">public static int</span> <span class="mth">fibonacci</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n <= <span class="mth">1</span>) <span class="kw">return</span> n;  <span class="cmt">// Two recursive calls per call</span>
    <span class="kw">return</span> <span class="mth">fibonacci</span>(n - <span class="mth">1</span>) + <span class="mth">fibonacci</span>(n - <span class="mth">2</span>);
}</pre>
</div>

<div class="concept-box">
<h3>Big-Omega (Lower Bound)</h3>
<p>Describes the best-case growth rate. For linear search, the best case is finding the element at the first position, giving O(1).</p>
</div>

<div class="concept-box">
<h3>Big-Theta (Tight Bound)</h3>
<p>Describes the exact growth rate when upper and lower bounds match. Merge Sort is T(n log n) in all cases.</p>
</div>

<div class="concept-box">
<h3>Best, Average, and Worst Case</h3>
<table>
<tr><th>Algorithm</th><th>Best</th><th>Average</th><th>Worst</th></tr>
<tr><td>Bubble Sort</td><td>O(n)</td><td>T(n<sup>2</sup>)</td><td>O(n<sup>2</sup>)</td></tr>
<tr><td>Selection Sort</td><td>O(n<sup>2</sup>)</td><td>T(n<sup>2</sup>)</td><td>O(n<sup>2</sup>)</td></tr>
<tr><td>Binary Search</td><td>O(1)</td><td>T(log n)</td><td>O(log n)</td></tr>
<tr><td>Quick Sort</td><td>O(n log n)</td><td>T(n log n)</td><td>O(n<sup>2</sup>)</td></tr>
<tr><td>Merge Sort</td><td>O(n log n)</td><td>T(n log n)</td><td>O(n log n)</td></tr>
<tr><td>Linear Search</td><td>O(1)</td><td>T(n)</td><td>O(n)</td></tr>
</table>
</div>

<div class="concept-box">
<h3>Space Complexity</h3>
<p>Measures how much extra memory an algorithm uses relative to input size.</p>
<ul>
<li><strong>O(1):</strong> In-place algorithms (iterative sum, swap)</li>
<li><strong>O(n):</strong> Creating a new array, hash map of input size</li>
<li><strong>O(log n):</strong> Binary search recursion (call stack)</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">SpaceComplexity</span> {
    <span class="cmt">// O(1) space - iterative approach</span>
    <span class="kw">static int</span> <span class="mth">sumIterative</span>(<span class="kw">int</span> n) {
        <span class="kw">int</span> sum = <span class="mth">0</span>;
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i <= n; i++) sum += i;
        <span class="kw">return</span> sum;
    }

    <span class="cmt">// O(n) space - recursive approach (call stack)</span>
    <span class="kw">static int</span> <span class="mth">sumRecursive</span>(<span class="kw">int</span> n) {
        <span class="kw">if</span> (n == <span class="mth">0</span>) <span class="kw">return</span> <span class="mth">0</span>;
        <span class="kw">return</span> n + <span class="mth">sumRecursive</span>(n - <span class="mth">1</span>);  <span class="cmt">// n stack frames</span>
    }

    <span class="cmt">// O(n) space - creating auxiliary array</span>
    <span class="kw">static int</span>[] <span class="mth">prefixSum</span>(<span class="kw">int</span>[] arr) {
        <span class="kw">int</span>[] prefix = <span class="kw">new int</span>[arr.length + <span class="mth">1</span>];
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < arr.length; i++) {
            prefix[i + <span class="mth">1</span>] = prefix[i] + arr[i];
        }
        <span class="kw">return</span> prefix;
    }

    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        System.out.println(<span class="mth">sumIterative</span>(<span class="mth">100</span>));    <span class="cmt">// 5050</span>
        System.out.println(<span class="mth">sumRecursive</span>(<span class="mth">100</span>));    <span class="cmt">// 5050</span>
    }
}</pre>
</div>`
},

'arrays': {
title: 'Arrays',
icon: 'fa-th-list',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=ajNs-dylWIM" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Introduction to Arrays | Declaration, Initialization, Traversal | Java</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-th-list" style="color:var(--primary)"></i> Arrays</h1><span class="badge beginner">Beginner</span></div>

<div class="concept-box">
<h3>Declaration and Initialization</h3>
<p>Arrays are fixed-size, zero-indexed collections of elements of the same type. Once created, the size cannot change.</p>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">ArrayDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="cmt">// Method 1: Declare then allocate</span>
        <span class="kw">int</span>[] arr1 = <span class="kw">new int</span>[<span class="mth">5</span>];

        <span class="cmt">// Method 2: Initialize with values</span>
        <span class="kw">int</span>[] arr2 = {<span class="mth">10</span>, <span class="mth">20</span>, <span class="mth">30</span>, <span class="mth">40</span>, <span class="mth">50</span>};

        <span class="cmt">// Method 3: Combined</span>
        <span class="kw">int</span>[] arr3 = <span class="kw">new int</span>[]{<span class="mth">1</span>, <span class="mth">2</span>, <span class="mth">3</span>, <span class="mth">4</span>, <span class="mth">5</span>};

        System.out.println(arr2.length);  <span class="cmt">// 5</span>
        System.out.println(arr2[<span class="mth">0</span>]);      <span class="cmt">// 10</span>
        System.out.println(arr2[<span class="mth">4</span>]);      <span class="cmt">// 50</span>
    }
}</pre>
</div>

<div class="concept-box">
<h3>Traversal</h3>
<p>Multiple ways to iterate through array elements.</p>
<ul>
<li><strong>For loop:</strong> Classic index-based traversal</li>
<li><strong>Enhanced for loop:</strong> For-each style (no index access)</li>
<li><strong>While loop:</strong> Manual index increment</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">Traversal</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="kw">int</span>[] arr = {<span class="mth">1</span>, <span class="mth">2</span>, <span class="mth">3</span>, <span class="mth">4</span>, <span class="mth">5</span>};

        <span class="cmt">// For loop</span>
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < arr.length; i++) {
            System.out.print(arr[i] + <span class="str">" "</span>);
        }
        System.out.println();

        <span class="cmt">// Enhanced for loop</span>
        <span class="kw">for</span> (<span class="kw">int</span> val : arr) {
            System.out.print(val + <span class="str">" "</span>);
        }
        System.out.println();

        <span class="cmt">// While loop</span>
        <span class="kw">int</span> i = <span class="mth">0</span>;
        <span class="kw">while</span> (i < arr.length) {
            System.out.print(arr[i] + <span class="str">" "</span>);
            i++;
        }
    }
}</pre>
</div>

<div class="concept-box">
<h3>Time Complexity of Array Operations</h3>
<table>
<tr><th>Operation</th><th>Time Complexity</th></tr>
<tr><td>Access by index</td><td>O(1)</td></tr>
<tr><td>Search (unsorted)</td><td>O(n)</td></tr>
<tr><td>Search (sorted)</td><td>O(log n)</td></tr>
<tr><td>Insert at end</td><td>O(1)</td></tr>
<tr><td>Insert at position</td><td>O(n)</td></tr>
<tr><td>Delete at position</td><td>O(n)</td></tr>
</table>
</div>

<div class="code-block">
<pre><span class="cmt">// Insert at Position</span>
<span class="kw">public static int</span>[] <span class="mth">insert</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> pos, <span class="kw">int</span> val) {
    <span class="kw">int</span>[] newArr = <span class="kw">new int</span>[arr.length + <span class="mth">1</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < pos; i++) newArr[i] = arr[i];
    newArr[pos] = val;
    <span class="kw">for</span> (<span class="kw">int</span> i = pos; i < arr.length; i++) newArr[i + <span class="mth">1</span>] = arr[i];
    <span class="kw">return</span> newArr;
}

<span class="cmt">// Delete at Position</span>
<span class="kw">public static int</span>[] <span class="mth">delete</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> pos) {
    <span class="kw">int</span>[] newArr = <span class="kw">new int</span>[arr.length - <span class="mth">1</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < pos; i++) newArr[i] = arr[i];
    <span class="kw">for</span> (<span class="kw">int</span> i = pos + <span class="mth">1</span>; i < arr.length; i++) newArr[i - <span class="mth">1</span>] = arr[i];
    <span class="kw">return</span> newArr;
}</pre>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">ArrayStats</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="kw">int</span>[] arr = {<span class="mth">3</span>, <span class="mth">7</span>, <span class="mth">1</span>, <span class="mth">9</span>, <span class="mth">4</span>, <span class="mth">6</span>};

        <span class="cmt">// Find Max, Min, Sum, Average</span>
        <span class="kw">int</span> max = arr[<span class="mth">0</span>], min = arr[<span class="mth">0</span>], sum = <span class="mth">0</span>;
        <span class="kw">for</span> (<span class="kw">int</span> val : arr) {
            <span class="kw">if</span> (val > max) max = val;
            <span class="kw">if</span> (val < min) min = val;
            sum += val;
        }
        System.out.println(<span class="str">"Max: "</span> + max);              <span class="cmt">// 9</span>
        System.out.println(<span class="str">"Min: "</span> + min);              <span class="cmt">// 1</span>
        System.out.println(<span class="str">"Sum: "</span> + sum);              <span class="cmt">// 30</span>
        System.out.println(<span class="str">"Avg: "</span> + (<span class="kw">double</span>)sum / arr.length); <span class="cmt">// 5.0</span>

        <span class="cmt">// Count Even and Odd</span>
        <span class="kw">int</span> even = <span class="mth">0</span>, odd = <span class="mth">0</span>;
        <span class="kw">for</span> (<span class="kw">int</span> val : arr) {
            <span class="kw">if</span> (val % <span class="mth">2</span> == <span class="mth">0</span>) even++;
            <span class="kw">else</span> odd++;
        }
        System.out.println(<span class="str">"Even: "</span> + even + <span class="str">", Odd: "</span> + odd);
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Linear Search</span>
<span class="kw">public static int</span> <span class="mth">linearSearch</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < arr.length; i++) {
        <span class="kw">if</span> (arr[i] == target) <span class="kw">return</span> i;
    }
    <span class="kw">return</span> -<span class="mth">1</span>;
}

<span class="cmt">// Binary Search (requires sorted array)</span>
<span class="kw">public static int</span> <span class="mth">binarySearch</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">int</span> low = <span class="mth">0</span>, high = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (low <= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
        <span class="kw">if</span> (arr[mid] == target) <span class="kw">return</span> mid;
        <span class="kw">else if</span> (arr[mid] < target) low = mid + <span class="mth">1</span>;
        <span class="kw">else</span> high = mid - <span class="mth">1</span>;
    }
    <span class="kw">return</span> -<span class="mth">1</span>;
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Reverse Array</span>
<span class="kw">public static void</span> <span class="mth">reverse</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> left = <span class="mth">0</span>, right = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (left < right) {
        <span class="kw">int</span> temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

<span class="cmt">// Copy Array</span>
<span class="kw">public static int</span>[] <span class="mth">copyArray</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">return</span> Arrays.copyOf(arr, arr.length);
}

<span class="cmt">// Compare Arrays</span>
<span class="kw">public static boolean</span> <span class="mth">compare</span>(<span class="kw">int</span>[] a, <span class="kw">int</span>[] b) {
    <span class="kw">return</span> Arrays.equals(a, b);
}</pre>
</div>`
},

'array-techniques': {
title: 'Array Techniques',
icon: 'fa-lightbulb',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=xwI5OBEnsZU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Sliding Window & Two Pointers — Java DSA</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-lightbulb" style="color:var(--primary)"></i> Array Techniques</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>Two Pointer Technique</h3>
<p>Use two pointers moving towards each other or in the same direction to solve problems efficiently in O(n) time.</p>
<ul>
<li><strong>Opposite direction:</strong> Sorted array problems (Two Sum, Palindrome check)</li>
<li><strong>Same direction:</strong> Partitioning problems (Move Zeroes, Remove Duplicates)</li>
</ul>
</div>

<div class="code-block">
<pre><span class="cmt">// Two Sum (Sorted Array) - Two Pointer</span>
<span class="kw">public static int</span>[] <span class="mth">twoSum</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">int</span> left = <span class="mth">0</span>, right = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (left < right) {
        <span class="kw">int</span> sum = arr[left] + arr[right];
        <span class="kw">if</span> (sum == target) <span class="kw">return new int</span>{left, right};
        <span class="kw">else if</span> (sum < target) left++;
        <span class="kw">else</span> right--;
    }
    <span class="kw">return new int</span>[]{};
}

<span class="cmt">// Move Zeroes to end</span>
<span class="kw">public static void</span> <span class="mth">moveZeroes</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> insertPos = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < arr.length; i++) {
        <span class="kw">if</span> (arr[i] != <span class="mth">0</span>) {
            <span class="kw">int</span> temp = arr[insertPos];
            arr[insertPos] = arr[i];
            arr[i] = temp;
            insertPos++;
        }
    }
}</pre>
</div>

<div class="concept-box">
<h3>Sliding Window</h3>
<p>Maintain a window of fixed or variable size that slides over the array to solve subarray problems efficiently.</p>
<ul>
<li><strong>Fixed size window:</strong> Maximum sum of k elements</li>
<li><strong>Variable size window:</strong> Longest substring with condition</li>
</ul>
</div>

<div class="code-block">
<pre><span class="cmt">// Maximum Sum Subarray of size k - Fixed Window</span>
<span class="kw">public static int</span> <span class="mth">maxSumWindow</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> k) {
    <span class="kw">int</span> windowSum = <span class="mth">0</span>, maxSum = Integer.MIN_VALUE;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < k; i++) windowSum += arr[i];
    maxSum = windowSum;

    <span class="kw">for</span> (<span class="kw">int</span> i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];  <span class="cmt">// slide the window</span>
        maxSum = Math.max(maxSum, windowSum);
    }
    <span class="kw">return</span> maxSum;
}

<span class="cmt">// Longest Substring Without Repeating - Variable Window</span>
<span class="kw">public static int</span> <span class="mth">lengthOfLongestSubstring</span>(String s) {
    <span class="kw">int</span>[] freq = <span class="kw">new int</span>[<span class="mth">128</span>];
    <span class="kw">int</span> left = <span class="mth">0</span>, maxLen = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> right = <span class="mth">0</span>; right < s.length(); right++) {
        freq[s.charAt(right)]++;
        <span class="kw">while</span> (freq[s.charAt(right)] > <span class="mth">1</span>) {
            freq[s.charAt(left)]--;
            left++;
        }
        maxLen = Math.max(maxLen, right - left + <span class="mth">1</span>);
    }
    <span class="kw">return</span> maxLen;
}</pre>
</div>

<div class="concept-box">
<h3>Kadane's Algorithm</h3>
<p>Finds maximum subarray sum in O(n) time using dynamic programming. Track the best sum ending at each position.</p>
</div>

<div class="code-block">
<pre><span class="cmt">// Kadane's Algorithm - Maximum Subarray Sum</span>
<span class="kw">public static int</span> <span class="mth">maxSubarraySum</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> maxSum = arr[<span class="mth">0</span>], currentSum = arr[<span class="mth">0</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    <span class="kw">return</span> maxSum;
}

<span class="cmt">// Maximum Subarray Product</span>
<span class="kw">public static int</span> <span class="mth">maxProduct</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> maxProd = arr[<span class="mth">0</span>], minProd = arr[<span class="mth">0</span>], result = arr[<span class="mth">0</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i < arr.length; i++) {
        <span class="kw">if</span> (arr[i] < <span class="mth">0</span>) {
            <span class="kw">int</span> temp = maxProd;
            maxProd = minProd;
            minProd = temp;
        }
        maxProd = Math.max(arr[i], maxProd * arr[i]);
        minProd = Math.min(arr[i], minProd * arr[i]);
        result = Math.max(result, maxProd);
    }
    <span class="kw">return</span> result;
}</pre>
</div>

<div class="concept-box">
<h3>Prefix Sum</h3>
<p>Precompute cumulative sums to answer range sum queries in O(1) after O(n) preprocessing.</p>
</div>

<div class="code-block">
<pre><span class="cmt">// Prefix Sum Array</span>
<span class="kw">public static int</span>[] <span class="mth">prefixSum</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span>[] prefix = <span class="kw">new int</span>[arr.length + <span class="mth">1</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < arr.length; i++) {
        prefix[i + <span class="mth">1</span>] = prefix[i] + arr[i];
    }
    <span class="kw">return</span> prefix;
}
<span class="cmt">// Range sum query: sum(arr[l..r]) = prefix[r+1] - prefix[l]</span></pre>
</div>

<div class="concept-box">
<h3>Dutch National Flag Algorithm</h3>
<p>Sort an array of 0s, 1s, and 2s in a single pass using three pointers (low, mid, high).</p>
</div>

<div class="code-block">
<pre><span class="cmt">// Dutch National Flag - Sort 0s, 1s, 2s in-place</span>
<span class="kw">public static void</span> <span class="mth">sortColors</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> low = <span class="mth">0</span>, mid = <span class="mth">0</span>, high = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (mid <= high) {
        <span class="kw">if</span> (arr[mid] == <span class="mth">0</span>) {
            <span class="kw">int</span> temp = arr[low]; arr[low] = arr[mid]; arr[mid] = temp;
            low++; mid++;
        } <span class="kw">else if</span> (arr[mid] == <span class="mth">1</span>) {
            mid++;
        } <span class="kw">else</span> {
            <span class="kw">int</span> temp = arr[mid]; arr[mid] = arr[high]; arr[high] = temp;
            high--;
        }
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Remove Duplicates from Sorted Array</span>
<span class="kw">public static int</span> <span class="mth">removeDuplicates</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">if</span> (arr.length == <span class="mth">0</span>) <span class="kw">return</span> <span class="mth">0</span>;
    <span class="kw">int</span> insertPos = <span class="mth">1</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i < arr.length; i++) {
        <span class="kw">if</span> (arr[i] != arr[i - <span class="mth">1</span>]) {
            arr[insertPos++] = arr[i];
        }
    }
    <span class="kw">return</span> insertPos;
}

<span class="cmt">// Merge Two Sorted Arrays</span>
<span class="kw">public static int</span>[] <span class="mth">mergeSorted</span>(<span class="kw">int</span>[] a, <span class="kw">int</span>[] b) {
    <span class="kw">int</span>[] result = <span class="kw">new int</span>[a.length + b.length];
    <span class="kw">int</span> i = <span class="mth">0</span>, j = <span class="mth">0</span>, k = <span class="mth">0</span>;
    <span class="kw">while</span> (i < a.length && j < b.length) {
        <span class="kw">if</span> (a[i] <= b[j]) result[k++] = a[i++];
        <span class="kw">else</span> result[k++] = b[j++];
    }
    <span class="kw">while</span> (i < a.length) result[k++] = a[i++];
    <span class="kw">while</span> (j < b.length) result[k++] = b[j++];
    <span class="kw">return</span> result;
}

<span class="cmt">// Rotate Array by k positions</span>
<span class="kw">public static void</span> <span class="mth">rotate</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> k) {
    <span class="kw">int</span> n = arr.length;
    k = k % n;
    <span class="mth">reverse</span>(arr, <span class="mth">0</span>, n - <span class="mth">1</span>);
    <span class="mth">reverse</span>(arr, <span class="mth">0</span>, k - <span class="mth">1</span>);
    <span class="mth">reverse</span>(arr, k, n - <span class="mth">1</span>);
}

<span class="kw">static void</span> <span class="mth">reverse</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> start, <span class="kw">int</span> end) {
    <span class="kw">while</span> (start < end) {
        <span class="kw">int</span> temp = arr[start]; arr[start] = arr[end]; arr[end] = temp;
        start++; end--;
    }
}

<span class="cmt">// Best Time to Buy and Sell Stock</span>
<span class="kw">public static int</span> <span class="mth">maxProfit</span>(<span class="kw">int</span>[] prices) {
    <span class="kw">int</span> minPrice = Integer.MAX_VALUE, maxProfit = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> price : prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    <span class="kw">return</span> maxProfit;
}</pre>
</div>`
},

'strings': {
title: 'Strings',
icon: 'fa-font',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=zL1DPZ0Ovlo" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Strings in Java | Complete Course — String, StringBuilder, StringBuffer</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-font" style="color:var(--primary)"></i> Strings</h1><span class="badge beginner">Beginner</span></div>

<div class="concept-box">
<h3>String Creation and Methods</h3>
<p>Strings are immutable in Java. Every modification creates a new String object on the heap.</p>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">StringMethods</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        String s = <span class="str">"Hello World"</span>;

        System.out.println(s.<span class="mth">length</span>());            <span class="cmt">// 11</span>
        System.out.println(s.<span class="mth">charAt</span>(<span class="mth">0</span>));           <span class="cmt">// H</span>
        System.out.println(s.<span class="mth">substring</span>(<span class="mth">0</span>, <span class="mth">5</span>));    <span class="cmt">// Hello</span>
        System.out.println(s.<span class="mth">substring</span>(<span class="mth">6</span>));       <span class="cmt">// World</span>
        System.out.println(s.<span class="mth">toLowerCase</span>());       <span class="cmt">// hello world</span>
        System.out.println(s.<span class="mth">toUpperCase</span>());       <span class="cmt">// HELLO WORLD</span>
        System.out.println(s.<span class="mth">indexOf</span>(<span class="str">"World"</span>));  <span class="cmt">// 6</span>
        System.out.println(s.<span class="mth">contains</span>(<span class="str">"ell"</span>));   <span class="cmt">// true</span>
        System.out.println(s.<span class="mth">replace</span>(<span class="str">"World"</span>, <span class="str">"Java"</span>));
        System.out.println(s.<span class="mth">trim</span>());
        System.out.println(s.<span class="mth">isEmpty</span>());           <span class="cmt">// false</span>
        System.out.println(s.<span class="mth">startsWith</span>(<span class="str">"Hello"</span>)); <span class="cmt">// true</span>
        System.out.println(s.<span class="mth">endsWith</span>(<span class="str">"World"</span>));  <span class="cmt">// true</span>
        System.out.println(s.<span class="mth">charAt</span>(s.length() - <span class="mth">1</span>)); <span class="cmt">// d</span>
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// String Comparison</span>
String a = <span class="str">"Hello"</span>, b = <span class="str">"Hello"</span>, c = <span class="str">"hello"</span>;

System.out.println(a.<span class="mth">equals</span>(b));              <span class="cmt">// true (content)</span>
System.out.println(a.<span class="mth">equals</span>(c));              <span class="cmt">// false</span>
System.out.println(a.<span class="mth">equalsIgnoreCase</span>(c));    <span class="cmt">// true</span>
System.out.println(a.<span class="mth">compareTo</span>(b));           <span class="cmt">// 0 (lexicographic)</span>
System.out.println(a.<span class="mth">compareTo</span>(c));           <span class="cmt">// negative (H < h)</span>

<span class="cmt">// toCharArray()</span>
<span class="kw">char</span>[] chars = a.<span class="mth">toCharArray</span>();  <span class="cmt">// {'H','e','l','l','o'}</span>
String fromChars = <span class="kw">new</span> String(<span class="kw">new char</span>[]{<span class="str">'J'</span>, <span class="str">'a'</span>, <span class="str">'v'</span>, <span class="str">'a'</span>});</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Reverse String</span>
<span class="kw">public static</span> String <span class="mth">reverseString</span>(String s) {
    <span class="kw">char</span>[] arr = s.<span class="mth">toCharArray</span>();
    <span class="kw">int</span> left = <span class="mth">0</span>, right = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (left < right) {
        <span class="kw">char</span> temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++; right--;
    }
    <span class="kw">return new</span> String(arr);
}

<span class="cmt">// Check Palindrome</span>
<span class="kw">public static boolean</span> <span class="mth">isPalindrome</span>(String s) {
    <span class="kw">int</span> left = <span class="mth">0</span>, right = s.length() - <span class="mth">1</span>;
    <span class="kw">while</span> (left < right) {
        <span class="kw">if</span> (s.<span class="mth">charAt</span>(left) != s.<span class="mth">charAt</span>(right)) <span class="kw">return false</span>;
        left++; right--;
    }
    <span class="kw">return true</span>;
}

<span class="cmt">// Count Vowels and Consonants</span>
<span class="kw">public static void</span> <span class="mth">countVC</span>(String s) {
    <span class="kw">int</span> vowels = <span class="mth">0</span>, consonants = <span class="mth">0</span>;
    s = s.toLowerCase();
    <span class="kw">for</span> (<span class="kw">char</span> c : s.toCharArray()) {
        <span class="kw">if</span> (<span class="str">"aeiou"</span>.<span class="mth">indexOf</span>(c) != -<span class="mth">1</span>) vowels++;
        <span class="kw">else if</span> (Character.isLetter(c)) consonants++;
    }
    System.out.println(<span class="str">"Vowels: "</span> + vowels + <span class="str">", Consonants: "</span> + consonants);
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Check Anagram</span>
<span class="kw">public static boolean</span> <span class="mth">isAnagram</span>(String s1, String s2) {
    <span class="kw">if</span> (s1.length() != s2.length()) <span class="kw">return false</span>;
    <span class="kw">int</span>[] freq = <span class="kw">new int</span>[<span class="mth">26</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < s1.length(); i++) {
        freq[s1.<span class="mth">charAt</span>(i) - <span class="str">'a'</span>]++;
        freq[s2.<span class="mth">charAt</span>(i) - <span class="str">'a'</span>]--;
    }
    <span class="kw">for</span> (<span class="kw">int</span> f : freq) {
        <span class="kw">if</span> (f != <span class="mth">0</span>) <span class="kw">return false</span>;
    }
    <span class="kw">return true</span>;
}

<span class="cmt">// Remove Duplicates from String</span>
<span class="kw">public static</span> String <span class="mth">removeDuplicates</span>(String s) {
    StringBuilder sb = <span class="kw">new</span> StringBuilder();
    <span class="kw">boolean</span>[] seen = <span class="kw">new boolean</span>[<span class="mth">26</span>];
    <span class="kw">for</span> (<span class="kw">char</span> c : s.toCharArray()) {
        <span class="kw">if</span> (!seen[c - <span class="str">'a'</span>]) {
            seen[c - <span class="str">'a'</span>] = <span class="kw">true</span>;
            sb.append(c);
        }
    }
    <span class="kw">return</span> sb.toString();
}

<span class="cmt">// Character Frequency Map</span>
<span class="kw">public static void</span> <span class="mth">charFrequency</span>(String s) {
    <span class="kw">int</span>[] freq = <span class="kw">new int</span>[<span class="mth">26</span>];
    <span class="kw">for</span> (<span class="kw">char</span> c : s.toCharArray()) freq[c - <span class="str">'a'</span>]++;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < <span class="mth">26</span>; i++) {
        <span class="kw">if</span> (freq[i] > <span class="mth">0</span>) System.out.println((<span class="kw">char</span>)(i + <span class="str">'a'</span>) + <span class="str">": "</span> + freq[i]);
    }
}</pre>
</div>`
},

'string-builder': {
title: 'StringBuilder',
icon: 'fa-pen',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=L_fK32aiuHw" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">StringBuilder Introduction in Java | Mutable String | not synchronized</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-pen" style="color:var(--primary)"></i> StringBuilder</h1><span class="badge beginner">Beginner</span></div>

<div class="concept-box">
<h3>Why StringBuilder?</h3>
<p>String is immutable, so every concatenation creates a new object. StringBuilder is mutable and much more efficient for building strings.</p>
<ul>
<li><strong>String concatenation in loop:</strong> O(n<sup>2</sup>) due to object creation</li>
<li><strong>StringBuilder in loop:</strong> O(n) with amortized appending</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">StringBuilderDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="cmt">// Slow approach - creates many objects</span>
        String slow = <span class="str">""</span>;
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < <span class="mth">5</span>; i++) slow += <span class="str">"a"</span>;

        <span class="cmt">// Fast approach - single mutable object</span>
        StringBuilder fast = <span class="kw">new</span> StringBuilder();
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < <span class="mth">5</span>; i++) fast.append(<span class="str">"a"</span>);
        System.out.println(fast.toString());  <span class="cmt">// "aaaaa"</span>
    }
}</pre>
</div>

<div class="concept-box">
<h3>Common Methods</h3>
<table>
<tr><th>Method</th><th>Description</th><th>Example</th></tr>
<tr><td>append()</td><td>Add at end</td><td>sb.append("hello")</td></tr>
<tr><td>insert()</td><td>Insert at index</td><td>sb.insert(0, "hi")</td></tr>
<tr><td>delete()</td><td>Delete range [start, end)</td><td>sb.delete(0, 2)</td></tr>
<tr><td>deleteCharAt()</td><td>Delete single char</td><td>sb.deleteCharAt(0)</td></tr>
<tr><td>reverse()</td><td>Reverse entire string</td><td>sb.reverse()</td></tr>
<tr><td>setCharAt()</td><td>Replace char at index</td><td>sb.setCharAt(0, 'X')</td></tr>
<tr><td>replace()</td><td>Replace range</td><td>sb.replace(0, 2, "XY")</td></tr>
<tr><td>charAt()</td><td>Get char at index</td><td>sb.charAt(0)</td></tr>
<tr><td>length()</td><td>Get length</td><td>sb.length()</td></tr>
<tr><td>substring()</td><td>Get substring</td><td>sb.substring(0, 5)</td></tr>
</table>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">SBMethods</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        StringBuilder sb = <span class="kw">new</span> StringBuilder(<span class="str">"Hello"</span>);

        sb.append(<span class="str">" World"</span>);          <span class="cmt">// "Hello World"</span>
        sb.insert(<span class="mth">5</span>, <span class="str">","</span>);           <span class="cmt">// "Hello, World"</span>
        sb.delete(<span class="mth">5</span>, <span class="mth">6</span>);            <span class="cmt">// "Hello World"</span>
        sb.reverse();                <span class="cmt">// "dlroW olleH"</span>
        sb.reverse();                <span class="cmt">// "Hello World"</span>
        sb.setCharAt(<span class="mth">0</span>, <span class="str">'h'</span>);       <span class="cmt">// "hello World"</span>
        sb.replace(<span class="mth">6</span>, <span class="mth">11</span>, <span class="str">"Java"</span>); <span class="cmt">// "hello Java"</span>

        System.out.println(sb.toString());
        System.out.println(sb.length());       <span class="cmt">// 10</span>
        System.out.println(sb.charAt(<span class="mth">5</span>));      <span class="cmt">// J</span>
        System.out.println(sb.substring(<span class="mth">6</span>));  <span class="cmt">// Java</span>
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Reverse a String using StringBuilder</span>
<span class="kw">public static</span> String <span class="mth">reverse</span>(String s) {
    <span class="kw">return new</span> StringBuilder(s).reverse().toString();
}

<span class="cmt">// Build string from array with delimiter</span>
<span class="kw">public static</span> String <span class="mth">joinStrings</span>(String[] arr, String delimiter) {
    StringBuilder sb = <span class="kw">new</span> StringBuilder();
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < arr.length; i++) {
        sb.append(arr[i]);
        <span class="kw">if</span> (i < arr.length - <span class="mth">1</span>) sb.append(delimiter);
    }
    <span class="kw">return</span> sb.toString();
}

<span class="cmt">// Convert integer to string manually</span>
<span class="kw">public static</span> String <span class="mth">intToString</span>(<span class="kw">int</span> num) {
    <span class="kw">if</span> (num == <span class="mth">0</span>) <span class="kw">return</span> <span class="str">"0"</span>;
    StringBuilder sb = <span class="kw">new</span> StringBuilder();
    <span class="kw">boolean</span> negative = num < <span class="mth">0</span>;
    <span class="kw">if</span> (negative) num = -num;
    <span class="kw">while</span> (num > <span class="mth">0</span>) {
        sb.append(num % <span class="mth">10</span>);
        num /= <span class="mth">10</span>;
    }
    <span class="kw">if</span> (negative) sb.append(<span class="str">'-'</span>);
    <span class="kw">return</span> sb.reverse().toString();
}</pre>
</div>`
},
'sorting': {
title: 'Sorting Algorithms',
icon: 'fa-sort',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=xwI5OBEnsZU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Sorting Algorithms Full Course — Java DSA</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-sort" style="color:var(--primary)"></i> Sorting Algorithms</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>Sorting Algorithm Comparison</h3>
<table>
<tr><th>Algorithm</th><th>Best</th><th>Average</th><th>Worst</th><th>Space</th><th>Stable</th></tr>
<tr><td>Bubble Sort</td><td>O(n)</td><td>T(n<sup>2</sup>)</td><td>O(n<sup>2</sup>)</td><td>O(1)</td><td>Yes</td></tr>
<tr><td>Selection Sort</td><td>O(n<sup>2</sup>)</td><td>T(n<sup>2</sup>)</td><td>O(n<sup>2</sup>)</td><td>O(1)</td><td>No</td></tr>
<tr><td>Insertion Sort</td><td>O(n)</td><td>T(n<sup>2</sup>)</td><td>O(n<sup>2</sup>)</td><td>O(1)</td><td>Yes</td></tr>
<tr><td>Merge Sort</td><td>O(n log n)</td><td>T(n log n)</td><td>O(n log n)</td><td>O(n)</td><td>Yes</td></tr>
<tr><td>Quick Sort</td><td>O(n log n)</td><td>T(n log n)</td><td>O(n<sup>2</sup>)</td><td>O(log n)</td><td>No</td></tr>
<tr><td>Heap Sort</td><td>O(n log n)</td><td>T(n log n)</td><td>O(n log n)</td><td>O(1)</td><td>No</td></tr>
<tr><td>Counting Sort</td><td>O(n+k)</td><td>T(n+k)</td><td>O(n+k)</td><td>O(k)</td><td>Yes</td></tr>
<tr><td>Radix Sort</td><td>O(nk)</td><td>T(nk)</td><td>O(nk)</td><td>O(n+k)</td><td>Yes</td></tr>
</table>
</div>

<div class="code-block">
<pre><span class="cmt">// Bubble Sort with Optimization</span>
<span class="kw">public static void</span> <span class="mth">bubbleSort</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> n = arr.length;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n - <span class="mth">1</span>; i++) {
        <span class="kw">boolean</span> swapped = <span class="kw">false</span>;
        <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">0</span>; j < n - i - <span class="mth">1</span>; j++) {
            <span class="kw">if</span> (arr[j] > arr[j + <span class="mth">1</span>]) {
                <span class="kw">int</span> temp = arr[j];
                arr[j] = arr[j + <span class="mth">1</span>];
                arr[j + <span class="mth">1</span>] = temp;
                swapped = <span class="kw">true</span>;
            }
        }
        <span class="kw">if</span> (!swapped) <span class="kw">break</span>;  <span class="cmt">// Already sorted</span>
    }
}

<span class="cmt">// Selection Sort</span>
<span class="kw">public static void</span> <span class="mth">selectionSort</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> n = arr.length;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n - <span class="mth">1</span>; i++) {
        <span class="kw">int</span> minIdx = i;
        <span class="kw">for</span> (<span class="kw">int</span> j = i + <span class="mth">1</span>; j < n; j++) {
            <span class="kw">if</span> (arr[j] < arr[minIdx]) minIdx = j;
        }
        <span class="kw">int</span> temp = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = temp;
    }
}

<span class="cmt">// Insertion Sort</span>
<span class="kw">public static void</span> <span class="mth">insertionSort</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i < arr.length; i++) {
        <span class="kw">int</span> key = arr[i];
        <span class="kw">int</span> j = i - <span class="mth">1</span>;
        <span class="kw">while</span> (j >= <span class="mth">0</span> && arr[j] > key) {
            arr[j + <span class="mth">1</span>] = arr[j];
            j--;
        }
        arr[j + <span class="mth">1</span>] = key;
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Merge Sort</span>
<span class="kw">public static void</span> <span class="mth">mergeSort</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> left, <span class="kw">int</span> right) {
    <span class="kw">if</span> (left < right) {
        <span class="kw">int</span> mid = left + (right - left) / <span class="mth">2</span>;
        <span class="mth">mergeSort</span>(arr, left, mid);
        <span class="mth">mergeSort</span>(arr, mid + <span class="mth">1</span>, right);
        <span class="mth">merge</span>(arr, left, mid, right);
    }
}

<span class="kw">static void</span> <span class="mth">merge</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> left, <span class="kw">int</span> mid, <span class="kw">int</span> right) {
    <span class="kw">int</span>[] temp = <span class="kw">new int</span>[right - left + <span class="mth">1</span>];
    <span class="kw">int</span> i = left, j = mid + <span class="mth">1</span>, k = <span class="mth">0</span>;
    <span class="kw">while</span> (i <= mid && j <= right) {
        <span class="kw">if</span> (arr[i] <= arr[j]) temp[k++] = arr[i++];
        <span class="kw">else</span> temp[k++] = arr[j++];
    }
    <span class="kw">while</span> (i <= mid) temp[k++] = arr[i++];
    <span class="kw">while</span> (j <= right) temp[k++] = arr[j++];
    <span class="kw">for</span> (<span class="kw">int</span> idx = <span class="mth">0</span>; idx < temp.length; idx++)
        arr[left + idx] = temp[idx];
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Quick Sort</span>
<span class="kw">public static void</span> <span class="mth">quickSort</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> low, <span class="kw">int</span> high) {
    <span class="kw">if</span> (low < high) {
        <span class="kw">int</span> pivotIdx = <span class="mth">partition</span>(arr, low, high);
        <span class="mth">quickSort</span>(arr, low, pivotIdx - <span class="mth">1</span>);
        <span class="mth">quickSort</span>(arr, pivotIdx + <span class="mth">1</span>, high);
    }
}

<span class="kw">static int</span> <span class="mth">partition</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> low, <span class="kw">int</span> high) {
    <span class="kw">int</span> pivot = arr[high];
    <span class="kw">int</span> i = low - <span class="mth">1</span>;
    <span class="kw">for</span> (<span class="kw">int</span> j = low; j < high; j++) {
        <span class="kw">if</span> (arr[j] < pivot) {
            i++;
            <span class="kw">int</span> temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    <span class="kw">int</span> temp = arr[i + <span class="mth">1</span>]; arr[i + <span class="mth">1</span>] = arr[high]; arr[high] = temp;
    <span class="kw">return</span> i + <span class="mth">1</span>;
}

<span class="cmt">// Heap Sort</span>
<span class="kw">public static void</span> <span class="mth">heapSort</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> n = arr.length;
    <span class="kw">for</span> (<span class="kw">int</span> i = n / <span class="mth">2</span> - <span class="mth">1</span>; i >= <span class="mth">0</span>; i--) <span class="mth">heapify</span>(arr, n, i);
    <span class="kw">for</span> (<span class="kw">int</span> i = n - <span class="mth">1</span>; i > <span class="mth">0</span>; i--) {
        <span class="kw">int</span> temp = arr[<span class="mth">0</span>]; arr[<span class="mth">0</span>] = arr[i]; arr[i] = temp;
        <span class="mth">heapify</span>(arr, i, <span class="mth">0</span>);
    }
}

<span class="kw">static void</span> <span class="mth">heapify</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> n, <span class="kw">int</span> i) {
    <span class="kw">int</span> largest = i, left = <span class="mth">2</span> * i + <span class="mth">1</span>, right = <span class="mth">2</span> * i + <span class="mth">2</span>;
    <span class="kw">if</span> (left < n && arr[left] > arr[largest]) largest = left;
    <span class="kw">if</span> (right < n && arr[right] > arr[largest]) largest = right;
    <span class="kw">if</span> (largest != i) {
        <span class="kw">int</span> temp = arr[i]; arr[i] = arr[largest]; arr[largest] = temp;
        <span class="mth">heapify</span>(arr, n, largest);
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Counting Sort</span>
<span class="kw">public static void</span> <span class="mth">countingSort</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> max = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> val : arr) max = Math.max(max, val);
    <span class="kw">int</span>[] count = <span class="kw">new int</span>[max + <span class="mth">1</span>];
    <span class="kw">for</span> (<span class="kw">int</span> val : arr) count[val]++;
    <span class="kw">int</span> idx = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i <= max; i++)
        <span class="kw">while</span> (count[i]-- > <span class="mth">0</span>) arr[idx++] = i;
}

<span class="cmt">// Radix Sort</span>
<span class="kw">public static void</span> <span class="mth">radixSort</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> max = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> val : arr) max = Math.max(max, val);
    <span class="kw">for</span> (<span class="kw">int</span> exp = <span class="mth">1</span>; max / exp > <span class="mth">0</span>; exp *= <span class="mth">10</span>) {
        <span class="kw">int</span>[] output = <span class="kw">new int</span>[arr.length];
        <span class="kw">int</span>[] count = <span class="kw">new int</span>[<span class="mth">10</span>];
        <span class="kw">for</span> (<span class="kw">int</span> val : arr) count[(val / exp) % <span class="mth">10</span>]++;
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i < <span class="mth">10</span>; i++) count[i] += count[i - <span class="mth">1</span>];
        <span class="kw">for</span> (<span class="kw">int</span> i = arr.length - <span class="mth">1</span>; i >= <span class="mth">0</span>; i--) {
            output[--count[(arr[i] / exp) % <span class="mth">10</span>]] = arr[i];
        }
        System.arraycopy(output, <span class="mth">0</span>, arr, <span class="mth">0</span>, arr.length);
    }
}</pre>
</div>`
},

'searching': {
title: 'Searching Algorithms',
icon: 'fa-search',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=xwI5OBEnsZU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Searching Algorithms — Java DSA</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-search" style="color:var(--primary)"></i> Searching Algorithms</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>Linear Search</h3>
<p>Check each element one by one. Works on both sorted and unsorted arrays. Time complexity: O(n).</p>
</div>

<div class="code-block">
<pre><span class="kw">public static int</span> <span class="mth">linearSearch</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < arr.length; i++) {
        <span class="kw">if</span> (arr[i] == target) <span class="kw">return</span> i;
    }
    <span class="kw">return</span> -<span class="mth">1</span>;
}</pre>
</div>

<div class="concept-box">
<h3>Binary Search</h3>
<p>Divide and conquer on sorted array. Compare target with mid element and eliminate half each step. Time: O(log n).</p>
<ul>
<li><strong>Iterative:</strong> Uses while loop, O(1) space</li>
<li><strong>Recursive:</strong> Uses function calls, O(log n) space</li>
</ul>
</div>

<div class="code-block">
<pre><span class="cmt">// Binary Search - Iterative</span>
<span class="kw">public static int</span> <span class="mth">binarySearch</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">int</span> low = <span class="mth">0</span>, high = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (low <= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
        <span class="kw">if</span> (arr[mid] == target) <span class="kw">return</span> mid;
        <span class="kw">else if</span> (arr[mid] < target) low = mid + <span class="mth">1</span>;
        <span class="kw">else</span> high = mid - <span class="mth">1</span>;
    }
    <span class="kw">return</span> -<span class="mth">1</span>;
}

<span class="cmt">// Binary Search - Recursive</span>
<span class="kw">public static int</span> <span class="mth">binarySearchRec</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target, <span class="kw">int</span> low, <span class="kw">int</span> high) {
    <span class="kw">if</span> (low > high) <span class="kw">return</span> -<span class="mth">1</span>;
    <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
    <span class="kw">if</span> (arr[mid] == target) <span class="kw">return</span> mid;
    <span class="kw">else if</span> (arr[mid] < target) <span class="kw">return</span> <span class="mth">binarySearchRec</span>(arr, target, mid + <span class="mth">1</span>, high);
    <span class="kw">else</span> <span class="kw">return</span> <span class="mth">binarySearchRec</span>(arr, target, low, mid - <span class="mth">1</span>);
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Lower Bound - First index where arr[i] >= target</span>
<span class="kw">public static int</span> <span class="mth">lowerBound</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">int</span> low = <span class="mth">0</span>, high = arr.length;
    <span class="kw">while</span> (low < high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
        <span class="kw">if</span> (arr[mid] < target) low = mid + <span class="mth">1</span>;
        <span class="kw">else</span> high = mid;
    }
    <span class="kw">return</span> low;
}

<span class="cmt">// Upper Bound - First index where arr[i] > target</span>
<span class="kw">public static int</span> <span class="mth">upperBound</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">int</span> low = <span class="mth">0</span>, high = arr.length;
    <span class="kw">while</span> (low < high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
        <span class="kw">if</span> (arr[mid] <= target) low = mid + <span class="mth">1</span>;
        <span class="kw">else</span> high = mid;
    }
    <span class="kw">return</span> low;
}

<span class="cmt">// First Occurrence of target</span>
<span class="kw">public static int</span> <span class="mth">firstOccurrence</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">int</span> result = -<span class="mth">1</span>, low = <span class="mth">0</span>, high = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (low <= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
        <span class="kw">if</span> (arr[mid] == target) { result = mid; high = mid - <span class="mth">1</span>; }
        <span class="kw">else if</span> (arr[mid] < target) low = mid + <span class="mth">1</span>;
        <span class="kw">else</span> high = mid - <span class="mth">1</span>;
    }
    <span class="kw">return</span> result;
}

<span class="cmt">// Last Occurrence of target</span>
<span class="kw">public static int</span> <span class="mth">lastOccurrence</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">int</span> result = -<span class="mth">1</span>, low = <span class="mth">0</span>, high = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (low <= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
        <span class="kw">if</span> (arr[mid] == target) { result = mid; low = mid + <span class="mth">1</span>; }
        <span class="kw">else if</span> (arr[mid] < target) low = mid + <span class="mth">1</span>;
        <span class="kw">else</span> high = mid - <span class="mth">1</span>;
    }
    <span class="kw">return</span> result;
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Count Occurrences</span>
<span class="kw">public static int</span> <span class="mth">countOccurrences</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">int</span> first = <span class="mth">firstOccurrence</span>(arr, target);
    <span class="kw">if</span> (first == -<span class="mth">1</span>) <span class="kw">return</span> <span class="mth">0</span>;
    <span class="kw">int</span> last = <span class="mth">lastOccurrence</span>(arr, target);
    <span class="kw">return</span> last - first + <span class="mth">1</span>;
}

<span class="cmt">// Search Insert Position</span>
<span class="kw">public static int</span> <span class="mth">searchInsert</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">int</span> low = <span class="mth">0</span>, high = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (low <= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
        <span class="kw">if</span> (arr[mid] == target) <span class="kw">return</span> mid;
        <span class="kw">else if</span> (arr[mid] < target) low = mid + <span class="mth">1</span>;
        <span class="kw">else</span> high = mid - <span class="mth">1</span>;
    }
    <span class="kw">return</span> low;
}

<span class="cmt">// Square Root using Binary Search</span>
<span class="kw">public static int</span> <span class="mth">sqrt</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n == <span class="mth">0</span>) <span class="kw">return</span> <span class="mth">0</span>;
    <span class="kw">int</span> low = <span class="mth">1</span>, high = n, result = <span class="mth">1</span>;
    <span class="kw">while</span> (low <= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
        <span class="kw">if</span> ((<span class="kw">long</span>)mid * mid <= n) { result = mid; low = mid + <span class="mth">1</span>; }
        <span class="kw">else</span> high = mid - <span class="mth">1</span>;
    }
    <span class="kw">return</span> result;
}

<span class="cmt">// Search in Rotated Sorted Array</span>
<span class="kw">public static int</span> <span class="mth">searchRotated</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">int</span> low = <span class="mth">0</span>, high = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (low <= high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
        <span class="kw">if</span> (arr[mid] == target) <span class="kw">return</span> mid;
        <span class="kw">if</span> (arr[low] <= arr[mid]) {
            <span class="kw">if</span> (arr[low] <= target && target < arr[mid]) high = mid - <span class="mth">1</span>;
            <span class="kw">else</span> low = mid + <span class="mth">1</span>;
        } <span class="kw">else</span> {
            <span class="kw">if</span> (arr[mid] < target && target <= arr[high]) low = mid + <span class="mth">1</span>;
            <span class="kw">else</span> high = mid - <span class="mth">1</span>;
        }
    }
    <span class="kw">return</span> -<span class="mth">1</span>;
}

<span class="cmt">// Find Peak Element</span>
<span class="kw">public static int</span> <span class="mth">findPeak</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span> low = <span class="mth">0</span>, high = arr.length - <span class="mth">1</span>;
    <span class="kw">while</span> (low < high) {
        <span class="kw">int</span> mid = low + (high - low) / <span class="mth">2</span>;
        <span class="kw">if</span> (arr[mid] < arr[mid + <span class="mth">1</span>]) low = mid + <span class="mth">1</span>;
        <span class="kw">else</span> high = mid;
    }
    <span class="kw">return</span> low;
}</pre>
</div>`
},

'recursion': {
title: 'Recursion',
icon: 'fa-redo',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=IJDJ0kBx2LM" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Recursion in Programming - Full Course</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-redo" style="color:var(--primary)"></i> Recursion</h1><span class="badge beginner">Beginner</span></div>

<div class="concept-box">
<h3>What is Recursion?</h3>
<p>A function that calls itself. Each recursive call must have a base case to stop, and the problem must get smaller with each call.</p>
<ul>
<li><strong>Base Case:</strong> Condition to stop recursion (no more recursive calls)</li>
<li><strong>Recursive Case:</strong> The function calls itself with a smaller input</li>
<li><strong>Stack Memory:</strong> Each call adds a frame to the call stack</li>
</ul>
</div>

<div class="code-block">
<pre><span class="cmt">// Factorial using Recursion</span>
<span class="kw">public static int</span> <span class="mth">factorial</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n <= <span class="mth">1</span>) <span class="kw">return</span> <span class="mth">1</span>;  <span class="cmt">// base case</span>
    <span class="kw">return</span> n * <span class="mth">factorial</span>(n - <span class="mth">1</span>);  <span class="cmt">// recursive case</span>
}

<span class="cmt">// Fibonacci</span>
<span class="kw">public static int</span> <span class="mth">fibonacci</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n <= <span class="mth">1</span>) <span class="kw">return</span> n;
    <span class="kw">return</span> <span class="mth">fibonacci</span>(n - <span class="mth">1</span>) + <span class="mth">fibonacci</span>(n - <span class="mth">2</span>);
}

<span class="cmt">// Print 1 to N</span>
<span class="kw">public static void</span> <span class="mth">print1ToN</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n == <span class="mth">0</span>) <span class="kw">return</span>;
    <span class="mth">print1ToN</span>(n - <span class="mth">1</span>);
    System.out.print(n + <span class="str">" "</span>);
}

<span class="cmt">// Print N to 1</span>
<span class="kw">public static void</span> <span class="mth">printNTo1</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n == <span class="mth">0</span>) <span class="kw">return</span>;
    System.out.print(n + <span class="str">" "</span>);
    <span class="mth">printNTo1</span>(n - <span class="mth">1</span>);
}

<span class="cmt">// Sum of first N numbers</span>
<span class="kw">public static int</span> <span class="mth">sum</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n == <span class="mth">0</span>) <span class="kw">return</span> <span class="mth">0</span>;
    <span class="kw">return</span> n + <span class="mth">sum</span>(n - <span class="mth">1</span>);
}

<span class="cmt">// Sum of Digits</span>
<span class="kw">public static int</span> <span class="mth">digitSum</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n == <span class="mth">0</span>) <span class="kw">return</span> <span class="mth">0</span>;
    <span class="kw">return</span> n % <span class="mth">10</span> + <span class="mth">digitSum</span>(n / <span class="mth">10</span>);
}

<span class="cmt">// Reverse Number</span>
<span class="kw">static int</span> rev = <span class="mth">0</span>;
<span class="kw">public static int</span> <span class="mth">reverseNumber</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n == <span class="mth">0</span>) <span class="kw">return</span> rev;
    rev = rev * <span class="mth">10</span> + n % <span class="mth">10</span>;
    <span class="kw">return</span> <span class="mth">reverseNumber</span>(n / <span class="mth">10</span>);
}

<span class="cmt">// Power (x^n)</span>
<span class="kw">public static int</span> <span class="mth">power</span>(<span class="kw">int</span> x, <span class="kw">int</span> n) {
    <span class="kw">if</span> (n == <span class="mth">0</span>) <span class="kw">return</span> <span class="mth">1</span>;
    <span class="kw">return</span> x * <span class="mth">power</span>(x, n - <span class="mth">1</span>);
}

<span class="cmt">// GCD using Euclidean Algorithm</span>
<span class="kw">public static int</span> <span class="mth">gcd</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) {
    <span class="kw">if</span> (b == <span class="mth">0</span>) <span class="kw">return</span> a;
    <span class="kw">return</span> <span class="mth">gcd</span>(b, a % b);
}

<span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
    System.out.println(<span class="mth">factorial</span>(<span class="mth">5</span>));        <span class="cmt">// 120</span>
    System.out.println(<span class="mth">fibonacci</span>(<span class="mth">10</span>));       <span class="cmt">// 55</span>
    <span class="mth">print1ToN</span>(<span class="mth">5</span>); System.out.println();    <span class="cmt">// 1 2 3 4 5</span>
    <span class="mth">printNTo1</span>(<span class="mth">5</span>); System.out.println();    <span class="cmt">// 5 4 3 2 1</span>
    System.out.println(<span class="mth">digitSum</span>(<span class="mth">12345</span>));     <span class="cmt">// 15</span>
    System.out.println(<span class="mth">power</span>(<span class="mth">2</span>, <span class="mth">10</span>));       <span class="cmt">// 1024</span>
    System.out.println(<span class="mth">gcd</span>(<span class="mth">12</span>, <span class="mth">8</span>));          <span class="cmt">// 4</span>
}</pre>
</div>

<div class="concept-box">
<h3>Direct vs Indirect Recursion</h3>
<ul>
<li><strong>Direct Recursion:</strong> A function calls itself (e.g., factorial)</li>
<li><strong>Indirect Recursion:</strong> Function A calls Function B, which calls Function A</li>
</ul>
</div>

<div class="code-block">
<pre><span class="cmt">// Indirect Recursion Example</span>
<span class="kw">static void</span> <span class="mth">functionA</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n <= <span class="mth">0</span>) <span class="kw">return</span>;
    System.out.println(<span class="str">"A: "</span> + n);
    <span class="mth">functionB</span>(n - <span class="mth">1</span>);
}

<span class="kw">static void</span> <span class="mth">functionB</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n <= <span class="mth">0</span>) <span class="kw">return</span>;
    System.out.println(<span class="str">"B: "</span> + n);
    <span class="mth">functionA</span>(n / <span class="mth">2</span>);
}

<span class="cmt">// Tail Recursion (can be optimized by compiler)</span>
<span class="kw">static int</span> <span class="mth">factorialTail</span>(<span class="kw">int</span> n, <span class="kw">int</span> accumulator) {
    <span class="kw">if</span> (n <= <span class="mth">1</span>) <span class="kw">return</span> accumulator;
    <span class="kw">return</span> <span class="mth">factorialTail</span>(n - <span class="mth">1</span>, n * accumulator);
}</pre>
</div>`
},

'backtracking': {
title: 'Backtracking',
icon: 'fa-undo',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=Zq4upTEaQyM" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">The Backtracking Blueprint: The Legendary 3 Keys To Backtracking Algorithms</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-undo" style="color:var(--primary)"></i> Backtracking</h1><span class="badge advanced">Advanced</span></div>

<div class="concept-box">
<h3>What is Backtracking?</h3>
<p>Backtracking explores all possible solutions by building candidates incrementally and abandoning a candidate as soon as it determines the candidate cannot lead to a valid solution.</p>
<p><strong>Pattern:</strong> Choose ? Explore ? Undo</p>
</div>

<div class="code-block">
<pre><span class="cmt">// Generate All Subsets</span>
<span class="kw">public class</span> <span class="cls">Subsets</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="kw">int</span>[] nums = {<span class="mth">1</span>, <span class="mth">2</span>, <span class="mth">3</span>};
        List&lt;List&lt;Integer&gt;&gt; result = <span class="kw">new</span> ArrayList&lt;&gt;();
        <span class="mth">backtrack</span>(nums, <span class="mth">0</span>, <span class="kw">new</span> ArrayList&lt;&gt;(), result);
        System.out.println(result);
    }

    <span class="kw">static void</span> <span class="mth">backtrack</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> start,
            List&lt;Integer&gt; current, List&lt;List&lt;Integer&gt;&gt; result) {
        result.add(<span class="kw">new</span> ArrayList&lt;&gt;(current));
        <span class="kw">for</span> (<span class="kw">int</span> i = start; i < nums.length; i++) {
            current.add(nums[i]);              <span class="cmt">// Choose</span>
            <span class="mth">backtrack</span>(nums, i + <span class="mth">1</span>, current, result); <span class="cmt">// Explore</span>
            current.remove(current.size() - <span class="mth">1</span>); <span class="cmt">// Undo</span>
        }
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Generate All Permutations</span>
<span class="kw">public static void</span> <span class="mth">permute</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> start,
        List&lt;List&lt;Integer&gt;&gt; result) {
    <span class="kw">if</span> (start == nums.length) {
        List&lt;Integer&gt; perm = <span class="kw">new</span> ArrayList&lt;&gt;();
        <span class="kw">for</span> (<span class="kw">int</span> n : nums) perm.add(n);
        result.add(perm);
        <span class="kw">return</span>;
    }
    <span class="kw">for</span> (<span class="kw">int</span> i = start; i < nums.length; i++) {
        <span class="mth">swap</span>(nums, start, i);        <span class="cmt">// Choose</span>
        <span class="mth">permute</span>(nums, start + <span class="mth">1</span>, result); <span class="cmt">// Explore</span>
        <span class="mth">swap</span>(nums, start, i);        <span class="cmt">// Undo</span>
    }
}

<span class="kw">static void</span> <span class="mth">swap</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> i, <span class="kw">int</span> j) {
    <span class="kw">int</span> temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Combination Sum</span>
<span class="kw">public static void</span> <span class="mth">combinationSum</span>(<span class="kw">int</span>[] candidates, <span class="kw">int</span> target,
        <span class="kw">int</span> start, List&lt;Integer&gt; current, List&lt;List&lt;Integer&gt;&gt; result) {
    <span class="kw">if</span> (target == <span class="mth">0</span>) {
        result.add(<span class="kw">new</span> ArrayList&lt;&gt;(current));
        <span class="kw">return</span>;
    }
    <span class="kw">if</span> (target < <span class="mth">0</span>) <span class="kw">return</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = start; i < candidates.length; i++) {
        current.add(candidates[i]);
        <span class="mth">combinationSum</span>(candidates, target - candidates[i], i, current, result);
        current.remove(current.size() - <span class="mth">1</span>);
    }
}

<span class="cmt">// Combination Sum II (each element used once)</span>
<span class="kw">public static void</span> <span class="mth">combinationSum2</span>(<span class="kw">int</span>[] candidates, <span class="kw">int</span> target,
        <span class="kw">int</span> start, List&lt;Integer&gt; current, List&lt;List&lt;Integer&gt;&gt; result) {
    <span class="kw">if</span> (target == <span class="mth">0</span>) {
        result.add(<span class="kw">new</span> ArrayList&lt;&gt;(current));
        <span class="kw">return</span>;
    }
    <span class="kw">for</span> (<span class="kw">int</span> i = start; i < candidates.length; i++) {
        <span class="kw">if</span> (i > start && candidates[i] == candidates[i - <span class="mth">1</span>]) <span class="kw">continue</span>;
        <span class="kw">if</span> (candidates[i] > target) <span class="kw">break</span>;
        current.add(candidates[i]);
        <span class="mth">combinationSum2</span>(candidates, target - candidates[i], i + <span class="mth">1</span>, current, result);
        current.remove(current.size() - <span class="mth">1</span>);
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// N-Queens Problem</span>
<span class="kw">public class</span> <span class="cls">NQueens</span> {
    <span class="kw">public static void</span> <span class="mth">solveNQueens</span>(<span class="kw">int</span> n) {
        <span class="kw">int</span>[] queens = <span class="kw">new int</span>[n];
        <span class="mth">solve</span>(queens, <span class="mth">0</span>, n);
    }

    <span class="kw">static void</span> <span class="mth">solve</span>(<span class="kw">int</span>[] queens, <span class="kw">int</span> row, <span class="kw">int</span> n) {
        <span class="kw">if</span> (row == n) {
            <span class="mth">printBoard</span>(queens, n);
            <span class="kw">return</span>;
        }
        <span class="kw">for</span> (<span class="kw">int</span> col = <span class="mth">0</span>; col < n; col++) {
            <span class="kw">if</span> (<span class="mth">isSafe</span>(queens, row, col)) {
                queens[row] = col;
                <span class="mth">solve</span>(queens, row + <span class="mth">1</span>, n);
                queens[row] = <span class="mth">0</span>;
            }
        }
    }

    <span class="kw">static boolean</span> <span class="mth">isSafe</span>(<span class="kw">int</span>[] queens, <span class="kw">int</span> row, <span class="kw">int</span> col) {
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < row; i++) {
            <span class="kw">if</span> (queens[i] == col ||
                Math.abs(queens[i] - col) == Math.abs(i - row))
                <span class="kw">return false</span>;
        }
        <span class="kw">return true</span>;
    }

    <span class="kw">static void</span> <span class="mth">printBoard</span>(<span class="kw">int</span>[] queens, <span class="kw">int</span> n) {
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++) {
            <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">0</span>; j < n; j++)
                System.out.print(queens[i] == j ? <span class="str">"Q "</span> : <span class="str">". "</span>);
            System.out.println();
        }
        System.out.println();
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Rat in a Maze</span>
<span class="kw">public static boolean</span> <span class="mth">solveMaze</span>(<span class="kw">int</span>[][] maze, <span class="kw">int</span>[][] solution,
        <span class="kw">int</span> row, <span class="kw">int</span> col) {
    <span class="kw">int</span> n = maze.length;
    <span class="kw">if</span> (row == n - <span class="mth">1</span> && col == n - <span class="mth">1</span>) {
        solution[row][col] = <span class="mth">1</span>;
        <span class="kw">return true</span>;
    }
    <span class="kw">if</span> (row >= <span class="mth">0</span> && row < n && col >= <span class="mth">0</span> && col < n
            && maze[row][col] == <span class="mth">1</span> && solution[row][col] == <span class="mth">0</span>) {
        solution[row][col] = <span class="mth">1</span>;
        <span class="kw">if</span> (<span class="mth">solveMaze</span>(maze, solution, row + <span class="mth">1</span>, col)) <span class="kw">return true</span>;
        <span class="kw">if</span> (<span class="mth">solveMaze</span>(maze, solution, row, col + <span class="mth">1</span>)) <span class="kw">return true</span>;
        solution[row][col] = <span class="mth">0</span>;  <span class="cmt">// undo</span>
    }
    <span class="kw">return false</span>;
}</pre>
</div>`
},
'linked-list': {
title: 'Singly Linked List',
icon: 'fa-link',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=njTh_OwMljA" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Data Structures: Linked Lists — HackerRank</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-link" style="color:var(--primary)"></i> Singly Linked List</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>Node Structure</h3>
<p>A linked list is a chain of nodes where each node contains data and a reference to the next node.</p>
</div>

<div class="code-block">
<pre><span class="kw">class</span> <span class="cls">Node</span> {
    <span class="kw">int</span> data;
    Node next;
    <span class="cls">Node</span>(<span class="kw">int</span> data) {
        <span class="kw">this</span>.data = data;
        <span class="kw">this</span>.next = <span class="kw">null</span>;
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="kw">class</span> <span class="cls">LinkedList</span> {
    Node head;

    <span class="kw">void</span> <span class="mth">insertAtBeginning</span>(<span class="kw">int</span> data) {
        Node newNode = <span class="kw">new</span> Node(data);
        newNode.next = head;
        head = newNode;
    }

    <span class="kw">void</span> <span class="mth">insertAtEnd</span>(<span class="kw">int</span> data) {
        Node newNode = <span class="kw">new</span> Node(data);
        <span class="kw">if</span> (head == <span class="kw">null</span>) { head = newNode; <span class="kw">return</span>; }
        Node current = head;
        <span class="kw">while</span> (current.next != <span class="kw">null</span>) current = current.next;
        current.next = newNode;
    }

    <span class="kw">void</span> <span class="mth">insertAtPosition</span>(<span class="kw">int</span> data, <span class="kw">int</span> pos) {
        <span class="kw">if</span> (pos == <span class="mth">0</span>) { insertAtBeginning(data); <span class="kw">return</span>; }
        Node newNode = <span class="kw">new</span> Node(data);
        Node current = head;
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < pos - <span class="mth">1</span> && current != <span class="kw">null</span>; i++)
            current = current.next;
        <span class="kw">if</span> (current == <span class="kw">null</span>) <span class="kw">return</span>;
        newNode.next = current.next;
        current.next = newNode;
    }

    <span class="kw">void</span> <span class="mth">deleteFirst</span>() {
        <span class="kw">if</span> (head != <span class="kw">null</span>) head = head.next;
    }

    <span class="kw">void</span> <span class="mth">deleteLast</span>() {
        <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">return</span>;
        <span class="kw">if</span> (head.next == <span class="kw">null</span>) { head = <span class="kw">null</span>; <span class="kw">return</span>; }
        Node current = head;
        <span class="kw">while</span> (current.next.next != <span class="kw">null</span>) current = current.next;
        current.next = <span class="kw">null</span>;
    }

    <span class="kw">void</span> <span class="mth">deleteAtPosition</span>(<span class="kw">int</span> pos) {
        <span class="kw">if</span> (pos == <span class="mth">0</span>) { deleteFirst(); <span class="kw">return</span>; }
        Node current = head;
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < pos - <span class="mth">1</span> && current != <span class="kw">null</span>; i++)
            current = current.next;
        <span class="kw">if</span> (current == <span class="kw">null</span> || current.next == <span class="kw">null</span>) <span class="kw">return</span>;
        current.next = current.next.next;
    }

    <span class="kw">void</span> <span class="mth">display</span>() {
        Node current = head;
        <span class="kw">while</span> (current != <span class="kw">null</span>) {
            System.out.print(current.data + <span class="str">" -> "</span>);
            current = current.next;
        }
        System.out.println(<span class="str">"null"</span>);
    }

    <span class="kw">boolean</span> <span class="mth">search</span>(<span class="kw">int</span> key) {
        Node current = head;
        <span class="kw">while</span> (current != <span class="kw">null</span>) {
            <span class="kw">if</span> (current.data == key) <span class="kw">return true</span>;
            current = current.next;
        }
        <span class="kw">return false</span>;
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Reverse Linked List</span>
<span class="kw">public static</span> Node <span class="mth">reverse</span>(Node head) {
    Node prev = <span class="kw">null</span>, current = head;
    <span class="kw">while</span> (current != <span class="kw">null</span>) {
        Node next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    <span class="kw">return</span> prev;
}

<span class="cmt">// Find Middle (Floyd's Tortoise and Hare)</span>
<span class="kw">public static</span> Node <span class="mth">findMiddle</span>(Node head) {
    Node slow = head, fast = head;
    <span class="kw">while</span> (fast != <span class="kw">null</span> && fast.next != <span class="kw">null</span>) {
        slow = slow.next;
        fast = fast.next.next;
    }
    <span class="kw">return</span> slow;
}

<span class="cmt">// Detect Cycle (Floyd's)</span>
<span class="kw">public static boolean</span> <span class="mth">hasCycle</span>(Node head) {
    Node slow = head, fast = head;
    <span class="kw">while</span> (fast != <span class="kw">null</span> && fast.next != <span class="kw">null</span>) {
        slow = slow.next;
        fast = fast.next.next;
        <span class="kw">if</span> (slow == fast) <span class="kw">return true</span>;
    }
    <span class="kw">return false</span>;
}

<span class="cmt">// Remove Cycle</span>
<span class="kw">public static void</span> <span class="mth">removeCycle</span>(Node head) {
    Node slow = head, fast = head;
    <span class="kw">while</span> (fast != <span class="kw">null</span> && fast.next != <span class="kw">null</span>) {
        slow = slow.next;
        fast = fast.next.next;
        <span class="kw">if</span> (slow == fast) <span class="kw">break</span>;
    }
    <span class="kw">if</span> (slow != fast) <span class="kw">return</span>;
    slow = head;
    <span class="kw">while</span> (slow.next != fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = <span class="kw">null</span>;
}

<span class="cmt">// Find Nth Node from End</span>
<span class="kw">public static</span> Node <span class="mth">nthFromEnd</span>(Node head, <span class="kw">int</span> n) {
    Node fast = head;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++) {
        <span class="kw">if</span> (fast == <span class="kw">null</span>) <span class="kw">return null</span>;
        fast = fast.next;
    }
    Node slow = head;
    <span class="kw">while</span> (fast != <span class="kw">null</span>) { slow = slow.next; fast = fast.next; }
    <span class="kw">return</span> slow;
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Merge Two Sorted Linked Lists</span>
<span class="kw">public static</span> Node <span class="mth">mergeSorted</span>(Node l1, Node l2) {
    Node dummy = <span class="kw">new</span> Node(<span class="mth">0</span>);
    Node current = dummy;
    <span class="kw">while</span> (l1 != <span class="kw">null</span> && l2 != <span class="kw">null</span>) {
        <span class="kw">if</span> (l1.data <= l2.data) { current.next = l1; l1 = l1.next; }
        <span class="kw">else</span> { current.next = l2; l2 = l2.next; }
        current = current.next;
    }
    current.next = (l1 != <span class="kw">null</span>) ? l1 : l2;
    <span class="kw">return</span> dummy.next;
}

<span class="cmt">// Remove Duplicates from Sorted LL</span>
<span class="kw">public static</span> Node <span class="mth">removeDuplicates</span>(Node head) {
    Node current = head;
    <span class="kw">while</span> (current != <span class="kw">null</span> && current.next != <span class="kw">null</span>) {
        <span class="kw">if</span> (current.data == current.next.data) {
            current.next = current.next.next;
        } <span class="kw">else</span> {
            current = current.next;
        }
    }
    <span class="kw">return</span> head;
}

<span class="cmt">// Check if Palindrome Linked List</span>
<span class="kw">public static boolean</span> <span class="mth">isPalindrome</span>(Node head) {
    <span class="kw">if</span> (head == <span class="kw">null</span> || head.next == <span class="kw">null</span>) <span class="kw">return true</span>;
    Node slow = head, fast = head;
    <span class="kw">while</span> (fast.next != <span class="kw">null</span> && fast.next.next != <span class="kw">null</span>) {
        slow = slow.next; fast = fast.next.next;
    }
    Node secondHalf = <span class="mth">reverse</span>(slow.next);
    Node p1 = head, p2 = secondHalf;
    <span class="kw">while</span> (p2 != <span class="kw">null</span>) {
        <span class="kw">if</span> (p1.data != p2.data) <span class="kw">return false</span>;
        p1 = p1.next; p2 = p2.next;
    }
    <span class="kw">return true</span>;
}

<span class="cmt">// Find Intersection of Two Lists</span>
<span class="kw">public static</span> Node <span class="mth">getIntersection</span>(Node headA, Node headB) {
    <span class="kw">if</span> (headA == <span class="kw">null</span> || headB == <span class="kw">null</span>) <span class="kw">return null</span>;
    Node a = headA, b = headB;
    <span class="kw">while</span> (a != b) {
        a = (a == <span class="kw">null</span>) ? headB : a.next;
        b = (b == <span class="kw">null</span>) ? headA : b.next;
    }
    <span class="kw">return</span> a;
}</pre>
</div>`
},

'doubly-linked-list': {
title: 'Doubly Linked List',
icon: 'fa-arrows-alt-h',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=5wwyrLMgjYg" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Tutorial - How to make a doubly linked list in Java</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-arrows-alt-h" style="color:var(--primary)"></i> Doubly Linked List</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>Node Structure</h3>
<p>Each node has three fields: data, a pointer to the next node, and a pointer to the previous node.</p>
</div>

<div class="code-block">
<pre><span class="kw">class</span> <span class="cls">DLLNode</span> {
    <span class="kw">int</span> data;
    DLLNode prev, next;
    <span class="cls">DLLNode</span>(<span class="kw">int</span> data) {
        <span class="kw">this</span>.data = data;
        <span class="kw">this</span>.prev = <span class="kw">null</span>;
        <span class="kw">this</span>.next = <span class="kw">null</span>;
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="kw">class</span> <span class="cls">DoublyLinkedList</span> {
    DLLNode head;

    <span class="kw">void</span> <span class="mth">insertAtBeginning</span>(<span class="kw">int</span> data) {
        DLLNode newNode = <span class="kw">new</span> DLLNode(data);
        <span class="kw">if</span> (head != <span class="kw">null</span>) {
            newNode.next = head;
            head.prev = newNode;
        }
        head = newNode;
    }

    <span class="kw">void</span> <span class="mth">insertAtEnd</span>(<span class="kw">int</span> data) {
        DLLNode newNode = <span class="kw">new</span> DLLNode(data);
        <span class="kw">if</span> (head == <span class="kw">null</span>) { head = newNode; <span class="kw">return</span>; }
        DLLNode current = head;
        <span class="kw">while</span> (current.next != <span class="kw">null</span>) current = current.next;
        current.next = newNode;
        newNode.prev = current;
    }

    <span class="kw">void</span> <span class="mth">insertAtPosition</span>(<span class="kw">int</span> data, <span class="kw">int</span> pos) {
        <span class="kw">if</span> (pos == <span class="mth">0</span>) { insertAtBeginning(data); <span class="kw">return</span>; }
        DLLNode newNode = <span class="kw">new</span> DLLNode(data);
        DLLNode current = head;
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < pos - <span class="mth">1</span> && current != <span class="kw">null</span>; i++)
            current = current.next;
        <span class="kw">if</span> (current == <span class="kw">null</span>) <span class="kw">return</span>;
        newNode.next = current.next;
        newNode.prev = current;
        <span class="kw">if</span> (current.next != <span class="kw">null</span>) current.next.prev = newNode;
        current.next = newNode;
    }

    <span class="kw">void</span> <span class="mth">deleteNode</span>(DLLNode node) {
        <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">return</span>;
        <span class="kw">if</span> (node == head) head = head.next;
        <span class="kw">if</span> (node.next != <span class="kw">null</span>) node.next.prev = node.prev;
        <span class="kw">if</span> (node.prev != <span class="kw">null</span>) node.prev.next = node.next;
    }

    <span class="kw">void</span> <span class="mth">displayForward</span>() {
        DLLNode current = head;
        <span class="kw">while</span> (current != <span class="kw">null</span>) {
            System.out.print(current.data + <span class="str">" <-> "</span>);
            current = current.next;
        }
        System.out.println(<span class="str">"null"</span>);
    }

    <span class="kw">void</span> <span class="mth">displayBackward</span>() {
        DLLNode current = head;
        <span class="kw">if</span> (current == <span class="kw">null</span>) <span class="kw">return</span>;
        <span class="kw">while</span> (current.next != <span class="kw">null</span>) current = current.next;
        <span class="kw">while</span> (current != <span class="kw">null</span>) {
            System.out.print(current.data + <span class="str">" <-> "</span>);
            current = current.prev;
        }
        System.out.println(<span class="str">"null"</span>);
    }

    <span class="kw">void</span> <span class="mth">reverse</span>() {
        DLLNode current = head, temp = <span class="kw">null</span>;
        <span class="kw">while</span> (current != <span class="kw">null</span>) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        <span class="kw">if</span> (temp != <span class="kw">null</span>) head = temp.prev;
    }
}</pre>
</div>`
},

'circular-linked-list': {
title: 'Circular Linked List',
icon: 'fa-sync-alt',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=MXEIYJGB0nk" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Circular Linked List Data Structure with all Operations & Algorithm | Part 1 | DSA</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-sync-alt" style="color:var(--primary)"></i> Circular Linked List</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>What is a Circular Linked List?</h3>
<p>A linked list where the last node points back to the first node instead of null. Can be singly or doubly linked.</p>
</div>

<div class="code-block">
<pre><span class="kw">class</span> <span class="cls">CircularLinkedList</span> {
    Node head;

    <span class="kw">void</span> <span class="mth">insert</span>(<span class="kw">int</span> data) {
        Node newNode = <span class="kw">new</span> Node(data);
        <span class="kw">if</span> (head == <span class="kw">null</span>) {
            head = newNode;
            newNode.next = head;
        } <span class="kw">else</span> {
            Node current = head;
            <span class="kw">while</span> (current.next != head) current = current.next;
            current.next = newNode;
            newNode.next = head;
        }
    }

    <span class="kw">void</span> <span class="mth">insertAtBeginning</span>(<span class="kw">int</span> data) {
        Node newNode = <span class="kw">new</span> Node(data);
        <span class="kw">if</span> (head == <span class="kw">null</span>) {
            head = newNode;
            newNode.next = head;
        } <span class="kw">else</span> {
            Node last = head;
            <span class="kw">while</span> (last.next != head) last = last.next;
            newNode.next = head;
            last.next = newNode;
            head = newNode;
        }
    }

    <span class="kw">void</span> <span class="mth">delete</span>(<span class="kw">int</span> key) {
        <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">return</span>;
        <span class="kw">if</span> (head.data == key) {
            <span class="kw">if</span> (head.next == head) { head = <span class="kw">null</span>; <span class="kw">return</span>; }
            Node last = head;
            <span class="kw">while</span> (last.next != head) last = last.next;
            head = head.next;
            last.next = head;
            <span class="kw">return</span>;
        }
        Node current = head;
        <span class="kw">while</span> (current.next != head) {
            <span class="kw">if</span> (current.next.data == key) {
                current.next = current.next.next;
                <span class="kw">return</span>;
            }
            current = current.next;
        }
    }

    <span class="kw">void</span> <span class="mth">display</span>() {
        <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">return</span>;
        Node current = head;
        <span class="kw">do</span> {
            System.out.print(current.data + <span class="str">" -> "</span>);
            current = current.next;
        } <span class="kw">while</span> (current != head);
        System.out.println(<span class="str">"(back to head)"</span>);
    }

    <span class="kw">int</span> <span class="mth">size</span>() {
        <span class="kw">if</span> (head == <span class="kw">null</span>) <span class="kw">return</span> <span class="mth">0</span>;
        <span class="kw">int</span> count = <span class="mth">0</span>;
        Node current = head;
        <span class="kw">do</span> { count++; current = current.next; } <span class="kw">while</span> (current != head);
        <span class="kw">return</span> count;
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Josephus Problem - Find the safe position</span>
<span class="kw">public static int</span> <span class="mth">josephus</span>(<span class="kw">int</span> n, <span class="kw">int</span> k) {
    <span class="kw">if</span> (n == <span class="mth">1</span>) <span class="kw">return</span> <span class="mth">0</span>;
    <span class="kw">return</span> (<span class="mth">josephus</span>(n - <span class="mth">1</span>, k) + k) % n;
}

<span class="cmt">// Iterative Josephus</span>
<span class="kw">public static int</span> <span class="mth">josephusIterative</span>(<span class="kw">int</span> n, <span class="kw">int</span> k) {
    <span class="kw">int</span> result = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">2</span>; i <= n; i++)
        result = (result + k) % i;
    <span class="kw">return</span> result;
}

<span class="cmt">// Circular Linked List implementation with Josephus</span>
<span class="kw">public static int</span> <span class="mth">josephusList</span>(<span class="kw">int</span> n, <span class="kw">int</span> k) {
    CircularLinkedList list = <span class="kw">new</span> CircularLinkedList();
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i <= n; i++) list.insert(i);
    Node current = list.head;
    Node prev = <span class="kw">null</span>;
    <span class="kw">while</span> (list.size() > <span class="mth">1</span>) {
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < k - <span class="mth">1</span>; i++) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
        current = prev.next;
    }
    <span class="kw">return</span> current.data;
}</pre>
</div>`
},

'stack': {
title: 'Stack',
icon: 'fa-layer-group',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=7GYXGy0w9FE" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Mastering Stacks and Queues in Java With DSA 2024</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-layer-group" style="color:var(--primary)"></i> Stack</h1><span class="badge beginner">Beginner</span></div>

<div class="concept-box">
<h3>LIFO - Last In First Out</h3>
<p>Stack works like a pile of plates. The last plate added is the first one removed.</p>
<ul>
<li><strong>push:</strong> Add element to top</li>
<li><strong>pop:</strong> Remove element from top</li>
<li><strong>peek:</strong> Get top element without removing</li>
<li><strong>isEmpty:</strong> Check if stack is empty</li>
</ul>
</div>

<div class="code-block">
<pre><span class="cmt">// Stack using Array</span>
<span class="kw">class</span> <span class="cls">Stack</span> {
    <span class="kw">int</span>[] arr;
    <span class="kw">int</span> top;
    <span class="cls">Stack</span>(<span class="kw">int</span> size) { arr = <span class="kw">new int</span>[size]; top = -<span class="mth">1</span>; }

    <span class="kw">void</span> <span class="mth">push</span>(<span class="kw">int</span> val) {
        <span class="kw">if</span> (top == arr.length - <span class="mth">1</span>) { System.out.println(<span class="str">"Overflow"</span>); <span class="kw">return</span>; }
        arr[++top] = val;
    }

    <span class="kw">int</span> <span class="mth">pop</span>() {
        <span class="kw">if</span> (top == -<span class="mth">1</span>) { System.out.println(<span class="str">"Underflow"</span>); <span class="kw">return</span> -<span class="mth">1</span>; }
        <span class="kw">return</span> arr[top--];
    }

    <span class="kw">int</span> <span class="mth">peek</span>() {
        <span class="kw">if</span> (top == -<span class="mth">1</span>) <span class="kw">return</span> -<span class="mth">1</span>;
        <span class="kw">return</span> arr[top];
    }

    <span class="kw">boolean</span> <span class="mth">isEmpty</span>() { <span class="kw">return</span> top == -<span class="mth">1</span>; }

    <span class="kw">int</span> <span class="mth">size</span>() { <span class="kw">return</span> top + <span class="mth">1</span>; }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Reverse a String using Stack</span>
<span class="kw">public static</span> String <span class="mth">reverseString</span>(String s) {
    Stack&lt;Character&gt; stack = <span class="kw">new</span> Stack&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">char</span> c : s.toCharArray()) stack.push(c);
    StringBuilder result = <span class="kw">new</span> StringBuilder();
    <span class="kw">while</span> (!stack.isEmpty()) result.append(stack.pop());
    <span class="kw">return</span> result.toString();
}

<span class="cmt">// Balanced Parentheses</span>
<span class="kw">public static boolean</span> <span class="mth">isValid</span>(String s) {
    Stack&lt;Character&gt; stack = <span class="kw">new</span> Stack&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">char</span> c : s.toCharArray()) {
        <span class="kw">if</span> (c == <span class="str">'('</span> || c == <span class="str">'{'</span> || c == <span class="str">'['</span>) {
            stack.push(c);
        } <span class="kw">else</span> {
            <span class="kw">if</span> (stack.isEmpty()) <span class="kw">return false</span>;
            <span class="kw">char</span> top = stack.pop();
            <span class="kw">if</span> ((c == <span class="str">')'</span> && top != <span class="str">'('</span>) ||
                (c == <span class="str">'}'</span> && top != <span class="str">'{'</span>) ||
                (c == <span class="str">']'</span> && top != <span class="str">'['</span>))
                <span class="kw">return false</span>;
        }
    }
    <span class="kw">return</span> stack.isEmpty();
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Next Greater Element</span>
<span class="kw">public static int</span>[] <span class="mth">nextGreater</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span>[] result = <span class="kw">new int</span>[arr.length];
    Stack&lt;Integer&gt; stack = <span class="kw">new</span> Stack&lt;&gt;();
    Arrays.fill(result, -<span class="mth">1</span>);
    <span class="kw">for</span> (<span class="kw">int</span> i = arr.length - <span class="mth">1</span>; i >= <span class="mth">0</span>; i--) {
        <span class="kw">while</span> (!stack.isEmpty() && stack.peek() <= arr[i]) stack.pop();
        <span class="kw">if</span> (!stack.isEmpty()) result[i] = stack.peek();
        stack.push(arr[i]);
    }
    <span class="kw">return</span> result;
}

<span class="cmt">// Previous Smaller Element</span>
<span class="kw">public static int</span>[] <span class="mth">prevSmaller</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">int</span>[] result = <span class="kw">new int</span>[arr.length];
    Stack&lt;Integer&gt; stack = <span class="kw">new</span> Stack&lt;&gt;();
    Arrays.fill(result, -<span class="mth">1</span>);
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < arr.length; i++) {
        <span class="kw">while</span> (!stack.isEmpty() && stack.peek() >= arr[i]) stack.pop();
        <span class="kw">if</span> (!stack.isEmpty()) result[i] = stack.peek();
        stack.push(arr[i]);
    }
    <span class="kw">return</span> result;
}

<span class="cmt">// Stock Span Problem</span>
<span class="kw">public static int</span>[] <span class="mth">stockSpan</span>(<span class="kw">int</span>[] prices) {
    <span class="kw">int</span>[] span = <span class="kw">new int</span>[prices.length];
    Stack&lt;Integer&gt; stack = <span class="kw">new</span> Stack&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < prices.length; i++) {
        <span class="kw">while</span> (!stack.isEmpty() && prices[stack.peek()] <= prices[i]) stack.pop();
        span[i] = stack.isEmpty() ? i + <span class="mth">1</span> : i - stack.peek();
        stack.push(i);
    }
    <span class="kw">return</span> span;
}

<span class="cmt">// Min Stack</span>
<span class="kw">class</span> <span class="cls">MinStack</span> {
    Stack&lt;Integer&gt; stack = <span class="kw">new</span> Stack&lt;&gt;();
    Stack&lt;Integer&gt; minStack = <span class="kw">new</span> Stack&lt;&gt;();

    <span class="kw">void</span> <span class="mth">push</span>(<span class="kw">int</span> val) {
        stack.push(val);
        <span class="kw">if</span> (minStack.isEmpty() || val <= minStack.peek())
            minStack.push(val);
    }

    <span class="kw">int</span> <span class="mth">pop</span>() {
        <span class="kw">int</span> val = stack.pop();
        <span class="kw">if</span> (val == minStack.peek()) minStack.pop();
        <span class="kw">return</span> val;
    }

    <span class="kw">int</span> <span class="mth">getMin</span>() { <span class="kw">return</span> minStack.peek(); }
}</pre>
</div>`
},

'queue': {
title: 'Queue',
icon: 'fa-indent',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=2ZNguzGL9Fw" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Queue Data Structure in Java | One Shot | Array Queue & Circular Queue Implementation</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-indent" style="color:var(--primary)"></i> Queue</h1><span class="badge beginner">Beginner</span></div>

<div class="concept-box">
<h3>FIFO - First In First Out</h3>
<p>Queue works like a line at a store. The first person in line is the first to be served.</p>
<ul>
<li><strong>enqueue:</strong> Add element to rear</li>
<li><strong>dequeue:</strong> Remove element from front</li>
<li><strong>front:</strong> Get front element</li>
<li><strong>rear:</strong> Get rear element</li>
</ul>
</div>

<div class="code-block">
<pre><span class="cmt">// Queue using Array (Circular)</span>
<span class="kw">class</span> <span class="cls">CircularQueue</span> {
    <span class="kw">int</span>[] arr;
    <span class="kw">int</span> front, rear, size, capacity;

    <span class="cls">CircularQueue</span>(<span class="kw">int</span> capacity) {
        <span class="kw">this</span>.capacity = capacity;
        arr = <span class="kw">new int</span>[capacity];
        front = rear = -<span class="mth">1</span>;
        size = <span class="mth">0</span>;
    }

    <span class="kw">void</span> <span class="mth">enqueue</span>(<span class="kw">int</span> val) {
        <span class="kw">if</span> (size == capacity) { System.out.println(<span class="str">"Full"</span>); <span class="kw">return</span>; }
        <span class="kw">if</span> (front == -<span class="mth">1</span>) front = <span class="mth">0</span>;
        rear = (rear + <span class="mth">1</span>) % capacity;
        arr[rear] = val;
        size++;
    }

    <span class="kw">int</span> <span class="mth">dequeue</span>() {
        <span class="kw">if</span> (size == <span class="mth">0</span>) { System.out.println(<span class="str">"Empty"</span>); <span class="kw">return</span> -<span class="mth">1</span>; }
        <span class="kw">int</span> val = arr[front];
        front = (front + <span class="mth">1</span>) % capacity;
        size--;
        <span class="kw">if</span> (size == <span class="mth">0</span>) { front = rear = -<span class="mth">1</span>; }
        <span class="kw">return</span> val;
    }

    <span class="kw">int</span> <span class="mth">peek</span>() {
        <span class="kw">if</span> (size == <span class="mth">0</span>) <span class="kw">return</span> -<span class="mth">1</span>;
        <span class="kw">return</span> arr[front];
    }

    <span class="kw">boolean</span> <span class="mth">isEmpty</span>() { <span class="kw">return</span> size == <span class="mth">0</span>; }
    <span class="kw">int</span> <span class="mth">size</span>() { <span class="kw">return</span> size; }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Generate Binary Numbers using Queue</span>
<span class="kw">public static</span> String[] <span class="mth">generateBinary</span>(<span class="kw">int</span> n) {
    String[] result = <span class="kw">new</span> String[n];
    Queue&lt;String&gt; queue = <span class="kw">new</span> LinkedList&lt;&gt;();
    queue.offer(<span class="str">"1"</span>);
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++) {
        String curr = queue.poll();
        result[i] = curr;
        queue.offer(curr + <span class="str">"0"</span>);
        queue.offer(curr + <span class="str">"1"</span>);
    }
    <span class="kw">return</span> result;
}

<span class="cmt">// First Non-Repeating Character in Stream</span>
<span class="kw">public static</span> String <span class="mth">firstNonRepeating</span>(String s) {
    <span class="kw">int</span>[] freq = <span class="kw">new int</span>[<span class="mth">26</span>];
    Queue&lt;Character&gt; queue = <span class="kw">new</span> LinkedList&lt;&gt;();
    StringBuilder result = <span class="kw">new</span> StringBuilder();
    <span class="kw">for</span> (<span class="kw">char</span> c : s.toCharArray()) {
        freq[c - <span class="str">'a'</span>]++;
        queue.offer(c);
        <span class="kw">while</span> (!queue.isEmpty() && freq[queue.peek() - <span class="str">'a'</span>] > <span class="mth">1</span>)
            queue.poll();
        result.append(queue.isEmpty() ? <span class="str">'#'</span> : queue.peek());
    }
    <span class="kw">return</span> result.toString();
}

<span class="cmt">// Sliding Window Maximum using Deque</span>
<span class="kw">public static int</span>[] <span class="mth">maxSlidingWindow</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> k) {
    <span class="kw">int</span>[] result = <span class="kw">new int</span>[nums.length - k + <span class="mth">1</span>];
    Deque&lt;Integer&gt; deque = <span class="kw">new</span> ArrayDeque&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < nums.length; i++) {
        <span class="kw">while</span> (!deque.isEmpty() && deque.peekFirst() < i - k + <span class="mth">1</span>)
            deque.pollFirst();
        <span class="kw">while</span> (!deque.isEmpty() && nums[deque.peekLast()] < nums[i])
            deque.pollLast();
        deque.offerLast(i);
        <span class="kw">if</span> (i >= k - <span class="mth">1</span>) result[i - k + <span class="mth">1</span>] = nums[deque.peekFirst()];
    }
    <span class="kw">return</span> result;
}</pre>
</div>`
},

'deque': {
title: 'Deque',
icon: 'fa-arrows-alt-v',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=TVQlV8Qhgoo" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Deque (Double-ended Queue): Definition, creation, use</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-arrows-alt-v" style="color:var(--primary)"></i> Deque</h1><span class="badge beginner">Beginner</span></div>

<div class="concept-box">
<h3>Double-Ended Queue</h3>
<p>A deque allows insertion and deletion at both ends. It can function as both a stack and a queue.</p>
<ul>
<li><strong>addFirst / offerFirst:</strong> Add to front</li>
<li><strong>addLast / offerLast:</strong> Add to rear</li>
<li><strong>removeFirst / pollFirst:</strong> Remove from front</li>
<li><strong>removeLast / pollLast:</strong> Remove from rear</li>
<li><strong>peekFirst:</strong> Get front element</li>
<li><strong>peekLast:</strong> Get rear element</li>
</ul>
</div>

<div class="code-block">
<pre><span class="cmt">// Using Java ArrayDeque</span>
<span class="kw">public class</span> <span class="cls">DequeDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        Deque&lt;Integer&gt; deque = <span class="kw">new</span> ArrayDeque&lt;&gt;();

        <span class="cmt">// Add elements</span>
        deque.addFirst(<span class="mth">1</span>);    <span class="cmt">// [1]</span>
        deque.addLast(<span class="mth">2</span>);     <span class="cmt">// [1, 2]</span>
        deque.addFirst(<span class="mth">0</span>);    <span class="cmt">// [0, 1, 2]</span>
        deque.addLast(<span class="mth">3</span>);     <span class="cmt">// [0, 1, 2, 3]</span>

        <span class="cmt">// Remove elements</span>
        deque.removeFirst();   <span class="cmt">// Returns 0, deque: [1, 2, 3]</span>
        deque.removeLast();    <span class="cmt">// Returns 3, deque: [1, 2]</span>

        <span class="cmt">// Peek elements</span>
        System.out.println(deque.peekFirst());  <span class="cmt">// 1</span>
        System.out.println(deque.peekLast());   <span class="cmt">// 2</span>

        <span class="cmt">// Check size and empty</span>
        System.out.println(deque.size());       <span class="cmt">// 2</span>
        System.out.println(deque.isEmpty());    <span class="cmt">// false</span>
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Sliding Window Maximum using Deque</span>
<span class="kw">public static int</span>[] <span class="mth">maxSlidingWindow</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> k) {
    <span class="kw">int</span>[] result = <span class="kw">new int</span>[nums.length - k + <span class="mth">1</span>];
    Deque&lt;Integer&gt; deque = <span class="kw">new</span> ArrayDeque&lt;&gt;();

    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < nums.length; i++) {
        <span class="cmt">// Remove indices outside window</span>
        <span class="kw">while</span> (!deque.isEmpty() && deque.peekFirst() < i - k + <span class="mth">1</span>)
            deque.pollFirst();
        <span class="cmt">// Remove smaller elements from rear</span>
        <span class="kw">while</span> (!deque.isEmpty() && nums[deque.peekLast()] < nums[i])
            deque.pollLast();
        deque.offerLast(i);
        <span class="cmt">// Add to result when window is complete</span>
        <span class="kw">if</span> (i >= k - <span class="mth">1</span>)
            result[i - k + <span class="mth">1</span>] = nums[deque.peekFirst()];
    }
    <span class="kw">return</span> result;
}

<span class="cmt">// Check Palindrome using Deque</span>
<span class="kw">public static boolean</span> <span class="mth">isPalindromeDeque</span>(String s) {
    Deque&lt;Character&gt; deque = <span class="kw">new</span> ArrayDeque&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">char</span> c : s.toCharArray()) {
        <span class="kw">if</span> (Character.isLetterOrDigit(c))
            deque.addLast(Character.toLowerCase(c));
    }
    <span class="kw">while</span> (deque.size() > <span class="mth">1</span>) {
        <span class="kw">if</span> (deque.pollFirst() != deque.pollLast()) <span class="kw">return false</span>;
    }
    <span class="kw">return true</span>;
}</pre>
</div>`
},
'hashing': {
title: 'Hashing',
icon: 'fa-database',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=29_xflQpPaU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Hashing in Data structures | Different ways to implement Hashing | How HashMaps work in Java</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-database" style="color:var(--primary)"></i> Hashing</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>Hash Functions and Collision Handling</h3>
<p>A hash function maps keys to array indices. Collisions occur when two keys hash to the same index.</p>
<ul>
<li><strong>Chaining:</strong> Each bucket stores a linked list of entries</li>
<li><strong>Open Addressing:</strong> Find next empty slot (linear/quadratic probing)</li>
</ul>
</div>

<div class="concept-box">
<h3>Java Collections Overview</h3>
<table>
<tr><th>Collection</th><th>Order</th><th>Null Keys</th><th>Thread Safe</th></tr>
<tr><td>HashMap</td><td>No guarantee</td><td>One null key</td><td>No</td></tr>
<tr><td>LinkedHashMap</td><td>Insertion order</td><td>One null key</td><td>No</td></tr>
<tr><td>TreeMap</td><td>Sorted (natural/custom)</td><td>No null keys</td><td>No</td></tr>
<tr><td>HashSet</td><td>No guarantee</td><td>One null element</td><td>No</td></tr>
<tr><td>LinkedHashSet</td><td>Insertion order</td><td>One null element</td><td>No</td></tr>
<tr><td>TreeSet</td><td>Sorted</td><td>No null elements</td><td>No</td></tr>
</table>
</div>

<div class="code-block">
<pre><span class="kw">import</span> java.util.*;

<span class="kw">public class</span> <span class="cls">HashingDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="cmt">// HashMap</span>
        HashMap&lt;String, Integer&gt; map = <span class="kw">new</span> HashMap&lt;&gt;();
        map.put(<span class="str">"apple"</span>, <span class="mth">3</span>);
        map.put(<span class="str">"banana"</span>, <span class="mth">2</span>);
        map.put(<span class="str">"cherry"</span>, <span class="mth">5</span>);

        System.out.println(map.get(<span class="str">"apple"</span>));       <span class="cmt">// 3</span>
        System.out.println(map.containsKey(<span class="str">"banana"</span>)); <span class="cmt">// true</span>
        System.out.println(map.size());                  <span class="cmt">// 3</span>

        <span class="cmt">// Iterate over HashMap</span>
        <span class="kw">for</span> (Map.Entry&lt;String, Integer&gt; entry : map.entrySet()) {
            System.out.println(entry.getKey() + <span class="str">": "</span> + entry.getValue());
        }

        <span class="cmt">// HashSet</span>
        HashSet&lt;Integer&gt; set = <span class="kw">new</span> HashSet&lt;&gt;();
        set.add(<span class="mth">1</span>); set.add(<span class="mth">2</span>); set.add(<span class="mth">3</span>); set.add(<span class="mth">2</span>);
        System.out.println(set.size());   <span class="cmt">// 3 (duplicates removed)</span>
        System.out.println(set.contains(<span class="mth">2</span>)); <span class="cmt">// true</span>

        <span class="cmt">// LinkedHashMap - maintains insertion order</span>
        LinkedHashMap&lt;String, Integer&gt; linkedMap = <span class="kw">new</span> LinkedHashMap&lt;&gt;();
        linkedMap.put(<span class="str">"first"</span>, <span class="mth">1</span>);
        linkedMap.put(<span class="str">"second"</span>, <span class="mth">2</span>);
        linkedMap.put(<span class="str">"third"</span>, <span class="mth">3</span>);
        <span class="cmt">// Iteration order: first, second, third</span>

        <span class="cmt">// TreeSet - sorted</span>
        TreeSet&lt;Integer&gt; treeSet = <span class="kw">new</span> TreeSet&lt;&gt;();
        treeSet.add(<span class="mth">5</span>); treeSet.add(<span class="mth">1</span>); treeSet.add(<span class="mth">3</span>);
        System.out.println(treeSet);  <span class="cmt">// [1, 3, 5]</span>
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Two Sum using HashMap</span>
<span class="kw">public static int</span>[] <span class="mth">twoSum</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> target) {
    HashMap&lt;Integer, Integer&gt; map = <span class="kw">new</span> HashMap&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < nums.length; i++) {
        <span class="kw">int</span> complement = target - nums[i];
        <span class="kw">if</span> (map.containsKey(complement))
            <span class="kw">return new int</span>{map.get(complement), i};
        map.put(nums[i], i);
    }
    <span class="kw">return new int</span>[]{};
}

<span class="cmt">// Count Frequency of Elements</span>
<span class="kw">public static</span> HashMap&lt;Integer, Integer&gt; <span class="mth">countFreq</span>(<span class="kw">int</span>[] arr) {
    HashMap&lt;Integer, Integer&gt; freq = <span class="kw">new</span> HashMap&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> val : arr)
        freq.put(val, freq.getOrDefault(val, <span class="mth">0</span>) + <span class="mth">1</span>);
    <span class="kw">return</span> freq;
}

<span class="cmt">// First Non-Repeating Character</span>
<span class="kw">public static int</span> <span class="mth">firstNonRepeating</span>(String s) {
    LinkedHashMap&lt;Character, Integer&gt; freq = <span class="kw">new</span> LinkedHashMap&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">char</span> c : s.toCharArray())
        freq.put(c, freq.getOrDefault(c, <span class="mth">0</span>) + <span class="mth">1</span>);
    <span class="kw">for</span> (<span class="kw">char</span> c : s.toCharArray())
        <span class="kw">if</span> (freq.get(c) == <span class="mth">1</span>) <span class="kw">return</span> s.indexOf(c);
    <span class="kw">return</span> -<span class="mth">1</span>;
}

<span class="cmt">// Detect Duplicates</span>
<span class="kw">public static boolean</span> <span class="mth">hasDuplicates</span>(<span class="kw">int</span>[] arr) {
    HashSet&lt;Integer&gt; set = <span class="kw">new</span> HashSet&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> val : arr) {
        <span class="kw">if</span> (!set.add(val)) <span class="kw">return true</span>;
    }
    <span class="kw">return false</span>;
}

<span class="cmt">// Longest Consecutive Sequence</span>
<span class="kw">public static int</span> <span class="mth">longestConsecutive</span>(<span class="kw">int</span>[] nums) {
    HashSet&lt;Integer&gt; set = <span class="kw">new</span> HashSet&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> n : nums) set.add(n);
    <span class="kw">int</span> longest = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> n : set) {
        <span class="kw">if</span> (!set.contains(n - <span class="mth">1</span>)) {
            <span class="kw">int</span> current = n, streak = <span class="mth">1</span>;
            <span class="kw">while</span> (set.contains(current + <span class="mth">1</span>)) {
                current++; streak++;
            }
            longest = Math.max(longest, streak);
        }
    }
    <span class="kw">return</span> longest;
}

<span class="cmt">// Subarray with Given Sum</span>
<span class="kw">public static int</span> <span class="mth">subarraySum</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    HashMap&lt;Integer, Integer&gt; prefixMap = <span class="kw">new</span> HashMap&lt;&gt;();
    prefixMap.put(<span class="mth">0</span>, <span class="mth">1</span>);
    <span class="kw">int</span> sum = <span class="mth">0</span>, count = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> val : arr) {
        sum += val;
        <span class="kw">if</span> (prefixMap.containsKey(sum - target))
            count += prefixMap.get(sum - target);
        prefixMap.put(sum, prefixMap.getOrDefault(sum, <span class="mth">0</span>) + <span class="mth">1</span>);
    }
    <span class="kw">return</span> count;
}</pre>
</div>`
},

'trees': {
title: 'Binary Tree',
icon: 'fa-sitemap',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=fAAZixBzIAI" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Binary Tree Algorithms for Technical Interviews - Full Course</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-sitemap" style="color:var(--primary)"></i> Binary Tree</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>Tree Terminology</h3>
<ul>
<li><strong>Root:</strong> Topmost node with no parent</li>
<li><strong>Leaf:</strong> Node with no children</li>
<li><strong>Height:</strong> Longest path from root to leaf</li>
<li><strong>Depth:</strong> Distance from root to that node</li>
<li><strong>Subtree:</strong> Tree formed by a node and its descendants</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">class</span> <span class="cls">TreeNode</span> {
    <span class="kw">int</span> val;
    TreeNode left, right;
    <span class="cls">TreeNode</span>(<span class="kw">int</span> val) {
        <span class="kw">this</span>.val = val;
        left = right = <span class="kw">null</span>;
    }
}

<span class="cmt">// Tree Traversals</span>
<span class="kw">class</span> <span class="cls">BinaryTree</span> {
    TreeNode root;

    <span class="cmt">// Preorder: Root -> Left -> Right</span>
    <span class="kw">void</span> <span class="mth">preorder</span>(TreeNode node) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span>;
        System.out.print(node.val + <span class="str">" "</span>);
        <span class="mth">preorder</span>(node.left);
        <span class="mth">preorder</span>(node.right);
    }

    <span class="cmt">// Inorder: Left -> Root -> Right</span>
    <span class="kw">void</span> <span class="mth">inorder</span>(TreeNode node) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span>;
        <span class="mth">inorder</span>(node.left);
        System.out.print(node.val + <span class="str">" "</span>);
        <span class="mth">inorder</span>(node.right);
    }

    <span class="cmt">// Postorder: Left -> Right -> Root</span>
    <span class="kw">void</span> <span class="mth">postorder</span>(TreeNode node) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span>;
        <span class="mth">postorder</span>(node.left);
        <span class="mth">postorder</span>(node.right);
        System.out.print(node.val + <span class="str">" "</span>);
    }

    <span class="cmt">// Level Order (BFS)</span>
    <span class="kw">void</span> <span class="mth">levelOrder</span>() {
        <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span>;
        Queue&lt;TreeNode&gt; queue = <span class="kw">new</span> LinkedList&lt;&gt;();
        queue.offer(root);
        <span class="kw">while</span> (!queue.isEmpty()) {
            <span class="kw">int</span> size = queue.size();
            <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < size; i++) {
                TreeNode node = queue.poll();
                System.out.print(node.val + <span class="str">" "</span>);
                <span class="kw">if</span> (node.left != <span class="kw">null</span>) queue.offer(node.left);
                <span class="kw">if</span> (node.right != <span class="kw">null</span>) queue.offer(node.right);
            }
        }
    }

    <span class="cmt">// Height of Tree</span>
    <span class="kw">int</span> <span class="mth">height</span>(TreeNode node) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span> -<span class="mth">1</span>;
        <span class="kw">return</span> <span class="mth">1</span> + Math.max(<span class="mth">height</span>(node.left), <span class="mth">height</span>(node.right));
    }

    <span class="cmt">// Count Nodes</span>
    <span class="kw">int</span> <span class="mth">countNodes</span>(TreeNode node) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span> <span class="mth">0</span>;
        <span class="kw">return</span> <span class="mth">1</span> + <span class="mth">countNodes</span>(node.left) + <span class="mth">countNodes</span>(node.right);
    }

    <span class="cmt">// Diameter of Tree</span>
    <span class="kw">int</span> diameter = <span class="mth">0</span>;
    <span class="kw">int</span> <span class="mth">diameter</span>(TreeNode node) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span> <span class="mth">0</span>;
        <span class="kw">int</span> left = <span class="mth">height</span>(node.left);
        <span class="kw">int</span> right = <span class="mth">height</span>(node.right);
        diameter = Math.max(diameter, left + right + <span class="mth">2</span>);
        <span class="kw">return</span> <span class="mth">1</span> + Math.max(left, right);
    }

    <span class="cmt">// Check if Balanced</span>
    <span class="kw">boolean</span> <span class="mth">isBalanced</span>(TreeNode node) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return true</span>;
        <span class="kw">int</span> left = <span class="mth">height</span>(node.left);
        <span class="kw">int</span> right = <span class="mth">height</span>(node.right);
        <span class="kw">return</span> Math.abs(left - right) <= <span class="mth">1</span>
            && <span class="mth">isBalanced</span>(node.left) && <span class="mth">isBalanced</span>(node.right);
    }

    <span class="cmt">// Zigzag Level Order Traversal</span>
    List&lt;List&lt;Integer&gt;&gt; <span class="mth">zigzagLevelOrder</span>(TreeNode root) {
        List&lt;List&lt;Integer&gt;&gt; result = <span class="kw">new</span> ArrayList&lt;&gt;();
        <span class="kw">if</span> (root == <span class="kw">null</span>) <span class="kw">return</span> result;
        Queue&lt;TreeNode&gt; queue = <span class="kw">new</span> LinkedList&lt;&gt;();
        queue.offer(root);
        <span class="kw">boolean</span> leftToRight = <span class="kw">true</span>;
        <span class="kw">while</span> (!queue.isEmpty()) {
            <span class="kw">int</span> size = queue.size();
            List&lt;Integer&gt; level = <span class="kw">new</span> ArrayList&lt;&gt;();
            <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < size; i++) {
                TreeNode node = queue.poll();
                <span class="kw">if</span> (leftToRight) level.add(node.val);
                <span class="kw">else</span> level.add(<span class="mth">0</span>, node.val);
                <span class="kw">if</span> (node.left != <span class="kw">null</span>) queue.offer(node.left);
                <span class="kw">if</span> (node.right != <span class="kw">null</span>) queue.offer(node.right);
            }
            result.add(level);
            leftToRight = !leftToRight;
        }
        <span class="kw">return</span> result;
    }
}</pre>
</div>`
},

'bst': {
title: 'Binary Search Tree',
icon: 'fa-balance-scale',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=zIX3zQP0khM" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Binary Search Trees (BST) Explained and Implemented in Java with Examples | Geekific</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-balance-scale" style="color:var(--primary)"></i> Binary Search Tree</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>BST Properties</h3>
<ul>
<li>Left subtree contains only values less than the node</li>
<li>Right subtree contains only values greater than the node</li>
<li>No duplicate values</li>
<li>Inorder traversal gives sorted order</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">class</span> <span class="cls">BST</span> {
    TreeNode root;

    <span class="cmt">// Search in BST</span>
    TreeNode <span class="mth">search</span>(TreeNode node, <span class="kw">int</span> key) {
        <span class="kw">if</span> (node == <span class="kw">null</span> || node.val == key) <span class="kw">return</span> node;
        <span class="kw">if</span> (key < node.val) <span class="kw">return</span> <span class="mth">search</span>(node.left, key);
        <span class="kw">return</span> <span class="mth">search</span>(node.right, key);
    }

    <span class="cmt">// Insert in BST</span>
    TreeNode <span class="mth">insert</span>(TreeNode node, <span class="kw">int</span> val) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return new</span> TreeNode(val);
        <span class="kw">if</span> (val < node.val) node.left = <span class="mth">insert</span>(node.left, val);
        <span class="kw">else if</span> (val > node.val) node.right = <span class="mth">insert</span>(node.right, val);
        <span class="kw">return</span> node;
    }

    <span class="cmt">// Delete from BST</span>
    TreeNode <span class="mth">delete</span>(TreeNode node, <span class="kw">int</span> key) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return null</span>;
        <span class="kw">if</span> (key < node.val) {
            node.left = <span class="mth">delete</span>(node.left, key);
        } <span class="kw">else if</span> (key > node.val) {
            node.right = <span class="mth">delete</span>(node.right, key);
        } <span class="kw">else</span> {
            <span class="kw">if</span> (node.left == <span class="kw">null</span>) <span class="kw">return</span> node.right;
            <span class="kw">if</span> (node.right == <span class="kw">null</span>) <span class="kw">return</span> node.left;
            TreeNode successor = <span class="mth">findMin</span>(node.right);
            node.val = successor.val;
            node.right = <span class="mth">delete</span>(node.right, successor.val);
        }
        <span class="kw">return</span> node;
    }

    <span class="cmt">// Find Minimum</span>
    TreeNode <span class="mth">findMin</span>(TreeNode node) {
        <span class="kw">while</span> (node.left != <span class="kw">null</span>) node = node.left;
        <span class="kw">return</span> node;
    }

    <span class="cmt">// Find Maximum</span>
    TreeNode <span class="mth">findMax</span>(TreeNode node) {
        <span class="kw">while</span> (node.right != <span class="kw">null</span>) node = node.right;
        <span class="kw">return</span> node;
    }

    <span class="cmt">// Inorder Successor</span>
    TreeNode <span class="mth">successor</span>(TreeNode root, TreeNode p) {
        TreeNode successor = <span class="kw">null</span>;
        <span class="kw">while</span> (root != <span class="kw">null</span>) {
            <span class="kw">if</span> (p.val < root.val) {
                successor = root;
                root = root.left;
            } <span class="kw">else</span> {
                root = root.right;
            }
        }
        <span class="kw">return</span> successor;
    }

    <span class="cmt">// Validate BST</span>
    <span class="kw">boolean</span> <span class="mth">isValidBST</span>(TreeNode node) {
        <span class="kw">return</span> <span class="mth">validate</span>(node, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    <span class="kw">boolean</span> <span class="mth">validate</span>(TreeNode node, <span class="kw">long</span> min, <span class="kw">long</span> max) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return true</span>;
        <span class="kw">if</span> (node.val <= min || node.val >= max) <span class="kw">return false</span>;
        <span class="kw">return</span> <span class="mth">validate</span>(node.left, min, node.val)
            && <span class="mth">validate</span>(node.right, node.val, max);
    }

    <span class="cmt">// Lowest Common Ancestor</span>
    TreeNode <span class="mth">lca</span>(TreeNode root, TreeNode p, TreeNode q) {
        <span class="kw">while</span> (root != <span class="kw">null</span>) {
            <span class="kw">if</span> (p.val < root.val && q.val < root.val) root = root.left;
            <span class="kw">else if</span> (p.val > root.val && q.val > root.val) root = root.right;
            <span class="kw">else</span> <span class="kw">return</span> root;
        }
        <span class="kw">return null</span>;
    }

    <span class="cmt">// Kth Smallest</span>
    <span class="kw">int</span> count = <span class="mth">0</span>, result = <span class="mth">0</span>;
    <span class="kw">void</span> <span class="mth">kthSmallest</span>(TreeNode node, <span class="kw">int</span> k) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span>;
        <span class="mth">kthSmallest</span>(node.left, k);
        count++;
        <span class="kw">if</span> (count == k) { result = node.val; <span class="kw">return</span>; }
        <span class="mth">kthSmallest</span>(node.right, k);
    }

    <span class="cmt">// Convert Sorted Array to BST</span>
    TreeNode <span class="mth">sortedArrayToBST</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> left, <span class="kw">int</span> right) {
        <span class="kw">if</span> (left > right) <span class="kw">return null</span>;
        <span class="kw">int</span> mid = left + (right - left) / <span class="mth">2</span>;
        TreeNode node = <span class="kw">new</span> TreeNode(nums[mid]);
        node.left = <span class="mth">sortedArrayToBST</span>(nums, left, mid - <span class="mth">1</span>);
        node.right = <span class="mth">sortedArrayToBST</span>(nums, mid + <span class="mth">1</span>, right);
        <span class="kw">return</span> node;
    }
}</pre>
</div>`
},

'heap': {
title: 'Heap and Priority Queue',
icon: 'fa-sort-amount-up',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=HIO8GzziFIg" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">DSA Tutorial #61: Min Priority Queue from SCRATCH 🤯 Build Min Heap in Java</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-sort-amount-up" style="color:var(--primary)"></i> Heap and Priority Queue</h1><span class="badge advanced">Advanced</span></div>

<div class="concept-box">
<h3>Heap Properties</h3>
<ul>
<li><strong>Min Heap:</strong> Parent <= Children (minimum at root)</li>
<li><strong>Max Heap:</strong> Parent >= Children (maximum at root)</li>
<li>Complete binary tree stored as array</li>
<li>For node at index i: left child = 2i+1, right child = 2i+2, parent = (i-1)/2</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">class</span> <span class="cls">MinHeap</span> {
    <span class="kw">int</span>[] heap;
    <span class="kw">int</span> size, capacity;

    <span class="cls">MinHeap</span>(<span class="kw">int</span> capacity) {
        <span class="kw">this</span>.capacity = capacity;
        heap = <span class="kw">new int</span>[capacity];
        size = <span class="mth">0</span>;
    }

    <span class="kw">void</span> <span class="mth">heapifyUp</span>(<span class="kw">int</span> i) {
        <span class="kw">while</span> (i > <span class="mth">0</span> && heap[(i - <span class="mth">1</span>) / <span class="mth">2</span>] > heap[i]) {
            <span class="kw">int</span> temp = heap[i];
            heap[i] = heap[(i - <span class="mth">1</span>) / <span class="mth">2</span>];
            heap[(i - <span class="mth">1</span>) / <span class="mth">2</span>] = temp;
            i = (i - <span class="mth">1</span>) / <span class="mth">2</span>;
        }
    }

    <span class="kw">void</span> <span class="mth">heapifyDown</span>(<span class="kw">int</span> i) {
        <span class="kw">int</span> smallest = i;
        <span class="kw">int</span> left = <span class="mth">2</span> * i + <span class="mth">1</span>, right = <span class="mth">2</span> * i + <span class="mth">2</span>;
        <span class="kw">if</span> (left < size && heap[left] < heap[smallest]) smallest = left;
        <span class="kw">if</span> (right < size && heap[right] < heap[smallest]) smallest = right;
        <span class="kw">if</span> (smallest != i) {
            <span class="kw">int</span> temp = heap[i]; heap[i] = heap[smallest]; heap[smallest] = temp;
            <span class="mth">heapifyDown</span>(smallest);
        }
    }

    <span class="kw">void</span> <span class="mth">insert</span>(<span class="kw">int</span> val) {
        <span class="kw">if</span> (size == capacity) <span class="kw">return</span>;
        heap[size] = val;
        size++;
        <span class="mth">heapifyUp</span>(size - <span class="mth">1</span>);
    }

    <span class="kw">int</span> <span class="mth">extractMin</span>() {
        <span class="kw">if</span> (size == <span class="mth">0</span>) <span class="kw">return</span> -<span class="mth">1</span>;
        <span class="kw">int</span> min = heap[<span class="mth">0</span>];
        heap[<span class="mth">0</span>] = heap[size - <span class="mth">1</span>];
        size--;
        <span class="mth">heapifyDown</span>(<span class="mth">0</span>);
        <span class="kw">return</span> min;
    }

    <span class="kw">int</span> <span class="mth">peek</span>() { <span class="kw">return</span> size > <span class="mth">0</span> ? heap[<span class="mth">0</span>] : -<span class="mth">1</span>; }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Java PriorityQueue</span>
<span class="kw">public class</span> <span class="cls">HeapDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="cmt">// Min Heap (default)</span>
        PriorityQueue&lt;Integer&gt; minHeap = <span class="kw">new</span> PriorityQueue&lt;&gt;();
        minHeap.offer(<span class="mth">5</span>); minHeap.offer(<span class="mth">2</span>); minHeap.offer(<span class="mth">8</span>);
        System.out.println(minHeap.poll());  <span class="cmt">// 2</span>

        <span class="cmt">// Max Heap</span>
        PriorityQueue&lt;Integer&gt; maxHeap = <span class="kw">new</span> PriorityQueue&lt;&gt;(
            Collections.reverseOrder());
        maxHeap.offer(<span class="mth">5</span>); maxHeap.offer(<span class="mth">2</span>); maxHeap.offer(<span class="mth">8</span>);
        System.out.println(maxHeap.poll());  <span class="cmt">// 8</span>
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Kth Largest Element</span>
<span class="kw">public static int</span> <span class="mth">findKthLargest</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> k) {
    PriorityQueue&lt;Integer&gt; minHeap = <span class="kw">new</span> PriorityQueue&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> num : nums) {
        minHeap.offer(num);
        <span class="kw">if</span> (minHeap.size() > k) minHeap.poll();
    }
    <span class="kw">return</span> minHeap.peek();
}

<span class="cmt">// Top K Frequent Elements</span>
<span class="kw">public static int</span>[] <span class="mth">topKFrequent</span>(<span class="kw">int</span>[] nums, <span class="kw">int</span> k) {
    Map&lt;Integer, Integer&gt; freq = <span class="kw">new</span> HashMap&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> n : nums) freq.put(n, freq.getOrDefault(n, <span class="mth">0</span>) + <span class="mth">1</span>);

    PriorityQueue&lt;Map.Entry&lt;Integer, Integer&gt;&gt; minHeap =
        <span class="kw">new</span> PriorityQueue&lt;&gt;((a, b) -> a.getValue() - b.getValue());

    <span class="kw">for</span> (Map.Entry&lt;Integer, Integer&gt; entry : freq.entrySet()) {
        minHeap.offer(entry);
        <span class="kw">if</span> (minHeap.size() > k) minHeap.poll();
    }

    <span class="kw">int</span>[] result = <span class="kw">new int</span>[k];
    <span class="kw">for</span> (<span class="kw">int</span> i = k - <span class="mth">1</span>; i >= <span class="mth">0</span>; i--)
        result[i] = minHeap.poll().getKey();
    <span class="kw">return</span> result;
}

<span class="cmt">// Merge K Sorted Arrays</span>
<span class="kw">public static int</span>[] <span class="mth">mergeKSorted</span>(<span class="kw">int</span>[][] arrays) {
    PriorityQueue&lt;<span class="kw">int</span>[]&gt; pq = <span class="kw">new</span> PriorityQueue&lt;&gt;(
        (a, b) -> a[<span class="mth">0</span>] - b[<span class="mth">0</span>]);
    <span class="kw">int</span> totalSize = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < arrays.length; i++) {
        <span class="kw">if</span> (arrays[i].length > <span class="mth">0</span>) {
            pq.offer(<span class="kw">new int</span>{arrays[i][<span class="mth">0</span>], i, <span class="mth">0</span>});
            totalSize += arrays[i].length;
        }
    }
    <span class="kw">int</span>[] result = <span class="kw">new int</span>[totalSize];
    <span class="kw">int</span> idx = <span class="mth">0</span>;
    <span class="kw">while</span> (!pq.isEmpty()) {
        <span class="kw">int</span>[] curr = pq.poll();
        result[idx++] = curr[<span class="mth">0</span>];
        <span class="kw">if</span> (curr[<span class="mth">2</span>] + <span class="mth">1</span> < arrays[curr[<span class="mth">1</span>]].length) {
            pq.offer(<span class="kw">new int</span>{
                arrays[curr[<span class="mth">1</span>]][curr[<span class="mth">2</span>] + <span class="mth">1</span>], curr[<span class="mth">1</span>], curr[<span class="mth">2</span>] + <span class="mth">1</span>});
        }
    }
    <span class="kw">return</span> result;
}</pre>
</div>`
},
'trie': {
title: 'Trie',
icon: 'fa-tree',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=oFf4oTE7GgY" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">How to insert a word in Trie - Part 2 | Animation</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-tree" style="color:var(--primary)"></i> Trie</h1><span class="badge advanced">Advanced</span></div>

<div class="concept-box">
<h3>What is a Trie?</h3>
<p>A Trie (prefix tree) is a tree-like data structure for storing strings. Each node represents a character, and paths from root to marked nodes form complete words.</p>
<ul>
<li><strong>Insert:</strong> O(m) where m is word length</li>
<li><strong>Search:</strong> O(m)</li>
<li><strong>Prefix Search:</strong> O(m)</li>
<li><strong>Space:</strong> O(ALPHABET_SIZE * m * n)</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">class</span> <span class="cls">TrieNode</span> {
    TrieNode[] children = <span class="kw">new</span> TrieNode[<span class="mth">26</span>];
    <span class="kw">boolean</span> isEndOfWord = <span class="kw">false</span>;
}

<span class="kw">class</span> <span class="cls">Trie</span> {
    TrieNode root;

    <span class="cls">Trie</span>() { root = <span class="kw">new</span> TrieNode(); }

    <span class="kw">void</span> <span class="mth">insert</span>(String word) {
        TrieNode node = root;
        <span class="kw">for</span> (<span class="kw">char</span> c : word.toCharArray()) {
            <span class="kw">int</span> idx = c - <span class="str">'a'</span>;
            <span class="kw">if</span> (node.children[idx] == <span class="kw">null</span>)
                node.children[idx] = <span class="kw">new</span> TrieNode();
            node = node.children[idx];
        }
        node.isEndOfWord = <span class="kw">true</span>;
    }

    <span class="kw">boolean</span> <span class="mth">search</span>(String word) {
        TrieNode node = <span class="mth">searchPrefix</span>(word);
        <span class="kw">return</span> node != <span class="kw">null</span> && node.isEndOfWord;
    }

    <span class="kw">boolean</span> <span class="mth">startsWith</span>(String prefix) {
        <span class="kw">return</span> <span class="mth">searchPrefix</span>(prefix) != <span class="kw">null</span>;
    }

    TrieNode <span class="mth">searchPrefix</span>(String prefix) {
        TrieNode node = root;
        <span class="kw">for</span> (<span class="kw">char</span> c : prefix.toCharArray()) {
            <span class="kw">int</span> idx = c - <span class="str">'a'</span>;
            <span class="kw">if</span> (node.children[idx] == <span class="kw">null</span>) <span class="kw">return null</span>;
            node = node.children[idx];
        }
        <span class="kw">return</span> node;
    }

    <span class="cmt">// Delete a word from Trie</span>
    <span class="kw">void</span> <span class="mth">delete</span>(String word) {
        <span class="mth">deleteHelper</span>(root, word, <span class="mth">0</span>);
    }

    <span class="kw">boolean</span> <span class="mth">deleteHelper</span>(TrieNode node, String word, <span class="kw">int</span> depth) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return false</span>;
        <span class="kw">if</span> (depth == word.length()) {
            <span class="kw">if</span> (!node.isEndOfWord) <span class="kw">return false</span>;
            node.isEndOfWord = <span class="kw">false</span>;
            <span class="kw">return</span> <span class="mth">hasNoChildren</span>(node);
        }
        <span class="kw">int</span> idx = word.charAt(depth) - <span class="str">'a'</span>;
        <span class="kw">boolean</span> shouldDelete = <span class="mth">deleteHelper</span>(node.children[idx], word, depth + <span class="mth">1</span>);
        <span class="kw">if</span> (shouldDelete) {
            node.children[idx] = <span class="kw">null</span>;
            <span class="kw">return</span> !node.isEndOfWord && <span class="mth">hasNoChildren</span>(node);
        }
        <span class="kw">return false</span>;
    }

    <span class="kw">boolean</span> <span class="mth">hasNoChildren</span>(TrieNode node) {
        <span class="kw">for</span> (TrieNode child : node.children)
            <span class="kw">if</span> (child != <span class="kw">null</span>) <span class="kw">return false</span>;
        <span class="kw">return true</span>;
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Word Dictionary (search with dots)</span>
<span class="kw">class</span> <span class="cls">WordDictionary</span> {
    TrieNode root = <span class="kw">new</span> TrieNode();

    <span class="kw">void</span> <span class="mth">addWord</span>(String word) {
        TrieNode node = root;
        <span class="kw">for</span> (<span class="kw">char</span> c : word.toCharArray()) {
            <span class="kw">int</span> idx = c - <span class="str">'a'</span>;
            <span class="kw">if</span> (node.children[idx] == <span class="kw">null</span>)
                node.children[idx] = <span class="kw">new</span> TrieNode();
            node = node.children[idx];
        }
        node.isEndOfWord = <span class="kw">true</span>;
    }

    <span class="kw">boolean</span> <span class="mth">search</span>(String word) {
        <span class="kw">return</span> <span class="mth">dfs</span>(root, word, <span class="mth">0</span>);
    }

    <span class="kw">boolean</span> <span class="mth">dfs</span>(TrieNode node, String word, <span class="kw">int</span> idx) {
        <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return false</span>;
        <span class="kw">if</span> (idx == word.length()) <span class="kw">return</span> node.isEndOfWord;
        <span class="kw">char</span> c = word.charAt(idx);
        <span class="kw">if</span> (c == <span class="str">'.'</span>) {
            <span class="kw">for</span> (TrieNode child : node.children) {
                <span class="kw">if</span> (<span class="mth">dfs</span>(child, word, idx + <span class="mth">1</span>)) <span class="kw">return true</span>;
            }
            <span class="kw">return false</span>;
        }
        <span class="kw">return</span> <span class="mth">dfs</span>(node.children[c - <span class="str">'a'</span>], word, idx + <span class="mth">1</span>);
    }
}

<span class="cmt">// Longest Common Prefix</span>
<span class="kw">public static</span> String <span class="mth">longestCommonPrefix</span>(String[] strs) {
    <span class="kw">if</span> (strs.length == <span class="mth">0</span>) <span class="kw">return</span> <span class="str">""</span>;
    Trie trie = <span class="kw">new</span> Trie();
    <span class="kw">for</span> (String s : strs) trie.insert(s);

    String prefix = strs[<span class="mth">0</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < prefix.length(); i++) {
        <span class="kw">if</span> (!trie.startsWith(prefix.substring(<span class="mth">0</span>, i + <span class="mth">1</span>)))
            <span class="kw">return</span> prefix.substring(<span class="mth">0</span>, i);
    }
    <span class="kw">return</span> prefix;
}

<span class="cmt">// Autocomplete</span>
<span class="kw">public static</span> List&lt;String&gt; <span class="mth">autocomplete</span>(Trie trie, String prefix) {
    List&lt;String&gt; result = <span class="kw">new</span> ArrayList&lt;&gt;();
    TrieNode node = trie.searchPrefix(prefix);
    <span class="kw">if</span> (node == <span class="kw">null</span>) <span class="kw">return</span> result;
    <span class="mth">collectWords</span>(node, <span class="kw">new</span> StringBuilder(prefix), result);
    <span class="kw">return</span> result;
}

<span class="kw">static void</span> <span class="mth">collectWords</span>(TrieNode node, StringBuilder sb, List&lt;String&gt; result) {
    <span class="kw">if</span> (node.isEndOfWord) result.add(sb.toString());
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < <span class="mth">26</span>; i++) {
        <span class="kw">if</span> (node.children[i] != <span class="kw">null</span>) {
            sb.append((<span class="kw">char</span>)(i + <span class="str">'a'</span>));
            <span class="mth">collectWords</span>(node.children[i], sb, result);
            sb.deleteCharAt(sb.length() - <span class="mth">1</span>);
        }
    }
}</pre>
</div>`
},

'graph-basics': {
title: 'Graph Basics',
icon: 'fa-project-diagram',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=99NvUundaPQ" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Graph in Java: Step-by-Step Guide | Basics, Types, Adjacency matrix, list & more</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-project-diagram" style="color:var(--primary)"></i> Graph Basics</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>Graph Terminology</h3>
<ul>
<li><strong>Vertex (Node):</strong> A point in the graph</li>
<li><strong>Edge:</strong> Connection between two vertices</li>
<li><strong>Directed:</strong> Edges have direction (one-way)</li>
<li><strong>Undirected:</strong> Edges have no direction (two-way)</li>
<li><strong>Weighted:</strong> Edges have associated costs</li>
<li><strong>Degree:</strong> Number of edges connected to a vertex</li>
<li><strong>Path:</strong> Sequence of vertices connected by edges</li>
<li><strong>Cycle:</strong> Path that starts and ends at the same vertex</li>
<li><strong>Connected Components:</strong> Maximal connected subgraphs</li>
</ul>
</div>

<div class="code-block">
<pre><span class="cmt">// Graph using Adjacency Matrix</span>
<span class="kw">class</span> <span class="cls">GraphMatrix</span> {
    <span class="kw">int</span>[][] adjMatrix;
    <span class="kw">int</span> vertices;

    <span class="cls">GraphMatrix</span>(<span class="kw">int</span> v) {
        vertices = v;
        adjMatrix = <span class="kw">new int</span>[v][v];
    }

    <span class="kw">void</span> <span class="mth">addEdge</span>(<span class="kw">int</span> u, <span class="kw">int</span> v) {
        adjMatrix[u][v] = <span class="mth">1</span>;
        adjMatrix[v][u] = <span class="mth">1</span>;  <span class="cmt">// undirected</span>
    }

    <span class="kw">void</span> <span class="mth">printGraph</span>() {
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < vertices; i++) {
            System.out.print(i + <span class="str">": "</span>);
            <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">0</span>; j < vertices; j++)
                <span class="kw">if</span> (adjMatrix[i][j] == <span class="mth">1</span>) System.out.print(j + <span class="str">" "</span>);
            System.out.println();
        }
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Graph using Adjacency List</span>
<span class="kw">class</span> <span class="cls">GraphList</span> {
    List&lt;List&lt;Integer&gt;&gt; adjList;
    <span class="kw">int</span> vertices;

    <span class="cls">GraphList</span>(<span class="kw">int</span> v) {
        vertices = v;
        adjList = <span class="kw">new</span> ArrayList&lt;&gt;();
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < v; i++)
            adjList.add(<span class="kw">new</span> ArrayList&lt;&gt;());
    }

    <span class="kw">void</span> <span class="mth">addEdge</span>(<span class="kw">int</span> u, <span class="kw">int</span> v) {
        adjList.get(u).add(v);
        adjList.get(v).add(u);  <span class="cmt">// undirected</span>
    }

    <span class="kw">void</span> <span class="mth">printGraph</span>() {
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < vertices; i++) {
            System.out.println(i + <span class="str">" -> "</span> + adjList.get(i));
        }
    }
}

<span class="cmt">// Weighted Graph using Adjacency List</span>
<span class="kw">class</span> <span class="cls">WeightedGraph</span> {
    List&lt;List&lt;<span class="kw">int</span>[]&gt;&gt; adjList;

    <span class="cls">WeightedGraph</span>(<span class="kw">int</span> v) {
        adjList = <span class="kw">new</span> ArrayList&lt;&gt;();
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < v; i++)
            adjList.add(<span class="kw">new</span> ArrayList&lt;&gt;());
    }

    <span class="kw">void</span> <span class="mth">addEdge</span>(<span class="kw">int</span> u, <span class="kw">int</span> v, <span class="kw">int</span> weight) {
        adjList.get(u).add(<span class="kw">new int</span>{v, weight});
        adjList.get(v).add(<span class="kw">new int</span>{u, weight});
    }
}</pre>
</div>`
},

'graph-traversal': {
title: 'Graph Traversal',
icon: 'fa-route',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=9Oev6UgLhiI" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Breadth First Search Explained and Implemented in Java | BFS | Graph Traversal & Theory | Geekific</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-route" style="color:var(--primary)"></i> Graph Traversal</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>BFS vs DFS</h3>
<table>
<tr><th>Feature</th><th>BFS</th><th>DFS</th></tr>
<tr><td>Data Structure</td><td>Queue</td><td>Stack/Recursion</td></tr>
<tr><td>Approach</td><td>Level by level</td><td>Go deep first</td></tr>
<tr><td>Shortest Path</td><td>Yes (unweighted)</td><td>No</td></tr>
<tr><td>Space</td><td>O(V)</td><td>O(V)</td></tr>
<tr><td>Time</td><td>O(V + E)</td><td>O(V + E)</td></tr>
</table>
</div>

<div class="code-block">
<pre><span class="cmt">// BFS - Breadth First Search</span>
<span class="kw">void</span> <span class="mth">bfs</span>(List&lt;List&lt;Integer&gt;&gt; adj, <span class="kw">int</span> start) {
    <span class="kw">boolean</span>[] visited = <span class="kw">new boolean</span>[adj.size()];
    Queue&lt;Integer&gt; queue = <span class="kw">new</span> LinkedList&lt;&gt;();
    visited[start] = <span class="kw">true</span>;
    queue.offer(start);

    <span class="kw">while</span> (!queue.isEmpty()) {
        <span class="kw">int</span> node = queue.poll();
        System.out.print(node + <span class="str">" "</span>);
        <span class="kw">for</span> (<span class="kw">int</span> neighbor : adj.get(node)) {
            <span class="kw">if</span> (!visited[neighbor]) {
                visited[neighbor] = <span class="kw">true</span>;
                queue.offer(neighbor);
            }
        }
    }
}

<span class="cmt">// Shortest Path in Unweighted Graph (BFS)</span>
<span class="kw">int</span>[] <span class="mth">shortestPath</span>(List&lt;List&lt;Integer&gt;&gt; adj, <span class="kw">int</span> start) {
    <span class="kw">int</span> n = adj.size();
    <span class="kw">int</span>[] dist = <span class="kw">new int</span>[n];
    Arrays.fill(dist, -<span class="mth">1</span>);
    dist[start] = <span class="mth">0</span>;
    Queue&lt;Integer&gt; queue = <span class="kw">new</span> LinkedList&lt;&gt;();
    queue.offer(start);
    <span class="kw">while</span> (!queue.isEmpty()) {
        <span class="kw">int</span> node = queue.poll();
        <span class="kw">for</span> (<span class="kw">int</span> neighbor : adj.get(node)) {
            <span class="kw">if</span> (dist[neighbor] == -<span class="mth">1</span>) {
                dist[neighbor] = dist[node] + <span class="mth">1</span>;
                queue.offer(neighbor);
            }
        }
    }
    <span class="kw">return</span> dist;
}

<span class="cmt">// Number of Islands (BFS)</span>
<span class="kw">public int</span> <span class="mth">numIslands</span>(<span class="kw">char</span>[][] grid) {
    <span class="kw">int</span> count = <span class="mth">0</span>;
    <span class="kw">boolean</span>[][] visited = <span class="kw">new boolean</span>[grid.length][grid[<span class="mth">0</span>].length];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < grid.length; i++) {
        <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">0</span>; j < grid[<span class="mth">0</span>].length; j++) {
            <span class="kw">if</span> (grid[i][j] == <span class="str">'1'</span> && !visited[i][j]) {
                <span class="mth">bfsIsland</span>(grid, visited, i, j);
                count++;
            }
        }
    }
    <span class="kw">return</span> count;
}

<span class="kw">void</span> <span class="mth">bfsIsland</span>(<span class="kw">char</span>[][] grid, <span class="kw">boolean</span>[][] visited, <span class="kw">int</span> row, <span class="kw">int</span> col) {
    <span class="kw">int</span>[][] dirs = {{-<span class="mth">1</span>,<span class="mth">0</span>},{<span class="mth">1</span>,<span class="mth">0</span>},{<span class="mth">0</span>,-<span class="mth">1</span>},{<span class="mth">0</span>,<span class="mth">1</span>}};
    Queue&lt;<span class="kw">int</span>[]&gt; queue = <span class="kw">new</span> LinkedList&lt;&gt;();
    queue.offer(<span class="kw">new int</span>{row, col});
    visited[row][col] = <span class="kw">true</span>;
    <span class="kw">while</span> (!queue.isEmpty()) {
        <span class="kw">int</span>[] curr = queue.poll();
        <span class="kw">for</span> (<span class="kw">int</span>[] d : dirs) {
            <span class="kw">int</span> nr = curr[<span class="mth">0</span>] + d[<span class="mth">0</span>], nc = curr[<span class="mth">1</span>] + d[<span class="mth">1</span>];
            <span class="kw">if</span> (nr >= <span class="mth">0</span> && nr < grid.length && nc >= <span class="mth">0</span>
                    && nc < grid[<span class="mth">0</span>].length
                    && grid[nr][nc] == <span class="str">'1'</span> && !visited[nr][nc]) {
                visited[nr][nc] = <span class="kw">true</span>;
                queue.offer(<span class="kw">new int</span>{nr, nc});
            }
        }
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// DFS - Depth First Search (Recursive)</span>
<span class="kw">void</span> <span class="mth">dfs</span>(List&lt;List&lt;Integer&gt;&gt; adj, <span class="kw">int</span> node, <span class="kw">boolean</span>[] visited) {
    visited[node] = <span class="kw">true</span>;
    System.out.print(node + <span class="str">" "</span>);
    <span class="kw">for</span> (<span class="kw">int</span> neighbor : adj.get(node)) {
        <span class="kw">if</span> (!visited[neighbor]) <span class="mth">dfs</span>(adj, neighbor, visited);
    }
}

<span class="cmt">// DFS using Stack (Iterative)</span>
<span class="kw">void</span> <span class="mth">dfsIterative</span>(List&lt;List&lt;Integer&gt;&gt; adj, <span class="kw">int</span> start) {
    <span class="kw">boolean</span>[] visited = <span class="kw">new boolean</span>[adj.size()];
    Stack&lt;Integer&gt; stack = <span class="kw">new</span> Stack&lt;&gt;();
    stack.push(start);
    <span class="kw">while</span> (!stack.isEmpty()) {
        <span class="kw">int</span> node = stack.pop();
        <span class="kw">if</span> (!visited[node]) {
            visited[node] = <span class="kw">true</span>;
            System.out.print(node + <span class="str">" "</span>);
            <span class="kw">for</span> (<span class="kw">int</span> neighbor : adj.get(node))
                <span class="kw">if</span> (!visited[neighbor]) stack.push(neighbor);
        }
    }
}

<span class="cmt">// Number of Connected Components</span>
<span class="kw">public int</span> <span class="mth">countComponents</span>(<span class="kw">int</span> n, <span class="kw">int</span>[][] edges) {
    List&lt;List&lt;Integer&gt;&gt; adj = <span class="kw">new</span> ArrayList&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++) adj.add(<span class="kw">new</span> ArrayList&lt;&gt;());
    <span class="kw">for</span> (<span class="kw">int</span>[] e : edges) {
        adj.get(e[<span class="mth">0</span>]).add(e[<span class="mth">1</span>]);
        adj.get(e[<span class="mth">1</span>]).add(e[<span class="mth">0</span>]);
    }
    <span class="kw">boolean</span>[] visited = <span class="kw">new boolean</span>[n];
    <span class="kw">int</span> count = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++) {
        <span class="kw">if</span> (!visited[i]) { <span class="mth">dfs</span>(adj, i, visited); count++; }
    }
    <span class="kw">return</span> count;
}

<span class="cmt">// Cycle Detection in Undirected Graph</span>
<span class="kw">boolean</span> <span class="mth">hasCycle</span>(List&lt;List&lt;Integer&gt;&gt; adj, <span class="kw">int</span> node, <span class="kw">boolean</span>[] visited, <span class="kw">int</span> parent) {
    visited[node] = <span class="kw">true</span>;
    <span class="kw">for</span> (<span class="kw">int</span> neighbor : adj.get(node)) {
        <span class="kw">if</span> (!visited[neighbor]) {
            <span class="kw">if</span> (<span class="mth">hasCycle</span>(adj, neighbor, visited, node)) <span class="kw">return true</span>;
        } <span class="kw">else if</span> (neighbor != parent) {
            <span class="kw">return true</span>;
        }
    }
    <span class="kw">return false</span>;
}</pre>
</div>`
},
'graph-algorithms': {
title: 'Graph Algorithms',
icon: 'fa-network-wired',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=tWVWeAqZ0WU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Graph Algorithms for Technical Interviews - Full Course</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-network-wired" style="color:var(--primary)"></i> Graph Algorithms</h1><span class="badge advanced">Advanced</span></div>

<div class="concept-box">
<h3>Dijkstra's Algorithm</h3>
<p>Finds shortest path from source to all vertices in weighted graph with non-negative edges. Uses a priority queue for O((V+E) log V).</p>
</div>

<div class="code-block">
<pre><span class="cmt">// Dijkstra's Algorithm</span>
<span class="kw">static int</span>[] <span class="mth">dijkstra</span>(List&lt;List&lt;<span class="kw">int</span>[]&gt;&gt; adj, <span class="kw">int</span> src) {
    <span class="kw">int</span> n = adj.size();
    <span class="kw">int</span>[] dist = <span class="kw">new int</span>[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[src] = <span class="mth">0</span>;
    PriorityQueue&lt;<span class="kw">int</span>[]&gt; pq = <span class="kw">new</span> PriorityQueue&lt;&gt;(
        (a, b) -> a[<span class="mth">1</span>] - b[<span class="mth">1</span>]);
    pq.offer(<span class="kw">new int</span>{src, <span class="mth">0</span>});

    <span class="kw">while</span> (!pq.isEmpty()) {
        <span class="kw">int</span>[] curr = pq.poll();
        <span class="kw">int</span> u = curr[<span class="mth">0</span>], d = curr[<span class="mth">1</span>];
        <span class="kw">if</span> (d > dist[u]) <span class="kw">continue</span>;
        <span class="kw">for</span> (<span class="kw">int</span>[] edge : adj.get(u)) {
            <span class="kw">int</span> v = edge[<span class="mth">0</span>], w = edge[<span class="mth">1</span>];
            <span class="kw">if</span> (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.offer(<span class="kw">new int</span>{v, dist[v]});
            }
        }
    }
    <span class="kw">return</span> dist;
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Bellman-Ford Algorithm (handles negative edges)</span>
<span class="kw">static int</span>[] <span class="mth">bellmanFord</span>(<span class="kw">int</span> n, <span class="kw">int</span>[][] edges, <span class="kw">int</span> src) {
    <span class="kw">int</span>[] dist = <span class="kw">new int</span>[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[src] = <span class="mth">0</span>;

    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n - <span class="mth">1</span>; i++) {
        <span class="kw">for</span> (<span class="kw">int</span>[] edge : edges) {
            <span class="kw">int</span> u = edge[<span class="mth">0</span>], v = edge[<span class="mth">1</span>], w = edge[<span class="mth">2</span>];
            <span class="kw">if</span> (dist[u] != Integer.MAX_VALUE && dist[u] + w < dist[v])
                dist[v] = dist[u] + w;
        }
    }
    <span class="kw">return</span> dist;
}

<span class="cmt">// Topological Sort (Kahn's Algorithm - BFS)</span>
<span class="kw">static int</span>[] <span class="mth">topoSort</span>(<span class="kw">int</span> n, List&lt;List&lt;Integer&gt;&gt; adj) {
    <span class="kw">int</span>[] inDegree = <span class="kw">new int</span>[n];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++)
        <span class="kw">for</span> (<span class="kw">int</span> v : adj.get(i)) inDegree[v]++;

    Queue&lt;Integer&gt; queue = <span class="kw">new</span> LinkedList&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++)
        <span class="kw">if</span> (inDegree[i] == <span class="mth">0</span>) queue.offer(i);

    <span class="kw">int</span>[] result = <span class="kw">new int</span>[n];
    <span class="kw">int</span> idx = <span class="mth">0</span>;
    <span class="kw">while</span> (!queue.isEmpty()) {
        <span class="kw">int</span> u = queue.poll();
        result[idx++] = u;
        <span class="kw">for</span> (<span class="kw">int</span> v : adj.get(u)) {
            <span class="kw">if</span> (--inDegree[v] == <span class="mth">0</span>) queue.offer(v);
        }
    }
    <span class="kw">return</span> idx == n ? result : <span class="kw">new int</span>[<span class="mth">0</span>];
}

<span class="cmt">// Course Schedule (Topological Sort application)</span>
<span class="kw">public boolean</span> <span class="mth">canFinish</span>(<span class="kw">int</span> numCourses, <span class="kw">int</span>[][] prerequisites) {
    List&lt;List&lt;Integer&gt;&gt; adj = <span class="kw">new</span> ArrayList&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < numCourses; i++) adj.add(<span class="kw">new</span> ArrayList&lt;&gt;());
    <span class="kw">int</span>[] inDegree = <span class="kw">new int</span>[numCourses];
    <span class="kw">for</span> (<span class="kw">int</span>[] p : prerequisites) {
        adj.get(p[<span class="mth">1</span>]).add(p[<span class="mth">0</span>]);
        inDegree[p[<span class="mth">0</span>]]++;
    }
    Queue&lt;Integer&gt; queue = <span class="kw">new</span> LinkedList&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < numCourses; i++)
        <span class="kw">if</span> (inDegree[i] == <span class="mth">0</span>) queue.offer(i);
    <span class="kw">int</span> count = <span class="mth">0</span>;
    <span class="kw">while</span> (!queue.isEmpty()) {
        <span class="kw">int</span> u = queue.poll();
        count++;
        <span class="kw">for</span> (<span class="kw">int</span> v : adj.get(u))
            <span class="kw">if</span> (--inDegree[v] == <span class="mth">0</span>) queue.offer(v);
    }
    <span class="kw">return</span> count == numCourses;
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Union-Find / Disjoint Set Union</span>
<span class="kw">class</span> <span class="cls">DSU</span> {
    <span class="kw">int</span>[] parent, rank;

    <span class="cls">DSU</span>(<span class="kw">int</span> n) {
        parent = <span class="kw">new int</span>[n];
        rank = <span class="kw">new int</span>[n];
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++) parent[i] = i;
    }

    <span class="kw">int</span> <span class="mth">find</span>(<span class="kw">int</span> x) {
        <span class="kw">if</span> (parent[x] != x) parent[x] = <span class="mth">find</span>(parent[x]);
        <span class="kw">return</span> parent[x];
    }

    <span class="kw">boolean</span> <span class="mth">union</span>(<span class="kw">int</span> x, <span class="kw">int</span> y) {
        <span class="kw">int</span> px = <span class="mth">find</span>(x), py = <span class="mth">find</span>(y);
        <span class="kw">if</span> (px == py) <span class="kw">return false</span>;
        <span class="kw">if</span> (rank[px] < rank[py]) { parent[px] = py; }
        <span class="kw">else if</span> (rank[px] > rank[py]) { parent[py] = px; }
        <span class="kw">else</span> { parent[py] = px; rank[px]++; }
        <span class="kw">return true</span>;
    }
}

<span class="cmt">// Kruskal's MST</span>
<span class="kw">static int</span> <span class="mth">kruskalMST</span>(<span class="kw">int</span> n, <span class="kw">int</span>[][] edges) {
    Arrays.sort(edges, (a, b) -> a[<span class="mth">2</span>] - b[<span class="mth">2</span>]);
    DSU dsu = <span class="kw">new</span> DSU(n);
    <span class="kw">int</span> mstWeight = <span class="mth">0</span>, edgesUsed = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span>[] edge : edges) {
        <span class="kw">if</span> (dsu.union(edge[<span class="mth">0</span>], edge[<span class="mth">1</span>])) {
            mstWeight += edge[<span class="mth">2</span>];
            edgesUsed++;
            <span class="kw">if</span> (edgesUsed == n - <span class="mth">1</span>) <span class="kw">break</span>;
        }
    }
    <span class="kw">return</span> mstWeight;
}

<span class="cmt">// Prim's MST</span>
<span class="kw">static int</span> <span class="mth">primMST</span>(List&lt;List&lt;<span class="kw">int</span>[]&gt;&gt; adj, <span class="kw">int</span> n) {
    <span class="kw">boolean</span>[] inMST = <span class="kw">new boolean</span>[n];
    PriorityQueue&lt;<span class="kw">int</span>[]&gt; pq = <span class="kw">new</span> PriorityQueue&lt;&gt;(
        (a, b) -> a[<span class="mth">1</span>] - b[<span class="mth">1</span>]);
    pq.offer(<span class="kw">new int</span>{<span class="mth">0</span>, <span class="mth">0</span>});
    <span class="kw">int</span> totalWeight = <span class="mth">0</span>;
    <span class="kw">while</span> (!pq.isEmpty()) {
        <span class="kw">int</span>[] curr = pq.poll();
        <span class="kw">int</span> u = curr[<span class="mth">0</span>], w = curr[<span class="mth">1</span>];
        <span class="kw">if</span> (inMST[u]) <span class="kw">continue</span>;
        inMST[u] = <span class="kw">true</span>;
        totalWeight += w;
        <span class="kw">for</span> (<span class="kw">int</span>[] edge : adj.get(u)) {
            <span class="kw">if</span> (!inMST[edge[<span class="mth">0</span>]])
                pq.offer(<span class="kw">new int</span>{edge[<span class="mth">0</span>], edge[<span class="mth">1</span>]});
        }
    }
    <span class="kw">return</span> totalWeight;
}

<span class="cmt">// Number of Provinces (Union-Find)</span>
<span class="kw">public int</span> <span class="mth">findCircleNum</span>(<span class="kw">int</span>[][] isConnected) {
    <span class="kw">int</span> n = isConnected.length;
    DSU dsu = <span class="kw">new</span> DSU(n);
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++)
        <span class="kw">for</span> (<span class="kw">int</span> j = i + <span class="mth">1</span>; j < n; j++)
            <span class="kw">if</span> (isConnected[i][j] == <span class="mth">1</span>) dsu.union(i, j);
    <span class="kw">int</span> provinces = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++)
        <span class="kw">if</span> (dsu.parent[i] == i) provinces++;
    <span class="kw">return</span> provinces;
}</pre>
</div>`
},

'greedy': {
title: 'Greedy Algorithms',
icon: 'fa-hand-holding-usd',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=rVkbGfDUBb0" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Lecture 4: Greedy Algorithms — Interval Scheduling, Fractional Knapsack, Graph Algorithms</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-hand-holding-usd" style="color:var(--primary)"></i> Greedy Algorithms</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>Greedy Choice Property</h3>
<p>A greedy algorithm makes the locally optimal choice at each step, hoping to find a global optimum. Works when the problem has optimal substructure and greedy choice property.</p>
</div>

<div class="code-block">
<pre><span class="cmt">// Activity Selection Problem</span>
<span class="kw">public static int</span> <span class="mth">activitySelection</span>(<span class="kw">int</span>[] start, <span class="kw">int</span>[] end) {
    <span class="kw">int</span> n = start.length;
    <span class="kw">int</span>[][] activities = <span class="kw">new int</span>[n][<span class="mth">2</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++) {
        activities[i][<span class="mth">0</span>] = start[i];
        activities[i][<span class="mth">1</span>] = end[i];
    }
    Arrays.sort(activities, (a, b) -> a[<span class="mth">1</span>] - b[<span class="mth">1</span>]);
    <span class="kw">int</span> count = <span class="mth">1</span>, lastEnd = activities[<span class="mth">0</span>][<span class="mth">1</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i < n; i++) {
        <span class="kw">if</span> (activities[i][<span class="mth">0</span>] >= lastEnd) {
            count++;
            lastEnd = activities[i][<span class="mth">1</span>];
        }
    }
    <span class="kw">return</span> count;
}

<span class="cmt">// Fractional Knapsack</span>
<span class="kw">public static double</span> <span class="mth">fractionalKnapsack</span>(<span class="kw">int</span>[] weights,
        <span class="kw">int</span>[] values, <span class="kw">int</span> capacity) {
    <span class="kw">int</span> n = weights.length;
    <span class="kw">double</span>[][] items = <span class="kw">new double</span>[n][<span class="mth">2</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++) {
        items[i][<span class="mth">0</span>] = weights[i];
        items[i][<span class="mth">1</span>] = values[i];
    }
    Arrays.sort(items, (a, b) -> <span class="kw">double</span>.compare(b[<span class="mth">1</span>] / b[<span class="mth">0</span>], a[<span class="mth">1</span>] / a[<span class="mth">0</span>]));
    <span class="kw">double</span> totalValue = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++) {
        <span class="kw">if</span> (capacity >= items[i][<span class="mth">0</span>]) {
            totalValue += items[i][<span class="mth">1</span>];
            capacity -= (<span class="kw">int</span>)items[i][<span class="mth">0</span>];
        } <span class="kw">else</span> {
            totalValue += items[i][<span class="mth">1</span>] * capacity / items[i][<span class="mth">0</span>];
            <span class="kw">break</span>;
        }
    }
    <span class="kw">return</span> totalValue;
}

<span class="cmt">// Job Sequencing Problem</span>
<span class="kw">public static int</span> <span class="mth">jobSequencing</span>(<span class="kw">int</span>[] deadlines, <span class="kw">int</span>[] profits) {
    <span class="kw">int</span> n = deadlines.length;
    <span class="kw">int</span>[][] jobs = <span class="kw">new int</span>[n][<span class="mth">2</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < n; i++) {
        jobs[i][<span class="mth">0</span>] = deadlines[i];
        jobs[i][<span class="mth">1</span>] = profits[i];
    }
    Arrays.sort(jobs, (a, b) -> b[<span class="mth">1</span>] - a[<span class="mth">1</span>]);
    <span class="kw">int</span> maxDeadline = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span>[] job : jobs) maxDeadline = Math.max(maxDeadline, job[<span class="mth">0</span>]);
    <span class="kw">int</span>[] slots = <span class="kw">new int</span>[maxDeadline + <span class="mth">1</span>];
    Arrays.fill(slots, -<span class="mth">1</span>);
    <span class="kw">int</span> totalProfit = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span>[] job : jobs) {
        <span class="kw">for</span> (<span class="kw">int</span> j = job[<span class="mth">0</span>]; j > <span class="mth">0</span>; j--) {
            <span class="kw">if</span> (slots[j] == -<span class="mth">1</span>) {
                slots[j] = job[<span class="mth">1</span>];
                totalProfit += job[<span class="mth">1</span>];
                <span class="kw">break</span>;
            }
        }
    }
    <span class="kw">return</span> totalProfit;
}

<span class="cmt">// Minimum Number of Coins</span>
<span class="kw">public static int</span> <span class="mth">minCoins</span>(<span class="kw">int</span>[] coins, <span class="kw">int</span> amount) {
    Arrays.sort(coins);
    <span class="kw">int</span> count = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = coins.length - <span class="mth">1</span>; i >= <span class="mth">0</span> && amount > <span class="mth">0</span>; i--) {
        <span class="kw">while</span> (amount >= coins[i]) {
            amount -= coins[i];
            count++;
        }
    }
    <span class="kw">return</span> amount == <span class="mth">0</span> ? count : -<span class="mth">1</span>;
}

<span class="cmt">// Jump Game</span>
<span class="kw">public boolean</span> <span class="mth">canJump</span>(<span class="kw">int</span>[] nums) {
    <span class="kw">int</span> maxReach = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < nums.length; i++) {
        <span class="kw">if</span> (i > maxReach) <span class="kw">return false</span>;
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    <span class="kw">return true</span>;
}

<span class="cmt">// Merge Intervals</span>
<span class="kw">public int</span>[][] <span class="mth">merge</span>(<span class="kw">int</span>[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[<span class="mth">0</span>] - b[<span class="mth">0</span>]);
    List&lt;<span class="kw">int</span>[]&gt; merged = <span class="kw">new</span> ArrayList&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span>[] interval : intervals) {
        <span class="kw">if</span> (merged.isEmpty() || merged.get(merged.size() - <span class="mth">1</span>)[<span class="mth">1</span>]
                < interval[<span class="mth">0</span>]) {
            merged.add(interval);
        } <span class="kw">else</span> {
            merged.get(merged.size() - <span class="mth">1</span>)[<span class="mth">1</span>] =
                Math.max(merged.get(merged.size() - <span class="mth">1</span>)[<span class="mth">1</span>], interval[<span class="mth">1</span>]);
        }
    }
    <span class="kw">return</span> merged.toArray(<span class="kw">new int</span>[merged.size()][]);
}</pre>
</div>`
},
'dp': {
title: 'Dynamic Programming',
icon: 'fa-puzzle-piece',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=xCbYmUPvc2Q" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">The 0/1 Knapsack Problem (Demystifying Dynamic Programming)</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-puzzle-piece" style="color:var(--primary)"></i> Dynamic Programming</h1><span class="badge advanced">Advanced</span></div>

<div class="concept-box">
<h3>DP Approach</h3>
<p>Solve problems by breaking them into overlapping subproblems and storing results to avoid redundant computation.</p>
<ul>
<li><strong>Recursion:</strong> Top-down, natural approach</li>
<li><strong>Memoization:</strong> Top-down with caching</li>
<li><strong>Tabulation:</strong> Bottom-up with table</li>
<li><strong>Space Optimization:</strong> Reduce space using rolling variables</li>
</ul>
</div>

<div class="code-block">
<pre><span class="cmt">// Fibonacci - All Approaches</span>

<span class="cmt">// 1. Recursion (O(2^n) time, O(n) space)</span>
<span class="kw">static int</span> <span class="mth">fibRec</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n <= <span class="mth">1</span>) <span class="kw">return</span> n;
    <span class="kw">return</span> <span class="mth">fibRec</span>(n - <span class="mth">1</span>) + <span class="mth">fibRec</span>(n - <span class="mth">2</span>);
}

<span class="cmt">// 2. Memoization (O(n) time, O(n) space)</span>
<span class="kw">static int</span> <span class="mth">fibMemo</span>(<span class="kw">int</span> n, <span class="kw">int</span>[] dp) {
    <span class="kw">if</span> (n <= <span class="mth">1</span>) <span class="kw">return</span> n;
    <span class="kw">if</span> (dp[n] != -<span class="mth">1</span>) <span class="kw">return</span> dp[n];
    dp[n] = <span class="mth">fibMemo</span>(n - <span class="mth">1</span>, dp) + <span class="mth">fibMemo</span>(n - <span class="mth">2</span>, dp);
    <span class="kw">return</span> dp[n];
}

<span class="cmt">// 3. Tabulation (O(n) time, O(n) space)</span>
<span class="kw">static int</span> <span class="mth">fibTab</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n <= <span class="mth">1</span>) <span class="kw">return</span> n;
    <span class="kw">int</span>[] dp = <span class="kw">new int</span>[n + <span class="mth">1</span>];
    dp[<span class="mth">0</span>] = <span class="mth">0</span>; dp[<span class="mth">1</span>] = <span class="mth">1</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">2</span>; i <= n; i++)
        dp[i] = dp[i - <span class="mth">1</span>] + dp[i - <span class="mth">2</span>];
    <span class="kw">return</span> dp[n];
}

<span class="cmt">// 4. Space Optimized (O(n) time, O(1) space)</span>
<span class="kw">static int</span> <span class="mth">fibSpace</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n <= <span class="mth">1</span>) <span class="kw">return</span> n;
    <span class="kw">int</span> prev2 = <span class="mth">0</span>, prev1 = <span class="mth">1</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">2</span>; i <= n; i++) {
        <span class="kw">int</span> curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    <span class="kw">return</span> prev1;
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Climbing Stairs</span>
<span class="kw">public static int</span> <span class="mth">climbStairs</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n <= <span class="mth">2</span>) <span class="kw">return</span> n;
    <span class="kw">int</span> prev2 = <span class="mth">1</span>, prev1 = <span class="mth">2</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">3</span>; i <= n; i++) {
        <span class="kw">int</span> curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    <span class="kw">return</span> prev1;
}

<span class="cmt">// House Robber</span>
<span class="kw">public static int</span> <span class="mth">rob</span>(<span class="kw">int</span>[] nums) {
    <span class="kw">if</span> (nums.length == <span class="mth">1</span>) <span class="kw">return</span> nums[<span class="mth">0</span>];
    <span class="kw">int</span> prev2 = nums[<span class="mth">0</span>], prev1 = Math.max(nums[<span class="mth">0</span>], nums[<span class="mth">1</span>]);
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">2</span>; i < nums.length; i++) {
        <span class="kw">int</span> curr = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = curr;
    }
    <span class="kw">return</span> prev1;
}

<span class="cmt">// Coin Change</span>
<span class="kw">public static int</span> <span class="mth">coinChange</span>(<span class="kw">int</span>[] coins, <span class="kw">int</span> amount) {
    <span class="kw">int</span>[] dp = <span class="kw">new int</span>[amount + <span class="mth">1</span>];
    Arrays.fill(dp, amount + <span class="mth">1</span>);
    dp[<span class="mth">0</span>] = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i <= amount; i++) {
        <span class="kw">for</span> (<span class="kw">int</span> coin : coins) {
            <span class="kw">if</span> (coin <= i && dp[i - coin] + <span class="mth">1</span> < dp[i])
                dp[i] = dp[i - coin] + <span class="mth">1</span>;
        }
    }
    <span class="kw">return</span> dp[amount] > amount ? -<span class="mth">1</span> : dp[amount];
}

<span class="cmt">// Unique Paths</span>
<span class="kw">public static int</span> <span class="mth">uniquePaths</span>(<span class="kw">int</span> m, <span class="kw">int</span> n) {
    <span class="kw">int</span>[] dp = <span class="kw">new int</span>[n];
    Arrays.fill(dp, <span class="mth">1</span>);
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i < m; i++)
        <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">1</span>; j < n; j++)
            dp[j] += dp[j - <span class="mth">1</span>];
    <span class="kw">return</span> dp[n - <span class="mth">1</span>];
}

<span class="cmt">// Minimum Path Sum</span>
<span class="kw">public static int</span> <span class="mth">minPathSum</span>(<span class="kw">int</span>[][] grid) {
    <span class="kw">int</span> m = grid.length, n = grid[<span class="mth">0</span>].length;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < m; i++) {
        <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">0</span>; j < n; j++) {
            <span class="kw">if</span> (i == <span class="mth">0</span> && j == <span class="mth">0</span>) <span class="kw">continue</span>;
            <span class="kw">else if</span> (i == <span class="mth">0</span>) grid[i][j] += grid[i][j - <span class="mth">1</span>];
            <span class="kw">else if</span> (j == <span class="mth">0</span>) grid[i][j] += grid[i - <span class="mth">1</span>][j];
            <span class="kw">else</span> grid[i][j] += Math.min(grid[i - <span class="mth">1</span>][j], grid[i][j - <span class="mth">1</span>]);
        }
    }
    <span class="kw">return</span> grid[m - <span class="mth">1</span>][n - <span class="mth">1</span>];
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// 0/1 Knapsack</span>
<span class="kw">public static int</span> <span class="mth">knapsack</span>(<span class="kw">int</span>[] weights, <span class="kw">int</span>[] values, <span class="kw">int</span> W) {
    <span class="kw">int</span> n = weights.length;
    <span class="kw">int</span>[][] dp = <span class="kw">new int</span>[n + <span class="mth">1</span>][W + <span class="mth">1</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i <= n; i++) {
        <span class="kw">for</span> (<span class="kw">int</span> w = <span class="mth">0</span>; w <= W; w++) {
            <span class="kw">if</span> (weights[i - <span class="mth">1</span>] <= w)
                dp[i][w] = Math.max(dp[i - <span class="mth">1</span>][w],
                    dp[i - <span class="mth">1</span>][w - weights[i - <span class="mth">1</span>]] + values[i - <span class="mth">1</span>]);
            <span class="kw">else</span>
                dp[i][w] = dp[i - <span class="mth">1</span>][w];
        }
    }
    <span class="kw">return</span> dp[n][W];
}

<span class="cmt">// Subset Sum</span>
<span class="kw">public static boolean</span> <span class="mth">subsetSum</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target) {
    <span class="kw">boolean</span>[][] dp = <span class="kw">new boolean</span>[arr.length + <span class="mth">1</span>][target + <span class="mth">1</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i <= arr.length; i++) dp[i][<span class="mth">0</span>] = <span class="kw">true</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i <= arr.length; i++)
        <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">1</span>; j <= target; j++)
            dp[i][j] = dp[i - <span class="mth">1</span>][j] ||
                (j >= arr[i - <span class="mth">1</span>] && dp[i - <span class="mth">1</span>][j - arr[i - <span class="mth">1</span>]]);
    <span class="kw">return</span> dp[arr.length][target];
}

<span class="cmt">// Longest Common Subsequence</span>
<span class="kw">public static int</span> <span class="mth">lcs</span>(String s1, String s2) {
    <span class="kw">int</span> m = s1.length(), n = s2.length();
    <span class="kw">int</span>[][] dp = <span class="kw">new int</span>[m + <span class="mth">1</span>][n + <span class="mth">1</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i <= m; i++)
        <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">1</span>; j <= n; j++)
            <span class="kw">if</span> (s1.charAt(i - <span class="mth">1</span>) == s2.charAt(j - <span class="mth">1</span>))
                dp[i][j] = dp[i - <span class="mth">1</span>][j - <span class="mth">1</span>] + <span class="mth">1</span>;
            <span class="kw">else</span>
                dp[i][j] = Math.max(dp[i - <span class="mth">1</span>][j], dp[i][j - <span class="mth">1</span>]);
    <span class="kw">return</span> dp[m][n];
}

<span class="cmt">// Edit Distance</span>
<span class="kw">public static int</span> <span class="mth">editDistance</span>(String s1, String s2) {
    <span class="kw">int</span> m = s1.length(), n = s2.length();
    <span class="kw">int</span>[][] dp = <span class="kw">new int</span>[m + <span class="mth">1</span>][n + <span class="mth">1</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i <= m; i++) dp[i][<span class="mth">0</span>] = i;
    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">0</span>; j <= n; j++) dp[<span class="mth">0</span>][j] = j;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i <= m; i++)
        <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">1</span>; j <= n; j++)
            <span class="kw">if</span> (s1.charAt(i - <span class="mth">1</span>) == s2.charAt(j - <span class="mth">1</span>))
                dp[i][j] = dp[i - <span class="mth">1</span>][j - <span class="mth">1</span>];
            <span class="kw">else</span>
                dp[i][j] = <span class="mth">1</span> + Math.min(dp[i - <span class="mth">1</span>][j - <span class="mth">1</span>],
                    Math.min(dp[i - <span class="mth">1</span>][j], dp[i][j - <span class="mth">1</span>]));
    <span class="kw">return</span> dp[m][n];
}

<span class="cmt">// Longest Increasing Subsequence</span>
<span class="kw">public static int</span> <span class="mth">lengthOfLIS</span>(<span class="kw">int</span>[] nums) {
    List&lt;Integer&gt; tails = <span class="kw">new</span> ArrayList&lt;&gt;();
    <span class="kw">for</span> (<span class="kw">int</span> num : nums) {
        <span class="kw">int</span> pos = Collections.binarySearch(tails, num);
        <span class="kw">if</span> (pos < <span class="mth">0</span>) pos = -(pos + <span class="mth">1</span>);
        <span class="kw">if</span> (pos == tails.size()) tails.add(num);
        <span class="kw">else</span> tails.set(pos, num);
    }
    <span class="kw">return</span> tails.size();
}

<span class="cmt">// Matrix Chain Multiplication</span>
<span class="kw">public static int</span> <span class="mth">matrixChain</span>(<span class="kw">int</span>[] dims) {
    <span class="kw">int</span> n = dims.length - <span class="mth">1</span>;
    <span class="kw">int</span>[][] dp = <span class="kw">new int</span>[n][n];
    <span class="kw">for</span> (<span class="kw">int</span> len = <span class="mth">2</span>; len <= n; len++)
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i <= n - len; i++) {
            <span class="kw">int</span> j = i + len - <span class="mth">1</span>;
            dp[i][j] = Integer.MAX_VALUE;
            <span class="kw">for</span> (<span class="kw">int</span> k = i; k < j; k++)
                dp[i][j] = Math.min(dp[i][j],
                    dp[i][k] + dp[k + <span class="mth">1</span>][j] + dims[i] * dims[k + <span class="mth">1</span>] * dims[j + <span class="mth">1</span>]);
        }
    <span class="kw">return</span> dp[<span class="mth">0</span>][n - <span class="mth">1</span>];
}

<span class="cmt">// Egg Dropping Problem</span>
<span class="kw">public static int</span> <span class="mth">eggDrop</span>(<span class="kw">int</span> eggs, <span class="kw">int</span> floors) {
    <span class="kw">int</span>[][] dp = <span class="kw">new int</span>[eggs + <span class="mth">1</span>][floors + <span class="mth">1</span>];
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">1</span>; i <= eggs; i++)
        dp[i][<span class="mth">0</span>] = <span class="mth">0</span>;
    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">1</span>; j <= floors; j++)
        dp[<span class="mth">1</span>][j] = j;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">2</span>; i <= eggs; i++)
        <span class="kw">for</span> (<span class="kw">int</span> j = <span class="mth">1</span>; j <= floors; j++) {
            dp[i][j] = j;
            <span class="kw">for</span> (<span class="kw">int</span> k = <span class="mth">1</span>; k <= j; k++)
                dp[i][j] = Math.min(dp[i][j],
                    <span class="mth">1</span> + Math.max(dp[i - <span class="mth">1</span>][k - <span class="mth">1</span>], dp[i][j - k]));
        }
    <span class="kw">return</span> dp[eggs][floors];
}</pre>
</div>`
},

'bit-manipulation': {
title: 'Bit Manipulation',
icon: 'fa-microchip',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=NLKQEOgBAnw" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Algorithms: Bit Manipulation — HackerRank</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-microchip" style="color:var(--primary)"></i> Bit Manipulation</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>Bitwise Operators</h3>
<table>
<tr><th>Operator</th><th>Description</th><th>Example</th></tr>
<tr><td>& (AND)</td><td>Both bits must be 1</td><td>5 & 3 = 1 (101 & 011 = 001)</td></tr>
<tr><td>| (OR)</td><td>Either bit must be 1</td><td>5 | 3 = 7 (101 | 011 = 111)</td></tr>
<tr><td>^ (XOR)</td><td>Bits must be different</td><td>5 ^ 3 = 6 (101 ^ 011 = 110)</td></tr>
<tr><td>~ (NOT)</td><td>Flips all bits</td><td>~5 = -6</td></tr>
<tr><td><< (Left Shift)</td><td>Shift left, fill with 0</td><td>5 << 1 = 10</td></tr>
<tr><td>>> (Right Shift)</td><td>Shift right, preserve sign</td><td>5 >> 1 = 2</td></tr>
<tr><td>>>> (Unsigned Right Shift)</td><td>Shift right, fill with 0</td><td>-5 >>> 1 = large positive</td></tr>
</table>
</div>

<div class="code-block">
<pre><span class="kw">public class</span> <span class="cls">BitManipulation</span> {
    <span class="cmt">// Check if number is even or odd</span>
    <span class="kw">static boolean</span> <span class="mth">isEven</span>(<span class="kw">int</span> n) { <span class="kw">return</span> (n & <span class="mth">1</span>) == <span class="mth">0</span>; }

    <span class="cmt">// Check if power of 2</span>
    <span class="kw">static boolean</span> <span class="mth">isPowerOfTwo</span>(<span class="kw">int</span> n) {
        <span class="kw">return</span> n > <span class="mth">0</span> && (n & (n - <span class="mth">1</span>)) == <span class="mth">0</span>;
    }

    <span class="cmt">// Set bit at position (0-indexed from right)</span>
    <span class="kw">static int</span> <span class="mth">setBit</span>(<span class="kw">int</span> n, <span class="kw">int</span> pos) {
        <span class="kw">return</span> n | (<span class="mth">1</span> << pos);
    }

    <span class="cmt">// Clear bit at position</span>
    <span class="kw">static int</span> <span class="mth">clearBit</span>(<span class="kw">int</span> n, <span class="kw">int</span> pos) {
        <span class="kw">return</span> n & ~(<span class="mth">1</span> << pos);
    }

    <span class="cmt">// Toggle bit at position</span>
    <span class="kw">static int</span> <span class="mth">toggleBit</span>(<span class="kw">int</span> n, <span class="kw">int</span> pos) {
        <span class="kw">return</span> n ^ (<span class="mth">1</span> << pos);
    }

    <span class="cmt">// Count set bits (Brian Kernighan's)</span>
    <span class="kw">static int</span> <span class="mth">countBits</span>(<span class="kw">int</span> n) {
        <span class="kw">int</span> count = <span class="mth">0</span>;
        <span class="kw">while</span> (n > <span class="mth">0</span>) {
            n = n & (n - <span class="mth">1</span>);
            count++;
        }
        <span class="kw">return</span> count;
    }

    <span class="cmt">// Find unique element (all others appear twice)</span>
    <span class="kw">static int</span> <span class="mth">findUnique</span>(<span class="kw">int</span>[] arr) {
        <span class="kw">int</span> result = <span class="mth">0</span>;
        <span class="kw">for</span> (<span class="kw">int</span> num : arr) result ^= num;
        <span class="kw">return</span> result;
    }

    <span class="cmt">// Swap two numbers without temp</span>
    <span class="kw">static void</span> <span class="mth">swap</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> i, <span class="kw">int</span> j) {
        arr[i] ^= arr[j];
        arr[j] ^= arr[i];
        arr[i] ^= arr[j];
    }

    <span class="cmt">// Reverse bits of a 32-bit integer</span>
    <span class="kw">public int</span> <span class="mth">reverseBits</span>(<span class="kw">int</span> n) {
        <span class="kw">int</span> result = <span class="mth">0</span>;
        <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < <span class="mth">32</span>; i++) {
            result <<= <span class="mth">1</span>;
            result |= (n & <span class="mth">1</span>);
            n >>= <span class="mth">1</span>;
        }
        <span class="kw">return</span> result;
    }

    <span class="cmt">// Single Number (all appear 3 times except one)</span>
    <span class="kw">public int</span> <span class="mth">singleNumber</span>(<span class="kw">int</span>[] nums) {
        <span class="kw">int</span> ones = <span class="mth">0</span>, twos = <span class="mth">0</span>;
        <span class="kw">for</span> (<span class="kw">int</span> num : nums) {
            ones = (ones ^ num) & ~twos;
            twos = (twos ^ num) & ~ones;
        }
        <span class="kw">return</span> ones;
    }

    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        System.out.println(<span class="mth">isPowerOfTwo</span>(<span class="mth">16</span>));  <span class="cmt">// true</span>
        System.out.println(<span class="mth">countBits</span>(<span class="mth">7</span>));       <span class="cmt">// 3</span>
        System.out.println(<span class="mth">findUnique</span>(<span class="kw">new int</span>[]{<span class="mth">2</span>,<span class="mth">3</span>,<span class="mth">2</span>})); <span class="cmt">// 3</span>
    }
}</pre>
</div>`
},

'math': {
title: 'Mathematical Algorithms',
icon: 'fa-calculator',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=xwI5OBEnsZU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Math & Geometry for DSA — Java</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-calculator" style="color:var(--primary)"></i> Mathematical Algorithms</h1><span class="badge intermediate">Intermediate</span></div>

<div class="concept-box">
<h3>Prime Numbers</h3>
<p>A prime number is only divisible by 1 and itself. 2 is the smallest prime.</p>
</div>

<div class="code-block">
<pre><span class="cmt">// Check if Prime - O(sqrt(n))</span>
<span class="kw">static boolean</span> <span class="mth">isPrime</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n <= <span class="mth">1</span>) <span class="kw">return false</span>;
    <span class="kw">if</span> (n <= <span class="mth">3</span>) <span class="kw">return true</span>;
    <span class="kw">if</span> (n % <span class="mth">2</span> == <span class="mth">0</span> || n % <span class="mth">3</span> == <span class="mth">0</span>) <span class="kw">return false</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">5</span>; i * i <= n; i += <span class="mth">6</span>) {
        <span class="kw">if</span> (n % i == <span class="mth">0</span> || n % (i + <span class="mth">2</span>) == <span class="mth">0</span>) <span class="kw">return false</span>;
    }
    <span class="kw">return true</span>;
}

<span class="cmt">// Sieve of Eratosthenes - Find all primes up to n</span>
<span class="kw">static boolean</span>[] <span class="mth">sieve</span>(<span class="kw">int</span> n) {
    <span class="kw">boolean</span>[] isPrime = <span class="kw">new boolean</span>[n + <span class="mth">1</span>];
    Arrays.fill(isPrime, <span class="kw">true</span>);
    isPrime[<span class="mth">0</span>] = isPrime[<span class="mth">1</span>] = <span class="kw">false</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">2</span>; i * i <= n; i++) {
        <span class="kw">if</span> (isPrime[i]) {
            <span class="kw">for</span> (<span class="kw">int</span> j = i * i; j <= n; j += i)
                isPrime[j] = <span class="kw">false</span>;
        }
    }
    <span class="kw">return</span> isPrime;
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// GCD using Euclidean Algorithm</span>
<span class="kw">static int</span> <span class="mth">gcd</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) {
    <span class="kw">while</span> (b != <span class="mth">0</span>) {
        <span class="kw">int</span> temp = b;
        b = a % b;
        a = temp;
    }
    <span class="kw">return</span> a;
}

<span class="cmt">// LCM</span>
<span class="kw">static int</span> <span class="mth">lcm</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) {
    <span class="kw">return</span> a / <span class="mth">gcd</span>(a, b) * b;
}

<span class="cmt">// Fast Exponentiation - O(log n)</span>
<span class="kw">static long</span> <span class="mth">power</span>(<span class="kw">long</span> base, <span class="kw">long</span> exp, <span class="kw">long</span> mod) {
    <span class="kw">long</span> result = <span class="mth">1</span>;
    base %= mod;
    <span class="kw">while</span> (exp > <span class="mth">0</span>) {
        <span class="kw">if</span> ((exp & <span class="mth">1</span>) == <span class="mth">1</span>)
            result = result * base % mod;
        exp >>= <span class="mth">1</span>;
        base = base * base % mod;
    }
    <span class="kw">return</span> result;
}

<span class="cmt">// Modular Inverse (for prime mod)</span>
<span class="kw">static long</span> <span class="mth">modInverse</span>(<span class="kw">long</span> a, <span class="kw">long</span> mod) {
    <span class="kw">return</span> <span class="mth">power</span>(a, mod - <span class="mth">2</span>, mod);
}

<span class="cmt">// nCr (Combination) using modular arithmetic</span>
<span class="kw">static long</span> <span class="mth">nCr</span>(<span class="kw">int</span> n, <span class="kw">int</span> r, <span class="kw">long</span> mod) {
    <span class="kw">if</span> (r > n) <span class="kw">return</span> <span class="mth">0</span>;
    <span class="kw">long</span> result = <span class="mth">1</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">0</span>; i < r; i++) {
        result = result * (n - i) % mod;
        result = result * <span class="mth">modInverse</span>(i + <span class="mth">1</span>, mod) % mod;
    }
    <span class="kw">return</span> result;
}

<span class="cmt">// Factorial</span>
<span class="kw">static long</span> <span class="mth">factorial</span>(<span class="kw">int</span> n, <span class="kw">long</span> mod) {
    <span class="kw">long</span> result = <span class="mth">1</span>;
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">2</span>; i <= n; i++)
        result = result * i % mod;
    <span class="kw">return</span> result;
}

<span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
    System.out.println(<span class="mth">isPrime</span>(<span class="mth">29</span>));          <span class="cmt">// true</span>
    System.out.println(<span class="mth">gcd</span>(<span class="mth">12</span>, <span class="mth">8</span>));             <span class="cmt">// 4</span>
    System.out.println(<span class="mth">lcm</span>(<span class="mth">4</span>, <span class="mth">6</span>));              <span class="cmt">// 12</span>
    System.out.println(<span class="mth">power</span>(<span class="mth">2</span>, <span class="mth">10</span>, <span class="mth">1000000007</span>)); <span class="cmt">// 1024</span>
    <span class="kw">boolean</span>[] primes = <span class="mth">sieve</span>(<span class="mth">50</span>);
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="mth">2</span>; i <= <span class="mth">50</span>; i++)
        <span class="kw">if</span> (primes[i]) System.out.print(i + <span class="str">" "</span>);
}</pre>
</div>`
},

'java-collections': {
title: 'Java Collections for DSA',
icon: 'fa-boxes',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=GhJlPhXOooM" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">Java Collections Hierarchy & ArrayList | Java in 30 Days | DAY - 19 (Part - 1)</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-boxes" style="color:var(--primary)"></i> Java Collections for DSA</h1><span class="badge beginner">Beginner</span></div>

<div class="concept-box">
<h3>Collection Framework Hierarchy</h3>
<ul>
<li><strong>List:</strong> Ordered, allows duplicates (ArrayList, LinkedList)</li>
<li><strong>Set:</strong> No duplicates (HashSet, LinkedHashSet, TreeSet)</li>
<li><strong>Map:</strong> Key-value pairs (HashMap, LinkedHashMap, TreeMap)</li>
<li><strong>Queue:</strong> FIFO structure (PriorityQueue, ArrayDeque)</li>
<li><strong>Stack:</strong> LIFO structure (Stack, Deque)</li>
</ul>
</div>

<div class="code-block">
<pre><span class="kw">import</span> java.util.*;

<span class="kw">public class</span> <span class="cls">CollectionsDemo</span> {
    <span class="kw">public static void</span> <span class="mth">main</span>(String[] args) {
        <span class="cmt">// ArrayList</span>
        ArrayList&lt;Integer&gt; list = <span class="kw">new</span> ArrayList&lt;&gt;();
        list.add(<span class="mth">1</span>); list.add(<span class="mth">2</span>); list.add(<span class="mth">3</span>);
        list.add(<span class="mth">1</span>, <span class="mth">10</span>);    <span class="cmt">// insert at index 1</span>
        list.remove(<span class="mth">0</span>);     <span class="cmt">// remove at index 0</span>
        list.get(<span class="mth">0</span>);         <span class="cmt">// access by index</span>
        list.contains(<span class="mth">2</span>);   <span class="cmt">// check if exists</span>
        Collections.sort(list);
        Collections.reverse(list);

        <span class="cmt">// LinkedList</span>
        LinkedList&lt;Integer&gt; linkedList = <span class="kw">new</span> LinkedList&lt;&gt;();
        linkedList.addFirst(<span class="mth">1</span>);
        linkedList.addLast(<span class="mth">2</span>);
        linkedList.removeFirst();

        <span class="cmt">// HashSet</span>
        HashSet&lt;String&gt; set = <span class="kw">new</span> HashSet&lt;&gt;();
        set.add(<span class="str">"apple"</span>); set.add(<span class="str">"banana"</span>);
        set.remove(<span class="str">"apple"</span>);
        System.out.println(set.contains(<span class="str">"banana"</span>));

        <span class="cmt">// TreeSet (sorted)</span>
        TreeSet&lt;Integer&gt; treeSet = <span class="kw">new</span> TreeSet&lt;&gt;();
        treeSet.add(<span class="mth">3</span>); treeSet.add(<span class="mth">1</span>); treeSet.add(<span class="mth">2</span>);
        System.out.println(treeSet.first()); <span class="cmt">// 1</span>
        System.out.println(treeSet.last());  <span class="cmt">// 3</span>

        <span class="cmt">// HashMap</span>
        HashMap&lt;String, Integer&gt; map = <span class="kw">new</span> HashMap&lt;&gt;();
        map.put(<span class="str">"a"</span>, <span class="mth">1</span>); map.put(<span class="str">"b"</span>, <span class="mth">2</span>);
        map.get(<span class="str">"a"</span>);      <span class="cmt">// 1</span>
        map.containsKey(<span class="str">"c"</span>); <span class="cmt">// false</span>
        map.getOrDefault(<span class="str">"c"</span>, <span class="mth">0</span>); <span class="cmt">// 0</span>
        map.remove(<span class="str">"a"</span>);

        <span class="cmt">// TreeMap (sorted by keys)</span>
        TreeMap&lt;Integer, String&gt; treeMap = <span class="kw">new</span> TreeMap&lt;&gt;();
        treeMap.put(<span class="mth">3</span>, <span class="str">"c"</span>); treeMap.put(<span class="mth">1</span>, <span class="str">"a"</span>);
        System.out.println(treeMap.firstKey()); <span class="cmt">// 1</span>

        <span class="cmt">// PriorityQueue (Min Heap)</span>
        PriorityQueue&lt;Integer&gt; minPQ = <span class="kw">new</span> PriorityQueue&lt;&gt;();
        minPQ.offer(<span class="mth">5</span>); minPQ.offer(<span class="mth">1</span>); minPQ.offer(<span class="mth">3</span>);
        System.out.println(minPQ.poll()); <span class="cmt">// 1</span>

        <span class="cmt">// PriorityQueue (Max Heap)</span>
        PriorityQueue&lt;Integer&gt; maxPQ =
            <span class="kw">new</span> PriorityQueue&lt;&gt;(Collections.reverseOrder());

        <span class="cmt">// ArrayDeque (Stack & Queue)</span>
        Deque&lt;Integer&gt; deque = <span class="kw">new</span> ArrayDeque&lt;&gt;();
        deque.push(<span class="mth">1</span>); deque.push(<span class="mth">2</span>);  <span class="cmt">// stack push</span>
        deque.pop();                    <span class="cmt">// stack pop</span>
        deque.offer(<span class="mth">3</span>); deque.offer(<span class="mth">4</span>); <span class="cmt">// queue offer</span>
        deque.poll();                   <span class="cmt">// queue poll</span>
    }
}</pre>
</div>

<div class="code-block">
<pre><span class="cmt">// Comparator Example</span>
<span class="kw">public static void</span> <span class="mth">sortExample</span>() {
    <span class="kw">int</span>[] arr = {<span class="mth">5</span>, <span class="mth">2</span>, <span class="mth">8</span>, <span class="mth">1</span>, <span class="mth">9</span>};

    <span class="cmt">// Sort in ascending order</span>
    Arrays.sort(arr);

    <span class="cmt">// Sort in descending order</span>
    Integer[] arr2 = {<span class="mth">5</span>, <span class="mth">2</span>, <span class="mth">8</span>, <span class="mth">1</span>, <span class="mth">9</span>};
    Arrays.sort(arr2, Collections.reverseOrder());

    <span class="cmt">// Custom comparator for objects</span>
    <span class="kw">int</span>[][] intervals = {{<span class="mth">1</span>,<span class="mth">3</span>}, {<span class="mth">2</span>,<span class="mth">6</span>}, {<span class="mth">8</span>,<span class="mth">10</span>}};
    Arrays.sort(intervals, (a, b) -> a[<span class="mth">0</span>] - b[<span class="mth">0</span>]);

    <span class="cmt">// Collections utility methods</span>
    List&lt;Integer&gt; list = Arrays.asList(<span class="mth">3</span>, <span class="mth">1</span>, <span class="mth">4</span>, <span class="mth">1</span>, <span class="mth">5</span>);
    Collections.sort(list);           <span class="cmt">// [1, 1, 3, 4, 5]</span>
    Collections.reverse(list);        <span class="cmt">// [5, 4, 3, 1, 1]</span>
    Collections.swap(list, <span class="mth">0</span>, <span class="mth">1</span>);   <span class="cmt">// swap elements</span>
    Collections.frequency(list, <span class="mth">1</span>); <span class="cmt">// 2</span>
    Collections.max(list);            <span class="cmt">// 5</span>
    Collections.min(list);            <span class="cmt">// 1</span>
}

<span class="cmt">// Using Arrays utility methods</span>
<span class="kw">public static void</span> <span class="mth">arraysExample</span>() {
    <span class="kw">int</span>[] arr = {<span class="mth">5</span>, <span class="mth">2</span>, <span class="mth">8</span>, <span class="mth">1</span>, <span class="mth">9</span>};
    Arrays.sort(arr);
    System.out.println(Arrays.toString(arr));  <span class="cmt">// [1, 2, 5, 8, 9]</span>
    <span class="kw">int</span> idx = Arrays.binarySearch(arr, <span class="mth">5</span>); <span class="cmt">// 2</span>
    <span class="kw">int</span>[] copy = Arrays.copyOf(arr, <span class="mth">3</span>);  <span class="cmt">// [1, 2, 5]</span>
    Arrays.fill(arr, <span class="mth">0</span>);                   <span class="cmt">// all zeros</span>
    <span class="kw">boolean</span> eq = Arrays.equals(arr, copy); <span class="cmt">// false</span>
}</pre>
</div>`
},

'dsa-patterns': {
title: 'Important DSA Patterns',
icon: 'fa-patterns',
content: `
<div class="video-section" style="margin-bottom: 20px;">
<h3><i class="fas fa-play-circle"></i> Video Lecture</h3>
<div style="text-align:center;padding:20px;background:var(--surface);border-radius:8px;border:1px solid var(--border);">
<a href="https://www.youtube.com/watch?v=xwI5OBEnsZU" target="_blank" rel="noopener" class="video-link-btn" style="display:inline-flex;align-items:center;gap:10px;padding:14px 28px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;border-radius:8px;font-weight:600;font-size:1rem;text-decoration:none;transition:transform .2s,box-shadow .2s;box-shadow:0 4px 12px rgba(255,0,0,.3);">
<i class="fab fa-youtube" style="font-size:1.2rem;"></i>
<span>Watch on YouTube</span>
<i class="fas fa-external-link-alt" style="font-size:.85rem;opacity:.8;"></i>
</a>
<p style="margin-top:12px;font-size:.85rem;color:var(--text-muted);">DSA Patterns (Sliding Window, Two Pointers) — Java</p>
</div>
</div>
<div class="lesson-header"><h1><i class="fas fa-th" style="color:var(--primary)"></i> Important DSA Patterns</h1><span class="badge advanced">Advanced</span></div>

<div class="concept-box">
<h3>Two Pointer</h3>
<p>Use two pointers to traverse a data structure. Common in array/string problems.</p>
<ul>
<li>Two Sum (sorted array)</li>
<li>Three Sum</li>
<li>Container With Most Water</li>
<li>Trapping Rain Water</li>
<li>Remove Duplicates</li>
</ul>
</div>

<div class="concept-box">
<h3>Sliding Window</h3>
<p>Maintain a window of elements. Useful for subarray/substring problems.</p>
<ul>
<li>Maximum Sum Subarray of Size K</li>
<li>Longest Substring Without Repeating Characters</li>
<li>Minimum Window Substring</li>
<li>Sliding Window Maximum</li>
<li>Permutation in String</li>
</ul>
</div>

<div class="concept-box">
<h3>Fast and Slow Pointer</h3>
<p>Use two pointers moving at different speeds. Great for cycle detection and linked list problems.</p>
<ul>
<li>Linked List Cycle</li>
<li>Happy Number</li>
<li>Middle of Linked List</li>
<li>PALINDROME Linked List</li>
<li>Cycle in Array</li>
</ul>
</div>

<div class="concept-box">
<h3>Prefix Sum</h3>
<p>Precompute cumulative sums for efficient range queries.</p>
<ul>
<li>Subarray Sum Equals K</li>
<li>Range Sum Query</li>
<li>Contiguous Array (equal 0s and 1s)</li>
<li>Find Pivot Index</li>
<li>Product of Array Except Self</li>
</ul>
</div>

<div class="concept-box">
<h3>Binary Search</h3>
<p>Search in sorted or monotonic data. Also applies on answer space.</p>
<ul>
<li>Search in Rotated Sorted Array</li>
<li>Find Minimum in Rotated Sorted Array</li>
<li>Median of Two Sorted Arrays</li>
<li>Koko Eating Bananas</li>
<li>Aggressive Cows (Binary Search on Answer)</li>
</ul>
</div>

<div class="concept-box">
<h3>Monotonic Stack</h3>
<p>Stack that maintains increasing or decreasing order.</p>
<ul>
<li>Next Greater Element</li>
<li>Previous Smaller Element</li>
<li>Stock Span Problem</li>
<li>Largest Rectangle in Histogram</li>
<li>Trapping Rain Water</li>
</ul>
</div>

<div class="concept-box">
<h3>Backtracking</h3>
<p>Explore all possibilities, undo choices that don't lead to solutions.</p>
<ul>
<li>Subsets / Subsequences</li>
<li>Permutations</li>
<li>Combination Sum</li>
<li>N-Queens</li>
<li>Sudoku Solver / Word Search</li>
</ul>
</div>

<div class="concept-box">
<h3>Top K Elements</h3>
<p>Use heap/priority queue to find K largest/smallest elements.</p>
<ul>
<li>Kth Largest Element</li>
<li>Kth Smallest Element</li>
<li>Top K Frequent Elements</li>
<li>K Closest Points to Origin</li>
<li>Merge K Sorted Lists</li>
</ul>
</div>

<div class="concept-box">
<h3>Union Find (Disjoint Set)</h3>
<p>Efficiently track connected components and detect cycles in graphs.</p>
<ul>
<li>Number of Provinces</li>
<li>Redundant Connection</li>
<li>Accounts Merge</li>
<li>Number of Islands II</li>
<li>Graph Valid Tree</li>
</ul>
</div>

<div class="concept-box">
<h3>Dynamic Programming</h3>
<p>Solve overlapping subproblems by storing computed results.</p>
<ul>
<li><strong>1D DP:</strong> Fibonacci, Climbing Stairs, House Robber, Coin Change</li>
<li><strong>2D DP:</strong> Unique Paths, Minimum Path Sum, LCS, Edit Distance</li>
<li><strong>Knapsack:</strong> 0/1 Knapsack, Unbounded Knapsack, Subset Sum, Partition Equal</li>
<li><strong>String DP:</strong> Longest Palindromic Subsequence, Word Break</li>
<li><strong>Advanced:</strong> LIS, Matrix Chain Multiplication, Egg Dropping, DP on Trees</li>
</ul>
</div>`
}
};
