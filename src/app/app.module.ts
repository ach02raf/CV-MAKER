import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorCvComponent } from './generator-cv/generator-cv.component';
import { Cv1Component } from './template/cv1/cv1.component';
import { Cv2Component } from './template/cv2/cv2.component';
import { Cv3Component } from './template/cv3/cv3.component';
import { HomeComponent } from './home/home.component';
import { EditNavComponent } from './edit-nav/edit-nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Edit1Component } from './editeur/edit1/edit1.component';
import { Edit2Component } from './editeur/edit2/edit2.component';
import { Edit3Component } from './editeur/edit3/edit3.component';
import { Cv4Component } from './template/cv4/cv4.component';
import { Cv5Component } from './template/cv5/cv5.component';
import { Cv6Component } from './template/cv6/cv6.component';
import { Cv7Component } from './template/cv7/cv7.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { StepsComponent } from './steps/steps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cv8Component } from './template/cv8/cv8.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorCvComponent,
    Cv1Component,
    Cv2Component,
    Cv3Component,
    HomeComponent,
    EditNavComponent,
    NotFoundComponent,
    Edit1Component,
    Edit2Component,
    Edit3Component,
    Cv4Component,
    Cv5Component,
    Cv6Component,
    Cv7Component,
    NavbarComponent,
    LoginComponent,
    StepsComponent,
    Cv8Component,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
