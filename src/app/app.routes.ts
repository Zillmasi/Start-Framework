import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, title: 'Home' },
  { path: 'About', component: AboutComponent, title: 'About' },
  { path: 'Portfolio', component: PortfolioComponent, title: 'Portfolio' },
  { path: 'Contact', component: ContactComponent, title: 'Contact' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
