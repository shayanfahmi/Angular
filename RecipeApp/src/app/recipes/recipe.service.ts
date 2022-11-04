import { Recipe } from "./recipe.model";

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Country-Chuck-Roast-with-Mushroom-Gravy_EXPS_DODBZ20_132000_B07_23_3b-11.jpg?resize=522%2C522&w=680'),
    new Recipe('A Test Recipe1', 'This is a test', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Country-Chuck-Roast-with-Mushroom-Gravy_EXPS_DODBZ20_132000_B07_23_3b-11.jpg?resize=522%2C522&w=680')
  ];

  getRecipes() {
    return this.recipes.slice(); //to return a copy as javascript returns the reference
  }
}