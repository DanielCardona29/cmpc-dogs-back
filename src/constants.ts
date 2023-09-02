/**
 * Contain the repository constant
 * for pets
 */

import { v4 } from "uuid";
import { Pet } from "./pets/entities/pet.entity";

export const PETS_RFEPOSITORY = 'PETS_RFEPOSITORY';


/**
 * Contain the repository constant
 * for subbreed
 */

export const SUBBREED_RFEPOSITORY = 'SUBBREED_RFEPOSITORY';

/**
 * Contain the repository constant
 * for breds
 */

export const BREEDS_RFEPOSITORY = 'BREEDS_RFEPOSITORY';

/**
 * contain the sequielizae constants 
 */

export const SEQUELIZE = 'SEQUELIZE';


export const DEFAULT_PET: Pet =  {
    id: v4(),
    name: 'default',
    age: '0',
    breedId: 'N/A',
    characteristics: "",
    color:  "default",
    keywords: "",
    subBreedID: "N/A",
} 