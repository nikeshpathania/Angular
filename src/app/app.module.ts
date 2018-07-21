import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

// const appRoutes: Routes = [
//     { path: 'recipe', component: RecipeListComponent },
//     { path: 'shopping-list', component: ShoppingListComponent },
    
//     { path: '**', component: RecipeListComponent }
// ];
@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipesComponent,
      ShoppingListComponent,
      ShoppingEditComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      RecipeItemComponent
   ],
   imports: [
      BrowserModule,
      NgbModule.forRoot(),
    //   RouterModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
