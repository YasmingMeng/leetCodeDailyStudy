/*
 * @Description: 
 * @Date: 2022-08-03 16:42:55
 * @LastEditTime: 2022-08-03 17:51:41
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {

  //解法1
  let repeatOb = []
  let repeatKey = 0
  nums.forEach(item => {
      const key = repeatOb.find(rItem => rItem === item)
      if(key) {
        repeatKey = key
      } else {
          repeatOb.push(item)
      }
  })
  return repeatKey


  //解法2
  let repeatSet = new Set()
    // let repeatKey = 0
    while(repeatKey < nums.length){
        if(repeatSet.has(nums[repeatKey])) {
            repeatKey = nums[repeatKey]
            break
        } else {
            repeatSet.add(nums[repeatKey])
            repeatKey ++
        }
    }
    return repeatKey
 };