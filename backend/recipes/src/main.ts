import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS globally
  app.enableCors({
    origin: '*', // Allow all origins (use a specific domain in production)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Allowed headers
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
