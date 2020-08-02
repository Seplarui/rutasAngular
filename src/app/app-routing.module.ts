import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetCharactersComponent } from './components/get-characters/get-characters.component';
import { DetailCharComponent } from './components/detail-char/detail-char.component';
import { HomeComponent } from './components/home/home.component';
import { SearchCharactersComponent } from './components/search-characters/search-characters.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'detail/:char', component: DetailCharComponent, pathMatch: 'full' },
  { path: 'characters', component: GetCharactersComponent, pathMatch: 'full' },
  { path: 'search', component: SearchCharactersComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
