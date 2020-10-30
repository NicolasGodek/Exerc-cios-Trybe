function verificacaoDoNumero(x){
    if (x > 0){
        verificacaoDoNumero = "O número é positivo";
    }else if (x < 0){
        verificacaoDoNumero = "O número é negativo";
    }else{
        verificacaoDoNumero = "O número é igual a 0";
    };
    return verificacaoDoNumero;
}

console.log(verificacaoDoNumero(0));