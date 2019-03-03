// Moduli Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Quando creo lo sharedModule sposta questi:
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componenti Terze Parti
import { NgxPageScrollModule } from 'ngx-page-scroll';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Miei Componenti
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';

// Variabili di Ambienti
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BannerComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
