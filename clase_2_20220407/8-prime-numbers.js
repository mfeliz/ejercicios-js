var prompt = require('prompt');
prompt.start();

prompt.get(['valor'], function (err, result) {
    let esPrimo = false;
    let valorInt = parseInt(result.valor);

    if (valorInt <= 3){
        esPrimo = true;
    }else{
        for (let i = 2; i < valorInt; i++) {
            if (valorInt%i == 0){
                esPrimo = false;
                break;
            }else{
                esPrimo = true;
            }
        }
    }

    if (esPrimo){
        console.log("El " + valorInt + " es un numero primo!");
    }else{
        console.log("El " + valorInt + " no es un numero primo!");
    }
});