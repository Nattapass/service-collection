import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'review_animes',
})
export class ReviewAnime extends Document {
  @Prop()
  name: string;

  @Prop()
  'premiered(JP)': string;

  @Prop()
  image: string;

  @Prop()
  'finished date': string;

  @Prop()
  type: string;

  @Prop()
  episode: number;

  @Prop()
  story: number;

  @Prop()
  art: number;

  @Prop()
  song: number;

  @Prop()
  character: number;

  @Prop()
  storytelling: number;

  @Prop()
  Score: number;

  @Prop()
  comment: string;
}

export const ReviewAnimeSchema = SchemaFactory.createForClass(ReviewAnime);
