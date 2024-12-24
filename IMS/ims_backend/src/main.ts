import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with specific configuration
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:5174'], // Include all valid frontend origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include OPTIONS for preflight requests
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
    credentials: true, // Include this if you need cookies/auth headers to be sent
  });

  // Increase request size limits
  app.use(bodyParser.json({ limit: '10mb' })); // Allow JSON payloads up to 10MB
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // Allow URL-encoded data up to 10MB

  await app.listen(3000);
}
bootstrap();
