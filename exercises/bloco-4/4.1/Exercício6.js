let pecaXadrez = "PEÃO";

if (pecaXadrez == "rei"){
    console.log("Pode andar na horizontal, vertical e diagonal. Porém somente uma casa");
}else if (pecaXadrez.toLowerCase() == "rainha"){
    console.log("Pode andar na horizontal, vertical e diagonal.");
}else if (pecaXadrez.toLowerCase() == "bispo"){
    console.log("Pode andar na diagonal");
}else if (pecaXadrez.toLowerCase() == "torre"){
    console.log("Pode andar na vertical e horizontal");
}else if (pecaXadrez.toLowerCase()==  "cavalo"){
    console.log("Pode andar em L");
}else if (pecaXadrez.toLowerCase() == "peão"){
    console.log("Pode andar somente para frente, duas ou uma casa se for a primeira jogada e somente uma casa depois. Além de só poder comer na digonal com somente uma casa de distância");
}else{
    console.log("Não exite essa peça");
}