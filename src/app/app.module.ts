import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorCvComponent } from './generator-cv/generator-cv.component';
import { Cv1Component } from './template/cv1/cv1.component';
import { Cv2Component } from './template/cv2/cv2.component';
import { Cv3Component } from './template/cv3/cv3.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorCvComponent,
    Cv1Component,
    Cv2Component,
    Cv3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
