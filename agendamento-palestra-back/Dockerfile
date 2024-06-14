FROM node:18

# Instalação do mysql-client
RUN apt-get update \
    && apt-get install -y default-mysql-client \
    && rm -rf /var/lib/apt/lists/*

# Define o diretório de trabalho da aplicação
WORKDIR /app

# Copia o package.json e package-lock.json (se existir)
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Comando padrão para iniciar a aplicação
CMD ["npm", "start"]
