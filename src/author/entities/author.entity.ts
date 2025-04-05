import { Contact } from "src/contact/entities/contact.entity";
import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('author')
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string;
    
    @Column({ unique: true})
    email: string;
    
    @Column()
    dateOfBirth: string;

    @OneToOne(() => Contact, (contact) => contact.author, { eager: true, cascade: true })
    contact: Contact;

    @OneToMany(() => Author, (author) => author.recipes )
    recipes: Recipe[]
}
