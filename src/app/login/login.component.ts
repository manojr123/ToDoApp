import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  username ='Manoj'
  password ='123'
  errorMessage='Invalid credentials'
  invalidLogin = false;

  // Router - dependency
  // Dependency Injection - it is a built in feature
  // In Angular when we pass an arg to constructor, that will be available as a member variable
  constructor(private router: Router) {

  }
  

  handleLogin() {
    console.log("username", this.username);
    console.log("password", this.password);

    if ( ( this.username !== 'Manoj' ) || (this.password !== 'dummy') ) {
      this.invalidLogin = true;
    } else {
      this.router.navigate(['welcome',this.username]);
    }

  }
}
