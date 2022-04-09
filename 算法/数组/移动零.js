/**
 * 做法 1
 * 贪吃蛇
 * 值替换  尾部替换0
 */
var moveZeroes = function (nums) {
  const len = nums.length;
  // 设定为0的数
  let res = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] == 0) {
      res++
    } else {
      // 替换值
      nums[i - res] = nums[i]
      if (res > 0) {
        // 将尾部值设为 0
        nums[i] = 0
      }
    }

  }
};

/**
 * 做法2 
 * 双指针 使用快慢指针
 */
var moveZeroes = function (nums) {
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[fast] != 0) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  while (slow < nums.length) {
    nums[slow++] = 0;
  }
};

/**
 * 优化 本质就是置换
 */
var moveZeroes = function (nums) {
  let fast = 0,
    slow = 0;
  while (fast < nums.length) {
    if (nums[fast] != 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      slow++;
    }
    fast++;
  }
};