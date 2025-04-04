import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => Author, (author) => author.contact, { eager: true, cascade: true })
    contact: Author;

    @ManyToOne(() => Author, (author) => author.recipe, { eager: true })
    recipe: Recipe[]
}
