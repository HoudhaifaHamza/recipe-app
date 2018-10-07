import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredien.model';
// import { EventEmitter } from '@angular/core';

export class ShoppingListService {


    // ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredientChanged = new Subject<Ingredient[]>();

    itemEdited = new Subject<number>();


    ingredients: Ingredient[] = [


        new Ingredient('Tomatos', 10),

        new Ingredient('Potatos', 15),



    ];


    getIngredients() {


        return this.ingredients.slice();


    }

    getIngredient(index: number) {

        return this.ingredients[index];


    }

    AddIngredient(ingredient: Ingredient) {

        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());

    }


    AddIngredients(ingredient: Ingredient[]) {

        // if (!ingredient){}

        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());

        //   else {console.log("ingredient exist");} 

    }

    UpdateIngredient(index : number , newIngredient : Ingredient){

        this.ingredients[index] = newIngredient ;
        this.ingredientChanged.next(this.ingredients.slice()) ;


    }

    DeleteIngredient(index :number){

        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice()) ;


    }

}