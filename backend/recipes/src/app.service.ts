import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/recipeModel/recipe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  findOne(id: number): Promise<Recipe> {
    return this.recipeRepository.findOneBy({ id });
  }

  create(recipe: Recipe): Promise<Recipe> {
    return this.recipeRepository.save(recipe);
  }
  async update(id: number, recipe: Partial<Recipe>): Promise<any> {
    await this.recipeRepository.update(id, recipe);
  }

  async delete(id: number): Promise<any> {
    await this.recipeRepository.delete(id);
  }
}
