let arr = [4, 9, 6, 1, 45, 94, 81];

arr.reverse();
console.log(arr);

let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}
console.log(newArr);