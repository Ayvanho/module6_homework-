function printNumbers(start, end) {
let currentNumber = start;
const intervalId = setInterval(() => {
console.log(currentNumber);
if (currentNumber === end) {
clearInterval(intervalId);
}
currentNumber++;
}, 1000);
}

// Example usage:
printNumbers(5, 15); // prints numbers 5 to 15 in the console, one per second.





