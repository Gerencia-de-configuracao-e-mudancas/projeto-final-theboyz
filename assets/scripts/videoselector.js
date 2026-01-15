const botoes = document.querySelectorAll('.video-selector');


botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        
        const idDoVideo = this.getAttribute('data-video');
        window.location.href = `player.html?id=${idDoVideo}`;
    });
});