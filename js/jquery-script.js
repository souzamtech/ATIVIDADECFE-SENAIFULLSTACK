// Aguarda o carregamento completo da página para iniciar os eventos
$(function () {

    // O formulário de cadastro começa oculto
    $("#section-cadastro").hide();

    // Exibe a área de cadastro quando o usuário solicitar
    $("#link-cadastro, #bt-mostrar-cadastro").on("click", function (e) {
        e.preventDefault();

        // Faz a troca entre login e cadastro com animação
        $("#section-login").fadeOut(300, function () {
            $("#section-cadastro").fadeIn(300);
        });
    });

    // Retorna para a tela de login ao clicar no botão ou link correspondente
    $("#link-login, #bt-voltar-login").on("click", function (e) {
        e.preventDefault();

        // Esconde o cadastro e mostra novamente o formulário de login
        $("#section-cadastro").fadeOut(300, function () {
            $("#section-login").fadeIn(300);
        });
    });

});