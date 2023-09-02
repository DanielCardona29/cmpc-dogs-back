import { pets } from "./schema/pets.schema";
import { PETS_RFEPOSITORY } from "../constants";

export const petsProviders = [
    {
        provide: PETS_RFEPOSITORY,
        useValue: pets,
    }
]