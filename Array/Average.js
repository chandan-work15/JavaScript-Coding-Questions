let arr = [4, 9, 6, 1, 45, 94, 81];

let sum = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  sum += arr[i];
}
let average = sum/arr.length
console.log(average);