function countEvenOddZero(arr) {
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
if (typeof arr[i] === 'number') {
if (arr[i] === 0) {
zeroCount++;
} else if (arr[i] % 2 === 0) {
evenCount++;
} else {
oddCount++;
}
}
}

console.log(Количество четных элементов: ${evenCount});
console.log(Количество нечетных элементов: ${oddCount});
console.log(Количество нулей: ${zeroCount});
}

const array = [1, 0, "hello", null, 4, 8, 3, 7];
countEvenOddZero(array); // Вывод: Количество четных элементов: 2, Количество нечетных элементов: 2, Количество нулей: 1