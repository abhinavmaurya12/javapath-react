import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import VoiceReader from '../components/VoiceReader'
import useSidebarSearch from '../hooks/useSidebarSearch'

const SECTIONS = [
  { title: "1. Java Basics", items: [
    "Java: High-level, class-based, object-oriented, statically typed language.",
    "JDK: Tools required to develop Java applications.",
    "JRE: Runtime environment for Java applications.",
    "JVM: Executes Java bytecode.",
    "JDK = JRE + Development Tools.",
    "JRE = JVM + Runtime Libraries.",
    "JVM: Platform dependent; Java bytecode: Platform independent.",
    "WORA: Write Once, Run Anywhere.",
    "Source File: .java",
    "Bytecode File: .class",
    "Compiler: javac converts source code to bytecode.",
    "JVM: Bytecode to machine instructions.",
    "JIT: Compiles frequently executed bytecode to native code at runtime.",
    "Main Method: public static void main(String[] args).",
    "Java is pass-by-value: Even object references are passed by value."
  ]},
  { title: "2. Java Syntax", items: [
    "Statement: Usually ends with ;.",
    "Block: Code enclosed in {}.",
    "Comment: //, /* */, /** */.",
    "Identifier: Name given to class, method, variable, etc.",
    "Keyword: Reserved word such as class, static, final.",
    "Case Sensitive: Name and name are different.",
    "Class Name: Conventionally PascalCase.",
    "Variable/Method: Conventionally camelCase.",
    "Constant: Conventionally UPPER_CASE.",
    "Package: Conventionally lowercase."
  ]},
  { title: "3. Data Types", items: [
    "Primitive Types: byte, short, int, long, float, double, char, boolean.",
    "byte: 8-bit signed integer.",
    "short: 16-bit signed integer.",
    "int: 32-bit signed integer.",
    "long: 64-bit signed integer.",
    "float: 32-bit floating-point.",
    "double: 64-bit floating-point.",
    "char: 16-bit unsigned UTF-16 code unit.",
    "boolean: true or false.",
    "Reference Type: Stores a reference to an object.",
    "Local Variable: Must be initialized before use.",
    "Instance Variable: Gets default value.",
    "Static Variable: Shared by class instances.",
    "final Variable: Cannot be reassigned after initialization.",
    "Type Casting: Converting one type into another.",
    "Widening: Smaller compatible type to larger type; usually automatic.",
    "Narrowing: Larger to smaller; explicit cast required."
  ]},
  { title: "4. Operators", items: [
    "Arithmetic: + - * / %",
    "Relational: > < >= <= == !=",
    "Logical: && || !",
    "Assignment: = += -= *= /= %="
  ]},
  { title: "5. Control Flow", items: [
    "if: Executes code when condition is true.",
    "if-else: Chooses between two paths.",
    "else-if: Tests multiple conditions.",
    "switch: Selects based on a value/pattern.",
    "for: Loop with initialization, condition, update.",
    "while: Checks condition before iteration.",
    "do-while: Executes body at least once.",
    "break: Terminates nearest loop/switch.",
    "continue: Skips current loop iteration.",
    "return: Exits method and optionally returns value.",
    "Enhanced for: Convenient traversal of arrays/iterables."
  ]},
  { title: "6. Class & Object", items: [
    "Class: Blueprint/template.",
    "Object: Runtime instance of class.",
    "new: Creates an object.",
    "Reference Variable: Stores reference to object.",
    "Instance Member: Belongs to object.",
    "Static Member: Belongs to class.",
    "Object State: Data/field values.",
    "Object Behavior: Methods.",
    "Object Identity: Distinguishes one object from another."
  ]},
  { title: "7. Constructor", items: [
    "Constructor: Initializes object during creation.",
    "Constructor Name: Same as class.",
    "Constructor: Has no return type.",
    "Default Constructor: Compiler supplies one only if no constructor is declared.",
    "Parameterized Constructor: Accepts arguments.",
    "Constructor Overloading: Multiple constructors with different parameter lists.",
    "Copy Constructor: User-defined constructor that copies another object state.",
    "Constructor Chaining: Constructor calls another constructor.",
    "this(): Calls constructor in same class.",
    "super(): Calls parent constructor.",
    "this()/super(): Must be first constructor statement.",
    "Constructor: Cannot be static, final, or abstract."
  ]},
  { title: "8. this & super", items: [
    "this: Current object reference.",
    "this.field: Access current object field.",
    "this.method(): Call current object method.",
    "this(): Call another constructor.",
    "super: Parent-class context/reference.",
    "super.field: Access parent field.",
    "super.method(): Call parent implementation.",
    "super(): Call parent constructor."
  ]},
  { title: "9. Initialization", items: [
    "Instance Initialization Block: Runs during object initialization before constructor body.",
    "Static Initialization Block: Runs when class is initialized.",
    "Static initialization: Generally happens once per class initialization.",
    "Instance fields/blocks: Run for each object creation.",
    "Typical order: Parent static -> child static -> parent instance -> child instance -> parent constructor -> child constructor."
  ]},
  { title: "10. OOP", items: [
    "Encapsulation: Bundle data + behavior and control access.",
    "Inheritance: Reuse/extend parent behavior.",
    "Polymorphism: One reference/interface can represent different implementations.",
    "Abstraction: Hide implementation complexity.",
    "IS-A: Inheritance relationship.",
    "HAS-A: Composition/aggregation relationship.",
    "Compile-Time Polymorphism: Overloading.",
    "Runtime Polymorphism: Overriding.",
    "Upcasting: Child object referenced by parent type.",
    "Downcasting: Parent reference explicitly cast to child type.",
    "Dynamic Method Dispatch: Overridden instance method selected according to runtime object.",
    "Fields: Are not polymorphically overridden like instance methods.",
    "Static Methods: Hidden, not overridden.",
    "Private Methods: Not overridden because they are not inherited."
  ]},
  { title: "11. Inheritance", items: [
    "Inheritance: extends.",
    "Single: One parent -> one child.",
    "Multilevel: A -> B -> C.",
    "Hierarchical: One parent -> many children.",
    "Multiple Class Inheritance: Not directly supported.",
    "Multiple Interface Inheritance: Supported.",
    "Parent: Superclass.",
    "Child: Subclass.",
    "Object: Ultimate superclass of ordinary Java classes.",
    "super: Access immediate parent members.",
    "Overriding: Child replaces inherited method implementation."
  ]},
  { title: "12. Encapsulation & Access Modifiers", items: [
    "private: Same class only.",
    "default/package-private: Same package.",
    "protected: Same package + qualifying subclass access.",
    "public: Wherever accessible.",
    "Getter: Reads private field.",
    "Setter: Modifies private field.",
    "Encapsulation: Usually private fields + controlled methods."
  ]},
  { title: "13. Abstraction", items: [
    "Abstract Class: Cannot be directly instantiated.",
    "Abstract Method: Declaration without implementation.",
    "Abstract Class: Can contain abstract + concrete methods.",
    "Abstract Class: Can have constructor and fields.",
    "Interface: Defines a contract/type.",
    "Class implements Interface: implements.",
    "Interface extends Interface: extends.",
    "Interface: Can extend multiple interfaces.",
    "Class: Can implement multiple interfaces."
  ]},
  { title: "14. Interface", items: [
    "Interface fields: Implicitly public static final.",
    "Abstract interface methods: Implicitly public unless private/static/default rules apply.",
    "Default Method: Interface method with implementation.",
    "Static Interface Method: Belongs to interface.",
    "Private Interface Method: Used internally by interface methods.",
    "Functional Interface: Exactly one abstract method.",
    "@FunctionalInterface: Compiler verifies functional-interface contract.",
    "Marker Interface: Interface with no methods, e.g. Serializable."
  ]},
  { title: "15. static", items: [
    "Static Variable: One shared class-level variable.",
    "Static Method: Called without object.",
    "Static Block: Initializes static state.",
    "Static Method: Cannot directly access instance fields/methods.",
    "Static Method: Can access static members directly.",
    "main(): Static so JVM can invoke it without creating application object."
  ]},
  { title: "16. final", items: [
    "Final Variable: Cannot be reassigned.",
    "Final Method: Cannot be overridden.",
    "Final Class: Cannot be extended.",
    "Final Reference: Reference cannot change, but referenced mutable object state may change.",
    "Blank Final: Final variable initialized later exactly once."
  ]},
  { title: "17. String", items: [
    "String: Immutable sequence of characters.",
    "String: Located in java.lang.",
    "String Literal: Usually stored/reused through String pool.",
    "new String(): Creates a distinct String object.",
    "equals(): Compares String content.",
    "==: Compares references for Strings.",
    "length(): String length.",
    "charAt(): Character at index.",
    "substring(): Extracts part of String.",
    "contains(): Checks substring.",
    "startsWith(): Checks prefix.",
    "endsWith(): Checks suffix.",
    "indexOf(): Finds position.",
    "replace(): Replaces characters/sequences.",
    "split(): Splits using regex.",
    "trim(): Removes certain leading/trailing whitespace.",
    "strip(): Unicode-aware whitespace removal.",
    "String: Thread-safe due to immutability."
  ]},
  { title: "18. StringBuilder / StringBuffer", items: [
    "StringBuilder: Mutable character sequence.",
    "StringBuffer: Mutable + synchronized methods.",
    "StringBuilder: Usually preferred for single-threaded manipulation.",
    "Default Capacity: 16.",
    "append(): Add at end.",
    "insert(): Insert.",
    "delete(): Remove.",
    "reverse(): Reverse.",
    "capacity(): Current capacity."
  ]},
  { title: "19. Arrays", items: [
    "Array: Fixed-size collection of elements of one component type.",
    "Array: Object in Java.",
    "Index: Starts at 0.",
    "Length: array.length.",
    "Array Size: Fixed after creation.",
    "Multidimensional Array: Array of arrays.",
    "Default int value: 0.",
    "Default boolean: false.",
    "Default reference: null.",
    "Arrays.sort(): Sort array.",
    "Arrays.binarySearch(): Binary search in appropriately sorted array.",
    "Arrays.copyOf(): Copies array."
  ]},
  { title: "20. Wrapper Classes", items: [
    "Wrapper: Object form of primitive.",
    "byte -> Byte",
    "short -> Short",
    "int -> Integer",
    "long -> Long",
    "float -> Float",
    "double -> Double",
    "char -> Character",
    "boolean -> Boolean",
    "Autoboxing: Primitive -> wrapper.",
    "Unboxing: Wrapper -> primitive.",
    "Integer Caching: Common small Integer values may be cached."
  ]},
  { title: "21. Object Class", items: [
    "Object: Root class for ordinary Java classes.",
    "toString(): Text representation.",
    "equals(): Logical equality.",
    "hashCode(): Hash value.",
    "getClass(): Runtime class.",
    "wait(): Wait while releasing monitor.",
    "notify(): Wake one waiting thread.",
    "notifyAll(): Wake all waiting threads.",
    "clone(): Legacy copying mechanism; often avoided.",
    "equals() + hashCode(): Must follow their contract."
  ]},
  { title: "22. Exception Handling", items: [
    "Throwable: Root of exceptions/errors.",
    "Exception: Conditions applications may often handle.",
    "Error: Serious JVM/system problems.",
    "Checked Exception: Compiler requires handling/declaring.",
    "Unchecked Exception: RuntimeException and subclasses.",
    "try: Risky code.",
    "catch: Handles exception.",
    "finally: Cleanup code.",
    "throw: Actually throws exception.",
    "throws: Declares possible propagated exceptions.",
    "Exception Propagation: Travels up call stack.",
    "Custom Exception: User-defined exception class.",
    "Try-With-Resources: Automatically closes AutoCloseable resources.",
    "Multiple Catch: Multiple exception types can be handled.",
    "Catch Order: More specific exceptions before broader ones."
  ]},
  { title: "23. throw vs throws", items: [
    "throw: Inside code.",
    "throws: Method declaration.",
    "throw: Throws an exception object.",
    "throws: Lists exception types.",
    "throw: One exception object at a time per statement.",
    "throws: Can declare multiple exception types."
  ]},
  { title: "24. final vs finally vs finalize", items: [
    "final: Keyword.",
    "finally: Exception-handling block.",
    "finalize(): Deprecated/obsolete cleanup mechanism; don't use it for resource management.",
    "Resource Cleanup: Prefer try-with-resources."
  ]},
  { title: "25. Garbage Collection", items: [
    "GC: Automatic memory reclamation.",
    "Garbage: Object no longer reachable.",
    "Heap: Main object-allocation memory.",
    "GC Roots: Sources from which reachability is determined.",
    "System.gc(): Request, not guarantee.",
    "Memory Leak: Unwanted reachable objects can still consume memory.",
    "Reference Types: Strong, Soft, Weak, Phantom references."
  ]},
  { title: "26. Collections", items: [
    "Collection Framework: APIs for groups of objects.",
    "Collection: Main interface hierarchy for List/Set/Queue.",
    "Map: Key-value structure; not a subtype of Collection.",
    "List: Ordered, duplicates generally allowed.",
    "Set: No duplicate elements.",
    "Queue: Processing-oriented collection.",
    "Deque: Double-ended queue."
  ]},
  { title: "27. List", items: [
    "ArrayList: Resizable array.",
    "LinkedList: Doubly linked structure + Deque.",
    "Vector: Legacy synchronized dynamic array.",
    "Stack: Legacy LIFO class; Deque generally preferred.",
    "ArrayList: Fast random access.",
    "LinkedList: Efficient insertion/removal when node position is already known.",
    "ArrayList: Usually preferred for general List usage."
  ]},
  { title: "28. Set", items: [
    "HashSet: Hash-based, no guaranteed iteration order.",
    "LinkedHashSet: Maintains insertion order.",
    "TreeSet: Sorted set.",
    "Set: Uses equality/hash or comparison rules depending on implementation.",
    "TreeSet: Typically O(log n) basic operations."
  ]},
  { title: "29. Map", items: [
    "HashMap: Hash-based key-value structure.",
    "LinkedHashMap: Predictable insertion/access ordering.",
    "TreeMap: Sorted by keys.",
    "Hashtable: Legacy synchronized map; no null keys/values.",
    "ConcurrentHashMap: Concurrent map.",
    "HashMap: Allows one null key and multiple null values.",
    "Map Key: Should have stable equals()/hashCode() behavior while stored."
  ]},
  { title: "30. Iterator", items: [
    "Iterator: Traverses collection.",
    "hasNext(): Checks next element.",
    "next(): Returns next element.",
    "remove(): Removes last returned element where supported.",
    "ListIterator: Bidirectional traversal for Lists.",
    "Fail-Fast: Many iterators detect structural modification and may throw ConcurrentModificationException.",
    "Fail-Fast: Best-effort behavior, not a thread-safety mechanism."
  ]},
  { title: "31. Generics", items: [
    "Generics: Compile-time type safety.",
    "<T>: Type parameter.",
    "Generic Class: Class with type parameter.",
    "Generic Method: Method with type parameter.",
    "Wildcard: ?.",
    "Upper Bound: ? extends Number.",
    "Lower Bound: ? super Integer.",
    "PECS: Producer Extends, Consumer Super.",
    "Type Erasure: Generic type information is largely removed from runtime representation.",
    "Generics: Cannot directly use primitive type arguments; use wrappers."
  ]},
  { title: "32. Comparable & Comparator", items: [
    "Comparable: Natural ordering.",
    "compareTo(): Comparable method.",
    "Comparator: External/custom ordering.",
    "compare(): Comparator method.",
    "Comparable: Usually one natural ordering.",
    "Comparator: Multiple sorting strategies possible.",
    "Comparator.comparing(): Convenient comparator creation.",
    "thenComparing(): Secondary sorting criterion.",
    "reversed(): Reverse comparator order."
  ]},
  { title: "33. Sorting Algorithms", items: [
    "Bubble Sort: Repeated adjacent swaps; average O(n2).",
    "Selection Sort: Repeatedly selects minimum; O(n2).",
    "Insertion Sort: Inserts each item into sorted portion; average O(n2).",
    "Merge Sort: Divide and merge; O(n log n).",
    "Quick Sort: Partition-based; average O(n log n), worst O(n2).",
    "Heap Sort: Heap-based; O(n log n).",
    "Counting Sort: Non-comparison sort for suitable bounded integer ranges.",
    "Radix Sort: Digit-based sorting for suitable data.",
    "Stable Sort: Equal elements retain relative order when stability is guaranteed.",
    "Java sorting: Use library sorting unless implementing algorithm for learning/interview purposes."
  ]},
  { title: "34. Searching", items: [
    "Linear Search: Checks elements sequentially; O(n).",
    "Binary Search: Requires sorted data; O(log n).",
    "Two Pointer: Often used for sorted arrays/string problems.",
    "Sliding Window: Efficient for contiguous range problems.",
    "Hashing: Can provide near O(1) average lookup.",
    "BFS: Breadth-first graph/tree traversal.",
    "DFS: Depth-first graph/tree traversal."
  ]},
  { title: "35. Lambda", items: [
    "Lambda: Concise representation of behavior.",
    "Syntax: (parameters) -> expression/body.",
    "Lambda: Commonly targets functional interfaces.",
    "Lambda: Can capture effectively-final local variables.",
    "Method Reference: Shorter lambda form when applicable."
  ]},
  { title: "36. Functional Interface", items: [
    "Functional Interface: Exactly one abstract method.",
    "Predicate: Takes input -> boolean.",
    "Function: Input -> output.",
    "Consumer: Input -> no result.",
    "Supplier: No input -> result.",
    "UnaryOperator: Same input/output type.",
    "BinaryOperator: Two same-type inputs -> same-type result."
  ]},
  { title: "37. Stream API", items: [
    "Stream: Pipeline for processing data.",
    "Stream: Does not itself store collection data.",
    "Intermediate Operation: Returns Stream.",
    "Terminal Operation: Produces final result/side effect.",
    "Lazy: Intermediate operations generally execute only when terminal operation runs.",
    "filter(): Select.",
    "map(): Transform.",
    "flatMap(): Flatten nested streams.",
    "distinct(): Remove duplicates.",
    "sorted(): Sort.",
    "limit(): Take first N.",
    "skip(): Skip first N.",
    "peek(): Mainly debugging/inspection; avoid relying on it for essential side effects.",
    "forEach(): Process each element.",
    "collect(): Gather results.",
    "reduce(): Combine elements.",
    "count(): Count elements.",
    "anyMatch(): At least one.",
    "allMatch(): All.",
    "noneMatch(): None.",
    "findFirst(): First element.",
    "findAny(): Any element.",
    "Parallel Stream: Can process in parallel but isn't automatically faster."
  ]},
  { title: "38. Advanced Collectors", items: [
    "Collectors.toList(): Collect into List.",
    "toSet(): Collect into Set.",
    "joining(): Join Strings.",
    "groupingBy(): Group elements by key.",
    "partitioningBy(): Divide into true/false groups.",
    "counting(): Count.",
    "mapping(): Map values inside collector.",
    "summarizingInt(): Statistics for integers.",
    "maxBy() / minBy(): Find maximum/minimum."
  ]},
  { title: "39. Optional", items: [
    "Optional: Container representing possible presence/absence.",
    "of(): Requires non-null value.",
    "ofNullable(): Allows null input.",
    "empty(): Empty Optional.",
    "isPresent(): Checks value.",
    "ifPresent(): Executes action when present.",
    "orElse(): Provides fallback.",
    "orElseGet(): Lazily generates fallback.",
    "orElseThrow(): Throws when empty.",
    "Avoid: Using Optional merely to replace every nullable field/parameter."
  ]},
  { title: "40. Date & Time", items: [
    "LocalDate: Date without time zone.",
    "LocalTime: Time without date/time zone.",
    "LocalDateTime: Date + time without zone.",
    "ZonedDateTime: Date + time + zone.",
    "Instant: Point on UTC timeline.",
    "Duration: Time-based amount.",
    "Period: Date-based amount.",
    "DateTimeFormatter: Formats/parses date/time.",
    "Modern API: java.time.",
    "Modern Date/Time: Immutable and generally thread-safe."
  ]},
  { title: "41. Enum", items: [
    "Enum: Fixed set of named constants.",
    "Enum: Can have fields/methods/constructors.",
    "values(): Returns constants.",
    "valueOf(): Converts name to enum constant.",
    "Enum Constructor: Cannot be called directly."
  ]},
  { title: "42. Nested Classes", items: [
    "Static Nested Class: Does not require enclosing object.",
    "Inner Class: Non-static nested class tied to enclosing instance.",
    "Local Class: Declared inside method/block.",
    "Anonymous Class: Class without explicit name.",
    "Anonymous Object: Object whose reference isn't stored in a variable.",
    "Anonymous Class != Anonymous Object."
  ]},
  { title: "43. I/O", items: [
    "I/O: Input/output between program and external resources.",
    "Byte Stream: InputStream / OutputStream.",
    "Character Stream: Reader / Writer.",
    "FileInputStream: Byte input from file.",
    "FileOutputStream: Byte output to file.",
    "FileReader: Character input.",
    "FileWriter: Character output.",
    "BufferedReader: Buffered character reading.",
    "BufferedWriter: Buffered character writing.",
    "PrintWriter: Convenient text output.",
    "High-Level Stream: Wraps another stream for extra functionality.",
    "Low-Level Stream: Directly connects closer to data source/destination."
  ]},
  { title: "44. NIO / NIO.2", items: [
    "NIO: Modern I/O APIs.",
    "Path: Represents filesystem path.",
    "Files: File/directory utility methods.",
    "Paths: Legacy/convenience API for creating Path objects.",
    "Channel: Connection for I/O operations.",
    "Buffer: Container for data used with channels.",
    "Selector: Enables multiplexed non-blocking I/O.",
    "Files.readString(): Reads file as String.",
    "Files.writeString(): Writes String to file."
  ]},
  { title: "45. Serialization", items: [
    "Serialization: Object state -> byte stream.",
    "Deserialization: Byte stream -> object.",
    "Serializable: Marker interface.",
    "transient: Excludes field from default serialization.",
    "serialVersionUID: Serialization compatibility identifier.",
    "Security: Never deserialize untrusted data blindly."
  ]},
  { title: "46. Multithreading", items: [
    "Thread: Unit of execution.",
    "Process: Independent execution environment.",
    "Multithreading: Multiple threads execute concurrently.",
    "Thread: Represents thread.",
    "Runnable: Represents task returning no result.",
    "Callable: Task that can return result/throw checked exception.",
    "start(): Starts new thread.",
    "run(): Task body; direct call doesn't create new thread.",
    "sleep(): Pauses current thread.",
    "join(): Waits for thread completion.",
    "interrupt(): Cooperative interruption request.",
    "Daemon Thread: Background/service thread.",
    "JVM: Can terminate when no live non-daemon threads remain."
  ]},
  { title: "47. Thread Lifecycle", items: [
    "NEW: Created but not started.",
    "RUNNABLE: Eligible/running according to JVM/OS scheduling.",
    "BLOCKED: Waiting for monitor lock.",
    "WAITING: Waiting indefinitely.",
    "TIMED_WAITING: Waiting for limited time.",
    "TERMINATED: Finished execution."
  ]},
  { title: "48. Synchronization", items: [
    "Race Condition: Result depends on timing.",
    "Synchronization: Controls shared mutable state.",
    "synchronized Method: Uses intrinsic monitor.",
    "Synchronized Block: Locks selected monitor.",
    "Lock: Controls access to critical sections.",
    "Deadlock: Threads wait forever for each other.",
    "Starvation: Thread repeatedly fails to obtain resources.",
    "Livelock: Threads keep responding to each other but make no progress.",
    "Thread Safety: Correct behavior under concurrent access."
  ]},
  { title: "49. volatile", items: [
    "volatile: Provides visibility guarantees.",
    "volatile: Does not make compound operations automatically atomic.",
    "Example: count++ is not made atomic merely by volatile.",
    "Atomic Classes: Useful for atomic operations."
  ]},
  { title: "50. Locks", items: [
    "ReentrantLock: Explicit lock implementation.",
    "ReadWriteLock: Separate read/write locking.",
    "ReentrantReadWriteLock: Common implementation.",
    "Lock: Should generally be released in finally.",
    "tryLock(): Attempts lock without necessarily waiting indefinitely."
  ]},
  { title: "51. Executor Framework", items: [
    "Executor: Separates task submission from execution.",
    "ExecutorService: Manages task execution/lifecycle.",
    "Thread Pool: Reuses worker threads.",
    "submit(): Submits task and returns Future.",
    "execute(): Executes Runnable without Future result.",
    "shutdown(): Stops accepting new tasks.",
    "shutdownNow(): Attempts to stop running tasks.",
    "Future: Represents asynchronous result.",
    "Callable: Returns result.",
    "FutureTask: Runnable + Future implementation."
  ]},
  { title: "52. Concurrency Utilities", items: [
    "AtomicInteger: Atomic integer operations.",
    "AtomicLong: Atomic long operations.",
    "AtomicReference: Atomic reference operations.",
    "CountDownLatch: Wait until count reaches zero.",
    "CyclicBarrier: Threads wait at common barrier.",
    "Semaphore: Controls number of permits.",
    "BlockingQueue: Queue supporting blocking operations.",
    "ConcurrentHashMap: Concurrent map.",
    "CopyOnWriteArrayList: Good for many reads/few writes scenarios.",
    "ConcurrentLinkedQueue: Non-blocking concurrent queue."
  ]},
  { title: "53. Inter-Thread Communication", items: [
    "wait(): Releases monitor and waits.",
    "notify(): Wakes one waiter.",
    "notifyAll(): Wakes all waiters.",
    "wait/notify: Must be used with corresponding monitor ownership.",
    "Modern Alternative: Prefer higher-level concurrency utilities where appropriate."
  ]},
  { title: "54. JVM Architecture", items: [
    "Class Loader: Loads classes.",
    "Bytecode Verifier: Checks bytecode validity/safety.",
    "Runtime Data Areas: JVM-managed memory areas.",
    "Heap: Objects/arrays.",
    "Stack: Per-thread execution frames.",
    "PC Register: Current instruction position per thread.",
    "Native Method Stack: Supports native method execution.",
    "Metaspace: HotSpot native memory area for class metadata.",
    "JIT: Runtime compilation.",
    "Interpreter: Executes bytecode instruction-by-instruction."
  ]},
  { title: "55. Class Loading", items: [
    "Loading: Finds/loads class bytes.",
    "Linking: Verification + preparation + resolution.",
    "Initialization: Executes static initialization.",
    "Bootstrap Class Loader: Loads core platform classes.",
    "Platform Class Loader: Loads platform classes.",
    "Application Class Loader: Loads application classpath/module-path classes.",
    "Parent Delegation: Class loaders commonly delegate loading to parent first."
  ]},
  { title: "56. JVM Memory", items: [
    "Heap: Shared among application threads.",
    "Stack: Separate for each thread.",
    "Metaspace: Class metadata in HotSpot.",
    "StackOverflowError: Often caused by deep recursion.",
    "OutOfMemoryError: Allocation/resource limits cannot be satisfied.",
    "Memory Leak: Objects remain reachable unnecessarily.",
    "Escape Analysis: JVM optimization analyzing object/thread escape behavior."
  ]},
  { title: "57. Garbage Collectors", items: [
    "Serial GC: Single-threaded collector.",
    "Parallel GC: Throughput-oriented parallel collector.",
    "G1 GC: Region-based general-purpose collector.",
    "ZGC: Low-pause collector designed for very large heaps.",
    "Shenandoah: Low-pause collector available in relevant OpenJDK distributions.",
    "GC Goal: Reclaim unreachable objects.",
    "GC: Does not guarantee when an object is collected."
  ]},
  { title: "58. Immutability", items: [
    "Immutable Object: State cannot change after construction.",
    "String: Immutable.",
    "Immutable Class: Usually final + private final fields + no mutating methods.",
    "Defensive Copy: Protect mutable internal state.",
    "Immutable Objects: Naturally easier to share safely between threads."
  ]},
  { title: "59. JDBC", items: [
    "JDBC: Java Database Connectivity.",
    "Driver: Connects Java application to database.",
    "Connection: Database connection.",
    "Statement: Executes SQL.",
    "PreparedStatement: Parameterized SQL.",
    "CallableStatement: Calls stored procedure.",
    "ResultSet: Query result.",
    "executeQuery(): Usually SELECT.",
    "executeUpdate(): Usually INSERT/UPDATE/DELETE/DDL with update count semantics.",
    "Commit: Saves transaction changes.",
    "Rollback: Reverts uncommitted changes.",
    "Transaction: Group of operations treated as unit.",
    "PreparedStatement: Helps prevent SQL injection when parameters are used properly."
  ]},
  { title: "60. Networking", items: [
    "Socket: Endpoint for network communication.",
    "ServerSocket: Traditional TCP server listener.",
    "TCP: Reliable connection-oriented protocol.",
    "UDP: Connectionless datagram protocol.",
    "IP: Identifies network endpoint/address.",
    "Port: Identifies service/application endpoint.",
    "HTTP: Application protocol for web communication.",
    "Java HttpClient: Modern Java HTTP client API.",
    "URI: Identifies a resource.",
    "URL: Locator concept; URI is the preferred modern abstraction for many uses."
  ]},
  { title: "61. Regex", items: [
    "Regex: Pattern matching text.",
    "Pattern: Compiled regex.",
    "Matcher: Performs matching.",
    "matches(): Attempts entire input match.",
    "find(): Finds matching subsequences.",
    "replaceAll(): Regex replacement.",
    "\\\\d: Digit.",
    "\\\\s: Whitespace.",
    "\\\\w: Word character."
  ]},
  { title: "62. Annotations", items: [
    "Annotation: Metadata.",
    "@Override: Indicates intended override.",
    "@Deprecated: Marks API as deprecated.",
    "@SuppressWarnings: Suppresses compiler warnings.",
    "@FunctionalInterface: Functional-interface contract.",
    "Custom Annotation: Developer-created metadata annotation.",
    "Retention: Controls how long annotation information is retained."
  ]},
  { title: "63. Reflection", items: [
    "Reflection: Inspect/manipulate types at runtime.",
    "Class<?>: Runtime class metadata.",
    "Reflection: Can access constructors, fields, methods subject to access rules.",
    "Use Cases: Frameworks, dependency injection, testing, serialization.",
    "Downside: Can reduce readability/type safety and introduce runtime failures."
  ]},
  { title: "64. Modules", items: [
    "Module System: Introduced in Java 9.",
    "module-info.java: Module descriptor.",
    "requires: Module dependency.",
    "exports: Packages exposed to other modules.",
    "opens: Allows reflective access to packages.",
    "uses: Declares service usage.",
    "provides ... with: Declares service implementation."
  ]},
  { title: "65. Records", items: [
    "Record: Concise data-carrier class.",
    "Record: Automatically provides accessors, constructor, equals, hashCode, toString.",
    "Record Accessor: name() rather than getName().",
    "Record: Can contain methods and validation.",
    "Record Components: Final-like state; record is not automatically deeply immutable."
  ]},
  { title: "66. Sealed Classes", items: [
    "Sealed Class: Restricts permitted subclasses.",
    "permits: Specifies permitted subclasses.",
    "Subclass: Must be final, sealed, or non-sealed.",
    "Sealed Interfaces: Can restrict implementing types."
  ]},
  { title: "67. Pattern Matching", items: [
    "Pattern Matching: Combines type testing with variable binding.",
    "instanceof Pattern: if (x instanceof String s).",
    "Pattern Switch: Can match types/patterns in switch.",
    "Record Pattern: Can destructure record components.",
    "Pattern Matching: Reduces casting boilerplate."
  ]},
  { title: "68. Modern Java", items: [
    "Java 8: Lambda, Stream, Optional, functional interfaces, modern Date/Time.",
    "Java 9: Modules.",
    "Java 10: var.",
    "Java 11: Standard HTTP Client and other APIs.",
    "Java 14: Switch expressions became standard.",
    "Java 15: Text blocks became standard.",
    "Java 16: Records became standard; pattern matching for instanceof.",
    "Java 17: Sealed classes became standard.",
    "Java 21: Virtual threads, record patterns, pattern matching for switch became standard.",
    "Java 22-25: Continued language, JVM, library and performance improvements.",
    "LTS: Long-Term Support releases are commonly preferred for production stability."
  ]},
  { title: "69. Virtual Threads", items: [
    "Virtual Thread: Lightweight JVM-managed thread.",
    "Virtual Threads: Useful for high-concurrency blocking workloads.",
    "Virtual Thread: Not a replacement for CPU parallelism.",
    "Platform Thread: Typically backed by OS thread.",
    "Virtual Thread: Can support very large numbers of concurrent tasks."
  ]},
  { title: "70. SOLID", items: [
    "S - Single Responsibility: One class should have one primary reason to change.",
    "O - Open/Closed: Open for extension, closed for modification.",
    "L - Liskov Substitution: Subtypes should be substitutable for base types.",
    "I - Interface Segregation: Prefer focused interfaces.",
    "D - Dependency Inversion: Depend on abstractions, not concrete implementations."
  ]},
  { title: "71. Design Patterns", items: [
    "Singleton: One controlled instance.",
    "Factory: Creates objects without exposing creation logic.",
    "Abstract Factory: Creates related object families.",
    "Builder: Step-by-step construction of complex objects.",
    "Prototype: Creates objects by copying prototypes.",
    "Adapter: Makes incompatible interfaces work together.",
    "Decorator: Adds behavior dynamically.",
    "Facade: Simplifies complex subsystem.",
    "Proxy: Controls/accesses another object.",
    "Strategy: Encapsulates interchangeable algorithms.",
    "Observer: One-to-many notification relationship.",
    "Template Method: Defines algorithm skeleton.",
    "Command: Encapsulates request as object."
  ]},
  { title: "72. DSA Fundamentals", items: [
    "Data Structure: Way to organize data.",
    "Algorithm: Step-by-step solution.",
    "Time Complexity: Measures growth of execution work.",
    "Space Complexity: Measures extra memory growth.",
    "O(1): Constant.",
    "O(log n): Logarithmic.",
    "O(n): Linear.",
    "O(n log n): Common efficient sorting complexity.",
    "O(n2): Quadratic.",
    "O(2n): Exponential.",
    "O(n!): Factorial."
  ]},
  { title: "73. DSA Structures", items: [
    "Array: Fixed contiguous-like indexed storage abstraction.",
    "Linked List: Nodes connected by references.",
    "Stack: LIFO.",
    "Queue: FIFO.",
    "Deque: Insert/remove at both ends.",
    "Hash Table: Key-based lookup.",
    "Tree: Hierarchical structure.",
    "BST: Binary Search Tree.",
    "Heap: Priority-oriented tree structure.",
    "Graph: Vertices + edges.",
    "Trie: Prefix tree.",
    "Priority Queue: Retrieves highest/lowest priority according to ordering."
  ]},
  { title: "74. Common DSA Techniques", items: [
    "Two Pointer: Two moving indexes/references.",
    "Sliding Window: Maintain moving range.",
    "Prefix Sum: Precompute cumulative values.",
    "Hashing: Fast lookup/counting.",
    "Binary Search: Search ordered search space.",
    "Recursion: Function calls itself.",
    "Backtracking: Explore choices and undo choices.",
    "Greedy: Make locally optimal choices.",
    "Divide & Conquer: Divide -> solve -> combine.",
    "Dynamic Programming: Reuse overlapping subproblem results.",
    "BFS: Queue-based traversal.",
    "DFS: Stack/recursion-based traversal.",
    "Topological Sort: Ordering of DAG dependencies.",
    "Union-Find: Tracks connected components efficiently."
  ]},
  { title: "75. Recursion", items: [
    "Recursion: Method calls itself.",
    "Base Case: Stops recursion.",
    "Recursive Case: Calls itself with smaller/different problem.",
    "Stack: Stores recursive calls.",
    "Infinite Recursion: Can cause StackOverflowError."
  ]},
  { title: "76. Important Java Interview Differences", items: [
    "JDK vs JRE: Development vs runtime.",
    "JRE vs JVM: Runtime environment vs execution engine.",
    "== vs equals(): Identity/value semantics vs logical equality.",
    "String vs StringBuilder: Immutable vs mutable.",
    "StringBuilder vs StringBuffer: Unsynchronized mutable vs synchronized mutable.",
    "Array vs ArrayList: Fixed size vs resizable List.",
    "ArrayList vs LinkedList: Array-backed vs linked structure.",
    "HashSet vs TreeSet: Hash-based vs sorted.",
    "HashMap vs Hashtable: Modern general-purpose map vs legacy synchronized map.",
    "HashMap vs ConcurrentHashMap: Non-concurrent vs concurrent design.",
    "Comparable vs Comparator: Natural vs external ordering.",
    "Overloading vs Overriding: Different parameters vs inherited method replacement.",
    "Abstract Class vs Interface: Shared state/implementation vs contract/multiple type inheritance.",
    "Checked vs Unchecked: Compile-time handling requirement vs runtime exception hierarchy.",
    "throw vs throws: Throw object vs declare exceptions.",
    "final vs finally: Restriction keyword vs cleanup block.",
    "Process vs Thread: Independent execution environment vs execution unit.",
    "sleep vs wait: Sleep doesn't release monitor; wait releases the object's monitor.",
    "start() vs run(): Starts new thread vs normal method call when invoked directly.",
    "volatile vs synchronized: Visibility/order guarantees vs mutual exclusion + memory synchronization."
  ]},
  { title: "77. Common Coding Problems", items: [
    "Reverse String: Use loop/StringBuilder.",
    "Palindrome: Compare characters from both ends.",
    "Anagram: Frequency count/sorting.",
    "Character Frequency: HashMap/int frequency array.",
    "Duplicate Elements: Set/HashMap.",
    "First Non-Repeating Character: Frequency map + traversal.",
    "Fibonacci: Iteration/DP preferred over naive recursion.",
    "Factorial: Loop or recursion.",
    "Prime Number: Check divisors up to sqrt(n).",
    "Armstrong Number: Sum powered digits.",
    "Reverse Number: Repeated % 10 and / 10.",
    "Missing Number: Sum/XOR techniques.",
    "Two Sum: HashMap.",
    "Merge Arrays: Two-pointer approach when sorted.",
    "Binary Search: Sorted data.",
    "Merge Sort: Divide and conquer.",
    "Quick Sort: Partition.",
    "Balanced Parentheses: Stack.",
    "Linked List Cycle: Fast/slow pointers.",
    "Tree Traversal: Preorder, inorder, postorder, level order.",
    "Graph Traversal: BFS/DFS.",
    "Top K Elements: Heap/frequency techniques.",
    "Longest Substring Without Repeating: Sliding window + HashMap/Set."
  ]},
  { title: "78. Java Best Practices", items: [
    "Use meaningful names.",
    "Keep classes/methods focused.",
    "Prefer immutability when practical.",
    "Program to interfaces.",
    "Favor composition over inheritance when appropriate.",
    "Use private fields by default.",
    "Override equals() and hashCode() together.",
    "Use try-with-resources for closeable resources.",
    "Don't catch Exception blindly.",
    "Don't use exceptions for normal control flow.",
    "Prefer StringBuilder for repeated string mutation.",
    "Use generics instead of raw collections.",
    "Use List/Map interfaces in declarations when appropriate.",
    "Prefer ExecutorService/structured concurrency approaches over manually creating huge numbers of threads.",
    "Don't depend on finalize().",
    "Validate external input.",
    "Use parameterized SQL.",
    "Don't expose mutable internal collections directly.",
    "Document public APIs.",
    "Write unit tests.",
    "Keep methods small and cohesive."
  ]},
  { title: "79. Quick Java Memory Rules", items: [
    "Primitive variable: Stores primitive value.",
    "Reference variable: Stores reference.",
    "Object: Usually allocated on heap.",
    "Local variables: Associated with stack frames conceptually.",
    "Static state: Associated with class rather than each object.",
    "String literals: Interned/pool-managed.",
    "null: No object reference.",
    "Null reference method call: Can cause NullPointerException.",
    "Array bounds violation: ArrayIndexOutOfBoundsException.",
    "Invalid cast: ClassCastException.",
    "Integer parsing failure: NumberFormatException."
  ]},
  { title: "80. Most Important Java Rules", items: [
    "Java is pass-by-value.",
    "Constructor has no return type.",
    "Constructor cannot be inherited.",
    "Constructor cannot be overridden.",
    "Static methods are hidden, not overridden.",
    "Private methods are not overridden.",
    "Final methods cannot be overridden.",
    "Final classes cannot be inherited.",
    "Abstract classes cannot be instantiated directly.",
    "Interface cannot normally be instantiated directly.",
    "Class can extend one class.",
    "Class can implement multiple interfaces.",
    "Interface can extend multiple interfaces.",
    "Java doesn't support multiple inheritance of classes.",
    "String is immutable.",
    "Arrays have fixed size.",
    "Array indexing starts at zero.",
    "Map is not a Collection.",
    "HashMap does not guarantee iteration order.",
    "TreeMap sorts by keys.",
    "TreeSet sorts elements.",
    "Comparable defines natural ordering.",
    "Comparator defines custom ordering.",
    "start() creates thread execution; direct run() call does not.",
    "sleep() does not release intrinsic locks.",
    "wait() releases the object's monitor.",
    "volatile does not make count++ atomic.",
    "GC is automatic but timing is not guaranteed.",
    "System.gc() is only a request.",
    "finally normally executes even when exception occurs, but abrupt JVM termination can prevent it.",
    "System.exit() initiates JVM shutdown and should not be used as normal cleanup.",
    "Try-with-resources automatically closes resources.",
    "Optional is not a universal replacement for null.",
    "Streams are generally single-use.",
    "Parallel streams are not automatically faster."
  ]},
  { title: "81. Final Java Revision Formula", items: [
    "Remember Java Like This",
    "JDK -> Develop",
    "JRE -> Run",
    "JVM -> Execute",
    "Class -> Blueprint",
    "Object -> Instance",
    "Encapsulation -> Protect",
    "Inheritance -> Reuse",
    "Polymorphism -> Many forms",
    "Abstraction -> Hide complexity",
    "Overloading -> Compile time",
    "Overriding -> Runtime",
    "this -> Current object",
    "super -> Parent",
    "final -> Restrict",
    "finally -> Cleanup",
    "throw -> Throw",
    "throws -> Declare",
    "String -> Immutable",
    "StringBuilder -> Mutable",
    "Array -> Fixed size",
    "ArrayList -> Resizable List",
    "HashSet -> Unique",
    "TreeSet -> Sorted unique",
    "HashMap -> Key/value",
    "TreeMap -> Sorted keys",
    "Comparable -> Natural sorting",
    "Comparator -> Custom sorting",
    "Lambda -> Function/behavior",
    "Stream -> Data processing",
    "Optional -> Possible value",
    "Thread -> Execution unit",
    "Synchronization -> Shared-state protection",
    "ExecutorService -> Thread/task management",
    "Virtual Thread -> Lightweight concurrency",
    "Heap -> Objects",
    "Stack -> Thread execution frames",
    "Metaspace -> Class metadata in HotSpot",
    "GC -> Reclaims unreachable objects",
    "JDBC -> Database",
    "I/O/NIO -> Files/data",
    "Socket/HTTP -> Network",
    "Record -> Data carrier",
    "Sealed -> Restricted inheritance",
    "Pattern Matching -> Cleaner type handling",
    "Module -> Strong application/platform modularity",
    "SOLID -> Good design",
    "Design Patterns -> Reusable design solutions",
    "DSA -> Problem solving"
  ]},
]

export default function QuickLearnPage() {
  const [active, setActive] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const st = location.state
    if (st && typeof st.section !== 'undefined' && st.section != null) {
      setActive(st.section)
    }
  }, []) // eslint-disable-line

  useSidebarSearch()

  function showSection(idx) {
    setActive(idx)
    const s = document.getElementById('qlSidebar')
    const b = document.getElementById('qlSidebarBackdrop')
    if (s) s.classList.remove('open')
    if (b) b.classList.remove('open')
  }

  function toggleSidebar() {
    const s = document.getElementById('qlSidebar')
    const b = document.getElementById('qlSidebarBackdrop')
    if (s) s.classList.toggle('open')
    if (b) b.classList.toggle('open')
  }

  const sec = SECTIONS[active]
  const contentText = sec ? sec.items.join(' ') : ''

  return (
    <div className="learn-layout">
      <aside className="sidebar" id="qlSidebar">
        <div className="search-sidebar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search sections..." id="learnSearchInput" className="sidebar-search-input" data-sidebar="qlSidebar" />
        </div>
        {SECTIONS.map((s, i) => (
          <div className="sidebar-section" key={i}>
            <div className="sidebar-section-title">{s.title.split('. ')[1] || s.title}</div>
            <div
              className={'sidebar-item' + (active === i ? ' active' : '')}
              onClick={() => showSection(i)}
            >
              <i className="fas fa-bolt"></i> {s.title}
            </div>
          </div>
        ))}
      </aside>
      <main className="main-content" id="mainContent">
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}><i className="fas fa-bars"></i> Sections</button>
        <div className="lesson-container" id="lessonContainer">
          {sec ? (
            <>
              <div className="lesson-header">
                <h1>{sec.title}</h1>
                <span className="badge beginner">Quick</span>
              </div>
              <VoiceReader text={contentText} title={sec.title} />
              <div className="quicklearn-content">
                <ul className="quicklearn-list">
                  {sec.items.map((item, j) => (
                    <li key={j}><b>{item.split(':')[0]}:</b>{item.split(':').slice(1).join(':')}</li>
                  ))}
                </ul>
              </div>
              <div className="lesson-nav" style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--border)', gap: 12, flexWrap: 'wrap' }}>
                {active > 0 ? (
                  <button className="btn btn-outline" onClick={() => showSection(active - 1)}><i className="fas fa-arrow-left"></i> Previous</button>
                ) : <span></span>}
        
                {active < SECTIONS.length - 1 ? (
                  <button className="btn btn-primary" onClick={() => showSection(active + 1)}>Next <i className="fas fa-arrow-right"></i></button>
                ) : <span></span>}
              </div>
            </>
          ) : (
            <div className="empty-state"><i className="fas fa-book-open"></i><h3>Section not found</h3></div>
          )}
        </div>
      </main>
      <div id="qlSidebarBackdrop" className="sidebar-backdrop" onClick={toggleSidebar}></div>
    </div>
  )
}
