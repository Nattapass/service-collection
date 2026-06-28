import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ReviewPlamo } from './schema/review-plamo.schema';
import { ReviewPlamoDto, UpdateReviewPlamoDto } from './dto/review-plamo.dto';

@Injectable()
export class ReviewPlamoService {
  constructor(
    @InjectModel(ReviewPlamo.name)
    private readonly reviewPlamoModel: mongoose.Model<ReviewPlamo>,
  ) {}

  async findAll(): Promise<ReviewPlamo[]> {
    try {
      const reviewPlamos = await this.reviewPlamoModel.find({}).exec();
      console.log('Found review plamos:', reviewPlamos);
      return reviewPlamos;
    } catch (error) {
      console.error('Error finding review plamos:', error);
      throw error;
    }
  }

  async findTypes(): Promise<string[]> {
    const types = await this.reviewPlamoModel
      .distinct<string>('line', { line: { $type: 'string', $ne: '' } })
      .exec();

    return types.filter((type): type is string => typeof type === 'string').sort();
  }

  async findGenres(): Promise<string[]> {
    const genres = await this.reviewPlamoModel
      .distinct<string>('genres', { genres: { $type: 'string', $ne: '' } })
      .exec();

    return genres.filter((genre): genre is string => typeof genre === 'string').sort();
  }

  async create(data: ReviewPlamoDto): Promise<ReviewPlamo> {
    const res = await this.reviewPlamoModel.create({
      ...data,
    });
    return res;
  }

  async update(query: Record<string, string>, data: UpdateReviewPlamoDto): Promise<ReviewPlamo> {
    const res = await this.reviewPlamoModel.findOneAndUpdate(query, data, {
      new: true,
    });

    console.log('res', res);

    return res;
  }
}
