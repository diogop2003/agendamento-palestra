# Usar uma imagem base Node.js mais recente
FROM node:18

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm i -E

# Copiar todo o código para o contêiner
COPY . .

# Compilar a aplicação
RUN npm run build

# Expor a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
