import { IsDateString, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Contact } from "src/contact/entities/contact.entity";

export class CreateAuthorDto {

    @IsString()
    @MinLength(6)
    name: string;

    @IsEmail()
    email: string;

    @IsDateString()
    dateOfBirth: string;

    @IsNotEmpty()
    contact: Contact
}
