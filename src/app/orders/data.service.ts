import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private lukeSubject = new BehaviorSubject<any>('')

 name$ = this.lukeSubject.asObservable();

  getHero(): Observable<any>{
    return this.name$ = this.lukeSubject;
  }

  setHero(hero: any): void{
    return this.lukeSubject.next(hero);
  }

}