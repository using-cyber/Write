/**
 * 设定边界条件
 */
var spiralOrder = function(matrix) {
    if(matrix.length == 0) return []
    const res = [];
    let top = 0 , bottom = matrix.length-1 , left = 0, right = matrix[0].length-1
    //  ！！！ 必须同时满足（不等于可能会出现少值的情况，|| 会出现重复的情况）
    while(top<=bottom && left<=right) {
        for(let i = left;i<=right;i++) {
            res.push(matrix[top][i])
        }
        top++;
        for(let i = top;i<=bottom;i++){
            res.push(matrix[i][right])
        }
        right--;
    //  ！！ 及时退出循环  循环结束时要么从左到右结束要么从上到下结束   不及时退出可能会重复
        if(top >bottom || left >right) break
        for(let i = right;i>=left;i--) {
            res.push(matrix[bottom][i])
        }
        bottom--;
        for(let i = bottom;i>=top;i--) {
            res.push(matrix[i][left])
        }
        left++
    }
    return res
};