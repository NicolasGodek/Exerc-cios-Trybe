let n = 997;
let divisores = 0;

for (let i = 2; i < n; i += 1){
    if (n % i == 0){
        divisores += 1;
    }
};

if (divisores == 0){
    console.log("o número é primo")
}else{
    console.log("o número não é primo")
}