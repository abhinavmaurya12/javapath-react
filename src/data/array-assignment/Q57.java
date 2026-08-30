import java.util.HashSet;

class Q57
{
    // Q57: Length of longest consecutive sequence in an unsorted array.
    // Explanation:
    //  - Put all numbers in a HashSet for O(1) membership tests.
    //  - For each value that starts a sequence (value-1 absent), count the
    //    run of value, value+1, value+2, ...
    //  - Track the maximum run length.
    //  - Example: {100,4,200,1,3,2} -> longest run {1,2,3,4} -> 4.
    static int longestConsecutive(int arr[])
    {
        HashSet<Integer> set = new HashSet<>();
        for(int i = 0; i < arr.length; i++)
            set.add(arr[i]);

        int maxLen = 0;
        for(int i = 0; i < arr.length; i++)
        {
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
        int arr[] = {100, 4, 200, 1, 3, 2};
        System.out.println("Longest consecutive sequence length = " + longestConsecutive(arr)); // 4
    }
}