import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Cv1Component } from './template/cv1/cv1.component';
import { Cv2Component } from './template/cv2/cv2.component';
import { Cv3Component } from './template/cv3/cv3.component';
import { Portfolio1Component } from './template/portfolio1/portfolio1.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GeneratorCvComponent } from './generator-cv/generator-cv.component';
import { PortfolioReviweComponent } from './portfolio-reviwe/portfolio-reviwe.component';
import { GeneratorPortfoliComponent } from './generator-portfoli/generator-portfoli.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './login.guard';
import { NotloginGuard } from './notlogin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'inscription',
    component: RegisterComponent,
    canActivate: [LoginGuard],
  },

  {
    path: 'portfolio',
    canActivate: [NotloginGuard],
    children: [
      { path: 'edit', component: GeneratorPortfoliComponent },
      { path: 'portfolioreviw', component: PortfolioReviweComponent },
    ],
  },

  {
    path: 'cv',
    canActivate: [NotloginGuard],
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
