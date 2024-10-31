// Definição do token 0 como base principal da imagem
var token = 0;

// Imagens de cada personagem
var images = [
    // Michael Alden
     "../imagem/character.png",
    // Melissa Cruz
    "../imagem/melissa.png",
    // Antony Andrew
    "../imagem/character2.png",
    // Castiel Rivera
    "../imagem/character3.png",
    // Willian Stone
    "../imagem/william.png",
    // Sarah Evas
    "../imagem/character4.png",
];

// Nomes de cada personagem
var names = [
    "Michael Alden",
    "Melissa Cruz",
    "Antony Andrew",
     "Castiel Rivera",
    "Willian Stone",
    "Sarah Evans"
];

// Imagens de cada personagem
var describe = [
    // Michael Alden
    'Michael Alden é um jovem adolescente protagonista do jogo "Burning Minds". Devido a más relações com seus pais e um acidente fatal ocorrido no parque, Michael presencia uma forma negativa de ti e com isto ele basta explorar em seus sonhos em busca de respostas, enquanto luta contra os seus transtornos',
    // Melissa Cruz
    'Melissa Cruz é um dos amigos de Michael, uma garota bem hiperativa, competitiva, simpatica e comunicativa, trazendo uma energia para o grupo de amigos presentes no acampamento.',
    // Antony Andrew
    'Antony Andrew é um dos amigos de Michael, um homem bem definido de corpo mostrando uma aura de seriedade e tranquilidade, mas não tira o fato de ser bem extrovertido, sábio e comunicador.',
    // Castiel Rivera
    'Castiel Rivera é um dos amigos de Michael, um rapaz bem reservado, entretanto, torna-se outra pessoa quando próximo com seus amigos, se tornando engraçado, fazendo diversas brincadeiras, trazendo alegria ao grupo de amigos além de amar e competir em jogos.',
    // Willian Stone
    'Willian Stones é um dos amigos de Michael, um rapaz aparentemente frio, mas não tira o fato de ser carinhoso com os próximos. Devido sua frieza, suas atitudes não é la grande coisa, por agir rancoroso e responder sarcasticamente, além de seus problemas de raiva.',
    // Sarah Evans
    'Sarah Evan é um dos amigos de Michael, uma garota tranquila, gentil e carinhosa, uma bela amiga para se ter conselhos, possui uma paixão pela música, leitura e a natureza, além por um amor profundo por Michael.'
]

// Cores de fundo dos personagens
var color = [
    // Michael Alden
    "linear-gradient(28deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(252,209,159,1) 0%, rgba(207,122,91,1) 25%, rgba(33,33,33,1) 65%, rgba(33,33,33,1) 100%)",
    // Melissa Cruz
    "linear-gradient(28deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(76,113,255,1) 0%, rgba(114,91,207,1) 25%, rgba(33,33,33,1) 65%, rgba(33,33,33,1) 100%)",
    // Antony Andrew
    "linear-gradient(28deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(76,255,202,1) 0%, rgba(91,171,207,1) 25%, rgba(33,33,33,1) 65%, rgba(33,33,33,1) 100%)",
    // Castiel Rivera
    "linear-gradient(28deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(252,209,159,1) 0%, rgba(173,207,91,1) 25%, rgba(33,33,33,1) 65%, rgba(33,33,33,1) 100%)",
    // Willian Stone
    "linear-gradient(28deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(255,95,95,1) 0%, rgba(240,111,111,1) 25%, rgba(33,33,33,1) 65%, rgba(33,33,33,1) 100%)",
    // Sarah Evans
    "linear-gradient(28deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(151,95,255,1) 0%, rgba(240,111,189,1) 28%, rgba(33,33,33,1) 65%, rgba(33,33,33,1) 100%)",
];

    //Avançar na imagem
    function next() {
        // Avança para a próxima imagem
        token = (token + 1) % images.length;

        // Define a opacidade como 0
        document.getElementById("img").style.opacity = 0;
        document.getElementById("name").style.opacity = 0;
        document.getElementById("txt-describe").style.opacity = 0;

        //Animação que realiza a troca de imagem
        setTimeout(function(){
             // Altera a imagem
            document.getElementById("img").src = images[token];
            document.getElementById("name").innerHTML = names[token];
            document.getElementById("txt-describe").innerHTML = describe[token];
            document.getElementById("img").style.background = color[token];

            // Define a opacidade como 1 após a troca
            document.getElementById("img").style.opacity = 1;
            document.getElementById("name").style.opacity = 1;
            document.getElementById("txt-describe").style.opacity = 1;
        }, 300); // Espera 0.3s (tempo da transição) antes de trocar a imagem
    }

    //Retroceder na imagem
    function opposite() {
        // Retroceder para a imagem anterior
        token = (token - 1 + images.length) % images.length;

        // Define a opacidade como 0
        document.getElementById("img").style.opacity = 0;
        document.getElementById("name").style.opacity = 0;
        document.getElementById("txt-describe").style.opacity = 0;

        //Animação que realiza a troca de imagem
        setTimeout(function () {
            // Altera a imagem
            document.getElementById("img").src = images[token];
            document.getElementById("name").innerHTML = names[token];
            document.getElementById("txt-describe").innerHTML = describe[token];
            document.getElementById("img").style.background = color[token];

            // Define a opacidade como 1 após a troca
            document.getElementById("img").style.opacity = 1;
            document.getElementById("name").style.opacity = 1;
            document.getElementById("txt-describe").style.opacity = 1;
        }, 300); // Espera 0.3s (tempo da transição) antes de trocar a imagem
    }