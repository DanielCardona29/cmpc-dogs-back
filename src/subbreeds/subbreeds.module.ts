import { Module } from '@nestjs/common';
import { SubbreedsService } from './subbreeds.service';
import { SubbreedsController } from './subbreeds.controller';
import { subbreedsProviders } from './subbreeds.providers';

@Module({
  controllers: [SubbreedsController],
  providers: [SubbreedsService, ...subbreedsProviders],
})
export class SubbreedsModule { }
