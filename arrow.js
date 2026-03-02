
// console.log(add(3,5))
//function declaration
function add(num1,num2){
    return num1 + num2;
}

//function expression
// console.log(add2(5,6));
const add2= function (num1,num2){
    return num1+num2;
}
// console.log(add2(5,6));



//arrow function
const add3= (num1, num2) => num1 + num2;
console.log(add3(4,5));

const multiple = (a,b)=> a * b;

const tenTimes = x => x* 10;
const tenTimes2 =(x) => x*10;

const getPi = () => 3.1416;
const addAll = (a,b,c,d,e,f)=a+b+c+d+e+f;

const isEven = num => num % 2 === 0;

const doMath = (x,y) => {
     const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const divide = (p, q) => p / q;

document.getElementById('btn').addEventListener('click', () => {})
document.getElementById('btn').addEventListener('click', (event) => {})


