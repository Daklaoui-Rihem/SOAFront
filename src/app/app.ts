import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Movies } from "./movies/movies";

@Component({
  selector: 'app-root',
  imports: [RouterLink, Movies],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('MesMovies');
}
