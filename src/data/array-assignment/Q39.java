import java.util.HashSet;

class Q39
{
    // Q39: Length of the longest consecutive elements sequence (unsorted).
    // Explanation:
    //  - Put all numbers into a HashSet for O(1) lookups.
    //  - For each element that is the START of a sequence (i.e. num-1 is not
    //    in the set), count how long the run of num, num+1, num+2, ... is.
    //  - Track the maximum length found.
    //  - Example: {49,1,3,200,2,4,70,5} -> longest run is {1,2,3,4,5} -> 5.
    static int longestConsecutive(int arr[])
    {
        HashSet<Integer> set = new HashSet<>();
        for(int i = 0; i < arr.length; i++)
            set.add(arr[i]);

        int maxLen = 0;
        for(int i = 0; i < arr.length; i++)
        {
            // Only start counting if arr[i]-1 is absent (start of a sequence)
            if(!set.contains(arr[i] - 1))
            {
                int num = arr[i];
                int len = 1;
                while(set.contains(num + 1))
                {
                    num++;
                    len++;
                }
                if(len > maxLen)
                    maxLen = len;
            }
        }
        return maxLen;
    }
    public static void main(String args[])
    {
        int arr[] = {49, 1, 3, 200, 2, 4, 70, 5};
        System.out.println("Longest consecutive sequence length = " + longestConsecutive(arr)); // 5
    }
}