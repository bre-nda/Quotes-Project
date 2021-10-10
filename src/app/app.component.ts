import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  // quotes : Quote [] = [
  //   new Quote (1, 'Brenda Andeso', 'You only live once, but if you do it right, once is enough', 'Mae West',new Date(2021,3,21)),
  //   new Quote (2, 'Collins Wasonga','If you want to live a happy life,tie it to a goal, not people or things','Albert Einsten',new Date(2020,7,27)),
  //   new Quote (3, 'Ashley Livoga','Never let the fear of striking out keep you from playing the game','Babe Ruth',new Date(2020,9,16)),

  // ];
  quotes:Quote[] = [
    {id:1, description:'You only live once, but if you do it right, once is enough',author:'Mae West',publisher:'Brenda Andeso'},
    {id:2,description:'If you want to live a happy life, tie to a goal, not people or things',author:'Albert Einsten',publisher:'Collins Wasonga'},
    {id:3,description:'Never let the fear of striking out keep you from playing the game',author:'Albert Einsten',publisher:'Ashley Liavoga'},
  
  ];
}
