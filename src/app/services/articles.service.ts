import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {map, share} from 'rxjs/operators';

class Repo {
  constructor(public id : string, public name : string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  /***Operado de navegacion segura***/
  public articlesCount : number = 0;

  public reposObserver : Observable<Repo[]>;

  constructor(private http: HttpClient) {
  }

  getAll(){
    //https://codigofacilito.com/articulos.json
    this.reposObserver = this.http.get('https://api.github.com/users/codigofacilito/repos')
      .pipe( map((data : Object[]) => {
      return data.map((r : any) => new Repo(r.id, r.name))
    }))
      .pipe(share());
  }

  buildObservable() : Observable<any>{
    let number = 0;
    return Observable.create(function (observer) {
      setInterval(() => observer.next(number++), 1000);
    })
  }
}
