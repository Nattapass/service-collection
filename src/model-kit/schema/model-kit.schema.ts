import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({
  timestamps: true,
})
export class ModelKit extends Document {
  @Prop()
  name: string;
  @Prop()
  franchise: string;
  @Prop()
  finishedDate: string;
  @Prop()
  imgUrl: string;
}

export const ModelKitSchema = SchemaFactory.createForClass(ModelKit);
