let show = document.getElementById('show');
for (let j = 2; j <= 9; j++) {
    for (let i = 0; i <= 9; i++) {
        // document.write('<div>' + j + ' * ' + i + ' = ' + (j * i) + ' </div>');
        let div = document.createElement('div');
        div.innerHTML = j + ' * ' + i + ' = ' + (j * i);
        show.append(div);   
    }
    // document.write('<div class="row"></div>');
    let row = document.createElement('div');
    row.setAttribute('class','row');
    show.append(row);
}