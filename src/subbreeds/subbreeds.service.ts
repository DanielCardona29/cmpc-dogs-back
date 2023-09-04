import { Injectable, Inject } from '@nestjs/common';
import { CreateSubbreedDto } from './dto/create-subbreed.dto';
import { UpdateSubbreedDto } from './dto/update-subbreed.dto';
import { DEFAULT_SUBBREED, SUBBREED_RFEPOSITORY } from 'src/utils/constants';
import { subbreeds } from './schema/subbreeds.schema';
import { errorsManager } from 'src/utils/errorsManager';

@Injectable()
export class SubbreedsService {

  constructor(@Inject(SUBBREED_RFEPOSITORY) private subBreedsProvider: typeof subbreeds) { }

  create(subBreedRequest: CreateSubbreedDto) {
    try {
      const newBreed = {
        ...DEFAULT_SUBBREED,
        ...subBreedRequest,
        keywords: subBreedRequest.keywords.join(',')
      }
      return this.subBreedsProvider.create(newBreed);
    } catch (error) {
      return errorsManager('Error creating subbreed', error)
    }
  }

  findAll() {
    try {
      return this.subBreedsProvider.findAll();
    } catch (error) {
      return errorsManager('Error find subbreed', error)
    }
  }

  findOne(id: number) {
    try {
      return this.subBreedsProvider.findByPk(id);
    } catch (error) {
      return errorsManager('Error find subbreed', error)
    }
  }

  update(id: number, updateSubbree: UpdateSubbreedDto) {
    try {
      return this.subBreedsProvider.update(updateSubbree, { where: { id }, returning: true });
    } catch (error) {
      return errorsManager('Error in update', error)
    }
  }

  remove(id: number) {
    try {
      return this.subBreedsProvider.destroy({ where: { id } });
    } catch (error) {
      return errorsManager('Error in remove', error)
    }
  }
}
