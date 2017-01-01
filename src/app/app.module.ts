import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MaterialModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HairComponent } from './hair/hair.component';
import { ManicureComponent } from './manicure/manicure.component';

import 'hammerjs';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HairDetailsComponent } from './hair/hair-details/hair-details.component';
import { ManicureDetailsComponent } from './manicure/manicure-details/manicure-details.component';
import { SortingPipePipe } from './Pipes/sorting-pipe.pipe';

import { HairService } from './services/hair.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HairComponent,
    ManicureComponent,
    UserProfileComponent,
    HairDetailsComponent,
    ManicureDetailsComponent,
    SortingPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
  ],
  providers: [HairService],
  bootstrap: [AppComponent]
})
export class AppModule { }
