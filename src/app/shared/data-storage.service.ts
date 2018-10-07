import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipe/recipe.model';
import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";

import 'rxjs/add/operator/map';
//import 'rxjs/Rx';

import { RecipeService } from './../recipe/recipe.service';

@Injectable()
export class DataStorageService {


    constructor (private http : Http , private recipeService : RecipeService,
    private authService : AuthService){}


    storageRecipe(){

        const token = this.authService.getToken() ;

        return this.http.put('https://recipe-app-8eee5.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipe() )


    }

    getRecipe(){

        const token = this.authService.getToken() ;

        return this.http.get('https://recipe-app-8eee5.firebaseio.com/recipe.json?auth=' + token)

        .map(

            (res : Response ) => {

                const recipes : Recipe [] = res.json() ;
                for (let recipe of recipes) {

                    if (!recipe['ingredient']){

                        recipe['ingredient'] = [] ;
                    }

                }

                return recipes ;

            }


        )
        .subscribe(

            (recipes : Recipe[]) => {
           
            this.recipeService.setRecipe(recipes) 

            }
        ) ;

    }




}