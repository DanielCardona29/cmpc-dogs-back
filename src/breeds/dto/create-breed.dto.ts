import { IsOptional, IsString } from "class-validator"

export class CreateBreedDto {
    @IsString()
    @IsOptional()
    scientificName: string
    @IsString()
    @IsOptional()
    commonName: string
    @IsString()
    @IsOptional()
    keywords: string
}
