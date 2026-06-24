let rows = 5;
let half = Math.round(rows / 2);
console.log(half);

for (let i = 1; i <= rows; i++) {
  for (let j = rows; j >= i; j--) {
    process.stdout.write(" ");
  }
  for (let k = i; k <= i; k++) {
    process.stdout.write("*");
  }
  for (let m = 1; m <= half + 1; m++) {
    if (half + 1 === i) {
      process.stdout.write("*");
    }
  }
  if (half + 1 !== i) {
    for (let l = 2; l < 2 * i - 1; l++) {
      if (i !== 1) {
        process.stdout.write(" ");
      }
    }
  }
  if (i !== 1) {
    process.stdout.write("*");
  }
  console.log("");
}
