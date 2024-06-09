import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ModelKit } from './schema/model-kit.schema';

@Injectable()
export class ModelKitService {
  constructor(
    @InjectModel(ModelKit.name)
    private readonly modelKitModel: mongoose.Model<ModelKit>,
  ) {}

  async findAll(): Promise<ModelKit[]> {
    try {
      const modelKit = await this.modelKitModel.find({}).exec();
      console.log('Found model kit:', modelKit);
      return modelKit;
    } catch (error) {
      console.error('Error finding model kit:', error);
      throw error;
    }
  }

  async create(data: any): Promise<ModelKit> {
    const count = await this.modelKitModel.find().countDocuments({});
    const res = await this.modelKitModel.create({
      ...data,
      no: (count + 1).toString(),
    });
    return res;
  }
}
