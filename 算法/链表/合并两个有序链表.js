/**
 * 
 */
var mergeTwoLists = function (l1, l2) {
    const dummy = new ListNode()
    // 定义一个值
    let pre = dummy
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            pre.next = l1
            l1 = l1.next
        } else {
            pre.next = l2
            l2 = l2.next
        }
        // ！！！下一步
        pre = pre.next
    }
    // ！！！记得长的一部分加进去
    pre.next = l1 === null ? l2 : l1
    return dummy.next
};