/**
 * 思路完全一致 只需要进行一个判定查重
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1, mid
    while (left <= right) {
        mid = left + ((right - left) >> 1)
        if (nums[mid] === target) {
            return true
        }
        if (nums[left] === nums[mid]) {
            ++left
            continue
        }
        // !!! 注意＝号 边界条件 
        if (nums[mid] >= nums[left]) {
            // ！！！ ＝  target可以为左边界
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // !!!  ＝  target可以为右边界
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return false
}