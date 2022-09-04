const argCounter = arr => {
    let num = 0;
    for (let i = 0; i < arr.length; i++){
        arr[i] === true ? num += 1 : 0;
    }
    return num;
}
const not = (input) => !not;
function and(){
    return argCounter(arguments) === arguments.length;
}
function or(){
    return argCounter(arguments) >= 1;
}

function nand(){
    return argCounter(arguments) === 0;
}

console.log(nand(false, false, false, false, false, false));