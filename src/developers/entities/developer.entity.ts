import { BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

const { nanoid } = require('nanoid')

@Entity('developers')
export class Developer {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    dateOfBirth: string;
}
