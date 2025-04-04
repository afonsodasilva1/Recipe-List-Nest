import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('author')
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    dateOfBirth: string;
}
