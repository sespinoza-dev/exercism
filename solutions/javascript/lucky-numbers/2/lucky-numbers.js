// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const joinAsString = (array) => array.join('');
  const joinAsNumbers = (num1, num2) => Number(num1) + Number(num2);

  return joinAsNumbers(joinAsString(array1), joinAsString(array2));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return value == String(value).split('').reverse().join('');
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const REQUIRED_FIELD = 'Required field';
  const NUMBER_BESIDE_ZERO = 'Must be a number besides 0';

  if (!input) return  REQUIRED_FIELD;
  if (!Number(input)) return NUMBER_BESIDE_ZERO ;

  return '';
}
