let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = 0;

let numeroImpar = 0;

for (let i = 0; i < numbers.length; i += 1 ){
    if (numbers[i] % 2 != 0){
        console.log(numbers[i])
        numeroImpar += 1;
    }
}

console.log("Existem " + numeroImpar + " número(s) ímpar(es)");