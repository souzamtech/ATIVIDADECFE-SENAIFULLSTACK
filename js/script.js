// Responsável por levar o usuário novamente ao início da página
window.topo = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Controla quando o botão de voltar ao topo deve aparecer
window.onscroll = function () {
    let botaoTopo = document.getElementById("voltar-topo");

    if (botaoTopo) {
        const posicaoScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (posicaoScroll > 100) {
            botaoTopo.style.display = "block";
        } else {
            botaoTopo.style.display = "none";
        }
    }
};

// Aguarda o carregamento completo da página antes de adicionar os eventos
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona todos os botões utilizados para realizar a compra
    const listaBotoes = document.querySelectorAll(".btn-comprar");

    listaBotoes.forEach(function (botao) {

        // Executa uma ação quando o botão for clicado
        botao.addEventListener("click", function () {

            // Localiza o card correspondente e obtém o nome do produto
            const corpoCard = this.closest(".card-body");
            const nomeJogo = corpoCard.querySelector(".card-title").textContent;

            // Exibe uma mensagem informando que o item foi adicionado
            alert(`O jogo "${nomeJogo}" foi adicionado ao carrinho!`);
        });

    });

});