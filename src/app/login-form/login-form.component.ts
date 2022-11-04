import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmailValidator, FormControl, Validators,FormBuilder,FormGroup,ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/authentication/login-request';
import { AuthenticationServiceService } from '../service/authentication-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  [x: string]: any;
  form!: FormGroup;


  loggedIn=false;
  constructor(private router: Router,private authenticationService:AuthenticationServiceService,private formBuilder: FormBuilder) { }

  // @Input() loggedIn:any;
  
  
  
  navigatePostLogin(): void {
    this.router.navigateByUrl('/search')
    // this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url }})
  }
  

  ngOnInit(): void {
    this.form=this.formBuilder.group(
      {
  
        email: ['', [Validators.required, Validators.email]],
            psw: [
              '',
              [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(40)
              ]
            ],
      });
    
  }
  OnSubmit(){
    this.loggedIn=true;
    if (this.form.invalid) {
      return;
    }
    this.navigatePostLogin();
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  reset(){
    this.loggedIn=false;
    this.form.reset();
  }

  login(): void {
    this.authenticationService.login(this.loginRequest)
      .subscribe(response => {
        this.authenticationService.token = response.token
        const returnUrl = this.route.snapshot.paramMap.get('returnUrl')
        this.router.navigateByUrl(returnUrl ? `/${returnUrl}` : '')
      })
  }
  
  register(): void {
    this.authenticationService.register(this.loginRequest)
      .subscribe(response => {})
  }
  
  // get loginRequest(): LoginRequest {
  //   return new LoginRequest(this.email, this.psw)
  // }
 


  /*  films = [
    {
      title: "Titanic",
      released: "19 Dec 1997",
      director: "James Cameron",
      actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
      plot:
        "84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
      metascore: "75"
    },
    {
      title: "Blade Runner",
      released: "25 Jun 1982",
      director: "Ridley Scott",
      actors: "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      plot:
        "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
      metascore: "89"
    },
    {
      title: "The Shining",
      released: "13 Jun 1980",
      director: "Stanley Kubrick",
      actors: "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      plot:
        "A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
      metascore: "63"
    }
  ]
 */

}
