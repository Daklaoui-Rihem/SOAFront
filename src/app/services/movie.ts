import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Genre } from '../model/genre.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiURL: string = 'http://localhost:8080/movies/api';

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

  listeGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiURL + "/gen");
  }
}