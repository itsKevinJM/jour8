function calculate (number1, number2, operateur){

if (operateur === "+"){
    console.log(number1 + number2)
}else if (operateur === "-"){
    console.log(number1 - number2)
}else if (operateur === "/"){
    console.log(number1 / number2)
}else if (operateur === "%"){
    console.log(number1 % number2)
}else if (operateur === "x"){
    console.log(number1 * number2)
} else {
    console.log("error")
}
console.log(number1, number2, operateur)
}


var parameters = process.argv.slice(2)
console.log(parameters)
var parameter1 = parseInt(parameters[0])
var parameter2 = parseInt(parameters[1])
var parameter3 = parameters[2]
calculate(parameter1, parameter2, parameter3)

