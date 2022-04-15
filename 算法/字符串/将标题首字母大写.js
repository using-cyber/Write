/**
 * charAt(number) 查询到该number对应的字符串值
 * toUpperCase() 转为大写
 * toLowerCase() 转为小写
 */
 var capitalizeTitle = function(title) {
    // title = title.toLowerCase()
    let str = title.split(' ')
    for(let i=0;i<str.length;i++){
        if(str[i].length >2){
            str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase()
        }else{
            str[i] = str[i].toLowerCase()
        }
    }
    title = str.join(' ')
    return title
};
