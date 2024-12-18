import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country []=[];

  constructor( private CountriesService: CountriesService ) { }


  searchByCountry(term:string): void{
    this.CountriesService.searchCountry( term )
    .subscribe( countries =>{
      this.countries= countries

    });
  }

}
