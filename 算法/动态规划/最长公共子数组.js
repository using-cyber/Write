/**
 * 思路基本一致
 */
var findLength = function (nums1, nums2) {
    const m = nums1.length
    const n = nums2.length
    //  不能用const 值会改变
    let res = 0
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    // 因为m+1的长度改变所以需要小于等于m
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                res = Math.max(res, dp[i][j])
            }
        }
    }
    return res
};