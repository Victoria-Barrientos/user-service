# user-service
User Service Scaffolding with TS, NestJS and Swagger

# Started Nest app

npm i -g @nestjs/cli

npm new server

Selected npm as package manager

npm i

# Clean Architecture

Created basic modularization for <module-name> = users.

nest generate module <module-name>

nest generate controller <module-name>

nest generate service <module-name>

# API Documentation (Swagger)

npm install @nestjs/swagger swagger-ui-express

npm install class-validator class-transformer

Created Data Transfer Objects

Added validators for DTOs

# Data Base Creation & Set Up (PostgreSQL)

npm install @nestjs/typeorm typeorm pg

npm install @nestjs/config

Created .env

Created DB locally

Re-run the app to view connection established

Created basic User Entity (Schema)

# TypeORM

Injected user Repository into user Service

Added TypeORMModule to User Module