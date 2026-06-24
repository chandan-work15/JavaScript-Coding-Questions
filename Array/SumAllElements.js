let arr = [4, 9, 6, 1, 45, 94, 81];

let add = arr.reduce((a, b) => a + b);
console.log(add);

let sum = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  sum += arr[i];
}
console.log(sum);