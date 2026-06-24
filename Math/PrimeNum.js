
let num = prompt("enter number : ");
let count = 0;

for (let i = 0; i <= num; i++) {
  num%i;
  if(num%i===0){
    count++;
  }
}
if(count ===2){
    console.log("Number is Prime number")
}
else{
    console.log("Number is not Prime number")
}