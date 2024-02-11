import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiDataService {

  constructor(private httpClient: HttpClient) { }

  getSwapiData(): Observable<any>{
    return this.httpClient.get('https://swapi.dev/api/people/1/');
  }

}
