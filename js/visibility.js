let divimg = document.createElement('div');
divimg.setAttribute('class','v1');
let img1 = document.createElement('img');
img1.setAttribute('src','../images/pic1.jpg');
divimg.append(img1);

let divimgs = document.createElement('div');
divimgs.setAttribute('class','v2');
let img2 = document.createElement('img');
img2.setAttribute('src','../images/pic1.jpg');
divimgs.append(img2);

let divimage = document.createElement('div');
divimage.setAttribute('class','v3');
let img3 = document.createElement('img');
img3.setAttribute('src','../images/pic1.jpg');
divimage.append(img3);

let divimag = document.createElement('div');
divimag.setAttribute('class','v4');
let img4 = document.createElement('img');
img4.setAttribute('src','../images/pic1.jpg');
divimag.append(img4);


let divrow = document.createElement('div');
divrow.setAttribute('class','row')
let first = document.createElement('ul');
first.setAttribute('id','first');
let menu1 = document.createElement('li');
menu1.innerHTML = "menu1";
let menu2 = document.createElement('li');
menu2.innerHTML = "menu2";
let menu3 = document.createElement('li');
menu3.innerHTML = "menu3";

let last = document.createElement('ol');
last.setAttribute('id','last');
let sub1 = document.createElement('li');
sub1.innerHTML = "sub1";
let sub2 = document.createElement('li');
sub2.innerHTML = "sub2";
let sub3 = document.createElement('li');
sub3.innerHTML = "sub3";

divrow.append(first,last);
first.append(menu1,menu2,menu3);
last.append(sub1,sub2,sub3);

let bdy = document.querySelectorAll('#bdy');
console.log(bdy);
bdy[0].append(divimg, divimgs, divimage, divimag, divrow);


// let bdy = document.getElementById('bdy');

// for (let i = 1; i < 4; i++) {
//     let div = document.createElement('div');
//     div.setAttribute('class','v'+ i);
//     let img = document.createElement('img');
//     img.setAttribute('src', '../images/pic1.jpg');
//     div.append(img);
//     bdy.append(div);
// }