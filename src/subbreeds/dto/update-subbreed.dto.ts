import { PartialType } from '@nestjs/mapped-types';
import { CreateSubbreedDto } from './create-subbreed.dto';

export class UpdateSubbreedDto extends PartialType(CreateSubbreedDto) {}
