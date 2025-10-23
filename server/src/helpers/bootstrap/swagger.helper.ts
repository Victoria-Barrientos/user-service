import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setUpSwagger (app: INestApplication) {
      const config = new DocumentBuilder()
        .setTitle("My Scaffolding")
        .setDescription("API Documentation for my user service")
        .setVersion("1.0")
        .build()
    
      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api-docs', app, document)
}