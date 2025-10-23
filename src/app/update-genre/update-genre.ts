import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Genre } from '../model/genre.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-genre',
  imports: [FormsModule],
  templateUrl: './update-genre.html',
  styles: ``,
})
export class UpdateGenre {
  @Input()
  genre!: Genre;
  @Input()
  ajout!: boolean;

  @Output()
  genreUpdated = new EventEmitter<Genre>();

  saveGenre() {
    this.genreUpdated.emit(this.genre);
  }

  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateGenre ', this.genre);
  }
}
