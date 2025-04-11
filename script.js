function calculo (){
    let nu = []
    let texto = input.value
    tentarDeNovo = true
    texto.toLowerCase()
    do{
        if(texto.slice(texto.length-1, texto.length) != "+" && texto.slice(texto.length-1, texto.length) != "-" && texto.slice(texto.length-1, texto.length) != "x" && texto.slice(texto.length-1, texto.length) != "÷" && texto.slice(texto.length-1, texto.length) != "%" && texto.slice(texto.length-1, texto.length) != "√"){
            for(let i = 0; i < texto.length; i++){
                switch(texto.slice(i-1,i)){
                    case "+":
                        nu.push(texto.slice(0,i-1))
                        nu.push("+")
                        texto = texto.slice(i,texto.length)
                        i = 0
                    break
                    case "-":
                        nu.push(texto.slice(0,i-1))
                        nu.push("-")
                        texto = texto.slice(i,texto.length)
                        i = 0
                    break
                    case "x":
                        nu.push(texto.slice(0,i-1))
                        nu.push("x")
                        texto = texto.slice(i,texto.length)
                        i = 0
                    break
                    case "÷":
                        nu.push(texto.slice(0,i-1))
                        nu.push("÷")
                        texto = texto.slice(i, texto.length)
                        i = 0
                    break   
                    case "%":
                        nu.push(Number(texto.slice(0,i-1))/100)
                        texto = texto.slice(i, texto.length)
                        i = 0
                    break
                    case "√":
                        nu.push(Number(texto.slice(0,i-1))**(1/2))
                        texto = texto.slice(i, texto.length)
                        i = 0
                    break
                }
            }
            tentarDeNovo = false
        } else {
            texto += 0
        }
    }while(tentarDeNovo)
    nu.push(texto.slice(0,texto.length))
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
    if(nu[0] === "Infinity" || nu[0] === "NaN" || nu[0] === "undefined"){
        erroCalc[0].style.display = "flex"
        nu[0] = ""
        setTimeout(() => {
            erroCalc[0].style.display = "none"
        }, 1500);
    }
    console.log(nu)
    input.value = nu[0]
    operador = false
}

function paraInput (entrada){
    erroCalc[0].style.display = "none"

    if(input.value.length === 0 && (entrada === "+" || entrada === "-" || entrada === "x" || entrada === "÷") && entrada !="√" && entrada !="%"){
        input.value += 0
        input.value += entrada
        operador = true
    } else if(!(entrada === "+" || entrada === "-" || entrada === "x" || entrada === "÷") && entrada !="√" && entrada !="%"){
        input.value += entrada
        operador = false
    } else if(entrada === "√" || entrada ==="%"){
        input.value += entrada
        calculo()
    } else {
        if(operador === false){
            input.value += entrada
            operador = true
        }
    }
}

function apagar(){
    input.value = input.value.slice(0, input.value.length-1)
    operador = false
}

let operador = false

const input = document.getElementById("input")
const erroCalc = document.getElementsByClassName("error")