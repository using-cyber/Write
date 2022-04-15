/**
 * 注意头节点的设立
 * 将后一个节点指向指向前一个 然后替换
 */
 var reverseList = function(head) {
    let pre = null
    let cur = head
    while(cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};