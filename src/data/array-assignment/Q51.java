class Q51
{
    // Q51: Rearrange array alternating positive/negative, preserving order.
    // Explanation:
    //  - Collect positives and negatives separately (preserving order).
    //  - Then interleave them: take one negative, one positive, and so on.
    //  - Whatever remains (extra positives or negatives) is appended at the end.
    //  - Example: {1,2,3,-4,-1,4}
    //    negatives: {-4,-1}, positives: {1,2,3,4}
    //    interleaved: {-4,1,-1,2,3,4}
    static int[] rearrangeAlternating(int arr[])
    {
        java.util.ArrayList<Integer> neg = new java.util.ArrayList<>();
        java.util.ArrayList<Integer> pos = new java.util.ArrayList<>();
        for(int i = 0; i < arr.length; i++)
        {
            if(arr[i] < 0) neg.add(arr[i]);
            else pos.add(arr[i]);
        }

        int result[] = new int[arr.length];
        int i = 0, j = 0, k = 0;
        boolean turnNeg = true; // start with negative
        while(i < neg.size() && j < pos.size())
        {
            if(turnNeg) result[k++] = neg.get(i++);
            else result[k++] = pos.get(j++);
            turnNeg = !turnNeg;
        }
        // Append remaining negatives
        while(i < neg.size()) result[k++] = neg.get(i++);
        // Append remaining positives
        while(j < pos.size()) result[k++] = pos.get(j++);
        return result;
    }
    public static void main(String args[])
    {
        int arr[] = {1, 2, 3, -4, -1, 4};
        int out[] = rearrangeAlternating(arr);
        System.out.print("Output: {");
        for(int i = 0; i < out.length; i++)
            System.out.print(out[i] + (i < out.length-1 ? "," : ""));
        System.out.println("}");

        int arr2[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8};
        int out2[] = rearrangeAlternating(arr2);
        System.out.print("Output: {");
        for(int i = 0; i < out2.length; i++)
            System.out.print(out2[i] + (i < out2.length-1 ? "," : ""));
        System.out.println("}");
    }
}