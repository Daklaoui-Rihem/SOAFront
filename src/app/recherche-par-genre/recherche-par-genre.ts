import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Movie } from '../model/movie.model';
import { Genre } from '../model/genre.model';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-recherche-par-genre',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-genre.html',
  styles: ``
})
export class RechercheParGenre implements OnInit {
  movies!: Movie[];
  IdGenre!: number;
  genres!: Genre[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.listeGenres().subscribe(gens => {
      this.genres = gens._embedded.genres;
      console.log(gens);
    });
  }

  onChange() {
    this.movieService.rechercherParGenre(this.IdGenre)
      .subscribe(movs => { this.movies = movs; });
  }
}