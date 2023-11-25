import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({
    timestamps: true
})

export class Manga extends Document {

    @Prop()
    name: string;

    @Prop()
    status: string
}


export const MangaSchema = SchemaFactory.createForClass(Manga);