import { subbreeds } from "./schema/subbreeds.schema";
import { SUBBREED_RFEPOSITORY } from "../constants";

export const subbreedsProviders = [
    {
        provide: SUBBREED_RFEPOSITORY,
        useValue: subbreeds,
    }
]