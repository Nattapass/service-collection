import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ReviewGameService } from './review-game.service';
import { ReviewGame } from './schema/review-game.schema';
import { ReviewGameDto, UpdateReviewGameDto } from './dto/review-game.dto';

@Controller('review-game')
export class ReviewGameController {
  constructor(private reviewGameService: ReviewGameService) {}

  @Get()
  async getAllReviewGames(): Promise<ReviewGame[]> {
    return this.reviewGameService.findAll();
  }

  @Post()
  async createReviewGame(@Body() postData: ReviewGameDto): Promise<ReviewGame> {
    return this.reviewGameService.create(postData);
  }

  @Put('/:fieldName/:fieldValue')
  async updateResourceByField(
    @Param('fieldName') fieldName: string,
    @Param('fieldValue') fieldValue: string,
    @Body() updateData: UpdateReviewGameDto,
  ): Promise<ReviewGame> {
    const query = { [fieldName]: fieldValue };
    const updatedResource = await this.reviewGameService.update(query, updateData);
    return updatedResource;
  }
}
