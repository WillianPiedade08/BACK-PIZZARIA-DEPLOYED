# API Pizzaria TCC

## Ambiente de desenvolvimento
- Node.js
- Prisma
- MySQL (XAMPP) Local e Postgresql (NEON) produção

## Para testar local
- 1 Abra com VsCode e altere o prisma/schema.prisma de `postgresql` para `mysql`
```js
generator client {
  provider = "prisma-client"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
- 2 Crie um arquivo .env contendo
```env
DATABASE_URL="mysql://root:@127.0.0.1:3306/pizzaria"
JWT_SECRET="10072007"
```
- 3 Instale as dependências e rode a migração, veja se já não existe um banco de dados no XAMPP chamado pizzaria, se sim exclua `drop database pizzaria`
```bash
npm install
npx prisma migrate dev --name init
```
- 4 Execute a API localmente
```bash
npm run dev
```