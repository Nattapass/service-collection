import { Injectable } from '@nestjs/common';
import { Manga } from './schema/manga.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class MangaService {

    constructor(@InjectModel(Manga.name) private readonly mangaModel: mongoose.Model<Manga>) { }

    async findAll(): Promise<Manga[]> {
        try {
            const mangas = await this.mangaModel.find({}).exec();
            console.log('Found mangas:', mangas);
            return mangas;
        } catch (error) {
            console.error('Error finding mangas:', error);
            throw error;
        }
    }

    async create(): Promise<Manga>{
        const res = await this.mangaModel.create({"name": "test", "status": "finished"});
        return res
    }


}
