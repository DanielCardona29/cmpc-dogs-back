import { Module } from '@nestjs/common';
import { SubbreedsService } from './subbreeds.service';
import { SubbreedsController } from './subbreeds.controller';

@Module({
  controllers: [SubbreedsController],
  providers: [SubbreedsService],
})
export class SubbreedsModule {}
