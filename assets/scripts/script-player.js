// 1. Captura o ID da URL na página de educação
const urlParams = new URLSearchParams(window.location.search);
const idRecebido = urlParams.get('id');

// 2. Elementos do DOM do player
const elementoTitulo = document.getElementById('video-titulo');
const elementoVideo = document.getElementById('video-frame');
const elementoCreditos = document.getElementById('video-creditos');

// Renderização condicional do vídeo, arquivo .json com fetch
async function carregarBibliotecaVideos() {
    const resposta = await fetch('assets/json-db/aulas-lib.json');
    const dados = await resposta.json();
    return dados;
}
carregarBibliotecaVideos().then(bibliotecaVideos => {
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
});

