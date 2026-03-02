// function add(num1 , num2){
//     const number = num1+num2;
//     console.log(number);
// }

// add(20);


function add2(num1,num2=0){
    const number = num1 + num2;
    console.log(num1, num2, number);
}

add2(10);


function name(first, last=''){
    const fullName = first +" "+last;
    console.log(fullName);
}

name('rahim','mia')


/**
 * sting -> ''
 * number -> 0 [for add]
 * number -> 1 [for multiply]
 * array->[]
 * object->{}
 * boolean-> false
 */