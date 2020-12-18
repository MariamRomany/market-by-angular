import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import{FormsModule} from '@angular/forms';
import{AngularFireModule} from '@angular/fire';
import{AngularFirestoreModule ,FirestoreSettingsToken} from '@angular/fire/firestore';
import{AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFireStorageModule} from '@angular/fire/storage';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    GoodsComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBg21M-uEdhvEyGAk-JfU-f6_8Z8jl6VT8",
      authDomain: "market-cfe6f.firebaseapp.com",
      databaseURL: "https://market-cfe6f.firebaseio.com",
      projectId: "market-cfe6f",
      storageBucket: "market-cfe6f.appspot.com",
      messagingSenderId: "624148153250",
      appId: "1:624148153250:web:1e4ef93032a32f83"
    }),
    AngularFirestoreModule ,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: FirestoreSettingsToken,useValue :{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
