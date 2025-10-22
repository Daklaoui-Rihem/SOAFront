import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule],
  templateUrl: './add-movie.html',
})
export class AddMovie implements OnInit {
  newMovie = new Movie();
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {}
  ajouterMovie() {
    //console.log(this.newMovie);
    this.movieService.ajouterMovie(this.newMovie);
  }
}
