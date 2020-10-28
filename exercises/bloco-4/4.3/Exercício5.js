let n = 7;

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;
let base = [];

for (let linha = 0; linha <= n; linha += 1){
    base[linha] = "*";
}
for (let linha = 0; linha <= n; linha += 1){
    for (let coluna = 0; coluna <= n; coluna += 1){
        if (coluna > direita && coluna < esquerda){
            desenho +=  "*";
        }else {
            desenho += " ";
        }
    }
};