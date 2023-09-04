import { IsOptional, IsString } from 'class-validator';

export class CreatePetDto {
    @IsString()
    @IsOptional()
    name: string
    
    @IsString()
    @IsOptional()
    age: string
    
    @IsString()
    @IsOptional()
    color: string
    
    @IsString()
    @IsOptional()
    characteristics: string

    @IsString()
    @IsOptional()
    img: string

    @IsString()
    @IsOptional()
    keywords: string

    @IsString()
    @IsOptional()
    breedId: string

    
    @IsString()
    @IsOptional()
    subBreedID: string
}
