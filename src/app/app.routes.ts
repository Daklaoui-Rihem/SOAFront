import { Routes } from '@angular/router';
import { Movies } from './movies/movies';
import { AddMovie } from './add-movie/add-movie';
import { UpdateMovie } from './update-movie/update-movie';
import { RechercheParGenre } from './recherche-par-genre/recherche-par-genre';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { ListeGenres } from './liste-genres/liste-genres';
import { LoginComponent } from './login/login';
import { ForbiddenComponent } from './forbidden/forbidden';
import { movieGuard } from './services/movie-guard';

export const routes: Routes = [
    {path: "movies", component: Movies},
    {path: "add-movie", component: AddMovie, canActivate: [movieGuard]},
    {path: "updateMovie/:id", component: UpdateMovie},
    {path: "rechercheParGenre", component: RechercheParGenre},
    {path: "rechercheParNom", component: RechercheParNom},
    {path: "listeGenres", component: ListeGenres},
    {path: "login", component: LoginComponent},
    {path: "app-forbidden", component: ForbiddenComponent},
    {path: "", redirectTo: "movies", pathMatch: "full"}
];