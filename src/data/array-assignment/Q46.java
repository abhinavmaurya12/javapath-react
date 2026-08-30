class Q46
{
    // Q46: Remove duplicates from an array in place and return new length.
    // Explanation:
    //  - Two-pointer approach: 'j' tracks the position of the next unique element.
    //  - For each element, if it differs from the last kept element, copy it to arr[j].
    //  - After the pass, arr[0..j-1] holds unique elements and j is the new length.
    //  - Works on a sorted array (duplicates are adjacent).
    static int removeDuplicates(int arr[])
    {
        if(arr.length == 0) return 0;

        int j = 1; // index of next unique element
        for(int i = 1; i < arr.length; i++)
        {
            if(arr[i] != arr[j - 1])
            {
                arr[j] = arr[i];
                j++;
            }
        }
        return j;
    }
    public static void main(String args[])
    {
        int arr[] = {1, 1, 2, 3, 3, 4, 5, 5, 5, 6};
        int newLen = removeDuplicates(arr);
        System.out.print("Unique array: ");
        for(int i = 0; i < newLen; i++)
            System.out.print(arr[i] + " ");
        System.out.println("\nNew length = " + newLen);
    }
}