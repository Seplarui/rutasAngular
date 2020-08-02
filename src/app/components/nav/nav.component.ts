import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  result: any[];
  mensajeError = '';
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

      }
    );
    return this.mensajeError;
  }

}

