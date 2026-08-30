class Q37
{
    // Q37: Sort the array and calculate cumulative frequency of each element.
    // Explanation:
    //  - First sort the array so equal elements group together.
    //  - Walk through the sorted array, count occurrences of each distinct value.
    //  - Keep a running total (cumulative frequency) and print value->cumulative.
    //  - Example: {1,3,2,1,2,4} sorted -> {1,1,2,2,3,4}
    //    1 appears 2 times  -> cumulative = 2    => 1->2
    //    2 appears 2 times  -> cumulative = 4    => 2->4
    //    3 appears 1 time   -> cumulative = 5    => 3->5
    //    4 appears 1 time   -> cumulative = 6    => 4->6
    static void cumulativeFrequency(int arr[])
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

        int cumulative = 0;
        int i = 0;
        while(i < arr.length)
        {
            int value = arr[i];
            int count = 0;
            // Count how many times 'value' repeats consecutively
            while(i < arr.length && arr[i] == value)
            {
                count++;
                i++;
            }
            cumulative += count;
            System.out.println(value + "->" + cumulative);
        }
    }
    public static void main(String args[])
    {
        int arr1[] = {1, 3, 2, 1, 2, 4};
        System.out.println("Input: {1,3,2,1,2,4}");
        cumulativeFrequency(arr1);
        System.out.println();

        int arr2[] = {1, 2, 1, 2, 1, 2};
        System.out.println("Input: {1,2,1,2,1,2}");
        cumulativeFrequency(arr2);
    }
}