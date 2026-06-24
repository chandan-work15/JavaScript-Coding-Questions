// let a=[4,7,8,5,4,4,7,3];

// for(let i=0; i<=(a.length)-1; i++){
//     for(let j=0; j<=(a.length)-1; j++){
//         if(a[i]===a[j] && i!=j){
//             a.splice(j,1);
//         }
//     }
// }
// console.log(a);


let a = [4,7,8,5,4,4,4,7,3];
let temp;
for(let i=0; i<=(a.length)-1; i++){
    for(let j=0; j<=(a.length)-1; j++){
        if(a[i]===a[j] && i!=j){
            temp=a[i];
            a.splice(i,1);
            a.splice(j,1);
            for(let k=0; k<=(a.length)-1; k++){
                if(temp===a[k]){
                    a.splice(k,1);
                }
            }
        }
    }
}
console.log(a);