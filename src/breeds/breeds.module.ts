import { Module } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { breedsProviders } from './breeds.provide';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BreedsController],
  providers: [
    BreedsService,
    ...breedsProviders
  ],
})
export class BreedsModule { }
