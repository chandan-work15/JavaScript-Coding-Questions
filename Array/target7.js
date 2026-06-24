// Sum of number of two indices of array is 13

let arr=[1, 6, 6, 9, 4, 5, 8];
let index=0;
let f;
let s;

for(let i=0; i<=(arr.length)-1; i++){
    for(let j=0; j<=(arr.length)-1; j++){
        if(arr[i]+arr[j]===13){
            f=i;
            s=j;
            break;
        }
    }
    if(f>0&&s>0){
        break;
    }
}
console.log(`${f} and ${s}`);