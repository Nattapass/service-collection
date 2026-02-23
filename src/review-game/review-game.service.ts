import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ReviewGame } from './schema/review-game.schema';
import { ReviewGameDto, UpdateReviewGameDto } from './dto/review-game.dto';

@Injectable()
export class ReviewGameService {
  constructor(
    @InjectModel(ReviewGame.name)
    private readonly reviewGameModel: mongoose.Model<ReviewGame>,
  ) {}

  async findAll(): Promise<ReviewGame[]> {
    try {
      const reviewGames = await this.reviewGameModel.find({}).exec();
      console.log('Found review games:', reviewGames);
      return reviewGames;
    } catch (error) {
      console.error('Error finding review games:', error);
      throw error;
    }
  }

  async create(data: ReviewGameDto): Promise<ReviewGame> {
    const res = await this.reviewGameModel.create({
      ...data,
    });
    return res;
  }

  async update(query: Record<string, string>, data: UpdateReviewGameDto): Promise<ReviewGame> {
    const res = await this.reviewGameModel.findOneAndUpdate(query, data, {
      new: true,
    });

    console.log('res', res);

    return res;
  }
}
