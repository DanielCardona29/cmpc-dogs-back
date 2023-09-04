import { IsArray, IsOptional, IsString } from "class-validator"

export class CreateSubbreedDto {
    @IsString()
    @IsOptional()
    scientificName: string
    @IsString()
    @IsOptional()
    commonName: string


    @IsArray()
    @IsOptional()
    keywords: string[]
    
    @IsString()
    @IsOptional()
    breed: string
}
