import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe' , 'This is simply a test', 'https://get.pxhere.com/photo/table-wood-rustic-dish-meal-food-green-mediterranean-red-cooking-culinary-garlic-produce-vegetable-natural-fresh-brown-italy-baking-gourmet-healthy-dessert-lunch-cuisine-sauce-delicious-homemade-onion-preparation-dough-basil-pizza-cheese-pesto-cook-tomato-cutting-baked-dinner-wooden-tasty-tomatoes-vegetarian-cutting-board-quiche-fragrant-diet-herbs-italian-traditional-flour-mozzarella-parchment-paper-salt-shaker-parmesan-cheese-arugula-pizza-cutter-salt-grinder-sundried-tomatoes-608902.jpg'),
    new Recipe('Another Test Recipe' , 'This is simply a test', 'https://get.pxhere.com/photo/table-wood-rustic-dish-meal-food-green-mediterranean-red-cooking-culinary-garlic-produce-vegetable-natural-fresh-brown-italy-baking-gourmet-healthy-dessert-lunch-cuisine-sauce-delicious-homemade-onion-preparation-dough-basil-pizza-cheese-pesto-cook-tomato-cutting-baked-dinner-wooden-tasty-tomatoes-vegetarian-cutting-board-quiche-fragrant-diet-herbs-italian-traditional-flour-mozzarella-parchment-paper-salt-shaker-parmesan-cheese-arugula-pizza-cutter-salt-grinder-sundried-tomatoes-608902.jpg')
  ];

 getRecipes() {
   return this.recipes.slice();
 }
}
