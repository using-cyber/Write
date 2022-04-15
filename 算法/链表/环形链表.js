/**
 * 注意判定条件
 */
 var hasCycle = function(head) {
    // 必须用let
    let slow = head
    let fast = head
    // 注意判定条件
    while(fast && fast.next && fast.next.next){
        fast = fast.next.next
        slow = slow.next
        // == 需要比较 
        if(slow == fast) return true
    }
    return false
};