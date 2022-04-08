/**
1. 确定贪心算法做
2. 设立一个更小值 当遍历值小于更小值时进行替换
3. 设立利润值 当遍历值减去更小值比利润值更大时 替换
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let res = 0
    for(let i =1;i<prices.length;i++){
        let cur = prices[i] - min
        if(prices[i] < min){
            min = prices[i]
        }
        if(cur > res){
            res = cur
        }
    }
    return res
};