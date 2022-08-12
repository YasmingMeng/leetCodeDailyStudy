/*
 * @Description: 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * @Date: 2022-08-12 11:54:43
 * @LastEditTime: 2022-08-12 11:54:54
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  i =  nums.length - 1 
  while(k) {
  let x = nums[i]
  for(let j = 0; j < nums.length; j ++) {
      const y = nums[j]
      nums[j] = x
      x = y
  }
  k -- 
}
return nums
};