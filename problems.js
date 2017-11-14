// 1. Write a function which takes an array of numbers, and returns the largest number in that array.

// numArr = [1, 2, 3];

// function largest(array) {
//     var basicNum = array[0];
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] > basicNum) {
//             basicNum = array[i];
//         }
//     }
//     return basicNum;  
// }
// console.log(largest(numArr), "problem 1");



// 2. Write a function which, given a year as a number, returns whether that number is a leap year.

// function leapYear(number) {
//     if (number % 4 === 0 || number % 400 === 0 && number % 100 !== 0) {
//         return "it's a leap year";
//     } else {
//     	return "it's just a normal year";
//     } 
// }
// console.log(leapYear(1901), "problem 2");

// 2000 -> true
// 1901 -> false
// 2016 -> true



// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1
		   // 0, 1, 2
// missing = [1, 2, 5];

// function first(array) {
// 	var number = array[0]
// 	if (array.length === 0) { return 1 }
// 	if (number !== 1) { return 1 }
// 	for (var i = 0; i < array.length; i++) {
// 		if (i + 1 !== array[i]) {
// 			return i;
// 		}
// 		number = array[i];
// 	} 
// }

// console.log(first(missing), "problem 3");



// 4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
// [1,1,2,3,1,2,3] -> [1,2,3]
// [1,4,4,4,2,2,4,4,4] -> [1,4,2]

// var repeating = [1,1,2,3,1,2,3]; 

// function removeDuplicates(array) {
// 	var newArray = [];
// 	for (var i = 0; i < array.length; i++) {
// 		if (!newArray.includes(array[i])) {
// 			newArray.push(array[i]);
			
// 		}
// 	}
// 	return newArray;
// }
// console.log(removeDuplicates(repeating), "problem 4");



// 5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".

// "The quick brown fox" -> "Hetay uickqay rownbay oxfay".  


// function pig(text) {
// 	var sentence = text.split(" ");
// 	for (var i = 0; i < sentence.length; i++) {
// 		sentence[i] += sentence[i][0];
// 		sentence[i] = sentence[i].substr(1);
// 		sentence[i] += "ay";

// 	}
// 	return sentence.join(" ") 
// }

// console.log(pig("night of the living dead"), "problem 5");


// function normal(text) {
// 	var sentence = text.split(" ");
// 	var normalSentence = [];
// 	for (var i = 0; i < sentence.length; i++) {
// 		 var newWord = sentence[i].substr(0, sentence[i].length - 2);
// 		 newWord = newWord[newWord.length - 1] + newWord;
// 		 normalSentence.push(newWord.substr(0, newWord.length - 1));
// 	}
// 	return normalSentence.join(" ");
// }

// console.log(normal("ightnay foay hetay ivinglay eadday"), "problem 5, part 2");



// 6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
// [], [] -> true
// [2, 3, 4], [1, 2, 3] -> false
// ["a", "c", "b"], ["a", "b", "c"] -> true
// [1, 1, 1], [1, 1, 1, 1] -> false
// var a = [];
// var b = [];

// var array1 = [2, 3, 4]; 

// var array2 = [1, 2, 3];

// function sameSame(array1, array2) {
// 	if (array1.length === array2.length) {
// 		if (typeof array1 === "undefined" && typeof array2 === "undefined") {
// 			return true;
// 		}
// 		array1.sort(function(a,b) {return a - b});
//		array2.sort(function(a,b) {return a - b});

// 		for (var i = 0; i < array1.length; i++) {
// 			if (typeof array1[i] !== typeof array2[i]) {
// 				return false;
// 			} 
// 			if (array1[i] !== array2[i]) {
// 				return false;
// 			}
// 		}	
// 			return true;
// 	}
// 	return false;
// }

// console.log(sameSame(a, b), "problem 6");



// 7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
// [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]

//  var array1 = [1,5,7,3,1,5,7] 

// function cutOff(array, max) {
// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i] > max) {
// 			array[i] = max;
// 		} 
// 	}
// 	return array; 
// }

// console.log(cutOff(array1, 3), "problem 7");


// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.

// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)

// function randomGenerate() {
// 	let array = [];
// 	while (array.length <= 10)  {
// 		let rando = Math.floor(Math.random() * 100);
// 		if (!array.includes(rando)) {
// 			array.push(rando); 
// 		}
// 	}
// 	return array;
// }

// console.log(randomGenerate(), "problem 8");



// 9. Write a function which takes two sorted lists and merges them into a new sorted list.

// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// [], [] -> []
// [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]

// list1 = [1,2,5,6,9];
// list2 = [3,4,5,10];


// function sortAndMerge(array1, array2) {
// 	var newArray = array1.concat(array2);
// 	newArray.sort(function(a, b) {return a - b});
// 	return newArray;

// }
// console.log(sortAndMerge(list1, list2), "problem 9");


// 10. Write a function which accepts two arrays as input. The function should remove all the items from the shorter array, and add them to the end of the longer array. If both arrays are the same length, the function should do nothing. This function does not need to return a value. 

// var numbers = ['four', 'eleven']
// var animals = ['cat', 'bat', 'dolphin']


// function arrayTransfer(array1, array2) {
// 	if (array1.length === array2.length) {
// 			return;
// 	}
// 	if (array1.length > array2.length) {
// 		while (array2.length > 0) {
// 			 array1.push(array2.shift());
// 		}
// 		return array1;	
// 	}

// 	if (array2.length > array1.length) {
// 		while (array1.length > 0) {
// 			array2.push(array1.shift());
// 		}
// 		return array2;
// 	} 
// }

// console.log("problem 10");
// console.log(numbers); // []
// console.log(animals); // ['cat', 'bat', 'dolphin', 'four', 'eleven']



// ```

// 11. Write a function that uses `Math.random()` to generate a random number between 0-1. Replace all the 3's with 8's, and replace all the 7's with 1's, then return this number. Note that this function should return a `number`, not a `string`. 

// function replace() {
// 	var randomNumber = Math.random();
// 	var randomNumberAsString = randomNumber.toString()
// 	var randomNumberAsArray = randomNumberAsString.split('')
// 	for (var i = 0; i < randomNumberAsArray.length; i++) {
// 		if (randomNumberAsArray[i] === '3') {
// 			randomNumberAsArray[i] = '8';
// 		}
// 		else if (randomNumberAsArray[i] === '7') {
// 			randomNumberAsArray[i] = 1;

// 		}

// 	}
// 		// return (randomNumberAsArray.join(''))
// }

// console.log(replace(), "problem 11");




// 12. Write a function which accepts a sentence as a string, and returns the longest word in that sentence.

// 'I ate toast for breakfast' -> 'breakfast'

// function find(sentence) {
// 	var sentenceAsArray = sentence.split(' ');
// 	var longestWord = '';
// 	for (var i = 0; i < sentenceAsArray.length; i++) {
// 		if (sentenceAsArray[i].length > longestWord.length) {
// 			longestWord = sentenceAsArray[i];
// 		}
// 	}
// 	return longestWord;
// }

// console.log(find('I ate bacon for breakfast'), "problem 12");



// 13. Write a function which accepts a sentence as a string. Capitalize the first letter of each word of the string, and return that. 

// 'I ate toast for breakfast' -> 'I Ate Toast For Breakfast'

// function capitalize(sentence) {
// 	sentence = sentence.split(" ");
// 	for (var i = 0; i < sentence.length; i++) {
// 		sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
// 	}
// 		return sentence.join(" ");
// }

// console.log(capitalize("I ate toast for breakfast"));


// 14. Write a function which takes two dates as strings in the format 'YYYY/MM/DD' and returns the number of days between them.
// '1998/01/24', '1999/01/25' -> 366

// function dateDifference(date1, date2) {

// 	var first = new Date(date1);
// 	var second = new Date(date2);

// 	var MillisecondDifference = first - second;
// 	var result = MillisecondDifference / (1000 * 60 * 60 * 24);
// 	return Math.abs(result);

// }

// console.log(dateDifference('1998/01/24', '1999/01/25'), "problem 14");



// 15. Write a function called `add` that adds two numbers together, and returns the result. The function must be defined such that it can be called in two different ways to achieve the same result. See the example below:



// ```javascript
// var seven = add(5,2) // returns 7
// seven = add(5)(2) // also returns 7
// car = add(4000)
// 
// ```

// var add = function(a, b){

//     if ( typeof b === 'number' ){
//         return a + b;
//     }
//     else if ( typeof b === 'undefined' ) {
//         var addOneNumber = function(num) {
//             return a + num;
//         }
//         return addOneNumber;
//     }
// }

// console.log(add(5,2), "problem 15");

// console.log(add(5)(2));



// 16. Write a function which takes one argument, and returns true if that argument is a whole number (a non-negative integer, e.g. 0, 1, 5, 21, 1000, etc). If the argument is negative, is a decimal number, or is not a number at all, return false. 

// function checkIfInteger(value) {
// 	if (typeof value === "number" && value % 1 === 0 && value >= 0)  {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(checkIfInteger(-5), "problem 16");




// 17. Write a function which returns a random integer from 1 to 10.

// function getRandom() {

// 	return Math.floor(Math.random() * 10; 
// } 

// console.log(getRandom(), "problem 17");







