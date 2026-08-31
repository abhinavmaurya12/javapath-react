class Q41
{
    // Q41: Find numbers that are NOT repeated; all others appear twice.
    // Explanation:
    //  - Count frequency of every element.
    //  - Print only those whose frequency is exactly 1.
    //  - Example: {23,34,56,21,21,56,78,23,34} -> only 78 appears once.
    static void printNonRepeated(int arr[])
    {
        // Frequency map using an auxiliary array of counts (values are small here)
        int max = 0;
        for(int i = 0; i < arr.length; i++)
            if(arr[i] > max) max = arr[i];

        int freq[] = new int[max + 1];
        for(int i = 0; i < arr.length; i++)
            freq[arr[i]]++;

        System.out.print("Non-repeated elements: ");
        for(int i = 0; i < arr.length; i++)
        {
            if(freq[arr[i]] == 1)
            {
                System.out.print(arr[i] + " ");
                freq[arr[i]] = 0; // avoid printing twice
            }
        }
        System.out.println();
    }
    public static void main(String args[])
    {
        int arr[] = {23, 34, 56, 21, 21, 56, 78, 23, 34};
        printNonRepeated(arr); // 78
    }
}