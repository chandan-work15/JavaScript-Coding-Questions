let rows = 5;

for (let i = 1; i <= rows; i++) {
  for (let j = rows; j > i; j--) {
    process.stdout.write(" ");
  }
  // for (let k = 1; k <= 2*i-1; k++) {
  for(let k = 1; k<=i; k++){
    process.stdout.write("* ");
  }
  console.log("");
}
