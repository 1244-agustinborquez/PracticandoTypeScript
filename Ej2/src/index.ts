// tipos de variables:

//unñnow:

let notSure:unknown = 4;

notSure = 'Ahora soy String';

notSure = true;

//otro ejemplo:
declare const maybe: unknown;
if (maybe === true ) {
    const aBoolean: boolean = maybe
};
if (typeof maybe === 'string' ) {
    const aString: string = maybe
};

//any

declare function getValue(key:string):any;

const str:string = getValue('myString');


//void

function warnUser():void{
    console.log('Be careful');
};

//null, undefine

// no son tan utiles en practica

//never, en este caso la funcion never siempre tiraria un error.