function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

//1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

function daysOfTheMounth() {
    let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (let i in dezDaysList) {
        let liDays = document.createElement('li');
        liDays.innerText = dezDaysList[i];
        if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
            liDays.classList = 'day holiday';
        } else if (dezDaysList[i]=== 4 || dezDaysList[i] === 11 || dezDaysList[i]=== 18) {
            liDays.classList = 'day friday';
        } else if (dezDaysList[i] === 25) {
            liDays.classList = 'day holiday friday';
        } else {
            liDays.classList = 'day';
        }
        document.querySelector('#days').appendChild(liDays);
    }
}

daysOfTheMounth();

//2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function feriadosButton(nome) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    newButton.innerHTML = nome;
    newButton.id = 'btn-holiday';
    buttonsContainer.appendChild(newButton);
}

feriadosButton('Feriados');

// 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function mudarCor() {
    let clicar = document.getElementById('btn-holiday');
    let feriados = document.getElementsByClassName('holiday');
    clicar.addEventListener('click', function() {
        for (let i in feriados) {
            if (feriados[i].style.backgroundColor !== 'green') {
                feriados[i].style.backgroundColor = 'green';
            } else {
                feriados[i].style.backgroundColor = 'rgb(238,238,238)';
            }
        }
    })
}

mudarCor();

// 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function sexta(nome) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    newButton.innerHTML = nome;
    newButton.id = 'btn-friday';
    buttonsContainer.appendChild(newButton);
}

sexta('Sexta-feira');

// 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function mudarTexto() {
    let clicar = document.getElementById('btn-friday');
    let sextas = document.getElementsByClassName('friday');
    let arraySexta = [4, 11, 18, 25];

    clicar.addEventListener('click', function() {
        for (let i in sextas) {
            if (sextas[i].innerHTML !== 'Sextou') {
                sextas[i].innerHTML = 'Sextou';
            } else {
                sextas[i].innerHTML = arraySexta[i];
            }
        }
    })
}

mudarTexto();

// 6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.

function mousePassa() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    })
};
  
function mouseSai() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function(event) {
        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '20px';
    })
};

mousePassa();
mouseSai();

// 7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function tarefa(tarefa) {
    let pai = document.querySelector('.my-tasks');
    let elementSpan = document.createElement('span');
    elementSpan.innerHTML = tarefa
    pai.appendChild(elementSpan);
}

tarefa('Cozinhar');

// 8. Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function trocarCor(cor) {
    let pai = document.querySelector('.my-tasks');
    let elementDiv = document.createElement('div')
    elementDiv.className = 'task'
    elementDiv.style.backgroundColor = cor;
    pai.appendChild(elementDiv);
}

trocarCor('blue');

// 9. Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function selecionaTarefa() {
    let task = document.querySelector('.task');

    task.addEventListener('click', function(event) {
        let taskSelected = document.querySelector('.selected');
        if (taskSelected === null) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    })
}

selecionaTarefa();

// 10. Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

function corDia(){
    let day = document.querySelector('#days');
    day.addEventListener('click', function(event) {
        let taskSelected = document.querySelector('.selected');
        if (taskSelected !== null){
            if (event.target.style.color === taskSelected.style.backgroundColor) {
                event.target.style.color = 'rgb(119,119,119)';
            } else {
                event.target.style.color = taskSelected.style.backgroundColor;
            }
        }
    })    
}

corDia();

// Bônus. Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: keyCode.

