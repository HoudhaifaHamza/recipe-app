import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredien.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {



  ingredients : Ingredient [] ;
  private subscription : Subscription ;

  constructor(private slService :ShoppingListService) { }

  ngOnInit() {

    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientChanged.subscribe(


      (ingredients: Ingredient[]) => {

      this.ingredients = ingredients ;
	  console.log(ingredients) ;


      }


    )
  }


  onAddedItem (ing : Ingredient) {

this.ingredients.push(ing);


  }

  onEditItem(index : number){

 this.slService.itemEdited.next(index);

  }


  ngOnDestroy(){
this.subscription.unsubscribe();

  }

}
