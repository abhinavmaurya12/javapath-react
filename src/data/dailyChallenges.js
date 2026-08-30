export default  [
  {
    id: 1,
    title: "Reverse an Array",
    difficulty: "easy",
    topic: "Arrays",
    description: "Write a Java program to reverse an array without using another array.",
    input: "N = 5\nArr = 1 2 3 4 5",
    output: "5 4 3 2 1",
    hint: "Use two pointers \u2014 one at the start and one at the end. Swap elements and move towards the center.",
    solution: "class ReverseArray {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int start = 0, end = arr.length - 1;\n        while (start < end) {\n            int temp = arr[start];\n            arr[start] = arr[end];\n            arr[end] = temp;\n            start++;\n            end--;\n        }\n        for (int num : arr) System.out.print(num + \" \");\n    }\n}"
  },
  {
    id: 2,
    title: "Fibonacci Series",
    difficulty: "medium",
    topic: "Recursion",
    description: "Print the first N numbers of the Fibonacci series using recursion.",
    input: "N = 8",
    output: "0 1 1 2 3 5 8 13",
    hint: "Each Fibonacci number is the sum of the two preceding ones. Base cases: F(0)=0, F(1)=1.",
    solution: "class Fibonacci {\n    static int fib(int n) {\n        if (n <= 1) return n;\n        return fib(n - 1) + fib(n - 2);\n    }\n    public static void main(String[] args) {\n        int n = 8;\n        for (int i = 0; i < n; i++) {\n            System.out.print(fib(i) + \" \");\n        }\n    }\n}"
  },
  {
    id: 3,
    title: "Check Palindrome",
    difficulty: "easy",
    topic: "Strings",
    description: "Write a Java program to check if a given string is a palindrome.",
    input: "madam",
    output: "true",
    hint: "Compare characters from both ends moving towards the center.",
    solution: "class CheckPalindrome {\n    public static void main(String[] args) {\n        String s = \"madam\";\n        int start = 0, end = s.length() - 1;\n        boolean isPalindrome = true;\n        while (start < end) {\n            if (s.charAt(start) != s.charAt(end)) {\n                isPalindrome = false;\n                break;\n            }\n            start++;\n            end--;\n        }\n        System.out.println(isPalindrome);\n    }\n}"
  },
  {
    id: 4,
    title: "Find Largest Element",
    difficulty: "easy",
    topic: "Arrays",
    description: "Write a Java program to find the largest element in an integer array.",
    input: "N = 5\nArr = 3 7 2 9 5",
    output: "9",
    hint: "Initialize max with the first element, then iterate and compare each element.",
    solution: "class FindLargest {\n    public static void main(String[] args) {\n        int[] arr = {3, 7, 2, 9, 5};\n        int max = arr[0];\n        for (int i = 1; i < arr.length; i++) {\n            if (arr[i] > max) max = arr[i];\n        }\n        System.out.println(max);\n    }\n}"
  },
  {
    id: 5,
    title: "Bubble Sort",
    difficulty: "medium",
    topic: "Sorting",
    description: "Implement bubble sort to sort an integer array in ascending order.",
    input: "N = 5\nArr = 64 34 25 12 22",
    output: "12 22 25 34 64",
    hint: "Repeatedly swap adjacent elements if they are in the wrong order.",
    solution: "class BubbleSort {\n    public static void main(String[] args) {\n        int[] arr = {64, 34, 25, 12, 22};\n        int n = arr.length;\n        for (int i = 0; i < n - 1; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n            }\n        }\n        for (int num : arr) System.out.print(num + \" \");\n    }\n}"
  },
  {
    id: 6,
    title: "Linear Search",
    difficulty: "easy",
    topic: "Searching",
    description: "Implement linear search to find the index of a target element in an array.",
    input: "N = 4\nArr = 10 20 30 40\ntarget = 30",
    output: "Found at index 2",
    hint: "Iterate through each element and compare with the target value.",
    solution: "class LinearSearch {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30, 40};\n        int target = 30;\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == target) {\n                System.out.println(\"Found at index \" + i);\n                return;\n            }\n        }\n        System.out.println(\"Not found\");\n    }\n}"
  },
  {
    id: 7,
    title: "Count Vowels",
    difficulty: "easy",
    topic: "Strings",
    description: "Write a Java program to count the number of vowels in a given string.",
    input: "Programming",
    output: "3",
    hint: "Check if each character is a, e, i, o, or u (case-insensitive).",
    solution: "class CountVowels {\n    public static void main(String[] args) {\n        String s = \"Programming\";\n        int count = 0;\n        for (char c : s.toLowerCase().toCharArray()) {\n            if (\"aeiou\".indexOf(c) != -1) count++;\n        }\n        System.out.println(count);\n    }\n}"
  },
  {
    id: 8,
    title: "Factorial of N",
    difficulty: "easy",
    topic: "Recursion",
    description: "Write a Java program to find the factorial of a number N using recursion.",
    input: "N = 5",
    output: "120",
    hint: "Factorial of N is N * factorial(N-1). Base case: factorial(0) = 1.",
    solution: "class Factorial {\n    static long factorial(int n) {\n        if (n == 0 || n == 1) return 1;\n        return n * factorial(n - 1);\n    }\n    public static void main(String[] args) {\n        int n = 5;\n        System.out.println(factorial(n));\n    }\n}"
  },
  {
    id: 9,
    title: "Matrix Addition",
    difficulty: "medium",
    topic: "Arrays",
    description: "Write a Java program to add two matrices of the same size.",
    input: "Matrix A:\n1 2 3\n4 5 6\n\nMatrix B:\n7 8 9\n10 11 12",
    output: "8 10 12\n14 16 18",
    hint: "Add corresponding elements: result[i][j] = A[i][j] + B[i][j].",
    solution: "class MatrixAddition {\n    public static void main(String[] args) {\n        int[][] A = {{1, 2, 3}, {4, 5, 6}};\n        int[][] B = {{7, 8, 9}, {10, 11, 12}};\n        int rows = 2, cols = 3;\n        int[][] result = new int[rows][cols];\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < cols; j++) {\n                result[i][j] = A[i][j] + B[i][j];\n            }\n        }\n        for (int i = 0; i < rows; i++) {\n            for (int j = 0; j < cols; j++) {\n                System.out.print(result[i][j] + \" \");\n            }\n            System.out.println();\n        }\n    }\n}"
  },
  {
    id: 10,
    title: "Binary Search",
    difficulty: "medium",
    topic: "Searching",
    description: "Implement binary search on a sorted array to find the index of a target element.",
    input: "Arr = 2 5 8 12 16 23 38\ntarget = 23",
    output: "Found at index 5",
    hint: "Divide the search interval in half. Compare target with the middle element.",
    solution: "class BinarySearch {\n    public static void main(String[] args) {\n        int[] arr = {2, 5, 8, 12, 16, 23, 38};\n        int target = 23;\n        int low = 0, high = arr.length - 1;\n        while (low <= high) {\n            int mid = (low + high) / 2;\n            if (arr[mid] == target) {\n                System.out.println(\"Found at index \" + mid);\n                return;\n            } else if (arr[mid] < target) {\n                low = mid + 1;\n            } else {\n                high = mid - 1;\n            }\n        }\n        System.out.println(\"Not found\");\n    }\n}"
  }
];
