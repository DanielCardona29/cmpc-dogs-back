import { BREEDS_RFEPOSITORY } from "../utils/constants";
import { breeds } from "./schema/breeds.schema";

export const breedsProviders = [
    {
        provide: BREEDS_RFEPOSITORY,
        useValue: breeds,
    }
]