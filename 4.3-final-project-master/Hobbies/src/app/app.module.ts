import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewHobbyComponent } from './components/new-hobby/new-hobby.component';
import { EditHobbyComponent } from './components/edit-hobby/edit-hobby.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'New',
    component: NewHobbyComponent
  },
  {
    path: 'Edit',
    component: EditHobbyComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewHobbyComponent,
    EditHobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
