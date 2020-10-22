function sumFunc(var1, var2) {
    let num1, num2;
    num1 = var1;
    num2 = var2;
    let result = num1 + num2;

    console.log(result);
    return result;
}

// function은 () 로 실행요청해야 값이 출력됨
let sum = sumFunc(33, 44);

let multiFunc = function(v1, v2) {
    let num1 = v1, num2 = v2;
    return num1 * num2;
}

console.log(multiFunc());

function callBackFunc(func, val1) {
    return func(3,5) + val1;
}

sum = callBackFunc(multiFunc, 11);

// document.write(sum);

function myFunc(v1, v2) {
    sum = 0;
    for(i=v1; i<=v2; i++){
        sum += i;
    }
    return sum;
}

su = myFunc(1,5);


function myFunc2(v1, v2) {
    sum = 0;
    for (i=v2; i<=v1; i++){
        sum += i;
    }
    return sum;
}

su2 = myFunc2(5,1);

document.write(su2);