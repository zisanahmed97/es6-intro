const max = Math.max(3,5,6,2,54);
// console.log(max);

const numbers= [3,4,5,6,2,54];
const max2 = Math.max(...numbers);
// console.log(...numbers);
// console.log(max2);


const params = [45,12,3];
function sum(x,y,z){
    console.log(x,y,z);
    return x+y+z;
}
// const result = sum(...params);
// console.log(result);

// const arr1 = [1,2,3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1)
// console.log(arr2)

const arr1 = [1,2,3];
const arr2 = [...arr1, 87];
// arr2.push(4);
// console.log(arr1)
// console.log(arr2)

const person = { name: 'zisan', age:'24'};

const person2 = {...person, designation : 'developer'};
person.salary = 36000;
console.log(person);
console.log(person2);