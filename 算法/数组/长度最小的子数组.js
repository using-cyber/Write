/**
 * 滑动窗口
 * 需要先判定一个最小值 （记为最大值）
 * 结尾需要判定
 */
var minSubArrayLen = function (target, nums) {
    let len = nums.length;
    let pre = 0
    let res = 0
    // ！！ 记最大值使得下面最小值好判定 不能赋值为0否则最小一定为0
    let min = Infinity
    for (let i = 0; i < len; i++) {
        res += nums[i]
        while (res >= target) {
            // 取最小值
            min = Math.min(min, i - pre + 1)
            res -= nums[pre]
            // 滑动
            pre++
        }
    }
    // 如果不存在大于目标值的情况 赋值为0 
    return min === Infinity ? 0 : min
};