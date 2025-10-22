import { Genre } from './genre.model';

export class Movie {
  idMovie?: number;
  nomMovie?: string;
  prixMovie?: number;
  dateCreation?: Date;
  genre?: Genre;
}