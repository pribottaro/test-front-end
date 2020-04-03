import { SearchCarComponent } from './components/search-car/search-car.component';
import { SearchMotoComponent } from './components/search-moto/search-moto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SearchCarComponent },
  { path: 'search-car', component: SearchCarComponent },
  { path: 'search-moto', component: SearchMotoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
