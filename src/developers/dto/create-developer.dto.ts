import { IsDateString, IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateDeveloperDto {
    @IsString()
    @MinLength(6)
    name: string;

    @IsEmail()
    email: string;

    @IsDateString()
    dateOfBirth: string;
}
