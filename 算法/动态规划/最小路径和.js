/**
 * 动态规划 和不同路径类似 
 * ！！！ 使用循环先累加左右两边的值
 */
var minPathSum = function (dp) {
    let row = dp.length
    let cow = dp[0].length
    for (let i = 1; i < row; i++) {
        dp[i][0] += dp[i - 1][0]
    }
    for (let i = 1; i < cow; i++) {
        dp[0][i] += dp[0][i - 1]
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < cow; j++) {
            //   +=  不能忘记
            dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1])
        }
    }
    return dp[row - 1][cow - 1]
};  