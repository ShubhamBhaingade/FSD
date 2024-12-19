import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorResponseDto } from '../DTO/author-request-dto';
import { Observable } from 'rxjs';
import { BookResponseDto } from '../DTO/book-response-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private api: HttpClient) {}

  private contextpath = 'http://localhost:8087/author/';

  private saveAuthorEndPoint = this.contextpath + 'saveAuthor';
  private getAllAuthorEndPoint = this.contextpath + 'getAllAuthor';
  private updateAuthorEndPoint = this.contextpath + 'updateAuthor';
  private deleteAuthorEndPoint = this.contextpath + 'deleteAuthor';
  private bookAuthorEndPoint = this.contextpath+'bookByAuthorName';

  registerAuthor(authorDto: AuthorResponseDto): Observable<AuthorResponseDto> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    let result = this.api.post<AuthorResponseDto>(
      `${this.saveAuthorEndPoint}`,
      authorDto,
      { headers }
    );
    return result;
  }

  getAllAuthors(): Observable<AuthorResponseDto[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    let result = this.api.get<AuthorResponseDto[]>(
      `${this.getAllAuthorEndPoint}`,
      { headers }
    );
    return result;
  }

  updateAuthorInfo(
    authorID: number,
    authorDto: AuthorResponseDto
  ): Observable<AuthorResponseDto> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    var authorlink = this.updateAuthorEndPoint + '?aId=' + authorID;

    let result = this.api.put<AuthorResponseDto>(`${authorlink}`, authorDto, {
      headers,
    });

    return result;
  }

  deleteAuthor(authorID: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    var deleteLink = this.deleteAuthorEndPoint + '/' + authorID;

    let result = this.api.delete<any>(`${deleteLink}`, { headers });

    return result;
  }

  getAllBooksOfAuthor(authorName:string):Observable<BookResponseDto[]>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    var bookLink = this.bookAuthorEndPoint+'/'+authorName;

    let result = this.api.get<BookResponseDto[]>(`${bookLink}`,{headers});

    return result;
   
  }
}
