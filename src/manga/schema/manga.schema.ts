import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({
  timestamps: true,
})
export class Manga extends Document {
  @Prop()
  name: string;
  @Prop()
  licence: string;
  @Prop()
  startDate: string;
  @Prop()
  lastUpDate: string;
  @Prop()
  totalVol: string;
  @Prop()
  status: string;
  @Prop()
  no: string;
}

export const MangaSchema = SchemaFactory.createForClass(Manga);
