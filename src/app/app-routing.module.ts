import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthcomponentComponent } from './Authorization/authcomponent/authcomponent.component';
import { LoginComponent } from './Authorization/login/login.component';
import { AuthorComponent } from './Author/author/author.component';
import { AddAuthorComponent } from './Author/add-author/add-author.component';
import { ListAllAuthorComponent } from './Author/list-all-author/list-all-author.component';
import { BookAuthorComponent } from './Author/book-author/book-author.component';
import { LibraryDashboardComponent } from './library-dashboard/library-dashboard.component';


const routes: Routes = [{path:"",component:LandingPageComponent},
{path:"auth",component:AuthcomponentComponent},
{path:"login", component:LoginComponent},
{path:"author",component:AuthorComponent},
{path:"add-author",component:AddAuthorComponent},
{path:"allAuthors",component:ListAllAuthorComponent},
{path:"bookByAuthor",component:BookAuthorComponent},
{path:"dashboard",component:LibraryDashboardComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
