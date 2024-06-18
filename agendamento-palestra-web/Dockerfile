# Usar uma imagem base Node.js mais recente
FROM node:18

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli@18.0.3

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm i -E

# Copiar todo o código para o contêiner
COPY . .

# Expor a porta de desenvolvimento do Angular (geralmente 4200)
EXPOSE 4200

# Comando padrão para iniciar a aplicação no modo desenvolvimento
CMD ["ng", "serve", "--host", "0.0.0.0"]
