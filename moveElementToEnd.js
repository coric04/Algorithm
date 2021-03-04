/** problem in AlgoExpert
 *   You're given an array of integers and an integer. Write a function that moves
  all instances of that integer in the array to the end of the array and returns
  the array.

    The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.
 */


 function moveElementToEnd(array, toMove) {
  // Write your code here.
	
	let idxRight = array.length-1;
	let idxLeft = 0;
	let temp= 0;
	
	while(idxLeft<idxRight){
		while(idxLeft<idxRight && array[idxRight]=== toMove) idxRight--;
		
		if(array[idxLeft]===toMove){
			
			let temp = array[idxRight];
			array[idxRight]=array[idxLeft];
			array[idxLeft]= temp ;
			
		}
		idxLeft++
	}
	
	return array;
	
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;