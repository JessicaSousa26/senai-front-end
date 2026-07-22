# NexTech — Loja Gamer & Tecnologia

Front-end desenvolvido para a Atividade 3 (Codificação Front-End) do curso SENAI, a partir do protótipo de alta fidelidade criado no Figma para uma loja de eletrônicos voltada ao universo gamer.

Protótipo de referência: https://dawn-polish-16533500.figma.site/site

## Páginas

- `index.html` — Home: menu, banner, categorias, destaques (produtos), novidades (carrossel), galeria, sobre e contato.
- `login.html` — Tela de login com validação de formulário.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Grid, Flexbox) + media queries para responsividade
- Bootstrap 5 (grid, carrossel, modal) para reforçar a responsividade e componentes prontos
- jQuery + JavaScript para as funcionalidades dinâmicas:
  - Menu mobile
  - Contador do carrinho
  - Carrossel de novidades (Bootstrap)
  - Galeria com lightbox (modal)
  - Validação dos formulários de contato e login, com mensagens de sucesso/erro

## Como executar

Basta abrir o arquivo `index.html` em um navegador — não há dependências de build. Todas as bibliotecas (Google Fonts, Bootstrap, jQuery) são carregadas via CDN.

## Versão Angular

A pasta [`nextech-angular/`](nextech-angular/) contém a reimplementação do mesmo site em **Angular + Angular Material**, feita para a atividade de Codificação Front-End com framework. Veja o [README dela](nextech-angular/README.md) para detalhes de arquitetura e instruções de execução.

## Consumo de API (Loja de Jogos)

A pasta [`loja-jogos/`](loja-jogos/) contém uma atividade separada, do módulo de Consumo de API: uma aplicação Angular (NgModule) que lista e cadastra produtos consumindo uma API REST simulada com JSON-Server. Veja o [README dela](loja-jogos/README.md) para instruções de execução.
