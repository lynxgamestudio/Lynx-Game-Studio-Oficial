// Token para que quando ela for verdadeira e clicar novamente ao botão "Open-Modal", fechar o modal.
// Também dará falsa quando clicado fora do modal, afim de evitar conflito de condição quando clicado novamente para abrir
var token = false;

// Função de abrir e fechar o Modal
function openModal(){
    // Caso o token estiver como falso (Não aberto), abrir o modal
    if(token == false){
        // Dando o token como verdadeiro para pode-lo fechar na próxima condição.
        token = true;

        // Alterando o display como visível.
        document.getElementById("myModal").style.display = "block";
    }

    // Caso o token estiver como verdadeiro (aberto), fechar o modal
    else{
        // Dando o token como falso para pode-lo abrir na próxima condição.
        token = false;

        // Alterando o display como invisível.
        document.getElementById("myModal").style.display = "none";
    }
}

// Caso clicado fora da área do modal, fecha-lo.
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        // Dando o token como falso para pode-lo abrir na próxima condição.
        token = false;

        // Alterando o display como invisível.
        document.getElementById("myModal").style.display = "none";
    }
}