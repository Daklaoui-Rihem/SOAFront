import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.html',
  imports: [CommonModule, RouterLink, RouterOutlet],

})
export class Movies implements OnInit {
  movies?: Movie[];
  private movieService = new MovieService();

  ngOnInit(): void {
    this.movies = this.movieService.listeMovies();
  }

  supprimerMovie(m: Movie) {
    //console.log(m);
    let conf = confirm('Etes-vous sûr ?');
    if (conf){ 
      this.movieService.supprimerMovie(m);
    }
  }

  constructor() {}
}
