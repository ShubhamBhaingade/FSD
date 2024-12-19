import { Component } from '@angular/core';
import { BookResponseDto } from '../../DTO/book-response-dto';
import { AuthorService } from '../../Service/author.service';

@Component({
  selector: 'app-book-author',
  templateUrl: './book-author.component.html',
  styleUrl: './book-author.component.css'
})
export class BookAuthorComponent {

  allBooks:BookResponseDto[]=[];
  isVisible:boolean=false;
  msg:string='Show Books'
  constructor(private authorService:AuthorService){

  }
  doToggle(){
    if(!this.isVisible){
      this.isVisible=true;
      this.msg='Hide Books';
    }else if(this.isVisible){
      this.isVisible=false;
      this.msg='Show Books';
    }
  }
  getBooks(name:string){
    this.doToggle();
    this.authorService.getAllBooksOfAuthor(name).subscribe((data)=>{
      this.allBooks = data;
      
    },(err)=>{
      console.log(err.message);
      
    })
  }
}
