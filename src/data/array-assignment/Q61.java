class Q61
{
    // Q61: Print a 2D matrix in spiral (clockwise) order.
    // Explanation:
    //  - Maintain four boundaries: top, bottom, left, right.
    //  - Print top row (left->right), then right column (top->bottom),
    //    then bottom row (right->left), then left column (bottom->top).
    //  - Shrink the boundaries inward and repeat until all elements printed.
    //  - Example: {{10,20,30},{40,50,60},{70,80,90}}
    //    Output: 10 20 30 60 90 80 70 40 50.
    static void printSpiral(int matrix[][])
    {
        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;

        while(top <= bottom && left <= right)
        {
            // Top row
            for(int j = left; j <= right; j++)
                System.out.print(matrix[top][j] + " ");
            top++;

            // Right column
            for(int i = top; i <= bottom; i++)
                System.out.print(matrix[i][right] + " ");
            right--;

            // Bottom row
            if(top <= bottom)
            {
                for(int j = right; j >= left; j--)
                    System.out.print(matrix[bottom][j] + " ");
                bottom--;
            }

            // Left column
            if(left <= right)
            {
                for(int i = bottom; i >= top; i--)
                    System.out.print(matrix[i][left] + " ");
                left++;
            }
        }
        System.out.println();
    }
    public static void main(String args[])
    {
        int arr[][] = {
            {10, 20, 30},
            {40, 50, 60},
            {70, 80, 90}
        };
        System.out.print("Spiral: ");
        printSpiral(arr); // 10 20 30 60 90 80 70 40 50
    }
}