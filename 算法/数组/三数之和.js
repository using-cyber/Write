/**
 * 注重边界判断
 */
var threeSum = function (nums) {
    const len = nums.length;
    nums.sort((a, b) => a - b)
    const result = []
    // 第一个边界条件  小于3返回空
    if (nums == null || len < 3) return result
    // 第二个边界条件  i < len - 2 && nums[i] <= 0   i在最左边应该小于0
    for (let i = 0; i < len - 2 && nums[i] <= 0; i++) {
        let L = i + 1
        let R = len - 1
        // 第三个边界条件  当nums[i]的值相等时返回
        if (nums[i] == nums[i - 1]) continue
        while (L < R) {
            const res = nums[i] + nums[L] + nums[R]
            if (res == 0) {
                result.push([nums[i], nums[L], nums[R]])
                // 第四个边界条件 !!!while  当第二个第三个值移动数值一样时
                while (nums[L] == nums[L + 1]) L++;
                while (nums[R] == nums[R - 1]) R--;
                L++;
                R--;
            }
            else if (res < 0) L++
            else if (res > 0) R--
        }
    }
    return result
};