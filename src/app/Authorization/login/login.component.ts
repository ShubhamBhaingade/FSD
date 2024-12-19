import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { AuthRequest } from '../../DTO/auth-request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authservice: AuthService,private router:Router) {}

  authRequest: AuthRequest = new AuthRequest('', '');
  

  loginUser: FormGroup = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]{2,45}$/)]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    role:new FormControl('',Validators.required)
  });

  generateCredential() {
    
    const loginFormData = {
     username:this.loginUser.get('username')?.value||'',
     password:this.loginUser.get('password')?.value||'',
     role:this.loginUser.get('role')?.value||''
    }

    this.authRequest.username=loginFormData.username;
    this.authRequest.password=loginFormData.password;
   
    this.authservice.getToken(this.authRequest).subscribe(
      (data) => {
        localStorage.setItem('token',data);
       if(loginFormData.role=='admin'){
        this.router.navigate(['/dashboard']);
       }else if(loginFormData.role=='customer'){
        alert('will redirect to customer module!!')
       }
      },
      (err) => {
        console.log(err.message);
        alert('Invalid Credentials!!')
      }
    );
  }
}
