
const botoes = document.querySelectorAll('.botao');
const abas = document.querySelectorAll('.aba-conteudo');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        botoes.forEach(b => b.classList.remove('ativo'));
        abas.forEach(a => a.classList.remove('ativo'));


        botao.classList.add('ativo');
        abas[indice].classList.add('ativo');
    });
});

const datasFinais = [
    new Date(2026, 0, 0),
    new Date(2026, 0, 0),  
    new Date(2026, 0, 0), 
    new Date(2026, 0, 0)  
];

function calculaTempo(dataObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = dataObjetivo - tempoAtual;

    if (tempoFinal < 0) {
        return [0, 0, 0, 0];
    }

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
    for (let i = 0; i < datasFinais.length; i++) {
        const resultado = calculaTempo(datasFinais[i]);

        document.getElementById(`dias${i}`).textContent = resultado[0];
        document.getElementById(`horas${i}`).textContent = resultado[1];
        document.getElementById(`min${i}`).textContent = resultado[2];
        document.getElementById(`seg${i}`).textContent = resultado[3];
    }
}

atualizaCronometro();
setInterval(atualizaCronometro, 1000);