let pecaXadrez = "peão";

pecaXadez = Lcase(pecaXadrez);

if (pecaXadrez == "rei"){
    console.log("Pode andar na horizontal, vertical e diagonal. Porém somente uma casa");
}else if (pecaXadrez == "rainha"){
    console.log("Pode andar na horizontal, vertical e diagonal.");
}else if (pecaXadrez == "bispo"){
    console.log("Pode andar na diagonal");
}else if (pecaXadrez == "torre"){
    console.log("Pode andar na vertical e horizontal");
}else if (pecaXadrez ==  "cavalo"){
    console.log("Pode andar em L");
}else if (pecaXadrez == "peão"){
    console.log("Pode andar somente para frente, duas ou uma casa se for a primeira jogada e somente uma casa depois. Além de só poder comer na digonal com somente uma casa de distância");
}else{
    console.log("Não exite essa peça");
}