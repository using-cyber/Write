/**
 * 使用哈希表利于存储值和比对值
 * 整个算法流程的值是向前进的
 */
 var lengthOfLongestSubstring = function(s) {
    let left = 0
    let long = 0
    const map = new Map()
    len =s.length
    for(let right = 0; right<len;right++){
        // ！！！ 注意条件 不仅当存在相同值时还需要右边的标记大于左边（防止出现回文 左边值出现往前的情况）
        if(map.has(s[right]) && map.get(s[right]) >= left){
            // 左边值在相同元素下进一取值
            left = map.get(s[right]) +1
        }
        long = Math.max(long,right - left +1 )
        map.set(s[right],right)
    }
    return long
};