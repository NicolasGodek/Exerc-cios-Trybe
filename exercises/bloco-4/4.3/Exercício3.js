let n = 5;

for (let linha = 1; linha <= n; linha += 1){
    let desenho = "";
    for (let coluna = 1; coluna <= n; coluna += 1){
        if (coluna <= n - linha){
            desenho +=  " ";
        }else {
            desenho += "*";
        }
    }
console.log(desenho);
};