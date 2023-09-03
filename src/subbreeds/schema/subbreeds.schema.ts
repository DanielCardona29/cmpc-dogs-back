import { Column, ForeignKey, PrimaryKey, Table, Model } from "sequelize-typescript";
import { breeds } from "src/breeds/schema/breeds.schema";

@Table
export class subbreeds extends Model {
    @Column
    scientificName: string
    @Column
    commonName: string
    @Column
    subKeywords: string
    @ForeignKey(() => breeds)
    @Column
    breed: string
}