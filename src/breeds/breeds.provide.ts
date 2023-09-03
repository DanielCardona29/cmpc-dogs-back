import { BREEDS_RFEPOSITORY } from "../utils/constants";
import { CreateBreedDto } from "src/breeds/dto/create-breed.dto";

export const breedsProviders = [
    {
        provide: BREEDS_RFEPOSITORY,
        useValue: CreateBreedDto,
    }
]