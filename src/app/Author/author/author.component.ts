import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  constructor(private router: Router) {}
  isAddAuthor: boolean = false;
  authors: boolean = false;

  getToAuthorLoginPage() {
    this.isAddAuthor = true;
  }
  goToAllAuthors() {
    this.authors = true;
    this.router.navigate(['/allAuthors']);
  }

  goToAllBooks() {
    this.router.navigate(['/bookByAuthor']);
  }
  goToDashBoard() {
    this.router.navigate(['/dashboard']);
  }
}
