1. 新建一个数组

```
public static void main(String[] args) {
    //法1
    int nums1[] = new int[]{1, 2};
    for(int i : nums1) {
        System.out.print(i+"\t");
    }
    //法2
    Integer[] nums2 = {12,33,5,-9,233,2299,-987,2,0,1,8};
    for(int i : nums2) {
        System.out.print(i+"\t");
    }
}
```

2. 数组排序

```
public static void main(String[] args) {
    Integer[] nums = {12,33,5,-9,11,2299,-987,2,0,1,8};

    //只排序前四个，结果-9	5	12	33	11	2299	-987	2	0	1	8
    Arrays.sort(nums,0,4);

    //全部排序，结果-987	-9	0	1	2	5	8	11	12	33	2299
    Arrays.sort(nums);

    //逆序，结果2299	33	12	11	8	5	2	1	0	-9	-987
    Arrays.sort(nums, Collections.reverseOrder());
    
    for(int i : nums) {
        System.out.print(i+"\t");
    }
}
```

3. int[]转成Integer[]

```
int[] nums;
Integer[] what = Arrays.stream( nums ).boxed().toArray( Integer[]::new );
```

4. int[]转成 List<Integer>

```
int[] nums;
List<Integer> list = Arrays.stream(nums).boxed().collect(Collectors.toList());
```

5. 二分查找

时间复杂度

二分查找也称为折半查找，每次都能将查找区间减半，这种折半特性的算法时间复杂度为 O(logN)。

m 计算

有两种计算中值 m 的方式：
```
m = (l + h) / 2
// 上面或者 m = (l + h) >>> 1;
n = l + (h - l) / 2
```
l + h 可能出现加法溢出，也就是说加法的结果大于整型能够表示的范围。但是 l 和 h 都为正数，因此 h - l 不会出现加法溢出问题。所以，最好使用第二种计算法方法。