class Q62
{
    // Q62: Find the single repeated element in an array of 101 numbers
    //       containing 1..100 with one value repeated.
    // Explanation (single loop):
    //  - Sum of 1..100 = 100*101/2 = 5050.
    //  - Subtract the actual array sum from 5050; the difference is the
    //    repeated element (since it contributes one extra time).
    //  - One pass computes the sum, giving O(n) time and O(1) space.
    //  - Example: array holds 1..100 with one value duplicated -> that value.
    static int findRepeated(int arr[])
    {
        int sumOf100 = 100 * 101 / 2; // 5050
        int total = 0;
        for(int i = 0; i < arr.length; i++)
            total += arr[i];
        return total - sumOf100;
    }
    public static void main(String args[])
    {
        // Build an array of 1..100 and repeat 42 once more (101 elements)
        int arr[] = new int[101];
        int idx = 0;
        for(int i = 1; i <= 100; i++)
            arr[idx++] = i;
        arr[idx] = 42; // the repeated element

        System.out.println("Repeated element = " + findRepeated(arr)); // 42
    }
}