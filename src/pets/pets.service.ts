import { Injectable, Inject } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { pets } from './schema/pets.schema';
import { DEFAULT_PET, PETS_RFEPOSITORY } from 'src/utils/constants';
import { errorsManager } from 'src/utils/errorsManager';
import { searchDTO } from './dto/search.dto';
import { Op } from '@sequelize/core';
import { filtersDto } from './dto/filters.dto';
import { filtersListJoin } from 'src/utils/filterListJoin';

@Injectable()
export class PetsService {

  constructor(@Inject(PETS_RFEPOSITORY) private petsProviders: typeof pets) { }

  create(pet: CreatePetDto) {
    try {
      const newPet = {
        ...DEFAULT_PET,
        ...pet
      };
      return this.petsProviders.create(newPet);
    } catch (error) {
      throw errorsManager('Failed to create pet', error);
    }
  }


  async search(search: searchDTO) {

    const { byName } = search;

    return this.petsProviders.findAll({
      where: {
        breedId: {
          [Op.like]: `%${byName}%` // Utiliza Sequelize.Op.like para buscar el patrón '%w%'
        }
      }
    });

  }

  async _searchByBreed(breedId: string) {
    try {

      let petsList = await this.petsProviders.findAll({
        where: {
          breedId: {
            [Op.like]: `%${breedId}%` // Utiliza Sequelize.Op.like para buscar el patrón '%w%'
          }
        }
      });

      petsList = petsList.map(pet => {
        return pet.dataValues
      });

      return petsList;

    } catch (error) {
      return errorsManager('Error filtring by breed', error)
    }

  }



  async _searchBySubBreed(subbreed: string) {
    try {

      let petsList = await this.petsProviders.findAll({
        where: {
          subBreedID: {
            [Op.like]: `%${subbreed}%` // Utiliza Sequelize.Op.like para buscar el patrón '%w%'
          }
        }
      });

      petsList = petsList.map(pet => {
        return pet.dataValues
      });

      return petsList;

    } catch (error) {
      return errorsManager('Error filtring by breed', error)
    }

  }

  async filter(filters: filtersDto) {
    try {
      const breedsResults = await Promise.all(filters.breeds.map(async (breed) => {
        return await this._searchByBreed(breed);
      }))

      const subBreedsResults = await Promise.all(filters.subbreeds.map(async (subBreed: string) => {
        return await this._searchBySubBreed(subBreed);
      }))

      return filtersListJoin(breedsResults, subBreedsResults);

    } catch (error) {
      return errorsManager('Error filter', error)
    }

  }

  findAll() {
    try {
      return this.petsProviders.findAll();
    } catch (error) {
      return errorsManager('Error find all', error)
    }
  }



  async findOne(id: string) {
    try {
      return await this.petsProviders.findByPk(id);
    } catch (error) {
      return errorsManager('Error find', error)
    }
  }

  async update(id: string, updatePetDto: UpdatePetDto) {

    try {
      const searchPet = await this.findOne(id);
      if (!searchPet) throw new Error("Get document");
      const updatePet = {
        ...searchPet,
        ...updatePetDto
      }

      return this.petsProviders.update(updatePet, { where: { id, }, returning: true }
      )

    } catch (error) {
      return errorsManager("Error update", error)
    }
  }

  remove(id: string) {
    return this.petsProviders.destroy({ where: { id } });
  }
}
