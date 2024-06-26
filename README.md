# Aplicação de Agendamentos de Palestras
Esta aplicação permite agendar palestras com temas e palestrantes, fornecendo uma interface para adicionar, editar e remover palestras, temas e palestrantes. A aplicação é composta por um banco de dados MariaDB, um backend em NestJS e um frontend em Angular.

# Estrutura do Projeto
- agendamento-palestra-back: Contém o código do backend desenvolvido em NestJS.
- agendamento-palestra-web: Contém o código do frontend desenvolvido em Angular.
- docker-compose.yaml: Arquivo de configuração para Docker Compose.
- README.md: Este arquivo com instruções para configurar e executar a aplicação.

# Funcionalidades

### Palestra

- Tema
- Data
- Hora
- Palestrante

### Tema

- Título
- Assunto
- Resumo
  
### Palestrante

- Nome
- Telefone
- Email

# Operações

- Adicionar/Editar palestrante
- Adicionar/Editar/Remover palestra
- Adicionar/Editar tema

# Tecnologias Utilizadas

- Banco de Dados: MariaDB
- Backend: NestJS
- Frontend: Angular 18

# Configuração do Ambiente

Pré-requisitos

- Docker e Docker Compose instalados na máquina.
- Angular CLI instalado na máquina.
- NestJS instalado na máquina.

# Passos para Executar a Aplicação

### Clone o repositório:

~~~sh
git clone https://github.com/diogop2003/agendamento-palestra.git

cd agendamento-palestra
~~~
ou
~~~sh
git clone git@github.com:diogop2003/agendamento-palestra.git

cd agendamento-palestra
~~~
# Inicie os serviços utilizando Docker Compose:

~~~sh
docker-compose up
~~~
Isso irá iniciar os três serviços: banco de dados, backend e frontend.

# Acessando a Aplicação

Frontend: http://localhost:4200

Backend: http://localhost:3000

Banco de Dados: localhost:3306 (as credenciais estão definidas no arquivo docker-compose.yaml)

# Estrutura do Repositório

/

├── agendamento-palestra-back/

│   ├── src/

│   ├── test/

│   ├── nest-cli.json

│   ├── package.json

│   ├── tsconfig.json

│   └── ...

├── agendamento-palestra-web/

│   ├── src/

│   ├── angular.json

│   ├── package.json

│   ├── tsconfig.json

│   └── ...

├── docker-compose.yaml

└── README.md

# Configurações Específicas

### Backend (NestJS)
No diretório backend, configure seu .env para definir as variáveis de ambiente necessárias, como a URL do banco de dados, porta do servidor, etc.

### Frontend (Angular)
No diretório frontend, configure os ambientes de desenvolvimento e produção conforme necessário em src/environments.

### Docker Compose
O arquivo docker-compose.yaml está configurado para criar três serviços:

- db: Serviço MariaDB
- backend: Serviço NestJS
- frontend: Serviço Angular
  
Exemplo de docker-compose.yaml:

~~~sh
version: '3.8'

services:
  db:
    image: mariadb:latest
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: agendamentos
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_HOST: db
      DATABASE_PORT: 3306
      DATABASE_USER: user
      DATABASE_PASSWORD: password
      DATABASE_NAME: agendamentos

  frontend:
    build: ./frontend
    ports:
      - "4200:80"
    depends_on:
      - backend

volumes:
  db_data:
~~~

# Contribuição

Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -am 'Adiciona nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

# Contato
Caso tenha dúvidas ou precise de ajuda, entre em contato através do email: diogoprado1511@gmail.com
