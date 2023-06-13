//simple functions and arrow functions in javaScript

let a = 0;
let b = 0;


function sum(a, b){
    return a+b;
}
console.log(sum(4,5));


const arrowSum = (a, b) => {
    return a+b;
}
console.log(arrowSum(3, 7));


function sub(a , b) {
    return a-b;
}
console.log(sub(3,7));


const arrowSub = (a , b) => {
    return a-b;
} 
console.log(arrowSub(5 , 5))


function mul(a , b){
    return a*b;
}
console.log(mul(5, 6));

const arrowMul = (a , b) => {
    return a*b;
}
console.log(arrowMul(8,4));

//arrow function in one line
const add = (a, b) => a+b
console.log(add(4,7));


