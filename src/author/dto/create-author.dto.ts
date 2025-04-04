import { IsDateString, IsEmail, IsString, MinLength } from "class-validator";

export class CreateAuthorDto {

    @IsString()
    @MinLength(6)
    name: string;

    @IsEmail()
    email: string;

    @IsDateString()
    dateOfBirth: string;
}
