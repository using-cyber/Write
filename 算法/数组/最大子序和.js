/**
 * 因为要判断最大的数 且是连续的
 * 先确定结果值为负无穷大 那么无论如何该值都会被取代
 * 确定cur值来存储大的值 当cur大于res进行替换
 * cur一直累加直到cur小于0 将cur重新赋值 
 * 只有新的cur的值大于前一个cur大的值才会进行替换
 */
 var maxSubArray = function(nums) {
    let cur = 0
    let res = -Infinity
    // ！！  选择负无穷大的值
    for(const num of nums){
        cur += num
        if(cur >res) {
            res = cur
        }
        // ！！ 有更大的值需要取代
        if(cur <0){
            cur = 0
        }
    }
    return res
};