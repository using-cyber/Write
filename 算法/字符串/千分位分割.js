/**
 * toString的参数表示 该number转为该参数的类型  toString(2)  即转为2进制和 parseInt()不同
 * splice（） 左闭右开 添加数据的话会在左边的左边添加数据
 */
 var thousandSeparator = function(n) {
    const re = n.toString().split('')
    const len = re.length-1
    let num = 0
    for(let i = len;i>=0;i--){
        if(num == 3){
            // 注意位置 要添加的位置需要 +1
            re.splice(i+1,0,'.')
            num = 0
        }
        num++
    }
    return re.join('')
};