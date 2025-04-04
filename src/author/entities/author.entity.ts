import { Recipe } from "src/recipe/entities/recipe.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Author, (author) => author.recipes, { eager: true })
    recipes: Recipe[]
}
