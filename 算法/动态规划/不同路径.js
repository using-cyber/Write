/**
 * 动态规划
 */
 var uniquePaths = function(m, n) {
    const dp = new Array(m).fill(1).map(()=> new Array(n).fill(1))
    // 正常长度 所以不需要<就行
    for(let i = 1;i<m;i++){
        for(let j = 1;j<n;j++){
            dp [i][j] = dp[i-1][j] + dp[i][j-1]
        }
    } 
    // 记住返回的是什么
    return dp[m-1][n-1]
 }