# Introdução

O aplicativo web RecipesManager tem como função o cadastro e gerencimaento
de receitas culinárias, organizadas por diversas tags ou categorias tornando 
mais facil o acessodas receitas cadastradas atraves de uma lista.

# Sobre o build

O app foi desenvolvido com a utilização da seguintes dependencias:

Para a Api/Backend:
- NodeJS
- Express
- MongoDB
- A api foi construida seguindo o medelo node restful utilizando o mongoose
para a criação e acesso aos schemas do banco

Para o frontend:
- React
- Redux
- ReduxForm
- Framework Material-UI

# Instalação e execução

Para que a aplicação funcione corretamente as dependencias devem ser instaladas
via npm, para isso será necessario ter instalado na maquina: 

- NodeJS - versão 8.12 ou superior
- MongoDb - versão 3.6 ou superior

Para a executar a aplicação seguir os seguintes passos:

Para a Api/Backend:
- Acessar o diretório ../RecipesManager/api e executar o comando "npm i" para
baixar as dependencias necessarioas conforme arquivo package.json
- Após o fim da instalação executar o comando "npm run production" para executar 
o pm2 responsavel por rodar a aplicação. 

Para o frontend:
- Acessar o diretório ../RecipesManager/frontend e executar o comando 
"npm i" para baixar as dependencias necessarioas conforme arquivo package.json
- Após o fim da instalação executar o comando "npm start" para iniciar a 
aplicação
- Ao fazer isso uma aba sera aberta no navegador acessando rodando a aplicação
localmente na porta 3000
