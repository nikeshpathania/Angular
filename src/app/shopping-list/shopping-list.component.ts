import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient []= [
    new Ingredient(
      'Paneer (Indian Cottage Cheese)',
      '250 gm'),
    new Ingredient(
      'Cup Diced Onions',
      '1/2'),
    new Ingredient(
      'Cup Capsicum (Bell Peppers)',
      '1/2'),
    new Ingredient(
      'Cup Strained Yogurt (Curd) or Greek Yogurt',
      '1/2')
  ];

  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

  }

}
