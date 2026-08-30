class Q44
{
    // Q44: Demonstrate jagged arrays (arrays of arrays with different lengths).
    // Explanation:
    //  - A jagged array is a multidimensional array whose rows can have
    //    different numbers of columns.
    //  - Each row is allocated its own length, unlike a rectangular matrix.
    static void printJagged(int jagged[][])
    {
        for(int i = 0; i < jagged.length; i++)
        {
            for(int j = 0; j < jagged[i].length; j++)
            {
                System.out.print(jagged[i][j] + " ");
            }
            System.out.println();
        }
    }
    public static void main(String args[])
    {
        // Row 0 has 2 elements, row 1 has 4, row 2 has 3 -> jagged shape
        int jagged[][] = {
            {1, 2},
            {3, 4, 5, 6},
            {7, 8, 9}
        };
        System.out.println("Jagged array (rows of different lengths):");
        printJagged(jagged);
    }
}