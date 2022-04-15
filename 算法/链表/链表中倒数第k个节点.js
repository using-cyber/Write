/**
 * 
 */
 var getKthFromEnd = function(head, k) {
    let len = 0
    let listLen = head
    let pre = head
    while(listLen){
        listLen = listLen.next
        len++
    }
    let res = len - k
    while(res >0){
        pre = pre.next
        res -- 
    }
    return pre
};