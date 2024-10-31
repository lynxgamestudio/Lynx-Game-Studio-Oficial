//Definição do token 0 como base principal da imagem
var token = 0;
    //Todas as imagens que serão mostradas
    var images = [
        "../imagem/photo_1.jpg",
        "../imagem/photo_2.jpg",
        "../imagem/photo_3.jpg",
        "../imagem/photo_4.jpg",
        "../imagem/photo_5.jpg"
    ];

    //Avançar na imagem
    function next() {
        // Avança para a próxima imagem
        token = (token + 1) % images.length;

        // Define a opacidade como 0
        document.getElementById("img").style.opacity = 0;

        //Animação que realiza a troca de imagem
        setTimeout(function(){
             // Altera a imagem
            document.getElementById("img").src = images[token];
            // Define a opacidade como 1 após a troca
            document.getElementById("img").style.opacity = 1;
        }, 600); // Espera 0.6s (tempo da transição) antes de trocar a imagem
    }

    //Retroceder na imagem
    function opposite() {
        // Retroceder para a imagem anterior
        token = (token - 1 + images.length) % images.length;

        // Define a opacidade como 0
        document.getElementById("img").style.opacity = 0;

        //Animação que realiza a troca de imagem
        setTimeout(function () {
            // Altera a imagem
            document.getElementById("img").src = images[token];
            // Define a opacidade como 1 após a troca
            document.getElementById("img").style.opacity = 1;
        }, 300); // Espera 0.3s (tempo da transição) antes de trocar a imagem
    }
