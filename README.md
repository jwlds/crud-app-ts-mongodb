<!DOCTYPE html>
<html>

<body>

  <h1>Aplicativo CRUD com TypeScript e MongoDB</h1>

  <p>Este é um exemplo simples de um aplicativo CRUD (Create, Read, Update, Delete) em TypeScript usando o MongoDB como banco de dados. Este projeto demonstra como criar, ler, atualizar e excluir registros em um banco de dados MongoDB usando TypeScript.</p>

  <h2>Requisitos</h2>

  <p>Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:</p>

  <ul>
    <li>Node.js (versão X.X.X)</li>
    <li>MongoDB (versão X.X.X)</li>
  </ul>

  <h2>Instalação</h2>
  
  <ol>
    <li>Clone este repositório:</li>

    git clone https://github.com/seu-usuario/crud-app-ts-mongodb.git
  </ol>

  <ol>
    <li>Navegue até o diretório</li>

    cd backend
  </ol>

  <ol>
    <li>Instale as dependências:</li>

    npm install
  </ol>

  <h2>Configuração</h2>

  <p>Antes de executar o aplicativo, você precisa configurar as variáveis de ambiente necessárias. Crie um arquivo <code>.env</code> na raiz do projeto e defina as seguintes variáveis:</p>

  <pre>
# Configurações do Banco de Dados MongoDB
MONGODB_STRINGCONNECT = "";
MONGODB_USERNAME = "";
MONGODB_PASSWORD = "";
DB_NAME = "";

# Configurações do Servidor
SERVER_PORT = "";

# Configurações da Coleção
COLLECTION_NAME = "";
  </pre>

  <p>Substitua <code>MONGODB_STRINGCONNECT</code> pela URI de conexão do seu banco de dados MongoDB, <code>MONGODB_USERNAME</code> pelo nome de usuário do MongoDB, <code>MONGODB_PASSWORD</code> pela senha do MongoDB, <code>DB_NAME</code> pelo nome do banco de dados e <code>SERVER_PORT</code> pelo número da porta desejada para o servidor.</p>

  <h2>Uso</h2>

  <p>Para iniciar o servidor, execute o seguinte comando:</p>

  <code>npm run dev</code>

  <p>O servidor estará disponível em <code>http://localhost:PORT</code>, onde <code>PORT</code> é o número da porta que você configurou no arquivo <code>.env</code>.</p>

  <p>Você pode usar ferramentas como <a href="https://www.postman.com/">Postman</a>, <a href="https://curl.se/">curl</a> ou <a href="https://insomnia.rest/">Insomnia</a> para fazer solicitações CRUD para o servidor. Aqui estão alguns exemplos de como usar as rotas:</p>

  <ul>
    <li><strong>POST /user/create</strong>: Crie um novo usuário.</li>
    <li><strong>GET /user/get</strong>: Obtenha todos os usuários.</li>
    <li><strong>GET /user/get/:id</strong>: Obtenha um usuário por ID.</li>
    <li><strong>PUT /user/update/:id</strong>: Atualize um usuário por ID.</li>
    <li><strong>DELETE /user/delete/:id</strong>: Exclua um usuário por ID.</li>
  </ul>

  <p>Você também pode testar a interface de usuário React.js que acompanha este projeto. Siga as etapas abaixo:</p>

<h3>Instalação e uso da interface React.js com Vite</h3>

<ol>
  <p>Navegue até o diretório da interface React.js:</p>
     cd frontend
</ol>

<ol>
  <p>Instale as dependências:</p>
  
      npm install
      
</ol>

<ol>
  <p>Inicie a interface React.js:</p>

  <code>npm run dev</code>
</ol>

<p>Agora você pode acessar a interface de usuário em um navegador em <code>http://localhost:5173</code></p>

<p>Use a interface para interagir com o aplicativo CRUD e realizar operações de criação, leitura, atualização e exclusão de registros.</p>

<h3>Funcionalidades</h3>
<ol>
  <l1>Criar um novo usuário.</l1>

  ![Screencast from 16-09-2023 09_37_26](https://github.com/jwlds/crud-app-ts-mongodb/assets/104650587/7b1cff8b-9c45-4144-ab2f-a83467fdd0ec)

  
   <l1>Alterar informações do usuário.</l1>

   
   
   ![Screencast from 16-09-2023 09_38_04](https://github.com/jwlds/crud-app-ts-mongodb/assets/104650587/a509c1dc-461c-48dc-8f41-c8c310bf4c0e)

 
  

   <l1>Deletar um usuário.</l1>


   
   ![Screencast from 16-09-2023 09_39_21](https://github.com/jwlds/crud-app-ts-mongodb/assets/104650587/7442ca56-60bb-4c5c-bb1c-0dd14fbd7867)

   


   
</ol>

<h3>Observação:</h3>

<p>Certifique-se de que o servidor CRUD esteja em execução antes de usar a interface React.js para que ela possa se conectar à API do servidor.</p>

<p>Certifique-se de que o a porta do servidor CRUD seja 8080 para usar a interface React.js para que ela possa se conectar à API do servidor.</p>

  <h2>Contribuindo</h2>

  <p>Sinta-se à vontade para contribuir para este projeto. Se você encontrar problemas ou tiver ideias de melhorias, abra uma issue ou envie um pull request.</p>

  <h2>Licença</h2>

  <p>Este projeto está licenciado sob a <a href="LICENSE">Licença MIT</a>.</p>

</body>

</html>
