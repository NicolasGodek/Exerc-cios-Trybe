function createOptions(){
    let option = document.createElement('option');
    let states = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
    for (let i in states) {
        let option = document.createElement('option');
        option.innerHTML = states[i];
        document.querySelector('#estados').appendChild(option);
    }
}

createOptions();