// print table
let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiply( b) {

  console.log(4*b);
}
// numb.forEach(multiply);
let arr2 =[];
function multiply2(b){
    arr2.push(4*b);
}
numb.map(multiply2);
console.log(arr2);