/**
 * 解法一  splice api的运用
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length-m,...nums2)
    nums1.sort((a,b) => a-b)
}

/**
 * 解法二  双指针
 * 先判断边界条件  当两者都为0时停止（因为数组长度 可能有一方先变为-1）
 * nums1后的数据 根据前面比对的大小进行改变
 */
 var merge = function(nums1, m, nums2, n) {
    let a = m-1
    let b = n-1
    let c = m+n-1
    while(a>=0 || b>=0){
        if(a == -1){
            nums1[c] = nums2[b]
            c--;
            b--
        }else if(b==-1){
            nums1[c] = nums1[a]
            c--;
            a--
        }else if(nums1[a] >= nums2[b]) {
            nums1[c] = nums1[a]
            c--;
            a--
        }else{
            nums1[c] = nums2[b]
            c--;
            b--
        }
    }
};

/**
 * 对解法二进行优化
 * nums1[c--] = nums2[b--]  等价于
 * nums1[c] = nums[b]  c--;  b--;
 * 因为后面的值会再变化所以这里进行一个赋值简化代码
 */
 var merge = function(nums1, m, nums2, n) {
     var a = m - 1
     var b = n - 1
     var c = m + n -1
     var cur
     while(a >= 0 || b >=0){
         //！！！ >=0 的优化条件
         if(a == -1){
             cur = nums2[b--]
         }else if(b == -1){
             cur = nums1[a--]
         }else if(nums1[a] >= nums2[b]){
             cur = nums1[a--]
         }else{
             cur = nums2[b--]
         }
         nums1[c--] = cur 
     }
 }