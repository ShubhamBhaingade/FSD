import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-dashboard',
  templateUrl: './library-dashboard.component.html',
  styleUrl: './library-dashboard.component.css',
})
export class LibraryDashboardComponent {
  constructor(private router: Router) {}

  goToHome() {
    localStorage.clear();
    this.router.navigate(['']);
  }
  goToAuthor(){
    this.router.navigate(['/author']);
  }
  goToPublisher(){

  }
  goToBook(){

  }
  goToStudent(){
    
  }
}
