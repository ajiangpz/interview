function quickSort(arr) {
    function sort(prev, len) {
        let flag = arr[prev],
            start = prev,
            end = len - 1;
        if (len - prev > 1) {
            while (start < end) {
                for (; end > start; end--) {
                    if (arr[end] < flag) {
                        arr[start++] = arr[end]
                        break;
                    }
                }
                for (; start < end; start++) {
                    if (arr[start] > flag) {
                        arr[end--] = arr[start]
                        break
                    }
                }
                arr[start] = flag;
            }
            sort(0, start)
            sort(start + 1, len)
        }

    }
    sort(0, arr.length)
    return arr
}
console.log(quickSort([1, 4, 3, 2, 6, 5]))
//时间复杂度O(n*log2n)