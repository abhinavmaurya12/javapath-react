class Q65
{
    // Q65: Classify every element of the array element-wise using a simple
    //       criteria check and print the result for each element.
    // Explanation:
    //  - Walk through the array and apply a criteria test to each element.
    //  - Here the criteria is "is the element a prime number?". For each
    //    element we print either "prime" or "not prime" accordingly.
    //  - This mimics an if/else applied element-wise over the array.
    //  - Example: {2, 4, 7, 9, 11} -> 2:prime, 4:not prime, 7:prime, ...
    static boolean isPrime(int n)
    {
        if(n < 2)
            return false;
        for(int i = 2; i * i <= n; i++)
        {
            if(n % i == 0)
                return false;
        }
        return true;
    }
    static void ICMcriteriaelsewise(int x[])
    {
        for(int i = 0; i < x.length; i++)
        {
            if(isPrime(x[i]))
                System.out.println(x[i] + " : prime");
            else
                System.out.println(x[i] + " : not prime");
        }
    }
    public static void main(String args[])
    {
        int x[] = {2, 4, 7, 9, 11, 15, 17};
        ICMcriteriaelsewise(x);
    }
}