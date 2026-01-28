import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class ReviewBook extends Document {
  @Prop()
  Name: string;

  @Prop()
  Type: string;

  @Prop()
  Total: number;

  @Prop()
  Story: number;

  @Prop()
  Character: number;

  @Prop()
  Illustration: number;

  @Prop()
  Storytelling: number;

  @Prop()
  Score: number;

  @Prop()
  Comment: string;
}

export const ReviewBookSchema = SchemaFactory.createForClass(ReviewBook);
