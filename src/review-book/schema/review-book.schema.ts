import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'review_books',
})
export class ReviewBook extends Document {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  total: number;

  @Prop()
  story: number;

  @Prop()
  character: number;

  @Prop()
  illustration: number;

  @Prop()
  storytelling: number;

  @Prop()
  score: number;

  @Prop()
  comment: string;

  @Prop()
  image: string;
}

export const ReviewBookSchema = SchemaFactory.createForClass(ReviewBook);
