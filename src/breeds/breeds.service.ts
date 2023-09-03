import { Injectable, Inject } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { BREEDS_RFEPOSITORY, DEFAULT_BREED } from 'src/utils/constants';
import { breeds } from './schema/breeds.schema';
import { errorsManager } from 'src/utils/errorsManager';

@Injectable()
export class BreedsService {

  constructor(@Inject(BREEDS_RFEPOSITORY) private breedsProvider: typeof breeds) { }

  create(breedRequest: CreateBreedDto) {
    try {

      const newBreed = {
        ...DEFAULT_BREED,
        ...breedRequest
      }
      return this.breedsProvider.create(newBreed);
    } catch (error) {
      return errorsManager('Error creating breed', error)
    }
  }

  findAll() {
    try {
      return this.breedsProvider.findAll();
    } catch (error) {
      return errorsManager('Error in search', error)
    }
  }

  findOne(id: number) {
    try {
      return this.breedsProvider.findByPk(id);
    } catch (error) {
      return errorsManager('Error in search by  id', error)
    }
  }

  update(id: number, updatedBreed: UpdateBreedDto) {
    try {
      return this.breedsProvider.update(updatedBreed, { where: { id }, returning: true });
    } catch (error) {
      return errorsManager('Error in update', error)
    }
  }

  remove(id: number) {
    try {
      return this.breedsProvider.destroy({ where: { id } });
    } catch (error) {
      return errorsManager('Error in remove', error)
    }
  }
}
