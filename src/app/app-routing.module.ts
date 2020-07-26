import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetCharactersComponent } from './components/get-characters/get-characters.component';


const routes: Routes = [
  { path: '', component: GetCharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
