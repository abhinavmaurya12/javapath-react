class Q50
{
    // Q50: Smallest positive integer NOT representable as a subset sum.
    // Explanation (O(n)):
    //  - Sort the array.
    //  - Maintain 'smallestUnrepresentable' = 1 initially.
    //  - For each element x:
    //      if x > smallestUnrepresentable -> we cannot form it, return it.
    //      else -> we can form all sums up to (smallestUnrepresentable + x - 1),
    //              so update smallestUnrepresentable += x.
    //  - Example: {1,3,6,10,11,15}
    //    smallest=1; x=1 -> 2; x=3 -> 5; x=6 -> 11; x=10 -> 21;
    //    x=11 -> 32; x=15 -> 47; return 2 (can't make 2).
    static int smallestNonRepresentable(int arr[])
    {
        // Sort in place (bubble sort)
        for(int i = 0; i < arr.length - 1; i++)
        {
            for(int j = i + 1; j < arr.length; j++)
            {
                if(arr[i] > arr[j])
                {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        int smallest = 1;
        for(int i = 0; i < arr.length; i++)
        {
            if(arr[i] > smallest)
                break;
            smallest += arr[i];
        }
        return smallest;
    }
    public static void main(String args[])
    {
        int arr[] = {1, 3, 6, 10, 11, 15};
        System.out.println("Smallest non-representable = " + smallestNonRepresentable(arr)); // 2
    }
}