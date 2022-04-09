/**
 *  动态规划的经典题目
 *  1. 建立二维数组填充为0 （二维数组不仅要包括每个值还要添加为0的项）
 *  2. 判断是否相等  同时为了取最大值 要把所有数字进行填充
 */

var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length, n = text2.length;
    // 需要大于字符串长度
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    // 因为要遍历每个值 所以是等于
    for (let i = 1; i <= m; i++) {
        // 获取横轴数据
        const c1 = text1[i - 1];
        for (let j = 1; j <= n; j++) {
            const c2 = text2[j - 1];
            if (c1 === c2) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
};