import { Module } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangaController } from './manga.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MangaSchema } from './schema/manga.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Manga' , schema: MangaSchema}])],
  providers: [MangaService],
  controllers: [MangaController]
})
export class MangaModule {}
