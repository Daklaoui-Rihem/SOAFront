import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Genre } from '../model/genre.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-movie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-movie.html',
})
export class UpdateMovie implements OnInit {
  currentMovie = new Movie();
  genres!: Genre[];
  updatedGenId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieService.listeGenres().subscribe(gens => {
      this.genres = gens;
      console.log(gens);
    });

    this.movieService
      .consulterMovie(this.activatedRoute.snapshot.params['id'])
      .subscribe(mov => {
        this.currentMovie = mov;
        this.updatedGenId = this.currentMovie.genre!.idGenre!;
      });
  }

  updateMovie() {
    this.currentMovie.genre = this.genres.find(
      gen => gen.idGenre == this.updatedGenId
    )!;
    this.movieService.updateMovie(this.currentMovie).subscribe(mov => {
      this.router.navigate(['movies']);
    });
  }
}