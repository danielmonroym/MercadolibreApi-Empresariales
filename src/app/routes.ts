
import { Routes } from '@angular/router';
import { ItemdetailsComponent } from './components/itemdetails/itemdetails.component';

import { SearchComponent } from './components/search/search.component'


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: SearchComponent },
  { path: 'itemdetails/:id',  component: ItemdetailsComponent },
  
  
];