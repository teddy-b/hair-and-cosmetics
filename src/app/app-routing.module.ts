import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HairComponent } from './hair/hair.component';
import { ManicureComponent } from './manicure/manicure.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hair', component: HairComponent },
  // { path: 'hair/:id', component: HairDetailComponent },
  { path: 'manicure', component: ManicureComponent },
  // { path: 'manicure/:id', component: ManicureDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}