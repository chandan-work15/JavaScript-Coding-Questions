function max(arr) {
  let max = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(max([57, 9, 33, 7, 2, 6]));
