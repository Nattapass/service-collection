import { Injectable } from '@nestjs/common';
import { Manga } from './schema/manga.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class MangaService {

    constructor(
        @InjectModel('Manga')
        private mangaModel : mongoose.Model<Manga>
    ){}

    async findAll(): Promise<Manga[]>{
        const manga = await this.mangaModel.find();
        return manga
    }
}
