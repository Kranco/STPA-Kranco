var STPA = {
    pagina:[
        {
            value:0,
            text:"Estás en un pasillo oscuro con una brújula en mano. Al norte hay una luz distante, y hacia el sur una oscuridad infinita.",
            b1:{dest:1,text:"Avanzar"},
            b2:{dest:2,text:"Retroceder"}
        },
        {
            value:1,
            text:"Das con una puerta cerrada. Necesitás una llave.",
            b1:{dest:0,text:"Volver al inicio"},
            b2:{dest:4,text:"Dar Vueltas"}
        },
        {
            value:2,
            text:"La oscuridad te traga y el entorno no cambia sin importar cuanto camines.",
            b1:{dest:0,text:"Volver al inicio"},
            b2:{dest:3,text:"Dar Vueltas"}
        },
        {
            value:3,
            text:"Das vueltas.",
            b1:{dest:0,text:"Volver al inicio"},
            b2:{dest:3,text:"Dar Vueltas"}
        }
    ]
};

var image = document.querySelector('#image');
var text = document.querySelector('#text');
var bt1 = document.querySelector('#bt1');
var bt2 = document.querySelector('#bt2');

function changeText(){
    let btVal = this.value;
    let stpa = STPA.pagina[btVal];
    console.log(stpa);
    console.log(stpa.text);
    text.innerHTML = stpa.text;
    bt1.innerHTML = stpa.b1.text;
    bt2.innerHTML = stpa.b2.text;
    bt1.setAttribute('value',stpa.b1.dest);
    bt2.setAttribute('value',stpa.b2.dest);
}

bt1.addEventListener('click', changeText);
bt2.addEventListener('click', changeText);