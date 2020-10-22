let var1 = 10;
var1 = 'hello'
var1 = 20;
console.log(typeof var1);

const var2 = '20';

let num1 = 10;
let num2 = '10';
num2 = 10;

if(num1 === num2) {
    console.log('same');
}else {
    console.log('diff');
}

num2++;

let trueOrFalse = true;
if(trueOrFalse) {
    console.log(true);
}
num2 = 'hello';
let num3;
if(num3) {
    console.log(true);
} else {
    console.log(false);
}
console.log(typeof num3);

let person = {
    name: 'Hong',
    age: 20,
    score: 80
}
person.hobby = 'reading';

console.log(person.name);
console.log(person.age);
console.log(person);

let persons = [person, {name: "Hwang", age: 25, score: 90}];

console.log(persons[1].age+persons[0].age);

persons.push({name:'Choi', age:27, score: 100});
console.log('persons.length : ' + persons.length);
console.log(persons);

persons[persons.length] = { 
    name: "Park" , age: 22, score: 88
}

console.log('persons.length : ' + persons.length);

// for (let i=0; i<persons.length; i++) {
for(let per of persons) {
    console.log(per.name + ' , ' + per.age + ' , ' + per.score);

}

for(let per of persons) {
    document.write('<li>' + per.name + '</li>');
}

for (let i = 0; i < persons.length; i++) {
    document.write('<li>' + persons[i].name + '</li>');
}

