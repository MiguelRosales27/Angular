import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLesson3';
  title2 = 'Hobbies'
  person = 'Miguel';
  age = '16';
  title3 = 'Favorite Movies'
  textToChange = 'Movie';
  hobbyArray = ["I like to play videogames", "I like to draw", "I like to binge watch series"];
}

