/**
 * 了解 map 的使用
 */
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let cur = target - nums[i]
        if (map.has(cur)) {
            return [map.get(cur), i]
        }
        map.set(nums[i], i)
    }
};