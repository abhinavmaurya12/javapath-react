class Q60
{
    // Q60: Minimum steps from (1,1) to (N,M) moving (x, x+y) or (x+y, y).
    // Explanation:
    //  - Work backwards from (N,M): while N>1 and M>1, the larger coordinate
    //    must have been reached by adding the smaller one, so subtract.
    //  - When one coordinate reaches 1, the remaining steps equal the other
    //    coordinate minus 1 (each step adds the fixed 1).
    //  - If a coordinate never reduces to 1 it is unreachable -> return -1.
    //  - Example: N=4, M=7 -> (4,7)->(4,3)->(1,3)->(1,2)->(1,1): 4 steps.
    static int minSteps(int N, int M)
    {
        int steps = 0;
        while(N > 1 && M > 1)
        {
            if(N > M)
                N -= M;
            else
                M -= N;
            steps++;
        }

        if(N == 1 && M >= 1)
            return steps + (M - 1);
        if(M == 1 && N >= 1)
            return steps + (N - 1);
        return -1;
    }
    public static void main(String args[])
    {
        int N = 4, M = 7;
        System.out.println("Minimum steps from (1,1) to (" + N + "," + M + ") = " + minSteps(N, M));
    }
}