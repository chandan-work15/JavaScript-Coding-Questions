let str = "chandan";
let rep = [];

for (let i = 0; i < str.length; i++) {
    for (let j = 1; j <= i + 1; j++) {
        if (str[i] === str[j]) {
            console.log(rep);
            rep.push(str[i]);
    }
  }
}
console.log(rep);
