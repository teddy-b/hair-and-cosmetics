import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HairComponent } from './hair/hair.component';
import { HairDetailsComponent } from './hair/hair-details/hair-details.component';
import { ManicureComponent } from './manicure/manicure.component';
import { ManicureDetailsComponent } from './manicure/manicure-details/manicure-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hair', component: HairComponent },
  { path: 'hair/:id', component: HairDetailsComponent },
  { path: 'manicure', component: ManicureComponent },
  { path: 'manicure/:id', component: ManicureDetailsComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
