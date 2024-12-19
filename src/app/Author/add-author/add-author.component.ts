import { Component } from '@angular/core';
import { AuthorResponseDto } from '../../DTO/author-request-dto';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { AuthorService } from '../../Service/author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css'
})
export class AddAuthorComponent {


  constructor(private authorService:AuthorService){

  }
  authorDto:AuthorResponseDto = new AuthorResponseDto(0,'','','','','');

  authorForm:FormGroup=new FormGroup({
    authorName: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z\s]{2,45}$/)]),
    contactNumber:new FormControl('',[Validators.required,Validators.pattern(/^[6-9][0-9]{9}$/)]),
    awardsReceived: new FormControl(''),
    about: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-z0-9\s]{3,256}$/)]),
    aadharNumber:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/)
  ])
  })

  registerNewAuthor(){

    this.authorDto=this.authorForm.value;
    this.authorService.registerAuthor(this.authorDto).subscribe((data)=>{
        this.authorDto=data;
        alert('Author '+data.authorName+" is now registered with library.")
    },
    (err)=>{
      console.log(err.message);
      
    }
    )
  }
 
}
