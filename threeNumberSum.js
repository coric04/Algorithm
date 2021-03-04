/* problem in AlgoExpert
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all triplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these triplets. The numbers in each triplet should be ordered in ascending
  order, and the triplets themselves should be ordered in ascending order with
  respect to the numbers they hold.
  If no three numbers sum up to the target sum, the function should return an
  empty array.
*/


function threeNumberSum(array, targetSum) {
	
	array.sort((a,b)=> a-b)
	
	let triplets = [];
	for (let i=0;i<array.length-2;i++){
			let left = i+1;
			let rigth = array.length-1;
		console.log(i)
		while(left<rigth){
			let currentNumber =	array[i]+array[left]+array[rigth];	
			console.log(array[i]+" "+array[left]+" "+array[rigth])

			if(currentNumber===targetSum){
				triplets.push([array[i],array[left],array[rigth]])
				rigth--
				left++
				
			}else if(currentNumber>targetSum){
				rigth--
				
			}else{
			left++ 
				
			}
			
			
			
		}
		
		
	}
  // Write your code here.
	return triplets;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;