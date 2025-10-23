import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Genre } from '../model/genre.model';
import { MovieService } from '../services/movie';
import { UpdateGenre } from "../update-genre/update-genre";

@Component({
  selector: 'app-liste-genres',
  imports: [UpdateGenre],
  templateUrl: './liste-genres.html',
  styles: ``
})
export class ListeGenres implements OnInit{

  genres!: Genre[];
  updatedGen: Genre = {"nomGenre": ""};
  ajout: boolean = true;
  
  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {
    this.movieService.listeGenres().subscribe(gens => {
      this.genres = gens._embedded.genres;
      console.log(gens);
    });
  }

  genreUpdated(gen: Genre){
  console.log("Gen updated event", gen);
  this.movieService.ajouterGenre(gen).subscribe(() => this.chargerGenres());
}

chargerGenres(){
  this.movieService.listeGenres().subscribe(gens => {
    this.genres = gens._embedded.genres;
    console.log(gens);
  });
}

updateGen(gen: Genre) {
  this.updatedGen = gen;
  this.ajout = false;
}

}
