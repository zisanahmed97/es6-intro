const firstName ='jalal';
const lastName = 'uddin';

const fullName =`My full name is ${firstName} ${lastName}`;  //backtick use krle multiple line easily lekha jay eta onek dynamic
console.log(fullName);

const giveMe = `give me $ ${350+21-78 *7}`;
console.log(giveMe);

function getHtml(name , description , price){
    const div =`
    <div class=phone>
    <h2>${name.toUpperCase()}</h2>
    <p>$ ${price}</p>
    <p>${description}</p>
    </div>
    
    `
    console.log(div);
}

getHtml('iphone','this is my new phone',999);