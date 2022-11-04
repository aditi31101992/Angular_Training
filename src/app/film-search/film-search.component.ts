import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {

  constructor(private authService: AuthenticationServiceService) { }
  films=[];
  FormSubmit=false;

  ngOnInit(): void {
    this.FormSubmit=true;
  }

  @Output() loggedIn: EventEmitter<any> = new EventEmitter<any>();

  addNewTask(task: any): void {
    this.loggedIn.emit(task);
  }

  searchFilms(){
    this.FormSubmit=true;
  }
   
  doLogout(){
    this.authService.logOut();
  }
}
