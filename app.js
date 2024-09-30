// 1. Data Types
let number = 7; 
let isEven = false;
let primeStatus = ""; 
let palindromeStatus = "";
// 2. Arithmetic and Logical Operators
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b; 
// 3. Conditional Statements
const isOddOrEven = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};
// ii. switch 
const isPrime = (num) => {
    if (num <= 1) return "Not prime";

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Not prime";
        }
    }
    return "Prime";
};
// 4. Loops 
const isPalindrome = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed ? "Palindrome" : "Not a palindrome";
};
// 5. Functional Programming
// Determine if the number is odd or even
const numberType = isOddOrEven(number);
console.log(`The number ${number} is: ${numberType}`);
// Determine if the number is prime
primeStatus = isPrime(number);
console.log(`The number ${number} is: ${primeStatus}`);