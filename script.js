// Selecionando todos os botões de avanço
const avanca = document.querySelectorAll('.btn-proximo');

// Adicionando evento de clique em cada botão de avanço
avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo'); // Seleciona o passo atual
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo'); // Obtém o próximo passo

        atual.classList.remove('ativo'); // Remove a classe 'ativo' do passo atual
        document.getElementById(proximoPasso).classList.add('ativo'); // Adiciona a classe 'ativo' ao próximo passo
    });
});

// Reinicia o jogo ao clicar o botão de reinício
const reiniciarBtn = document.querySelector('#reiniciar-btn'); // Seleciona o botão de reinício

if (reiniciarBtn) {
    reiniciarBtn.addEventListener('click', () => {
        // Seleciona o passo atual (com a classe ativo)
        const atual = document.querySelector('.ativo');
        if (atual) {
            atual.classList.remove('ativo'); // Remove a classe 'ativo' do passo atual
        }

        // Adiciona a classe 'ativo' ao primeiro passo (passo-0)
        const primeiroPasso = document.getElementById('passo-0');
        if (primeiroPasso) {
            primeiroPasso.classList.add('ativo');
        }
    });
}
