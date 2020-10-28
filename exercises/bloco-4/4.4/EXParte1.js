let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
 
console.log('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim';

console.log(info);

for (let key in info){
  console.log(key);
};

for (let key in info){
  console.log(info[key]);
};

info.personagem += ' e Tio Patinhas';
info.origem += " e Christmas on Bear Mountain, Dell's Four Color Comics #178";
info.nota += ' e O último MacPatinhas';

info.recorrente = 'Ambos';

console.log(info);