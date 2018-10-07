import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from "@angular/core";

import { AuthGuard } from './auth/auth-Guard.service';

import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { Routes, RouterModule } from "@angular/router";
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { SignupComponent } from './auth/signup/signup.component';





const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipeComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: EditRecipeComponent, canActivate : [AuthGuard] },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: EditRecipeComponent, canActivate : [AuthGuard] },
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    {path:'signup' , component: SignupComponent},
    {path:'signin' , component: SigninComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })




export class RoutingModule {




}