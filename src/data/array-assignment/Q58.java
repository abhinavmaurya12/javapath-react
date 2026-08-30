import java.util.HashMap;
import java.util.Map;

class Q58
{
    // Q58: Find all elements that appear more than n/k times.
    // Explanation:
    //  - Count frequency of every element using a HashMap.
    //  - Threshold = n/k. Print every element whose count exceeds it.
    //  - Example: {3,1,2,2,1,2,3,3}, n=8, k=4 -> threshold = 2.
    //    Counts: 3->4, 1->2, 2->3. Elements appearing more than 2 times: 2, 3.
    static void moreThanNk(int arr[], int k)
    {
        int n = arr.length;
        int threshold = n / k;
        Map<Integer, Integer> freq = new HashMap<>();
        for(int i = 0; i < n; i++)
        {
            freq.put(arr[i], freq.getOrDefault(arr[i], 0) + 1);
        }

        System.out.print("Elements appearing more than " + threshold + " times: ");
        for(Map.Entry<Integer, Integer> e : freq.entrySet())
        {
            if(e.getValue() > threshold)
                System.out.print(e.getKey() + " ");
        }
        System.out.println();
    }
    public static void main(String args[])
    {
        int arr[] = {3, 1, 2, 2, 1, 2, 3, 3};
        int k = 4;
        moreThanNk(arr, k); // 2 3
    }
}