import { IsOptional, IsString } from "class-validator"

export class CreateSubbreedDto {
    @IsString()
    @IsOptional()
    scientificName: string
    @IsString()
    @IsOptional()
    commonName: string
    @IsString()
    @IsOptional()
    keywords: string
    @IsString()
    @IsOptional()
    breed: string
}
