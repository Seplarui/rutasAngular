import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-char',
  templateUrl: './detail-char.component.html',
  styleUrls: ['./detail-char.component.css']
})
export class DetailCharComponent implements OnInit {

  character: any;
  char: string;
  constructor(private dataApi: DataApiService, private route: ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
    const char = this.route.snapshot.paramMap.get('char');
    console.log('CHAR: ' + char);
    this.getDetailChar(char);
  }

  getDetailChar(char: string) {

    this.dataApi.getDetailChar(char).subscribe((response) => {
      this.character = response;
    },
      (error) => { console.error(error); }
    );
    console.log('metodo detail-char: ' + char);
    this.dataApi.getDetailChar(char).subscribe((character) => console.log(character));

  }

  backClicked() {
    this._location.back();
  }

}
