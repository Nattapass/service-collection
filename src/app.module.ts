import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MangaModule } from './manga/manga.module';
import { ModelKitModule } from './model-kit/model-kit.module';
import { ReviewBookModule } from './review-book/review-book.module';
import { ReviewAnimeModule } from './review-anime/review-anime.module';

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
    MongooseModule.forRoot(process.env.DB_URI),
    MangaModule,
    ModelKitModule,
    ReviewBookModule,
    ReviewAnimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
