class Q63
{
    // Q63: Sort an array in DESCENDING order (selection sort variant).
    // Explanation:
    //  - This is the counterpart of the ascending sort: we still pick the
    //    maximum of the remaining elements but swap it to the front.
    //  - At each step we find the largest element in the unsorted part and
    //    place it at the current position, moving the smallest to the back.
    //  - Example: {25, 10, 45, 95, 62} -> {95, 62, 45, 25, 10}.
    static void sort1(int x[])
    {
        for(int i = 0; i < x.length - 1; i++)
        {
            int maxIdx = i;
            for(int j = i + 1; j < x.length; j++)
            {
                if(x[j] > x[maxIdx])
                    maxIdx = j;
            }
            int temp = x[i];
            x[i] = x[maxIdx];
            x[maxIdx] = temp;
        }
    }
    public static void main(String args[])
    {
        int arr[] = {25, 10, 45, 95, 62};
        sort1(arr);

        System.out.print("Descending Order: ");
        for(int i = 0; i < arr.length; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }
}