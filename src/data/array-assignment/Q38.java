class Q38
{
    // Q38: Find the majority element (appears more than n/2 times).
    // Explanation:
    //  - Boyer-Moore Majority Vote algorithm: keep a candidate and a counter.
    //  - For each element: if counter == 0 pick it as candidate; else if it
    //    matches candidate increment counter, else decrement.
    //  - After one pass the candidate is the majority if one exists.
    //  - We then verify it by counting occurrences (must be > n/2).
    //  - Example: {1,1,2,3,1,5,3,1,1,1} n=10, majority threshold >5.
    //    Candidate ends as 1, count = 7 > 5 -> majority = 1.
    static int majorityElement(int arr[])
    {
        int candidate = 0;
        int count = 0;

        for(int i = 0; i < arr.length; i++)
        {
            if(count == 0)
            {
                candidate = arr[i];
                count = 1;
            }
            else if(arr[i] == candidate)
            {
                count++;
            }
            else
            {
                count--;
            }
        }

        // Verify
        int freq = 0;
        for(int i = 0; i < arr.length; i++)
        {
            if(arr[i] == candidate)
                freq++;
        }
        if(freq > arr.length / 2)
            return candidate;
        return -1; // no majority
    }
    public static void main(String args[])
    {
        int arr[] = {1, 1, 2, 3, 1, 5, 3, 1, 1, 1};
        System.out.println("Majority element = " + majorityElement(arr)); // 1
    }
}