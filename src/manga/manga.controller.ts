import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MangaService } from './manga.service';
import { Manga } from './schema/manga.schema';

@Controller('manga')
export class MangaController {
  constructor(private mangaService: MangaService) {}

  @Get()
  async getAllManga(): Promise<Manga[]> {
    return this.mangaService.findAll();
  }

  @Post()
  async createManga(@Body() postData: any): Promise<Manga> {
    return this.mangaService.create(postData);
  }

  @Put('/:fieldName/:fieldValue')
  async updateResourceByField(
    @Param('fieldName') fieldName: string,
    @Param('fieldValue') fieldValue: string,
    @Body() updateData: any,
  ): Promise<Manga> {
    const query = { [fieldName]: fieldValue };
    const updatedResource = await this.mangaService.update(query, updateData);

    return updatedResource;
  }
}
