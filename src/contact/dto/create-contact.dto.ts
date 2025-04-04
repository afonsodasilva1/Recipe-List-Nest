import { IsAlphanumeric, IsNotEmpty, IsPhoneNumber, IsString, IsUUID, Min } from "class-validator";
import { Author } from "src/author/entities/author.entity";

export class CreateContactDto {
    @IsPhoneNumber('AO', { message: 'Por favor, queira introduzir um número válido!' })
    phoneNumber: string;

    @IsAlphanumeric()
    @Min(5)
    address: string

    @IsNotEmpty()
    author: Author
}
