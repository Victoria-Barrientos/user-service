import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [    
    ConfigModule.forRoot({ isGlobal: true }), // load .env variables globally
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.PORT || "", 10) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'mydb',
      autoLoadEntities: true, // automatically load entities from modules
      synchronize: true, // only for dev, auto-create tables
    }),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
