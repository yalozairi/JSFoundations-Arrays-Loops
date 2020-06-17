/**
 * getOdds(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only ODD numbers.
 *
 * e.g.
 * getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [1, 3, 5, 7, 9]
 * getOdds([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [11, 35, 601, 777, 999]
 */
function getOdds(numbers) {
  let oddArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      oddArray.push(numbers[i]);
      // } else if (numbers[i] % 2 === 0) {
      //   console.log(`${numbers[i]}`);
      // }
    }
  }
  //return numbers.slice(getOdds())
  return oddArray;
}
console.log(getOdds([2, 3, 5, 6, 2, 10]));

/**
 * getEvens(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only EVEN numbers.
 *
 * e.g.
 * getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [2, 4, 6, 8]
 * getEvens([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [52, 14, 56, 888]
 */
function getEvens(numbers) {
  let evenArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenArray.push(numbers[i]);
    }
  }
  return evenArray;
}
console.log(getEvens([2, 3, 5, 6, 2, 10]));

/**
 * getDuplicateCount(x, numbers):
 * - receives a number `x`, and an array of numbers called `numbers`
 * - returns the number of times `x` occurs in `numbers`.
 *
 * e.g.
 * getDuplicateCount(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13]) -> 4
 * getDuplicateCount(52, [11, 35, 52, 14, 56, 601, 52, 777, 888, 999, 52]) -> 3
 */
function getDuplicateCount(x, numbers) {
  let duplicates = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === x) {
      duplicates++;
    }
  }
  return duplicates;
}
console.log(getDuplicateCount(3, [1, 2, 3, 3, 4, 3, 5, 3, 7, 3]));

/**
 * youGottaCalmDown(s):
 * - receives a string `s`
 * - returns the string `s` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */

function youGottaCalmDown(s) {
  let slice = 0;
  let slicedArray = s;
  while (slicedArray.endsWith(`!!`) === true) {
    slice = slice - 1;
    slicedArray = s.slice(0, slice);
  }
  return slicedArray;
}

console.log(youGottaCalmDown("I HATE YOU!!!!!!!!"));
console.log(youGottaCalmDown("You're Cool!"));
console.log(youGottaCalmDown("I Love You"));

module.exports = { getOdds, getEvens, getDuplicateCount, youGottaCalmDown };
