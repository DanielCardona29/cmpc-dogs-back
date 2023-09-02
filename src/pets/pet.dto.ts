import { IsString, IsObject } from "class-validator";

export class petDTO {
    @IsString()
    Name: string;
    @IsString()
    Age: string;
    @IsString()
    Gender: string;
    @IsString()
    Color: string;
    @IsObject()
    Characteristics: {};
    @IsString()
    BreedID: string;
  }
  