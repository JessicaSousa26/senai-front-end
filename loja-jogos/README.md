# Loja de Jogos — Consumo de API (Angular + JSON-Server)

Atividade "Implementar Service de consumo de API": aplicação Angular (arquitetura clássica com
`NgModule`) que lista e cadastra produtos consumindo uma API REST simulada com **JSON-Server**.

## Stack

- Angular 22 (NgModule, não standalone) + Bootstrap 5
- `HttpClient` para consumo da API (GET, POST, PUT, DELETE)
- `json-server` como back-end simulado, servindo `db.json`
- Tratamento de falhas nas requisições, com mensagens amigáveis na interface

## Estrutura

```
src/app/
├── componentes/
│   ├── menu/                 # Barra de navegação (Bootstrap navbar)
│   ├── rodape/                # Rodapé
│   ├── painel-principal/       # Lista de produtos (GET) + editar/excluir
│   └── cadastro-produto/        # Formulário de cadastro/edição (POST/PUT)
├── servicos/
│   └── produto.ts               # ProdutoService: GET, GET por id, POST, PUT, DELETE
├── app-module.ts               # Módulo raiz (BrowserModule, FormsModule, HttpClientModule)
└── app-routing-module.ts       # Rotas: /painel-principal, /cadastro-produto, /cadastro-produto/:id
```

## Como executar

Em dois terminais separados, dentro da pasta do projeto:

```bash
npm install

# Terminal 1 — API simulada (http://localhost:3000/produtos)
npm run api

# Terminal 2 — aplicação Angular (http://localhost:4200)
npm start
```

Abra `http://localhost:4200` no navegador. A tela inicial redireciona para `/painel-principal`,
com a lista de produtos vinda da API. O botão **Cadastro** (ou **Novo Produto**) leva ao
formulário de cadastro; o botão **Editar** de cada linha abre o mesmo formulário preenchido para
atualização.

## Endpoints consumidos

| Ação | Método | Endpoint |
| --- | --- | --- |
| Listar produtos | GET | `/produtos` |
| Obter produto por ID | GET | `/produtos/:id` |
| Cadastrar produto | POST | `/produtos` |
| Atualizar produto | PUT | `/produtos/:id` |
| Excluir produto | DELETE | `/produtos/:id` |

## Observações técnicas

- O Angular 22 passou a gerar projetos **zoneless** por padrão (sem `zone.js`). Como a atividade
  usa o padrão clássico `subscribe((dados) => this.produtos = dados)`, foi necessário reinstalar o
  `zone.js` (adicionado aos `polyfills` do `angular.json`) e, nos componentes que dependem de
  respostas assíncronas da API, injetar `ChangeDetectorRef` e chamar `detectChanges()` após
  atualizar o estado — garantindo que a tela sempre reflita a resposta do servidor.
- Todas as chamadas ao `ProdutoService` tratam o callback `error` do `subscribe`, exibindo uma
  mensagem amigável ao usuário em vez de deixar a falha silenciosa (requisito de boas práticas de
  tratamento de falhas do servidor).
