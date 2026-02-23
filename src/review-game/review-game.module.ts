import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewGameController } from './review-game.controller';
import { ReviewGameService } from './review-game.service';
import { ReviewGame, ReviewGameSchema } from './schema/review-game.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ReviewGame.name, schema: ReviewGameSchema }]),
  ],
  controllers: [ReviewGameController],
  providers: [ReviewGameService],
})
export class ReviewGameModule {}
