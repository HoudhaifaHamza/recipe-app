import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredien.model';



@Injectable()
export class RecipeService {

    // recipeSelected = new EventEmitter<Recipe>();
    recipeChanged = new Subject <Recipe[]>();

    private recipe: Recipe[] = [

        new Recipe(

            'Test Recipe',
            'Good food and delecious',
            'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29.jpg'
            , [

                new Ingredient('comcombre', 20),

                new Ingredient('jenjambre', 3),

            ]

        ),

        new Recipe('Recipe 2',
            ' delecious',
            'https://www.campbellsoup.co.uk/img/recipes/6-campbells-vegetarian-pizza-recipe.jpg'
            , [

                new Ingredient('buns', 22),

                new Ingredient('meat', 13),

            ]

        ),


    ];


constructor(private SlService :ShoppingListService){}


    setRecipe(recipes : Recipe []) {

this.recipe = recipes ;
this.recipeChanged.next(this.recipe.slice());

    }


    getRecipe() {


        return this.recipe.slice();

    }

    getRecipes(index : number){

     return this.recipe[index];

    }

    addRecipe (recipe : Recipe){

        this.recipe.push(recipe) ;
        this.recipeChanged.next(this.recipe.slice());
    }

    updateRecipe (index : number , newRecipe : Recipe) {

        this.recipe[index] = newRecipe ;
        this.recipeChanged.next(this.recipe.slice())

    }

    deleteRecipe (index : number) {

        this.recipe.splice(index , 1 ) ;
        this.recipeChanged.next(this.recipe.slice()) ;

    }



    AddIngredientInShList(ingredients : Ingredient []){

        
 
    this.SlService.AddIngredients(ingredients);
    

   



    }

}