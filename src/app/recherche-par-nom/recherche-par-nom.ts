import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule,SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom implements OnInit {
  nomMovie!: string;
  movies!: Movie[];
  allMovies!: Movie[];
  searchTerm!: string;

onKeyUp(filterText: string) {
  this.movies = this.allMovies.filter(item =>
    item.nomMovie!.toLowerCase().includes(filterText.toLowerCase())
  );
}

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.listeMovies().subscribe(movs => {
      console.log(movs);
      this.movies = movs;
    });
  }

  rechercherMovies() {
    if (this.nomMovie) {
      this.movieService.rechercherParNom(this.nomMovie)
        .subscribe(movs => {
          console.log(movs);
          this.movies = movs;
        });
    } else {
      // If search field is empty, show all movies
      this.movieService.listeMovies().subscribe(movs => {
        console.log(movs);
        this.movies = movs;
      });
    }
  }
}