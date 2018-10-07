import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService , private router : Router) { }

  ngOnInit() {

    this.route.params.subscribe(

      (params: Params) => {

        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();

        console.log(this.editMode);


      }

    );

  }
  onSubmit() {
     
  //   const newRecipe = new Recipe (this.recipeForm.value['name'] , 
  //   this.recipeForm.value['imagePath'], 
  //   this.recipeForm.value['description'],
  // this.recipeForm.value['ingredient'])

    if (this.editMode){

      this.recipeService.updateRecipe(this.id, this.recipeForm.value) ; // sinon on peut mettre tout simplement newRecipe
      //  console.log(this.editMode);
   
    }
    else {

      this.recipeService.addRecipe(this.recipeForm.value);
      // console.log(this.editMode);
      
    }

    this.onCancel() ;

console.log(this.recipeForm.value);

  }


  onCancel(){

    this.router.navigate(['../'], {relativeTo : this.route})
  }


  

  onAddIngredient(){

   ( <FormArray>this.recipeForm.get('ingredient')).push(
   
    new FormGroup ({

      'name' : new FormControl (null, Validators.required) ,
      'amount' : new FormControl (null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)

      ])

    })  
   );
  }


  onDeleteIngredient(index : number) {

    ( <FormArray>this.recipeForm.get('ingredient')).removeAt(index) ;

  }


  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let ingredientRecipe = new FormArray([]);

    if (this.editMode) {

      const recipe = this.recipeService.getRecipes(this.id)
      recipeName = recipe.name,
        recipeImagePath = recipe.imagePath,
        recipeDescription = recipe.description
      if (recipe['ingredient']) {

        for (let ing of recipe.ingredient) {

          ingredientRecipe.push(
            new FormGroup({
              'name': new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount, [

                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)

              ]),

            })


          );
        }
      }
    }

    this.recipeForm = new FormGroup({

      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredient' : ingredientRecipe ,



    });




  }

}
