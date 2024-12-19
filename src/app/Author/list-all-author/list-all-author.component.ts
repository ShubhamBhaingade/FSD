import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../Service/author.service';
import { AuthorResponseDto } from '../../DTO/author-request-dto';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-all-author',
  templateUrl: './list-all-author.component.html',
  styleUrl: './list-all-author.component.css',
})
export class ListAllAuthorComponent implements OnInit {
  constructor(private authorService: AuthorService, private router: Router) {}

  authorsArray: AuthorResponseDto[] = [];
  isVisible: boolean = false;
  text: string = 'Show Authors';
  isEditAuthor: boolean = false;
  currentAuthorId: number = 0;

  ngOnInit(): void {}

  doToggle() {
    if (!this.isVisible) {
      this.isVisible = true;
      this.text = 'Hide Authors';
    } else if (this.isVisible) {
      this.isVisible = false;
      this.text = 'Show Authors';
    }
  }
  getAllAvaliableAuthors() {
    this.doToggle();
    this.authorService.getAllAuthors().subscribe(
      (data) => {
        this.authorsArray = data;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  authorDto: AuthorResponseDto = new AuthorResponseDto(0, '', '', '', '','');

  editAuthorForm:FormGroup=new FormGroup({
    authorName: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]{2,45}$/)]),
    contactNumber:new FormControl('',[Validators.required,Validators.pattern(/^[6-9][0-9]{9}$/)]),
    awardsReceived: new FormControl(''),
    about: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-z0-9\s]{3,256}$/)]),
    aadharNumber:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/)
  ])
  });

  setFormValues(author: AuthorResponseDto): void {
    this.editAuthorForm.patchValue({
      authorName: author.authorName,
      contactNumber: author.contactNumber,
      awardsReceived: author.awardsReceived,
      about: author.about,
      aadharNumber:author.aadharNumber
    });
  }

  goToEditAuthor(authorId: number): void {
    this.isVisible = false;
    const selectedAuthor = this.authorsArray.find(
      (author) => author.authorId === authorId
    );

    if (selectedAuthor) {
      this.setFormValues(selectedAuthor);
      this.isEditAuthor = true;
      this.currentAuthorId = selectedAuthor.authorId;
    }
  }

  editAuthor() {
    this.authorDto = this.editAuthorForm.value;

    this.authorService
      .updateAuthorInfo(this.currentAuthorId, this.authorDto)
      .subscribe(
        (data) => {
          this.authorDto = data;

          alert(
            'Information has now updated sucessfully for Author:___' +
              this.authorDto.authorName
          );
          this.isEditAuthor = false;
          this.text = 'Show Authors';
        },
        (err) => {
          console.log(err.message);
        }
      );
  }


  deleteAuthor(authorId: number) {
    this.authorService.deleteAuthor(authorId).subscribe(
      (data) => {
        alert(data.msg);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}
