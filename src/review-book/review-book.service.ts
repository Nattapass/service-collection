import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ReviewBook } from './schema/review-book.schema';
import { ReviewBookDto, UpdateReviewBookDto } from './dto/review-book.dto';

@Injectable()
export class ReviewBookService {
  constructor(
    @InjectModel(ReviewBook.name)
    private readonly reviewBookModel: mongoose.Model<ReviewBook>,
  ) {}

  async findAll(): Promise<ReviewBook[]> {
    try {
      const reviewBooks = await this.reviewBookModel.find({}).exec();
      console.log('Found review books:', reviewBooks);
      return reviewBooks;
    } catch (error) {
      console.error('Error finding review books:', error);
      throw error;
    }
  }

  async create(data: ReviewBookDto): Promise<ReviewBook> {
    const res = await this.reviewBookModel.create({
      ...data,
    });
    return res;
  }

  async update(query: Record<string, string>, data: UpdateReviewBookDto): Promise<ReviewBook> {
    const res = await this.reviewBookModel.findOneAndUpdate(query, data, {
      new: true,
    });

    console.log('res', res);

    return res;
  }
}
