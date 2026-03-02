const king = { name: 'Mufasa', age: 55, kingdom: 'Pride Lands' };

// Object.freeze(king); // add,dlt,modify kisui kora jabe na

Object.seal(king); // modify kora jabe but add,dlt kora jabe na
delete king.age;
delete king.kingdom;
king.queen = 'Sarabi';
king.name = 'King Simba';
console.log(king);