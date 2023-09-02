import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { SubbreedsModule } from './subbreeds/subbreeds.module';
import { BreedsModule } from './breeds/breeds.module';

import { DatabaseProvaiders } from './database/database.providers';

import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PetsModule, DatabaseModule, BreedsModule, SubbreedsModule],
  controllers: [],
  exports: [...DatabaseProvaiders],
  providers: [...DatabaseProvaiders],
})
export class AppModule {}
