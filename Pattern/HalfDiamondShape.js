let rows = 5;
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log("");
}

for (let i = rows-1; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log("");
}
