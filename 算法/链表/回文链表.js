/**
 * 方法 1 转为数组
 */
 var isPalindrome = function(head) {
    const res = []
    while(head !== null){
        //  !!! val不是value
        res.push(head.val)
        head = head.next
    }
    var i = 0
    var j = res.length -1
    while(i< j) {
        if(res[i] !== res[j]){
            return false
        }
        i++
        j--
    }
    return true
};

