import { RecipeService } from './../recipe.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit , OnDestroy {

 
subscription : Subscription ;

  recipes : Recipe[];





  constructor(private recipeService: RecipeService,
             private router : Router ,
             private route : ActivatedRoute) { }

  ngOnInit() {

   this.subscription =  this.recipeService.recipeChanged.subscribe(

      (recipe : Recipe []) =>  {

        this.recipes = recipe ;
      }

    )

    this.recipes = this.recipeService.getRecipe();
  }

  onAddRecipe(){

 this.router.navigate(['new'], {relativeTo : this.route}) ;

 


  }


ngOnDestroy() {

  this.subscription.unsubscribe();
}


}
