import { Component } from '@angular/core';
import { AuthenticationServiceService } from './service/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Search Films'
orderReference = 'ABCXYZ'
price = 17.3
loggedIn=false;
  constructor(private authService: AuthenticationServiceService){
    console.log("App component")
  }

 
}
