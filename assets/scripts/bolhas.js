if (document.body) {
  document.body.style.overflow = "hidden";
} else {
  // Se o body não existe ainda, espera ele carregar para travar
  document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflow = "hidden";
  });
}

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  // Segurança: Se não achar o preloader, para aqui para não dar erro
  if (!preloader) return;

  // Tempo de exibição forçado (3 segundos)
  const tempoDeExibicao = 3000;

  setTimeout(() => {
    // Adiciona a classe que faz a transição de opacidade (fade-out)
    preloader.classList.add("loaded");

    // Espera a transição do CSS acabar (0.5s)
    setTimeout(() => {
      // Remove o elemento da tela
      preloader.style.display = "none";

      // DESTRAVA a rolagem da página
      if (document.body) {
        document.body.style.overflow = "";
      }
    }, 500);
  }, tempoDeExibicao);
});
