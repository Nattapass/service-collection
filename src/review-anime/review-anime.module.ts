import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewAnimeController } from './review-anime.controller';
import { ReviewAnimeService } from './review-anime.service';
import { ReviewAnime, ReviewAnimeSchema } from './schema/review-anime.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ReviewAnime.name, schema: ReviewAnimeSchema }]),
  ],
  controllers: [ReviewAnimeController],
  providers: [ReviewAnimeService],
})
export class ReviewAnimeModule {}
