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

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.chargerMovies();
  }

  chargerMovies() {
    this.movieService.listeMovies().subscribe(movs => {
      console.log(movs);
      this.movies = movs;
    });
  }

  supprimerMovie(m: Movie) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.movieService.supprimerMovie(m.idMovie!).subscribe(() => {
        console.log("movie supprimé");
        this.chargerMovies();
      });
    }
  }

}