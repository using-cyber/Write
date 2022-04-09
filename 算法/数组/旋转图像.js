/**
 * 尽量少的空间复杂度 所以使用原地选择
 */
var rotate = function (matrix) {
    const n = matrix.length
    // 旋转横轴的长度
    for (let i = 0; i < Math.floor(n / 2); i++) {
        // 旋转元素长度 选择n+1因为为奇数时多考虑值防止有值未被旋转
        for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            matrix[j][n - i - 1] = temp;
        }
    }
};