import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Genre } from '../model/genre.model';
import { GenreWrapper } from '../model/genre-wrapper.model'; // Add this import

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiURL: string = 'http://localhost:8080/movies/api';
  apiURLGen: string = 'http://localhost:8080/movies/api/gen'; // Changed URL

  constructor(private http: HttpClient) {}

  listeMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiURL);
  }

  ajouterMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiURL, movie, httpOptions);
  }

  supprimerMovie(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterMovie(id: number): Observable<Movie> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Movie>(url);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.apiURL, movie, httpOptions);
  }

  listeGenres(): Observable<GenreWrapper> {
    // Changed return type
    return this.http.get<GenreWrapper>(this.apiURLGen);
  }

  rechercherParGenre(idGen: number): Observable<Movie[]> {
    const url = `${this.apiURL}/movsgenre/${idGen}`;
    return this.http.get<Movie[]>(url);
  }

  rechercherParNom(nom: string): Observable<Movie[]> {
  const url = `${this.apiURL}/movsByName/${nom}`;
  return this.http.get<Movie[]>(url);
}
}
