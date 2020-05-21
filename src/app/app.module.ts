import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { GenreContainerComponent } from './components/genre-container/genre-container.component';
import { MovieComponent } from './components/movie/movie.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    GenreContainerComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
