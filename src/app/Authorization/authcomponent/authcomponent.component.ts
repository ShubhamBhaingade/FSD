import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCredential } from '../../Entities/user-credential';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authcomponent',
  templateUrl: './authcomponent.component.html',
  styleUrl: './authcomponent.component.css',
})
export class AuthcomponentComponent {

  constructor(private authService: AuthService, private router: Router) {
      
  }

  
  newuser: FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]{2,45}$/)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),

  });

  user: UserCredential = new UserCredential('', '', '');

  register() {
    this.user = this.newuser.value;
    this.authService.registerNewUser(this.user).subscribe(
      (data) => {
        this.user = data;
        alert(
          'Your Account has been Registered sucessfully,Now You Can Login With Your Credentials.'
        );
        this.router.navigate(['']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
