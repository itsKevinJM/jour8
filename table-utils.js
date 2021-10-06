//03 SEPARATE TABLE
var args = process.argv.slice(2)
function multiply (number){
    var result=0;
    for (var i=1;i<=10; i++){
        result=number*10;
        console.log(`${number} * ${i} = ${result}`);
    }
}

function multiply1 (number){
    var result=0;
    for (var i=1;i<=10; i++){
        result=number+10;
        console.log(`${number} + ${i} = ${result}`);
    }
}

{
multiply(parseInt (args[0]))
multiply1(parseInt (args[0]))
}


