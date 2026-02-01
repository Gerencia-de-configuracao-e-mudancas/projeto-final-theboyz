# Náutilo 21

> "A verdadeira riqueza não está no ouro, mas na liberdade." — _Mobilis in Mobili_

## 📖 Sobre o Projeto

O **Náutilo 21** é um projeto desenvolvido para a disciplina de **Gerência de Configuração e Mudanças (GCM)** do IFPB - Campus Cajazeiras.

O tema une a filosofia de soberania individual do Bitcoin à clássica obra _"20 Mil Léguas Submarinas"_. Assim como o submarino _Nautilus_ permitia navegar com liberdade pelos oceanos, o Bitcoin é a ferramenta para navegar com autonomia nos mares da economia digital. O número "21" faz alusão ao limite máximo de 21 milhões de unidades de Bitcoin.

O site possui fins estritamente educacionais, oferecendo curadoria de conteúdo sobre blockchain, notícias e conceitos fundamentais.

## 🚀 Acesso ao Projeto (Github Pages)

O projeto está publicado e funcional. Acesse através do link abaixo:

🔗 **[CLIQUE AQUI PARA ACESSAR O NÁUTILO 21](https://gerencia-de-configuracao-e-mudancas.github.io/projeto-final-theboyz/index.html)**

## 🛠️ Tecnologias e Implementação

O projeto priorizou o desenvolvimento manual (Vanilla) aliado a frameworks de produtividade como o **BootStrap**, demonstrando domínio sobre a manipulação do DOM e parâmetros de URL.

- **HTML5 Semântico**: Estrutura acessível e organizada.
- **CSS3 Avançado**: Uso de _Keyframes_ para animações (logo giratório, bolhas), _CSS Variables_ e _Gradients_.
- **Bootstrap 5.3.8**: Grid system responsivo, componentes de Navbar e Accordion.
- **JavaScript (ES6+)**:
  - **Módulos**: Organização do código em arquivos funcionais (`script-player.js`, `bolhas.js`, `videoselector.js`).
  - **Fetch API**: Implementada para carregar a `bibliotecaVideos` a partir do ficheiro `aulas-lib.json`, desacoplando os dados da lógica de visualização.
  - **LocalStorage**: Utilizado para gerir o estado de progresso das aulas de forma persistente.
  - **Dynamic Rendering**: O player de vídeo não utiliza páginas estáticas repetidas; ele renderiza o conteúdo (iframe/título) dinamicamente lendo parâmetros `URLSearchParams` da barra de endereço.
  - **DOM Manipulation**: Controle de eventos de carregamento (`window.load`) e travas de rolagem (`body overflow`) para a tela de "Pressurização" (Preloader).

## ✨ Funcionalidades

1.  **Imersão (Preloader):** Tela de carregamento temática ("Pressurizando...") com animação de bolhas e bloqueio de interação até o carregamento total.
2.  **Galeria Dinâmica & Escalável:** Sistema onde a biblioteca de vídeos é carregada de forma assíncrona de um banco de dados local (JSON), facilitando a expansão do catálogo sem alterar o código principal.
3.  **Persistência de Progresso:** Implementação de um sistema que marca visualmente (com um "✅") as aulas já assistidas pelo utilizador, utilizando o armazenamento local do navegador.
4.  **Interface de Player Integrada:** O player exibe dinamicamente o título, o vídeo e os créditos da fonte original conforme a aula selecionada via URL.
5.  **Feed de Notícias:** Seção informativa utilizando componentes interativos (`details`/`summary` estilizados) para uma navegação limpa.
6.  **Responsividade:** Layout adaptável para dispositivos móveis, tablets e desktops.

## 👥 Equipe de Desenvolvimento

- **Francisco Sãmily**
- **Manoel Victor**
- **Pedro Rennan**

## ⚙️ Padrão de Commits

Seguindo as boas práticas de GCM, utilizamos o **Github Flow** e **Conventional Commits** para manter o histórico organizado:

- `feat`: Novas funcionalidades (ex: lógica do player dinâmico e persistência de progresso).
- `fix`: Correção de bugs (ex: ajuste no z-index do preloader).
- `style`: Estilização e design (ex: animações CSS).
- `docs`: Documentação (ex: atualização deste README).
- `chore`: Manutenções e configurações.