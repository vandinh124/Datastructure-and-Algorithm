function compareByLength(str1, str2){
    return str2.length - str1.length;
}
console.log(["Van", "Dinh", "Vu", "Thu"].sort(compareByLength)); // ["Dinh", "Van", "Thu", "Vu"]


// function compareByLength(str1, str2){
//     return str1.length - str2.length;
// }
// console.log(["Van", "Dinh", "Vu", "Thu"].sort(compareByLength)); // ["Vu", "Van", "Thu", "Dinh"]


// function numberCompare(num1, num2){
//     return num1 - num2;
// }

// console.log([6,4,7,10].sort(numberCompare)); // [4, 6, 7, 10]

// function numberCompare(num1, num2){
//     return num2 - num1;
// }

// console.log([6,4,7,10].sort(numberCompare)); // [10, 7, 6, 4]