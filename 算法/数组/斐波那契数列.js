/**
 * 像手写一道动态规划
 * 滚动数组  前一个数据获取后一个数据
 */
var fib = function (n) {
    if (n < 2) return n
    //  初始值 像 f(0) f(1) f(2)
    let p = 0, q = 0, r = 1
    for (let i = 2; i <= n; i++) {
        p = q
        q = r
        r = p + q
    }
    return r
};