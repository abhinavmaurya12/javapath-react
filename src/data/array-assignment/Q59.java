class Q59
{
    // Q59: Reverse an array IN PLACE.
    // Explanation:
    //  - Swap the first and last elements, then move inward until the middle.
    //  - O(n) time, O(1) extra space (no second array).
    static void reverseInPlace(int arr[])
    {
        int start = 0, end = arr.length - 1;
        while(start < end)
        {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    public static void main(String args[])
    {
        int arr[] = {10, 20, 30, 40, 50, 60};
        reverseInPlace(arr);
        System.out.print("Reversed: ");
        for(int i = 0; i < arr.length; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }
}