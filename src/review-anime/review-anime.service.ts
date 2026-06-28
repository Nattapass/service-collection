import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ReviewAnime } from './schema/review-anime.schema';
import { ReviewAnimeDto, UpdateReviewAnimeDto } from './dto/review-anime.dto';

@Injectable()
export class ReviewAnimeService {
  constructor(
    @InjectModel(ReviewAnime.name)
    private readonly reviewAnimeModel: mongoose.Model<ReviewAnime>,
  ) {}

  async findAll(): Promise<ReviewAnime[]> {
    try {
      const reviewAnime = await this.reviewAnimeModel.find({}).exec();
      console.log('Found review anime:', reviewAnime);
      return reviewAnime;
    } catch (error) {
      console.error('Error finding review anime:', error);
      throw error;
    }
  }

  async findTypes(): Promise<string[]> {
    const types = await this.reviewAnimeModel
      .distinct<string>('type', { type: { $type: 'string', $ne: '' } })
      .exec();

    return types.filter((type): type is string => typeof type === 'string').sort();
  }

  async findGenres(): Promise<string[]> {
    const genres = await this.reviewAnimeModel
      .distinct<string>('genres', { genres: { $type: 'string', $ne: '' } })
      .exec();

    return genres.filter((genre): genre is string => typeof genre === 'string').sort();
  }

  async create(data: ReviewAnimeDto): Promise<ReviewAnime> {
    const res = await this.reviewAnimeModel.create({
      ...data,
    });
    return res;
  }

  async update(
    query: Record<string, string>,
    data: UpdateReviewAnimeDto,
  ): Promise<ReviewAnime> {
    const res = await this.reviewAnimeModel.findOneAndUpdate(query, data, {
      new: true,
    });

    console.log('res', res);

    return res;
  }
}
