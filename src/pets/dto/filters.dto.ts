import { ArrayMinSize, IsArray, IsOptional, IsString,  } from "class-validator"
import { HasMany } from "sequelize-typescript"

export class filtersDto {

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    breeds: string[]


    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    subbreeds: string[]
}