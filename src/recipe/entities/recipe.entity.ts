import { Author } from "src/author/entities/author.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('recipe')
export class Recipe {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @ManyToOne(() => Author , (author) => author.recipes, { eager: true })
    @JoinColumn({ name: 'authorId'})
    author: Author

    @OneToMany(() => Recipe, (recipe) => recipe.favorites)
    favorites: Recipe[]
}
