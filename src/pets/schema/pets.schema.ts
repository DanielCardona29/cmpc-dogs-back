import { Column, Table, Model } from "sequelize-typescript";


@Table
export class pets extends Model {
    @Column
    name: string
    @Column
    age: string
    @Column
    color: string
    @Column
    characteristics: string
    @Column
    breedId: string
    @Column
    subBreedID: string
    @Column
    veterinarianID: string
}