import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetCharactersComponent } from './components/get-characters/get-characters.component';
import { DetailCharComponent } from './components/detail-char/detail-char.component';

@NgModule({
  declarations: [
    AppComponent,
    GetCharactersComponent,
    DetailCharComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
