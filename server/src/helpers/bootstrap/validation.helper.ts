import { INestApplication } from "@nestjs/common";
import { ValidationPipe } from '@nestjs/common';

export function setUpValidation(app: INestApplication) {
      app.useGlobalPipes(
    new ValidationPipe({
   whitelist: true,  // removes extra fields not in DTO
    transform: true,  // converts types automatically (string → number/boolean)
    })
  )
}