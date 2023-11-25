import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class Manga {

    @Prop()
    name: string;
}


export const MangaSchema = SchemaFactory.createForClass(Manga);