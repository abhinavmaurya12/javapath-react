class Q40
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
    //    three largest: 8,6,5 -> product = 240
    //    two smallest: -9,-7 and largest 8 -> product = 504  <-- max
    static long maxProductOfThree(int arr[])
    {
        // Initialise extremes
        int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE, max3 = Integer.MIN_VALUE;
        int min1 = Integer.MAX_VALUE, min2 = Integer.MAX_VALUE;

        for(int i = 0; i < arr.length; i++)
        {
            int x = arr[i];

            // Update three largest
            if(x > max1)
            {
                max3 = max2;
                max2 = max1;
                max1 = x;
            }
            else if(x > max2)
            {
                max3 = max2;
                max2 = x;
            }
            else if(x > max3)
            {
                max3 = x;
            }

            // Update two smallest
            if(x < min1)
            {
                min2 = min1;
                min1 = x;
            }
            else if(x < min2)
            {
                min2 = x;
            }
        }

        long candidate1 = (long) max1 * max2 * max3;
        long candidate2 = (long) min1 * min2 * max1;
        return (candidate1 > candidate2) ? candidate1 : candidate2;
    }
    public static void main(String args[])
    {
        int arr[] = {2, 5, -2, 6, -3, 8, 0, -7, -9, 4};
        System.out.println("Max product of three = " + maxProductOfThree(arr)); // 504
    }
}