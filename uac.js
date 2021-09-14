/*
David Trang to Everyone (12:51 pm)
Write a function that checks if an array of integers is monotonic.

A monotonic array has its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

Non-increasing elements are not necessarily exclusively decreasing, they simply do not increase.

Non-decreasing elements are not necessarily exclusively increasing, they simply do not decrease.

For examples

monotonic
[]
[1]
[1, 2]
[1, 1, 1, 1, 1, 1]
[1, 1, 2, 2, 3, 4, 4, 5]
[5, 4, 4, 3, 2, 2, 1, 0, 0, -1]
[-1, -5, -10, -1100, -1100, -1101, -2000]

NOT monotonic
[1, 2, 4, 3]
[5, 5, 4, 3, 3, 1, 2, 0]

Implementation

const isMonotonic = (array) => {
  // code
};
 */
export const isMonotonic = (array) => {
  if (array.length === 0 || array.length === 1) {
    return true;
  }
  let max = array[0];
  let min = array[0];
  let increasing = true;
  let decreasing = true;

  for (let x = 1; x < array.length; x++) {
    if (max > array[x]) {
      increasing = false;
    } else {
      max = array[x];
    }
    if (min < array[x]) {
      decreasing = false;
    } else {
      min = array[x];
    }
  }

  return increasing || decreasing;
};

/*
Can you implement a function to returns all the indices of occurrence of a specified value in a string?

You cannot use the built-in indexOf function or similar

Example outputs:

findAllIndices('the fox jumps over the dog', 'the')
// expecting [0, 19]

findAllIndices('the fox jumps over the dog', 'brown')
// expecting []

findAllIndices('the fox jumps over the dog', 'o')
// expecting [5, 14, 24]

findAllIndices('the fox jumps over the dog', ' ');
// expecting [3, 7, 13, 18, 22]
 */

export function findAllIndices(stringToCheck, specifiedValue) {
  const result = [];
  let count = 0;
  for (let i = 0; i < stringToCheck.length; i++) {
    if (count === 0 && stringToCheck[i] === specifiedValue[0]) {
      count = 1;
    } else if (count === specifiedValue.length) {
      result.push(i - count);
      count = 0;
    } else if (stringToCheck[i] === specifiedValue[count]) {
      count++;
    }
  }

  return result;
}
