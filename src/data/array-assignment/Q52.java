import java.util.HashSet;

class Q52
{
    // Q52: Check if any subarray has sum equal to zero.
    // Explanation:
    //  - Maintain a running prefix sum. If the same prefix sum appears twice,
    //    the subarray between those two indices sums to zero (prefix[j] - prefix[i] == 0).
    //  - Store prefix sums in a HashSet; first repeat means a zero-sum subarray.
    //  - Example: {4,2,-3,1,6} -> prefix sums: 4,6,3,4,10 -> 4 repeats
    //    => subarray from index 1..2 ({2,-3,1}) sums to 0.
    static boolean hasZeroSumSubarray(int arr[])
    {
        HashSet<Integer> set = new HashSet<>();
        int sum = 0;
        for(int i = 0; i < arr.length; i++)
        {
            sum += arr[i];
            if(arr[i] == 0 || set.contains(sum) || sum == 0)
                return true;
            set.add(sum);
        }
        return false;
    }
    public static void main(String args[])
    {
        int arr[] = {4, 2, -3, 1, 6};
        System.out.println("Zero-sum subarray exists? " + hasZeroSumSubarray(arr)); // true
    }
}