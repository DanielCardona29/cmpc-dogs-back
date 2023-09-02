import { BREEDS_RFEPOSITORY } from "../constants";
import { CreateBreedDto } from "src/breeds/dto/create-breed.dto";

export const breedsProviders = [
    {
        provide: BREEDS_RFEPOSITORY,
        useValue: CreateBreedDto,
    }
]