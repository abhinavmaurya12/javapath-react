class Q67
{
    // Q67: Find the largest value in an array WITHOUT sorting it.
    // Explanation:
    //  - We do not sort because sorting is O(n log n) and unnecessary here.
    //  - A single linear pass keeps a running maximum, starting from the
    //    first element, and updates it whenever a larger element is found.
    //  - This runs in O(n) time and O(1) extra space.
    //  - Example: {12, 45, 23, 89, 34, 67} -> largest = 89.
    static float findlargestvalueinarray(int x[])
    {
        float max = x[0];
        for(int i = 1; i < x.length; i++)
        {
            if(x[i] > max)
                max = x[i];
        }
        return max;
    }
    public static void main(String args[])
    {
        int x[] = {12, 45, 23, 89, 34, 67};
        System.out.println("Largest value (without sorting) = " + findlargestvalueinarray(x));
    }
}