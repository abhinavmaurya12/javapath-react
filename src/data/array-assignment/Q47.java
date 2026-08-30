class Q47
{
    // Q47: Every element repeats twice except one — find that element.
    // Explanation:
    //  - XOR all elements. Bits that appear twice cancel out (x ^ x == 0),
    //    leaving only the element that appears once (x ^ 0 == x).
    //  - O(n) time, O(1) space.
    //  - Example: {2,3,4,2,3} -> 2^3^4^2^3 = 4.
    static int findSingle(int arr[])
    {
        int result = 0;
        for(int i = 0; i < arr.length; i++)
            result ^= arr[i];
        return result;
    }
    public static void main(String args[])
    {
        int arr[] = {2, 3, 4, 2, 3};
        System.out.println("The non-repeating element = " + findSingle(arr)); // 4
    }
}