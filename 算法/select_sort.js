function select_sort(arr) {
    //它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
    //然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }
        }
    }
    return arr
}
console.log(select_sort([1, 3, 2, 6, 4, 1, 56, 234, 34, 0]))
//时间复杂度：O(n^2)