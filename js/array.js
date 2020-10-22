let intAry = [34, 52, 64, 19, 40, 21];
//1. index 를 활용해서 배열의 총합
let sum=0;
for (i=0; i<intAry.length; i++){
    sum += intAry[i];
}
console.log(sum);

//2. 확장 for를 활용
sum=0;
for (iA of intAry) {
   sum += iA;
}
console.log(sum);

//3. 숫자 리스트 document영역에 리스트로 보이기 ul.li.
document.write('<ul>');
for (intA of intAry){
    document.write('<li>'+intA+'</li>');
}   
document.write('</ul>');

//4. 숫자 35, 88을 배열의 마지막 위치에 추가
intAry.push(35,88);
document.write('<ul>');
for (inA of intAry){
    document.write('<li>'+inA+'</li>');
}
document.write('</ul>');

//5. 합을 리스트의 마지막에 출력

sum=0;
for (iAry of intAry) {
   sum += iAry;
}
document.write('<li>'+'합계: '+ sum+'</li>');


let strAry = ["hong", 'hwang', 'park', 'choi'];
// for(let i=0; i<strAry.length; i++) {}  밑과 같은 코드
for (str of strAry){
    console.log(str);
}

let boolAry = [true, false, true, 'a', 0];
let times = 0;
for (let var1 of boolAry){
    if(var1) {
        console.log(times++);
    }
}
console.log(times);

let p1 = {
    name:"hong",
    age: 15
}
let p2 = {
    name:"hwang",
    age: 20
}
let p3 = {
    name:"park",
    age: 22
}

let persons = [];
persons.push(p1);
persons.push(p2);
persons.push(p3);

let tableTag = '<table border=1>';
tableTag += '<tr><th>이름</th><th>나이</th></tr>';
for (let p of persons) {
    tableTag += '<tr><td>'+p.name+'</td><td>'+p.age+'</td></tr>'
}
tableTag += '</table>';
console.log(tableTag);
let show = document.getElementById('show');
show.innerHTML = tableTag;

let div = document.getElementById('show');
let tTag = document.createElement('table');
tTag.setAttribute('border',1);
let tr1 = document.createElement('tr');
let th = document.createElement('th');
th.innerHTML = '이름';
let th1 = document.createElement('th');
th1.innerHTML = '나이';
tr1.append(th,th1);

let tr2 = document.createElement('tr');
let td = document.createElement('td');
td.innerHTML = '홍길동';
let td1 = document.createElement('td');
td1.innerHTML = '20';
tr2.append(td,td1);

let tr3 = document.createElement('tr');
let td2 = document.createElement('td');
td2.innerHTML = '김기자';
let td3 = document.createElement('td');
td3.innerHTML = '25';
tr3.append(td2,td3);

let tr4 = document.createElement('tr');
let td4 = document.createElement('td');
td4.innerHTML = '가나다';
let td5 = document.createElement('td');
td5.innerHTML = '15';
tr4.append(td4,td5);


tTag.append(tr1,tr2,tr3,tr4);
div.append(tTag);
console.log(div);