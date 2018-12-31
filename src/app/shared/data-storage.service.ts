import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

import { map } from 'rxjs/operators';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private  authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authorization', 'Bearer Ab2J3ito');

    // return this.httpClient.put('https://recipes-book-angular-1de01.firebaseio.com/recipes.json',
    //        this.recipeService.getRecipes(), {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //     // headers: headers
    //   });
    const req = new HttpRequest('PUT', 'https://recipes-book-angular-1de01.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {reportProgress: true, params: new HttpParams().set('auth', token)})
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();

    // this.httpClient.get<Recipe[]>('https://recipes-book-angular-1de01.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://recipes-book-angular-1de01.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json',
      params: new HttpParams().set('auth', token)
    })
      .pipe(map(
        (recipes) => {
          console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
