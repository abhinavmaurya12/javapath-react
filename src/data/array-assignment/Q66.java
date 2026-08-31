class Q66
{
    // Q66: Find the first 3-digit number present in the array.
    // Explanation:
    //  - A 3-digit number lies in the inclusive range [100, 999].
    //  - Walk through the array and return the first element that satisfies
    //    100 <= value <= 999. If none exists, print a message.
    //  - Example: {9, 99, 100, 5, 999, 1000} -> first 3-digit = 100.
    static int find3digit(int x[])
    {
        for(int i = 0; i < x.length; i++)
        {
            if(x[i] >= 100 && x[i] <= 999)
                return x[i];
        }
        return -1; // no 3-digit number found
    }
    public static void main(String args[])
    {
        int x[] = {9, 99, 100, 5, 999, 1000};
        int result = find3digit(x);
        if(result == -1)
            System.out.println("No 3-digit number found");
        else
            System.out.println("First 3-digit number = " + result);
    }
}