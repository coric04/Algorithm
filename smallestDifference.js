/* problem in AlgoExpert
Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position
    Note that the absolute difference of two integers is the distance between
  them on the real number line. For example, the absolute difference of -5 and 5
  is 10, and the absolute difference of -5 and -4 is 1.
  You can assume that there will only be one pair of numbers with the smallest
  difference
*/

function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      arrayOne.sort((a,b)=>a-b)
      arrayTwo.sort((a,b)=>a-b)
  
      let idxOne = 0;
      let idxTwo = 0;
      let currentSum= 0;
      let smallestValue = []
      let matchValue = Infinity;
      console.log(arrayOne)
      console.log(arrayTwo)
      
      while(idxOne<arrayOne.length &&idxTwo<arrayTwo.length ){
          console.log("------")
          let firstArray = arrayOne[idxOne];
          let secondArray = arrayTwo[idxTwo];
           console.log(firstArray+" "+secondArray)
  
          if(firstArray < secondArray){
              currentSum = secondArray - firstArray;
              idxOne++;
              
              
          }else if(firstArray > secondArray){
              currentSum = firstArray - secondArray;
              idxTwo++;
          }else{
              return [arrayOne[idxOne],arrayTwo[idxTwo]]
              
          }
          console.log(currentSum)
          console.log(matchValue)
          if(currentSum < matchValue){
              
              console.log("valor que cambia " +currentSum)
              matchValue=currentSum
              smallestValue = [firstArray,secondArray]
              console.log(smallestValue)
          }
          
          
      }
      
      console.log(smallestValue)
      return smallestValue
  }
  
  // Do not edit the line below.
  exports.smallestDifference = smallestDifference;
  