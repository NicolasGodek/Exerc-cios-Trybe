function verificacaoDaPalavra(palavra){
    let array = palavra.split("");
    let palindromo = false;
    for (let i =0; i < palavra.length; i += 1){
        if (array[i] == palavra[(palavra.length - 1) - i]){
            palindromo = true;
        }
    }
    return palindromo;
}

console.log(verificacaoDaPalavra("arara"));

function localDoMaiorValor(array){
    let indiceMaior = array[0];
    for (let key in array){
        if (array[indiceMaior] < array[key]){
            indiceMaior = key;
        }
    }
    return indiceMaior;
};

console.log(localDoMaiorValor([2, 3, 6, 7, 10, 1]))

function localDoMenorValor(array){
    let indiceMenor = array[0];
    for (let key in array){
        if (array[indiceMenor] > array[key]){
            indiceMenor = key;
        }
    }
    return indiceMenor;
};

console.log(localDoMenorValor([2, 4, 6, 7, 10, 0, -3]));

function maiorNome(array){
    let maiorNome = array[0];
    for (let key in array){
        if (maiorNome.length < array[key].length){
            maiorNome = array[key];
        }
    }
    return maiorNome;
}

console.log (maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function maisRepetido(numeros){
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let i in numeros){
        let verificaNumero = numeros[i];
        for (let i2 in numeros){
            if (verificaNumero === numeros[i2]){
            contNumero++;
        }
        }
        if (contNumero > contRepetido){
            contRepetido = contNumero;
            indexNumeroRepetido = i;
        }
        contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

function somatoria(n){
    soma = 0;
    for (let i = 1; i <= n ; i += 1){
        soma += i;
    }
    return soma;
}

console.log(somatoria(5));

function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split("").reverse().join("");
    let inversoFimPalavra = fimPalavra.split("").reverse().join("");

    for (let i = 0; i < inversoFimPalavra.length; i += 1) {
        if (inversoPalavra[i] == inversoFimPalavra[i]) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(verificaFimPalavra("trybe", "be"));

console.log(verificaFimPalavra("joaofernando", "fernan"));