/** problem leetCode
Given an array nums of integers, return how many of them contain an even number of digits.

 */
const isEven = (num) => {
    const length = `${num}`.length
  
    return length%2 === 0 ? true : false
  }
  var findNumbers = function(nums) {
      let newArray = []
      for (const num of nums) {
        if (isEven(num)){
            newArray.push(num)
        }
      }
      return newArray.length
  };