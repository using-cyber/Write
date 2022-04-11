/**
 * n代表有n对括号 左括号一直小于等于右括号才可以保持平衡
 * 使用递归
 */
 var generateParenthesis = function(n) {
    const res = []
    const dfs=(L,R,s) =>{
        if(s.length = 2*n){ 
            res.push(s)
        }
        if(L>0){
            dfs(L-1,R,str+'(')
        }
        if(L<R) {
            dfs(L,R-1,str+')')
        }
    }
    dfs(n,n,'')
    return res
};
