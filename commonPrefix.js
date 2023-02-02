let str = ["hello", "happjy", "hedd"];

let length = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i].length > length) {
        length = str[i].length;
    }
}

let ans = [];

console.log(str[1][0])
// for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < length; j++) {
//         if (str[i][j] == str[i + 1][j]) {
//             ans[i] = str[i][j];
//         }

//         else {
//             ans[i] = "";
//         }
//     }
// }

console.log(ans)