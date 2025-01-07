# AdonisJS Project

Welcome to my AdonisJS learning project! This project uses various technologies and libraries.

## Technologies Used

- **AdonisJS**: The main framework used to build the application. (Version 6.14.1)
- **Node.js**: JavaScript runtime environment on the server. (Version 23.1.0) <br>
  Documentation - https://nodejs.org/en/download/package-manager
- **NPM**: Package manager to install project dependencies. (Version 10.9.0)
- **TypeScript**: Language used to provide static typing to JavaScript.
- **Lucid ORM**: ORM used for database interactions. (Version 21.3.0)
- **Postman**: Tool for testing APIs.

## How to Start the Project

1. Clone this repository:
   ```sh
   git clone https://github.com/Anso-M/moments-adonis-api.git
   ```

2. Navigate to the project directory:
   ```sh
   cd moments-adonis-api
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

4. Start the server:
   ```sh
   node ace serve --watch
   ```

5. Run the migrations:
   ```sh
   node ace migration:run
   ```

## Endpoints

### Moments

#### GET /api/moments
Returns all moments and comments.

#### POST /api/moments
Creates a new moment.
- Parameters:
  ```json
  {
    "title": "Moment title",
    "description": "Moment description",
    "image": "Image file"
  }
  ```

#### PATCH /api/moments/:momentId
Updates an existing moment.
- Parameters:
  ```json
  {
    "title": "New title",
    "description": "New description",
    "image": "New image"
  }
  ```

#### PUT /api/moments/:momentId
Replaces an existing moment.
- Parameters:
  ```json
  {
    "title": "New title",
    "description": "New description",
    "image": "New image"
  }
  ```

#### DELETE /api/moments/:momentId
Removes a moment.

### Comments

#### POST /api/moments/:momentId/comments
Adds a comment.
- Parameters:
  ```json
  {
    "username": "User's name",
    "text": "Comment content",
    "moment_id": "Moment ID"
  }
  ```
<br> </br>
#### NOTE: All routes were tested using Postman.
Download - https://www.postman.com/downloads/

## License

This project is licensed under the MIT License.

---

# Projeto AdonisJS

Bem-vindo ao meu projeto para aprendizado do AdonisJS! Este projeto utiliza diversas tecnologias e bibliotecas.

## Tecnologias Utilizadas

- **AdonisJS**: O framework principal usado para construir a aplicação. (Versão 6.14.1)
- **Node.js**: Ambiente de execução do JavaScript no servidor. (Versão 23.1.0) <br>
  Documentação - https://nodejs.org/en/download/package-manager
- **NPM**: Gerenciador de pacotes para instalar as dependências do projeto. (Versão 10.9.0)
- **TypeScript**: Linguagem usada para proporcionar tipagem estática ao JavaScript.
- **Lucid ORM**: ORM utilizado para interações com o banco de dados. (Versão 21.3.0)
- **Postman**: Ferramenta para testar APIs.

## Como Iniciar o Projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/Anso-M/moments-adonis-api.git
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd moments-adonis-api
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

4. Inicie o servidor:
   ```sh
   node ace serve --watch
   ```

5. Rode as migrations:
   ```sh
   node ace migration:run
   ```

## Endpoints

### Moments

#### GET /api/moments
Retorna todos os momentos e comentários.

#### POST /api/moments
Cria um novo momento.
- Parâmetros:
  ```json
  {
    "title": "Título do momento",
    "description": "Descrição do momento"
    "image": "Arquivo de imagem"
  }
  ```

#### PATCH /api/moments/:momentId
Atualiza um momento existente.
- Parâmetros:
  ```json
  {
    "title": "Novo título",
    "description": "Nova descrição"
    "image": "Nova imagem"
  }
  ```

#### PUT /api/moments/:momentId
Substitui um momento existente.
- Parâmetros:
  ```json
  {
    "title": "Novo título",
    "description": "Nova descrição"
    "image": "Nova imagem"
  }
  ```

#### DELETE /api/moments/:momentId
Remove um momento.

### Comments

#### POST /api/moments/:momentId/comments
Adiciona um comentário.
- Parâmetros:
  ```json
  {
    "username": "Nome do usuário",
    "text": "Conteúdo do comentário",
    "moment_id": "ID do momento",
  }
  ```
<br> </br>
#### OBS.: Todas as rotas foram devidamente testadas usando o Postman.
Download - https://www.postman.com/downloads/
