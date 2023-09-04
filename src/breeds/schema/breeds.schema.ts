import { Column, PrimaryKey, Table, Model } from "sequelize-typescript";

@Table
export class breeds extends Model {
    @Column
    scientificName: string
    @Column
    commonName: string
    @Column
    keywords: string
}