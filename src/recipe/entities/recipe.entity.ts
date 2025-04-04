import { Author } from "src/author/entities/author.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('recipe')
export class Recipe {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @OneToMany(() => Author , (author) => author.recipe)
    author: Author
}
