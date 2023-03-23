let inputOne = document.getElementById("inputOne")
let inputTwo = document.getElementById("inputTwo")
let inputThree = document.getElementById("inputThree")
let inputFour = document.getElementById("inputFour")
let btn = document.getElementById("btn")
let bttn = document.getElementById("bttn")

// btn.addEventListener("click", function operate(){
//     let numeroUno = Number(inputOne.value)
//     let numeroDos = Number(inputTwo.value)

//     if(isNaN(numeroUno) || isNaN(numeroDos)){

//         alert("ingresa solo numeros por favor")

//     }else if(inputThree.value === "+"){
//         inputFour.value = numeroUno + numeroDos
//     }else if(inputThree.value === "-"){
//         inputFour.value = numeroUno - numeroDos
//     }else if(inputThree.value === "*"){
//         inputFour.value = numeroUno * numeroDos
//     }else if(inputThree.value === "/"){
//         inputFour.value = numeroUno / numeroDos
//     }else{
//         alert("Por favor ingresa operaciones correctas!")
//     }

//     }

// )


function suma(a , b) {
    return a + b
}

function rest(a , b) {
    return a - b
}

function mult(a , b) {
    return a * b
}

function divi(a , b) {
    return a / b
}

btn.addEventListener("click", function operar(){

    let numeroUno = Number(inputOne.value)
    let numeroDos = Number(inputTwo.value)


    if(isNaN(numeroUno) || isNaN(numeroDos)){

        alert("ingresa solo numeros por favor")

    }else if(inputThree.value === "+"){
        inputFour.value = suma(numeroUno,numeroDos)
    }else if(inputThree.value === "-"){
        inputFour.value = rest(numeroUno,numeroDos)
    }else if(inputThree.value === "*"){
        inputFour.value = mult(numeroUno,numeroDos)
    }else if(inputThree.value === "/"){
        inputFour.value = divi(numeroUno,numeroDos)
    }else{
        alert("Por favor ingresa operaciones correctas!")
    }

    }

)

bttn.addEventListener("click", function (){

    inputOne.value = ""
    inputTwo.value = ""
    inputThree.value = ""
    inputFour.value = ""
})





