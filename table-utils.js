//03 SEPARATE TABLE
var args = process.argv.slice(2)
function multiply (number){
    var result=0;
    for (var i=1;i<=10; i++){
        result=number*10;
        console.log(`${number} * ${i} = ${result}`);
    }

}

multiply(parseInt (args[0]))

function multiply1 (number1){
    var result=0;
    for (var i=1;i<=10; i++){
        result=number1+10;
        console.log(`${number1} + ${i} = ${result}`);
    }

}

multiply1(parseInt (args[0])),


  module.exports = {
    multiply,
    multiply1,
  };
