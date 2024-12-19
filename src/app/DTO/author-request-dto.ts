export class AuthorResponseDto {
  authorId: number;
  authorName: string;
  contactNumber: string;
  awardsReceived: string;
  about: string;
  aadharNumber:string

  constructor(
    authorId: number,
    authorName: string,
    contactNumber: string,
    awardsReceived: string,
    about: string,
    aadharNumber:string
  ) {
    this.authorId = authorId;
    this.authorName = authorName;
    this.contactNumber = contactNumber;
    this.awardsReceived = awardsReceived;
    this.about = about;
    this.aadharNumber=aadharNumber;
  }
}
