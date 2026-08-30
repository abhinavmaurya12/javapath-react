class Q56
{
    // Q56: Maximum product of a contiguous subarray.
    // Explanation:
    //  - Keep track of max and min product ending at the current position.
    //  - A negative number can flip the sign, turning a min product into a
    //    max product, so we must track both.
    //  - Example: {2,3,-2,4} -> max product = 6 (subarray [2,3]).
    static int maxSubArrayProduct(int arr[])
    {
        int max = arr[0];
        int min = arr[0];
        int result = arr[0];

        for(int i = 1; i < arr.length; i++)
        {
            int temp = min;
            min = Math.min(arr[i], Math.min(max * arr[i], min * arr[i]));
            max = Math.max(arr[i], Math.max(max * arr[i], temp * arr[i]));
            if(max > result)
                result = max;
        }
        return result;
    }
    public static void main(String args[])
    {
        int arr[] = {2, 3, -2, 4};
        System.out.println("Maximum subarray product = " + maxSubArrayProduct(arr)); // 6
    }
}