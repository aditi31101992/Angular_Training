import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmSearchComponent } from './film-search/film-search.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'search', component: FilmSearchComponent},
  {path: '', component:LoginFormComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
