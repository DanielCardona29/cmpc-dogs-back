import { Injectable, Inject } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { pets } from './schema/pets.schema';
import { DEFAULT_PET, PETS_RFEPOSITORY } from 'src/utils/constants';
import { errorsManager } from 'src/utils/errorsManager';
import { searchInterface } from 'src/subbreeds/entities/search.entity';
import { searchKeyWords } from 'src/utils/search';
import { Sequelize } from 'sequelize-typescript';
import { Op } from '@sequelize/core';

@Injectable()
export class PetsService {

  constructor(@Inject(PETS_RFEPOSITORY) private petsProviders: typeof pets) { }

  create(pet: CreatePetDto) {

    try {
      const newPet = {
        ...DEFAULT_PET,
        ...pet
      }
      return this.petsProviders.create(newPet);
    } catch (error) {
      return errorsManager(error)
    }

  }


  async search(search: searchInterface) {

    const { byName } = search;

    return this.petsProviders.findAll({
      where: {
        name: {
          [Op.like]: `%${byName}%` // Utiliza Sequelize.Op.like para buscar el patrón '%w%'
        }
      }
    });

  }

  findAll() {
    try {
      return this.petsProviders.findAll();
    } catch (error) {
      return errorsManager(error)
    }
  }



  async findOne(id: string) {
    try {
      return await this.petsProviders.findByPk(id);
    } catch (error) {
      return errorsManager(error)
    }
  }

  async update(id: string, updatePetDto: UpdatePetDto) {

    try {
      const searchPet = await this.findOne(id);
      console.log(searchPet)
      if (!searchPet) throw new Error("Get document");

      const updatePet = {
        ...searchPet,
        ...updatePetDto
      }

      return this.petsProviders.update(updatePet, { where: { id, }, returning: true }
      )

    } catch (error) {
      return errorsManager(error)
    }
  }

  remove(id: string) {
    return this.petsProviders.destroy({ where: { id } });
  }
}
