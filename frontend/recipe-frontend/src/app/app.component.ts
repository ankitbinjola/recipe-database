import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RecipeService } from './services/recipe.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'recipe-frontend';
  selectedRecpies: any;
  recipes: any;
  isNew: any;
  displayDialog: boolean = false;

  constructor(private recipeService: RecipeService) { }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'in parent');
    console.log(this.displayDialog, 'onchanges');
  }


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.recipeService.getAllRecipes().subscribe(res => {
      console.log(res, "recipes List----");
      this.recipes = res;
    })
  }


  showDialog(recipe: any, isNew: boolean) {
    this.isNew = isNew;
    this.selectedRecpies = recipe; // Set the product data to pass to the dialog
    this.displayDialog = true; // Show the dialog
    console.log(this.displayDialog, 'check value displau dialog')
  }

  deleteItem(id: any) {
    this.recipeService.DeleteRecipesById(id).subscribe(res => {
      console.log(res, "delete response");
      this.recipes = this.recipes.filter((item: { id: any; }) => item.id !== id)
    })
  }


}
