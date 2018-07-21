import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Monterey Jerk Dog',
      'Give your next barbecue.', 
      'https://images.media-allrecipes.com/userphotos/560x315/4469224.jpg'),
    new Recipe(
      'Texas Chili Dog',
      'Whether youre tailgating', 
      'https://images.media-allrecipes.com/userphotos/560x315/4469231.jpg'),
    new Recipe(
      'A Test Recipe',
      'This is simply Test',
      'https://images.media-allrecipes.com/userphotos/560x315/1323674.jpg')
  ];


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
