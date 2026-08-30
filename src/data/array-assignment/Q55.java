class Q55
{
    // Q55: Maximum sum of a contiguous subarray (Kadane's algorithm).
    // Explanation:
    //  - Walk through the array keeping a running sum (current).
    //  - If current becomes negative, reset it to 0 (a negative prefix only
    //    reduces the sum of any following subarray).
    //  - Track the maximum current sum seen.
    //  - Example: {-2,1,-3,4,-1,2,1,-5,4} -> max sum = 6 (subarray [4,-1,2,1]).
    static int maxSubArraySum(int arr[])
    {
        int max = Integer.MIN_VALUE;
        int current = 0;
        for(int i = 0; i < arr.length; i++)
        {
            current += arr[i];
            if(current > max)
                max = current;
            if(current < 0)
                current = 0;
        }
        return max;
    }
    public static void main(String args[])
    {
        int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Maximum subarray sum = " + maxSubArraySum(arr)); // 6
    }
}