import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setUpSwagger } from './helpers/bootstrap/swagger.helper';
import { setUpValidation } from './helpers/bootstrap/validation.helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setUpSwagger(app)
  setUpValidation(app)
  
  await app.listen(process.env.SERVER_PORT ?? 3000);
}
bootstrap();
