import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with specific options
  app.enableCors({
    origin: [
      'https://nattapass.github.io',
      'http://localhost:4200',
      'https://my-collection-chi.vercel.app',
    ], // or a specific origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  });
  await app.listen(port, '0.0.0.0');
}
bootstrap();
