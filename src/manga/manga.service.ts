import { Injectable } from '@nestjs/common';
import { Manga } from './schema/manga.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class MangaService {
  constructor(
    @InjectModel(Manga.name) private readonly mangaModel: mongoose.Model<Manga>,
  ) {}

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

  async create(data: any): Promise<Manga> {
    const count = await this.mangaModel.find().countDocuments({});
    const res = await this.mangaModel.create({
      ...data,
      no: (count + 1).toString(),
    });
    return res;
  }

  async update(query: any, data: any): Promise<Manga> {
    const newData = { ...data, no: query.no };
    const res = await this.mangaModel.findOneAndUpdate(query, newData, {
      new: true,
    });

    console.log('res', res);

    return res;
  }
}
