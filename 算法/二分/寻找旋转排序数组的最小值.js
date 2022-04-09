/**
 * 因为数组有明显的断层式递增，所以使用二分法
 * 当  nums[mid] > nums[mid+1]  nums[mid+1] 最小
 * 当  nums[mid] < nums[mid-1]  nums[mid] 最小
 */
const findMin = function (nums) {
   if (!nums.length) return null;
   if (nums.length == 1) return nums[0];
   let left = 0
   let right = nums.length - 1
   //  !!! 注意边界条件
   while (left <= right) {
      let mid = left + ((right - left) >> 1)
      if (nums[mid] > nums[mid + 1]) {
         return nums[mid + 1];
      }
      if (nums[mid] < nums[mid - 1]) {
         return nums[mid]
      }
      if (nums[mid] > nums[left]) {
         left = mid + 1
      } else {
         right = mid - 1
      }
   }
   return null
}
