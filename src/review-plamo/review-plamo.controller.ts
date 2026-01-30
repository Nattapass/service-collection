import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ReviewPlamoService } from './review-plamo.service';
import { ReviewPlamo } from './schema/review-plamo.schema';
import { ReviewPlamoDto, UpdateReviewPlamoDto } from './dto/review-plamo.dto';

@Controller('review-plamo')
export class ReviewPlamoController {
  constructor(private reviewPlamoService: ReviewPlamoService) {}

  @Get()
  async getAllReviewPlamos(): Promise<ReviewPlamo[]> {
    return this.reviewPlamoService.findAll();
  }

  @Post()
  async createReviewPlamo(@Body() postData: ReviewPlamoDto): Promise<ReviewPlamo> {
    return this.reviewPlamoService.create(postData);
  }

  @Put('/:fieldName/:fieldValue')
  async updateResourceByField(
    @Param('fieldName') fieldName: string,
    @Param('fieldValue') fieldValue: string,
    @Body() updateData: UpdateReviewPlamoDto,
  ): Promise<ReviewPlamo> {
    const query = { [fieldName]: fieldValue };
    const updatedResource = await this.reviewPlamoService.update(query, updateData);
    return updatedResource;
  }
}
