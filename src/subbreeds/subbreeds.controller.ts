import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubbreedsService } from './subbreeds.service';
import { CreateSubbreedDto } from './dto/create-subbreed.dto';
import { UpdateSubbreedDto } from './dto/update-subbreed.dto';

@Controller('subbreeds')
export class SubbreedsController {
  constructor(private readonly subbreedsService: SubbreedsService) {}

  @Post()
  create(@Body() createSubbreedDto: CreateSubbreedDto) {
    return this.subbreedsService.create(createSubbreedDto);
  }

  @Get()
  findAll() {
    return this.subbreedsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subbreedsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubbreedDto: UpdateSubbreedDto) {
    return this.subbreedsService.update(+id, updateSubbreedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subbreedsService.remove(+id);
  }
}
