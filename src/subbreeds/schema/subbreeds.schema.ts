import { Column, ForeignKey, PrimaryKey, Table, Model } from "sequelize-typescript";
import { breeds } from "src/breeds/schema/breeds.schema";

@Table
export class subbreeds  extends Model {
    @PrimaryKey
    @Column
    id: String

    @Column
    scientificName: string
    @Column
    commonName: string
    @Column
    keywords: string

    @ForeignKey(() => breeds)
    @Column
    breedId: string
}