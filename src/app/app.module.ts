import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthcomponentComponent } from './Authorization/authcomponent/authcomponent.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Authorization/login/login.component';
import { AuthorComponent } from './Author/author/author.component';
import { AddAuthorComponent } from './Author/add-author/add-author.component';
import { ListAllAuthorComponent } from './Author/list-all-author/list-all-author.component';
import { BookAuthorComponent } from './Author/book-author/book-author.component';
import { LibraryDashboardComponent } from './library-dashboard/library-dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AuthcomponentComponent,
    LoginComponent,
    AuthorComponent,
    AddAuthorComponent,
    ListAllAuthorComponent,
    BookAuthorComponent,
    LibraryDashboardComponent,


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
