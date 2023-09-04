import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { petsProviders } from './pets.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PetsController],
  providers: [
    PetsService,
    ...petsProviders
  ],
})
export class PetsModule {}
