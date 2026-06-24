let arr = [4, 9, 6, 1, 45, 94, 81];

// arr.reverse();
// console.log(arr);

// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }
// console.log(newArr);

// let max = arr[0];
// for (let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let min = arr[0];
// for (let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// let add = arr.reduce((a, b) => a + b);
// console.log(add);

// let sum = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// let sum = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
//   sum += arr[i];
// }
// let average = sum/arr.length
// console.log(average);

let min = arr[0];
let sort = [];
for (let i = 0; i <= arr.length - 1; i++) {
  for (let j = 0; j <= arr.length - 1; j++) {
    if (arr[i] <= arr[j]) {
      min = arr[i];
      sort.push(min);
    } else {
      min = arr[j];
      sort.push(min);
    }
  }
}
console.log(sort);
