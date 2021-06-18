# GitSearch
[http://atlas-test-wallace.s3-website-us-east-1.amazonaws.com](http://atlas-test-wallace.s3-website-us-east-1.amazonaws.com)
### Wallace Antunes
 - Desenvolva uma aplicação que consuma dados da API do Github e que contenha as seguintes funcionalidades:
   - Tela Inicial:
     - Input para buscar um usuário específico.
     - Botão “Ver Todos” para listar todos os usuários.
     - Tela de Listagem de Usuários
     - Input para fazer uma busca por usuário.
     - Lista deve conter uma rolagem infinita que carregue de 10 em 10 usuários.
     - Utilizar um loader quando a aplicação estiver carregando mais usuários.
     - Caso não tenha mais usuários a serem carregados, mostrar mensagem de
final da lista.

   - Tela de Perfil
     - Exibir foto, nome e login do usuário selecionado.
     - Menu para acessar tela de projetos do usuário.
     - Localização e link caso estejam disponíveis.
     - Quantidade de seguidores, de seguindo e projetos.
     - Biografia do usuário.

   - Tela de Listagem de Projetos
     - Listagem com todos os projetos do usuário.
     - Menu para acessar tela de sobre do usuário.
     - Listagem com rolagem infinita que carregue de 8 em 8.
     - Utilizar loader no carregamento dos projetos.
     - Caso não existam mais dados a serem carregados, mostrar mensagem de final da lista.

## Tecnologias usadas
  - JavaScript
   - Linguagem de programação utilizada no front-end 
 - Vue 
   - Framework JavaScript  para criação de interfaces de usuário
 - Axios
   - Pacote para realizar requisições http 
 - Moment
   - Utils e Helpers para as datas   
 - Vue Feather
   - Pacote de ícones 
  - Vue Router
    - Utilizado para roteamento da aplicação 
  - Vue Toast Notification
    - Utilizado para mostrar toast notifications dinamicamente 
 
## Observações
- Para que o sistema consiga rodar a API é necessário criar uma cópia do .env.example.js e renomear para .env.js;
- Podem ocorrer alguns erros na API, por conta do rate limit do github (10 requisições por minuto para pesquisa de usuários e projetos);
- O sistema foi desenvolvido sem o auxilio de nenhum framework gráfico (Ex.: Bootstrap, Materialize, etc );

## Install
Instalar pacotes
`npm install`

## Run App
Rodar aplicação
`npm run serve`

## Build App
Buildar aplicação
`npm run build`
