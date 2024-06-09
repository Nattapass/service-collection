import { Body, Controller, Get, Post } from '@nestjs/common';
import { ModelKit } from './schema/model-kit.schema';
import { ModelKitService } from './model-kit.service';

@Controller('model-kit')
export class ModelKitController {
  constructor(private modelKitService: ModelKitService) {}

  @Get()
  async getAllManga(): Promise<ModelKit[]> {
    return this.modelKitService.findAll();
  }

  @Post()
  async createManga(@Body() postData: any): Promise<ModelKit> {
    return this.modelKitService.create(postData);
  }
}
