import { Injectable, Inject } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { pets } from './schema/pets.schema';
import { DEFAULT_PET, PETS_RFEPOSITORY } from 'src/constants';

@Injectable()
export class PetsService {

  constructor(@Inject(PETS_RFEPOSITORY) private petsProviders: typeof pets) { }

  create(pet: CreatePetDto) {

    try {
      const pet = {
        ...DEFAULT_PET,
        ...pets
      }

      return this.petsProviders.create(pet);
    } catch (error) {
      return 'Data  base error'
    }

  }

  findAll() {
    return this.petsProviders.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
