import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../model/movie.model';
import { Genre } from '../model/genre.model';
import { MovieService } from '../services/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-movie.html',
})
export class AddMovie implements OnInit {
  newMovie = new Movie();
  genres!: Genre[];
  newIdGen!: number;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieService.listeGenres().subscribe((gens) => {
      this.genres = gens._embedded.genres;
      console.log(gens);
    });
  }

  ajouterMovie() {
    this.newMovie.genre = this.genres.find((gen) => gen.idGenre == this.newIdGen)!;
    this.movieService.ajouterMovie(this.newMovie).subscribe((mov) => {
      console.log(mov);
      this.router.navigate(['movies']);
    });
  }
}
