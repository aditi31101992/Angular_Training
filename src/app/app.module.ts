import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FilmSearchComponent } from './film-search/film-search.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StartRatingPipe } from './start-rating.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmSearchComponent,
    LoginFormComponent,
    StartRatingPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    FilmComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
