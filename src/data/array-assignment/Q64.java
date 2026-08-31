class Q64
{
    // Q64: Separate the elements of a square matrix diagonal-wise.
    // Explanation:
    //  - Elements where row index == column index form the MAIN diagonal.
    //  - Elements where row index + column index == n-1 form the ANTI diagonal.
    //  - This method prints both groups separately so the diagonals can be
    //    inspected apart from the rest of the matrix.
    //  - Example: 3x3 matrix -> main diagonal {a[0][0], a[1][1], a[2][2]},
    //    anti diagonal {a[0][2], a[1][1], a[2][0]}.
    static void sepindigonalwise(int x[][])
    {
        int n = x.length;
        System.out.println("Main Diagonal:");
        for(int i = 0; i < n; i++)
            System.out.print(x[i][i] + " ");
        System.out.println();

        System.out.println("Anti Diagonal:");
        for(int i = 0; i < n; i++)
            System.out.print(x[i][n - 1 - i] + " ");
        System.out.println();
    }
    public static void main(String args[])
    {
        int x[][] = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        sepindigonalwise(x);
    }
}