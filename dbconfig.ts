import { SequelizeOptions } from "sequelize-typescript";

export const DB_CONFIG: SequelizeOptions = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345',
    database: 'cmpc-dogs',
}