// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Recipe } from './recipeModel/recipe.entity';

@Controller('recipes')
export class AppController {
  [x: string]: any;
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   console.log('testing..');
  //   return this.appService.getHello();
  // }
  @Get()
  findAll(): Promise<Recipe[]> {
    return this.appService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Recipe> {
    return this.appService.findOne(id);
  }

  @Post()
  async create(
    @Body() recipe: Recipe,
  ): Promise<{ status: boolean; body: Recipe }> {
    console.log(recipe, 'body--');
    const result = await this.appService.create(recipe);
    return {
      status: true,
      body: result,
    };
  }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() recipe: Partial<Recipe>,
  ): Promise<{ status: boolean; body: Recipe }> {
    const result = await this.appService.update(id, recipe);
    return {
      status: true,
      body: result,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const result = await this.appService.delete(id);
    console.log(result, 'Result');
    return {
      status: true,
      body: result,
    };
  }
}
