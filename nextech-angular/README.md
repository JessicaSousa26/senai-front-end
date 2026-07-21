# NexTech Angular — Loja Gamer

Reimplementação da tela inicial e da tela de login da NexTech (loja de eletrônicos e periféricos
gamer) utilizando **Angular** e **Angular Material**, como evolução da versão anterior feita em
HTML/CSS/Bootstrap/jQuery (pasta [`../`](../) na raiz do repositório).

Protótipo visual de referência: https://dawn-polish-16533500.figma.site/site

## Por que Angular?

A versão tradicional (HTML + Bootstrap + CSS + JavaScript) repetia marcação entre seções
parecidas (cada card de produto era HTML duplicado) e não separava dados de apresentação. Esta
versão resolve isso com:

- **Componentização**: cada seção da página é um componente Angular independente e reutilizável.
- **Modelos de dados em TypeScript** (`Produto`, `Categoria`, `Usuario`): classes com construtor e
  métodos de instância, em vez de objetos soltos ou HTML repetido.
- **Serviços com injeção de dependência** (`ProdutoService`, `CarrinhoService`, `AuthService`):
  centralizam os dados e a regra de negócio, prontos para futuramente serem trocados por chamadas
  a uma API real (back-end), sem alterar os componentes que os consomem.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | Angular 22 (standalone components, signals) |
| Estilização de componentes | Angular Material (toolbar/ícones, form fields, dialog, snackbar, checkbox) |
| Grid/base CSS | Bootstrap 5 (CSS) |
| Estilo visual da marca | SCSS próprio com custom properties (tokens de cor/tipografia) |
| Linguagem | TypeScript |

## Estrutura do projeto

```
src/app/
├── core/
│   ├── models/          # Produto, Categoria, Usuario (classes TS)
│   └── services/        # ProdutoService, CarrinhoService, AuthService
├── layout/
│   ├── header/           # Menu fixo, ações (login, carrinho, menu mobile)
│   └── footer/           # Rodapé
├── home/
│   ├── home/              # Página inicial (compõe as seções abaixo)
│   ├── hero/               # Banner
│   ├── categorias/         # Categorias em destaque
│   ├── destaques/           # Grade de produtos
│   ├── novidades/            # Carrossel de novidades
│   ├── galeria/                # Galeria com lightbox (Angular Material Dialog)
│   ├── sobre/                   # Missão, visão e valores
│   └── contato/                  # Formulário reativo (Reactive Forms)
└── login/
    └── login/            # Tela de login (e-mail/senha, Reactive Forms)
```

## Instalação e execução

Pré-requisitos: [Node.js](https://nodejs.org/) 20+ e Angular CLI (`npm install -g @angular/cli`,
opcional — o projeto já traz o CLI como dependência local).

```bash
npm install        # instala as dependências (Angular, Angular Material, Bootstrap)
npm start           # inicia o servidor de desenvolvimento em http://localhost:4200
npm run build       # gera a build de produção em dist/nextech-angular
```

## TypeScript neste projeto

- **Classes e objetos**: `Produto`, `Categoria` e `Usuario` (em `core/models`) são classes com
  propriedades tipadas.
- **Construtor**: todas as classes de modelo recebem seus dados via construtor (ex.:
  `new Produto(id, nome, especificacoes, preco, imagem, badgeTexto, badgeTipo)`).
- **Métodos**: por exemplo, `Produto.precoFormatado()` formata o preço em Real (BRL) e
  `Usuario.validarSenha()` encapsula a checagem de senha.
- **Injeção de dependência**: os serviços (`@Injectable({ providedIn: 'root' })`) são injetados
  nos componentes via `inject()`, evitando instanciação manual e centralizando o estado
  (ex.: `CarrinhoService` mantém a contagem do carrinho compartilhada entre o cabeçalho e as
  seções de produtos).

## Funcionalidades implementadas

- Menu responsivo (desktop e mobile) com âncoras para cada seção da home.
- Carrinho com contador reativo (Angular signals) atualizado ao clicar em "Comprar".
- Carrossel de novidades controlado por componente (sem dependência de JS externo).
- Galeria com lightbox usando `MatDialog`.
- Formulário de contato com **Reactive Forms** e validação (`Validators.required`, `email`,
  `minLength`), mensagens de erro por campo e confirmação via `MatSnackBar`.
- Tela de login com **Reactive Forms**, alternância de visibilidade da senha, validação e
  redirecionamento para a home após autenticação simulada (`AuthService`).
