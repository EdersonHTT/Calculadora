function calculo (){
    let nu1 = []
    let texto = input.value
    texto.toLowerCase()
    for(let i = 0; i < texto.length; i++){
        if(texto.slice(i-1,i) === "+"){
            let va = texto.slice(0,i-1)
            nu1.push(va)
            nu1.push("+")
            texto = texto.slice(i,texto.length)
            i = 0
        } else if(texto.slice(i-1,i) === "-"){
            nu1.push(texto.slice(0,i-1))
            nu1.push("-")
            texto = texto.slice(i,texto.length)
            i = 0
        } else if(texto.slice(i-1,i) === "x"){
            nu1.push(texto.slice(0,i-1))
            nu1.push("x")
            texto = texto.slice(i,texto.length)
            i = 0
        } else if(texto.slice(i-1,i) === "÷"){
            nu1.push(texto.slice(0,i-1))
            nu1.push("+")
            texto = texto.slice(i,texto.length)
            i = 0
        } else {
            nu1.push(texto.slice(i,texto.length))
        }
    }
    console.log(nu1)
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
    // console.clear()
    // console.log(nu)
    position = 0
    input.value = nu[0]
}

function paraInput (entrada){
    if(nu[position].length === 0 && (entrada === "+" || entrada === "-" || entrada === "x" || entrada === "÷")){
        input.value += 0
        input.value += entrada
        nu[position] += 0
        nu.push(entrada)
        nu.push("")
        position += 2
    } else if(!(entrada === "+" || entrada === "-" || entrada === "x" || entrada === "÷")){
        input.value += entrada
        nu[position] += entrada
    } else {
        input.value += entrada
        nu.push(entrada)
        nu.push("")
        position += 2
    }
    console.clear()
    console.log(nu)
}

let position = 0
let nu = [""]

const input = document.getElementById("input")