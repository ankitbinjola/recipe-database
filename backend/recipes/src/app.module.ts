import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipeModel/recipe.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'database',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'root_password',
      database: process.env.DB_NAME || 'recipe_db',
      entities: [Recipe],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Recipe]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
