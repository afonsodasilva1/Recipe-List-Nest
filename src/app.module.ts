import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevelopersModule } from './author/author.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './contact/contact.module';
import { RecipeModule } from './recipe/recipe.module';
import { FavoriteModule } from './favorite/favorite.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
      
      //beforeConnect: async (connection) => { await connection.query('PRGMA foreign_keys = ON;')}
    }),
    DevelopersModule,
    ContactModule,
    RecipeModule,
    FavoriteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
