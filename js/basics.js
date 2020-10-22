let num1, num2, num3, result;

num1 = 10;

// num1 = "nice";
num2 = 20;
num3 = 6;
result = num1 * num2 + num3;

// if(num1 > num2 || num1 > num3) {
//     alert('large');
// }else {
//     alert('small');
// }

result = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0)
        continue;
    else if (i % 3 == 0 || i % 5 == 0)
        result += i;
}
console.log(result);

let cnt = 0;
result = 0;
while (cnt < 15) {
    result += cnt;
    cnt++;
}

console.log(result);
console.clear();

let intAry = [2, 3, 4, 5, 6, 7];
result = 0;
for (num of intAry) {
    result += num;
}
console.log(result);
console.clear();

let strAry = ['hello', 'nice', 'good', 'beautiful'];
for (str of strAry) {
    console.log(str);
}

let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
let div = document.getElementById('show');
let ulTag = document.createElement('ul');
for (d of days) {

let liTag = document.createElement('li');
liTag.innerHTML = d;
ulTag.append(liTag);

}

div.append(ulTag);