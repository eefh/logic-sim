class Logic{
    argCounter = arr => {
        let num = 0;
        for (let i = 0; i < arr.length; i++){
            arr[i] === true ? num += 1 : 0;
        }
        return num;
    }
    not = (input) => !not;
    and(){
        return argCounter(arguments) === arguments.length;
    }
    or(){
        return argCounter(arguments) >= 1;
    }
    
    nand(){
        return argCounter(arguments) === 0;
    }
}

module.exports(Logic);