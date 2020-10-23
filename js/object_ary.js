let apples = ['apple'];

apples[apples.length] = 'banana';
apples[apples.length] = 'mango';

//맨뒤에 추가
apples.push('melon');
apples.push('strawberry');
//맨앞에 추가
apples.unshift('grape');

apples.pop();   //제일뒤 제거
apples.pop();
apples.shift();  //제일 앞 제거

// delete apples[1];  //열은 남기고 데이터만 삭제
apples.splice(1,2,'new apple','new mango'); //index:1 에서 하나삭제 or 추가

for (let fruit of apples) {
    console.log(fruit);
}

let fruits = ['apple', 'banana', 'mango', 'melon', 'grape'];
let newFr = fruits.slice(0,3);
console.log(fruits);
console.log(newFr);

for (let i = 0; i < fruits.length; i++) {

}
for (let fruit of fruits) {

}
console.clear();

let tags = '<ul>';
fruits.forEach(function(a,b,c){
    // if(b % 2 == 0) {
    // console.log(a,b);
    // }
    tags += '<li>' + a + '</li>';
});
tags += '</ul>';
console.log(tags);

let newBtn = document.getElementById('new');
newBtn.innerHTML += tags;

let intAry = [3,5,2,6,4,8,6];
let sum = 0;
for(i of intAry) {
    sum += i;
};

console.log(sum);

sum = 0;
intAry.forEach(function(a,b,c){
    sum += a;
});
console.log(sum);

sum = 0;
intAry.forEach(function(a,b,c){
    if(a%2==1) {
        sum += a;
    }
});
console.log(sum);

let per1 = {
    name:"Hong",
    age:20,
    hobby:"reading",
    grade:"A"
}
let per2 = {
    name:"Hwang",
    age:25,
    hobby:"singing",
    grade:"B"
}
let per3 = {
    name:"Park",
    age:19,
    hobby:"sleeping",
    grade:"C"
}

let name = per1.name;
name = per1['name'];
let age = per1['age'];

function getField(obj, field) {
    return obj[field];
    // return obj.field;
}
name = getField (per1, 'name');
age = getField(per1, 'age');

for(field in per1) {
    console.log(field);
}

console.log(name);
console.clear();

let persons = [per1, per2, per3];

let newTag = '<table border=1>';
for (person of persons) {
    newTag += '<tr>';
    for(field in person) {
        if(field == 'name'){
        newTag += '<td style="color: orange;">' + person[field] + '</td>';
        } else if (field =='age') {
            newTag += '<td style="font-weight: bold;">' + person[field] + '</td>';
        } else {
        newTag += '<td>' + person[field] + '</td>';
        }
    }
    newTag += '<td><button class="btn">OK</button></td></tr>';
}
newTag += '</table>';
newBtn.innerHTML = newBtn.innerHTML + newTag;

//css의 선택자 방식으로 클래스명이 btn인 요소를 가져옴
let btns = document.querySelectorAll('.btn');
console.log(btns);

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        let trTag = this.parentNode.parentNode;
        if(trTag.style.background == "yellow") {
            trTag.style.background = "";
        } else {
            trTag.style.background = "yellow";
        }
    }
}

//css 선택자를 tr로 찾아옴
let trs = document.getElementsByTagName('tr');
for (let i = 0; i < trs.length; i++) {
    trs[i].onmouseover = function() {
        this.style.background = "seagreen";
    }
    trs[i].onmouseout = function() {
        this.style = null;
    }
}
