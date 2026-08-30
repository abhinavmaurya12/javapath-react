class Q54
{
    // Q54: Remove all instances of a value IN PLACE; return new length.
    // Explanation:
    //  - Write pointer 'j' copies only elements != val. j is the new length.
    //  - Order of remaining elements is preserved (stable).
    //  - Elements beyond the new length can be anything.
    static int removeElement(int arr[], int val)
    {
        int j = 0;
        for(int i = 0; i < arr.length; i++)
        {
            if(arr[i] != val)
            {
                arr[j] = arr[i];
                j++;
            }
        }
        return j;
    }
    public static void main(String args[])
    {
        int arr[] = {3, 2, 2, 3};
        int val = 3;
        int len = removeElement(arr, val);
        System.out.println("New length after removing " + val + " = " + len); // 2
        System.out.print("Remaining: ");
        for(int i = 0; i < len; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }
}