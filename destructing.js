const product = {
    name: 'iphone',
    price : 799,
    description: 'a smartphone by apple'
};

const newPrice = product.price + 100;
// console.log(newPrice);
const phoneName =`this is ${product.name}`;
// console.log(phoneName);

// const price = product.price;
// const name= product.name;


const price = 5555;
// const product = { name: 'iPhone', price: 799, brand: 'Apple' };

const {name, price:phonePrice , camera = '12mp'} = { name: 'iPhone', price: 799, brand: 'Apple' };
console.log(name);
console.log(phonePrice);
console.log(camera);

const [first, second]  = [10, 20, 30, 50];
console.log(first, second);

const [height, weight] = numbers
