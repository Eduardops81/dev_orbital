<h1>PROJETO - TESTE DEV FULL STACK ORBITAL</h1>

Projeto para testar conhecimentos gerais em desenvolvimento full stack, ele segue 3 etapas:


<h2>Formulário de Contato</h2>
Um formulário composto por 3 arquivo:
<ul>
  <li>index.html</li>
  <li>style.css</li>
  <li>script.js</li>
</ul>

O Formulário tem como objetivo receber dados de um usuário pelo preenchimento dos campos do Form e exibir eles em uma Caixa de Resultado logo abaixo. Em script.js ele 
usa event.preventDefault(); para impedir o comportamento padrão do formulário e assim permitindo que as informações enviadas pelo úsuario sejam validadas e colocadas na Caixa de Resultado 
logo abaixo.

<h3>Considerações</h3>
A etapa foi rápida e sem muitas dificuldades na implementação das funcionalidades

<h2>API</h2>
Uma API simples usando Express rodando na porta 3000 com duas rotas:
<ul>
  <li>GET '/'</li>
  <li>POST '/devorbital'</li>
</ul>

Essa etapa também ultiliza o middleware Morgan para registro dos logs de requisição no arquivo src/logs/express.log e Body Parser do Express para converter o Body no formato JSON. 
Para os testes da API foi usado Insomnia.

<h3>Considerações</h3>
Foi necessário um tempo a mais para o melhor entendimento de cada tecnologia usada nessa etapa, como os middleware por exemplo.

<h2>CRUD</h2>
Essa etapa realiza um CRUD simples usando Mongoose como ORM e MongoDB Atlas para o manipulação dos dados na nuvem.

Possui 4 rotas:
<ul>
  <li>GET '/users'</li>
  <li>POST '/users'</li>
  <li>PUT '/users/:id'</li>
  <li>DELETE '/users/:id'</li>
</ul>

Ele usa as credenciais do arquivo .env e a lib dotenv para se conectar ao banco de dados, e alguns tratamentos de erros para ajudar o úsuario.
A base de dados aceita o seguinte objeto JSON:
{
  "nome": "",
  "email": "",
  "mensagem": "",
}

<h3>Considerações</h3>
Etapa mais complexa, exigiu mais pesquisa sobre banco de dados não relacional e as bibliotecas usadas, mas seguiu um fluxo semelhante a etapa da API.
