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


}

