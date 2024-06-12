# Usar uma imagem base Node.js mais recente
FROM node:18 AS build

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm i -E

# Copiar todo o código para o contêiner
COPY . .

# Compilar a aplicação Angular
RUN npm run build --prod

# Usar uma imagem base do Nginx
FROM nginx:alpine

# Copiar os arquivos compilados do Angular para o diretório do Nginx
COPY --from=build /usr/src/app/dist/agendamento-palestra /usr/share/nginx/html

# Expor a porta do Nginx
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
