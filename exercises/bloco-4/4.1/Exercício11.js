let salario = 1000;

let inss = 0;

let is = 0;

if (salario > 0 && salario <= 1556.94){
    inss = salario * 0.08;
}else if (salario > 1556.94 && salario <= 2594.92){
    inss = salario * 0.09;
}else if (salario > 2594.92 && salario <= 5189.82){
    inss = salario * 0.11;
}else if (salario > 5189.82){
    inss = 570.88;
}else{
    inss = 0;
}

let salarioINSS = salario - inss;

if (salarioINSS >0 && salarioINSS <= 1903.98){
    is = 0;
}else if (salarioINSS > 1903.98 && salarioINSS <= 2826.65){
    is = (salarioINSS * 0.075) - 142.80;
}else if (salarioINSS > 2826.65 && salarioINSS <= 3751.05){
    is = (salarioINSS * 0.15) - 354.80;
}else if (salarioINSS > 3751.05 && salarioINSS <= 4664.68){
    is = (salarioINSS * 0.225) - 636.13;
}else if (salarioINSS > 4664.68){
    is = (salarioINSS * 0.275) - 869.36;
}else{
    is = 0
}

let salarioReal = salarioINSS - is;

    console.log(salarioReal);