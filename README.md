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

Para que a aplicação funcione corretamente os seuintes sofwares devem estar
devidamente instalados na maquina: 

- NodeJS - versão 8.12 ou superior
- MongoDb - versão 3.6 ou superior

Para a executar a aplicação seguir os seguintes passos:

Para a Api/Backend:
- Acessar o diretório ../RecipesManager/api
- executar o comando "npm i" para instalação das depêndencias
- Após o fim da instalação executar o comando "npm run production" para executar 
a aplicação utilizando o módulo pm2 do node. 

Para o frontend:
- Acessar o diretório ../RecipesManager/frontend
- executar o comando "npm i"
- Após o fim da instalação executar o comando "npm start" para iniciar a 
aplicação
- A aplicação roda localmente na porta 3000 (http://localhost:3000)
