import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private http: HttpClient) { }
  getCharacters() {
    // api paginacion
    // https://rickandmortyapi.com/api/character/?page=3

    const urlApi = 'https://rickandmortyapi.com/api/character/';

    return this.http.get<any>(urlApi);

  }

  getDetailChar(char: string) {
    console.log('API: ' + char);
    const urlApi = `https://rickandmortyapi.com/api/character/${char}`;
    return this.http.get<any>(urlApi);
  }

  getCharPage(page: number) {
    const urlApi =  `https://rickandmortyapi.com/api/character/?page=${page}`;
    return this.http.get<any>(urlApi);
  }
}




