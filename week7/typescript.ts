//TypeScript that accepts an array of any type and returns the first element

function getFirstElement<T>(array: T[]): T | undefined {
    return array[0];
}

// Example usage:
const numberArray = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numberArray);
console.log(firstNumber); // Output: 1

const stringArray = ['apple', 'banana', 'cherry'];
const firstString = getFirstElement(stringArray);
console.log(firstString); // Output: 'apple'

const mixedArray = [1, 'two', true, null];
const firstMixed = getFirstElement(mixedArray);
console.log(firstMixed); // Output: 1