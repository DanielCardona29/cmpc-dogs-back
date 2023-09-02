import { Body, Controller, Get, Post } from '@nestjs/common';
import { PetsService } from './pets.service';
import { petDTO } from 'src/pets/pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private PetsService: PetsService) { }

  @Get()
  getAllPets() {
    return this.PetsService.getAllPets();
  }

  @Post()
  createPet(@Body() petInfo: petDTO) {
    return this.PetsService.createPets(petInfo);
  }
}
