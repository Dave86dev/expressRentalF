import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url='http://localhost:3000/films/';
  title = `Western`;
  films: object;


  constructor(private httpClient:HttpClient) { }

   getDisplayMovies():Observable<object>{
      
      return this.httpClient.get(this.url + `popular/20`);
      
   }

   getTitleMovies(title:string):Observable<object>{

      return this.httpClient.get(this.url + `title/` + title);

   }

   setFilms(films:object):void{
      this.films=films
   }
   getFilms():object{
      return this.films
   }
}
