/**
 * 
 */
var multiply = function (num1, num2) {
    let m = num1.length
    let n = num2.length
    let add = 0
    const count = []
    for (let i = m; i >= 0; i--) {
        for (let j = n; j >= 0; j--) {
            const x = num1.charAt(i) - '0'
            const y = num2.charAt(j) - '0'
            let result = x * y + add
            count.unshift(result % 10)
            add = Math.floor(result / 10)
        }
    }
    return count.join('')
};
var multiply = function (num1, num2) {
    if (num1 == 0 || num2 == 0) return "0"
    const res = [];// 结果集
    for (let i = 0; i < num1.length; i++) {
        let tmp1 = num1[num1.length - 1 - i]; // num1尾元素
        for (let j = 0; j < num2.length; j++) {
            let tmp2 = num2[num2.length - 1 - j]; // num2尾元素
            let pos = res[i + j] ? res[i + j] + tmp1 * tmp2 : tmp1 * tmp2;// 目标值 ==》三元表达式，判断结果集索引位置是否有值
            res[i + j] = pos % 10; // 赋值给当前索引位置
            // 目标值是否大于10 ==》是否进位 这样简化res去除不必要的"0"
            pos >= 10 && (res[i + j + 1] = res[i + j + 1] ? res[i + j + 1] + Math.floor(pos / 10) : Math.floor(pos / 10));
        }
    }
    return res.reverse().join("");
};