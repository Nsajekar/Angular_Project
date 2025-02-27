import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  errorMessage:string='';
  successMessage:string='';
  credentials={username:'',password:''}
  
  constructor(private router:Router,private authService : AuthService) {}

  ngOnInit() {
    console.log("Inside Register Component");
  }

  register(){
    console.log("Inside Register Component Register() method");
    this.authService.register(this.credentials).subscribe(
      (response) =>{
        console.log('Registration successful:', response);
        this.successMessage = 'Registration Successfull'
        this.errorMessage = '';
        this.router.navigate(['/login'],{ 
          queryParams: { successMessage: this.successMessage, errorMessage: this.errorMessage },
          queryParamsHandling: 'merge',
          replaceUrl: true
        });
      },
      (error) => {
        console.error('Registration failed:', error);
        this.successMessage = ''
        if(error.status === 409){
           this.errorMessage = 'User Name Already Exits!'
        }else{
          this.errorMessage = 'Registartion Failed!';
        }
      }
    )
  }

  login(){
    console.log("Login button clicked");
    this.router.navigate(['/login']);
  }
}
