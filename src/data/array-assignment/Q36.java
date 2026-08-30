class Q36
{
    // Q36: WAP to find Kth smallest element in an unsorted array.
    // Explanation:
    //  - We sort the array in ascending order.
    //  - The Kth smallest element is at index (K-1) because sorting places
    //    the smallest at index 0, 2nd smallest at index 1, and so on.
    //  - Example: arr[] = {7,10,4,3,20,15}, K=3
    //    Sorted -> {3,4,7,10,15,20}, so 3rd smallest = arr[2] = 7.
    //    For K=4 -> arr[3] = 10.
    static int kthSmallest(int arr[], int k)
    {
        // Bubble sort the array in place
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
        return arr[k - 1];
    }
    public static void main(String args[])
    {
        int arr[] = {7, 10, 4, 3, 20, 15};
        System.out.println("K=3 -> " + kthSmallest(arr, 3));  // 7
        int arr2[] = {7, 10, 4, 3, 20, 15};
        System.out.println("K=4 -> " + kthSmallest(arr2, 4)); // 10
    }
}