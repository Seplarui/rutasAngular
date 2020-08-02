import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-search-characters',
  templateUrl: './search-characters.component.html',
  styleUrls: ['./search-characters.component.css']
})
export class SearchCharactersComponent implements OnInit {

  result: any[];
  mensajeError: '';

  constructor(private dataApi: DataApiService) { }

  ngOnInit(): void {
  }

  searchChar(formSearch: NgForm) {

    const searchCharacter = formSearch.value.nameChar;

    this.dataApi.searchChar(searchCharacter).subscribe((response) => console.log('response' + response['info'].count));
    this.dataApi.searchChar(searchCharacter).subscribe((response) => {
      this.result = response;
      this.mensajeError = '';
    },
      (error) => {
        console.error('Este es el error ' + error.ok),
          this.mensajeError = error.status,

          console.log('mensaje error: ' + this.mensajeError);
        this.result = [];
      }
    );
    return this.mensajeError;
  }
}
