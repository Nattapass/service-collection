import { Module } from '@nestjs/common';
import { ModelKitService } from './model-kit.service';
import { ModelKitController } from './model-kit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelKitSchema } from './schema/model-kit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ModelKit', schema: ModelKitSchema }]),
  ],
  providers: [ModelKitService],
  controllers: [ModelKitController],
})
export class ModelKitModule {}
