import { Author } from "src/author/entities/author.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('recipe')
export class Recipe {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @ManyToOne(() => Author , (author) => author.recipes)
    @JoinColumn({ name: 'authorId'})
    author: Author
}
