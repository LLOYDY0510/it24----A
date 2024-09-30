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