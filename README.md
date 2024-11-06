# Sistema de Tarefas

Este é um projeto de um sistema de tarefas desenvolvido em React, com um backend baseado em uma API que permite a criação, edição, exclusão e ordenação de tarefas. O objetivo é organizar e gerenciar tarefas de forma prática, oferecendo uma interface intuitiva e funcional.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Uso](#uso)

## Sobre o Projeto

O **Sistema de Tarefas** permite aos usuários adicionar, editar, excluir e reordenar tarefas. As tarefas podem ser organizadas de acordo com um custo, data limite e um identificador exclusivo. É um projeto de front-end com funcionalidades que se integram a uma API desenvolvida para gerenciar o armazenamento e manipulação das tarefas.

## Funcionalidades

- **Adicionar Tarefas**: Criação de novas tarefas com nome, custo e prazo final.
- **Editar Tarefas**: Permite editar uma tarefa existente, com verificação de duplicidade no nome.
- **Excluir Tarefas**: Exclui tarefas de forma definitiva com uma confirmação.
- **Ordenação**: As tarefas podem ser reordenadas, movendo para cima ou para baixo.
- **Destaque de Alto Custo**: Tarefas com custo acima de 1000 são destacadas em amarelo.

## Tecnologias Utilizadas

- **Frontend**: React, Sass
- **Backend**: Node.js (API com Express)
- **Bibliotecas**: Axios para requisições HTTP, React Icons para ícones
- **Estilização**: Sass (SCSS)

## Pré-requisitos

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
- **Git**: Para clonar o repositório.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/sistema-de-tarefas.git
   cd sistema-de-tarefas
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o projeto:

   ```bash
   npm run dev
   ```

## Estrutura de Pastas

```plaintext
src/
├── App.jsx                # Componente principal da aplicação
├── components/
│   ├── TaskForm.jsx       # Formulário para adicionar e editar tarefas
│   ├── TaskList.jsx       # Lista de tarefas
├── services/
│   └── api.js             # Funções para comunicação com a API
├── styles/
│   ├── base/              # Estilos básicos e variáveis
│   ├── components/        # Estilos específicos para componentes
│   ├── layout/            # Estilos gerais de layout
│   └── styles.scss        # Arquivo principal de estilos
├── main.js                # Arquivo de entrada para o React
└── index.html             # Estrutura HTML básica
```

## Uso

- **Adicionar uma Tarefa**: Preencha o formulário com o nome, custo e prazo da tarefa e clique em **Adicionar Tarefa**.
- **Editar uma Tarefa**: Clique no ícone de edição de uma tarefa, altere os dados e clique em **Atualizar Tarefa**.
- **Excluir uma Tarefa**: Clique no ícone de lixeira e confirme para remover a tarefa.
- **Reordenar Tarefas**: Use os botões de seta para mover a tarefa para cima ou para baixo na lista.

## API

A comunicação com a API utiliza os seguintes endpoints:

- `GET /api/tasks` - Retorna todas as tarefas
- `POST /api/tasks` - Cria uma nova tarefa
- `PUT /api/tasks/:id` - Atualiza uma tarefa existente
- `DELETE /api/tasks/:id` - Exclui uma tarefa

Os dados de cada tarefa devem seguir o seguinte formato:

```json
{
  "_id": "string",
  "name": "string",
  "cost": "number",
  "deadline": "string (data)",
  "order": "number"
}
```


