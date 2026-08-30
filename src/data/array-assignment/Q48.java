class Q48
{
    // Q48: Print all common elements in three sorted arrays.
    // Explanation:
    //  - Three pointers walk through the three arrays simultaneously.
    //  - If all three values match, print once and advance all.
    //  - Otherwise advance the pointer whose value is smallest.
    //  - Example: {1,5,10,20,40,80}, {6,7,20,80,100}, {3,4,15,20,30,70,80,120}
    //    Common: 20 and 80.
    static void printCommon(int a[], int b[], int c[])
    {
        int i = 0, j = 0, k = 0;
        while(i < a.length && j < b.length && k < c.length)
        {
            if(a[i] == b[j] && b[j] == c[k])
            {
                System.out.println("Common: " + a[i]);
                i++; j++; k++;
            }
            else if(a[i] < b[j])
                i++;
            else if(b[j] < c[k])
                j++;
            else
                k++;
        }
    }
    public static void main(String args[])
    {
        int input1[] = {1, 5, 10, 20, 40, 80};
        int input2[] = {6, 7, 20, 80, 100};
        int input3[] = {3, 4, 15, 20, 30, 70, 80, 120};
        System.out.println("Common elements in three arrays:");
        printCommon(input1, input2, input3); // 20, 80
    }
}