const botoes = document.querySelectorAll('.botao'); // const = variavel constante que não pode ser mudada; querySelectorAll = Seleciona todos as classes com o nome entre parenteses e atribui a variável criada
const personagens = document.querySelectorAll(".personagem");
    
botoes.forEach((botao, indice) => {         
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");       
    });
});   


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

