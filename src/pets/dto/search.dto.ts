import { IsString } from "class-validator";


export class searchDTO {
    @IsString()
    byName: string
}