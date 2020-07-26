import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-get-characters',
  templateUrl: './get-characters.component.html',
  styleUrls: ['./get-characters.component.css']
})
export class GetCharactersComponent implements OnInit {

  characters: any[];
  constructor(private dataApi: DataApiService) { }


  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.dataApi.getCharacters().subscribe((characters) => console.log(characters)); // mostrar en consola


  }

}
