
let str = "exemplo";
let reversedStr = [];

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr.push(str[i]);
}

reversedStr = reversedStr.join("");
console.log(reversedStr);
