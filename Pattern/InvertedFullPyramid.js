let rows = 5;
let temp = rows;

for (let i = rows; i >= 1; i--) {
  for (let j = 0; j < rows - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    process.stdout.write("*");
  }
  console.log("");
}

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 2 * temp - 1; k >= 1; k--) {
    process.stdout.write("*");
  }
  console.log("");
  temp--;
}
