import { Recipe } from "src/recipe/entities/recipe.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('favorite')
export class Favorite {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Recipe, (recipe) => recipe.favorites)
    recipe: Recipe
}
