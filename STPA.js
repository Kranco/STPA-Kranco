var STPA = {
    pagina:[
        {
            value:0,
            text:"<div>Estás en un pasillo oscuro con una brújula en mano.</div><div>Al norte hay una luz distante, y hacia el sur una oscuridad infinita.</div>",
            b1:{dest:1,text:"Avanzar"},
            b2:{dest:2,text:"Retroceder"}
        },
        {
            value:1,
            text:"Das con una puerta cerrada. Necesitás una llave.",
            b1:{dest:0,text:"Volver al inicio"},
            b2:{dest:3,text:"Dar Vueltas"}
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