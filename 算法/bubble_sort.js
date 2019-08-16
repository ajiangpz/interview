function bubble(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        //最坏的情况:
    }
    return arr;
}
console.log(bubble([1, 5, 3, 6, 2]))
//时间复杂度:O(n^2)
//两个嵌套总共执行了 n(n+1)/2,去最高次幂，去系数，O(n^2)