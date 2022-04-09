/**
 * 公共前缀代表只需要对比前面的部分
 * 需要判断当只有自身的情况
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 1) return strs[0];
    let res = strs[0]
    for (let i = 1; i < strs.length; i++) {
        // ！！ j<res.length 因为长度大于第一个字符串则没有比较的意义
        for (let j = 0; j < res.length; j++) {
            if (res[j] !== strs[i][j]) {
                res = res.slice(0, j)
                break;
            }
        }
    }
    return res
};
