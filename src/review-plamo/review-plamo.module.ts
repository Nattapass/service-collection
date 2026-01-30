import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewPlamoController } from './review-plamo.controller';
import { ReviewPlamoService } from './review-plamo.service';
import { ReviewPlamo, ReviewPlamoSchema } from './schema/review-plamo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ReviewPlamo.name, schema: ReviewPlamoSchema }]),
  ],
  controllers: [ReviewPlamoController],
  providers: [ReviewPlamoService],
})
export class ReviewPlamoModule {}
