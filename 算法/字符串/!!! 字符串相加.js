/**
 * 
 */
var addStrings = function (num1, num2) {
    //  m n值会改变 要用let
    let m = num1.length - 1
    let n = num2.length - 1
    let add = 0
    let result = []
    // 防止最后一个数相加有余
    while (m >= 0 || n >= 0 || add != 0) {
        // x y是否大于0  大于0则将尾部字符串数组转为数字 否则记为0
        const x = m >= 0 ? num1.charAt(m) - '0' : 0
        const y = n >= 0 ? num2.charAt(n) - '0' : 0
        let res = x + y + add
        result.unshift(res % 10)
        add = Math.floor(res / 10)
        // !!! 记住减减
        m -= 1;
        n -= 1;
    }
    return result.join('')
};