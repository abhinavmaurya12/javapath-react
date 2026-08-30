export default  {
    keywords: {
      'inheritance': {
        title: 'Inheritance in Java',
        content: 'Inheritance allows a class to inherit fields and methods from another class. Use the <code>extends</code> keyword.',
        code: 'class Animal {\n    void eat() { System.out.println("Eating..."); }\n}\n\nclass Dog extends Animal {\n    void bark() { System.out.println("Barking..."); }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n        d.eat();   // inherited\n        d.bark();  // own method\n    }\n}',
        explanation: 'Types: Single, Multilevel, Hierarchical. Java does NOT support multiple inheritance through classes (use interfaces instead).'
      },
      'polymorphism': {
        title: 'Polymorphism in Java',
        content: 'Polymorphism means "many forms". Two types: Compile-time (Method Overloading) and Runtime (Method Overriding).',
        code: '// Compile-time (Overloading)\nclass Calculator {\n    int add(int a, int b) { return a + b; }\n    double add(double a, double b) { return a + b; }\n}\n\n// Runtime (Overriding)\nclass Animal {\n    void sound() { System.out.println("Animal sound"); }\n}\nclass Dog extends Animal {\n    void sound() { System.out.println("Dog barks"); }\n}',
        explanation: 'Overloading = same method name, different parameters. Overriding = same method signature in parent & child.'
      },
      'abstraction': {
        title: 'Abstraction in Java',
        content: 'Abstraction hides implementation details. Achieved using abstract classes and interfaces.',
        code: 'abstract class Shape {\n    abstract double area();\n    void display() { System.out.println("I am a shape"); }\n}\n\nclass Circle extends Shape {\n    double radius;\n    Circle(double r) { this.radius = r; }\n    double area() { return Math.PI * radius * radius; }\n}',
        explanation: 'Abstract classes can have both abstract and concrete methods. Interfaces (Java 8+) can have default and static methods.'
      },
      'encapsulation': {
        title: 'Encapsulation in Java',
        content: 'Encapsulation wraps data and code together, restricting direct access through access modifiers and getters/setters.',
        code: 'public class BankAccount {\n    private double balance;  // hidden\n    \n    public double getBalance() { return balance; }\n    public void deposit(double amt) {\n        if (amt > 0) balance += amt;\n    }\n}',
        explanation: 'Access modifiers: public, protected, default (package), private. Benefits: data protection, controlled access.'
      },
      'exception': {
        title: 'Exception Handling in Java',
        content: 'Exception handling manages runtime errors using try-catch-finally blocks.',
        code: 'try {\n    int[] arr = {1, 2, 3};\n    System.out.println(arr[5]);\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println("Index out of bounds!");\n} finally {\n    System.out.println("Finally block always runs");\n}',
        explanation: 'Checked exceptions (IOException) must be handled. Unchecked (NullPointerException) are runtime errors. Use throw/throws for custom exceptions.'
      },
      'thread': {
        title: 'Multithreading in Java',
        content: 'Multithreading allows concurrent execution of multiple threads.',
        code: 'class MyThread extends Thread {\n    public void run() {\n        for (int i = 0; i < 5; i++) {\n            System.out.println(Thread.currentThread().getName() + ": " + i);\n        }\n    }\n}\n\n// Usage:\nMyThread t1 = new MyThread();\nt1.start();',
        explanation: 'Thread lifecycle: New -> Runnable -> Running -> Waiting -> Terminated. Use synchronized for thread safety.'
      },
      'string': {
        title: 'Java Strings',
        content: 'String is immutable. StringBuffer is mutable and thread-safe. StringBuilder is mutable but not thread-safe.',
        code: 'String s = "Hello";\ns.concat(" World");  // s is still "Hello"\nString s2 = s + " World";  // s2 = "Hello World"\n\nStringBuilder sb = new StringBuilder("Hello");\nsb.append(" World");  // sb = "Hello World"',
        explanation: 'String methods: length(), charAt(), substring(), toLowerCase(), trim(), equals(), indexOf(), replace(), split().'
      },
      'class': {
        title: 'Classes and Objects in Java',
        content: 'A class is a blueprint for creating objects. Objects are instances of classes with state (fields) and behavior (methods).',
        code: 'class Student {\n    String name;\n    int age;\n    \n    void display() {\n        System.out.println(name + " is " + age + " years old");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s1 = new Student();\n        s1.name = "Alice";\n        s1.age = 20;\n        s1.display();\n        \n        Student s2 = new Student();\n        s2.name = "Bob";\n        s2.age = 22;\n        s2.display();\n    }\n}',
        explanation: 'Use new keyword to create objects. Fields store data, methods define behavior. Every class extends Object implicitly.'
      },
      'array': {
        title: 'Java Arrays',
        content: 'Arrays hold fixed number of values of a single type.',
        code: 'int[] nums = {10, 20, 30, 40, 50};\nSystem.out.println(nums[0]);  // 10\nSystem.out.println(nums.length);  // 5\n\n// 2D Array\nint[][] matrix = {{1,2,3}, {4,5,6}, {7,8,9}};',
        explanation: 'Arrays are objects with fixed length. Use clone() or System.arraycopy() to copy arrays.'
      },
      'constructor': {
        title: 'Constructors in Java',
        content: 'A constructor is called automatically when an object is created. Same name as class, no return type.',
        code: 'class Employee {\n    String name;\n    double salary;\n    \n    Employee() { name = "Unknown"; salary = 0; }\n    Employee(String n, double s) { name = n; salary = s; }\n}',
        explanation: 'Types: Default (no args), Parameterized, Copy constructor. If you define ANY constructor, compiler won\'t provide default.'
      },
      'static': {
        title: 'Static Keyword in Java',
        content: 'static means the member belongs to the class, not to any object.',
        code: 'class Counter {\n    static int count = 0;\n    Counter() { count++; }\n    static void showCount() { System.out.println(count); }\n}\n\nCounter c1 = new Counter();\nCounter.showCount();  // 1',
        explanation: 'Static variables are shared by all objects. Static methods can be called without objects. Static block executes once when class loads.'
      },
      'java_this': {
        title: 'this Keyword in Java',
        content: 'this refers to the current object. Distinguishes instance variables from parameters.',
        code: 'class Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;  // instance var = param\n        this.age = age;\n    }\n}',
        explanation: 'this can refer to current object, invoke another constructor (this()), or pass as argument.'
      },
      'java_super': {
        title: 'super Keyword in Java',
        content: 'super refers to the parent class. Used to access parent methods, fields, constructors.',
        code: 'class Child extends Parent {\n    Child() {\n        super();  // call parent constructor\n    }\n    void show() {\n        super.show();  // call parent method\n    }\n}',
        explanation: 'super() must be first statement in constructor. Cannot use this() and super() together.'
      },
      'interface': {
        title: 'Interfaces in Java',
        content: 'An interface is a contract that a class must follow. A class can implement multiple interfaces.',
        code: 'interface Vehicle {\n    void start();\n    void stop();\n}\n\ninterface Electric {\n    void charge();\n}\n\nclass Tesla implements Vehicle, Electric {\n    public void start() { System.out.println("Tesla started"); }\n    public void stop() { System.out.println("Tesla stopped"); }\n    public void charge() { System.out.println("Charging..."); }\n}',
        explanation: 'All methods are implicitly public abstract (pre Java 8). Java 8+: default and static methods allowed.'
      },
      'overloading': {
        title: 'Method Overloading',
        content: 'Same method name with different parameter lists in the same class.',
        code: 'class Calculator {\n    int add(int a, int b) { return a + b; }\n    double add(double a, double b) { return a + b; }\n    int add(int a, int b, int c) { return a + b + c; }\n}',
        explanation: 'Overloading is compile-time polymorphism. Can vary by number, type, or order of parameters.'
      },
      'overriding': {
        title: 'Method Overriding',
        content: 'Subclass provides specific implementation of parent\'s method with same signature.',
        code: 'class Animal {\n    void sound() { System.out.println("Animal makes sound"); }\n}\nclass Dog extends Animal {\n    @Override\n    void sound() { System.out.println("Dog barks"); }\n}',
        explanation: 'Overriding is runtime polymorphism. Cannot override static, final, or private methods. Access modifier can be same or less restrictive.'
      },
      'wrapper': {
        title: 'Wrapper Classes in Java',
        content: 'Wrapper classes provide object representations of primitive types.',
        code: 'Integer i = 10;       // Autoboxing\nint n = i;            // Unboxing\n\nInteger.parseInt("123");  // String to int\nString.valueOf(123);       // int to String',
        explanation: 'byte->Byte, short->Short, int->Integer, long->Long, float->Float, double->Double, char->Character, boolean->Boolean'
      },
      'recursion': {
        title: 'Recursion in Java',
        content: 'A method that calls itself to solve a problem by breaking it into smaller sub-problems.',
        code: 'static int factorial(int n) {\n    if (n == 0 || n == 1) return 1;  // base case\n    return n * factorial(n - 1);      // recursive case\n}\n\n// factorial(5) = 5*4*3*2*1 = 120',
        explanation: 'Must have a base case to stop recursion. Java uses stack to track recursive calls.'
      },
      'stream': {
        title: 'Java Streams & File I/O',
        content: 'Streams handle I/O operations. Byte streams for binary, character streams for text.',
        code: 'import java.io.*;\n\ntry (FileWriter fw = new FileWriter("file.txt")) {\n    fw.write("Hello Java!");\n} catch (IOException e) {\n    e.printStackTrace();\n}',
        explanation: 'Use try-with-resources for auto-close. InputStream/OutputStream for bytes, Reader/Writer for characters.'
      },
      'jvm': {
        title: 'JVM, JRE, JDK',
        content: 'JVM executes bytecode. JRE = JVM + class libraries. JDK = JRE + development tools.',
        code: '// Compile and run:\n// javac HelloWorld.java  (compile)\n// java HelloWorld        (run)',
        explanation: 'JDK includes JRE includes JVM. JVM is platform-specific. Bytecode is platform-independent.'
      },
      'oops': {
        title: '4 Pillars of OOP',
        content: 'Encapsulation, Inheritance, Polymorphism, and Abstraction.',
        code: '// Encapsulation: private fields + getters/setters\n// Inheritance: class B extends A\n// Polymorphism: method overloading/overriding\n// Abstraction: abstract class / interface',
        explanation: 'These four principles help organize code, promote reusability, and make programs easier to maintain.'
      },
      'arraylist': {
        title: 'ArrayList in Java',
        content: 'ArrayList is a dynamic array that grows and shrinks as needed.',
        code: 'import java.util.ArrayList;\n\nArrayList<String> list = new ArrayList<>();\nlist.add("Java");\nlist.add("Python");\nlist.remove(0);\nSystem.out.println(list.size());',
        explanation: 'ArrayList methods: add(), remove(), get(), size(), contains(), isEmpty(). Use generics for type safety.'
      },
      'hashmap': {
        title: 'HashMap in Java',
        content: 'HashMap stores key-value pairs. No duplicate keys allowed.',
        code: 'import java.util.HashMap;\n\nHashMap<String, Integer> map = new HashMap<>();\nmap.put("Java", 1);\nmap.put("Python", 2);\nSystem.out.println(map.get("Java"));  // 1\nmap.remove("Python");',
        explanation: 'HashMap methods: put(), get(), remove(), containsKey(), keySet(), values(). Not synchronized.'
      },
      'pattern': {
        title: 'Pattern Programs in Java',
        content: 'Pattern programs use nested loops to print star, number, or alphabet patterns. They are great for practicing loop logic.',
        code: '// Star Triangle Pattern\npublic class StarPattern {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print("* ");\n            }\n            System.out.println();\n        }\n    }\n}\n\n// Output:\n// *\n// * *\n// * * *\n// * * * *\n// * * * * *',
        explanation: 'Common patterns: Star triangle, number pyramid, inverted triangle, Floyd\'s triangle, butterfly pattern.'
      },
      'collections': {
        title: 'Java Collections Framework',
        content: 'Collections provide data structures like List, Set, Queue, and Map for storing groups of objects.',
        code: 'import java.util.*;\n\n// ArrayList - ordered, duplicates allowed\nArrayList<String> list = new ArrayList<>();\nlist.add("Java");\nlist.add("Python");\n\n// HashSet - no duplicates\nHashSet<String> set = new HashSet<>();\nset.add("Java");\nset.add("Java"); // ignored\n\n// HashMap - key-value pairs\nHashMap<String, Integer> map = new HashMap<>();\nmap.put("Java", 1);',
        explanation: 'Key interfaces: List (ArrayList, LinkedList), Set (HashSet, TreeSet), Map (HashMap, TreeMap), Queue (PriorityQueue).'
      },
      'enum': {
        title: 'Enum in Java',
        content: 'Enum is a special class that represents a group of constants. Use when you have a fixed set of values.',
        code: 'enum Day {\n    MONDAY, TUESDAY, WEDNESDAY,\n    THURSDAY, FRIDAY, SATURDAY, SUNDAY\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Day today = Day.MONDAY;\n        switch (today) {\n            case MONDAY: System.out.println("Start of work week"); break;\n            case SUNDAY: System.out.println("Rest day"); break;\n        }\n        System.out.println(Day.values().length); // 7\n    }\n}',
        explanation: 'Enum methods: values(), valueOf(), ordinal(), name(). Enums can have fields, constructors, and methods.'
      },
      'package': {
        title: 'Packages in Java',
        content: 'Packages group related classes together. They prevent naming conflicts and control access.',
        code: '// File: com/javanest/utils/Calculator.java\npackage com.javanest.utils;\n\npublic class Calculator {\n    public static int add(int a, int b) { return a + b; }\n}\n\n// File: Main.java\nimport com.javanest.utils.Calculator;\n\npublic class Main {\n    public static void main(String[] args) {\n        int result = Calculator.add(5, 3);\n        System.out.println(result);\n    }\n}',
        explanation: 'java.lang is auto-imported. Use import for other packages. Use import * for all classes in a package.'
      },
      'garbage': {
        title: 'Garbage Collection in Java',
        content: 'Garbage collection automatically reclaims memory by destroying objects that are no longer referenced.',
        code: 'public class GCDemo {\n    public static void main(String[] args) {\n        GCDemo obj1 = new GCDemo();\n        GCDemo obj2 = new GCDemo();\n        obj1 = null; // eligible for GC\n        obj2 = null; // eligible for GC\n        System.gc(); // request GC (not guaranteed)\n    }\n    @Override\n        protected void finalize() {\n        System.out.println("Object destroyed");\n    }\n}',
        explanation: 'Objects with no references become eligible for GC. System.gc() suggests GC but doesn\'t guarantee. finalize() is deprecated in Java 9+.'
      },
      'for': {
        title: 'For Loop in Java',
        content: 'The for loop executes a block of code a fixed number of times.',
        code: '// Basic for loop\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\n// Enhanced for loop (for-each)\nint[] nums = {10, 20, 30};\nfor (int n : nums) {\n    System.out.println(n);\n}\n\n// Nested for loop\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++) {\n        System.out.print(i * j + " ");\n    }\n    System.out.println();\n}',
        explanation: 'Java also has while and do-while loops. Use break to exit and continue to skip iterations.'
      },
      'switch': {
        title: 'Switch Statement in Java',
        content: 'Switch selects one of many code blocks based on an expression value.',
        code: 'int day = 3;\nswitch (day) {\n    case 1: System.out.println("Monday"); break;\n    case 2: System.out.println("Tuesday"); break;\n    case 3: System.out.println("Wednesday"); break;\n    default: System.out.println("Other day");\n}\n\n// Java 14+ switch expression\nString result = switch (day) {\n    case 1 -> "Monday";\n    case 2 -> "Tuesday";\n    case 3 -> "Wednesday";\n    default -> "Other";\n};',
        explanation: 'Works with byte, short, int, char, String, and enum. Missing break causes fall-through.'
      },
      'try': {
        title: 'Try-With-Resources in Java',
        content: 'Auto-closes resources like streams and connections. Used since Java 7.',
        code: 'import java.io.*;\n\ntry (BufferedReader br = new BufferedReader(new FileReader("file.txt"));\n     BufferedWriter bw = new BufferedWriter(new FileWriter("out.txt"))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n        bw.write(line);\n        bw.newLine();\n    }\n} catch (IOException e) {\n    e.printStackTrace();\n}\n// Resources auto-closed here',
        explanation: 'Resources must implement AutoCloseable. Multiple resources separated by semicolons. Finally block still runs if present.'
      },
      'lambda': {
        title: 'Lambda Expressions in Java',
        content: 'Lambdas provide a concise way to implement functional interfaces (single abstract method).',
        code: '// Lambda syntax\n(MathematicalOperation) -> { return a + b; }\n\n// Examples\nList<String> list = Arrays.asList("Java", "Python", "C++");\nlist.forEach(s -> System.out.println(s));\n\nlist.sort((a, b) -> a.compareTo(b));\n\n// With functional interface\n@FunctionalInterface\ninterface Calculator {\n    int calculate(int a, int b);\n}\nCalculator add = (a, b) -> a + b;',
        explanation: 'Lambda is an anonymous function. Used with streams, collections, and functional interfaces. Can capture effectively final variables.'
      },
      'stream_api': {
        title: 'Streams API in Java',
        content: 'Streams provide a functional approach to process collections of data.',
        code: 'import java.util.*;\nimport java.util.stream.*;\n\nList<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");\n\n// Filter, map, collect\nList<String> result = names.stream()\n    .filter(n -> n.length() > 3)\n    .map(String::toUpperCase)\n    .sorted()\n    .collect(Collectors.toList());\n\nSystem.out.println(result); // [ALICE, BOB, CHARLIE, DAVID]\n\n// Sum of even numbers\nint sum = IntStream.range(1, 10)\n    .filter(n -> n % 2 == 0)\n    .sum();',
        explanation: 'Stream operations: filter, map, reduce, collect, sorted, distinct, forEach. Intermediate ops are lazy, terminal ops trigger execution.'
      },
      'default_method': {
        title: 'Default Methods in Interfaces',
        content: 'Java 8 introduced default methods that have a body in interfaces.',
        code: 'interface Vehicle {\n    void start();\n    \n    default void honk() {\n        System.out.println("Beep beep!");\n    }\n}\n\nclass Car implements Vehicle {\n    public void start() {\n        System.out.println("Car started");\n    }\n    // honk() is inherited from interface\n}\n\n// Call:\nCar c = new Car();\nc.start();\nc.honk(); // "Beep beep!"',
        explanation: 'Default methods allow adding new methods to interfaces without breaking existing implementations. Static methods also allowed in interfaces since Java 8.'
      },
      'finalize': {
        title: 'Finalize Method in Java',
        content: 'finalize() is called by GC before destroying an object. Deprecated since Java 9.',
        code: 'class MyClass {\n    @Override\n    protected void finalize() throws Throwable {\n        try {\n            System.out.println("Object is being finalized");\n        } finally {\n            super.finalize();\n        }\n    }\n    public static void main(String[] args) {\n        MyClass obj = new MyClass();\n        obj = null; // eligible for GC\n        System.gc(); // request GC\n    }\n}',
        explanation: 'finalize() is unreliable and deprecated. Use try-with-resources or Cleaner API instead for resource cleanup.'
      },
      'clone': {
        title: 'Clone Method in Java',
        content: 'clone() creates a copy of an object. Class must implement Cloneable.',
        code: 'class Student implements Cloneable {\n    String name;\n    int age;\n    \n    Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    @Override\n    protected Object clone() throws CloneNotSupportedException {\n        return super.clone();\n    }\n}\n\nStudent s1 = new Student("Alice", 20);\nStudent s2 = (Student) s1.clone();\nSystem.out.println(s2.name); // Alice',
        explanation: 'Shallow copy: copies references. Deep copy: copies objects. Use @Override clone() for custom copy logic.'
      },
      'autoboxing': {
        title: 'Autoboxing & Unboxing in Java',
        content: 'Automatic conversion between primitive types and their wrapper classes.',
        code: '// Autoboxing: primitive -> wrapper\nInteger num = 10;          // int -> Integer\nDouble d = 3.14;           // double -> Double\nBoolean b = true;          // boolean -> Boolean\n\n// Unboxing: wrapper -> primitive\nint n = num;               // Integer -> int\ndouble val = d;            // Double -> double\n\n// In collections\nArrayList<Integer> list = new ArrayList<>();\nlist.add(42);              // autoboxing\nint x = list.get(0);      // unboxing',
        explanation: 'Java automatically converts between primitives and wrappers. Happens in assignments, method calls, and collections.'
      },
      'casting': {
        title: 'Type Casting in Java',
        content: 'Converting one data type to another. Two types: widening (implicit) and narrowing (explicit).',
        code: '// Widening (implicit) - smaller to larger\nint i = 100;\nlong l = i;      // int -> long\nfloat f = l;     // long -> float\n\n// Narrowing (explicit) - larger to smaller\ndouble d = 9.78;\nint n = (int) d;  // double -> int, result: 9\n\n// Upcasting (implicit)\nAnimal a = new Dog();  // Dog -> Animal\n\n// Downcasting (explicit)\nDog d2 = (Dog) a;  // Animal -> Dog',
        explanation: 'Widening: automatic, no data loss. Narrowing: manual, may lose data. Use instanceof before downcasting.'
      },
      'var': {
        title: 'Var Keyword in Java',
        content: 'Java 10 introduced var for local variable type inference.',
        code: '// Before Java 10\nString name = "Java";\nArrayList<String> list = new ArrayList<>();\n\n// With var (Java 10+)\nvar name = "Java";              // inferred as String\nvar list = new ArrayList<String>(); // inferred as ArrayList<String>\nvar num = 100;                  // inferred as int\nvar PI = 3.14;                  // inferred as double\n\n// Enhanced for loop\nfor (var item : list) {\n    System.out.println(item);\n}',
        explanation: 'var can only be used for local variables with initializers. Not for fields, parameters, or return types. Makes code concise.'
      }
    },

    relatedTerms: {
      'inheritance': ['extends', 'child', 'parent', 'subclass', 'base class', 'is-a'],
      'polymorphism': ['overload', 'override', 'overloading', 'overriding', 'runtime polymorphism', 'compile time'],
      'abstraction': ['abstract class', 'abstract', 'interface', 'implements'],
      'encapsulation': ['private', 'getter', 'setter', 'access modifier', 'data hiding'],
      'exception': ['try', 'catch', 'finally', 'throw', 'throws', 'exception', 'error', 'checked', 'unchecked'],
      'thread': ['thread', 'synchronized', 'concurrent', 'parallel', 'multithreading', 'deadlock'],
      'string': ['stringbuffer', 'stringbuilder', 'immutable', 'mutable', 'string'],
      'array': ['arrays', 'array', 'index', 'length'],
      'arraylist': ['arraylist', 'dynamic array', 'list', 'collection', 'arraylist vs'],
      'constructor': ['constructor', 'default constructor', 'parameterized', 'copy constructor'],
      'class': ['class', 'object', 'instance', 'blueprint', 'fields', 'methods', 'new'],
      'this': ['this keyword', 'this.', 'this()'],
      'super': ['super keyword', 'super.', 'super()'],
      'interface': ['interface', 'implements', 'default method', 'functional interface'],
      'wrapper': ['autoboxing', 'unboxing', 'wrapper', 'parseint', 'integer', 'boxing'],
      'recursion': ['recursive', 'factorial', 'fibonacci', 'base case', 'call stack'],
      'stream': ['file', 'io', 'inputstream', 'outputstream', 'reader', 'writer', 'buffered'],
      'jvm': ['jvm', 'jre', 'jdk', 'bytecode', 'virtual machine', 'garbage collection'],
      'oops': ['oop', 'object', 'pillars', 'four pillars'],
      'hashmap': ['hashmap', 'map', 'key value', 'hashtable', 'linkedhashmap'],
      'overloading': ['method overloading', 'compile time polymorphism'],
      'overriding': ['method overriding', 'runtime polymorphism', '@override'],
      'static': ['static keyword', 'static method', 'static variable', 'static block'],
      'wrapper': ['autoboxing', 'unboxing', 'wrapper class', 'integer', 'parseint'],
      'pattern': ['pattern', 'star pattern', 'number pattern', 'triangle', 'pyramid', 'floyd', 'butterfly', 'diamond', 'hollow'],
      'collections': ['collection', 'arraylist', 'hashset', 'treeset', 'linkedlist', 'list', 'set', 'map', 'queue', 'deque'],
      'enum': ['enum', 'enumeration', 'constants', 'enum values'],
      'package': ['package', 'import', 'java.lang', 'java.util', 'java.io'],
      'garbage': ['garbage', 'gc', 'finalize', 'memory', 'heap', 'collect'],
      'for': ['for loop', 'for-each', 'enhanced for', 'nested loop', 'loops'],
      'switch': ['switch', 'case', 'break', 'default', 'fall-through'],
      'try': ['try-with-resources', 'auto close', 'try', 'resources'],
      'lambda': ['lambda', 'arrow', 'functional interface', 'anonymous function', '->'],
      'stream_api': ['stream', 'filter', 'map', 'reduce', 'collect', 'streams'],
      'default_method': ['default method', 'default', 'interface method'],
      'finalize': ['finalize', 'finalizer', 'object destruction'],
      'clone': ['clone', 'cloneable', 'copy', 'shallow copy', 'deep copy'],
      'autoboxing': ['autoboxing', 'unboxing', 'auto', 'primitive', 'wrapper'],
      'casting': ['casting', 'type cast', 'widening', 'narrowing', 'upcast', 'downcast', 'instanceof'],
      'var': ['var', 'inference', 'local variable', 'type inference', 'java 10']
    },

    greetings: {
      'hello': 'Hello! I\'m JavaNest AI Assistant. I can help you with Java concepts, code examples, interview preparation, practice programs, DSA topics, and guide you through the entire website. What would you like to know?',
      'hi': 'Hi there! I\'m here to help you with Java. Ask me about any concept, interview question, practice program, or DSA topic!',
      'hey': 'Hey! Ready to help with Java. I can answer from 51 interview questions, 15 chapters, 200+ practice programs, 80+ book chapters, and 30 DSA topics. Ask away!',
      'good morning': 'Good morning! Ready to learn some Java? I can help with concepts, code, interviews, and more.',
      'good afternoon': 'Good afternoon! What Java topic can I help with today?',
      'good evening': 'Good evening! Let\'s dive into Java together. Ask me anything!'
    },

    fallbacks: [
      'I can help with many Java topics! Try asking about: inheritance, polymorphism, abstraction, encapsulation, exception handling, threads, strings, arrays, patterns, collections, lambda, streams, enums, packages, constructors, static keyword, or try-with-resources.',
      'I know many Java concepts! Ask me about OOP principles, data types, loops, switch, casting, var keyword, autoboxing, cloning, garbage collection, or streams API.',
      'I\'m not sure about that. Try topics like: "What is pattern program?", "Explain polymorphism", "Java collections", "Lambda expressions", or "What is enum?"'
    ]
  };
