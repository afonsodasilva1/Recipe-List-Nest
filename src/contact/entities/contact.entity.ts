import { Author } from "src/author/entities/author.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

@Entity('contact')
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    phoneNumber: string;

    @Column()
    address: string;

    @OneToOne(() => Author, (author) => author.contact)
    author: Author;
}
