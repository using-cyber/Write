/**
 * 
 */
var preorderTraversal = function (root) {
    const res = []
    function traversal(root) {
        if (root !== null) {
            res.push(root.val)
            traversal(root.left)
            traversal(root.right)
        }
    }
    traversal(root)
    return res
};