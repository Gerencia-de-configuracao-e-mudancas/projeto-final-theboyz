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
        titulo: 'Fundamentos do Bitcoin',
        url: 'https://www.youtube.com/embed/erXQAH1L1Zs',
        fonte: 'https://youtu.be.com/embed/exemplo1'
    },
    'aula2': {
        titulo: 'Algoritmo e Funcionamento Técnico',
        url: 'https://www.youtube.com/embed/exemplo2'
    },
    'aula3': {
        titulo: 'Autocustódia (Como Guardar)',
        url: 'https://www.youtube.com/embed/exemplo2'
    },
    'aula4': {
        titulo: 'Mineração de Bitcoin',
        url: 'https://www.youtube.com/embed/exemplo2'
    },
    'aula5': {
        titulo: 'Chaves Criptográficas',
        url: 'https://www.youtube.com/embed/exemplo2'
    },
    'aula6': {
        titulo: 'Transações',
        url: 'https://www.youtube.com/embed/exemplo2'
    },
    'aula7': {
        titulo: 'Lightning Network',
        url: 'https://www.youtube.com/embed/exemplo2'
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