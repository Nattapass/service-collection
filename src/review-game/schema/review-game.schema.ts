import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'review_games',
})
export class ReviewGame extends Document {
  @Prop()
  image: string;

  @Prop()
  name: string;

  @Prop()
  platForm: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop()
  story: number;

  @Prop()
  character: number;

  @Prop()
  ost: number;

  @Prop()
  gameplay: number;

  @Prop()
  graphic: number;

  @Prop()
  total: number;

  @Prop()
  comment: string;
}

export const ReviewGameSchema = SchemaFactory.createForClass(ReviewGame);
