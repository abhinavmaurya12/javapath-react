import java.util.HashMap;

class Q49
{
    // Q49: First repeating element — the element that occurs more than once and
    //      whose index of first occurrence is smallest.
    // Explanation:
    //  - Record the first index where each value appears.
    //  - Then scan again: any value that appears a second time is a candidate.
    //    Among candidates, pick the one with the smallest first-occurrence index.
    //  - Example: {10,5,3,4,3,5,6}
    //    5 first appears at index 1, 3 at index 2 -> answer is 5.
    static int firstRepeating(int arr[])
    {
        HashMap<Integer, Integer> firstIdx = new HashMap<>();
        for(int i = 0; i < arr.length; i++)
        {
            if(!firstIdx.containsKey(arr[i]))
                firstIdx.put(arr[i], i);
        }

        int bestIdx = arr.length;
        int answer = -1;
        for(int i = 0; i < arr.length; i++)
        {
            // If this value repeats later, it is a repeating element
            boolean repeats = false;
            for(int j = i + 1; j < arr.length; j++)
            {
                if(arr[j] == arr[i]) { repeats = true; break; }
            }
            if(repeats && firstIdx.get(arr[i]) < bestIdx)
            {
                bestIdx = firstIdx.get(arr[i]);
                answer = arr[i];
            }
        }
        return answer;
    }
    public static void main(String args[])
    {
        int arr[] = {10, 5, 3, 4, 3, 5, 6};
        System.out.println("First repeating element = " + firstRepeating(arr)); // 5
    }
}