import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevelopersModule } from './author/author.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './contact/contact.module';
import { RecipeModule } from './recipe/recipe.module';
import { FavoriteModule } from './favorite/favorite.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    DevelopersModule,

    ContactModule,

    RecipeModule,

    FavoriteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
