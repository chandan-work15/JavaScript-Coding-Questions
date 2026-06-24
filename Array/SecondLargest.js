let arr = [4, 9, 6, 1, 45, 94, 81];

let sort = [];
// let sort = arr.sort((a,b)=>a-b);

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        let min = arr[i];
        if (min >= arr[j]) { 
        min = arr[j];
        sort.push(min);
        }
    }
}

console.log(sort);
