import java.util.ArrayList;
import java.util.List;

class Q42
{
    // Q42: Sort array1 using array2 as the sorting key.
    // Explanation:
    //  - array2 holds a small set of integer keys (e.g. 0,1,2). We treat each
    //    element of array1 as belonging to a bucket given by the matching
    //    array2 value, preserving the original order inside each bucket.
    //  - Then we output buckets in ascending key order.
    //  - Example: array1={"a",...,"i"}, array2={0,1,1,0,1,2,2,0,1}
    //    bucket0: a,d,h ; bucket1: b,c,e,i ; bucket2: f,g
    //    Output: {a,d,h,b,c,e,i,f,g}
    static String[] sortByKey(String array1[], int array2[])
    {
        // Find max key to size the buckets (linked lists preserve insertion order)
        int maxKey = 0;
        for(int i = 0; i < array2.length; i++)
            if(array2[i] > maxKey) maxKey = array2[i];

        // buckets[k] holds a list of strings whose key == k
        List<List<String>> buckets = new ArrayList<>(maxKey + 1);
        for(int k = 0; k <= maxKey; k++)
            buckets.add(new ArrayList<>());

        for(int i = 0; i < array1.length; i++)
            buckets.get(array2[i]).add(array1[i]);

        String result[] = new String[array1.length];
        int idx = 0;
        for(int k = 0; k <= maxKey; k++)
        {
            for(int j = 0; j < buckets.get(k).size(); j++)
            {
                result[idx] = buckets.get(k).get(j);
                idx++;
            }
        }
        return result;
    }
    public static void main(String args[])
    {
        String array1[] = {"a","b","c","d","e","f","g","h","i"};
        int array2[] = {0,1,1,0,1,2,2,0,1};
        String out1[] = sortByKey(array1, array2);
        System.out.print("Output: {");
        for(int i = 0; i < out1.length; i++)
            System.out.print("\"" + out1[i] + "\"" + (i < out1.length-1 ? "," : ""));
        System.out.println("}");

        String array1b[] = {"g","e","e","k","s","f","o","r","g","e","e","k","s"};
        int array2b[] = {0,1,1,0,1,2,2,0,1,0,1,1,0};
        String out2[] = sortByKey(array1b, array2b);
        System.out.print("Output: {");
        for(int i = 0; i < out2.length; i++)
            System.out.print("\"" + out2[i] + "\"" + (i < out2.length-1 ? "," : ""));
        System.out.println("}");
    }
}