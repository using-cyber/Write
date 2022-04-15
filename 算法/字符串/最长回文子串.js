/**
 * slice(start,end) 当 start 大于 end时返回空
 */
 var longestPalindrome = function(s) {
    //  ！！！ res在循环外面定义
    var res = ''
    for(let i =0;i<s.length;i++) {
        const s1 = parent(s,i,i)
        const s2 = parent(s,i,i+1)
        // 判断长度
        res = res.length<s1.length ? s1:res
        res = res.length<s2.length ? s2:res
    }
    return res
};
function parent(s,L,R){
    // ！！！要进行长度限制
    while(L>=0 && R<s.length && s[L] ==s[R]){
        L--
        R++
    }
    // slice剪切左闭右开
    return s.slice(L+1,R)
}
