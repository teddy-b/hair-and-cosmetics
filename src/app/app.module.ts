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
import { SortingPipe } from './Pipes/sorting-pipe.pipe';

import { HairService } from './services/hair.service';
import { ManicureService } from './services/manicure.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DecimalPipe } from './Pipes/decimal.pipe';
import { AboutComponent } from './about/about.component';
import { HighlightDirective } from './highlight.directive';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HairComponent,
    ManicureComponent,
    UserProfileComponent,
    HairDetailsComponent,
    ManicureDetailsComponent,
    LoginComponent,
    RegisterComponent
    SortingPipe,
    DecimalPipe,
    AboutComponent,
    HighlightDirective,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
  ],
  providers: [HairService, ManicureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
