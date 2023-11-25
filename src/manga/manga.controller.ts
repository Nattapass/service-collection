import { Controller, Get, Post } from '@nestjs/common';
import { MangaService } from './manga.service';
import { Manga } from './schema/manga.schema';

@Controller('manga')
export class MangaController {

    constructor(private mangaService: MangaService){
    }

    @Get()
    async getAllManga(): Promise<Manga[]>{
        return this.mangaService.findAll()
    }

    @Post()
    async createManga(): Promise<Manga>{
        return this.mangaService.create();
    }
}
