/**
 * Contain the repository constant
 * for pets
 */

import { v4 } from "uuid";
import { Pet } from "../pets/entities/pet.entity";
import { breedsEntity } from "src/breeds/entities/breed.entity";
import { SubbreedEntity } from "src/subbreeds/entities/subbreed.entity";

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
    name: 'default',
    age: '0',
    breedId: 'N/A',
    characteristics: "",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Dog_silhouette.svg/2067px-Dog_silhouette.svg.png",
    color:  "default",
    keywords: "",
    subBreedID: "N/A",
} 


export const DEFAULT_BREED: breedsEntity = {
    commonName: "default",
    keywords: "",
    scientificName: "default"
}

export const DEFAULT_SUBBREED: SubbreedEntity = {
    commonName: "default",
    keywords: "",
    scientificName: "default",
    breed: ""
}

