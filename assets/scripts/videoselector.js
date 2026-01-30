const botoes = document.querySelectorAll('.video-selector');
const vistos = JSON.parse(localStorage.getItem('videosVistos')) || [];

botoes.forEach(botao => {


    const id = botao.getAttribute('data-video');
        if (vistos.includes(id)) {
            botao.classList.add('border', 'border-success', 'border-4');
            const texto = botao.querySelector('p');
            if (texto) {
                texto.classList.replace('text-light', 'text-success');
                texto.innerHTML += ' ✅';
            }
        }

    botao.addEventListener('click', function() {
        
        const idDoVideo = this.getAttribute('data-video');
        if (!vistos.includes(idDoVideo)) {
         vistos.push(idDoVideo); // Adiciona o ID na lista
         localStorage.setItem('videosVistos', JSON.stringify(vistos));
        }       
        window.location.href = `player.html?id=${idDoVideo}`;
    });

});

