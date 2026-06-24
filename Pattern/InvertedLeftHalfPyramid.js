let rows = 5;

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j < i; j++) {
    process.stdout.write(" ");
  }
  for (let k = rows; k >= i; k--) {
    process.stdout.write("*");
  }
  console.log("");
}
