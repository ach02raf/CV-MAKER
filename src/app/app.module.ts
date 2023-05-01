import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorCvComponent } from './generator-cv/generator-cv.component';
import { Cv1Component } from './template/cv1/cv1.component';
import { Cv2Component } from './template/cv2/cv2.component';
import { Cv3Component } from './template/cv3/cv3.component';
import { EditeurComponent } from './editeur/editeur.component';
import { HomeComponent } from './home/home.component';
import { EditNavComponent } from './edit-nav/edit-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorCvComponent,
    Cv1Component,
    Cv2Component,
    Cv3Component,
    EditeurComponent,
    HomeComponent,
    EditNavComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
