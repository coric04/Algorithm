/** problem leetCode
Given a binary array, find the maximum number of consecutive 1s in this array.

 */
var findMaxConsecutiveOnes = function(nums) {

    let totalConsecutiveOne = 0
    let currentConsecutiveOne= 0
    
    for(let i= 0 ; i< nums.length ; i++){
        console.log(nums[i])
         if(nums[i]===1){ 
        currentConsecutiveOne ++;    
    } else{
       totalConsecutiveOne= Math.max(currentConsecutiveOne,totalConsecutiveOne)
       currentConsecutiveOne=0; 
    }

   
    }
    return Math.max(currentConsecutiveOne,totalConsecutiveOne)
};