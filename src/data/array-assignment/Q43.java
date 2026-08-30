class Q43
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
        for(int i = 0; i < arr.length; i++)
            actualSum += arr[i];

        return expectedSum - actualSum;
    }
    public static void main(String args[])
    {
        // Build an array 1..100 skipping 42
        int arr[] = new int[99];
        int idx = 0;
        for(int i = 1; i <= 100; i++)
        {
            if(i == 42) continue;
            arr[idx] = i;
            idx++;
        }
        System.out.println("Missing number = " + findMissing(arr)); // 42
    }
}