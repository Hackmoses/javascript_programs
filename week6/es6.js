//Function to Filter Even Numbers and Sum All Numbers

// Function to filter even numbers and sum all numbers in an array
function processArray(numbers) {
    // Filter even numbers
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    
    // Calculate the sum of all numbers using .reduce()
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    
    return {
        evenNumbers,
        sum
    };
}

// Example usage
const numbersArray = [1, 2, 3, 4, 5, 6];
const result = processArray(numbersArray);
console.log(result); // { evenNumbers: [2, 4, 6], sum: 21 }


//Function to Flatten a Nested Array
// Function to flatten a nested array
function flattenArray(nestedArray) {
    // Use .flat() to flatten the array
    return nestedArray.flat();
}

// Example usage
const nestedArray = [[1, 2], [3, 4], [5]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // [1, 2, 3, 4, 5]

//Create and Manipulate a TypedArray
// Create a TypedArray (Uint8Array) with a length of 5
const typedArray = new Uint8Array(5);

// Populate the TypedArray with values
typedArray.set([10, 20, 30, 40, 50]);

// Print the array to the console
console.log('Original TypedArray:', typedArray); // Uint8Array(5) [10, 20, 30, 40, 50]

// Reverse the array and display the result
const reversedArray = typedArray.reverse();
console.log('Reversed TypedArray:', reversedArray); // Uint8Array(5) [50, 40, 30, 20, 10]



//Function to Convert Between Regular Array and TypedArray
// Function to convert a regular array of integers into a TypedArray
function toTypedArray(arr) {
    return new Uint8Array(arr);
}

// Function to convert a TypedArray back to a regular array
function toRegularArray(typedArray) {
    return Array.from(typedArray);
}

// Example usage
const regularArray = [1, 2, 3, 4, 5];
const typedArrayFromRegular = toTypedArray(regularArray);
console.log('TypedArray from regular array:', typedArrayFromRegular); // Uint8Array(5) [1, 2, 3, 4, 5]

const regularArrayFromTyped = toRegularArray(typedArrayFromRegular);
console.log('Regular array from TypedArray:', regularArrayFromTyped); // [1, 2, 3, 4, 5]