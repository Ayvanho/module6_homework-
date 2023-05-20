function isPrimeNumber(num) {
if (num > 1000) {
console.log("Данные неверны");
return;
}
if (num === 0 || num === 1) {
console.log("Число не является простым");
return;
}
for (let i = 2; i < num; i++) {
if (num % i === 0) {
console.log("Число не является простым");
return;
}
}
console.log("Число является простым");
}

// Примеры использования:
isPrimeNumber(17); // Число является простым
isPrimeNumber(9); // Число не является простым
isPrimeNumber(1001); // Данные неверны
isPrimeNumber(0); // Число не является простым
isPrimeNumber(1); // Число не является простым