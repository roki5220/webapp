let buttons = document.querySelectorAll('#new>button');

for(let i=0; i<buttons.length;i++){
    buttons[i].onclick = clickFunc;
    buttons[i].onmouseover = overFunc;
    buttons[i].onmouseout = outFunc;
}
function clickFunc() {
    alert(this.innerHTML);
}
function overFunc () {
    this.style.background = "yellow";
    this.style.color = "nav";
}
function outFunc () {
    this.style = null;
}
console.log(buttons);

let onBtn = document.getElementById('turnOn');
onBtn.onclick = function() {
    let img = document.querySelector('#show>img');
    img.setAttribute('src','images/on.gif');
}
onBtn.onmouseover = function() {
    onBtn.style.background = 'yellow';
    onBtn.style.border = "nav";
}
onBtn.onmouseout = function() {
    onBtn.style = null;
}

let offBtn = document.getElementById('turnOff');
offBtn.onclick = function() {
    let img = document.querySelector('#show>img');
    img.setAttribute('src','images/off.gif');
}
offBtn.onmouseover = function() {
    offBtn.style.background = "green";
    offBtn.style.color = "white";
}
offBtn.onmouseout = function() {
    offBtn.style = null;
}


console.log(onBtn);