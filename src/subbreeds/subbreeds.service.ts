import { Injectable } from '@nestjs/common';
import { CreateSubbreedDto } from './dto/create-subbreed.dto';
import { UpdateSubbreedDto } from './dto/update-subbreed.dto';

@Injectable()
export class SubbreedsService {
  create(createSubbreedDto: CreateSubbreedDto) {
    return 'This action adds a new subbreed';
  }

  findAll() {
    return `This action returns all subbreeds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subbreed`;
  }

  update(id: number, updateSubbreedDto: UpdateSubbreedDto) {
    return `This action updates a #${id} subbreed`;
  }

  remove(id: number) {
    return `This action removes a #${id} subbreed`;
  }
}
