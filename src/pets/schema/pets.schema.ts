import { Column, Table, Model, ForeignKey, PrimaryKey } from "sequelize-typescript";
import { breeds } from "src/breeds/schema/breeds.schema";
import { subbreeds } from "src/subbreeds/schema/subbreeds.schema";


@Table
export class pets extends Model {
    @PrimaryKey
    @Column
    id: string

    @Column
    name: string
    
    @Column
    age: string
    @Column
    color: string
    @Column
    characteristics: string
    
    @ForeignKey(() => breeds)
    @Column
    breedId: string

    @ForeignKey(() => subbreeds)
    @Column
    subBreedID: string
}