// 1. Captura o ID da URL na página de educação
const urlParams = new URLSearchParams(window.location.search);
const idRecebido = urlParams.get('id');

// 2. Elementos do DOM do player
const elementoTitulo = document.getElementById('video-titulo');
const elementoVideo = document.getElementById('video-frame');
const elementoCreditos = document.getElementById('video-creditos');

// Const que armazena os vídeos disponíveis
const bibliotecaVideos = {
    'aula1': {
        titulo: 'Bitcoin e Blockchain EXPLICADOS!',
        url: 'https://www.youtube.com/embed/DqPq8VFziEc?si=UqZV1HDAOO40Foll',
        fonte: 'https://www.youtube.com/embed/DqPq8VFziEc?si=UqZV1HDAOO40Foll'
    },
    'aula2': {
        titulo: 'A grande CRISE de 2008 e o bitcoin',
        url: 'https://www.youtube.com/embed/gTtNVXFgwPQ?si=oyhy1RJsGNuO2yMj',
        fonte: 'https://www.youtube.com/embed/gTtNVXFgwPQ?si=oyhy1RJsGNuO2yMj'
    },
    'aula3': {
        titulo: 'Como Comprar Bitcoin da Forma CERTA na Binance',
        url: 'https://www.youtube.com/embed/NcpA3q1c5B8?si=wDfb36m1mnpXFbB9',
        fonte: 'https://www.youtube.com/embed/NcpA3q1c5B8?si=wDfb36m1mnpXFbB9'
    },
    'aula4': {
        titulo: 'Como funciona o algoritmo do bitcoin?',
        url: 'https://www.youtube.com/embed/W5-fK-M_4gY?si=d62bU8m5ZthrCC_R',
        fonte: 'https://www.youtube.com/embed/W5-fK-M_4gY?si=d62bU8m5ZthrCC_R'
    },
    'aula5': {
        titulo: 'Dá pra COPIAR e COLAR BITCOIN? Entenda BLOCKCHAIN',
        url: 'https://www.youtube.com/embed/0Mt16eeCv78?si=rRuJnMGbMvGCWMfR',
        fonte: 'https://www.youtube.com/embed/0Mt16eeCv78?si=rRuJnMGbMvGCWMfR'
    },
    'aula6': {
        titulo: 'Como Guardar?',
        url: 'https://www.youtube.com/embed/rxKluJh-ifk?si=ms3kCby4VS-9Xps8',
        fonte: 'https://www.youtube.com/embed/rxKluJh-ifk?si=ms3kCby4VS-9Xps8'
    },
    'aula7': {
        titulo: 'MINERAR BITCOIN? Entenda como funciona',
        url: 'https://www.youtube.com/embed/neK8MtkySKU?si=SSh8TkHU0c0ESt6W',
        fonte: 'https://www.youtube.com/embed/neK8MtkySKU?si=SSh8TkHU0c0ESt6W'
    },
    'aula8': {
        titulo: 'Qual a diferença entre seed, chave-privada, chave-pública e endereços',
        url: 'https://www.youtube.com/embed/qj4Kfa5EUR0?si=r3xbDHCrN_7Rdq6n',
        fonte: 'https://www.youtube.com/embed/qj4Kfa5EUR0?si=r3xbDHCrN_7Rdq6n'
    },
    'aula9': {
        titulo: 'TAXAS DE TRANSAÇÃO DO BITCOIN PARA INICIANTES',
        url: 'https://www.youtube.com/embed/qOvHyp1HALo?si=4sdQIkW87W',
        fonte: 'https://www.youtube.com/embed/qOvHyp1HALo?si=4sdQIkW87W'
    },
    'aula10': {
        titulo: 'ON CHAIN vs LIGHTNING: entenda as diferenças entre as camadas da rede Bitcoin, tempos e taxas!',
        url: 'https://www.youtube.com/embed/-Sd8sd0mWGo?si=c8Z-diDVCy3IrHsu',
        fonte: 'https://www.youtube.com/embed/-Sd8sd0mWGo?si=c8Z-diDVCy3IrHsu'
    }
};

// 4. Execução
if (idRecebido && bibliotecaVideos[idRecebido]) {
    const video = bibliotecaVideos[idRecebido];
    
    //title
    if (elementoTitulo) elementoTitulo.textContent = video.titulo;
    
    // video player autoplay
    if (elementoVideo) elementoVideo.src = video.url + "?autoplay=1";
    
    // créditos (se houver)
    if (elementoCreditos) {
        const fonte = video.fonte || "Fonte desconhecida";
        elementoCreditos.textContent = fonte;
        elementoCreditos.href = video.fonte || "#";
    }
} else {
    if (elementoTitulo) elementoTitulo.textContent = "Vídeo não encontrado!";
    if (elementoVideo) elementoVideo.style.display = 'none';
}