import java.util.HashSet;

class Q45
{
    // Q45: Find all pairs in an integer array whose sum equals a given number.
    // Explanation:
    //  - Use a HashSet of seen values.
    //  - For each element x, if (target - x) is already in the set, a pair
    //    (target-x, x) exists. Add x to the set.
    //  - Runs in O(n) time.
    static void printPairsWithSum(int arr[], int sum)
    {
        HashSet<Integer> seen = new HashSet<>();
        for(int i = 0; i < arr.length; i++)
        {
            int complement = sum - arr[i];
            if(seen.contains(complement))
            {
                System.out.println("Pair: (" + complement + ", " + arr[i] + ")");
            }
            seen.add(arr[i]);
        }
    }
    public static void main(String args[])
    {
        int arr[] = {1, 4, 45, 6, 10, 8};
        int sum = 16;
        System.out.println("Pairs with sum " + sum + ":");
        printPairsWithSum(arr, sum); // (6,10), (8,8) if duplicates allowed
    }
}