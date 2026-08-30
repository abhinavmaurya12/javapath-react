class Q53
{
    // Q53: Remove duplicates IN PLACE from a sorted array; return new length.
    // Explanation:
    //  - Since the array is sorted, duplicates are adjacent.
    //  - Use a write pointer 'j': copy arr[i] to arr[j] only when it differs
    //    from the last kept element. j is the new length.
    //  - Example: [1,1,2] -> arr becomes [1,2,...], return 2.
    static int removeDuplicatesInPlace(int arr[])
    {
        if(arr.length == 0) return 0;
        int j = 1;
        for(int i = 1; i < arr.length; i++)
        {
            if(arr[i] != arr[i - 1])
            {
                arr[j] = arr[i];
                j++;
            }
        }
        return j;
    }
    public static void main(String args[])
    {
        int A[] = {1, 1, 2};
        int len = removeDuplicatesInPlace(A);
        System.out.println("New length = " + len); // 2
        System.out.print("A = ");
        for(int i = 0; i < len; i++)
            System.out.print(A[i] + " ");
        System.out.println();
    }
}