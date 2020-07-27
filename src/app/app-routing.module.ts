import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetCharactersComponent } from './components/get-characters/get-characters.component';
import { DetailCharComponent } from './components/detail-char/detail-char.component';


const routes: Routes = [
  { path: '', component: GetCharactersComponent },
  { path: 'detail/:char', component: DetailCharComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
