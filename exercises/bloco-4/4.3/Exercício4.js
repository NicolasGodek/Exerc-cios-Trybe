let n = 5;

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let linha = 0; linha <= meio; linha += 1){
    let desenho = "";
    for (let coluna = 0; coluna <= n; coluna += 1){
        if (coluna > direita && coluna < esquerda){
            desenho +=  "*";
        }else {
            desenho += " ";
        }
    }
console.log(desenho);
direita -= 1;
esquerda += 1;
};