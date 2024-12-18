import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {tap,map, catchError} from 'rxjs/operators';
import { Country } from '../interfaces/country';
import { error } from 'console';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string='https://restcountries.com/v3.1'



  constructor(private http: HttpClient) { }

  searchCapital(term: string ):Observable<Country[]> {
  const url = `${ this.apiUrl }/capital/${ term }`;

   return  this.http.get<Country[]>(url)
   .pipe(
    catchError( ()=>of([]))

  );

}

searchCountry(term: string): Observable<Country[]> {
  const url = `${ this.apiUrl }/name/${ term }`;

   return  this.http.get<Country[]>(url)
   .pipe(
    catchError( ()=>of([]))

  );

}

searchRegion(region: string): Observable<Country[]> {
  const url = `${ this.apiUrl }/region/${ region }`;

   return  this.http.get<Country[]>(url)
   .pipe(
    catchError( ()=>of([]))

  );
}

}
