/**
 * 关键在于相交那么两者最终都会指向同一个节点
 */
 var getIntersectionNode = function (headA, headB) {
    if (headA == null || headB == null) {
        return null
    }
    let left = headA
    let right = headB
    // 当两个节点不同的时候循环
    while (headA !== headB) {
        // 如果head为null 则将其指向下一个链表的头部 否则继续指向下一个
        headA = headA == null ? right : headA.next
        headB = headB == null ? left : headB.next
    }
    return headA
};