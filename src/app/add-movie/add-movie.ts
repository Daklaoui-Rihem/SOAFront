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
    // Ne pas envoyer l'ID dans newMovie pour l'ajout
    this.newMovie.idMovie = undefined;
    
    // Créer un objet genre avec seulement l'ID
    this.newMovie.genre = { idGenre: this.newIdGen };
    
    console.log('Movie à ajouter:', this.newMovie);
    
    this.movieService.ajouterMovie(this.newMovie).subscribe({
      next: (mov) => {
        console.log('Movie ajouté:', mov);
        this.router.navigate(['movies']);
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout:', err);
        alert('Erreur lors de l\'ajout du movie');
      }
    });
  }
}