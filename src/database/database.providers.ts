import { Sequelize } from "sequelize-typescript";

import { pets } from '../pets/schema/pets.schema'
import { breeds } from '../breeds/schema/breeds.schema'
import { subbreeds } from "src/subbreeds/schema/subbreeds.schema";

import { SEQUELIZE } from "../utils/constants";

export const DatabaseProvaiders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345',
        database: 'cmpc-dogs',
      });
      sequelize.addModels([pets, breeds, subbreeds]);
      await sequelize.sync();
      return sequelize;
    },
  },
];