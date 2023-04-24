const div = document.getElementById('container');
const bt1 = document.getElementById('bt1');
const bt2 = document.getElementById('bt2');
const bt3 = document.getElementById('bt3');

var STPA = {
    pagina:[
        {
            value:1,
            text:"Estás en un pasillo oscuro con una brújula en mano. Al norte hay una luz distante, y hacia el sur una oscuridad infinita.",
            boton1:{dest:2,text:"Avanzar"},
            boton2:{dest:3,text:"Retroceder"},
            boton3:{dest:4,text:"Dar Vueltas"}
        },
        {
            value:2,
            text:"Das con una puerta cerrada. Necesitás una llave.",
            boton1:{dest:1,text:"Volver al inicio"},
            boton2:{dest:4,text:"Dar Vueltas"}
        },
        {
            value:3,
            text:"La oscuridad te traga y el entorno no cambia sin importar cuanto camines.",
            boton1:{dest:1,text:"Volver al inicio"},
            boton2:{dest:4,text:"Dar Vueltas"}
        },
        {
            value:4,
            text:"Das vueltas.",
            boton1:{dest:1,text:"Volver al inicio"},
            boton2:{dest:4,text:"Dar Vueltas"}
        }
    ]
};

function changeText(){
    let btVal = this.value;
    console.log("Valor: "+btVal);
    div.innerHTML = STPA.pagina[btVal].boton1.text;
}

bt1.addEventListener('click', changeText);
bt2.addEventListener('click', changeText);
bt3.addEventListener('click', changeText);