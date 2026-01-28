import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ReviewBookService } from './review-book.service';
import { ReviewBook } from './schema/review-book.schema';
import { ReviewBookDto, UpdateReviewBookDto } from './dto/review-book.dto';

@Controller('review-books')
export class ReviewBookController {
  constructor(private reviewBookService: ReviewBookService) {}

  @Get()
  async getAllReviewBooks(): Promise<ReviewBook[]> {
    return this.reviewBookService.findAll();
  }

  @Post()
  async createReviewBook(@Body() postData: ReviewBookDto): Promise<ReviewBook> {
    return this.reviewBookService.create(postData);
  }

  @Put('/:fieldName/:fieldValue')
  async updateResourceByField(
    @Param('fieldName') fieldName: string,
    @Param('fieldValue') fieldValue: string,
    @Body() updateData: UpdateReviewBookDto,
  ): Promise<ReviewBook> {
    const query = { [fieldName]: fieldValue };
    const updatedResource = await this.reviewBookService.update(query, updateData);
    return updatedResource;
  }
}
