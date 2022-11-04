import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 
      'This is a test', 
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Country-Chuck-Roast-with-Mushroom-Gravy_EXPS_DODBZ20_132000_B07_23_3b-11.jpg?resize=522%2C522&w=680',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'A Test Recipe1', 
      'This is a test', 
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Country-Chuck-Roast-with-Mushroom-Gravy_EXPS_DODBZ20_132000_B07_23_3b-11.jpg?resize=522%2C522&w=680',
      [
        new Ingredient('Buns', 2),
        new Ingredient('FMeat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice(); //to return a copy as javascript returns the reference
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}