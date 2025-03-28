function calculo (){
    let nu = []
    let texto = input.value
    tentarDeNovo = true
    texto.toLowerCase()
    do{
        if(texto.slice(texto.length-1, texto.length) != "+" && texto.slice(texto.length-1, texto.length) != "-" && texto.slice(texto.length-1, texto.length) != "x" && texto.slice(texto.length-1, texto.length) != "÷"){
            for(let i = 0; i < texto.length; i++){
                if(texto.slice(i-1,i) === "+"){
                    let va = texto.slice(0,i-1)
                    nu.push(va)
                    nu.push("+")
                    texto = texto.slice(i,texto.length)
                    i = 0
                } else if(texto.slice(i-1,i) === "-"){
                    nu.push(texto.slice(0,i-1))
                    nu.push("-")
                    texto = texto.slice(i,texto.length)
                    i = 0
                } else if(texto.slice(i-1,i) === "x"){
                    nu.push(texto.slice(0,i-1))
                    nu.push("x")
                    texto = texto.slice(i,texto.length)
                    i = 0
                } else if(texto.slice(i-1,i) === "÷"){
                    nu.push(texto.slice(0,i-1))
                    nu.push("÷")
                    texto = texto.slice(i,texto.length)
                    i = 0
                }
            }
            tentarDeNovo = false
        } else {
            texto += 0
        }
    }while(tentarDeNovo)
    nu.push(texto.slice(0,texto.length))
    if(nu[nu.length-1]  === "+" || nu[nu.length-1] === "-" || nu[nu.length-1] === "x" || nu[nu.length-1] === "÷"){
        nu.pop()
    }
    console.log(nu)
    let valor
    for(let i = 0; i < nu.length; i++){
        switch (nu[i]){
            case "+":
                valor = Number(nu[i-1]) + Number(nu[i+1])
                nu.shift()
                nu.shift()
                nu.shift()
                nu.unshift("")
                nu[0] += valor
                i = 0
            break
            case "-":
                valor = Number(nu[i-1]) - Number(nu[i+1])
                nu.shift()
                nu.shift()
                nu.shift()
                nu.unshift("")
                nu[0] += valor
                i = 0
            break
            case "x":
                valor = Number(nu[i-1]) * Number(nu[i+1])
                nu.shift()
                nu.shift()
                nu.shift()
                nu.unshift("")
                nu[0] += valor
                i = 0
            break
            case "÷":
                valor = Number(nu[i-1]) / Number(nu[i+1])
                nu.shift()
                nu.shift()
                nu.shift()
                nu.unshift("")
                nu[0] += valor
                i = 0
            break
        }
    }
    position = 0
    console.log(nu)
    input.value = nu[0]
    operador = false
}

function paraInput (entrada){
    if(input.value.length === 0 && (entrada === "+" || entrada === "-" || entrada === "x" || entrada === "÷")){
        input.value += 0
        input.value += entrada
    } else if(!(entrada === "+" || entrada === "-" || entrada === "x" || entrada === "÷")){
        input.value += entrada
        operador = false
    } else {
        if(operador === false){
            input.value += entrada
            operador = true
        }
    }
}


let operador = false

const input = document.getElementById("input")