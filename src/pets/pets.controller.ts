import { Controller, Get, Post, Put, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { searchDTO } from './dto/search.dto';
import { filtersDto } from './dto/filters.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) { }

  @Post()
  create(@Body() createPetDto: CreatePetDto) {

    console.log(createPetDto)
    return this.petsService.create(createPetDto);
  }


  @Post('/search')
  search(@Body() body: searchDTO) {
    return this.petsService.search(body)
  }

  @Post('/filters')
  filter(@Body() body: filtersDto) {
    return this.petsService.filter(body)
  }

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}
