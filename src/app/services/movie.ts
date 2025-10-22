import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[];
  movie!: Movie;

  constructor() {
    this.movies = [
      { idMovie: 1, nomMovie: 'Iron Man', prixMovie: 300.6, dateCreation: new Date('01/14/2011') },
      {
        idMovie: 2,
        nomMovie: 'Captain America The First Avenger',
        prixMovie: 450,
        dateCreation: new Date('12/17/2010'),
      },
      { idMovie: 3, nomMovie: 'Ant Man', prixMovie: 250.123, dateCreation: new Date('02/20/2020') },
    ];
  }
  listeMovies(): Movie[] {
    return this.movies;
  }
  ajouterMovie(movie: Movie) {
    this.movies.push(movie);
  }

  supprimerMovie(prod: Movie) {
    const index = this.movies.indexOf(prod, 0);
    if (index > -1) {
      this.movies.splice(index, 1);
    }
  }

  consulterMovie(id:number): Movie{    
      this.movie =  this.movies.find(p => p.idMovie == id)!;
        return this.movie;
    }

  updateMovie(mov: Movie) {
    const index = this.movies.indexOf(mov, 0);
    if (index > -1) {
      this.movies.splice(index, 1);
      this.movies.splice(index, 0, mov);
    }
  }
}
