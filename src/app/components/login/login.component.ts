import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage:string='';
  successMessage:string='';
  credentials={username:'',password:''}

  constructor(private router:Router,private authService : AuthService,private route: ActivatedRoute) {}
 
  ngOnInit() {
    console.log("Inside Login Component ngOnInit() method");
    this.route.queryParams.subscribe(params => {
      if(params['errorMessage'] != null && params['errorMessage'] != ''){
        this.errorMessage = params['errorMessage'];
        this.successMessage = '';
      }
      if(params['successMessage'] != null && params['successMessage'] != ''){
        this.successMessage = params['successMessage'];
        this.errorMessage = '';
      }
    });
  }

  login(){
    console.log("Inside Login Component Login() method");
    this.authService.login(this.credentials).subscribe(
      (response) =>{
        console.log('Login successful:', response);
        this.successMessage = 'Login Successfull'
        this.errorMessage = '';
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login failed:', error);
        this.successMessage = ''
        this.errorMessage = 'Invalid username or password.';
      }
    )
  }

  register(){
    console.log("Register button clicked");
    this.router.navigate(['/register']);
  }
}
