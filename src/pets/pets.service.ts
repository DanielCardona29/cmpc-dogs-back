import { Injectable } from '@nestjs/common';
import { pets } from 'src/pets/pets.entities';

import { v4 } from 'uuid';

@Injectable()
export class PetsService {

  private pets: pets = {
    ID: 'default',
    Age: 0,
    Gender: 'default',
    BreedID: 'default',
    Characteristics: {},
    Color: 'default',
    Name: 'default',
  }

  getAllPets() {
    return this.pets;
  }
  createPets(petInfo: pets) {
    const pet = {
      ...this.pets,
      ID: v4(),
      ...petInfo
    }
    return pet;
  }
  updatePets() { }
  deletePets() { }
}
