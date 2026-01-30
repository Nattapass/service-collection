import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'review_plamos',
})
export class ReviewPlamo extends Document {
  @Prop()
  image: string;

  @Prop()
  name: string;

  @Prop()
  line: string;

  @Prop()
  finishedDate: string;

  @Prop()
  assembly: number;

  @Prop()
  design: number;

  @Prop()
  joint: number;

  @Prop()
  worth: number;

  @Prop()
  score: number;

  @Prop()
  comment: string;
}

export const ReviewPlamoSchema = SchemaFactory.createForClass(ReviewPlamo);
