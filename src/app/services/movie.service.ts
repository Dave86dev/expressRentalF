import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url='http://localhost:3000/films/';
  title = `Western`;
  genre: string;
  films: object[];
  filmsGenre: object[];


  constructor(private httpClient:HttpClient) { }

   getDisplayMovies():Observable<any>{
      
      return this.httpClient.get(this.url + `popular/6`);
      
   }

   getTitleMovies(title:string):Observable<any>{

      return this.httpClient.get(this.url + `title/` + title);

   }
   
   getGenreMovies(genre:string):Observable<any>{
      return this.httpClient.get(this.url + `genre/` + genre);
   }

   setFilms(films:object[]):void{
      this.films=films
   }
   getFilms():object{
      return this.films
   }

   setFilmsGenre(filmsGenre:object[]):void{
      this.filmsGenre=filmsGenre
   }

   getFilmsGenre():object{
      return this.filmsGenre
   }
}
