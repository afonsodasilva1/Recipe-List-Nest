import { IsPhoneNumber } from "class-validator";
import { Author } from "src/author/entities/author.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity('contact')
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    phoneNumber: string;

    @Column()
    address: string;

    @OneToOne(() => Author, (author) => author.contact)
    @JoinColumn({ name: 'authorId' })
    author: Author;
}
