/**
 * 1. 首先建立一个函数进行反转
 * 2. 将节点移至left right侧
 * 3. 断开两边
 * 4. 反转
 * 5. 连接两边
 */
 var reverseBetween = function(head, left, right) {
    const dummy = new ListNode()
    dummy.next = head
    let L = dummy
    let R = dummy
    while(left>1){
        L = L.next
        left--
    }
    while(right>0){
        R = R.next
        right--
    }
    let prev = L.next
    let cure = R.next
    L.next = null
    R.next = null
    reverseLinkedList(prev)
    L.next = R
    prev.next = cure
    return dummy.next
};
const reverseLinkedList = (head) => {
    let pre = null;
    let cur = head;

    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
}