# Imagem de Origem
FROM node:13-alpine

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json

RUN npm install --silent

RUN npm install react-scripts@3.3.1 -g --silent

RUN npm install --save react-router-dom@5 --silent

# Inicializa a aplicação
CMD ["npm", "start"]

# to update image: sudo docker build -t sample:dev .
# to run image   : sudo docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev