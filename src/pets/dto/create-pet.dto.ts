import { IsString } from 'class-validator';

export class CreatePetDto {
    @IsString()
    name: string
    
    @IsString()
    age: string
    
    @IsString()
    color: string
    
    @IsString()
    characteristics: string
    
    @IsString()
    keywords: string

    @IsString()
    breedId: string

    
    @IsString()
    subBreedID: string
}
