/*
 * @Description: 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 * @Date: 2022-06-13 22:53:55
 * @LastEditTime: 2022-06-14 01:18:50
 */

// 单数组实现队列，使用push和splice方法
var CQueue = function() {
  this.stack1 = []
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function(value) {
  if(typeof (value) === "number") {
      this.stack1.push(value)
  }
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {
  const arrLength = this.stack1.length
  if(arrLength > 0) {
      const popValue = this.stack1[0]
      this.stack1.splice(0, 1)
      return popValue
  } else {
      return -1
  }
};