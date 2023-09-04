import { Sequelize } from "sequelize-typescript";

import { pets } from '../pets/schema/pets.schema'
import { breeds } from '../breeds/schema/breeds.schema'
import { subbreeds } from "src/subbreeds/schema/subbreeds.schema";

import { SEQUELIZE } from "../utils/constants";
import { DB_CONFIG } from "dbconfig";

export const DatabaseProvaiders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(DB_CONFIG);
      sequelize.addModels([pets, breeds, subbreeds]);
      await sequelize.sync();
      return sequelize;
    },
  },
];