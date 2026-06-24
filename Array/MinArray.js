//Find minimum value in an array

let arr = [2, 5, 2, 0, 9, 4, 2];
let min = arr[0];
index = [];

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] <= min) {
    min = arr[i];
    if (arr[i] === min) {
      index.push(i);
    }
  }
}

console.log(`${min} at index ${index}`);

//Other logic

// let arr=[1,5,0,1,4,2,0]
// let min = arr[0];
// let index=0;

// for(let i=0; i<=(arr.length)-1; i++){
//     if(min>arr[i]){
//         min = arr[i];
//         index =i;
//     }
// }

// console.log(`${arr[0]} at index ${index}`);
