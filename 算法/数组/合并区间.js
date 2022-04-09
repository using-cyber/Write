/**
 * 1. 排序防止大的数在前面
 * 2. 当大于下一个数时不着急push进去
 * 3. 判断条件替换
 */
var merge = function (intervals) {
    const res = [];
    //  ！！ 排序
    intervals.sort((a, b) => a[0] - b[0])
    let prev = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        //  for循环内每次需要重新定义
        let cur = intervals[i]
        if (prev[1] >= cur[0]) {
            prev[1] = Math.max(prev[1], cur[1])
            //  先进行替换再push
        } else {
            res.push(prev)
            // ！！ 替换
            prev = cur
        }
    }
    //  需要将最后一个push进去
    res.push(prev)
    return res
};