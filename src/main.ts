import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express = require('express');
import { Request, Response } from 'express';

const port = process.env.PORT || 3000;
const server = express();
let cachedServer: express.Express;

function enableCors(app: Awaited<ReturnType<typeof NestFactory.create>>) {
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
}

async function createServer() {
  if (cachedServer) {
    return cachedServer;
  }

  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  enableCors(app);
  await app.init();
  cachedServer = server;
  return cachedServer;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  enableCors(app);
  await app.listen(port, '0.0.0.0');
}

if (!process.env.VERCEL) {
  bootstrap();
}

export default async function handler(req: Request, res: Response) {
  try {
    const server = await createServer();
    return server(req, res);
  } catch (error) {
    console.error('Failed to initialize service-collection:', error);
    return res.status(500).json({
      message: 'Failed to initialize service-collection',
    });
  }
}
