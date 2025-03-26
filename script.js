function calculo (){
    
}

function paraInput (entrada){
    if(texto.length === 0 && typeof entrada === "string"){
        input.value += 0
        texto += input.value
    }

    if(typeof entrada === "number" || typeof operador != typeof entrada){
        input.value += entrada
        texto += input.value
        operador = entrada
    }
}

let operador
let texto = ""

const input = document.getElementById("input")