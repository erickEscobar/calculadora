let d = document, numero = 0, numero1 = 0, numero2 = 0, operacion = '', aux = 0;
const nCero = d.getElementById("cero"),
    nUno = d.getElementById("uno"),
    nDos = d.getElementById("dos"),
    nTres = d.getElementById("tres"),
    nCuatro = d.getElementById("cuatro"),
    nCinco = d.getElementById("cinco"),
    nSeis = d.getElementById("seis"),
    nSiete = d.getElementById("siete"),
    nOcho = d.getElementById("ocho"),
    nNueve = d.getElementById("nueve"),
    nSuma = d.getElementById("mas"),
    nMenos = d.getElementById("menos"),
    nDivision = d.getElementById("dividir"),
    nIgual = d.getElementById("igual"),
    nMultiplicacion = d.getElementById("por"),
    n10Elevado = d.getElementById("10Elevado"),
    nLogaritmoX = d.getElementById("logaritmoX"),
    nLogaritmoN = d.getElementById("logaritmoN"),
    nLogaritmo10 = d.getElementById("logaritmo10"),
    nAbsoluto = d.getElementById("absoluto"),
    nElevado2 = d.getElementById("xElevado2"),
    nElevadox = d.getElementById("xElevadox"),
    nAns = d.getElementById("ans"),
    nPunto = d.getElementById("punto"),
    borrar = d.getElementById("del"),
    limpiarPantalla = d.getElementById("ac"),
    pantalla1 = d.getElementById("pantalla1"),
    pantalla2 = d.getElementById("pantalla2");
    marca = d.getElementById("marca"),
    // nCinco.innerHTML
d.addEventListener("click", e => {
    if(e.target === nCero || e.target === nUno || e.target === nDos || e.target === nTres || e.target === nCuatro || e.target === nCinco || e.target === nSeis || e.target === nSiete || e.target === nOcho || e.target === nNueve){
        console.log(e.target.innerHTML);
        numero = Number(e.target.innerHTML);
        pantalla2.value += numero;
    }
    if(e.target === nPunto){
        pantalla2.value += '.';
    }
    if(e.target === nAns){
        pantalla2.value = aux;
    }
    if(e.target === nAbsoluto){
        pantalla1.value = `|x|`;
        operacion = 'absoluto';
    }
    if(e.target === nSuma){
        numero1 = Number(pantalla2.value);
        pantalla1.value = pantalla2.value + '+';
        pantalla2.value = '';
        operacion = '+'
    }
    if(e.target === nMenos){
        numero1 = Number(pantalla2.value);
        pantalla1.value = pantalla2.value + '-';
        pantalla2.value = '';
        operacion = '-'
    }
    if(e.target === nDivision){
        numero1 = Number(pantalla2.value);
        pantalla1.value = pantalla2.value + '÷';
        pantalla2.value = '';
        operacion = '÷'
    }
    if(e.target === nMultiplicacion){
        numero1 = Number(pantalla2.value);
        pantalla1.value = pantalla2.value + 'x';
        pantalla2.value = '';
        operacion = 'x'
    }
    if(e.target === n10Elevado){
        numero1 = 10;
        pantalla1.value = '10^x';
        operacion = '10^x';
    }
    if(e.target === nElevadox){
        numero1 = Number(pantalla2.value);
        pantalla1.value = `${numero1}^x`;
        pantalla2.value = '';
        operacion = 'x^x';
    }
    if(e.target === nElevado2){
        numero1 = Number(pantalla2.value);
        pantalla1.value = `${numero1}^2`;
        pantalla2.value = '';
        operacion = 'x^2';
    }
    if(e.target === nLogaritmoX){
        numero1 = Number(pantalla2.value);
        pantalla1.value = `log ${numero1}, x`;
        pantalla2.value = '';
        operacion = 'logxX';
    }
    if(e.target === nLogaritmoN){
        pantalla1.value = `ln x`;
        operacion = 'ln';
    }
    if(e.target === nLogaritmo10){
        pantalla1.value = `log x`;
        operacion = 'log';
    }
    if(e.target === nIgual){
        numero2 = Number(pantalla2.value);
        console.log(numero2)
        switch(operacion) {
            case '+':
                pantalla1.value = `${numero1} + ${numero2} = ${sumar(numero1, numero2)}`;
                pantalla2.value = sumar(numero1, numero2);
                numero1 = sumar(numero1, numero2);
                break;
            case '-':
                pantalla1.value = `${numero1} - ${numero2} = ${restar(numero1, numero2)}`;
                pantalla2.value = restar(numero1, numero2);
                numero1 = restar(numero1, numero2);
                break;
            case '÷':
                pantalla1.value = `${numero1} ÷ ${numero2} = ${dividir(numero1, numero2)}`;
                pantalla2.value = dividir(numero1, numero2);
                numero1 = dividir(numero1, numero2);
                break;
            case 'x':
                pantalla1.value = `${numero1} x ${numero2} = ${multiplicar(numero1, numero2)}`
                pantalla2.value = multiplicar(numero1, numero2);
                numero1 = multiplicar(numero1, numero2);
                break;
            case '10^x':
                pantalla1.value = `${numero1}^${numero2} = ${potenciar(numero1, numero2)}`
                pantalla2.value = potenciar(numero1, numero2);
                numero1 = potenciar(numero1, numero2);
                break;
            case 'x^x':
                pantalla1.value = `${numero1}^${numero2} = ${potenciar(numero1, numero2)}`;
                pantalla2.value = potenciar(numero1, numero2);
                numero1 = potenciar(numero1, numero2);
                break;
            case 'x^x':
                pantalla1.value = `${numero1}^${numero2} = ${potenciar(numero1, numero2)}`;
                pantalla2.value = potenciar(numero1, numero2);
                numero1 = potenciar(numero1, numero2);
                break;
            case 'x^2':
                pantalla1.value = `${numero1}^${2} = ${potenciar(numero1, 2)}`;
                pantalla2.value = potenciar(numero1, 2);
                numero1 = potenciar(numero1, 2);
                break;
            case 'logxX':
                pantalla1.value = `log ${numero1}, ${numero2} = ${logaritmo(numero1, numero2)}`;
                pantalla2.value = logaritmo(numero1, numero2);
                numero1 = logaritmo(numero1, numero2);
                break;
            case 'ln':
                pantalla1.value = `ln ${numero2} = ${Math.log(numero2)}`;
                pantalla2.value = Math.log(numero2);
                numero1 = Math.log(numero2);
                break;
            case 'log':
                pantalla1.value = `log ${numero2} = ${Math.log10(numero2)}`;
                pantalla2.value = Math.log10(numero2);
                numero1 = Math.log10(numero2);
                break;
            case 'absoluto':
                pantalla1.value = `|${numero2}| = ${absoluto(numero2)}`;
                pantalla2.value = absoluto(numero2);
                numero1 = absoluto(numero2);
                break;
        }
        aux = numero1;

    }
    if(e.target === borrar){
        let borrar = pantalla2.value.substring(0,pantalla2.value.length-1);
        pantalla2.value = borrar;
    }
    if(e.target === limpiarPantalla){
        pantalla1.value = '';
        pantalla2.value = '';
        numero1 = 0, numero2 = 0;
    }
    if(e.target === marca){
        pantalla2.value = 'Hecho por Erick 🥵';
        setTimeout(e => pantalla2.value = '', 2000);
        
        
    }
});

function sumar(n1,n2){
    return n1+n2;
}
function restar(n1,n2){
    return n1-n2;
}
function multiplicar(n1,n2){
    return n1*n2;
}
function dividir(n1,n2){
    return n1/n2;
}
function potenciar(base, exponente){
    return Math.pow(base, exponente);
}
function logaritmo(base, argumento){
    return Math.log(argumento) / Math.log(base);
}
function absoluto(n1){
    return Math.abs(n1);
}