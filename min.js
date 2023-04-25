var image = document.querySelector('#image');
var text = document.querySelector('#text');
var bt1 = document.querySelector('#bt1');
var bt2 = document.querySelector('#bt2');

document.addEventListener("DOMContentLoaded", function(event) {
    let btVal = 0;
    let stpa = STPA.pagina[btVal];

    text.innerHTML = '<div class="pg">'+stpa.text+'</div>';
    bt1.innerHTML = stpa.b1.text;
    bt2.innerHTML = stpa.b2.text;
    
    bt1.setAttribute('value',stpa.b1.dest);
    bt2.setAttribute('value',stpa.b2.dest);
});

function changeText(){
    let btVal = this.value;
    let stpa = STPA.pagina[btVal];

    text.innerHTML = '<div class="pg">'+stpa.text+'</div>';
    bt1.innerHTML = stpa.b1.text;
    bt2.innerHTML = stpa.b2.text;
    
    bt1.setAttribute('value',stpa.b1.dest);
    bt2.setAttribute('value',stpa.b2.dest);
}

bt1.addEventListener('click', changeText);
bt2.addEventListener('click', changeText);