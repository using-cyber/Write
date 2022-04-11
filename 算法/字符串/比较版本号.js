/**
 * 很多题目并没有想象的复杂 有精妙的解决方法
 */
var compareVersion = function (version1, version2) {
    // ！！！！ split不是在原有数据上修改  split切割出来的时字符串数组
    const v1 = version1.split('.')
    const v2 = version2.split('.')
    for (let i = 0; i < v1.length || i < v2.length; i++) {
        // 当v1没有该下标时会记为0
        let x = 0, y = 0
        if (i < v1.length) {
            // parseInt第一个参数为字符串 第二个参数表示 第一个参数为第二种参数格式 然后输出为十进制 （需要新建变量存储）
            x = parseInt(v1[i])
        }
        if (i < v2.length) {
            y = parseInt(v2[i])
        }
        if (x > y) {
            return 1
        } else if (x < y) {
            return -1
        }
    }
    return 0
};