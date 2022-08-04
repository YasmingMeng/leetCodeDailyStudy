/*
 * @Description: 
 * @Date: 2022-08-04 18:18:18
 * @LastEditTime: 2022-08-04 18:18:42
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
  if(matrix == null || matrix.length == 0) {
         return false;
     }
 let i = matrix.length - 1
 let j = 0
 let isHave = false
 while(i >= 0 && j < matrix[0].length) {
     if( matrix[i][j] > target) {
         i --
     } else if (matrix[i][j] < target) {
         j ++
     } else if (matrix[i][j] === target) {
         isHave = true
         break
     }
 }
 return isHave
};