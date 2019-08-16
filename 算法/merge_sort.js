function merge(left, right) {
    let result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            result.push(right.shift())
        } else {
            result.push(left.shift())
        }
    }
    return result.concat(left).concat(right)
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}
console.log(mergeSort([1, 3, 2, 5, 4, 8]))
//时间复杂度O(n*log2n)