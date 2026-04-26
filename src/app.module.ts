import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { MangaModule } from './manga/manga.module';
import { ModelKitModule } from './model-kit/model-kit.module';
import { ReviewBookModule } from './review-book/review-book.module';
import { ReviewAnimeModule } from './review-anime/review-anime.module';
import { ReviewPlamoModule } from './review-plamo/review-plamo.module';
import { ReviewGameModule } from './review-game/review-game.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // MongooseModule.forRootAsync({
    //   useFactory: async (): Promise<MongooseModuleOptions> => {
    //     const connection = await mongoose.connect('mongodb+srv://nattapass:filmfilm@cluster0.y4w6z.mongodb.net/test?authSource=admin&replicaSet=atlas-xovsew-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');

    //     if (connection.connections[0].readyState === 1) {
    //       console.log('NestJS application connected to MongoDB');
    //     } else {
    //       console.log('NestJS application failed to connect to MongoDB');
    //     }

    //     return { uri: 'mongodb+srv://nattapass:filmfilm@cluster0.y4w6z.mongodb.net/test?authSource=admin&replicaSet=atlas-xovsew-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true' }; // Replace with your actual connection details
    //   },
    // }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string>('DB_URI')?.trim();

        if (!uri) {
          throw new Error('DB_URI environment variable is not configured.');
        }

        const host = uri
          .replace(/^mongodb(\+srv)?:\/\//, '')
          .split('@')
          .pop()
          ?.split('/')[0];
        console.log(`MongoDB URI configured for host: ${host ?? 'unknown'}`);

        return {
          uri,
          serverSelectionTimeoutMS: 8000,
          connectTimeoutMS: 8000,
          socketTimeoutMS: 20000,
          retryAttempts: 0,
        };
      },
    }),
    MangaModule,
    ModelKitModule,
    ReviewBookModule,
    ReviewAnimeModule,
    ReviewPlamoModule,
    ReviewGameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

