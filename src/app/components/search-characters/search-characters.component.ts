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
    this.dataApi.searchChar(searchCharacter).subscribe((response => console.log(response)));
    this.dataApi.searchChar(searchCharacter).subscribe((response) => console.log('response ' + response['info'].count));
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

  getPage(urlApi) {

    console.log(urlApi);

    if (urlApi === null || urlApi === '') {
      //
    } else {
      const page = urlApi.substring(48, urlApi.lenght);
      if (page === null || page === '') {
        this.dataApi.getCharPage(1).subscribe((response) => {
          this.characters = response;
        },
          (error) => { console.error(error); }
        );
      } else {
        console.log('Número de página: ' + page);
        this.dataApi.getCharPage(page).subscribe((response) => {
          this.characters = response;
        },
          (error) => { console.error(error); }
        );
        this.dataApi.getCharPage(page).subscribe((characters) => console.log(characters));
        this.mensajeError = '';
      }
    }
  }

  goToPage(formIrPagina: NgForm) {

    const pagina = formIrPagina.value.pagina;
    this.dataApi.getCharPage(pagina).subscribe((characters) => console.log(this.characters));

    this.dataApi.getCharPage(pagina).subscribe((response) => {
      this.characters = response;
      this.mensajeError = '';
    },
      (error) => {
        console.error('Este es el error ' + error.ok),
          this.mensajeError = error.status,

          console.log('kkmensaje error: ' + this.mensajeError);

      }
    );
    return this.mensajeError;
  }
}
