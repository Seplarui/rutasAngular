import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-characters',
  templateUrl: './get-characters.component.html',
  styleUrls: ['./get-characters.component.css']
})
export class GetCharactersComponent implements OnInit {

  characters: any[];
  urlApi: string;
  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {

    this.dataApi.getCharacters().subscribe((response) => {
      this.characters = response;
    },
      (error) => { console.error(error); }
    );

    this.dataApi.getCharacters().subscribe((characters) => console.log(characters)); // mostrar en consola
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

      }
    }
  }
}
