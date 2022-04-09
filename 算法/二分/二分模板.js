function insert() {
    let left = start
    let right = end
    let mid
    while (left <= right) {
        mid = (left + right) / 2
        if (array[mid] === target) {
            return result
        }
        if (array[mid] < target) {
            left = mid + 1
        }
        if (array[mid] > target) {
            right = mid - 1
        }
    }
}
