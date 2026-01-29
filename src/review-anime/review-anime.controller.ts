import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ReviewAnimeService } from './review-anime.service';
import { ReviewAnime } from './schema/review-anime.schema';
import { ReviewAnimeDto, UpdateReviewAnimeDto } from './dto/review-anime.dto';

@Controller('review-anime')
export class ReviewAnimeController {
  constructor(private reviewAnimeService: ReviewAnimeService) {}

  @Get()
  async getAllReviewAnime(): Promise<ReviewAnime[]> {
    return this.reviewAnimeService.findAll();
  }

  @Post()
  async createReviewAnime(@Body() postData: ReviewAnimeDto): Promise<ReviewAnime> {
    return this.reviewAnimeService.create(postData);
  }

  @Put('/:fieldName/:fieldValue')
  async updateResourceByField(
    @Param('fieldName') fieldName: string,
    @Param('fieldValue') fieldValue: string,
    @Body() updateData: UpdateReviewAnimeDto,
  ): Promise<ReviewAnime> {
    const query = { [fieldName]: fieldValue };
    const updatedResource = await this.reviewAnimeService.update(query, updateData);
    return updatedResource;
  }
}
