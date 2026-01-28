import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewBookController } from './review-book.controller';
import { ReviewBookService } from './review-book.service';
import { ReviewBook, ReviewBookSchema } from './schema/review-book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ReviewBook.name, schema: ReviewBookSchema }]),
  ],
  controllers: [ReviewBookController],
  providers: [ReviewBookService],
})
export class ReviewBookModule {}
