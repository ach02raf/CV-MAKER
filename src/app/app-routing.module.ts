import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Cv1Component } from './template/cv1/cv1.component';
import { Cv2Component } from './template/cv2/cv2.component';
import { Cv3Component } from './template/cv3/cv3.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GeneratorCvComponent } from './generator-cv/generator-cv.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'cv',
    children: [
      {
        path: 'edit',
        children: [
          {
            path: 'information-personnelles',
            component: GeneratorCvComponent,
          },
        ],
      },
    ],
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
