import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage:string='';
  credentials={username:'',password:''}

  constructor(private router:Router,private authService : AuthService) {}

  login(){
    // this.authService.login(this.credentials).subscribe(
    //   (response) =>{
    //     console.log('Login successful:', response);
    //     this.router.navigate(['/dashboard']);
    //   },
    //   (error) => {
    //     console.error('Login failed:', error);
    //     this.errorMessage = 'Invalid username or password.';
    //   }
    // )
  }
}
